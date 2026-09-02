import React from 'react';
import { MessageCircle, Sparkles, Leaf, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-pure-section" id="home">
      
      {/* Vídeo de Fundo da Estufa - Claro e Luminoso */}
      <div className="hero-video-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video-element"
        >
          <source src="/assets/morango-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay lighter"></div>
      </div>

      <div className="container hero-layout-container">
        {/* Conteúdo Centralizado */}
        <div className="hero-pure-centered-content">

          {/* Headline Principal: Rancho Mato Grosso */}
          <h1 className="hero-pure-title script-italic-red">
            Rancho Mato Grosso
          </h1>

          {/* Subtítulo Oficial / Slogan */}
          <p className="hero-pure-desc slogan-highlight">
            GIGANTE PELA PRÓPRIA NATUREZA
          </p>

          {/* Botões em Formato Pílula */}
          <div className="hero-pure-buttons">
            <a href="#catalogo" className="btn-pure-red">
              VER CATÁLOGO
            </a>
            <a href="https://wa.me/554288897545" target="_blank" rel="noreferrer" className="btn-pure-outline">
              <MessageCircle size={16} /> FALAR NO WHATSAPP
            </a>
          </div>

          {/* Barra Horizontal de Destaques: COLHEITA DIÁRIA | 100% ARTESANAL | RETIRADA RÁPIDA */}
          <div className="hero-features-bar">
            <div className="feature-bar-item">
              <Sparkles size={16} className="feature-icon" />
              <span>COLHEITA DIÁRIA</span>
            </div>

            <div className="feature-bar-item">
              <Leaf size={16} className="feature-icon" />
              <span>100% ARTESANAL</span>
            </div>

            <div className="feature-bar-item">
              <Truck size={16} className="feature-icon" />
              <span>RETIRADA RÁPIDA</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
