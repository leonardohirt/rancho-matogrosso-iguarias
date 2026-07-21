import React from 'react';
import { Star, Leaf, Store, MessageCircle, Sparkles, Wine, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-badges">
          <span className="badge badge-gold"><Star size={14} /> +8.000 Clientes Satisfeitos</span>
          <span className="badge badge-green"><Leaf size={14} /> Direto da Colheita</span>
        </div>
        <h1 className="hero-title">O Melhor Morango <br /><span>Do Mundo</span> na Sua Mesa</h1>
        <p className="hero-description">
          Gigante pela própria natureza! Morangos selecionados, frutas congeladas, geleias tradicionais e 0% açúcar, licores artesanais e iguarias produzidas com o mais puro cuidado.
        </p>

        <div className="hero-buttons">
          <a href="#catalogo" className="btn btn-primary btn-lg"><Store size={20} /> Ver Catálogo Completo</a>
          <a href="https://wa.me/554288897545?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida." target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">
            <MessageCircle size={20} /> Falar no WhatsApp
          </a>
        </div>

        <div className="hero-highlights-grid">
          <div className="highlight-item">
            <div className="highlight-icon"><Sparkles size={24} /></div>
            <div>
              <h4>Morangos Selecionados</h4>
              <p>Frutas frescas do tamanho médio ao gigante (Red Gold)</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon"><Leaf size={24} /></div>
            <div>
              <h4>Geleias 100% Naturais</h4>
              <p>Opções tradicionais e 0% açúcar sem conservantes</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon"><Wine size={24} /></div>
            <div>
              <h4>Licores Especiais</h4>
              <p>Edições numeradas anualmente (Morango, Butiá, Kinkã)</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon"><Truck size={24} /></div>
            <div>
              <h4>3 Pontos de Retirada</h4>
              <p>Loja Centro e Feiras Agroecológicas na Unicentro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
