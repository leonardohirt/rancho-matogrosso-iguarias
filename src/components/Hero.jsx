import React from 'react';
import { ShoppingCart, MessageCircle, Star, Sparkles, Leaf, Award, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section-new" id="home">
      <div className="container">
        
        {/* Grid Split de 2 Colunas */}
        <div className="hero-split-grid">
          
          {/* Coluna 1: Textos, Título e CTAs */}
          <div className="hero-text-col">
            
            <div className="hero-top-tag">
              <span className="live-dot"></span>
              <Sparkles size={14} color="#C62828" />
              <span>Colheita Diária & Produção Artesanal</span>
            </div>

            <h1 className="hero-title-new">
              O Sabor Autêntico do <span className="highlight-red">Campo</span> Directo na Sua Mesa
            </h1>

            <p className="hero-desc-new">
              Morangos gigantes selecionados a dedo, geleias 100% naturais sem adição de açúcar, 
              licores finos artesanais e cogumelos frescos de cultivo agroecológico em Guarapuava.
            </p>

            {/* Botões de Ação Principais */}
            <div className="hero-cta-group">
              <a href="https://wa.me/554288897545" target="_blank" rel="noreferrer" className="btn btn-wa-main">
                <MessageCircle size={18} /> Pedir pelo WhatsApp
              </a>
              <a href="#catalogo" className="btn btn-cat-secondary">
                Ver Produtos <ArrowRight size={16} />
              </a>
            </div>

            {/* Prova Social / Confiança */}
            <div className="hero-trust-bar">
              <div className="trust-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <div className="trust-text">
                <strong>4.9 / 5.0</strong> — Mais de 8.000 clientes satisfeitos em Guarapuava e região
              </div>
            </div>

          </div>

          {/* Coluna 2: Card Ilustrativo com Foto Destaque e Badges Flutuantes */}
          <div className="hero-visual-col">
            <div className="hero-image-card">
              
              {/* Foto Principal do Rancho */}
              <img 
                src="/assets/morango_premium_colheita.jpg" 
                alt="Colheita de Morangos Selecionados do Rancho Matogrosso" 
                className="hero-main-photo"
              />

              {/* Tag Flutuante Topo Direita */}
              <div className="floating-badge badge-top-right">
                <div className="badge-icon-box">
                  <Award size={18} color="#D97706" />
                </div>
                <div>
                  <strong>Pioneiros no Brasil</strong>
                  <span>1ª Loja de Morangos</span>
                </div>
              </div>

              {/* Tag Flutuante Base Esquerda */}
              <div className="floating-badge badge-bottom-left">
                <div className="badge-icon-box green">
                  <Leaf size={18} color="#1B5E20" />
                </div>
                <div>
                  <strong>100% Natural</strong>
                  <span>Sem agrotóxicos nocivos</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Faixa de Destaques de 4 Colunas na Base */}
        <div className="hero-features-bar">
          <div className="feature-box">
            <div className="feature-icon"><Sparkles size={20} color="#C62828" /></div>
            <div>
              <h4>Morangos Selecionados</h4>
              <p>Médios e gigantes colhidos diariamente</p>
            </div>
          </div>

          <div className="feature-box">
            <div className="feature-icon"><Leaf size={20} color="#1B5E20" /></div>
            <div>
              <h4>Geleias & Licores</h4>
              <p>Receitas de família 100% naturais</p>
            </div>
          </div>

          <div className="feature-box">
            <div className="feature-icon"><ShieldCheck size={20} color="#D97706" /></div>
            <div>
              <h4>Cogumelos Frescos</h4>
              <p>Shitake e Shimeji de cultivo próprio</p>
            </div>
          </div>

          <div className="feature-box">
            <div className="feature-icon"><MapPin size={20} color="#C62828" /></div>
            <div>
              <h4>3 Locais de Retirada</h4>
              <p>Loja Centro e Feiras da Unicentro</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
