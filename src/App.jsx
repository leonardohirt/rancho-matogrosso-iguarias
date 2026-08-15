import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import About from './components/About';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Locations from './components/Locations';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { getStoredProducts, saveStoredProducts, resetProductsToDefault } from './data/products';

export default function App() {
  const [productsList, setProductsList] = useState(getStoredProducts);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Rota Oculta de Administração (/adm ou #adm)
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  useEffect(() => {
    const checkAdminRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      
      const isAdm = path.includes('/adm') || hash.includes('adm') || search.includes('adm');
      setIsAdminRoute(isAdm);
    };

    checkAdminRoute();
    window.addEventListener('popstate', checkAdminRoute);
    window.addEventListener('hashchange', checkAdminRoute);

    return () => {
      window.removeEventListener('popstate', checkAdminRoute);
      window.removeEventListener('hashchange', checkAdminRoute);
    };
  }, []);

  const handleUpdateProducts = (newList) => {
    setProductsList(newList);
    saveStoredProducts(newList);
  };

  const handleResetDefault = () => {
    const defaultList = resetProductsToDefault();
    setProductsList(defaultList);
  };

  const handleCloseAdmin = () => {
    setIsAdminRoute(false);
    if (window.location.pathname.toLowerCase().includes('/adm')) {
      window.history.pushState({}, '', '/');
    } else if (window.location.hash.toLowerCase().includes('adm')) {
      window.history.pushState({}, '', window.location.pathname);
    }
  };

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Se a URL for /adm, exibe o Painel de Administração Oculto
  if (isAdminRoute) {
    return (
      <AdminPanel 
        products={productsList}
        onUpdateProducts={handleUpdateProducts}
        onResetDefault={handleResetDefault}
        onCloseAdmin={handleCloseAdmin}
      />
    );
  }

  return (
    <div className="app-root">
      <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      <Hero />
      <Catalog 
        products={productsList} 
        onAddToCart={handleAddToCart} 
        onQuickView={(product) => setSelectedProduct(product)} 
      />
      <About />
      <Reviews />
      <Gallery />
      <Locations />
      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
      />

      <ProductModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
