import React from 'react';
import { MessageCircle, Sprout, Leaf, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-pure-section" id="home">
      
      {/* Vídeo de Fundo em Alta Qualidade (Horizontal) */}
      <div className="hero-video-container">
        <video 
          className="hero-bg-video" 
          autoPlay 
          loop 
          muted 
          playsInline 
          src="/assets/morango-video.mp4"
        />
        <div className="hero-video-overlay"></div>
      </div>

      <div className="container">
        {/* Conteúdo Centralizado sobre o Vídeo de Fundo */}
        <div className="hero-pure-centered-content">

          {/* Headline Principal */}
          <h1 className="hero-pure-title">
            O Sabor Mais Puro <br />
            <span className="script-italic-red">da Terra</span> na Sua Mesa
          </h1>

          {/* Subtítulo Conciso */}
          <p className="hero-pure-desc">
            Cultivados com respeito ao ciclo da natureza e colhidos no auge da doçura. Descubra o verdadeiro morango premium do Rancho Matogrosso.
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

          {/* Faixa de Ícones no Rodapé */}
          <div className="hero-pure-features">
            <div className="feature-pure-item">
              <Sprout size={16} color="#EF4444" />
              <span>COLHEITA DIÁRIA</span>
            </div>
            <div className="feature-pure-item">
              <Leaf size={16} color="#EF4444" />
              <span>100% ARTESANAL</span>
            </div>
            <div className="feature-pure-item">
              <Truck size={16} color="#EF4444" />
              <span>RETIRADA RÁPIDA</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
