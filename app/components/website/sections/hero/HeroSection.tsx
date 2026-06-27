import { HeroSection as HeroSectionData } from '@/lib/mock/website';
import HeroLuxury from './HeroLuxury';
import HeroMinimal from './HeroMinimal';
import HeroModern from './HeroModern';

type HeroSectionProps = {
  section: HeroSectionData;
};

export default function HeroSection({ section }: HeroSectionProps) {
  switch (section.variant) {
    case 'minimal':
      return <HeroMinimal section={section} />;

    case 'modern':
      return <HeroModern section={section} />;

    case 'luxury':
    default:
      return <HeroLuxury section={section} />;
  }
}