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

        <div className="locations-grid">
          {/* Main Store */}
          <div className="location-card main-store">
            <div className="location-badge">Loja Principal</div>
            <h3><Store size={20} color="#C62828" /> Loja 01 - Rancho Matogrosso</h3>
            <p className="loc-address"><MapPin size={16} color="#C62828" style={{ flexShrink: 0, marginTop: '3px' }} /> Rua Getúlio Vargas, 1857 - Centro, Guarapuava - PR</p>
            <div className="loc-hours">
              <Clock size={16} color="#C62828" /> <strong>Terça a Sábado:</strong> 09h00 às 18h00
            </div>
            <a href="https://maps.google.com/?q=Rua+Getulio+Vargas+1857+Guarapuava" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
              <Navigation size={14} /> Como Chegar (Google Maps)
            </a>
          </div>

          {/* Fair 1 */}
          <div className="location-card">
            <div className="location-badge badge-green">Feira Agroecológica</div>
            <h3><Store size={20} color="#1B5E20" /> Unicentro Campus Santa Cruz</h3>
            <p className="loc-address"><MapPin size={16} color="#1B5E20" style={{ flexShrink: 0, marginTop: '3px' }} /> Rua Padre E. Salvatore Renan, 875 - Santa Cruz</p>
            <div className="loc-hours">
              <Clock size={16} color="#1B5E20" /> <strong>Terça-feira:</strong> 07h30 às 11h00
            </div>
            <a href="https://maps.google.com/?q=Unicentro+Santa+Cruz+Guarapuava" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
              <Navigation size={14} /> Abrir Mapa
            </a>
          </div>

          {/* Fair 2 */}
          <div className="location-card">
            <div className="location-badge badge-green">Feira Agroecológica</div>
            <h3><Store size={20} color="#1B5E20" /> Unicentro Campus Cedeteg</h3>
            <p className="loc-address"><MapPin size={16} color="#1B5E20" style={{ flexShrink: 0, marginTop: '3px' }} /> Alameda E. Antônio Della Vecchia, 838 - Vila Carli</p>
            <div className="loc-hours">
              <Clock size={16} color="#1B5E20" /> <strong>Quinta-feira:</strong> 07h30 às 11h00
            </div>
            <a href="https://maps.google.com/?q=Unicentro+Cedeteg+Guarapuava" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
              <Navigation size={14} /> Abrir Mapa
            </a>
          </div>
        </div>

        {/* Embedded Google Maps directly pointing to Rua Getúlio Vargas 1857, Guarapuava */}
        <div className="map-embed-wrapper">
          <iframe 
            title="Google Maps Rancho Matogrosso Centro Guarapuava"
            src="https://maps.google.com/maps?q=Rua+Getúlio+Vargas,+1857+-+Centro,+Guarapuava+-+PR&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="380" 
            style={{ border: 0, borderRadius: '16px' }} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  );
}
