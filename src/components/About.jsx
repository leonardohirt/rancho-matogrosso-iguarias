import React from 'react';
import { Heart, Sprout, Flame, GlassWater } from 'lucide-react';

export default function About() {
  return (
    <section className="about-section" id="sobre">
      <div className="container about-grid">
        <div className="about-image-wrapper">
          <img src="/assets/crop_morango_premium.jpg" alt="Morangos Rancho Matogrosso" className="about-img" />
          <div className="about-experience-card">
            <span className="exp-number">1ª</span>
            <span className="exp-text">Loja Especializada em Morangos do Brasil</span>
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag"><Heart size={16} /> Nossa História</span>
          <h2 className="section-title">Alex & Indianara: Paixão e Fruticultura Inteligente</h2>
          <p>
            O <strong>Rancho Matogrosso Iguarias</strong> nasceu do desejo de entregar o morango mais saboroso, doce e saudável diretamente da colheita para a mesa de nossos clientes.
          </p>
          <p>
            Pioneiros no Brasil, criamos a primeira loja física totalmente dedicada aos morangos e derivados artesanais. Hoje, atendemos mais de <strong>8.000 clientes satisfeitos</strong> na Região Central do Paraná com padrão inigualável de qualidade.
          </p>

          <div className="about-pillars">
            <div className="pillar">
              <div className="pillar-icon-box"><Sprout size={24} /></div>
              <div>
                <h5>Cultivo Cuidadoso</h5>
                <p>Higiene, seleção rigorosa e morangos colhidos no ponto ideal de maturação.</p>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-icon-box"><Flame size={24} /></div>
              <div>
                <h5>Receita de Família</h5>
                <p>Nossas geleias mantêm a tradição artesanal desde 1973, sem conservantes.</p>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-icon-box"><GlassWater size={24} /></div>
              <div>
                <h5>Edições Especiais</h5>
                <p>Licores exclusivos em garrafas numeradas de frutas selecionadas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
