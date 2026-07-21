import React from 'react';
import { Sparkles, Leaf, Award, Store, ShoppingBag, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content mx-auto">
          <div className="hero-badges">
            <span className="badge badge-gold"><Award size={14} /> +8.000 Clientes Satisfeitos</span>
            <span className="badge badge-green"><Leaf size={14} /> Direto da Colheita</span>
          </div>

          <h1 className="hero-title">
            O Melhor Morango <br />
            <span>Do Mundo</span> na Sua Mesa
          </h1>

          <p className="hero-description">
            Gigante pela própria natureza! Morangos selecionados, frutas congeladas, geleias 
            tradicionais e 0% açúcar, licores artesanais e iguarias produzidas com o mais puro cuidado.
          </p>

          <div className="hero-buttons">
            <a href="#catalogo" className="btn btn-primary btn-lg">
              <ShoppingBag size={20} /> Ver Catálogo Completo
            </a>
            <a href="https://wa.me/554288897545" target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">
              <MessageCircle size={20} /> Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Highlights Bar Straddling 50/50 between Hero dark background and Catalog white background */}
        <div className="hero-highlights-wrapper">
          <div className="hero-highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon icon-gold">
                <Sparkles size={22} />
              </div>
              <div className="highlight-text">
                <h4>Morangos Selecionados</h4>
                <p>Frutas frescas do tamanho médio ao gigante (Red Gold)</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon icon-green">
                <Leaf size={22} />
              </div>
              <div className="highlight-text">
                <h4>Geleias 100% Naturais</h4>
                <p>Opções tradicionais e 0% açúcar sem conservantes</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon icon-amber">
                <Award size={22} />
              </div>
              <div className="highlight-text">
                <h4>Licores Especiais</h4>
                <p>Edições numeradas anualmente (Morango, Butiá, Kinkã)</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon icon-red">
                <Store size={22} />
              </div>
              <div className="highlight-text">
                <h4>3 Pontos de Retirada</h4>
                <p>Loja Centro e Feiras Agroecológicas na Unicentro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
