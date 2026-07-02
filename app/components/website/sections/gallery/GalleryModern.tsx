import { GalleryImage } from '@/lib/website';

type GalleryModernProps = {
  section: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    images: GalleryImage[];
  };
};

export default function GalleryModern({ section }: GalleryModernProps) {
  const {
    eyebrow,
    title = 'Modern Gallery',
    subtitle = '洗練されたビジュアルを印象的に見せるレイアウト。',
    images,
  } = section;
  return (
    <section className="bg-zinc-950 px-8 py-16 text-white md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
               {eyebrow}
              </p>
            )}
            
            <h3 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              {title}
            </h3>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400">{subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {images.map((image, index) => (
            <article
              key={image.id}
              className={`overflow-hidden rounded-2rem border border-zinc-800 bg-zinc-900 ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative flex min-h-260px items-end bg-linear-to-br from-cyan-500/20 via-zinc-900 to-indigo-500/20 p-6 transition hover:scale-[1.02]">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative rounded-2xl border border-cyan-400/20 bg-zinc-900/80 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
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