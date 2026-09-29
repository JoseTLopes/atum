import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/landingData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div id="faq-header" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-purple-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Common Questions
          </h2>
          <p id="faq-subheading" className="text-gray-400 text-sm sm:text-base mt-3">
            Everything you need to know about the assets, licensing, and Spline sources.
          </p>
        </div>

        <div id="faq-accordion-container" className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.id}
                id={`faq-card-${faq.id}`}
                className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:border-white/20 transition-colors"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-medium text-base sm:text-lg pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`text-gray-400 transition-transform duration-300 shrink-0 w-5 h-5 ${
                      isOpen ? 'rotate-180 text-purple-400' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-container-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div
                        id={`faq-answer-text-${faq.id}`}
                        className="p-6 pt-0 text-gray-400 text-sm sm:text-base leading-relaxed border-t border-white/5"
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
