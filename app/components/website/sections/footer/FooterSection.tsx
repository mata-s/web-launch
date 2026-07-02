import { FooterSection as FooterSectionData } from '@/lib/website';
import { footerRegistry } from '../../registry/footerRegistry';

type FooterSectionProps = {
  section: FooterSectionData;
};

export default function FooterSection({ section }: FooterSectionProps) {
  const Component = footerRegistry[section.variant];

  if (!Component) {
    return null;
  }

  return <Component section={section} />;
}
