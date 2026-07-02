import { GalleryImage } from '@/lib/website';

type GalleryWarmProps = {
  section: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    images: GalleryImage[];
  };
};

export default function GalleryWarm({ section }: GalleryWarmProps) {
  const {
    eyebrow,
    title = 'Warm Gallery',
    subtitle = 'あたたかく、居心地の良さが伝わるギャラリー。',
    images,
  } = section;

  return (
    <section className="bg-[#faf7f2] px-8 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
              {eyebrow}
            </p>
          )}
          <h3 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
            {title}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-600">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {images.map((image, index) => (
            <article
              key={image.id}
              className={`overflow-hidden rounded-2rem bg-white shadow-lg transition duration-300 hover:-translate-y-1 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex min-h-260px items-end bg-linear-to-br from-amber-100 via-orange-50 to-stone-100 p-6">
                <div className="rounded-3xl bg-white/90 p-5 shadow-md backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                    {image.label}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {image.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}