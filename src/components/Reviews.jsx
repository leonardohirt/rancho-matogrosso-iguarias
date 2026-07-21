import React, { useState, useEffect } from 'react';
import { MessageSquare, Star, CheckCircle, MapPin, Tag, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const RETENTION_DAYS = 60; // Purga de avaliações com mais de 60 dias

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Form State
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [rating, setRating] = useState(5);
  const [product, setProduct] = useState('Morango Red Gold');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, Math.ceil(reviews.length / itemsPerPage) - 1);

  const loadReviews = async () => {
    setLoading(true);
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - RETENTION_DAYS);
    const cutoffIso = cutoffDate.toISOString();

    if (isSupabaseConfigured) {
      try {
        // 1. Purga automática de avaliações com mais de 60 dias no Supabase
        await supabase
          .from('reviews')
          .delete()
          .lt('created_at', cutoffIso);

        // 2. Busca avaliações ativas
        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          const formatted = data.map(r => ({
            ...r,
            date: new Date(r.created_at).toLocaleDateString('pt-BR')
          }));
          setReviews(formatted);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn('Carregando armazenamento local:', err);
      }
    }

    // Fallback local
    const saved = localStorage.getItem('rancho_reviews_db');
    let list = saved ? JSON.parse(saved) : [];
    
    // Purga local
    list = list.filter(r => {
      if (!r.created_at) return true;
      return new Date(r.created_at) >= cutoffDate;
    });

    localStorage.setItem('rancho_reviews_db', JSON.stringify(list));
    setReviews(list);
    setLoading(false);
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !city || !comment) return;

    const newReviewData = {
      name,
      city,
      rating,
      product,
      comment,
      created_at: new Date().toISOString()
    };

    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase
          .from('reviews')
          .insert([newReviewData])
          .select();

        if (!error) {
          await loadReviews();
        }
      } catch (err) {
        console.error('Erro ao salvar avaliação:', err);
      }
    } else {
      const localReview = {
        id: Date.now(),
        ...newReviewData,
        date: new Date().toLocaleDateString('pt-BR')
      };

      const updated = [localReview, ...reviews];
      setReviews(updated);
      localStorage.setItem('rancho_reviews_db', JSON.stringify(updated));
    }

    setCurrentIndex(0); // Exibe a nova avaliação imediatamente no topo do carrossel
    setName('');
    setCity('');
    setRating(5);
    setComment('');
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 4000);
  };

  const currentReviews = reviews.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="reviews-section" id="avaliacoes">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag"><MessageSquare size={16} /> Depoimentos dos Clientes</span>
          <h2 className="section-title">Avaliações de Quem Provou e Aprovou</h2>
          <p className="section-subtitle">Confira a opinião dos nossos clientes ou deixe seu depoimento abaixo!</p>
        </div>

        {/* Listagem em Carrossel se houver avaliações */}
        {reviews.length > 0 ? (
          <div className="reviews-carousel-wrapper" style={{ position: 'relative', marginBottom: '50px' }}>
            
            {/* Botões de Navegação do Carrossel */}
            {maxIndex > 0 && (
              <div className="carousel-nav-controls" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '16px' }}>
                <button 
                  className="carousel-arrow-btn" 
                  onClick={handlePrev} 
                  aria-label="Avaliações anteriores"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '1px solid var(--border-light)',
                    backgroundColor: '#FFF',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <ChevronLeft size={20} />
                </button>

                <button 
                  className="carousel-arrow-btn" 
                  onClick={handleNext} 
                  aria-label="Próximas avaliações"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '1px solid var(--border-light)',
                    backgroundColor: '#FFF',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            {/* Grid com no máximo 3 avaliações por slide */}
            <div className="reviews-grid">
              {currentReviews.map(r => (
                <div key={r.id} className="review-card">
                  <div className="review-card-header">
                    <div className="reviewer-info">
                      <h4>{r.name}</h4>
                      <span className="reviewer-location"><MapPin size={12} /> {r.city}</span>
                    </div>
                    <div className="review-stars">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                  </div>
                  <span className="review-product-tag"><Tag size={12} /> {r.product}</span>
                  <p className="review-text">"{r.comment}"</p>
                </div>
              ))}
            </div>

            {/* Marcadores de Página */}
            {maxIndex > 0 && (
              <div className="carousel-dots" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
                {[...Array(maxIndex + 1)].map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    style={{
                      width: idx === currentIndex ? '24px' : '10px',
                      height: '10px',
                      borderRadius: '10px',
                      backgroundColor: idx === currentIndex ? 'var(--primary-red)' : '#D1D5DB',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Estado Vazio Amigável se não houver nenhuma avaliação ainda */
          <div style={{ textAlign: 'center', padding: '30px 20px', backgroundColor: '#FFF', borderRadius: '16px', border: '1px solid var(--border-light)', marginBottom: '40px' }}>
            <MessageSquare size={40} style={{ color: 'var(--primary-red)', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Seja o primeiro a avaliar!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Ainda não há comentários cadastrados. Conte-nos o que achou dos nossos morangos e iguarias no formulário abaixo.</p>
          </div>
        )}

        {/* Formulário para Enviar Avaliação */}
        <div className="add-review-box">
          <div className="review-box-header">
            <h3><MessageSquare size={24} /> Deixe sua Avaliação</h3>
            <p>Você é nosso cliente? Conte sua experiência e ajude outros apaixonados por morango!</p>
          </div>

          {submitted && (
            <div style={{ backgroundColor: '#E8F5E9', color: '#1B5E20', padding: '14px', borderRadius: '10px', marginBottom: '20px', fontWeight: '600', textAlign: 'center' }}>
              <CheckCircle size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
              Obrigado! Sua avaliação foi publicada com sucesso!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="reviewerName">Seu Nome *</label>
                <input 
                  type="text" 
                  id="reviewerName" 
                  placeholder="Ex: Maria Aparecida" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="reviewerCity">Sua Cidade / Bairro *</label>
                <input 
                  type="text" 
                  id="reviewerCity" 
                  placeholder="Ex: Guarapuava - Centro" 
                  value={city} 
                  onChange={(e) => setCity(e.target.value)} 
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Sua Nota *</label>
                <div className="star-rating-input">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={24} 
                      className={`rating-star ${star <= rating ? 'active' : ''}`}
                      fill={star <= rating ? '#F59E0B' : 'none'}
                      color={star <= rating ? '#F59E0B' : '#D1D5DB'}
                      onClick={() => setRating(star)} 
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="reviewProduct">Produto Escolhido</label>
                <select id="reviewProduct" value={product} onChange={(e) => setProduct(e.target.value)}>
                  <option value="Morango Red Gold">Morango Red Gold</option>
                  <option value="Morango Premium">Morango Premium</option>
                  <option value="Geleia de Morango 0% Açúcar">Geleia de Morango 0% Açúcar</option>
                  <option value="Licor de Morango / Butiá">Licor de Morango / Butiá</option>
                  <option value="Kokedama com Muda">Kokedama com Muda de Morango</option>
                  <option value="Outras Iguarias">Outras Iguarias</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reviewComment">Seu Comentário *</label>
              <textarea 
                id="reviewComment" 
                rows="3" 
                placeholder="Conte como foi provar nossos morangos ou iguarias..." 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              <Send size={18} /> Publicar Avaliação
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
