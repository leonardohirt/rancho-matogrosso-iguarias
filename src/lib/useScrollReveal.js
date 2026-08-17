import { useEffect } from 'react';

/**
 * Hook de Scroll Reveal Failsafe (100% à prova de falhas)
 * Garante que nenhum elemento fique invisível caso haja qualquer atraso de renderização.
 */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    // Respeita a preferência do usuário de movimento reduzido
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      const selectors = [
        '.section-header',
        '.catalog-ref-card',
        '.about-card',
        '.location-card',
        '.gallery-item',
        '.review-card',
        '.hero-qr-corner-wrapper'
      ].join(', ');

      const targets = document.querySelectorAll(selectors);

      targets.forEach(el => {
        if (el.classList.contains('revealed')) return;

        const rect = el.getBoundingClientRect();
        // Apenas oculta para revelar elementos que estejam efetivamente ABAIXO do campo de visão atual
        if (rect.top > window.innerHeight - 30) {
          el.classList.add('reveal-pending');
          observer.observe(el);
        } else {
          // Elementos já visíveis no topo são exibidos imediatamente
          el.classList.add('revealed');
        }
      });
    }, 150);

    // Trava de Segurança Failsafe: Remove qualquer ocultação pendente após 1.5s
    const failsafeTimer = setTimeout(() => {
      document.querySelectorAll('.reveal-pending').forEach(el => {
        el.classList.add('revealed');
        el.classList.remove('reveal-pending');
      });
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(failsafeTimer);
      observer.disconnect();
    };
  }, deps);
}
