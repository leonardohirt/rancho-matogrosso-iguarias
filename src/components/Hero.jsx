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

          {/* Headline Principal: Rancho Mato Grosso na mesma fonte script Mr Dafoe */}
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

        </div>

        {/* Card de Selos e Pilares de Qualidade no Canto Direito (como estava antes) */}
        <div className="hero-pillars-corner-wrapper">
          <div className="pillars-dark-card">
            
            <div className="pillar-seal-item">
              <div className="seal-icon-circle green">
                <Sprout size={16} />
              </div>
              <div className="seal-info">
                <strong>Fruticultura Inteligente</strong>
                <span>Tecnologia & cultivo sustentável</span>
              </div>
            </div>

            <div className="pillar-seal-divider"></div>

            <div className="pillar-seal-item">
              <div className="seal-icon-circle gold">
                <ShieldCheck size={16} />
              </div>
              <div className="seal-info">
                <strong>Segurança Alimentar</strong>
                <span>Higiene & controle rigoroso</span>
              </div>
            </div>

            <div className="pillar-seal-divider"></div>

            <div className="pillar-seal-item">
              <div className="seal-icon-circle red">
                <CheckCircle2 size={16} />
              </div>
              <div className="seal-info">
                <strong>Sem Resíduos de Agrotóxicos</strong>
                <span>Morangos puros e saudáveis</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
