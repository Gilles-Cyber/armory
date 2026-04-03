import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const statuses = [
    'Establishing secure connection…',
    'Verifying dealer credentials…',
    'Loading inventory database…',
    'Applying ballistic specifications…',
    'Arming the interface…',
    'Ready to enter.',
  ];

  useEffect(() => {
    const startTime = Date.now() + 1400;
    const duration = 2400;
    
    let progressFrame: number;
    const updateProgress = () => {
      const now = Date.now();
      const t = Math.max(0, Math.min(1, (now - startTime) / duration));
      const ease = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(ease * 100));
      if (t < 1) {
        progressFrame = requestAnimationFrame(updateProgress);
      }
    };

    const progressTimer = setTimeout(() => {
      progressFrame = requestAnimationFrame(updateProgress);
    }, 1400);

    const statusSchedule = [1400, 1900, 2400, 2900, 3300, 3700];
    const statusTimers = statusSchedule.map((time, index) => 
      setTimeout(() => setStatusIndex(index), time)
    );

    // Custom Cursor Logic
    let mx = -100, my = -100, rx = -100, ry = -100;
    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animateCursor = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top = `${my}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      requestAnimationFrame(animateCursor);
    };
    const cursorAnimFrame = requestAnimationFrame(animateCursor);

    return () => {
      clearTimeout(progressTimer);
      cancelAnimationFrame(progressFrame);
      statusTimers.forEach(clearTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(cursorAnimFrame);
    };
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(onComplete, 700);
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-ink font-barlow select-none cursor-none">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed z-[9999] w-3 h-3 rounded-full bg-fire pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-[width,height,background] duration-150"
      />
      <div 
        ref={ringRef}
        className="fixed z-[9998] w-9 h-9 rounded-full border border-fire/50 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-250 ease-out"
      />

      {/* Exit Overlay */}
      <AnimatePresence>
        {isExiting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-ink z-[200] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_60%,#1e1008_0%,#0d0906_40%,#050403_100%)]" />
      <div className="bg-grain absolute inset-[-50%] w-[200%] h-[200%] opacity-[0.28]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
      <div className="scanlines absolute inset-0 z-5 pointer-events-none" />

      {/* Muzzle Flash */}
      <div className="animate-flash absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,200,80,0.9)_0%,rgba(232,101,26,0.6)_20%,rgba(180,40,0,0.3)_50%,transparent_70%)] pointer-events-none" />

      {/* Smoke Wisps */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i}
            className="animate-smoke absolute rounded-full bg-[radial-gradient(circle,rgba(120,110,100,0.12)_0%,transparent_70%)] opacity-0"
            style={{
              width: `${[300, 200, 400, 150][i-1]}px`,
              height: `${[300, 200, 400, 150][i-1]}px`,
              left: `${[10, 60, 30, 75][i-1]}%`,
              bottom: `${[-10, -5, -15, -5][i-1]}%`,
              animationDuration: `${[14, 10, 18, 8][i-1]}s`,
              animationDelay: `${[0.5, 1.2, 2, 0.8][i-1]}s`
            }}
          />
        ))}
      </div>

      {/* Expanding Reticle Rings */}
      {[0.2, 0.4, 0.6].map((delay, i) => (
        <div 
          key={i}
          className="animate-reticle-expand absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10 pointer-events-none"
          style={{
            width: `${[400, 600, 800][i]}px`,
            height: `${[400, 600, 800][i]}px`,
            animationDelay: `${delay}s`,
            borderColor: `rgba(184,146,42,${[0.08, 0.05, 0.03][i]})`
          }}
        />
      ))}

      {/* Crosshair */}
      <motion.div 
        initial={{ opacity: 0, scale: 2.5, rotate: 45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <svg className="animate-crosshair-spin w-[220px] h-[220px]" viewBox="0 0 220 220" fill="none">
          <circle cx="110" cy="110" r="100" stroke="rgba(184,146,42,0.15)" strokeWidth="1"/>
          <g stroke="rgba(184,146,42,0.3)" strokeWidth="1">
            <line x1="110" y1="10" x2="110" y2="26"/>
            <line x1="110" y1="194" x2="110" y2="210"/>
            <line x1="10" y1="110" x2="26" y2="110"/>
            <line x1="194" y1="110" x2="210" y2="110"/>
            <line x1="150" y1="12" x2="148" y2="22"/>
            <line x1="70" y1="12" x2="72" y2="22"/>
            <line x1="150" y1="208" x2="148" y2="198"/>
            <line x1="70" y1="208" x2="72" y2="198"/>
            <line x1="12" y1="70" x2="22" y2="72"/>
            <line x1="12" y1="150" x2="22" y2="148"/>
            <line x1="208" y1="70" x2="198" y2="72"/>
            <line x1="208" y1="150" x2="198" y2="148"/>
          </g>
          <circle cx="110" cy="110" r="40" stroke="rgba(184,146,42,0.2)" strokeWidth="1" strokeDasharray="6 4"/>
          <circle cx="110" cy="110" r="4" fill="rgba(232,101,26,0.6)"/>
          <circle cx="110" cy="110" r="1.5" fill="rgba(255,200,80,0.9)"/>
          <path d="M 60 60 L 60 70 M 60 60 L 70 60" stroke="rgba(184,146,42,0.4)" strokeWidth="1.5"/>
          <path d="M 160 60 L 160 70 M 160 60 L 150 60" stroke="rgba(184,146,42,0.4)" strokeWidth="1.5"/>
          <path d="M 60 160 L 60 150 M 60 160 L 70 160" stroke="rgba(184,146,42,0.4)" strokeWidth="1.5"/>
          <path d="M 160 160 L 160 150 M 160 160 L 150 160" stroke="rgba(184,146,42,0.4)" strokeWidth="1.5"/>
        </svg>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute inset-0 p-6 pointer-events-none">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute top-6 left-6 w-10 h-10">
          <svg viewBox="0 0 40 40" fill="none"><path d="M0 20 L0 0 L20 0" stroke="rgba(184,146,42,0.3)" strokeWidth="1"/></svg>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute top-6 right-6 w-10 h-10 scale-x-[-1]">
          <svg viewBox="0 0 40 40" fill="none"><path d="M0 20 L0 0 L20 0" stroke="rgba(184,146,42,0.3)" strokeWidth="1"/></svg>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute bottom-6 left-6 w-10 h-10 scale-y-[-1]">
          <svg viewBox="0 0 40 40" fill="none"><path d="M0 20 L0 0 L20 0" stroke="rgba(184,146,42,0.3)" strokeWidth="1"/></svg>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute bottom-6 right-6 w-10 h-10 scale-[-1]">
          <svg viewBox="0 0 40 40" fill="none"><path d="M0 20 L0 0 L20 0" stroke="rgba(184,146,42,0.3)" strokeWidth="1"/></svg>
        </motion.div>
      </div>

      {/* Side Decorations */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute top-1/2 left-8 -translate-y-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold/25 [writing-mode:vertical-rl]">Est. 1987</span>
        <span className="font-bebas text-4xl text-gold/10 tracking-widest [writing-mode:vertical-rl]">45</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col gap-5 items-end">
        {[
          { label: 'Caliber', val: '.308 WIN' },
          { label: 'Class', val: 'PREMIUM' },
          { label: 'Status', val: 'SECURE' }
        ].map((item, i) => (
          <div key={i} className="text-right">
            <span className="block text-[8px] font-bold tracking-[0.28em] uppercase text-gold/25 mb-1">{item.label}</span>
            <span className="text-sm font-bold text-gold/35 tracking-wider">{item.val}</span>
            <div className="animate-tele-bar relative h-[1px] w-[60px] bg-gold/10 mt-1 overflow-hidden" />
          </div>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-3 border border-gold/30 rounded-sm px-4 py-1.5 mb-6"
        >
          <div className="w-6 h-[1px] bg-gold" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold">Licensed Firearms Dealer</span>
          <div className="w-6 h-[1px] bg-gold" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scaleX: 1.4, scaleY: 0.6, letterSpacing: '0.25em' }}
          animate={{ opacity: 1, scaleX: 1, scaleY: 1, letterSpacing: '0.04em' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0, 0.1, 1] }}
          className="text-glitch font-bebas text-[clamp(5rem,14vw,11rem)] leading-[0.88] tracking-[0.04em] text-transparent bg-gradient-to-b from-[#f0e8d8] via-[#c8b890] to-[#8a6830] bg-clip-text"
          data-text="ARMORY"
        >
          ARMORY
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-[clamp(0.9rem,2.5vw,1.4rem)] font-light tracking-[0.5em] uppercase text-gold/60 mt-3"
        >
          Precision · Power · Trust
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex items-center gap-4 my-6"
        >
          <div className="w-[120px] h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="text-gold text-[10px] tracking-widest">⬡</div>
          <div className="w-[120px] h-[1px] bg-gradient-to-r from-gold/40 via-gold/40 to-transparent" />
        </motion.div>

        {/* Loader */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="relative w-[min(320px,70vw)]"
        >
          <div className="flex justify-between text-[10px] font-semibold tracking-[0.22em] uppercase text-gold/50 mb-2">
            <span>Initializing</span>
            <span>{progress}%</span>
          </div>
          <div className="h-[2px] bg-white/5 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-rust via-ember to-gold transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
            <div 
              className="absolute top-[-3px] w-5 h-2 bg-[radial-gradient(circle,var(--color-fire)_0%,transparent_70%)] opacity-0 transition-[left] duration-300"
              style={{ left: `${progress}%`, opacity: progress > 0 && progress < 100 ? 1 : 0 }}
            />
          </div>
          <div className="status-text mt-5 text-[10px] font-semibold tracking-[0.35em] uppercase text-gold/45 h-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={statusIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {statuses[statusIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Enter Button */}
        <motion.button 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8 }}
          onClick={handleEnter}
          className="group relative mt-10 inline-flex items-center gap-3 px-10 py-3.5 border border-gold/40 bg-transparent text-gold font-bold text-sm tracking-[0.4em] uppercase overflow-hidden transition-colors hover:text-white hover:border-gold/80 hover:shadow-[0_0_30px_rgba(184,146,42,0.15),inset_0_0_30px_rgba(184,146,42,0.05)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          Enter Armory
          <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>

      {/* Bottom Info */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-8 whitespace-nowrap"
      >
        {['FFL Licensed', 'Age 21+ Required', 'Background Check Mandatory', 'Armory Arms © 2026'].map((text, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-gold/20">{text}</span>
            {i < 3 && <div className="w-0.5 h-0.5 rounded-full bg-gold/20" />}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
