import { createClient } from '@supabase/supabase-js';

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

  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return res.status(200).json({ success: true, reviews: data || [] });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message, reviews: [] });
    }
  }

  if (req.method === 'POST') {
    try {
      const { name, city, rating, product, comment } = req.body || {};
      if (!name || !comment) {
        return res.status(400).json({ success: false, error: 'Campos obrigatórios ausentes.' });
      }

      const { data, error } = await supabase.from('reviews').insert([{
        name,
        city: city || 'Guarapuava - PR',
        rating: parseInt(rating) || 5,
        product: product || 'Morango Premium',
        comment
      }]);

      if (error) throw error;
      return res.status(200).json({ success: true, data });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  return res.status(405).json({ success: false, error: 'Método não permitido.' });
}
