import { motion } from 'motion/react';
import { Lock, MapPin, Star } from 'lucide-react';
import { Product } from '../data/products';

const BulletIcon = ({ filled }: { filled: boolean }) => (
  <svg 
    width="22" 
    height="22" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-all duration-300 ${filled ? 'text-[#e9c349] drop-shadow-[0_0_10px_rgba(233,195,73,0.5)]' : 'text-[#c0c7d1]/40'}`}
  >
    <path 
      d="M8 20V12C8 8.5 9.5 4.5 12 2.5C14.5 4.5 16 8.5 16 12V20H8Z" 
      fill={filled ? "currentColor" : "none"} 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path d="M8 18H16" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <path d="M8 22H16" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

export const ProductDetail = ({ 
  product,
  isFavorite,
  onToggleFavorite
}: { 
  product: Product,
  isFavorite: boolean,
  onToggleFavorite: () => void
}) => (
  <motion.main 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="pt-20 pb-32"
  >
    {/* Hero Section */}
    <section className="relative min-h-[707px] flex flex-col lg:flex-row items-center px-6 lg:px-12 gap-12 overflow-hidden">
      {/* Background Decorative Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black opacity-[0.02] pointer-events-none select-none font-headline tracking-tighter">
        SPEC-01
      </div>
      
      {/* Product Image Area */}
      <div className="relative w-full lg:w-3/5 h-[442px] lg:h-[618px] flex items-center justify-center group">
        <div className="absolute inset-0 border-[1px] border-outline-variant opacity-10 pointer-events-none"></div>
        <div className="absolute top-4 left-4 font-headline text-[10px] tracking-widest text-primary opacity-60 uppercase">System Status: Optimal</div>
        <div className="absolute bottom-4 right-4 font-headline text-[10px] tracking-widest text-primary opacity-60 uppercase">X-Axis Calibration: Ready</div>
        <img 
          alt={product.title} 
          className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(233,195,73,0.1)] transition-transform duration-700 group-hover:scale-105" 
          src={product.image}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="w-full lg:w-2/5 flex flex-col gap-8">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {product.badge && <span className="bg-primary-container text-primary text-[10px] font-bold px-2 py-1 tracking-widest font-headline uppercase">{product.badge}</span>}
              <span className="text-secondary text-[10px] font-bold tracking-widest font-headline flex items-center gap-1 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                In Stock
              </span>
            </div>
            <button 
              onClick={onToggleFavorite}
              className={`p-3 border transition-all duration-300 ${isFavorite ? 'border-[#e9c349]/50 bg-[#e9c349]/10' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
            >
              <BulletIcon filled={isFavorite} />
            </button>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold font-headline tracking-tighter leading-none uppercase">{product.title}</h2>
          <p className="text-primary text-3xl font-headline font-light tracking-tight">{product.price}</p>
        </div>
        {/* ... */}
        <p className="text-secondary leading-relaxed text-sm max-w-md">
          {product.description}
        </p>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-2 gap-px bg-outline-variant/20">
          {product.specs.map((spec, i) => (
            <div key={i} className="bg-[#1c1b1b] p-4">
              <p className="text-[10px] text-outline font-headline tracking-[0.2em] uppercase mb-1">{spec.label}</p>
              <p className="font-headline font-bold text-lg uppercase">{spec.value}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 mt-4">
          <button className="metallic-gradient text-on-primary font-headline font-bold py-5 tracking-widest text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer">
            <Lock size={18} fill="currentColor" />
            SECURE ACQUISITION
          </button>
          <button className="border border-outline-variant hover:border-primary text-secondary hover:text-primary font-headline font-bold py-5 tracking-widest text-sm transition-all flex items-center justify-center gap-3 cursor-pointer">
            <MapPin size={18} />
            FIND AN FFL DEALER
          </button>
        </div>
      </div>
    </section>

    {/* Customer Reviews - Bento Style */}
    <section className="mt-24 px-6 lg:px-12">
      <h3 className="text-3xl font-headline font-bold mb-12 tracking-tight flex items-center gap-4 uppercase">
        Field Reports <span className="h-px flex-grow bg-outline-variant/30"></span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {product.reviews.map((review, i) => (
          <div key={i} className={`bg-surface-container-low p-8 flex flex-col justify-between hover:bg-surface-container-high transition-colors ${review.highlight ? 'md:scale-105 border border-primary/20' : ''}`}>
            <div className="space-y-4">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="italic text-on-surface-variant font-light text-lg">{review.text}</p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center font-headline font-bold text-primary">{review.initials}</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest">{review.author}</p>
                <p className="text-[10px] text-outline uppercase">Verified Purchase</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Similar Items */}
    <section className="mt-24 px-6 lg:px-12">
      <div className="flex items-end justify-between mb-8">
        <h3 className="text-3xl font-headline font-bold tracking-tight uppercase">Alternative Ordnance</h3>
        <a className="text-primary font-headline text-[10px] font-bold tracking-widest border-b border-primary pb-1 uppercase" href="#">View All Armory</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {product.similarItems.map((item, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[4/5] bg-surface-container-low overflow-hidden relative">
              <img 
                alt={item.title} 
                className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500" 
                src={item.image}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4">
              <p className="text-[10px] text-outline font-headline tracking-widest mb-1 uppercase">{item.category}</p>
              <h4 className="font-headline font-bold text-sm tracking-tight group-hover:text-primary transition-colors uppercase">{item.title}</h4>
              <p className="text-primary font-headline text-sm mt-1">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.main>
);
