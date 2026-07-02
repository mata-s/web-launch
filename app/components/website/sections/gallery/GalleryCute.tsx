import { GalleryImage } from '@/lib/website';

type GalleryCuteProps = {
  section: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    images: GalleryImage[];
  };
};

export default function GalleryCute({ section }: GalleryCuteProps) {
  const {
    eyebrow,
    title = 'Cute Gallery',
    subtitle = 'やさしく、かわいらしい雰囲気を届けるギャラリー。',
    images,
  } = section;
  return (
    <section className="relative overflow-hidden bg-pink-50 px-8 py-16 md:px-12 md:py-20">
      <div className="absolute -left-20 top-8 h-56 w-56 rounded-full bg-pink-200/60 blur-3xl" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-orange-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          {eyebrow && (
           <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-pink-500 shadow-md">
            {eyebrow}
            </p>
          )}

          <h3 className="mt-5 text-4xl font-extrabold tracking-tight text-rose-950 md:text-5xl">
            {title}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-rose-700">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {images.map((image, index) => (
            <article
              key={image.id}
              className={`group overflow-hidden rounded-[2.5rem] bg-white shadow-xl transition duration-300 hover:-translate-y-1 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div
                className={`flex items-end p-6 ${
                  index % 3 === 0
                    ? 'bg-linear-to-br from-pink-200 to-pink-100'
                    : index % 3 === 1
                      ? 'bg-linear-to-br from-rose-200 to-orange-100'
                      : 'bg-linear-to-br from-orange-100 to-pink-100'
                } ${index === 0 ? 'min-h-340px' : 'min-h-260px'}`}
              >
                <div className="rounded-2rem bg-white/90 p-5 shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-500">
                    {image.label}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-rose-700">
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