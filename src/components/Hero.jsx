import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-pure-section" id="home">
      
      {/* Foto de Fundo da Estufa */}
      <div className="hero-video-container">
        <div className="hero-photo-bg"></div>
        <div className="hero-video-overlay"></div>
      </div>

      <div className="container hero-layout-container">
        {/* Conteúdo Centralizado */}
        <div className="hero-pure-centered-content">

          {/* Headline Principal */}
          <h1 className="hero-pure-title">
            Rancho <span className="script-italic-red">Matogrosso</span>
          </h1>

          {/* Subtítulo Conciso */}
          <p className="hero-pure-desc">
            Fruticultura Inteligente
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

        </div>
      </div>

    </section>
  );
}
