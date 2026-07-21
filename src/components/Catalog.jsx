import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Search, X, Plus, Leaf, ShoppingBag } from 'lucide-react';

export default function Catalog({ onAddToCart, onOpenModal }) {
  const [currentCategory, setCurrentCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = currentCategory === 'todos' || p.category === currentCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="catalog-section" id="catalogo">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag"><Leaf size={16} /> Nossos Produtos</span>
          <h2 className="section-title">Catálogo Completo de Iguarias</h2>
          <p className="section-subtitle">Escolha os melhores produtos direto da colheita e adicione à sua sacola para fazer o pedido via WhatsApp!</p>
        </div>

        {/* Controls */}
        <div className="catalog-controls">
          <div className="search-box">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Buscar por morangos, geleias, licores, cogumelos..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                <X size={18} />
              </button>
            )}
          </div>

          <div className="category-tabs">
            <button className={`tab-btn ${currentCategory === 'todos' ? 'active' : ''}`} onClick={() => setCurrentCategory('todos')}>
              Todos os Produtos
            </button>
            <button className={`tab-btn ${currentCategory === 'morangos-frescos' ? 'active' : ''}`} onClick={() => setCurrentCategory('morangos-frescos')}>
              🍓 Morangos Frescos
            </button>
            <button className={`tab-btn ${currentCategory === 'congelados' ? 'active' : ''}`} onClick={() => setCurrentCategory('congelados')}>
              🫐 Congelados & Frutas
            </button>
            <button className={`tab-btn ${currentCategory === 'geleias' ? 'active' : ''}`} onClick={() => setCurrentCategory('geleias')}>
              🍯 Geleias Artesanais
            </button>
            <button className={`tab-btn ${currentCategory === 'licores' ? 'active' : ''}`} onClick={() => setCurrentCategory('licores')}>
              🍾 Licores Especiais
            </button>
            <button className={`tab-btn ${currentCategory === 'especiais' ? 'active' : ''}`} onClick={() => setCurrentCategory('especiais')}>
              🌱 Especiais & Cogumelos
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-img-wrapper" onClick={() => onOpenModal(product)} style={{ cursor: 'pointer' }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    onError={(e) => {
                      if (product.fallbackImage) {
                        e.target.onerror = null;
                        e.target.src = product.fallbackImage;
                      }
                    }}
                  />
                  <span className={`product-tag-badge ${product.tagClass}`}>{product.tag}</span>
                </div>

                <div className="product-body">
                  <span className="product-category-name">{product.categoryLabel}</span>
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">{product.description}</p>

                  <div className="product-footer">
                    <div className="product-price">
                      <span className="price-currency">Valor:</span>
                      <span className="price-value">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                    </div>

                    <button className="add-cart-btn" onClick={() => onAddToCart(product)} title="Adicionar à Sacola">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <ShoppingBag className="empty-icon" size={60} />
            <h3>Nenhum produto encontrado</h3>
            <p>Tente buscar por outro termo ou selecione uma categoria diferente.</p>
            <button className="btn btn-secondary" style={{ marginTop: '16px' }} onClick={() => { setSearchQuery(''); setCurrentCategory('todos'); }}>
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
