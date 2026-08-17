import React from 'react';
import { MessageCircle } from 'lucide-react';

const InstagramIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle' }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Hero() {
  return (
    <section className="hero-pure-section" id="home">
      
      {/* Foto de Fundo da Estufa (Desfocada e Escura) */}
      <div className="hero-video-container">
        <div className="hero-photo-bg"></div>
        <div className="hero-video-overlay"></div>
      </div>

      <div className="container">
        {/* Conteúdo Centralizado */}
        <div className="hero-pure-centered-content">

          {/* Headline Principal */}
          <h1 className="hero-pure-title reveal">
            Rancho <span className="script-italic-red">Matogrosso</span>
          </h1>

          {/* Subtítulo Conciso */}
          <p className="hero-pure-desc reveal">
            Fruticultura Inteligente
          </p>

          {/* Botões em Formato Pílula */}
          <div className="hero-pure-buttons reveal">
            <a href="#catalogo" className="btn-pure-red">
              VER CATÁLOGO
            </a>
            <a href="https://wa.me/554288897545" target="_blank" rel="noreferrer" className="btn-pure-outline">
              <MessageCircle size={16} /> FALAR NO WHATSAPP
            </a>
          </div>

          {/* Card com QR Code do Instagram Oficial */}
          <div className="hero-trust-bar reveal">
            <a 
              href="https://instagram.com/ranchomatogrossoiguarias" 
              target="_blank" 
              rel="noreferrer" 
              className="qr-card-link"
              title="Acessar Instagram @ranchomatogrossoiguarias"
            >
              <div className="qr-img-box">
                <img src="/assets/qr_code_instagram.png" alt="QR Code Instagram @ranchomatogrossoiguarias" />
              </div>
              <div className="qr-card-info">
                <span className="qr-tag"><InstagramIcon size={13} /> INSTAGRAM OFICIAL</span>
                <span className="qr-handle">@ranchomatogrossoiguarias</span>
                <span className="qr-hint">Escaneie ou toque para abrir</span>
              </div>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
