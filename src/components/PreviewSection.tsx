import React, { useState } from 'react';
import { Sparkles, Download, Eye, RotateCw } from 'lucide-react';
import { motion } from 'motion/react';
import { PREVIEW_SHAPES, PREVIEW_TEXTURES } from '../data/landingData';
import { ShapePreview } from '../types';

interface PreviewSectionProps {
  onOpenDownload: () => void;
  onOpenPro: () => void;
}

export const PreviewSection: React.FC<PreviewSectionProps> = ({ onOpenDownload, onOpenPro }) => {
  const [selectedShape, setSelectedShape] = useState<ShapePreview>(PREVIEW_SHAPES[0]);
  const [selectedTexture, setSelectedTexture] = useState(PREVIEW_TEXTURES[0]);
  const [isRotating, setIsRotating] = useState(true);

  return (
    <section id="preview" className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div id="preview-header" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs font-semibold text-purple-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive 3D Studio
          </div>
          <h2 id="preview-heading" className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Explore 140+ Spline Variations
          </h2>
          <p id="preview-subheading" className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Click to preview different geometries, switch material textures in real time, and download ready-to-use transparent PNGs.
          </p>
        </div>

        {/* Studio Viewer Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Main 3D Stage Viewer (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-black border border-white/10 shadow-2xl relative">
            {/* Top Viewer Controls */}
            <div className="flex items-center justify-between z-10 mb-4">
              <div>
                <span className="text-xs font-medium text-purple-400 uppercase tracking-widest block">
                  {selectedShape.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-0.5">{selectedShape.name}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  id="preview-btn-toggle-rotation"
                  onClick={() => setIsRotating(!isRotating)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    isRotating
                      ? 'bg-purple-600/20 border-purple-500/40 text-purple-300'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                  title={isRotating ? 'Pause rotation' : 'Resume rotation'}
                >
                  <RotateCw className={`w-4 h-4 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                </button>
              </div>
            </div>

            {/* Interactive Canvas Center */}
            <div className="relative h-[340px] sm:h-[400px] flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-950/80 border border-white/5 my-4">
              <div
                className={`absolute w-64 h-64 rounded-full blur-3xl opacity-30 bg-gradient-to-tr ${selectedTexture.gradient} transition-all duration-700`}
              />

              <motion.div
                animate={isRotating ? { rotate: [0, 360], scale: [1, 1.04, 1] } : { rotate: 0 }}
                transition={{
                  rotate: { duration: 16, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="w-64 h-64 flex items-center justify-center drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] cursor-grab active:cursor-grabbing"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="activeShapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  
                  {selectedShape.svgPathType === 'spiral' && (
                    <path
                      d="M100 100 m-60 0 a60 60 0 1 0 120 0 a60 60 0 1 0 -120 0 M100 100 m-35 0 a35 35 0 1 0 70 0 a35 35 0 1 0 -70 0 M100 100 m-15 0 a15 15 0 1 0 30 0 a15 15 0 1 0 -30 0"
                      stroke="url(#activeShapeGrad)"
                      strokeWidth="16"
                      strokeLinecap="round"
                      fill="none"
                    />
                  )}
                  {selectedShape.svgPathType === 'knot' && (
                    <path
                      d="M50 80 C 40 20, 160 20, 150 80 C 140 140, 60 140, 50 80 Z M60 140 C 60 180, 140 180, 140 140"
                      stroke="url(#activeShapeGrad)"
                      strokeWidth="18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  )}
                  {selectedShape.svgPathType === 'zigzag' && (
                    <path
                      d="M30 150 L70 50 L100 150 L130 50 L170 150"
                      stroke="url(#activeShapeGrad)"
                      strokeWidth="20"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  )}
                  {selectedShape.svgPathType === 'ribbon' && (
                    <path
                      d="M40 100 C 40 40, 100 40, 100 100 C 100 160, 160 160, 160 100 C 160 40, 100 40, 100 100 C 100 160, 40 160, 40 100"
                      stroke="url(#activeShapeGrad)"
                      strokeWidth="18"
                      strokeLinecap="round"
                      fill="none"
                    />
                  )}
                  {selectedShape.svgPathType === 'helix' && (
                    <g>
                      <path
                        d="M40 160 Q 70 40, 100 100 T 160 40"
                        stroke="url(#activeShapeGrad)"
                        strokeWidth="18"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M40 40 Q 70 160, 100 100 T 160 160"
                        stroke="#ffffff"
                        strokeOpacity="0.4"
                        strokeWidth="10"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </g>
                  )}
                  {selectedShape.svgPathType === 'ring' && (
                    <ellipse
                      cx="100"
                      cy="100"
                      rx="70"
                      ry="35"
                      transform="rotate(-25 100 100)"
                      stroke="url(#activeShapeGrad)"
                      strokeWidth="20"
                      fill="none"
                    />
                  )}
                </svg>
              </motion.div>

              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs text-gray-400">
                Current Material: <span className="text-white font-semibold">{selectedTexture.name}</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="text-xs text-gray-500">
                Format: <span className="text-gray-300">PNG (Alpha) + Figma Vector</span>
              </div>
              <div className="flex gap-3">
                <button
                  id="preview-btn-download-sample"
                  onClick={onOpenDownload}
                  className="flex items-center gap-2 text-xs font-bold bg-white text-black px-4 py-2.5 rounded-xl hover:bg-gray-200 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download Sample
                </button>
                <button
                  id="preview-btn-unlock-all"
                  onClick={onOpenPro}
                  className="flex items-center gap-2 text-xs font-bold bg-white/10 text-white px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/20 transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  Unlock 140+ Assets
                </button>
              </div>
            </div>
          </div>

          {/* Right Selector Column (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Texture Palettes */}
            <div className="p-6 rounded-3xl bg-black border border-white/10">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                Select Finish Texture
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {PREVIEW_TEXTURES.map((t) => (
                  <button
                    key={t.id}
                    id={`preview-texture-${t.id}`}
                    onClick={() => setSelectedTexture(t)}
                    className={`flex items-center gap-2 p-2 rounded-xl text-left text-xs transition-all border cursor-pointer ${
                      selectedTexture.id === t.id
                        ? 'bg-white/15 border-purple-400 text-white font-bold'
                        : 'bg-white/5 border-transparent text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr ${t.gradient} shrink-0`} />
                    <span className="truncate">{t.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Shape Grid */}
            <div className="p-6 rounded-3xl bg-black border border-white/10 flex-1">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                Shape Geometries
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {PREVIEW_SHAPES.map((shape) => (
                  <button
                    key={shape.id}
                    id={`preview-shape-${shape.id}`}
                    onClick={() => setSelectedShape(shape)}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      selectedShape.id === shape.id
                        ? 'bg-purple-950/40 border-purple-500 text-white shadow-lg'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs text-purple-400 font-medium">{shape.category}</div>
                    <div className="text-sm font-bold text-white mt-1">{shape.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
