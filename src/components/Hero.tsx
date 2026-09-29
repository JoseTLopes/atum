import React from 'react';
import { Download, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenDownload: () => void;
  onOpenDemo: () => void;
  onOpenPro: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onOpenDemo, onOpenPro }) => {
  return (
    <section id="hero-section" className="relative pt-32 pb-24 overflow-hidden bg-black">
      {/* Background ambient lighting */}
      <div 
        id="hero-ambient-glow" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[550px] bg-gradient-to-b from-purple-600/25 via-pink-600/15 to-transparent blur-3xl opacity-60 pointer-events-none" 
      />

      {/* Decorative Floating Abstract 3D Spline SVGs */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:block absolute left-8 top-44 pointer-events-none opacity-40 select-none"
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path
            d="M20 50C20 20 80 20 80 50C80 80 20 80 20 50Z"
            stroke="url(#hero-spline-grad-1)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="hero-spline-grad-1" x1="0" y1="0" x2="100" y2="100">
              <stop stopColor="#c084fc" />
              <stop offset="1" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:block absolute right-12 top-52 pointer-events-none opacity-40 select-none"
      >
        <svg width="130" height="130" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="35" stroke="url(#hero-spline-grad-2)" strokeWidth="9" strokeDasharray="15 10" />
          <defs>
            <linearGradient id="hero-spline-grad-2" x1="0" y1="100" x2="100" y2="0">
              <stop stopColor="#38bdf8" />
              <stop offset="1" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Urgency Pill Banner */}
          <motion.button 
            id="hero-discount-badge"
            onClick={onOpenPro}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs font-semibold text-purple-300 mb-8 hover:bg-purple-900/50 hover:border-purple-400/50 transition-all cursor-pointer shadow-lg shadow-purple-900/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span>Save 78% on Pro Access — Limited Time</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          </motion.button>
          
          {/* Main Title */}
          <motion.h1 
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight max-w-4xl"
          >
            Bring your UI to life with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500">
              vibrant 3D shapes.
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            id="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-normal"
          >
            Level up your designs with 140 vivid, high-resolution 3D spline shapes. Totally free, ready for Figma and PNG export.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            id="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button 
              id="hero-btn-download"
              onClick={onOpenDownload}
              className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-xl shadow-white/10"
            >
              <Download className="w-5 h-5 text-black" />
              <span>Download Free Pack</span>
            </button>
            <button 
              id="hero-btn-demo"
              onClick={onOpenDemo}
              className="flex items-center justify-center gap-2 bg-white/10 text-white backdrop-blur-md px-8 py-4 rounded-2xl font-bold text-lg border border-white/15 hover:bg-white/20 hover:border-white/30 transition-all cursor-pointer"
            >
              <span>See Demo</span>
              <ExternalLink className="w-4 h-4 opacity-60" />
            </button>
          </motion.div>
          
          {/* Compatibility Subtitle */}
          <motion.div 
            id="hero-compatibility-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex items-center gap-2 text-xs sm:text-sm text-gray-500"
          >
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Compatible with Figma, Sketch, Photoshop & Canva</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
