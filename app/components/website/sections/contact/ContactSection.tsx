import { ContactSection as ContactSectionData } from '@/lib/website';
import { contactRegistry } from '../../registry/contactRegistry';

type ContactSectionProps = {
  section: ContactSectionData;
};

export default function ContactSection({ section }: ContactSectionProps) {
  const Component = contactRegistry[section.variant];

  if (!Component) {
    return null;
  }

  return <Component section={section} />;
}