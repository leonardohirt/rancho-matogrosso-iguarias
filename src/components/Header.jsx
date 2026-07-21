import React, { useState } from 'react';
import { Award, MapPin, ShoppingBag, Menu, X } from 'lucide-react';

const InstagramIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle' }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Header({ cartCount, onOpenCart }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <span><Award size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> <strong>Pioneiros:</strong> 1ª Loja especializada em morangos do Brasil!</span>
          <span><MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Rua Getúlio Vargas, 1857 - Centro | Guarapuava - PR</span>
          <span><InstagramIcon size={14} /> @ranchomatogrossoiguarias</span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="main-header">
        <div className="container header-container">
          <a href="#" className="brand-logo">
            <img src="/assets/logo.jpg" alt="Rancho Matogrosso Logo" />
            <div className="brand-text">
              <span className="brand-title">Rancho Matogrosso</span>
            </div>
          </a>

          <nav className={`main-nav ${mobileOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home" onClick={() => setMobileOpen(false)}>Início</a></li>
              <li><a href="#catalogo" onClick={() => setMobileOpen(false)}>Catálogo</a></li>
              <li><a href="#sobre" onClick={() => setMobileOpen(false)}>Sobre Nós</a></li>
              <li><a href="#avaliacoes" onClick={() => setMobileOpen(false)}>Avaliações</a></li>
              <li><a href="#galeria" onClick={() => setMobileOpen(false)}>Galeria</a></li>
              <li><a href="#unidades" onClick={() => setMobileOpen(false)}>Locais de Retirada</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="cart-btn" onClick={onOpenCart}>
              <ShoppingBag size={18} />
              <span className="cart-label">Sacola</span>
              <span className="cart-badge">{cartCount}</span>
            </button>

            <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Abrir Menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
