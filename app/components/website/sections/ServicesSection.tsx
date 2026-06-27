import { ServicesSection as ServicesSectionData } from '@/lib/mock/website';

type ServicesSectionProps = {
  section: ServicesSectionData;
};

export default function ServicesSection({ section }: ServicesSectionProps) {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50 px-8 py-14 md:px-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Menu
          </p>
          <h3 className="mt-3 text-3xl font-bold text-zinc-950">
            サービス一覧
          </h3>
        </div>
        <p className="text-sm text-zinc-500">税込価格 / 目安料金</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {section.items.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <h4 className="text-xl font-bold text-zinc-950">{item.title}</h4>
            <p className="mt-3 min-h-16 text-sm leading-7 text-zinc-500">
              {item.description}
            </p>
            <p className="mt-5 text-lg font-bold text-zinc-900">{item.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}