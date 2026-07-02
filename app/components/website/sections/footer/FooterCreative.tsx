import { FooterSection as FooterSectionData } from '@/lib/website';

type FooterCreativeProps = {
  section: FooterSectionData;
};

export default function FooterCreative({
  section,
}: FooterCreativeProps) {
  return (
    <footer className="relative overflow-hidden bg-[#fff7ed] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
      <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border-4 border-zinc-950 bg-white shadow-[10px_10px_0_#18181b]">
        <div className="bg-pink-400 p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <p className="text-xl font-black tracking-tight text-zinc-950">
              {section.companyName}
            </p>

            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-zinc-950" />
              <span className="h-3 w-3 rounded-full bg-zinc-950" />
              <span className="h-3 w-3 rounded-full bg-zinc-950" />
            </div>
          </div>
        </div>

        <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <p className="max-w-lg text-sm font-medium leading-7 text-zinc-700">
              {section.description}
            </p>

            <div className="mt-8 space-y-3">
              <p className="font-semibold text-zinc-950">{section.email}</p>
              <p className="font-semibold text-zinc-950">{section.phone}</p>
              <p className="font-semibold text-zinc-950">
                {section.address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-pink-500">
                Menu
              </p>

              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-semibold text-zinc-700 transition hover:text-pink-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-500">
                Social
              </p>

              <ul className="mt-5 space-y-3">
                {section.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="font-semibold text-zinc-700 transition hover:text-violet-500"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-zinc-950 bg-amber-100 px-8 py-5 text-center">
          <p className="text-sm font-black text-zinc-950">
            {section.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}