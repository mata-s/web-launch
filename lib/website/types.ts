import { Theme } from './theme';

// =========================
// Common
// =========================

export type HeroVariant = Theme;
export type GalleryVariant = Theme | 'grid';
export type FeatureVariant = Theme;
export type ServicesVariant = Theme;
export type ReviewVariant = Theme;
export type ContactVariant = Theme;
export type CtaVariant = Theme;
export type FaqVariant = Theme;
export type FooterVariant = Theme;

export type GalleryImage = {
  id: string;
  label: string;
  description: string;
};

export type SectionTitleSize = 'sm' | 'md' | 'lg' | 'xl';
export type SectionBodySize = 'sm' | 'md' | 'lg';
export type SectionAnimation = 'none' | 'fade-up' | 'fade-in' | 'slide-in';

export type SectionStyle = {
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  titleSize: SectionTitleSize;
  bodySize: SectionBodySize;
  animation: SectionAnimation;
};

// =========================
// Sections
// =========================

export type HeroSection = {
  id: string;
  type: 'hero';
  variant: HeroVariant;
  style: SectionStyle;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryButton: string;
  showPrimaryButton: boolean;
  secondaryButton: string;
  showSecondaryButton: boolean;
};

export type ConceptSection = {
  id: string;
  type: 'concept';
  title: string;
  description: string;
};

export type ServicesSection = {
  id: string;
  type: 'services';
  variant: ServicesVariant;
  style: SectionStyle;
  eyebrow: string;
  title: string;
  items: {
    title: string;
    description: string;
  }[];
};

export type GallerySection = {
  id: string;
  type: 'gallery';
  variant: GalleryVariant;
  style: SectionStyle;
  eyebrow: string;
  title: string;
  subtitle: string;
  images: GalleryImage[];
};

export type FeatureSection = {
  id: string;
  type: 'feature';
  variant: FeatureVariant;
  style: SectionStyle;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: {
    title: string;
    description: string;
  }[];
};

export type ReviewSection = {
  id: string;
  type: 'review';
  variant: ReviewVariant;
  style: SectionStyle;
  eyebrow: string;
  title: string;
  subtitle: string;
  reviews: {
    name: string;
    role: string;
    comment: string;
  }[];
};

export type ContactSection = {
  id: string;
  type: 'contact';
  variant: ContactVariant;
  style: SectionStyle;
  eyebrow: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  address: string;
  buttonText: string;
};

export type CtaSection = {
  id: string;
  type: 'cta';
  variant: CtaVariant;
  style: SectionStyle;
  eyebrow: string;
  title: string;
  description: string;
  primaryButton: string;
  showPrimaryButton: boolean;
  secondaryButton?: string;
  showSecondaryButton: boolean;
};

export type FaqSection = {
  id: string;
  type: 'faq';
  variant: FaqVariant;
  style: SectionStyle;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: {
    question: string;
    answer: string;
  }[];
};

export type FooterSection = {
  id: string;
  type: 'footer';
  variant: FooterVariant;
  style: SectionStyle;
  companyName: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  copyright: string;
  links: {
    label: string;
    href: string;
  }[];
  socials: {
    label: string;
    href: string;
  }[];
};

// =========================
// Website
// =========================

export type Section =
  | HeroSection
  | ConceptSection
  | ServicesSection
  | GallerySection
  | FeatureSection
  | ReviewSection
  | ContactSection
  | CtaSection
  | FaqSection
  | FooterSection;

export type WebsiteData = {
  siteName: string;
  siteDescription: string;
  sections: Section[];
};