import { Menu, ArrowLeft, Search } from 'lucide-react';
import { View } from '../types';

export const Navbar = ({ onMenuClick, view, onBack }: { onMenuClick: () => void, view: View, onBack: () => void }) => (
  <nav className="fixed top-0 w-full z-50 bg-[#131313] dark:bg-[#131313] opacity-80 backdrop-blur-xl border-b border-[#45474a]/20">
    <div className="flex justify-between items-center px-6 py-4 w-full">
      <div className="flex items-center gap-4">
        {view !== 'home' && (
          <button
            onClick={onBack}
            className="text-[#e9c349] hover:scale-110 transition-transform cursor-pointer"
          >
            <ArrowLeft size={24} />
          </button>
        )}
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#e9c349]">shield</span>
          <span className="text-lg font-bold text-[#e9c349] tracking-tighter font-headline uppercase tracking-widest">
            ARMORY
          </span>
        </div>
      </div>

      <div className="hidden md:flex gap-8 items-center">
        {view === 'home' && ['Armory', 'Handguns', 'Rifles', 'Shotguns', 'Gear'].map((item) => (
          <a
            key={item}
            href="#"
            className={`font-headline font-bold uppercase tracking-wider text-sm transition-colors duration-200 ${item === 'Armory' ? 'text-[#e9c349]' : 'text-[#c0c7d1] hover:text-[#e9c349]'}`}
          >
            {item}
          </a>
        ))}
        {view === 'detail' && (
          <span className="font-headline text-[10px] tracking-[0.2em] text-[#c0c7d1] opacity-50 uppercase tracking-widest">
            LAT: 34.0522 N / LONG: 118.2437 W
          </span>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-[#c0c7d1] hover:text-[#e9c349] transition-colors duration-200">
          settings_input_component
        </button>
        <button
          onClick={onMenuClick}
          className="text-[#e9c349] hover:scale-110 transition-transform cursor-pointer md:hidden"
        >
          <Menu size={24} />
        </button>
      </div>
    </div>
  </nav>
);
