import React, { useState } from 'react';
import { products, categories } from '../data/products';
import { MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '../lib/useIsMobile';

export default function Catalog({ products: propProducts, onAddToCart, onQuickView }) {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState('morangos');

  // Estados de expansão para telas Mobile
  const [showAllCategoriesMobile, setShowAllCategoriesMobile] = useState(false);
  const [showAllProductsMobile, setShowAllProductsMobile] = useState(false);

  const allProducts = propProducts || products;
  
  // Filtro de produtos que aceita tanto a categoria unificada 'geleias' quanto legadas 'geleias-tradicionais' / 'geleias-zero'
  const filteredProducts = allProducts.filter(product => {
    if (activeCategory === 'geleias') {
      return (
        product.category === 'geleias' || 
        product.category === 'geleias-tradicionais' || 
        product.category === 'geleias-zero'
      );
    }
    return product.category === activeCategory;
  });

  // No mobile: exibe apenas 3 seções (categorias) inicialmente se não tiver expandido
  const displayedCategories = (isMobile && !showAllCategoriesMobile) 
    ? categories.slice(0, 3) 
    : categories;

  // No mobile: exibe apenas 4 itens por categoria inicialmente se não tiver expandido
  const displayedProducts = (isMobile && !showAllProductsMobile) 
    ? filteredProducts.slice(0, 4) 
    : filteredProducts;

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    setShowAllProductsMobile(false); // Reseta para exibir os 4 primeiros produtos na nova categoria
  };

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

        {/* Abas de Categorias / Seções com limite de 3 no mobile */}
        <div className="catalog-ref-tabs-container">
          <div className="catalog-ref-tabs">
            {displayedCategories.map(cat => (
              <button
                key={cat.id}
                className={`cat-ref-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat.id)}
              >
                {cat.label}
              </button>
            ))}

            {/* Botão para Expandir/Recolher Seções no Mobile */}
            {isMobile && !showAllCategoriesMobile && categories.length > 3 && (
              <button
                className="cat-ref-btn ver-mais-secoes-btn"
                onClick={() => setShowAllCategoriesMobile(true)}
              >
                + Ver mais seções ({categories.length - 3}) <ChevronDown size={14} />
              </button>
            )}

            {isMobile && showAllCategoriesMobile && (
              <button
                className="cat-ref-btn ver-menos-secoes-btn"
                onClick={() => setShowAllCategoriesMobile(false)}
              >
                Ver menos seções <ChevronUp size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Grid de Cards */}
        <div className="catalog-ref-grid">
          {displayedProducts.map(product => (
            <div key={product.id} className="catalog-ref-card">
              
              {/* Imagem Quadrada (1:1) com Badge */}
              <div className="card-ref-img-container" onClick={() => onQuickView(product)}>
                {product.tag && (
                  <span className={`card-ref-badge ${product.tagClass}`}>
                    {product.tag}
                  </span>
                )}

                <img src={product.image} alt={product.name} loading="lazy" />
              </div>

              {/* Corpo do Card */}
              <div className="card-ref-body">
                <h3 className="card-ref-title" onClick={() => onQuickView(product)}>
                  {product.name}
                </h3>
                <p className="card-ref-desc">
                  {product.description}
                </p>

                {/* Rodapé com Preço e Botão PEDIR */}
                <div className="card-ref-footer">
                  {product.category === 'queijos' || product.isPricePerPiece || product.price === 0 ? (
                    <div className="card-ref-price-piece">
                      <span className="piece-tag">Vendido por Peça</span>
                      <span className="piece-sub">Consulte valor no WhatsApp</span>
                    </div>
                  ) : (
                    <div className="card-ref-price">
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="card-ref-original-price">
                          De R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                      <div className="card-ref-current-price">
                        <span className="currency">R$</span>
                        <span className="val">{product.price.toFixed(2).replace('.', ',')}</span>
                      </div>
                    </div>
                  )}

                  <button className="card-ref-pedir-btn" onClick={() => onAddToCart(product)}>
                    <MessageCircle size={15} /> {product.category === 'queijos' || product.isPricePerPiece ? 'CONSULTAR' : 'PEDIR'}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Botão Ver Mais Produtos para Mobile quando a categoria tem mais de 4 itens */}
        {isMobile && filteredProducts.length > 4 && (
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            {!showAllProductsMobile ? (
              <button 
                className="btn-ver-mais-produtos-mobile"
                onClick={() => setShowAllProductsMobile(true)}
              >
                VER MAIS PRODUTOS (+{filteredProducts.length - 4}) <ChevronDown size={18} />
              </button>
            ) : (
              <button 
                className="btn-ver-mais-produtos-mobile outline"
                onClick={() => setShowAllProductsMobile(false)}
              >
                VER MENOS PRODUTOS <ChevronUp size={18} />
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
