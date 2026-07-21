import React, { useState } from 'react';
import { products, categories } from '../data/products';
import { ShoppingBag, Eye } from 'lucide-react';

export default function Catalog({ onAddToCart, onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('destaque');

  const filteredProducts = products.filter(product => {
    if (activeCategory === 'destaque') {
      return product.featured === true;
    }
    return product.category === activeCategory;
  });

  return (
    <section className="catalog-section" id="catalogo">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Nossos Produtos</span>
          <h2 className="section-title">Catálogo Completo de Iguarias</h2>
          <p className="section-subtitle">Escolha os melhores produtos direto da colheita e adicione à sua sacola para fazer o pedido via WhatsApp!</p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs" style={{ marginBottom: '40px' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid - Fixed Grid Class! */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrapper" onClick={() => onQuickView(product)} style={{ cursor: 'pointer' }}>
                <span className={`product-badge ${product.tagClass}`}>{product.tag}</span>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                  onError={(e) => {
                    if (product.fallbackImage && e.target.src !== product.fallbackImage) {
                      e.target.src = product.fallbackImage;
                    }
                  }}
                />
                <button 
                  className="quick-view-btn" 
                  onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
                  aria-label="Visualizar produto"
                >
                  <Eye size={16} /> Espiar
                </button>
              </div>

              <div className="product-info">
                <span className="product-cat">{product.categoryLabel}</span>
                <h3 className="product-title" onClick={() => onQuickView(product)} style={{ cursor: 'pointer' }}>{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                
                <div className="product-footer">
                  <div className="product-price">
                    <span className="price-currency">R$</span>
                    <span className="price-val">{product.price.toFixed(2).replace('.', ',')}</span>
                  </div>

                  <button className="add-cart-btn" onClick={() => onAddToCart(product)}>
                    <ShoppingBag size={16} /> Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
