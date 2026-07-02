import { ContactSection as ContactSectionData } from '@/lib/website';

type ContactDarkProps = {
  section: ContactSectionData;
};

export default function ContactDark({ section }: ContactDarkProps) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          {section.eyebrow && (
            <p className="inline-flex rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mt-5 max-w-3xl break-keep text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2rem border border-zinc-800 bg-zinc-950 p-5 shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
                Email
              </p>
              <p className="mt-2 break-all text-base font-bold text-white">
                {section.email}
              </p>
            </div>

            <div className="rounded-2rem border border-zinc-800 bg-zinc-950 p-5 shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
                Phone
              </p>
              <p className="mt-2 text-base font-bold text-white">
                {section.phone}
              </p>
            </div>

            <div className="rounded-2rem border border-zinc-800 bg-zinc-950 p-5 shadow-2xl sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
                Address
              </p>
              <p className="mt-2 text-base font-bold leading-7 text-white">
                {section.address}
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-2rem border border-zinc-800 bg-zinc-950 p-5 shadow-2xl sm:p-8">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-violet-500/10" />
          <div className="absolute bottom-0 left-0 h-28 w-28 rounded-tr-full bg-cyan-500/10" />

          <div className="relative rounded-1.5rem border border-violet-400/20 bg-black/60 p-5 backdrop-blur sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="お名前"
                  className="mt-3 w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="mt-3 w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Message
                </span>
                <textarea
                  placeholder="お問い合わせ内容"
                  rows={6}
                  className="mt-3 w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400"
                />
              </label>
            </div>

            <button className="mt-6 w-full rounded-2xl bg-linear-to-r from-violet-500 to-cyan-400 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-90">
              {section.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
