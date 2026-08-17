import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-pure-section" id="home">
      
      {/* Foto de Fundo da Estufa (Desfocada e Escura) */}
      <div className="hero-video-container">
        <div className="hero-photo-bg"></div>
        <div className="hero-video-overlay"></div>
      </div>

      <div className="container hero-layout-container">
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

        </div>

        {/* Card do QR Code do Instagram Fiel à Imagem no Canto Direito */}
        <div className="hero-qr-corner-wrapper reveal">
          <a 
            href="https://instagram.com/ranchomatogrossoiguarias" 
            target="_blank" 
            rel="noreferrer" 
            className="qr-dark-card-link"
            title="Siga nosso Instagram @ranchomatogrossoiguarias"
          >
            <div className="qr-dark-img-box">
              <img src="/assets/qr_code_instagram.png" alt="QR Code Instagram @ranchomatogrossoiguarias" />
            </div>
            <div className="qr-dark-card-info">
              <span className="qr-red-tag">SIGA NOSSO</span>
              <h4 className="qr-serif-title">Instagram</h4>
              <span className="qr-handle-text">@ranchomatogrossoiguarias</span>
              <p className="qr-sub-desc">
                Escaneie o QR Code<br />e acompanhe nosso dia a dia!
              </p>
            </div>
          </a>
        </div>

      </div>

    </section>
  );
}
