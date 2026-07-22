import React, { useState } from 'react';
import { products, categories } from '../data/products';
import { MessageCircle, Eye } from 'lucide-react';

export default function Catalog({ onAddToCart, onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('morangos');

  const filteredProducts = products.filter(product => product.category === activeCategory);

  return (
    <section className="catalog-section" id="catalogo">
      <div className="container">
        
        {/* Header no estilo da referência */}
        <div className="section-header text-center">
          <span className="section-tag-ref">NOSSA COLHEITA</span>
          <h2 className="section-title-ref">Nosso Catálogo</h2>
          <p className="section-subtitle-ref">
            Explore nossa seleção premium. Clique no botão de pedido de qualquer item para abrir o WhatsApp com a mensagem pronta.
          </p>
        </div>

        {/* Abas de Categorias com o visual da imagem de referência */}
        <div className="catalog-ref-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`cat-ref-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de 4 Cards Fiel ao Design Enviado */}
        <div className="catalog-ref-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="catalog-ref-card">
              
              {/* Imagem Quadrada (1:1) com Badge e Botão Espiar */}
              <div className="card-ref-img-container" onClick={() => onQuickView(product)}>
                {product.tag && (
                  <span className={`card-ref-badge ${product.tagClass}`}>
                    {product.tag}
                  </span>
                )}

                <img src={product.image} alt={product.name} loading="lazy" />

                <button 
                  className="card-ref-quick-view" 
                  onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
                  aria-label="Visualizar produto"
                >
                  <Eye size={14} /> Espiar
                </button>
              </div>

              {/* Corpo do Card */}
              <div className="card-ref-body">
                <h3 className="card-ref-title" onClick={() => onQuickView(product)}>
                  {product.name}
                </h3>
                <p className="card-ref-desc">
                  {product.description}
                </p>

                {/* Rodapé com Preço e Botão PEDIR (Vinho/Vermelho) */}
                <div className="card-ref-footer">
                  <div className="card-ref-price">
                    <span className="currency">R$</span>
                    <span className="val">{product.price.toFixed(2).replace('.', ',')}</span>
                  </div>

                  <button className="card-ref-pedir-btn" onClick={() => onAddToCart(product)}>
                    <MessageCircle size={15} /> PEDIR
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
