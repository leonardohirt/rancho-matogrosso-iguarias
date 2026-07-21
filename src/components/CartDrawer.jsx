import React, { useState } from 'react';
import { ShoppingBag, X, Trash2, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveFromCart }) {
  const [pickupLocation, setPickupLocation] = useState('Loja 01 - Rua Getúlio Vargas, 1857 (Centro)');

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSendWhatsApp = () => {
    if (cart.length === 0) return;

    let message = `🍓 *NOVO PEDIDO - RANCHO MATOGROSSO IGUARIAS*\n`;
    message += `-----------------------------------------\n`;
    
    cart.forEach(item => {
      const subtotal = item.price * item.quantity;
      message += `• ${item.quantity}x *${item.name}* (R$ ${item.price.toFixed(2).replace('.', ',')} un) = R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    });

    message += `-----------------------------------------\n`;
    message += `💰 *VALOR TOTAL:* R$ ${total.toFixed(2).replace('.', ',')}\n`;
    message += `📍 *LOCAL DE RETIRADA:* ${pickupLocation}\n`;
    message += `-----------------------------------------\n`;
    message += `Olá Alex e Indianara! Gostaria de confirmar a disponibilidade para retirar este pedido.`;

    const phone = '554288897545';
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
  };

  return (
    <>
      <div className={`cart-drawer-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-drawer-header">
          <h3><ShoppingBag size={20} /> Sua Sacola de Pedidos</h3>
          <button className="close-cart-btn" onClick={onClose}><X size={24} /></button>
        </div>

        <div className="cart-drawer-body">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 10px', color: 'var(--text-muted)' }}>
              <ShoppingBag size={48} style={{ marginBottom: '12px', opacity: 0.4 }} />
              <p style={{ fontWeight: '600' }}>Sua sacola está vazia.</p>
              <p style={{ fontSize: '0.85rem', marginTop: '4px' }}>Navegue pelo catálogo e escolha suas iguarias!</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-price">R$ {item.price.toFixed(2).replace('.', ',')}</div>
                  <div className="cart-item-controls">
                    <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                    <span className="qty-number">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => onRemoveFromCart(item.id)} title="Remover produto">
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-location-selector">
              <label htmlFor="pickupSelect"><MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Escolha onde deseja retirar:</label>
              <select id="pickupSelect" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
                <option value="Loja 01 - Rua Getúlio Vargas, 1857 (Centro)">Loja 01 - Centro (Terça a Sáb: 9h-18h)</option>
                <option value="Feira Unicentro Santa Cruz">Feira Unicentro Santa Cruz (Terça: 7h30-11h)</option>
                <option value="Feira Unicentro Cedeteg">Feira Unicentro Cedeteg (Quinta: 7h30-11h)</option>
                <option value="Combinar entrega via WhatsApp">Combinar entrega / Dúvidas via WhatsApp</option>
              </select>
            </div>

            <div className="cart-total-row">
              <span>Total do Pedido:</span>
              <strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
            </div>

            <button className="btn btn-whatsapp btn-block btn-lg" onClick={handleSendWhatsApp}>
              <MessageCircle size={20} /> Finalizar Pedido no WhatsApp
            </button>
            <p className="cart-disclaimer"><ShieldCheck size={14} /> Seu pedido será enviado diretamente para Alex & Indianara no WhatsApp!</p>
          </div>
        )}
      </div>
    </>
  );
}
