import { HeroSection as HeroSectionData } from '@/lib/website';
import { heroRegistry } from '../../registry/heroRegistry';

type HeroSectionProps = {
  section: HeroSectionData;
};

export default function HeroSection({ section }: HeroSectionProps) {
  const Component = heroRegistry[section.variant];

  if (!Component) {
    return null;
  }

  return <Component section={section} />;
}