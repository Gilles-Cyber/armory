import { Home, Crosshair, Target, Zap, Shield } from 'lucide-react';
import { View } from '../types';

export const MobileNav = ({ view, setView }: { view: View, setView: (v: View) => void }) => (
  <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 bg-[#131313] dark:bg-[#131313] border-t border-[#45474a]/20 h-20">
    {[
      { icon: 'shield', label: 'ARMORY', id: 'home' },
      { icon: 'lock', label: 'VAULT', id: 'vault' },
      { icon: 'person', label: 'PROFILE', id: 'profile' },
      { icon: 'analytics', label: 'INTEL', id: 'intel' }
    ].map((item, i) => (
      <a 
        key={i} 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          if (item.id === 'home' || item.id === 'profile') {
            setView(item.id as View);
          }
        }}
        className={`flex flex-col items-center justify-center pt-2 transition-all active:scale-95 ${view === item.id ? 'text-[#e9c349] border-t-2 border-[#e9c349] -mt-[2px]' : 'text-[#c0c7d1] hover:bg-[#1c1b1b]'}`}
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: view === item.id ? "'FILL' 1" : "'FILL' 0" }}>
          {item.icon}
        </span>
        <span className="font-headline font-bold text-[10px] uppercase tracking-[0.1em]">{item.label}</span>
      </a>
    ))}
  </nav>
);
