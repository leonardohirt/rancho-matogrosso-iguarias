import React, { useState } from 'react';
import { MapPin, Store, Clock, Navigation, CheckCircle2 } from 'lucide-react';

export default function Locations() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const locationsList = [
    {
      id: 0,
      title: 'Loja 01 - Rancho Matogrosso',
      badge: 'Loja Principal',
      badgeClass: '',
      address: 'Rua Getúlio Vargas, 1857 - Centro, Guarapuava - PR',
      hours: 'Terça a Sábado: 09h00 às 18h00',
      mapUrl: 'https://maps.google.com/maps?q=Rua+Getúlio+Vargas,+1857+-+Centro,+Guarapuava+-+PR&t=&z=16&ie=UTF8&iwloc=&output=embed',
      directUrl: 'https://maps.google.com/?q=Rua+Getulio+Vargas+1857+Guarapuava',
      color: '#C62828'
    },
    {
      id: 1,
      title: 'Unicentro Campus Santa Cruz',
      badge: 'Feira Agroecológica',
      badgeClass: 'badge-green',
      address: 'Rua Padre E. Salvatore Renan, 875 - Santa Cruz, Guarapuava - PR',
      hours: 'Terça-feira: 07h30 às 11h00',
      mapUrl: 'https://maps.google.com/maps?q=Rua+Padre+E.+Salvatore+Renan,+875+-+Santa+Cruz,+Guarapuava+-+PR&t=&z=16&ie=UTF8&iwloc=&output=embed',
      directUrl: 'https://maps.google.com/?q=Unicentro+Santa+Cruz+Guarapuava',
      color: '#1B5E20'
    },
    {
      id: 2,
      title: 'Unicentro Campus Cedeteg',
      badge: 'Feira Agroecológica',
      badgeClass: 'badge-green',
      address: 'Alameda E. Antônio Della Vecchia, 838 - Vila Carli, Guarapuava - PR',
      hours: 'Quinta-feira: 07h30 às 11h00',
      mapUrl: 'https://maps.google.com/maps?q=Alameda+E.+Antônio+Della+Vecchia,+838+-+Vila+Carli,+Guarapuava+-+PR&t=&z=16&ie=UTF8&iwloc=&output=embed',
      directUrl: 'https://maps.google.com/?q=Unicentro+Cedeteg+Guarapuava',
      color: '#1B5E20'
    }
  ];

  const currentLocation = locationsList[selectedIdx];

  return (
    <section className="locations-section" id="unidades">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag"><MapPin size={16} /> Onde nos Encontrar</span>
          <h2 className="section-title">Locais para Retirada & Atendimento</h2>
          <p className="section-subtitle">Clique em uma das unidades abaixo para visualizar a localização exata no mapa ao lado!</p>
        </div>

        {/* Layout 2 Colunas Interativo */}
        <div className="locations-layout-grid">
          
          {/* Coluna da Esquerda: INFORMAÇÕES (Clique para Selecionar) */}
          <div className="locations-list-column">
            {locationsList.map((loc, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <div 
                  key={loc.id} 
                  className={`location-card ${isSelected ? 'active-location' : ''}`}
                  onClick={() => setSelectedIdx(idx)}
                  style={{
                    cursor: 'pointer',
                    border: isSelected ? `2px solid ${loc.color}` : '1px solid var(--border-light)',
                    backgroundColor: isSelected ? '#FFFFFF' : '#FAFAFA',
                    transform: isSelected ? 'translateX(4px)' : 'none',
                    boxShadow: isSelected ? '0 8px 24px rgba(0,0,0,0.08)' : 'var(--shadow-sm)',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                    padding: '20px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span className={`location-badge ${loc.badgeClass}`}>{loc.badge}</span>
                    {isSelected && (
                      <span style={{ fontSize: '0.75rem', fontWeight: '700', color: loc.color, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircle2 size={14} /> Selecionado no Mapa
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: isSelected ? loc.color : 'var(--text-dark)', marginBottom: '8px' }}>
                    <Store size={18} color={loc.color} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                    {loc.title}
                  </h3>

                  <p className="loc-address" style={{ fontSize: '0.875rem', color: 'var(--text-dark)', marginBottom: '8px' }}>
                    <MapPin size={15} color={loc.color} style={{ flexShrink: 0, marginTop: '2px' }} /> 
                    {loc.address}
                  </p>

                  <div className="loc-hours" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <Clock size={15} color={loc.color} /> <strong>Atendimento:</strong> {loc.hours}
                  </div>

                  <div style={{ marginTop: '12px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <a 
                      href={loc.directUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-outline btn-sm"
                      onClick={(e) => e.stopPropagation()}
                      style={{ fontSize: '0.78rem', padding: '6px 12px' }}
                    >
                      <Navigation size={12} /> Rota no Google Maps
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Coluna da Direita: MAPA (Atualizado Dinamicamente ao Clicar) */}
          <div className="map-column">
            <div className="map-embed-wrapper" style={{ height: '100%', minHeight: '440px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', position: 'relative' }}>
              
              {/* Barra de Título do Mapa Selecionado */}
              <div style={{ position: 'absolute', top: '12px', left: '12px', right: '12px', zIndex: 10, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)', padding: '10px 16px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={16} color={currentLocation.color} />
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-dark)' }}>
                    {currentLocation.title}
                  </span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{currentLocation.badge}</span>
              </div>

              <iframe 
                key={currentLocation.id}
                title={`Google Maps ${currentLocation.title}`}
                src={currentLocation.mapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '440px' }} 
                allowFullScreen="" 
                loading="lazy"
              >
              </iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
