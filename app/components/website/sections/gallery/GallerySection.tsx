import { GallerySection as GallerySectionData } from '@/lib/website';
import { galleryRegistry } from '../../registry/galleryRegistry';

type GallerySectionProps = {
  section: GallerySectionData;
};

export default function GallerySection({ section }: GallerySectionProps) {
  const Component = galleryRegistry[section.variant];

  if (!Component) {
    return null;
  }

  return <Component section={section} />;
}