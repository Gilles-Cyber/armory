import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
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

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
        onBack={() => setCurrentView('home')}
      />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <Home onProductClick={handleProductClick} />
        ) : currentView === 'profile' ? (
          <Profile key="profile" />
        ) : (
          <ProductDetail product={selectedProduct} />
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

