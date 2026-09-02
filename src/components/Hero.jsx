import React from 'react';
import { MessageCircle, Sprout, ShieldCheck, CheckCircle2 } from 'lucide-react';

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

          {/* Barra Horizontal Abaixo dos Botões com os 3 Pilares */}
          <div className="hero-features-bar">
            <div className="feature-bar-item">
              <Sprout size={16} className="feature-icon green" />
              <span>FRUTICULTURA INTELIGENTE</span>
            </div>

            <div className="feature-bar-item">
              <ShieldCheck size={16} className="feature-icon gold" />
              <span>SEGURANÇA ALIMENTAR</span>
            </div>

            <div className="feature-bar-item">
              <CheckCircle2 size={16} className="feature-icon red" />
              <span>SEM RESÍDUOS DE AGROTÓXICOS</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
