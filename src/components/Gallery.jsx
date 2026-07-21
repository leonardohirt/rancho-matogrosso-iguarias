import React from 'react';
import { Camera } from 'lucide-react';

export default function Gallery() {
  const images = [
    { src: '/assets/morango_red_gold_oficial.jpg', label: 'Morango Red Gold 500g (O Melhor Morango do Mundo)' },
    { src: '/assets/kokedama_oficial.jpg', label: 'Muda de Morango em Kokedama (Produzindo)' },
    { src: '/assets/morango_premium_colheita.jpg', label: 'Morangos Premium (Frescos da Colheita)' },
    { src: '/assets/frutas_vermelhas_congeladas.jpg', label: 'Frutas Vermelhas Congeladas (Seleção Especial)' },
    { src: '/assets/tomate_sweet_grape_fresco.jpg', label: 'Tomates Sweet Grape (Firmes e Docinhos)' },
    { src: '/assets/licor_butia_red_john.jpg', label: 'Licor de Butiá Red John (Edição Especial)' }
  ];

  return (
    <section className="gallery-section" id="galeria">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag"><Camera size={16} /> Galeria Visual</span>
          <h2 className="section-title">Um Olhar sobre Nossas Delícias</h2>
          <p className="section-subtitle">Acompanhe fotos reais das nossas colheitas, embalagens e iguarias preparadas com amor.</p>
        </div>

        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div key={idx} className="gallery-item">
              <img src={img.src} alt={img.label} />
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
