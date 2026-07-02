import { GalleryImage } from '@/lib/website';

type GalleryCreativeProps = {
  section: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    images: GalleryImage[];
  };
};

export default function GalleryCreative({ section }: GalleryCreativeProps) {
  const {
    eyebrow,
    title = 'Creative Gallery',
    subtitle = '個性や世界観を強く見せる、遊び心のあるギャラリー。',
    images,
  } = section;
  return (
    <section className="relative overflow-hidden bg-[#fff7ed] px-8 py-16 md:px-12 md:py-20">
      <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            {eyebrow && (
              <p className="inline-flex rotate--2deg rounded-full bg-zinc-950 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-white shadow-lg">
                {eyebrow}
              </p>
            )}
            <h3 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-zinc-950 md:text-5xl">
              {title}
            </h3>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-700">{subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {images.map((image, index) => (
            <article
              key={image.id}
              className={`group overflow-hidden rounded-2rem border-4 border-zinc-950 bg-white shadow-[8px_8px_0_#18181b] transition duration-300 hover:-translate-y-1 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div
                className={`relative flex items-end p-6 ${
                  index % 3 === 0
                    ? 'bg-pink-400'
                    : index % 3 === 1
                      ? 'bg-violet-500'
                      : 'bg-amber-300'
                } ${index === 0 ? 'min-h-340px' : 'min-h-260px'}`}
              >
                <div className="absolute right-6 top-6 h-16 w-16 rotate-12 rounded-2xl bg-white/30" />
                <div className="absolute left-8 top-10 h-10 w-24 rotate-[-8deg] rounded-full bg-zinc-950/20" />

                <div className="relative rounded-3xl border-4 border-zinc-950 bg-white p-5 shadow-[6px_6px_0_#18181b]">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-pink-500">
                    {image.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-zinc-700">
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
