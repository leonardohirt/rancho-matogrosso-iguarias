import { useEffect } from 'react';

/**
 * Hook de Scroll Reveal de Alta Performance e Transição Suave
 */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respeita preferência de movimento reduzido
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const selectors = [
      '.section-header',
      '.catalog-ref-card',
      '.about-card',
      '.location-card',
      '.gallery-item',
      '.review-card',
      '.hero-qr-corner-wrapper',
      '.hero-pure-title',
      '.hero-pure-desc',
      '.hero-pure-buttons'
    ].join(', ');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      }
    );

    const initReveal = () => {
      const elements = document.querySelectorAll(selectors);
      elements.forEach((el) => {
        if (!el.classList.contains('sr-visible')) {
          el.classList.add('sr-item');
          const rect = el.getBoundingClientRect();
          // Se já está visível na tela no topo (ex: Hero), revela de imediato
          if (rect.top < window.innerHeight - 20) {
            el.classList.add('sr-visible');
          } else {
            observer.observe(el);
          }
        }
      });
    };

    initReveal();
    const timer = setTimeout(initReveal, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, deps);
}
