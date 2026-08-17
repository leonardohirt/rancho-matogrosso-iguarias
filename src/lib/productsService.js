import { supabase } from './supabase';
import { products as defaultProducts } from '../data/products';

const LOCAL_STORAGE_KEY = 'rancho_products_custom_db_v3';

export const PRODUCTS_TABLE_SQL = `
-- Script de Criação da Tabela de Produtos no Supabase
-- Acesse: https://supabase.com/dashboard/project/abdwsujajtnkpnorufin/sql

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  category_label TEXT,
  original_price NUMERIC,
  price NUMERIC NOT NULL,
  description TEXT,
  image TEXT,
  tag TEXT,
  tag_class TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Permitir leitura pública" ON products;
DROP POLICY IF EXISTS "Permitir tudo para todos" ON products;

CREATE POLICY "Permitir leitura pública" ON products FOR SELECT USING (true);
CREATE POLICY "Permitir tudo para todos" ON products FOR ALL USING (true) WITH CHECK (true);
`;

/**
 * Busca os produtos do Supabase (com fallback para localStorage e dataset padrão)
 */
export async function fetchProductsFromDb() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.warn('Tabela Supabase "products" ainda não existe ou indisponível:', error.message);
      return { products: getLocalProducts(), isDbAvailable: false, error: error.message };
    }

    if (data && data.length > 0) {
      // Mapeia colunas do Supabase para formato do App
      const formatted = data.map(row => ({
        id: row.id,
        name: row.name,
        category: row.category,
        categoryLabel: row.category_label || row.categoryLabel || row.category,
        originalPrice: row.original_price ? parseFloat(row.original_price) : null,
        price: parseFloat(row.price),
        description: row.description || '',
        image: row.image || '/assets/morango_premium_colheita.jpg',
        tag: row.tag || '',
        tagClass: row.tag_class || row.tagClass || ''
      }));

      // Atualiza cache local
      saveLocalProducts(formatted);
      return { products: formatted, isDbAvailable: true, error: null };
    } else {
      // Tabela vazia no Supabase: Retorna local mas indica que o DB está disponível
      return { products: getLocalProducts(), isDbAvailable: true, isDbEmpty: true, error: null };
    }
  } catch (err) {
    console.error('Erro na conexão com Supabase:', err);
    return { products: getLocalProducts(), isDbAvailable: false, error: err.message };
  }
}

/**
 * Salva um único produto no Supabase e atualiza o localStorage
 */
export async function saveProductToDb(product, allProducts) {
  // Salva no cache local imediatamente
  const updatedAll = allProducts.map(p => p.id === product.id ? product : p);
  const existsInAll = allProducts.some(p => p.id === product.id);
  const finalList = existsInAll ? updatedAll : [product, ...allProducts];
  saveLocalProducts(finalList);

  try {
    const rowToUpsert = {
      id: product.id,
      name: product.name,
      category: product.category,
      category_label: product.categoryLabel || product.category,
      original_price: product.originalPrice ? parseFloat(product.originalPrice) : null,
      price: parseFloat(product.price),
      description: product.description || '',
      image: product.image || '',
      tag: product.tag || '',
      tag_class: product.tagClass || '',
      updated_at: new Date().toISOString()
    };

    const { error } = await supabase.from('products').upsert(rowToUpsert);
    if (error) {
      console.warn('Erro ao salvar no Supabase:', error.message);
      return { success: false, error: error.message, products: finalList };
    }
    return { success: true, products: finalList };
  } catch (err) {
    console.error('Falha ao salvar produto no banco:', err);
    return { success: false, error: err.message, products: finalList };
  }
}

/**
 * Deleta um produto do Supabase e do localStorage
 */
export async function deleteProductFromDb(productId, allProducts) {
  const filtered = allProducts.filter(p => p.id !== productId);
  saveLocalProducts(filtered);

  try {
    const { error } = await supabase.from('products').delete().eq('id', productId);
    if (error) {
      console.warn('Erro ao deletar do Supabase:', error.message);
      return { success: false, error: error.message, products: filtered };
    }
    return { success: true, products: filtered };
  } catch (err) {
    return { success: false, error: err.message, products: filtered };
  }
}

/**
 * Sincroniza em lote todos os produtos locais com o Supabase (1-Click Upload)
 */
export async function syncAllProductsToDb(productsList) {
  try {
    const rows = productsList.map(product => ({
      id: product.id,
      name: product.name,
      category: product.category,
      category_label: product.categoryLabel || product.category,
      original_price: product.originalPrice ? parseFloat(product.originalPrice) : null,
      price: parseFloat(product.price),
      description: product.description || '',
      image: product.image || '',
      tag: product.tag || '',
      tag_class: product.tagClass || '',
      updated_at: new Date().toISOString()
    }));

    const { error } = await supabase.from('products').upsert(rows);
    if (error) {
      return { success: false, error: error.message };
    }

    saveLocalProducts(productsList);
    return { success: true, count: rows.length };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// Helpers de cache local
function getLocalProducts() {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn(e);
  }
  return defaultProducts;
}

function saveLocalProducts(list) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error(e);
  }
}
