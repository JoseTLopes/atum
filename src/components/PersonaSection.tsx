import React from 'react';
import { Paintbrush, Smartphone, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAS } from '../data/landingData';

const getPersonaIcon = (iconName: string) => {
  switch (iconName) {
    case 'Paintbrush':
      return <Paintbrush className="text-purple-400 w-6 h-6" />;
    case 'Smartphone':
      return <Smartphone className="text-pink-400 w-6 h-6" />;
    case 'Layers':
      return <Layers className="text-blue-400 w-6 h-6" />;
    default:
      return <Layers className="text-purple-400 w-6 h-6" />;
  }
};

export const PersonaSection: React.FC = () => {
  return (
    <section id="personas-section" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div id="personas-header" className="text-center mb-16">
          <h2 id="personas-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Who is this for?
          </h2>
          <p id="personas-subheading" className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Engineered for professionals who value visual storytelling and fast design velocity.
          </p>
        </div>

        <div id="personas-grid" className="grid md:grid-cols-3 gap-8">
          {PERSONAS.map((p, i) => (
            <motion.div
              id={`persona-card-${p.id}`}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              key={p.id || i}
              className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.01] border border-white/10 hover:border-purple-500/40 transition-colors shadow-xl"
            >
              <div 
                id={`persona-icon-box-${p.id}`}
                className="w-12 h-12 rounded-2xl bg-zinc-900/90 flex items-center justify-center mb-6 border border-white/10 shadow-inner"
              >
                {getPersonaIcon(p.iconName)}
              </div>
              <h3 id={`persona-title-${p.id}`} className="text-xl font-bold text-white mb-4">
                {p.role}
              </h3>
              <div className="space-y-4">
                <div id={`persona-pain-${p.id}`} className="bg-red-500/5 p-3.5 rounded-xl border border-red-500/10">
                  <span className="inline-block text-[10px] uppercase tracking-widest text-red-400 font-bold mb-1">
                    The Pain
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">{p.frustration}</p>
                </div>
                <div id={`persona-gain-${p.id}`} className="bg-emerald-500/5 p-3.5 rounded-xl border border-emerald-500/10">
                  <span className="inline-block text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-1">
                    The Gain
                  </span>
                  <p className="text-gray-100 text-sm leading-relaxed font-medium">{p.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
