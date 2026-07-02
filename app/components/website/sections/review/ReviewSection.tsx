import { ReviewSection as ReviewSectionData } from '@/lib/website';
import { reviewRegistry } from '../../registry/reviewRegistry';

type ReviewSectionProps = {
  section: ReviewSectionData;
};

export default function ReviewSection({ section }: ReviewSectionProps) {
  const Component = reviewRegistry[section.variant];

  if (!Component) {
    return null;
  }

  return <Component section={section} />;
}