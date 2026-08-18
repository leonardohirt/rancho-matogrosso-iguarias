import React from 'react';
import { Camera } from 'lucide-react';

export default function Gallery() {
  // Lista exclusiva contendo APENAS as fotos reais dos itens/produtos do Rancho Matogrosso
  const images = [
    { src: '/assets/morango_red_gold_oficial.jpg', label: 'Morango Red Gold 500g' },
    { src: '/assets/morango_premium_colheita.jpg', label: 'Morango Premium Colheita do Dia' },
    { src: '/assets/morango_300g_bandeja.jpg', label: 'Bandeja de Morangos Selecionados 300g' },
    { src: '/assets/morango_600g_bandeja.jpg', label: 'Embalagem Especial de Morangos 600g' },
    { src: '/assets/kokedama_oficial.jpg', label: 'Muda de Morango em Kokedama Artesanal' },
    { src: '/assets/licor_artesanal_1784581807426.jpg', label: 'Licor Artesanal de Morango Rancho Matogrosso' },
    { src: '/assets/licor_butia_red_john.jpg', label: 'Licor de Butiá Red John Edição Especial' },
    { src: '/assets/geleia_artesanal_1784581780896.jpg', label: 'Geleia Artesanal de Morango 0% Açúcar' },
    { src: '/assets/frutas_vermelhas_congeladas.jpg', label: 'Frutas Vermelhas Congeladas (1kg)' },
    { src: '/assets/mirtilo_congelado.jpg', label: 'Mirtilos Selecionados Ultra-Congelados (500g)' },
    { src: '/assets/mix_frutas_congeladas.jpg', label: 'Mix Premium de Frutas Vermelhas Congeladas' },
    { src: '/assets/tomate_sweet_grape_fresco.jpg', label: 'Tomates Sweet Grape Crocantes e Doces' },
    { src: '/assets/queijo_colonial.jpg', label: 'Queijo Colonial Artesanal da Serra' },
    { src: '/assets/queijo_vinho_tinto.jpg', label: 'Queijo Colonial Maturado ao Vinho Tinto' }
  ];

  return (
    <section className="gallery-section" id="galeria">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag"><Camera size={16} /> Galeria de Produtos</span>
          <h2 className="section-title">Nossas Iguarias em Detalhes</h2>
          <p className="section-subtitle">Confira fotos reais e autênticas dos itens e produtos do Rancho Matogrosso.</p>
        </div>

        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div key={idx} className="gallery-item">
              <img src={img.src} alt={img.label} loading="lazy" />
              <div className="gallery-overlay">
                <span>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
