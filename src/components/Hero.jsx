import React from 'react';
import { ShoppingBag, MessageCircle, Sparkles, Star, Award, Heart, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-flatlay-section" id="home">
      
      {/* Card Central Estilo Papelaria / Pergaminho em cima do Flatlay */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-flatlay-card">
          
          {/* Sub-tag superior */}
          <span className="flatlay-card-tag">
            <Sparkles size={13} color="#C62828" /> RANCHO MATOGROSSO • COLHEITA DIÁRIA
          </span>

          {/* Título Principal no Estilo da Foto de Referência */}
          <h1 className="flatlay-card-title">
            Morangos Frescos, <br />
            Colhidos Especialmente para Você!
          </h1>

          {/* Subtítulo */}
          <p className="flatlay-card-subtitle">
            Geleias artesanais 100% naturais (sem açúcar), licores raros e cogumelos frescos de cultivo próprio direto do nosso campo em Guarapuava.
          </p>

          {/* Botão de Ação Centralizado em Formato Pílula */}
          <div className="flatlay-card-buttons">
            <a href="https://wa.me/554288897545" target="_blank" rel="noreferrer" className="btn-flatlay-primary">
              <MessageCircle size={18} /> FAZER PEDIDO AGORA
            </a>
            <a href="#catalogo" className="btn-flatlay-secondary">
              <ShoppingBag size={18} /> VER CATÁLOGO
            </a>
          </div>

          {/* Selos de Confiança discretos na base do card */}
          <div className="flatlay-card-footer">
            <div className="footer-item">
              <Star size={14} fill="#F59E0B" color="#F59E0B" /> <strong>4.9/5</strong> (+8k Clientes)
            </div>
            <div className="footer-dot">•</div>
            <div className="footer-item">
              <Award size={14} color="#C62828" /> 1ª Loja de Morangos
            </div>
            <div className="footer-dot">•</div>
            <div className="footer-item">
              <MapPin size={14} color="#C62828" /> 3 Locais de Retirada
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
