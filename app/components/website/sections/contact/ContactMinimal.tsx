import { ContactSection as ContactSectionData } from '@/lib/website';

type ContactMinimalProps = {
  section: ContactSectionData;
};

export default function ContactMinimal({ section }: ContactMinimalProps) {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mx-auto mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 border-y border-zinc-200 py-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Email
              </p>
              <p className="mt-2 break-all text-base font-semibold text-zinc-950">
                {section.email}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Phone
              </p>
              <p className="mt-2 text-base font-semibold text-zinc-950">
                {section.phone}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Address
              </p>
              <p className="mt-2 text-base font-semibold leading-7 text-zinc-950">
                {section.address}
              </p>
            </div>
          </div>

          <div className="border-y border-zinc-200 py-8">
            <div className="grid gap-6">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="お名前"
                  className="mt-3 w-full border-b border-zinc-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="mt-3 w-full border-b border-zinc-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  Message
                </span>
                <textarea
                  placeholder="お問い合わせ内容"
                  rows={5}
                  className="mt-3 w-full resize-none border-b border-zinc-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
                />
              </label>
            </div>

            <button className="mt-8 w-full rounded-full bg-zinc-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-zinc-800 sm:w-auto sm:px-10">
              {section.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}