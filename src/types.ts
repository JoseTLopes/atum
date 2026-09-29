export interface Persona {
  id: string;
  role: string;
  frustration: string;
  outcome: string;
  iconName: 'Paintbrush' | 'Smartphone' | 'Layers';
  tagColor: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  iconName: 'Palette' | 'Zap' | 'Code2' | 'CheckCircle2';
}

export interface FAQItem {
  id: string;
  q: string;
  a: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  highlighted?: boolean;
  price: {
    monthly: number;
    annual: number;
  };
  originalPrice?: {
    monthly: number;
    annual: number;
  };
  description: string;
  features: string[];
  ctaText: string;
}

export interface ShapePreview {
  id: string;
  name: string;
  category: string;
  texture: string;
  colorGradient: string;
  svgPathType: 'spiral' | 'knot' | 'zigzag' | 'ribbon' | 'ring' | 'helix';
}
