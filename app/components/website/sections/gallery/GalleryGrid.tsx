import { GalleryImage } from '@/lib/website';

type GalleryGridProps = {
  title?: string;
  subtitle?: string;
  images: GalleryImage[];
};

export default function GalleryGrid({
  title = 'Gallery',
  subtitle = '雰囲気が伝わる写真を並べます。',
  images,
}: GalleryGridProps) {
  return (
    <section className="bg-white px-8 py-14 md:px-12">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Gallery
          </p>
          <h3 className="mt-3 text-3xl font-bold text-zinc-950">{title}</h3>
        </div>
        <p className="max-w-md text-sm leading-6 text-zinc-500">{subtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {images.map((image, index) => (
          <article
            key={image.id}
            className={`group overflow-hidden rounded-3xl bg-zinc-100 ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <div className="relative flex min-h-56 items-end bg-linear-to-br from-zinc-900 via-zinc-600 to-zinc-300 p-5 transition duration-300 group-hover:scale-[1.02] md:min-h-64">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
                <p className="text-sm font-bold text-zinc-950">{image.label}</p>
                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  {image.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}