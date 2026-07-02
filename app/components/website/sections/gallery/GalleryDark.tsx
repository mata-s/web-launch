import { GalleryImage } from '@/lib/website';

type GalleryDarkProps = {
  section: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    images: GalleryImage[];
  };
};

export default function GalleryDark({ section }: GalleryDarkProps) {
  const {
    eyebrow,
    title = 'Dark Gallery',
    subtitle = '黒を基調に、世界観を強く印象づけるギャラリー。',
    images,
  } = section;
  return (
    <section className="relative overflow-hidden bg-black px-8 py-16 text-white md:px-12 md:py-20">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            {eyebrow && (
              <p className="inline-flex rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
                {eyebrow}
              </p>
            )}
            <h3 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              {title}
            </h3>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400">{subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {images.map((image, index) => (
            <article
              key={image.id}
              className={`group overflow-hidden rounded-2rem border border-zinc-800 bg-zinc-950 shadow-2xl transition duration-300 hover:-translate-y-1 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div
                className={`relative flex items-end p-6 ${
                  index % 3 === 0
                    ? 'bg-linear-to-br from-violet-600/30 via-zinc-950 to-black'
                    : index % 3 === 1
                      ? 'bg-linear-to-br from-cyan-500/20 via-zinc-950 to-black'
                      : 'bg-linear-to-br from-fuchsia-500/20 via-zinc-950 to-black'
                } ${index === 0 ? 'min-h-340px' : 'min-h-260px'}`}
              >
                <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute right-6 bottom-6 h-24 w-24 rounded-full bg-violet-500/20 blur-3xl" />

                <div className="relative rounded-3xl border border-white/10 bg-zinc-900/80 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
                    {image.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
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