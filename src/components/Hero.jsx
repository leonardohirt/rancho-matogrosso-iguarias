import React from 'react';
import { MessageCircle, Star, Sprout, Leaf, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-pure-section" id="home">
      <div className="container">
        <div className="hero-pure-grid">
          
          {/* LADO ESQUERDO: Conteúdo e Textos (Fiel à Foto de Referência) */}
          <div className="hero-pure-content">
            
            {/* Top Badge */}
            <div className="hero-pure-badge">
              <Star size={13} fill="#991B1B" color="#991B1B" />
              <span>+8.000 CLIENTES SATISFEITOS</span>
            </div>

            {/* Headline Principal */}
            <h1 className="hero-pure-title">
              O Sabor Mais Puro <br />
              <span className="script-italic-red">da Terra</span> na Sua <br />
              Mesa
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
                <Sprout size={16} color="#991B1B" />
                <span>COLHEITA DIÁRIA</span>
              </div>
              <div className="feature-pure-item">
                <Leaf size={16} color="#991B1B" />
                <span>100% ARTESANAL</span>
              </div>
              <div className="feature-pure-item">
                <Truck size={16} color="#991B1B" />
                <span>RETIRADA RÁPIDA</span>
              </div>
            </div>

          </div>

          {/* LADO DIREITO: Card de Foto Arredondado com os Morangos Selecionados do Rancho */}
          <div className="hero-pure-visual">
            <div className="hero-card-frame">
              <img 
                src="/assets/morango_red_gold_oficial.jpg" 
                alt="Colheita de Morangos Selecionados do Rancho Matogrosso" 
                className="hero-card-img"
              />
            </div>
            
            {/* Garrafa de Licor Artesanal em Camada Posterior */}
            <div className="hero-licor-bg-accent">
              <img src="/assets/licor_butia_red_john.jpg" alt="Licor Artesanal Red John" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
