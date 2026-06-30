import { Theme } from './theme';

// =========================
// Common
// =========================

export type HeroVariant = Theme;
export type GalleryVariant = Theme | 'grid';
export type FeatureVariant = Theme;
export type ServicesVariant = Theme;

export type GalleryImage = {
  id: string;
  label: string;
  description: string;
};

// =========================
// Sections
// =========================

export type HeroSection = {
  id: string;
  type: 'hero';
  variant: HeroVariant;
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
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
  title: string;
  subtitle: string;
  images: GalleryImage[];
};

export type FeatureSection = {
  id: string;
  type: 'feature';
  variant: FeatureVariant;
  title: string;
  subtitle: string;
  items: {
    title: string;
    description: string;
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
  | FeatureSection;

export type WebsiteData = {
  siteName: string;
  siteDescription: string;
  sections: Section[];
};