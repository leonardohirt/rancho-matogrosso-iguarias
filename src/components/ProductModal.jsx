import React from 'react';
import { X, ShoppingBag } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <>
      <div className="modal-backdrop open" onClick={onClose}></div>
      <div className="product-modal open">
        <button className="close-modal-btn" onClick={onClose} aria-label="Fechar">
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', maxHeight: '280px', objectFit: 'cover', borderRadius: '14px', marginBottom: '16px' }} 
          />
          <span className="badge badge-green" style={{ marginBottom: '8px' }}>{product.categoryLabel}</span>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{product.name}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '20px', lineHeight: '1.6' }}>
            {product.description}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-cream)', padding: '16px 24px', borderRadius: '14px', marginBottom: '20px' }}>
            <span style={{ fontWeight: '600' }}>Valor Unitário:</span>
            <strong style={{ fontSize: '1.6rem', color: 'var(--primary-red)' }}>
              R$ {product.price.toFixed(2).replace('.', ',')}
            </strong>
          </div>

          <button 
            className="btn btn-primary btn-block btn-lg" 
            onClick={() => { onAddToCart(product); onClose(); }}
          >
            <ShoppingBag size={20} /> Adicionar à Sacola
          </button>
        </div>
      </div>
    </>
  );
}
