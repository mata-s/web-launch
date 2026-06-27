import { WebsiteData } from '@/lib/mock/website';
import SectionRenderer from './SectionRenderer';

type PreviewPanelProps = {
  website: WebsiteData;
};

export default function PreviewPanel({ website }: PreviewPanelProps) {
  return (
    <section className="flex h-full w-full flex-col bg-zinc-100">
      <div className="border-b border-zinc-200 bg-white px-5 py-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
          Preview
        </p>
        <h2 className="mt-1 text-lg font-semibold text-zinc-900">
          リアルタイムプレビュー
        </h2>
      </div>

      <div className="flex flex-1 justify-center overflow-y-auto p-8">
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg">
          <header className="flex items-center justify-between border-b border-zinc-100 px-8 py-5">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
                {website.siteName}
              </h1>
              <p className="mt-1 text-sm text-zinc-500">
                {website.siteDescription}
              </p>
            </div>
            <button className="rounded-xl bg-zinc-900 px-5 py-2 text-sm font-medium text-white">
              お問い合わせ
            </button>
          </header>

          <main>
            {website.sections.map((section) => (
              <SectionRenderer key={section.id} section={section} />
            ))}
          </main>
        </div>
      </div>
    </section>
  );
}