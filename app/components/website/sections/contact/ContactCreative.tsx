import { ContactSection as ContactSectionData } from '@/lib/website';

type ContactCreativeProps = {
  section: ContactSectionData;
};

export default function ContactCreative({ section }: ContactCreativeProps) {
  return (
    <section className="relative overflow-hidden bg-[#fff7ed] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          {section.eyebrow && (
            <p className="inline-flex rotate--2deg rounded-full bg-zinc-950 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-white shadow-lg">
              {section.eyebrow}
            </p>
          )}
          <h3 className="mt-5 max-w-3xl break-keep text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-700 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2rem border-4 border-zinc-950 bg-white p-5 shadow-[6px_6px_0_#18181b]">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-pink-500">
                Email
              </p>
              <p className="mt-2 break-all text-base font-black text-zinc-950">
                {section.email}
              </p>
            </div>

            <div className="rounded-2rem border-4 border-zinc-950 bg-white p-5 shadow-[6px_6px_0_#18181b]">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-violet-500">
                Phone
              </p>
              <p className="mt-2 text-base font-black text-zinc-950">
                {section.phone}
              </p>
            </div>

            <div className="rounded-2rem border-4 border-zinc-950 bg-white p-5 shadow-[6px_6px_0_#18181b] sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-600">
                Address
              </p>
              <p className="mt-2 text-base font-black leading-7 text-zinc-950">
                {section.address}
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2rem border-4 border-zinc-950 bg-white shadow-[10px_10px_0_#18181b]">
          <div className="bg-pink-400 p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-950">
                Message Form
              </p>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-zinc-950" />
                <span className="h-3 w-3 rounded-full bg-zinc-950" />
                <span className="h-3 w-3 rounded-full bg-zinc-950" />
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="お名前"
                  className="mt-3 w-full rounded-2xl border-4 border-zinc-950 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:bg-pink-50"
                />
              </label>

              <label className="block">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="mt-3 w-full rounded-2xl border-4 border-zinc-950 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:bg-violet-50"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                  Message
                </span>
                <textarea
                  placeholder="お問い合わせ内容"
                  rows={6}
                  className="mt-3 w-full resize-none rounded-2xl border-4 border-zinc-950 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:bg-amber-50"
                />
              </label>
            </div>

            <button className="mt-6 w-full rounded-2xl border-4 border-zinc-950 bg-zinc-950 px-6 py-4 text-sm font-black text-white shadow-[6px_6px_0_#f472b6] transition hover:-translate-y-1">
              {section.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}