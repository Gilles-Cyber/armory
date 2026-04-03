import { motion, AnimatePresence } from 'motion/react';
import { User, Target, Headset, Cpu, History } from 'lucide-react';

export const Sidebar = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
        />
        <motion.aside 
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-y-0 left-0 z-[70] flex flex-col h-full w-80 bg-surface shadow-[20px_0_40px_rgba(0,0,0,0.4)]"
        >
          <div className="p-8 flex items-center gap-4 bg-surface-container-low">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
            </div>
            <div>
              <h4 className="text-primary font-black font-headline uppercase leading-none">OPERATOR ALPHA-ONE</h4>
              <p className="text-secondary text-xs uppercase opacity-60">S-Class Specialist</p>
              <p className="text-primary text-[10px] uppercase font-bold mt-1">Level 5 Access</p>
            </div>
          </div>
          
          <div className="flex-1 py-8">
            {[
              { icon: Target, label: 'Marked Ordnance' },
              { icon: Headset, label: 'Expert Support' },
              { icon: Cpu, label: 'Technical Specs' },
              { icon: History, label: 'Order History' }
            ].map((item, i) => (
              <a 
                key={i} 
                href="#" 
                className={`flex items-center gap-4 px-8 py-4 font-headline uppercase tracking-widest transition-colors ${i === 0 ? 'text-primary bg-surface-container-low' : 'text-secondary hover:bg-surface-container-highest'}`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </motion.aside>
      </>
    )}
  </AnimatePresence>
);
