import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { Inventory } from '../components/Inventory';
import { TrustSection } from '../components/TrustSection';

import { products } from '../data/products';

export const Home = ({ 
  onProductClick, 
  favorites, 
  onToggleFavorite 
}: { 
  onProductClick: (productId: string) => void,
  favorites: string[],
  onToggleFavorite: (productId: string) => void
}) => (
  <motion.main 
    key="home"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex-grow"
  >
    <Hero />
    <Categories />
    <Inventory 
      onProductClick={onProductClick} 
      products={products}
      favorites={favorites}
      onToggleFavorite={onToggleFavorite}
    />
    <TrustSection />
  </motion.main>
);
