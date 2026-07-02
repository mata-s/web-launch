import { GalleryImage } from '@/lib/website';

type GalleryLuxuryProps = {
  section: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    images: GalleryImage[];
  };
};

export default function GalleryLuxury({ section }: GalleryLuxuryProps) {
  const {
    eyebrow,
    title = 'Luxury Gallery',
    subtitle = '上質な雰囲気が伝わる写真を美しく見せます。',
    images,
  } = section;
  return (
    <section className="bg-[#f8f3ef] px-8 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                {eyebrow}
              </p>
            )}
            <h3 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">
              {title}
            </h3>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-600">{subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {images.map((image, index) => (
            <article
              key={image.id}
              className={`group overflow-hidden rounded-2rem bg-white shadow-lg ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div
                className={`relative flex items-end bg-linear-to-br from-zinc-950 via-zinc-700 to-stone-300 p-6 transition duration-300 group-hover:scale-[1.02] ${
                  index === 0 ? 'min-h-430px' : 'min-h-210px'
                }`}
              >
                <div className="absolute inset-0 bg-black/15" />
                <div className="relative rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                    {image.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-700">
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