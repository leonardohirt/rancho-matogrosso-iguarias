import React from 'react';
import { Heart, ShieldCheck, Sprout, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section className="about-section" id="sobre">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img 
              src="/assets/familia_rancho_mato_grosso.jpg" 
              alt="Família Rancho Matogrosso - Alex, Indianara e Filha" 
              className="about-img-main"
            />
            <div className="about-badge-floating">
              <Award size={24} color="#C62828" />
              <div>
                <strong>Pioneiros no Brasil</strong>
                <span>1ª Loja Especializada em Morangos</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag">Nossa História</span>
            <h2 className="section-title">Gigante Pela Própria Natureza</h2>
            <p className="about-lead">
              A história do Rancho Matogrosso começou no coração da área rural de Guarapuava - PR, 
              movida pelo sonho dos produtores Alex e Indianara em oferecer morangos verdadeiramente 
              doces, saudáveis e cultivados com amor.
            </p>

            <p className="about-body">
              Somos a <strong>1ª loja especializada em morangos do Brasil</strong> e referência na Região Central do Paraná. 
              Com mais de 8.000 clientes satisfeitos, produzimos não apenas morangos de alta qualidade (como a icônica linha <em>Red Gold</em>), 
              mas também geleias de família artesanais sem conservantes, licores finos em edições limitadas numeradas, cogumelos frescos e kokedamas.
            </p>

            <div className="about-pillars">
              <div className="pillar-item">
                <div className="pillar-icon"><Sprout size={20} /></div>
                <div>
                  <h4>Cultivo Sustentável</h4>
                  <p>Nutrição balanceada e cuidado individual em cada planta.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon"><Heart size={20} /></div>
                <div>
                  <h4>Amor pela Família</h4>
                  <p>Tradição transmitida de geração em geração desde 1973.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon"><ShieldCheck size={20} /></div>
                <div>
                  <h4>Qualidade Selecionada</h4>
                  <p>Higienização rigorosa e frutos colhidos no ponto ideal de maturação.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
