import { products as defaultProducts } from '../data/products';

const LOCAL_STORAGE_KEY = 'rancho_products_custom_db_v4';
const DELETED_IDS_KEY = 'rancho_deleted_product_ids_v4';

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

function getDeletedProductIds() {
  try {
    const stored = localStorage.getItem(DELETED_IDS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.warn('Erro ao ler IDs deletados:', e);
  }
  return [];
}

function addDeletedProductId(id) {
  try {
    const deleted = getDeletedProductIds();
    if (!deleted.includes(id)) {
      const updated = [...deleted, id];
      localStorage.setItem(DELETED_IDS_KEY, JSON.stringify(updated));
    }
  } catch (e) {
    console.error('Erro ao salvar ID deletado:', e);
  }
}

/**
 * Busca os produtos através da Serverless Function protegida `/api/products`
 */
export async function fetchProductsFromDb() {
  const deletedIds = getDeletedProductIds();

  try {
    const res = await fetch('/api/products');
    const data = await res.json();

    if (data.success && data.products && data.products.length > 0) {
      const formatted = data.products
        .filter(row => !deletedIds.includes(row.id))
        .map(row => ({
          id: row.id,
          name: row.name,
          category: row.category,
          categoryLabel: row.category_label || row.categoryLabel || row.category,
          originalPrice: (row.original_price || row.originalPrice) ? parseFloat(row.original_price || row.originalPrice) : null,
          price: parseFloat(row.price),
          description: row.description || '',
          image: row.image || '/assets/morango_premium_colheita.jpg',
          tag: row.tag || '',
          tagClass: row.tag_class || row.tagClass || ''
        }));

      saveLocalProducts(formatted);
      return { products: formatted, isDbAvailable: true, error: null };
    } else {
      const local = getLocalProducts().filter(p => !deletedIds.includes(p.id));
      return { products: local, isDbAvailable: true, isDbEmpty: true, error: null };
    }
  } catch (err) {
    console.warn('Servidor API indisponível, usando cache local:', err.message);
    const local = getLocalProducts().filter(p => !deletedIds.includes(p.id));
    return { products: local, isDbAvailable: false, error: err.message };
  }
}

/**
 * Salva um único produto através da Serverless API protegida `/api/products`
 */
export async function saveProductToDb(product, allProducts) {
  const updatedAll = allProducts.map(p => p.id === product.id ? product : p);
  const existsInAll = allProducts.some(p => p.id === product.id);
  const finalList = existsInAll ? updatedAll : [product, ...allProducts];
  saveLocalProducts(finalList);

  try {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ products: [product] })
    });
    const data = await res.json();
    if (!data.success) {
      return { success: false, error: data.error, products: finalList };
    }
    return { success: true, products: finalList };
  } catch (err) {
    return { success: false, error: err.message, products: finalList };
  }
}

/**
 * Deleta um produto permanentemente através da Serverless API protegida `/api/products`
 */
export async function deleteProductFromDb(productId, allProducts) {
  addDeletedProductId(productId);
  const filtered = allProducts.filter(p => p.id !== productId);
  saveLocalProducts(filtered);

  try {
    await fetch(`/api/products?id=${encodeURIComponent(productId)}`, {
      method: 'DELETE'
    });
  } catch (err) {
    console.error('Erro ao deletar produto no backend:', err);
  }

  return { success: true, products: filtered };
}

/**
 * Restaura preços e descrições originais
 */
export function resetPricesAndDescriptionsOnly(currentProductsList) {
  const deletedIds = getDeletedProductIds();

  const resetList = currentProductsList
    .filter(p => !deletedIds.includes(p.id))
    .map(currentProd => {
      const defaultMatch = defaultProducts.find(d => d.id === currentProd.id);
      if (defaultMatch) {
        return {
          ...currentProd,
          price: defaultMatch.price,
          originalPrice: defaultMatch.originalPrice || null,
          description: defaultMatch.description
        };
      }
      return currentProd;
    });

  saveLocalProducts(resetList);
  syncAllProductsToDb(resetList);
  return resetList;
}

/**
 * Sincroniza em lote todos os produtos através da Serverless API protegida `/api/products`
 */
export async function syncAllProductsToDb(productsList) {
  const deletedIds = getDeletedProductIds();
  const activeProducts = productsList.filter(p => !deletedIds.includes(p.id));

  try {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ products: activeProducts })
    });

    const data = await res.json();
    if (!data.success) {
      return { success: false, error: data.error };
    }

    saveLocalProducts(activeProducts);
    return { success: true, count: activeProducts.length };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

function getLocalProducts() {
  const deletedIds = getDeletedProductIds();
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.filter(p => !deletedIds.includes(p.id));
      }
    }
  } catch (e) {
    console.warn(e);
  }
  return defaultProducts.filter(p => !deletedIds.includes(p.id));
}

function saveLocalProducts(list) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error(e);
  }
}
