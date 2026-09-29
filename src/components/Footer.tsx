import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenLicenseModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLicenseModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-12 bg-black border-t border-white/10 text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-purple-600/30 rounded-md flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div id="footer-copyright">© 2024 wannathis.one — All rights reserved.</div>
        </div>

        <div id="footer-links-group" className="flex items-center gap-8">
          <a
            id="footer-link-twitter"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Twitter
          </a>
          <a
            id="footer-link-dribbble"
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Dribbble
          </a>
          <button
            id="footer-link-license"
            onClick={onOpenLicenseModal}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0 text-sm text-gray-500"
          >
            License
          </button>
          <a
            id="footer-link-privacy"
            href="#faq"
            className="hover:text-white transition-colors"
          >
            Privacy
          </a>
          <button
            id="footer-btn-scroll-top"
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors cursor-pointer ml-2"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
