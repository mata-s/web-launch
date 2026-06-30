import HeroSection from '../sections/hero/HeroSection';
import ConceptSection from '../sections/ConceptSection';
import ServicesSection from '../sections/ServicesSection';
import GallerySection from '../sections/gallery/GallerySection';

export const sectionRegistry = {
  hero: HeroSection,
  concept: ConceptSection,
  services: ServicesSection,
  gallery: GallerySection,
} as const;