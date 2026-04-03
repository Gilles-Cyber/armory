import { ArrowRight } from 'lucide-react';

export const CategoryCard = ({ title, subtitle, image, large = false }: { title: string, subtitle: string, image: string, large?: boolean }) => (
  <div className={`${large ? 'md:col-span-8' : 'md:col-span-4'} group relative overflow-hidden ${large ? 'bg-surface-container-highest' : 'bg-surface-container'} h-[400px] md:h-full`}>
    <img 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70" 
      src={image} 
      alt={title}
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
    <div className="absolute bottom-8 left-8">
      <h3 className="text-3xl md:text-4xl font-bold font-headline uppercase tracking-tight mb-2">{title}</h3>
      <p className="text-secondary tracking-widest text-xs uppercase mb-4">{subtitle}</p>
      <a className="text-primary font-bold text-sm tracking-widest uppercase flex items-center gap-2 group/link" href="#">
        Explore <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
);

export const Categories = () => (
  <section className="py-24 px-6 md:px-20 bg-surface-container-low">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
      <CategoryCard 
        title="Handguns" 
        subtitle="Tactical Sidearms" 
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCkrUnxn_KUNwd4Z9Wu1AOn4YlWXcBRZDhwzUcYCJflcpor1mDAzRCz9hbsomDKhKg5cPtQtWqKhUuvMOLkBA7CC_UrhnH3yn2khd2Ls1BPEbDuP6D7sDJxfp-m2r07E35fJ4uQSE3dIwIPQ5XOb3gIVy0h71_3PoD_-JxWCSChj1i0KFnipfl1KQYwhen_Srz4S8hYJwwWZy3uLPfYO0R174H-CoQ1DWypu5-pVejSoFZGRVzJ2ygspg3iL1WoEZNeDYZbcTNVA_s" 
        large 
      />
      <CategoryCard 
        title="Gear" 
        subtitle="Field Equipment" 
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuB3T0y0vOugJhw5b03SBoDklZz0IKjnUiSS8cMIihWdG3TA7oTSOgeC7Ny8fIsJrhZzN79oHvxRX2kiD3YC89tuipvJtrlo4qRTUkiy8XEjefRVf2_6CWc0yePFAFFlWg7iT-FOD8GIJotB_oqe03-hzEzrLlo0Y8gHTwaSjeHBRj0F5N81cZqASVxgEGMues5Y5hE5AXFCQShsCC-F-xDrJBbgp8hSKBBF45h1vEZcsl7GIzbIiS4e_p8KvziSn8MIMnXuvee9A9c" 
      />
      <CategoryCard 
        title="Rifles" 
        subtitle="Precision Rifles" 
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuANnZJSrPkGlWkjG4ERA1fnyHgybGC6jK97TvwH55P7WDOYCjT4QlOXifAjr6e-Xn-JGCr7FWqAEUZSqVXcvIT9N1FGtD5Rk2nv2wKGXzSSzpXRhWEZBlEkE255R0mR1ZMGaGONvHpzadM6hD0kU5eoZ4ugo0CKIvz69K7F_evyCUtRW4FrifdB7hRjs0J3kx7dTQH58gS2TYsy-1z8BIL-LG8-YwLvolE0QMjM6DXGl8W7vrouCl03bClW46dGG7acjHkTbzT1l_c" 
      />
      <CategoryCard 
        title="Shotguns" 
        subtitle="Dynamic Response" 
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBpvnOR5KoDIwPNC5sD-XDl8LEGQw2VHZC166yWxLmlCXmBf0FJHudFYMoB8h9fB_kWkgL7L8ZTltp4eu4e0n0IoX5udEW1Vnb87SOHl0txy-_CyXjlgjV3IY5-jOA8e4Hew9qe8jsgoggZXsHv7wJBZWE2epqBaEmct-x8wLTkwuLWGAqPgX3YOJgXf-jgiHobXuVs2OoOHRcuoZSvN_0r0y-4qRlQGlfcfs3iuhzF0Crr4EVs2X0UMv6PjZggc3IVhRy8mgGKYLY" 
        large 
      />
    </div>
  </section>
);
