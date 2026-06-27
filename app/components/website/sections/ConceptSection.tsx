import { ConceptSection as ConceptSectionData } from '@/lib/mock/website';

type ConceptSectionProps = {
  section: ConceptSectionData;
};

export default function ConceptSection({ section }: ConceptSectionProps) {
  return (
    <section className="grid gap-8 px-8 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-12">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
          Concept
        </p>
        <h3 className="mt-3 text-3xl font-bold leading-snug text-zinc-950">
          {section.title}
        </h3>
      </div>

      <div>
        <p className="text-base leading-8 text-zinc-600">
          {section.description}
        </p>
      </div>
    </section>
  );
}