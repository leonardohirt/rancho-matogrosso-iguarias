import React, { useState, useEffect } from 'react';
import { Heart, ShieldCheck, Sprout } from 'lucide-react';

const familySlides = [
  {
    src: '/assets/alex_cesta_morangos.jpg',
    title: 'Alex e a Colheita Fresca'
  },
  {
    src: '/assets/familia_lupas_estufa.jpg',
    title: 'Manejo e Tecnologia no Campo'
  },
  {
    src: '/assets/filha_morango_gigante.jpg',
    title: 'Frutos de Alta Qualidade'
  },
  {
    src: '/assets/indianara_morangos_frescos.jpg',
    title: 'Dedicação e Carinho'
  },
  {
    src: '/assets/filha_estufa_amarelo.jpg',
    title: 'Amor pela Terra'
  },
  {
    src: '/assets/construcao_estufa_inicio.jpg',
    title: 'O Início do Sonho'
  },
  {
    src: '/assets/alex_indianara_terreno_araucaria.jpg',
    title: 'O Rancho Matogrosso'
  }
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play no carrossel: passa sozinho mais rápido (a cada 3.5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % familySlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-section" id="sobre">
      <div className="container">
        <div className="about-grid">
          
          {/* Carrossel da História da Família - Mais rápido, 100% limpo sem setas, selos ou legendas */}
          <div className="about-carousel-container">
            <div className="about-carousel-wrapper">
              {familySlides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`about-slide-item ${idx === currentSlide ? 'active' : ''}`}
                >
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="about-img-main"
                  />
                </div>
              ))}
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
