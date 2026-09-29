import React from 'react';
import { Download, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onOpenDownload: () => void;
  onOpenPro: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenDownload, onOpenPro }) => {
  return (
    <section id="cta-section" className="py-24 bg-black relative px-6 overflow-hidden">
      <div 
        id="cta-banner-container"
        className="max-w-5xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-purple-900 via-indigo-950 to-purple-950 p-10 sm:p-14 md:p-20 relative border border-white/20 shadow-2xl overflow-hidden"
      >
        {/* Glow & texture accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-purple-200 mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            Instant Digital Download
          </div>

          <h2 id="cta-banner-heading" className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Start designing with <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200">
              3D magic today.
            </span>
          </h2>

          <p id="cta-banner-subheading" className="text-purple-200/80 max-w-xl mx-auto text-base sm:text-lg mb-10">
            Get the free 20-shape Figma & PNG starter pack immediately, or claim your 78% Pro discount before this cohort closes.
          </p>

          <div id="cta-button-group" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              id="cta-btn-free-pack"
              onClick={onOpenDownload}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-10 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl hover:bg-purple-50 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl cursor-pointer"
            >
              <Download className="w-5 h-5 text-black" />
              <span>Download Free Pack</span>
            </button>
            <button
              id="cta-btn-get-pro"
              onClick={onOpenPro}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:bg-black/80 hover:scale-[1.02] active:scale-[0.98] transition-all border border-white/20 shadow-2xl cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Get Pro - 78% Off</span>
            </button>
          </div>

          <p id="cta-social-proof" className="mt-8 text-white/60 text-xs sm:text-sm flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            Join 20,000+ designers using wannathis assets worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};
