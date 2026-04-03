import { Lock, Headset, Cpu } from 'lucide-react';

export const TrustSection = () => (
  <section className="py-24 px-6 md:px-20 bg-surface-container-lowest border-y border-outline-variant/10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
      {[
        { icon: Lock, title: "Secure Vault Transfers", desc: "Every transaction is handled with mission-critical security protocols and direct coordination with certified FFL partners nationwide." },
        { icon: Headset, title: "Expert Field Support", desc: "Access our specialists for deep technical consultation, platform optimization, and tactical integration advice." },
        { icon: Cpu, title: "Technical Precision", desc: "We don't just sell products; we verify performance. Every platform undergoes rigorous inspection before entering our inventory." }
      ].map((item, i) => (
        <div key={i} className="text-center md:text-left">
          <item.icon className="text-primary w-12 h-12 mb-6 mx-auto md:mx-0" strokeWidth={1.5} />
          <h3 className="text-2xl font-bold font-headline uppercase tracking-tight mb-4">{item.title}</h3>
          <p className="text-secondary leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
