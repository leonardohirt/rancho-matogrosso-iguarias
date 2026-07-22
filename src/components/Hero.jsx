import React from 'react';
import { ShoppingCart, MessageCircle, Sparkles, Leaf, Award, Store } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-classic-section" id="home">
      <div className="container">
        
        {/* Conteúdo Centralizado */}
        <div className="hero-classic-content text-center">
          
          {/* Badges do Topo */}
          <div className="hero-classic-badges">
            <span className="classic-badge gold">
              <Sparkles size={13} /> +8.000 Clientes Satisfeitos
            </span>
            <span className="classic-badge green">
              <Leaf size={13} /> Direto da Colheita
            </span>
          </div>

          {/* Título Principal Fiel ao Print */}
          <h1 className="hero-classic-title">
            O Melhor Morango <br />
            <span className="title-red-accent">Do Mundo</span> na Sua Mesa
          </h1>

          {/* Subtítulo Conciso e Limpo */}
          <p className="hero-classic-subtitle">
            Gigante pela própria natureza! Morangos selecionados, frutas congeladas, 
            geleias 100% naturais e iguarias produzidas com o mais puro cuidado.
          </p>

          {/* Botões de Ação */}
          <div className="hero-classic-buttons">
            <a href="#catalogo" className="btn btn-classic-catalog">
              <ShoppingCart size={18} /> Ver Catálogo Completo
            </a>
            <a href="https://wa.me/554288897545" target="_blank" rel="noreferrer" className="btn btn-classic-whatsapp">
              <MessageCircle size={18} /> Falar no WhatsApp
            </a>
          </div>

        </div>

        {/* Barra Escura Única de Destaques no Rodapé (50% sobreposta à próxima seção) */}
        <div className="hero-classic-bar-wrapper">
          <div className="hero-classic-bar">
            
            <div className="classic-bar-item">
              <div className="bar-icon-box gold">
                <Sparkles size={18} />
              </div>
              <div className="bar-item-text">
                <h4>Morangos Selecionados</h4>
                <p>Frutas frescas do tamanho médio ao gigante (Red Gold)</p>
              </div>
            </div>

            <div className="classic-bar-item">
              <div className="bar-icon-box green">
                <Leaf size={18} />
              </div>
              <div className="bar-item-text">
                <h4>Geleias 100% Naturais</h4>
                <p>Opções tradicionais e 0% açúcar sem conservantes</p>
              </div>
            </div>

            <div className="classic-bar-item">
              <div className="bar-icon-box amber">
                <Award size={18} />
              </div>
              <div className="bar-item-text">
                <h4>Licores Especiais</h4>
                <p>Edições numeradas anualmente (Morango, Butiá, Kinkã)</p>
              </div>
            </div>

            <div className="classic-bar-item">
              <div className="bar-icon-box red">
                <Store size={18} />
              </div>
              <div className="bar-item-text">
                <h4>3 Pontos de Retirada</h4>
                <p>Loja Centro e Feiras Agroecológicas na Unicentro</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
