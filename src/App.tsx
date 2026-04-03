import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';
import { ProductDetail } from './components/ProductDetail';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { View } from './types';
import { SplashScreen } from './components/SplashScreen';
import { products } from './data/products';
import { Inventory } from './components/Inventory';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  // Prevent scroll when sidebar is open or loading
  useEffect(() => {
    if (isSidebarOpen || isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen, isLoading]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentView('detail');
  };

  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];

  return (
    <div className="min-h-screen flex flex-col bg-surface selection:bg-primary selection:text-on-primary">
      <AnimatePresence>
        {isLoading && (
          <SplashScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <Navbar 
        onMenuClick={() => setIsSidebarOpen(true)} 
        view={currentView}
        setView={setCurrentView}
        onBack={() => setCurrentView('home')}
      />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <Home 
            onProductClick={handleProductClick} 
            favorites={favorites} 
            onToggleFavorite={toggleFavorite} 
          />
        ) : currentView === 'profile' ? (
          <Profile key="profile" />
        ) : currentView === 'favorites' ? (
          <motion.div 
            key="favorites"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex-grow pt-24"
          >
             <Inventory 
                title="Bookmarked Ordnance" 
                products={products.filter(p => favorites.includes(p.id))} 
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onProductClick={handleProductClick} 
             />
          </motion.div>
        ) : (
          <ProductDetail 
            product={selectedProduct} 
            isFavorite={favorites.includes(selectedProduct.id)}
            onToggleFavorite={() => toggleFavorite(selectedProduct.id)}
          />
        )}
      </AnimatePresence>

      <Footer />
      <MobileNav view={currentView} setView={setCurrentView} />

      {/* Decorative Corner Elements */}
      <div className="fixed top-20 left-0 p-2 opacity-20 pointer-events-none hidden lg:block z-40">
        <div className="w-16 h-16 border-l-2 border-t-2 border-primary"></div>
      </div>
      <div className="fixed top-20 right-0 p-2 opacity-20 pointer-events-none hidden lg:block z-40">
        <div className="w-16 h-16 border-r-2 border-t-2 border-primary"></div>
      </div>
    </div>
  );
}

