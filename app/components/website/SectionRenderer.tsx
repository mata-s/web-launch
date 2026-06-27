import { Section } from '@/lib/mock/website';
import HeroSection from './sections/hero/HeroSection';
import ConceptSection from './sections/ConceptSection';
import ServicesSection from './sections/ServicesSection';

type SectionRendererProps = {
  section: Section;
};

export default function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.type) {
    case 'hero':
      return <HeroSection section={section} />;

    case 'concept':
      return <ConceptSection section={section} />;

    case 'services':
      return <ServicesSection section={section} />;

    default:
      return null;
  }
}