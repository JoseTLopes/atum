import React, { useState } from 'react';
import { X, Download, Check, Sparkles, Copy, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPro: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, onOpenPro }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [copiedFigma, setCopiedFigma] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);

      // Create a downloadable sample SVG file
      const sampleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c084fc"/>
      <stop offset="100%" stop-color="#f43f5e"/>
    </linearGradient>
  </defs>
  <path d="M20 100 C 20 40, 180 40, 180 100 C 180 160, 20 160, 20 100 Z" fill="none" stroke="url(#g)" stroke-width="24" stroke-linecap="round"/>
</svg>`;
      const blob = new Blob([sampleSvg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'squiggle-3d-sample.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1000);
  };

  const handleCopyFigma = () => {
    navigator.clipboard.writeText('https://www.figma.com/community/file/squiggle-3d-wannathis');
    setCopiedFigma(true);
    setTimeout(() => setCopiedFigma(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="modal-download-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            id="modal-download-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-lg rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-8 shadow-2xl relative"
          >
            <button
              id="modal-download-btn-close"
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Squiggle Starter Pack</h3>
                <p className="text-xs text-gray-400">20 Transparent 4K PNGs + Figma Source File</p>
              </div>
            </div>

            <div className="space-y-3 mb-6 bg-white/5 p-4 rounded-2xl border border-white/5 text-xs sm:text-sm text-gray-300">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-400">File Size:</span>
                <span className="font-semibold text-white">184 MB (High-Res 3200px)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-400">Formats:</span>
                <span className="font-semibold text-white">.FIG (Figma) &amp; .PNG (Alpha)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">License:</span>
                <span className="font-semibold text-emerald-400">Personal &amp; Commercial (Attribution)</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <button
                id="modal-download-btn-start"
                onClick={handleDownload}
                disabled={downloading}
                className="w-full py-4 rounded-2xl bg-white text-black font-bold text-base hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                {downloading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Preparing Asset Package...
                  </>
                ) : downloaded ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-600" />
                    Downloaded! Click to download again
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download 20-Shape ZIP (184 MB)
                  </>
                )}
              </button>

              <button
                id="modal-download-btn-figma"
                onClick={handleCopyFigma}
                className="w-full py-3.5 rounded-2xl bg-white/10 text-white font-semibold text-sm border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {copiedFigma ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    Figma Link Copied to Clipboard!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gray-400" />
                    Duplicate to Figma Directly
                  </>
                )}
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-purple-200">Need 5,000+ shapes with Spline source?</p>
                <p className="text-[11px] text-purple-300/70">Claim 78% off Pro access today.</p>
              </div>
              <button
                id="modal-download-btn-upgrade"
                onClick={() => {
                  onClose();
                  onOpenPro();
                }}
                className="text-xs font-bold px-3 py-1.5 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition-colors shrink-0 cursor-pointer"
              >
                Upgrade to Pro
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface ProModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProModal: React.FC<ProModalProps> = ({ isOpen, onClose }) => {
  const [applied, setApplied] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCheckout = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="modal-pro-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <motion.div
            id="modal-pro-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-lg rounded-3xl bg-zinc-950 border border-purple-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Header glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

            <button
              id="modal-pro-btn-close"
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/40 text-xs font-bold text-purple-300 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Special Promo Applied: 78% OFF
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Squiggle Pro All-Access Pass</h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-6">
              Unlock 5,000+ 3D assets, Spline editable models, and no-attribution commercial rights.
            </p>

            {/* Pricing breakdown */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">Standard Pro Pass</span>
                <span className="text-sm text-gray-500 line-through">$55 / month</span>
              </div>
              <div className="flex items-center justify-between mb-2 text-purple-400">
                <span className="text-sm font-medium">Limited Time Discount (78%)</span>
                <span className="text-sm font-bold">-$43</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-base font-bold text-white">Total Due Today</span>
                <div className="text-right">
                  <span className="text-2xl font-black text-white">$12</span>
                  <span className="text-xs text-gray-400"> / month</span>
                </div>
              </div>
            </div>

            {/* Feature bullets */}
            <div className="space-y-2.5 mb-6 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0" />
                <span>5,000+ 3D shapes, icons, avatars & abstract characters</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Raw Spline 3D project files with customizable materials</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Commercial license for infinite client & commercial websites</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Cancel anytime with 1-click in your account portal</span>
              </div>
            </div>

            {success ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 p-4 rounded-2xl text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto mb-2 font-bold">
                  ✓
                </div>
                <h4 className="text-white font-bold text-sm">Welcome to Squiggle Pro!</h4>
                <p className="text-xs text-emerald-200 mt-1">Your Pro License Key has been simulated and activated.</p>
              </div>
            ) : (
              <button
                id="modal-pro-btn-confirm"
                onClick={handleCheckout}
                disabled={processing}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-900/30 cursor-pointer"
              >
                {processing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Activating Pro Membership...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    Get Instant Pro Access ($12/mo)
                  </>
                )}
              </button>
            )}

            <p className="text-center text-[11px] text-gray-500 mt-4">
              Protected by 256-bit SSL encryption. 100% money-back guarantee within 14 days if unsatisfied.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDownload: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onOpenDownload }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div id="modal-demo-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <motion.div
            id="modal-demo-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-2xl rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-8 shadow-2xl relative"
          >
            <button
              id="modal-demo-btn-close"
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-2">Squiggle 3D In Action</h3>
            <p className="text-sm text-gray-400 mb-6">
              See how modern SaaS products integrate Squiggle spline shapes to drive landing page conversions.
            </p>

            <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-pink-900/30" />
              <div className="text-center z-10 px-6">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-white">4K Ultra Splines in Figma</h4>
                <p className="text-xs text-gray-400 max-w-sm mx-auto mt-1">
                  Drag and drop 3200px transparent PNGs directly onto your dark or light frames without background fringing.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                id="modal-demo-btn-dismiss"
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-all cursor-pointer"
              >
                Close
              </button>
              <button
                id="modal-demo-btn-try-free"
                onClick={() => {
                  onClose();
                  onOpenDownload();
                }}
                className="px-6 py-3 rounded-xl bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all cursor-pointer"
              >
                Download Free Pack Now
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
