import { CtaSection as CtaSectionData } from '@/lib/website';
import { ctaRegistry } from '../../registry/ctaRegistry';

type CtaSectionProps = {
  section: CtaSectionData;
};

export default function CtaSection({ section }: CtaSectionProps) {
  const Component = ctaRegistry[section.variant];

  if (!Component) {
    return null;
  }

  return <Component section={section} />;
}