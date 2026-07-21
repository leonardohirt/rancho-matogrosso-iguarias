import React from 'react';
import { MapPin, Store, Clock, Navigation } from 'lucide-react';

export default function Locations() {
  return (
    <section className="locations-section" id="unidades">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag"><MapPin size={16} /> Onde nos Encontrar</span>
          <h2 className="section-title">Locais para Retirada & Atendimento</h2>
          <p className="section-subtitle">Compre no site e retire fresquinho em um dos nossos 3 pontos em Guarapuava - PR!</p>
        </div>

        {/* Layout 2 Colunas: Esquerda (Informações dos 3 Pontos) | Direita (Mapa) */}
        <div className="locations-layout-grid">
          
          {/* Coluna da Esquerda: INFORMAÇÕES */}
          <div className="locations-list-column">
            {/* Store 1 */}
            <div className="location-card main-store">
              <div className="location-badge">Loja Principal</div>
              <h3><Store size={20} color="#C62828" /> Loja 01 - Rancho Matogrosso</h3>
              <p className="loc-address">
                <MapPin size={16} color="#C62828" style={{ flexShrink: 0, marginTop: '3px' }} /> 
                Rua Getúlio Vargas, 1857 - Centro, Guarapuava - PR
              </p>
              <div className="loc-hours">
                <Clock size={16} color="#C62828" /> <strong>Terça a Sábado:</strong> 09h00 às 18h00
              </div>
              <a href="https://maps.google.com/?q=Rua+Getulio+Vargas+1857+Guarapuava" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ marginTop: '10px' }}>
                <Navigation size={14} /> Como Chegar (Google Maps)
              </a>
            </div>

            {/* Store 2 */}
            <div className="location-card">
              <div className="location-badge badge-green">Feira Agroecológica</div>
              <h3><Store size={20} color="#1B5E20" /> Unicentro Campus Santa Cruz</h3>
              <p className="loc-address">
                <MapPin size={16} color="#1B5E20" style={{ flexShrink: 0, marginTop: '3px' }} /> 
                Rua Padre E. Salvatore Renan, 875 - Santa Cruz
              </p>
              <div className="loc-hours">
                <Clock size={16} color="#1B5E20" /> <strong>Terça-feira:</strong> 07h30 às 11h00
              </div>
              <a href="https://maps.google.com/?q=Unicentro+Santa+Cruz+Guarapuava" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ marginTop: '10px' }}>
                <Navigation size={14} /> Abrir no Mapa
              </a>
            </div>

            {/* Store 3 */}
            <div className="location-card">
              <div className="location-badge badge-green">Feira Agroecológica</div>
              <h3><Store size={20} color="#1B5E20" /> Unicentro Campus Cedeteg</h3>
              <p className="loc-address">
                <MapPin size={16} color="#1B5E20" style={{ flexShrink: 0, marginTop: '3px' }} /> 
                Alameda E. Antônio Della Vecchia, 838 - Vila Carli
              </p>
              <div className="loc-hours">
                <Clock size={16} color="#1B5E20" /> <strong>Quinta-feira:</strong> 07h30 às 11h00
              </div>
              <a href="https://maps.google.com/?q=Unicentro+Cedeteg+Guarapuava" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ marginTop: '10px' }}>
                <Navigation size={14} /> Abrir no Mapa
              </a>
            </div>
          </div>

          {/* Coluna da Direita: MAPA */}
          <div className="map-column">
            <div className="map-embed-wrapper" style={{ height: '100%', minHeight: '480px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <iframe 
                title="Google Maps Rancho Matogrosso Centro Guarapuava"
                src="https://maps.google.com/maps?q=Rua+Getúlio+Vargas,+1857+-+Centro,+Guarapuava+-+PR&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '480px' }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
