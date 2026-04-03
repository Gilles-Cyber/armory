import { motion } from 'motion/react';

export const Hero = () => (
  <section className="relative h-screen flex items-center justify-start overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        className="w-full h-full object-cover object-center opacity-60" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv_HJoqR1FsvVDnmMGOR65MV4xkb36TWpxI0wW3HJJTLws0ZGnAtxHLmt4-x6cKcnfsYbD7mNfMsgO7o6KZDrVzNyPhZnOEPOz_DTylp7ajuFV79qO5y958nRstq6LIq-RG4TcC482KgCevRyPg7Af1iX4BcpETRSaOtXrmeQABxlfyodS2JoyUbGH2fmA4Hg33_KHYBC_7JO-ocUvRo0uI2pAyfnQtqAJ8Wv-wz3wMGg1s8WxQwXiy2HkpY24Gl0-T2Q4822Wby4" 
        alt="Tactical Rifle"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
    </div>
    
    <div className="relative z-10 px-6 md:px-20 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-3 py-1 mb-6 bg-surface-container-high border border-outline-variant/20 text-primary text-xs font-bold tracking-[0.2em] uppercase font-headline">
          Establish Authority
        </span>
        <h1 className="text-5xl md:text-8xl font-black font-headline uppercase leading-tight tracking-tighter mb-8">
          Precision <br/>
          <span className="text-primary italic">Reimagined</span>
        </h1>
        <p className="text-lg md:text-xl text-secondary max-w-lg mb-10 leading-relaxed">
          Engineered for the operator who demands absolute reliability. Every component is selected for performance under pressure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="metallic-gradient px-10 py-5 text-on-primary font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all cursor-pointer">
            Shop the Collection
          </button>
          <button className="bg-transparent border border-outline-variant/30 px-10 py-5 text-on-surface font-bold uppercase tracking-widest text-sm hover:bg-surface-container-high transition-all cursor-pointer">
            Technical Specs
          </button>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-20 right-12 hidden lg:block text-right">
      <div className="text-surface-container-highest text-[10rem] font-black font-headline leading-none select-none opacity-20">
        S-01
      </div>
    </div>
  </section>
);
