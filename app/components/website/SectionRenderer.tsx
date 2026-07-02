import { Section } from '@/lib/website';
import { sectionRegistry } from './registry/sectionRegistry';

type SectionRendererProps = {
  section: Section;
};

export default function SectionRenderer({ section }: SectionRendererProps) {
  const Component = sectionRegistry[section.type];

  if (!Component) {
    return null;
  }

  return <Component section={section as never} />;
}