import HeroSection from '../sections/hero/HeroSection';
import ConceptSection from '../sections/ConceptSection';
import ServicesSection from '../sections/services/ServicesSection';
import GallerySection from '../sections/gallery/GallerySection';
import FeatureSection from '../sections/feature/FeatureSection';
import ReviewSection from '../sections/review/ReviewSection';
import ContactSection from '../sections/contact/ContactSection';
import CtaSection from '../sections/cta/CtaSection';
import FaqSection from '../sections/faq/FaqSection';
import FooterSection from '../sections/footer/FooterSection';

export const sectionRegistry = {
  hero: HeroSection,
  concept: ConceptSection,
  services: ServicesSection,
  gallery: GallerySection,
  feature: FeatureSection,
  review: ReviewSection,
  cta: CtaSection,
  faq: FaqSection,
  contact: ContactSection,
  footer: FooterSection,
} as const;