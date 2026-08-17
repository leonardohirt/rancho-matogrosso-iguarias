import { createClient } from '@supabase/supabase-js';

// Variáveis de ambiente estritas sem fallback hardcoded
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY;

export default async function handler(req, res) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return res.status(500).json({ 
      success: false, 
      error: 'Servidor mal configurado: Variáveis SUPABASE_URL e SUPABASE_ANON_KEY ausentes no servidor.' 
    });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  // 1. GET - Buscar Produtos
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase.from('products').select('*');
      if (error) throw error;
      return res.status(200).json({ success: true, products: data || [] });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message, products: [] });
    }
  }

  // 2. POST - Sincronizar / Atualizar / Inserir Produtos
  if (req.method === 'POST') {
    try {
      const { products } = req.body || {};
      if (!products || !Array.isArray(products)) {
        return res.status(400).json({ success: false, error: 'Lista de produtos inválida.' });
      }

      const formatted = products.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category,
        categoryLabel: p.categoryLabel || p.category,
        price: parseFloat(p.price) || 0,
        originalPrice: p.originalPrice ? parseFloat(p.originalPrice) : null,
        description: p.description || '',
        image: p.image || '',
        tag: p.tag || '',
        tagClass: p.tagClass || ''
      }));

      const { data, error } = await supabase.from('products').upsert(formatted, { onConflict: 'id' });
      if (error) throw error;

      return res.status(200).json({ success: true, count: formatted.length, data });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  // 3. DELETE - Excluir Produto do Banco pelo ID
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query || {};
      if (!id) {
        return res.status(400).json({ success: false, error: 'ID do produto não informado.' });
      }

      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;

      return res.status(200).json({ success: true, message: `Produto ${id} excluído com sucesso.` });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  return res.status(405).json({ success: false, error: 'Método não permitido.' });
}
