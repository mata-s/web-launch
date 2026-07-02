import { GalleryImage } from '@/lib/website';

type GalleryMinimalProps = {
  section: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    images: GalleryImage[];
  };
};

export default function GalleryMinimal({ section }: GalleryMinimalProps) {
  const {
    eyebrow,
    title = 'Minimal Gallery',
    subtitle = '余白を活かして、写真や実績をシンプルに見せます。',
    images,
  } = section;
  return (
    <section className="bg-white px-8 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
            {eyebrow}
          </p>
          )}
          <h3 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">
            {title}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {images.map((image) => (
            <article
              key={image.id}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white"
            >
              <div className="flex min-h-260px items-end bg-zinc-100 p-5 transition duration-300 group-hover:bg-zinc-200">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                    {image.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
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