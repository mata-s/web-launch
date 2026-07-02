import { FaqSection as FaqSectionData } from '@/lib/website';

type FaqModernProps = {
  section: FaqSectionData;
};

export default function FaqModern({ section }: FaqModernProps) {
  return (
    <section className="overflow-hidden bg-zinc-950 px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mx-auto mt-4 max-w-3xl break-keep text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {section.items.map((item, index) => (
            <article
              key={`${item.question}-${index}`}
              className="rounded-2rem border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-2xl sm:p-7"
            >
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 text-sm font-bold text-zinc-950 shadow-lg shadow-cyan-500/20">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div>
                  <h4 className="break-keep text-lg font-bold leading-7 text-white sm:text-xl">
                    {item.question}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.answer}
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
