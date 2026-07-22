export const categories = [
  { id: 'morangos', label: 'MORANGOS' },
  { id: 'kokedama', label: 'KOKEDAMA' },
  { id: 'geleias-tradicionais', label: 'GELEIAS TRADICIONAIS' },
  { id: 'geleias-zero', label: 'GELEIAS ZERO AÇÚCAR' },
  { id: 'escolhas-que-amamos', label: 'ESCOLHAS QUE AMAMOS' },
  { id: 'cogumelos', label: 'COGUMELOS' }
];

export const products = [
  // --- MORANGOS ---
  {
    id: 'morango-premium-300g',
    name: 'Morango Premium 300g',
    category: 'morangos',
    categoryLabel: 'MORANGOS',
    price: 15.00,
    description: 'Linda bandeja de morangos selecionados do tamanho médio a grande.',
    image: '/assets/morango_premium_colheita.jpg',
    tag: 'MAIS VENDIDO',
    tagClass: 'green'
  },
  {
    id: 'morango-premium-600g',
    name: 'Morango Premium 600g',
    category: 'morangos',
    categoryLabel: 'MORANGOS',
    price: 28.00,
    description: 'Linda bandeja de morangos selecionados do tamanho médio a grande.',
    image: '/assets/morango_premium_colheita.jpg',
    tag: '',
    tagClass: ''
  },
  {
    id: 'morango-premium-1kg',
    name: 'Morango Premium 1kg',
    category: 'morangos',
    categoryLabel: 'MORANGOS',
    price: 42.00,
    description: 'Linda bandeja de morangos selecionados do tamanho médio a grande.',
    image: '/assets/morango_premium_colheita.jpg',
    tag: 'MELHOR CUSTO-BENEFÍCIO',
    tagClass: 'green'
  },
  {
    id: 'morango-confeiteiro-1kg',
    name: 'Morango Premium Confeiteiro 1kg',
    category: 'morangos',
    categoryLabel: 'MORANGOS',
    price: 42.00,
    description: 'Morangos tamanho pequeno, ideal para bombons e sobremesas.',
    image: '/assets/morango_premium_colheita.jpg',
    tag: '',
    tagClass: ''
  },
  {
    id: 'morango-red-gold-500g',
    name: 'Morango Red Gold 500g',
    category: 'morangos',
    categoryLabel: 'MORANGOS',
    price: 35.00,
    description: 'Morangos GIGANTES e selecionados em uma linda embalagem REDGOLD de 500g.',
    image: '/assets/morango_red_gold_oficial.jpg',
    tag: 'EDIÇÃO PREMIUM REDGOLD',
    tagClass: 'gold'
  },
  {
    id: 'morango-kids-250g',
    name: 'Morango Kids 250g',
    category: 'morangos',
    categoryLabel: 'MORANGOS',
    price: 10.00,
    description: 'Mini morangos bem docinhos e higienizados na medida certa para o lanche das crianças.',
    image: '/assets/crop_morango_kids.jpg',
    tag: 'SUCESSO INFANTIL',
    tagClass: 'green'
  },

  // --- KOKEDAMA ---
  {
    id: 'kokedama-morango',
    name: 'Kokedama com Muda de Morango',
    category: 'kokedama',
    categoryLabel: 'KOKEDAMA',
    price: 90.00,
    description: 'Linda muda de morango em kokedama já produzindo! Acompanha nutrição especial.',
    image: '/assets/kokedama_oficial.jpg',
    tag: 'PRESENTE CRIATIVO',
    tagClass: 'green'
  },

  // --- GELEIAS TRADICIONAIS ---
  {
    id: 'geleia-morango-tradicional-250g',
    name: 'Geleia de Morango Tradicional 250g',
    category: 'geleias-tradicionais',
    categoryLabel: 'GELEIAS TRADICIONAIS',
    price: 22.00,
    description: 'Receita de família desde 1973! Feita com pedaços inteiros de morango fresco.',
    image: '/assets/sq_geleia_artesanal_1784593733518.jpg',
    tag: 'RECEITA DE 1973',
    tagClass: 'red'
  },
  {
    id: 'geleia-frutas-vermelhas-250g',
    name: 'Geleia de Frutas Vermelhas 250g',
    category: 'geleias-tradicionais',
    categoryLabel: 'GELEIAS TRADICIONAIS',
    price: 24.00,
    description: 'Combinação perfeita de morangos, amoras e mirtilos cultivados no Rancho.',
    image: '/assets/sq_geleia_artesanal_1784593733518.jpg',
    tag: 'SABOR INTENSO',
    tagClass: 'gold'
  },
  {
    id: 'geleia-morango-pimenta-250g',
    name: 'Geleia de Morango com Pimenta 250g',
    category: 'geleias-tradicionais',
    categoryLabel: 'GELEIAS TRADICIONAIS',
    price: 24.00,
    description: 'Contraste entre o doce do morango e o leve picante da pimenta dedo-de-moça.',
    image: '/assets/geleia_artesanal_1784581780896.jpg',
    tag: 'GOURMET',
    tagClass: 'red'
  },

  // --- GELEIAS ZERO AÇÚCAR ---
  {
    id: 'geleia-morango-zero-250g',
    name: 'Geleia de Morango 0% Açúcar 250g',
    category: 'geleias-zero',
    categoryLabel: 'GELEIAS ZERO AÇÚCAR',
    price: 25.00,
    description: 'Zero adição de açúcares! Adoçada naturalmente com suco concentrado de maçã.',
    image: '/assets/geleia_artesanal_1784581780896.jpg',
    tag: '0% AÇÚCAR (SAUDÁVEL)',
    tagClass: 'green'
  },

  // --- ESCOLHAS QUE AMAMOS (Licores, Frutas Congeladas, Tomates) ---
  {
    id: 'licor-butia-373ml',
    name: 'Licor de Butiá Edição Especial 373ml (Red John)',
    category: 'escolhas-que-amamos',
    categoryLabel: 'ESCOLHAS QUE AMAMOS',
    price: 79.90,
    description: 'Licor encorpado de butiá envelhecido por 14 meses. Edição especial artesanal RED JOHN em garrafas numeradas.',
    image: '/assets/licor_butia_red_john.jpg',
    tag: 'EDIÇÃO RARA',
    tagClass: 'gold'
  },
  {
    id: 'frutas-vermelhas-congeladas-1kg',
    name: 'Frutas Vermelhas Congeladas 1kg',
    category: 'escolhas-que-amamos',
    categoryLabel: 'ESCOLHAS QUE AMAMOS',
    price: 35.00,
    description: 'Morangos higienizados e congelados soltinhos com mirtilos e amoras selecionados.',
    image: '/assets/frutas_vermelhas_congeladas.jpg',
    tag: 'MIX DE FRUTAS',
    tagClass: 'gold'
  },
  {
    id: 'tomate-sweet-grape-1kg',
    name: 'Tomate Sweet Grape 1kg',
    category: 'escolhas-que-amamos',
    categoryLabel: 'ESCOLHAS QUE AMAMOS',
    price: 20.00,
    description: 'Selecionados e deliciosos tomates Sweet Grape em rama, firmes e docinhos.',
    image: '/assets/tomate_sweet_grape_fresco.jpg',
    tag: 'DIRETO DA HORTA',
    tagClass: 'red'
  },
  {
    id: 'licor-morango-500ml',
    name: 'Licor Fino de Morango 500ml',
    category: 'escolhas-que-amamos',
    categoryLabel: 'ESCOLHAS QUE AMAMOS',
    price: 65.00,
    description: 'Licor artesanal suave produzido com infusão natural de morangos.',
    image: '/assets/sq_licor_artesanal_1784593756852.jpg',
    tag: 'ARTESANAL',
    tagClass: 'red'
  },
  {
    id: 'licor-kinka-373ml',
    name: 'Licor de Kinkã (Mini Laranja) 373ml',
    category: 'escolhas-que-amamos',
    categoryLabel: 'ESCOLHAS QUE AMAMOS',
    price: 69.90,
    description: 'Notas cítricas equilibradas e aroma marcante. Produção limitada.',
    image: '/assets/licor_artesanal_1784581807426.jpg',
    tag: 'BLEND CÍTRICO',
    tagClass: 'gold'
  },
  {
    id: 'morango-congelado-1kg',
    name: 'Morango Congelado Soltinho 1kg',
    category: 'escolhas-que-amamos',
    categoryLabel: 'ESCOLHAS QUE AMAMOS',
    price: 25.00,
    description: 'Morangos higienizados, sem talo e congelados individualmente (IQF).',
    image: '/assets/crop_ultra_congelado.jpg',
    tag: '100% PRÁTICO',
    tagClass: 'red'
  },
  {
    id: 'mirtilo-congelado-500g',
    name: 'Mirtilo (Blueberry) Congelado 500g',
    category: 'escolhas-que-amamos',
    categoryLabel: 'ESCOLHAS QUE AMAMOS',
    price: 38.00,
    description: 'Mirtilos super nutritivos, antioxidantes e selecionados a dedo.',
    image: '/assets/frutas_vermelhas_congeladas.jpg',
    tag: 'SUPERFOOD',
    tagClass: 'green'
  },

  // --- COGUMELOS ---
  {
    id: 'cogumelos-shitake-200g',
    name: 'Cogumelos Shitake Frescos 200g',
    category: 'cogumelos',
    categoryLabel: 'COGUMELOS',
    price: 18.00,
    description: 'Cultivados agroecologicamente no Rancho. Cogumelos carnudos e saborosos.',
    image: '/assets/cogumelos_frescos_1784581856797.jpg',
    tag: 'CULTIVO PRÓPRIO',
    tagClass: 'green'
  },
  {
    id: 'cogumelos-shimeji-150g',
    name: 'Cogumelos Shimeji 150g',
    category: 'cogumelos',
    categoryLabel: 'COGUMELOS',
    price: 15.00,
    description: 'Sabor delicado e um dos mais consumidos no Brasil. Nosso shimeji fresco combina com tudo.',
    image: '/assets/cogumelo_shimeji_fresco.jpg',
    tag: 'FRESCO DA HORTA',
    tagClass: 'green'
  }
];
