import { Shield, Target, User, BarChart2 } from 'lucide-react';
import { motion } from 'motion/react';
import { View } from '../types';

export const MobileNav = ({ view, setView, favoritesCount = 0 }: { view: View, setView: (v: View) => void, favoritesCount?: number }) => (
  <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 bg-[#131313]/95 backdrop-blur-xl border-t border-white/5 h-20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
    {[
      { icon: Shield, label: 'ARMORY', id: 'home' },
      { icon: Target, label: 'FAVORITES', id: 'favorites' },
      { icon: User, label: 'PROFILE', id: 'profile' },
      { icon: BarChart2, label: 'INTEL', id: 'intel' }
    ].map((item, i) => (
      <button 
        key={i} 
        onClick={() => setView(item.id as View)}
        className={`flex flex-col items-center justify-center pt-2 transition-all active:scale-95 group relative ${view === item.id ? 'text-[#e9c349]' : 'text-[#c0c7d1]/50'}`}
      >
        {view === item.id && (
          <motion.div 
            layoutId="mobile-nav-indicator"
            className="absolute -top-2 w-8 h-1 bg-[#e9c349] rounded-full shadow-[0_0_10px_rgba(233,195,73,0.5)]"
          />
        )}
        <div className="relative mb-1">
          <item.icon 
            size={20} 
            className={`transition-all duration-300 ${view === item.id ? 'scale-110' : 'group-hover:text-white'}`} 
          />
          {item.id === 'favorites' && favoritesCount > 0 && (
            <div className="absolute -top-1.5 -right-2 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-black border border-[#131313] bg-[#e9c349] text-[#131313]">
              {favoritesCount}
            </div>
          )}
        </div>
        <span className="font-headline font-black text-[9px] uppercase tracking-[0.2em]">{item.label}</span>
      </button>
    ))}
  </nav>
);
