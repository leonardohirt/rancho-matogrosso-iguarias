import { useEffect } from 'react';

/**
 * Hook customizado para atuar como Scroll Reveal nativo usando IntersectionObserver
 */
export function useScrollReveal(dependencyArray = []) {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const selectors = [
      '.reveal',
      '.section-header',
      '.catalog-ref-card',
      '.about-card',
      '.location-card',
      '.gallery-item',
      '.review-card',
      '.hero-trust-bar'
    ].join(', ');

    // Pequeno timeout para permitir que a renderização DOM esteja concluída
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(selectors);
      elements.forEach(el => {
        if (!el.classList.contains('reveal-init')) {
          el.classList.add('reveal-init');
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, dependencyArray);
}
