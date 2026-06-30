import { FeatureSection as FeatureSectionData } from '@/lib/website';
import { featureRegistry } from '../../registry/featureRegistry';

type FeatureSectionProps = {
  section: FeatureSectionData;
};

export default function FeatureSection({ section }: FeatureSectionProps) {
  const Component = featureRegistry[section.variant];

  if (!Component) {
    return null;
  }

  return <Component section={section} />;
}