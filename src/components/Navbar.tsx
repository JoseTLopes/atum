import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenPro: () => void;
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPro, onOpenDownload }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav id="navbar" className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a id="nav-brand-link" href="#" className="flex items-center gap-2 group cursor-pointer">
          <div id="nav-logo-badge" className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span id="nav-brand-title" className="text-white font-bold text-xl tracking-tight">
            Squiggle <span className="text-white/50 font-normal">by wannathis</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div id="nav-desktop-menu" className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a id="nav-link-features" href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a id="nav-link-preview" href="#preview" className="hover:text-white transition-colors">
            Preview
          </a>
          <a id="nav-link-pricing" href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a id="nav-link-faq" href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          
          <div className="flex items-center gap-3">
            <button
              id="nav-btn-free-download"
              onClick={onOpenDownload}
              className="text-xs font-semibold px-4 py-2 rounded-full text-white/80 hover:text-white border border-white/15 hover:border-white/30 transition-all cursor-pointer"
            >
              Free Pack
            </button>
            <button
              id="nav-btn-get-pro"
              onClick={onOpenPro}
              className="bg-white text-black text-xs font-bold px-5 py-2 rounded-full hover:bg-gray-200 transition-colors shadow-sm cursor-pointer"
            >
              Get Pro Access
            </button>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="nav-btn-mobile-pro"
            onClick={onOpenPro}
            className="bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
          >
            Get Pro
          </button>
          <button
            id="nav-btn-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="nav-mobile-dropdown" className="md:hidden border-b border-white/10 bg-black/95 px-6 py-4 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-gray-300">
            <a
              id="nav-mobile-link-features"
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Features
            </a>
            <a
              id="nav-mobile-link-preview"
              href="#preview"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Preview
            </a>
            <a
              id="nav-mobile-link-pricing"
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Pricing
            </a>
            <a
              id="nav-mobile-link-faq"
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              FAQ
            </a>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              id="nav-mobile-btn-download"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full py-2.5 rounded-xl border border-white/20 text-white font-medium text-sm text-center hover:bg-white/5"
            >
              Download Free Pack
            </button>
            <button
              id="nav-mobile-btn-pro"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPro();
              }}
              className="w-full py-2.5 rounded-xl bg-white text-black font-bold text-sm text-center hover:bg-gray-100"
            >
              Get Pro Access — 78% Off
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
