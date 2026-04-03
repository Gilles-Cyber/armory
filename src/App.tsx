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
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('armory_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [notification, setNotification] = useState<{ message: string, active: boolean } | null>(null);

  useEffect(() => {
    localStorage.setItem('armory_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (productId: string) => {
    const isAdding = !favorites.includes(productId);
    const product = products.find(p => p.id === productId);
    
    setFavorites(prev => 
      isAdding ? [...prev, productId] : prev.filter(id => id !== productId)
    );

    setNotification({
      message: isAdding ? `${product?.title.toUpperCase()} MARKED` : `${product?.title.toUpperCase()} UNMARKED`,
      active: true
    });

    setTimeout(() => setNotification(null), 3000);
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
        favoritesCount={favorites.length}
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
      <MobileNav view={currentView} setView={setCurrentView} favoritesCount={favorites.length} />

      {/* Tactical Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%', scale: 0.95 }}
            className="fixed bottom-24 left-1/2 z-[100] flex items-center gap-3 px-6 py-3 bg-[#131313]/90 backdrop-blur-xl border border-gold/30 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-headline font-black text-[10px] uppercase tracking-[0.25em] text-gold whitespace-nowrap">
              {notification.message}
            </span>
            <div className="ml-4 flex gap-1">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-3 h-0.5 bg-gold/20" />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

