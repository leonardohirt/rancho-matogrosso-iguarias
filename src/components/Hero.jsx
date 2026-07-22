import React from 'react';
import { Sparkles, Leaf, Award, Store, ShoppingCart, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content mx-auto">
          
          {/* Top Badges */}
          <div className="hero-badges">
            <span className="badge badge-gold-glass">
              <Sparkles size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> +8K Clientes Satisfeitos
            </span>
            <span className="badge badge-green-glass">
              <Leaf size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Frutas Frescas e Artesanais
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title-main">
            O MELHOR MORANGO <br />
            <span className="highlight-red">DO MUNDO</span> NA SUA MESA
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle-text">
            Gigante pela própria natureza! Morangos selecionados, frutas congeladas, 
            geleias 100% naturais (sem açúcar), licores artesanais e iguarias com puro carinho.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a href="#catalogo" className="btn btn-hero-catalog">
              <ShoppingCart size={18} /> Ver Catálogo Completo
            </a>
            <a href="https://wa.me/554288897545" target="_blank" rel="noreferrer" className="btn btn-hero-whatsapp">
              <MessageCircle size={18} /> Falar no WhatsApp
            </a>
          </div>

        </div>

        {/* 4 Cards com Efeito Glassmorphism em Posição 50/50 igual à foto */}
        <div className="hero-glass-cards-wrapper">
          <div className="hero-glass-grid">
            
            <div className="glass-card-item">
              <div className="glass-icon-box icon-gold">
                <Sparkles size={20} />
              </div>
              <div className="glass-card-text">
                <h4>Morangos Selecionados</h4>
                <p>Frutas médias e gigantes da nossa colheita</p>
              </div>
            </div>

            <div className="glass-card-item">
              <div className="glass-icon-box icon-green">
                <Leaf size={20} />
              </div>
              <div className="glass-card-text">
                <h4>Geleias Artesanais</h4>
                <p>100% naturais, sem aditivos e com pouco açúcar</p>
              </div>
            </div>

            <div className="glass-card-item">
              <div className="glass-icon-box icon-amber">
                <Award size={20} />
              </div>
              <div className="glass-card-text">
                <h4>Licores Especiais</h4>
                <p>Edições limitadas e sabores autênticos</p>
              </div>
            </div>

            <div className="glass-card-item">
              <div className="glass-icon-box icon-red">
                <Store size={20} />
              </div>
              <div className="glass-card-text">
                <h4>Rede de Retirada</h4>
                <p>Loja central e feiras em Guarapuava - Unicentro</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
