export const Footer = () => (
  <footer className="w-full py-12 px-8 flex flex-col items-center gap-4 bg-surface">
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      {['Secure Checkout', 'Terms of Deployment', 'Privacy Protocol'].map(item => (
        <a key={item} href="#" className="text-xs uppercase tracking-widest text-secondary hover:text-white transition-colors">
          {item}
        </a>
      ))}
    </div>
    <span className="text-primary font-bold text-xl font-headline tracking-wider mb-2">ARMORY</span>
    <p className="text-secondary text-xs uppercase tracking-widest opacity-50">
      © 2026 ARMORY. ENGINEERED PRECISION.
    </p>
  </footer>
);
