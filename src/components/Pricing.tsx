import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/landingData';

interface PricingProps {
  onOpenDownload: () => void;
  onOpenPro: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDownload, onOpenPro }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-24 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div id="pricing-header" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/10 text-xs font-semibold text-pink-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Simple Transparent Pricing
          </div>
          <h2 id="pricing-heading" className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Level Up Your Creative Kit
          </h2>
          <p id="pricing-subheading" className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Start completely free with our starter bundle, or unlock the entire library of 5,000+ assets with Pro.
          </p>

          {/* Billing Switch */}
          <div id="pricing-billing-toggle" className="inline-flex items-center p-1.5 rounded-full bg-white/5 border border-white/10">
            <button
              id="pricing-btn-monthly"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Billed Monthly
            </button>
            <button
              id="pricing-btn-annual"
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>Billed Annually</span>
              <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full">Save Extra</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div id="pricing-cards-grid" className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isHighlight = plan.highlighted;
            const priceVal = billingCycle === 'annual' ? plan.price.annual : plan.price.monthly;
            const originalVal = plan.originalPrice
              ? billingCycle === 'annual'
                ? plan.originalPrice.annual
                : plan.originalPrice.monthly
              : null;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`flex flex-col justify-between p-8 rounded-3xl transition-all relative ${
                  isHighlight
                    ? 'bg-gradient-to-b from-purple-950/60 to-zinc-950 border-2 border-purple-500/80 shadow-2xl shadow-purple-900/20 lg:-translate-y-4'
                    : 'bg-zinc-950 border border-white/10'
                }`}
              >
                {plan.badge && (
                  <div
                    id={`pricing-badge-${plan.id}`}
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg ${
                      isHighlight
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-white/10 border border-white/20 text-gray-300'
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 id={`pricing-title-${plan.id}`} className="text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p id={`pricing-desc-${plan.id}`} className="text-gray-400 text-xs sm:text-sm mb-6 min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price display */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">
                      ${priceVal}
                    </span>
                    <span className="text-xs text-gray-400">
                      {priceVal === 0 ? '' : billingCycle === 'annual' ? '/year' : '/month'}
                    </span>
                    {originalVal && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${originalVal}
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-purple-400" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  id={`pricing-cta-${plan.id}`}
                  onClick={plan.id === 'plan-free' ? onOpenDownload : onOpenPro}
                  className={`w-full py-4 rounded-2xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
                    isHighlight
                      ? 'bg-white text-black hover:bg-gray-200 shadow-xl shadow-white/10 hover:scale-[1.02]'
                      : 'bg-white/10 text-white border border-white/15 hover:bg-white/20'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
