import React from 'react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle' }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo.jpg" alt="Logo Rancho Matogrosso" className="footer-logo" />
            <h3>Rancho Matogrosso Iguarias</h3>
            <p className="tagline">"Gigante pela própria natureza!"</p>
            <p>1ª Loja especializada em morangos do Brasil. Referência na Região Central do Paraná com mais de 8.000 clientes satisfeitos.</p>
          </div>

          <div className="footer-links">
            <h4>Navegação Rápida</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#catalogo">Catálogo de Produtos</a></li>
              <li><a href="#sobre">Nossa História</a></li>
              <li><a href="#avaliacoes">Avaliações dos Clientes</a></li>
              <li><a href="#unidades">Pontos de Retirada</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contato & Atendimento</h4>
            <p><MessageCircle size={16} /> <strong>WhatsApp:</strong> (42) 8889-7545</p>
            <p><Mail size={16} /> <strong>E-mail:</strong> ranchomatogrosso@gmail.com</p>
            <p><InstagramIcon size={16} /> <strong>Instagram:</strong> @ranchomatogrossoiguarias</p>
            <p><MapPin size={16} /> Rua Getúlio Vargas, 1857 - Centro, Guarapuava - PR</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-content">
            <p>&copy; 2026 Rancho Matogrosso Iguarias. Todos os direitos reservados. Alex & Indianara.</p>
            <div className="footer-socials">
              <a href="https://instagram.com/ranchomatogrossoiguarias" target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://wa.me/554288897545" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/554288897545?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20morangos%20e%20iguarias." 
        className="floating-whatsapp" 
        target="_blank" 
        rel="noreferrer"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
}
