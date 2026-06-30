import GalleryGrid from '../sections/gallery/GalleryGrid';
import GalleryLuxury from '../sections/gallery/GalleryLuxury';
import GalleryModern from '../sections/gallery/GalleryModern';
import GalleryMinimal from '../sections/gallery/GalleryMinimal';
import GalleryCorporate from '../sections/gallery/GalleryCorporate';
import GalleryWarm from '../sections/gallery/GalleryWarm';
import GalleryCreative from '../sections/gallery/GalleryCreative';
import GalleryCute from '../sections/gallery/GalleryCute';
import GalleryDark from '../sections/gallery/GalleryDark';

export const galleryRegistry = {
  grid: GalleryGrid,
  luxury: GalleryLuxury,
  modern: GalleryModern,
  minimal: GalleryMinimal,
  corporate: GalleryCorporate,
  warm: GalleryWarm,
  creative: GalleryCreative,
  cute: GalleryCute,
  dark: GalleryDark
} as const;

