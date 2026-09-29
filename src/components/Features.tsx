import React, { useState } from 'react';
import { Palette, Zap, Code2, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { FEATURES } from '../data/landingData';

const getFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'Palette':
      return <Palette className="w-6 h-6" />;
    case 'Zap':
      return <Zap className="w-6 h-6" />;
    case 'Code2':
      return <Code2 className="w-6 h-6" />;
    case 'CheckCircle2':
      return <CheckCircle2 className="w-6 h-6" />;
    default:
      return <Sparkles className="w-6 h-6" />;
  }
};

export const Features: React.FC = () => {
  const [activeTexture, setActiveTexture] = useState<'neon' | 'metallic' | 'pastel' | 'glossy'>('neon');

  const textures = [
    { key: 'neon', label: 'Neon Glow', bgGrad: 'from-fuchsia-600 via-purple-600 to-indigo-700' },
    { key: 'metallic', label: 'Metallic Gold', bgGrad: 'from-amber-400 via-orange-500 to-rose-600' },
    { key: 'pastel', label: 'Pastel Dream', bgGrad: 'from-cyan-400 via-teal-300 to-pink-400' },
    { key: 'glossy', label: 'Ultra Gloss', bgGrad: 'from-violet-500 via-pink-500 to-amber-400' },
  ];

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Feature Descriptions */}
          <div id="features-text-col">
            <h2 id="features-heading" className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Designed for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                modern web.
              </span>
            </h2>
            <p id="features-lead" className="text-gray-400 text-lg mb-10 max-w-lg">
              Every curve, bevel, and reflection is handcrafted in Spline 3D to deliver instantaneous visual polish to web and mobile apps.
            </p>

            <div id="features-list" className="space-y-8">
              {FEATURES.map((item) => (
                <div key={item.id} id={`feature-item-${item.id}`} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all">
                    {getFeatureIcon(item.iconName)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Feature Card */}
          <div id="features-visual-col" className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000" />
            <div className="relative bg-zinc-950 rounded-[2.5rem] overflow-hidden border border-white/10 h-[520px] flex flex-col justify-between p-6 sm:p-8">
              {/* Texture Selector Toolbar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 z-10">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Live Render Texture</span>
                </div>
                <div className="flex gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10">
                  {textures.map((t) => (
                    <button
                      key={t.key}
                      id={`btn-texture-${t.key}`}
                      onClick={() => setActiveTexture(t.key as any)}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeTexture === t.key
                          ? 'bg-purple-600 text-white shadow'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3D Spline Canvas / Visual Simulation */}
              <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden rounded-2xl bg-black/60 border border-white/5">
                {/* Background radial glow matching selected texture */}
                <div 
                  className={`absolute w-72 h-72 rounded-full blur-3xl opacity-40 bg-gradient-to-tr ${
                    textures.find(t => t.key === activeTexture)?.bgGrad
                  } transition-all duration-700`} 
                />

                {/* Dynamic 3D Spline Curve Vector Graphics */}
                <svg
                  className="w-full h-full max-w-[340px] max-h-[340px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                  viewBox="0 0 300 300"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={activeTexture === 'metallic' ? '#fbbf24' : activeTexture === 'pastel' ? '#38bdf8' : activeTexture === 'glossy' ? '#8b5cf6' : '#d946ef'} />
                      <stop offset="50%" stopColor={activeTexture === 'metallic' ? '#f97316' : activeTexture === 'pastel' ? '#2dd4bf' : activeTexture === 'glossy' ? '#ec4899' : '#a855f7'} />
                      <stop offset="100%" stopColor={activeTexture === 'metallic' ? '#e11d48' : activeTexture === 'pastel' ? '#f472b6' : activeTexture === 'glossy' ? '#f59e0b' : '#6366f1'} />
                    </linearGradient>
                    <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Primary 3D ribbon path */}
                  <path
                    d="M 50 150 C 50 60, 150 50, 150 150 C 150 250, 250 240, 250 150 C 250 60, 150 70, 150 150 C 150 230, 70 240, 50 150 Z"
                    stroke="url(#curveGradient)"
                    strokeWidth="28"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glowEffect)"
                    className="transition-all duration-700"
                  />

                  {/* Highlight bevel ribbon for 3D depth */}
                  <path
                    d="M 55 145 C 55 70, 145 60, 145 150 C 145 240, 245 230, 245 150"
                    stroke="#ffffff"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeOpacity="0.5"
                    className="transition-all duration-700"
                  />
                </svg>

                {/* Floating spec tags */}
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  3200 × 3200px • Ultra 4K Alpha
                </div>
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-purple-300 font-medium">
                  Spline 3D Native
                </div>
              </div>

              {/* Bottom spec bar */}
              <div className="flex items-center justify-between text-xs text-gray-400 pt-2">
                <span>Vector precision control</span>
                <span className="text-white font-medium">Included in Pro and Free Pack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
