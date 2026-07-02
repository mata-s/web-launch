import { FaqSection as FaqSectionData } from '@/lib/website';
import { faqRegistry } from '../../registry/faqRegistry';

type FaqSectionProps = {
  section: FaqSectionData;
};

export default function FaqSection({ section }: FaqSectionProps) {
  const Component = faqRegistry[section.variant];

  if (!Component) {
    return null;
  }

  return <Component section={section} />;
}