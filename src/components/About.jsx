import React, { useState, useEffect } from 'react';
import { Heart, ShieldCheck, Sprout, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const familySlides = [
  {
    src: '/assets/alex_cesta_morangos.jpg',
    title: 'Alex e a Colheita Fresca',
    caption: 'Morangos selecionados colhidos no ponto perfeito'
  },
  {
    src: '/assets/familia_lupas_estufa.jpg',
    title: 'Manejo e Tecnologia no Campo',
    caption: 'Alex, Indianara e filhinha acompanhando o cultivo sustentável'
  },
  {
    src: '/assets/filha_morango_gigante.jpg',
    title: 'Frutos de Alta Qualidade',
    caption: 'Morangos doces, graúdos e saudáveis para a família'
  },
  {
    src: '/assets/indianara_morangos_frescos.jpg',
    title: 'Dedicação e Carinho',
    caption: 'Indianara com os frutos colhidos na estufa'
  },
  {
    src: '/assets/filha_estufa_amarelo.jpg',
    title: 'Amor pela Terra',
    caption: 'Conexão direta com a natureza desde os primeiros passos'
  },
  {
    src: '/assets/construcao_estufa_inicio.jpg',
    title: 'O Início do Sonho',
    caption: 'Alex e Indianara na construção das primeiras estufas'
  },
  {
    src: '/assets/alex_indianara_terreno_araucaria.jpg',
    title: 'O Rancho Matogrosso',
    caption: 'Preservação e produção em harmonia com os campos de Guarapuava'
  }
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play no carrossel: passa sozinho a cada 11 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % familySlides.length);
    }, 11000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? familySlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % familySlides.length);
  };

  return (
    <section className="about-section" id="sobre">
      <div className="container">
        <div className="about-grid">
          
          {/* Carrossel da História da Família */}
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
                  <div className="about-slide-caption">
                    <strong>{slide.title}</strong>
                    <span>{slide.caption}</span>
                  </div>
                </div>
              ))}

              {/* Botões de Navegação Manual */}
              <button 
                className="about-carousel-arrow prev" 
                onClick={handlePrev}
                aria-label="Foto anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button 
                className="about-carousel-arrow next" 
                onClick={handleNext}
                aria-label="Próxima foto"
              >
                <ChevronRight size={20} />
              </button>

              {/* Indicadores de bolinhas */}
              <div className="about-carousel-dots">
                {familySlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`about-dot ${idx === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Ver foto ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

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
