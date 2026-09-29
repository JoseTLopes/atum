import { Persona, FeatureItem, FAQItem, PricingPlan, ShapePreview } from '../types';

export const PERSONAS: Persona[] = [
  {
    id: 'persona-freelance',
    role: 'Freelance Designer',
    frustration: "Spent hours making 3D assets that look 'cheap' and unprofessional.",
    outcome: 'Impress clients with high-end, premium visuals in seconds.',
    iconName: 'Paintbrush',
    tagColor: 'text-purple-400',
  },
  {
    id: 'persona-founder',
    role: 'Startup Founder',
    frustration: 'Website looks static and boring compared to top-tier SaaS landing pages.',
    outcome: 'Create a modern, playful brand aesthetic without a high budget.',
    iconName: 'Smartphone',
    tagColor: 'text-pink-400',
  },
  {
    id: 'persona-owner',
    role: 'Product Owner',
    frustration: "UI kits lack the 'wow' factor needed for conversion-focused mockups.",
    outcome: 'Increased user engagement with abstract, high-impact visuals.',
    iconName: 'Layers',
    tagColor: 'text-blue-400',
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'feature-textures',
    title: '7 Vibrant Textures',
    desc: 'Choose from Metallic, Glossy, Neon, or Pastel to match your UI.',
    iconName: 'Palette',
  },
  {
    id: 'feature-shapes',
    title: '20 Unique Shapes',
    desc: 'From spirals to zig-zags, variety that keeps your designs fresh.',
    iconName: 'Zap',
  },
  {
    id: 'feature-resolution',
    title: '4K High Resolution',
    desc: 'Crisp 3200px assets that look stunning even on Retina displays.',
    iconName: 'Code2',
  },
  {
    id: 'feature-formats',
    title: 'Universal Formats',
    desc: 'Full Figma library and transparent PNGs for any software.',
    iconName: 'CheckCircle2',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-commercial',
    q: 'Is this really free for commercial projects?',
    a: 'Yes, you can use the free pack in personal and commercial projects. Attribution is required for the free version.',
  },
  {
    id: 'faq-formats',
    q: 'What formats are included?',
    a: 'You get the Figma Source File (.fig) and high-resolution PNGs with transparent backgrounds.',
  },
  {
    id: 'faq-portfolio',
    q: 'Can I use these in my portfolio site?',
    a: 'Absolutely! These were specifically designed to make portfolio sites look premium and modern.',
  },
  {
    id: 'faq-pro-upgrade',
    q: 'How do I upgrade to Pro?',
    a: "Click the 'Try Pro' button to access 5000+ illustrations with a single subscription starting at $12/mo.",
  },
  {
    id: 'faq-colors',
    q: 'Can I customize the colors?',
    a: 'The pack comes with 7 pre-rendered colors. Pro users get access to the source Spline files for infinite customization.',
  },
  {
    id: 'faq-resolution',
    q: 'What resolution are the files?',
    a: 'All assets are exported at 3200x3200px (4K quality).',
  },
  {
    id: 'faq-refunds',
    q: 'Do you offer refunds for Pro access?',
    a: "Since we provide digital assets, we don't offer standard refunds, but you can cancel your subscription anytime.",
  },
  {
    id: 'faq-resell',
    q: 'Can I resell these shapes?',
    a: 'No, redistribution or reselling of the assets is strictly prohibited by our license.',
  },
  {
    id: 'faq-canva',
    q: 'Do these work in Canva?',
    a: 'Yes, simply drag and drop the transparent PNGs into your Canva project.',
  },
  {
    id: 'faq-pro-count',
    q: 'How many shapes are in the Pro version?',
    a: 'The Pro access includes over 5000+ different assets including icons, shapes, and characters.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-free',
    name: 'Starter Pack',
    badge: 'Free Forever',
    highlighted: false,
    price: { monthly: 0, annual: 0 },
    description: 'Perfect for testing 3D shapes on personal projects and mockups.',
    features: [
      '20 Core 3D Spline Shapes',
      '4K PNGs with transparent alpha',
      'Figma community library file',
      'Commercial use with attribution',
      'Lifetime updates to starter pack',
    ],
    ctaText: 'Download Free Pack',
  },
  {
    id: 'plan-pro',
    name: 'Pro Pass',
    badge: 'Save 78% Limited Time',
    highlighted: true,
    price: { monthly: 12, annual: 99 },
    originalPrice: { monthly: 55, annual: 450 },
    description: 'The complete creative arsenal with 5,000+ 3D assets & Spline sources.',
    features: [
      'Everything in Starter Pack',
      '5,000+ 3D shapes, icons & characters',
      'Editable Spline 3D source files',
      '7 render styles & infinite textures',
      'Commercial license without attribution',
      'New asset drops every month',
      'Priority Discord community access',
    ],
    ctaText: 'Get Pro Access',
  },
  {
    id: 'plan-team',
    name: 'Team / Agency',
    badge: 'Best for Studios',
    highlighted: false,
    price: { monthly: 39, annual: 320 },
    originalPrice: { monthly: 120, annual: 999 },
    description: 'For design agencies and product squads requiring unlimited team seats.',
    features: [
      'Everything in Pro Pass',
      'Up to 10 team seats with shared workspace',
      'Client project distribution license',
      'Custom colorway rendering requests',
      'Dedicated Slack support channel',
    ],
    ctaText: 'Get Team License',
  },
];

export const PREVIEW_TEXTURES = [
  { id: 'neon-gloss', name: 'Neon Gloss', gradient: 'from-fuchsia-500 via-purple-600 to-indigo-600' },
  { id: 'iridescent', name: 'Iridescent Pearl', gradient: 'from-cyan-400 via-teal-300 to-emerald-400' },
  { id: 'chromic-gold', name: 'Liquid Gold', gradient: 'from-amber-300 via-orange-500 to-pink-500' },
  { id: 'cyber-mesh', name: 'Cyber Mesh', gradient: 'from-violet-600 via-pink-500 to-rose-400' },
  { id: 'pastel-matte', name: 'Pastel Dream', gradient: 'from-sky-300 via-indigo-300 to-pink-300' },
];

export const PREVIEW_SHAPES: ShapePreview[] = [
  {
    id: 'shape-spiral',
    name: 'Hyper Spiral',
    category: 'Dynamic Spline',
    texture: 'Neon Gloss',
    colorGradient: 'from-purple-500 to-pink-500',
    svgPathType: 'spiral',
  },
  {
    id: 'shape-torus-knot',
    name: 'Torus Knot X',
    category: 'Curved Ribbon',
    texture: 'Liquid Gold',
    colorGradient: 'from-amber-400 to-rose-500',
    svgPathType: 'knot',
  },
  {
    id: 'shape-zigzag',
    name: 'Pulse Wave',
    category: 'Zig-Zag Path',
    texture: 'Iridescent Pearl',
    colorGradient: 'from-cyan-400 to-indigo-500',
    svgPathType: 'zigzag',
  },
  {
    id: 'shape-infinity',
    name: 'Mobius Loop',
    category: 'Continuous Loop',
    texture: 'Cyber Mesh',
    colorGradient: 'from-violet-500 to-fuchsia-500',
    svgPathType: 'ribbon',
  },
  {
    id: 'shape-helix',
    name: 'DNA Helix 3D',
    category: 'Double Spiral',
    texture: 'Pastel Dream',
    colorGradient: 'from-pink-400 to-purple-600',
    svgPathType: 'helix',
  },
  {
    id: 'shape-ring',
    name: 'Orbit Halo',
    category: 'Orbital Ring',
    texture: 'Neon Gloss',
    colorGradient: 'from-indigo-400 to-pink-500',
    svgPathType: 'ring',
  },
];
