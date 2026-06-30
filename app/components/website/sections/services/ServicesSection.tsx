import { ServicesSection as ServicesSectionData } from '@/lib/website';
import { servicesRegistry } from '../../registry/servicesRegistry';

type ServicesSectionProps = {
  section: ServicesSectionData;
};

export default function ServicesSection({
  section,
}: ServicesSectionProps) {
  const Component = servicesRegistry[section.variant];

  if (!Component) {
    return null;
  }

  return <Component section={section} />;
}