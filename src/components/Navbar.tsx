import { Menu, ArrowLeft, Shield, User, Terminal, Cpu } from 'lucide-react';
import { View } from '../types';

export const Navbar = ({ 
  onMenuClick, 
  view, 
  setView, 
  onBack,
  favoritesCount = 0
}: { 
  onMenuClick: () => void, 
  view: View, 
  setView: (view: View) => void, 
  onBack: () => void,
  favoritesCount?: number
}) => (
  <nav className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl border-b border-[#e9c349]/10 py-3">
    <div className="flex justify-between items-center px-4 md:px-8 w-full">
      <div className="flex items-center gap-6">
        {view !== 'home' && (
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-[#e9c349] hover:text-white transition-all duration-300 pointer-events-auto"
          >
            <div className="p-1.5 rounded-full border border-[#e9c349]/30 group-hover:border-[#e9c349] group-hover:bg-[#e9c349]/10 transition-all">
              <ArrowLeft size={16} />
            </div>
          </button>
        )}
        <div 
          onClick={() => setView('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            <Shield className="text-[#e9c349] w-6 h-6 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(233,195,73,0.5)]" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#e9c349] font-headline tracking-[0.2em] uppercase leading-none">
              ARMORY
            </span>
            <span className="text-[8px] text-[#c0c7d1] font-headline tracking-[0.3em] font-bold opacity-40 uppercase mt-1">
              Tactical Systems
            </span>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:flex gap-1 items-center bg-[#1c1b1b] px-1.5 py-1 border border-white/5 rounded-full">
        {[
          { id: 'home', label: 'ARMORY' },
          { id: 'favorites', label: 'FAVORITES' },
          { id: 'intel', label: 'INTEL' }
        ].map((item) => (
          <button 
            key={item.id} 
            onClick={() => setView(item.id as View)}
            className={`relative font-headline px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
              (view === item.id) 
              ? 'bg-[#e9c349] text-[#131313] shadow-[0_0_20px_rgba(233,195,73,0.3)]' 
              : 'text-[#c0c7d1] hover:text-[#e9c349] hover:bg-white/5'
            }`}
          >
            {item.label}
            {item.id === 'favorites' && favoritesCount > 0 && (
              <span className={`absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-black border border-[#131313] ${view === item.id ? 'bg-[#131313] text-[#e9c349]' : 'bg-[#e9c349] text-[#131313]'}`}>
                {favoritesCount}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-4 bg-[#1c1b1b] border border-white/5 px-4 py-1.5 rounded-sm">
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[9px] font-headline font-black text-emerald-500 tracking-wider uppercase opacity-80">Connected</span>
           </div>
           <div className="w-[1px] h-4 bg-white/10"></div>
           <button 
             onClick={() => setView('profile')}
             className={`flex items-center gap-3 transition-all group ${view === 'profile' ? 'text-[#e9c349]' : 'text-[#c0c7d1] hover:text-white'}`}
           >
             <div className="text-right hidden sm:block">
               <div className="text-[9px] font-headline font-black tracking-widest uppercase">ALPHA-ONE</div>
               <div className="text-[7px] font-headline font-bold opacity-40 tracking-widest leading-none">LVL 5 OPERATOR</div>
             </div>
             <User size={18} className={view === 'profile' ? 'text-[#e9c349]' : 'group-hover:text-[#e9c349] transition-colors'} />
           </button>
        </div>

        <button className="p-2 text-[#c0c7d1] hover:text-[#e9c349] transition-all">
          <Terminal size={18} />
        </button>

        <button 
          onClick={onMenuClick}
          className="text-[#e9c349] hover:scale-110 transition-transform cursor-pointer md:hidden p-2"
        >
          <Menu size={24} />
        </button>
      </div>
    </div>
  </nav>
);
