import React from 'react';
import { ShoppingBag, MessageCircle, ArrowRight, Heart, Award, Sparkles, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-authentic-section" id="home">
      
      {/* Elemento de iluminação ambiente no fundo */}
      <div className="hero-bg-glow"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Badge Editorial de Topo */}
        <div className="hero-editorial-badge">
          <Sparkles size={13} color="#C62828" />
          <span>DO NOSSO CAMPO • DESDE GUARAPUAVA</span>
          <Sparkles size={13} color="#C62828" />
        </div>

        {/* Título Editorial Único */}
        <h1 className="hero-editorial-headline">
          Iguarias Cultivadas com <br className="desktop-only" />
          <span className="italic-accent">Amor & Tradição</span> no Rancho
        </h1>

        <p className="hero-editorial-subtext">
          Morangos gigantes selecionados a dedo, geleias artesanais sem açúcar, 
          licores raros e cogumelos frescos cultivados com carinho pela família Matogrosso.
        </p>

        {/* Botões de Ação Principais */}
        <div className="hero-editorial-actions">
          <a href="#catalogo" className="btn btn-editorial-primary">
            <ShoppingBag size={18} /> Explorar Nosso Catálogo
          </a>
          <a href="https://wa.me/554288897545" target="_blank" rel="noreferrer" className="btn btn-editorial-whatsapp">
            <MessageCircle size={18} /> Pedir pelo WhatsApp
          </a>
        </div>

        {/* 3 Cards de Destaques dos Produtos do Rancho */}
        <div className="hero-cards-showcase">
          
          <div className="showcase-card">
            <div className="showcase-img-wrap">
              <span className="showcase-tag">Colheita do Dia</span>
              <img src="/assets/morango_red_gold_oficial.jpg" alt="Morango Red Gold" />
            </div>
            <div className="showcase-content">
              <h3>Morangos Red Gold</h3>
              <p>Frutas gigantes e docinhas colhidas no dia</p>
              <a href="#catalogo" className="showcase-link">Ver Opções <ArrowRight size={14} /></a>
            </div>
          </div>

          <div className="showcase-card highlight-center">
            <div className="showcase-img-wrap">
              <span className="showcase-tag tag-gold">Receita de 1973</span>
              <img src="/assets/sq_geleia_artesanal_1784593733518.jpg" alt="Geleia de Morango Artesanal" />
            </div>
            <div className="showcase-content">
              <h3>Geleias 100% Naturais</h3>
              <p>Zero adição de açúcares ou conservantes</p>
              <a href="#catalogo" className="showcase-link">Ver Sabores <ArrowRight size={14} /></a>
            </div>
          </div>

          <div className="showcase-card">
            <div className="showcase-img-wrap">
              <span className="showcase-tag tag-dark">Edição Limitada</span>
              <img src="/assets/licor_butia_red_john.jpg" alt="Licor de Butiá Red John" />
            </div>
            <div className="showcase-content">
              <h3>Licores & Iguarias</h3>
              <p>Licores envelhecidos e cogumelos frescos</p>
              <a href="#catalogo" className="showcase-link">Conhecer <ArrowRight size={14} /></a>
            </div>
          </div>

        </div>

        {/* Faixa de Confiança na Base */}
        <div className="hero-trust-ribbon">
          <div className="ribbon-item">
            <Award size={18} color="#C62828" />
            <span>1ª Loja Especializada em Morangos do Brasil</span>
          </div>
          <div className="ribbon-divider">•</div>
          <div className="ribbon-item">
            <Heart size={18} color="#C62828" />
            <span>+8.000 Clientes Apoiando a Produção Familiar</span>
          </div>
          <div className="ribbon-divider">•</div>
          <div className="ribbon-item">
            <MapPin size={18} color="#C62828" />
            <span>Retirada no Centro e Feiras da Unicentro</span>
          </div>
        </div>

      </div>
    </section>
  );
}
