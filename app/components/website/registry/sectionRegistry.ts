import HeroSection from '../sections/hero/HeroSection';
import ConceptSection from '../sections/ConceptSection';
import ServicesSection from '../sections/services/ServicesSection';
import GallerySection from '../sections/gallery/GallerySection';
import FeatureSection from '../sections/feature/FeatureSection';

export const sectionRegistry = {
  hero: HeroSection,
  concept: ConceptSection,
  services: ServicesSection,
  gallery: GallerySection,
  feature: FeatureSection,
} as const;