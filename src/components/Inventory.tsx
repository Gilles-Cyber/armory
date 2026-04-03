import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

export const Inventory = ({ onProductClick }: { onProductClick: (productId: string) => void }) => (
  <section className="py-24 px-6 md:px-20 bg-surface">
    <div className="flex justify-between items-end mb-16">
      <div>
        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase block mb-2">New Arrivals</span>
        <h2 className="text-4xl md:text-5xl font-black font-headline uppercase tracking-tighter">Current Inventory</h2>
      </div>
      <div className="flex gap-4">
        <button className="w-12 h-12 border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-all cursor-pointer">
          <ChevronLeft size={20} />
        </button>
        <button className="w-12 h-12 border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-all cursor-pointer">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          title={product.title} 
          price={product.price} 
          onClick={() => onProductClick(product.id)}
          specs={product.shortSpecs} 
          image={product.image} 
          badge={product.badge}
        />
      ))}
    </div>
  </section>
);
