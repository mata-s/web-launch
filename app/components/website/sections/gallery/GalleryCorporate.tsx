import { GalleryImage } from '@/lib/website';

type GalleryCorporateProps = {
  title?: string;
  subtitle?: string;
  images: GalleryImage[];
};

export default function GalleryCorporate({
  title = 'Corporate Gallery',
  subtitle = '実績や事業内容を信頼感のあるレイアウトで見せます。',
  images,
}: GalleryCorporateProps) {
  return (
    <section className="bg-slate-50 px-8 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
              Corporate Gallery
            </p>
            <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {title}
            </h3>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600">{subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {images.map((image, index) => (
            <article
              key={image.id}
              className={`overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex min-h-260px items-end bg-linear-to-br from-slate-900 via-slate-700 to-blue-700 p-6">
                <div className="rounded-2xl bg-white p-5 shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                    {image.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
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