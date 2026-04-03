import React, { ReactNode, useState } from 'react';
import { Circle } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  specs: ReactNode;
  image: string;
  badge?: string;
  onClick?: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

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

export const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  price, 
  specs, 
  image, 
  badge, 
  onClick,
  isFavorite,
  onToggleFavorite
}) => {
  return (
    <div 
      onClick={onClick}
      className="bg-[#1c1b1b] p-8 group transition-all duration-300 hover:bg-[#252424] border border-white/5 relative cursor-pointer"
    >
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite?.();
        }}
        className="absolute top-6 right-6 z-10 p-2 transition-transform active:scale-90"
      >
        <BulletIcon filled={!!isFavorite} />
      </button>
      {badge && (
      <span className="absolute top-6 left-6 text-[10px] text-primary border border-primary/30 px-2 py-1 uppercase tracking-widest font-bold">
        {badge}
      </span>
    )}
    <div className="aspect-[4/3] mb-8 overflow-hidden">
      <img 
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
        src={image} 
        alt={title}
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <h4 className="text-xl font-bold font-headline uppercase tracking-tight">{title}</h4>
        <span className="text-primary font-bold font-headline">{price}</span>
      </div>
      <div className="flex gap-2 text-[10px] text-secondary/60 uppercase tracking-widest font-bold">
        {specs}
      </div>
      <div className="flex flex-col gap-2">
        <button className="w-full metallic-gradient py-4 text-on-primary font-black uppercase tracking-[0.2em] text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 cursor-pointer">
          Add to Cart
        </button>
        <button className="w-full border border-primary/30 py-4 text-primary font-black uppercase tracking-[0.2em] text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 cursor-pointer hover:bg-primary/10">
          View Logistics
        </button>
      </div>
    </div>
  </div>
  );
};
