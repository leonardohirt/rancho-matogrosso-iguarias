export const categories = [
  { id: 'morangos', label: 'MORANGOS' },
  { id: 'geleias', label: 'GELEIAS ARTESANAIS' },
  { id: 'casa-luchese', label: 'CASA LUCHESE' },
  { id: 'queijos', label: 'QUEIJOS ARTESANAIS' },
  { id: 'congelados', label: 'CONGELADOS' },
  { id: 'kokedama', label: 'KOKEDAMA' }
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
    image: '/assets/morango_300g_bandeja.jpg',
    tag: '',
    tagClass: ''
  },
  {
    id: 'morango-premium-600g',
    name: 'Morango Premium 600g',
    category: 'morangos',
    categoryLabel: 'MORANGOS',
    price: 28.00,
    description: 'Linda bandeja de morangos selecionados do tamanho médio a grande.',
    image: '/assets/morango_600g_bandeja.jpg',
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
    tag: '',
    tagClass: ''
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
    tag: '',
    tagClass: ''
  },

  // --- GELEIAS ARTESANAIS (TRADICIONAIS & ZERO AÇÚCAR) ---
  {
    id: 'geleia-morango-tradicional-250g',
    name: 'Geleia de Morango Tradicional 250g',
    category: 'geleias',
    categoryLabel: 'GELEIAS ARTESANAIS',
    price: 22.00,
    description: 'Receita de família desde 1973! Feita com pedaços inteiros de morango fresco.',
    image: '/assets/sq_geleia_artesanal_1784593733518.jpg',
    tag: 'TRADICIONAL',
    tagClass: ''
  },
  {
    id: 'geleia-frutas-vermelhas-250g',
    name: 'Geleia de Frutas Vermelhas 250g',
    category: 'geleias',
    categoryLabel: 'GELEIAS ARTESANAIS',
    price: 24.00,
    description: 'Combinação perfeita de morangos, amoras e mirtilos cultivados no Rancho.',
    image: '/assets/sq_geleia_artesanal_1784593733518.jpg',
    tag: '',
    tagClass: ''
  },
  {
    id: 'geleia-morango-pimenta-250g',
    name: 'Geleia de Morango com Pimenta 250g',
    category: 'geleias',
    categoryLabel: 'GELEIAS ARTESANAIS',
    price: 24.00,
    description: 'Contraste entre o doce do morango e o leve picante da pimenta dedo-de-moça.',
    image: '/assets/geleia_artesanal_1784581780896.jpg',
    tag: '',
    tagClass: ''
  },
  {
    id: 'geleia-morango-zero-250g',
    name: 'Geleia de Morango 0% Açúcar 250g',
    category: 'geleias',
    categoryLabel: 'GELEIAS ARTESANAIS',
    price: 25.00,
    description: 'Zero adição de açúcares! Adoçada naturalmente com suco concentrado de maçã.',
    image: '/assets/geleia_artesanal_1784581780896.jpg',
    tag: '0% AÇÚCAR',
    tagClass: 'green'
  },

  // --- CASA LUCHESE ---
  {
    id: 'casa-luchese-figo-nozes-260g',
    name: 'Doce de Figo com Nozes 260g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 24.90,
    description: 'Doce artesanal de figo com pedaços da fruta e nozes selecionadas.',
    image: '/assets/luchese_figo_nozes.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-cebola-bacon-250g',
    name: 'Cebola Caramelizada com Bacon 250g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 25.90,
    description: 'Harmoniza perfeitamente com torradas, sanduíches e hambúrgueres.',
    image: '/assets/luchese_cebola_bacon.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-abacaxi-pimenta-260g',
    name: 'Geleia de Abacaxi com Pimenta 260g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 22.90,
    description: 'Agridoce suave e picante que harmoniza com carnes e queijos finos.',
    image: '/assets/luchese_abacaxi_pimenta.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-bergamota-260g',
    name: 'Geleia de Bergamota 260g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 24.90,
    description: 'Geleia cítrica artesanal com pedaços reais da fruta.',
    image: '/assets/luchese_bergamota.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-cebola-limao-siciliano-250g',
    name: 'Cebola Caramelizada com Limão Siciliano 250g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 25.90,
    description: 'Cebola caramelizada lentamente com toque cítrico de raspas de limão siciliano.',
    image: '/assets/luchese_cebola_limao_siciliano.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-cebola-apimentada-250g',
    name: 'Cebola Caramelizada Apimentada 250g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 25.90,
    description: 'Harmonização perfeita para carnes assadas e hambúrgueres artesanais.',
    image: '/assets/luchese_cebola_apimentada.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-limao-siciliano-260g',
    name: 'Geleia de Limão Siciliano Premium 260g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 24.90,
    description: 'Geleia artesanal com raspas de limão siciliano e aroma inconfundível.',
    image: '/assets/luchese_limao_siciliano.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-pesto-210g',
    name: 'Molho Pesto 210g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 39.90,
    description: 'Molho Pesto tradicional artesanal, feito com manjericão fresco e nozes, ideal para massas.',
    image: '/assets/luchese_pesto.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-goiaba-260g',
    name: 'Geleia de Goiaba Tradicional 260g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 21.90,
    description: 'Sabor clássico colonial preparado com goiabas selecionadas.',
    image: '/assets/luchese_goiaba.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-frutas-tropicais-250g',
    name: 'Geleia de Frutas Tropicais Premium 250g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 24.90,
    description: 'Combinação exótica e saborosa com pedaços de frutas tropicais.',
    image: '/assets/luchese_frutas_tropicais.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-frutas-vermelhas-cabernet-260g',
    name: 'Geleia de Frutas Vermelhas ao Vinho Cabernet 260g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 24.90,
    description: 'Frutas vermelhas selecionadas com redução especial de Vinho Cabernet.',
    image: '/assets/luchese_frutas_vermelhas_cabernet.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-damasco-250g',
    name: 'Geleia de Damasco Premium 250g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 32.90,
    description: 'Geleia nobre com pedaços graúdos de damasco artesanal.',
    image: '/assets/luchese_damasco.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-cebola-tradicional-250g',
    name: 'Cebola Caramelizada Tradicional 250g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 25.90,
    description: 'Receita original caramelizada lentamente sem corantes nem conservantes.',
    image: '/assets/luchese_cebola_tradicional.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-pimenta-260g',
    name: 'Geleia de Pimenta 260g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 22.90,
    description: 'Geleia de pimenta agridoce marcante, perfeita acompanhante de queijos e assados.',
    image: '/assets/luchese_pimenta.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
  },
  {
    id: 'casa-luchese-antepasto-mediterraneo-210g',
    name: 'Antepasto Mediterrâneo 210g',
    category: 'casa-luchese',
    categoryLabel: 'CASA LUCHESE',
    price: 28.90,
    description: 'Antepasto rústico e saboroso, especial para acompanhar torradinhas e pães.',
    image: '/assets/luchese_antepasto_mediterraneo.jpg',
    tag: 'CASA LUCHESE',
    tagClass: 'gold'
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
    tag: '',
    tagClass: ''
  },

  // --- QUEIJOS ---
  {
    id: 'queijo-colonial-temperado',
    name: 'Queijo Colonial e Colonial Temperado',
    category: 'queijos',
    categoryLabel: 'QUEIJOS ARTESANAIS',
    price: 0,
    isPricePerPiece: true,
    description: 'Queijo artesanal colonial puro e versão temperada com ervas finas. Produzido por peça, peso e valor sob consulta no WhatsApp.',
    image: '/assets/queijo_colonial.jpg',
    tag: '',
    tagClass: ''
  },
  {
    id: 'queijo-colonial-vinho-tinto',
    name: 'Queijo Colonial Maturado no Vinho Tinto',
    category: 'queijos',
    categoryLabel: 'QUEIJOS ARTESANAIS',
    price: 0,
    isPricePerPiece: true,
    description: 'Queijo colonial maturado em vinho tinto selecionado, casca roxa característica e sabor marcante. Produzido por peça, peso e valor sob consulta no WhatsApp.',
    image: '/assets/queijo_vinho_tinto.jpg',
    tag: '',
    tagClass: ''
  },

  // --- CONGELADOS ---
  {
    id: 'morango-congelado-1kg',
    name: 'Morango Congelado Soltinho 1kg',
    category: 'congelados',
    categoryLabel: 'CONGELADOS',
    price: 25.00,
    description: 'Morangos higienizados, sem talo e congelados individualmente (IQF). Prático para sucos e receitas.',
    image: '/assets/crop_ultra_congelado.jpg',
    tag: '',
    tagClass: ''
  },
  {
    id: 'mix-frutas-vermelhas-congeladas',
    name: 'Mix de Frutas Vermelhas Congeladas 500g',
    category: 'congelados',
    categoryLabel: 'CONGELADOS',
    price: 35.00,
    description: 'Seleção especial congelada de morangos, amoras e mirtilos do Rancho.',
    image: '/assets/mix_frutas_congeladas.jpg',
    tag: '',
    tagClass: ''
  },
  {
    id: 'mirtilo-congelado-fresco',
    name: 'Mirtilo (Blueberry) Congelado 500g',
    category: 'congelados',
    categoryLabel: 'CONGELADOS',
    price: 38.00,
    description: 'Mirtilos super nutritivos, antioxidantes e selecionados a dedo.',
    image: '/assets/mirtilo_congelado.jpg',
    tag: '',
    tagClass: ''
  }
];

const STORAGE_KEY = 'rancho_products_custom_db_v4';

export const getStoredProducts = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Erro ao ler produtos do localStorage:', e);
  }
  return products;
};

export const saveStoredProducts = (newProducts) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProducts));
  } catch (e) {
    console.error('Erro ao salvar produtos no localStorage:', e);
  }
};

export const resetProductsToDefault = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Erro ao resetar produtos:', e);
  }
  return products;
};
