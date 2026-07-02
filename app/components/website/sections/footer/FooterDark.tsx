import { FooterSection as FooterSectionData } from '@/lib/website';

type FooterDarkProps = {
  section: FooterSectionData;
};

export default function FooterDark({ section }: FooterDarkProps) {
  return (
    <footer className="relative overflow-hidden bg-black px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-16">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-950 shadow-2xl">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-violet-500/10" />
        <div className="absolute bottom-0 left-0 h-28 w-28 rounded-tr-full bg-cyan-500/10" />

        <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <p className="text-2xl font-black tracking-tight text-white">
              {section.companyName}
            </p>

            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-400">
              {section.description}
            </p>

            <div className="mt-8 space-y-3 text-sm text-zinc-300">
              <p>{section.email}</p>
              <p>{section.phone}</p>
              <p>{section.address}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
                Menu
              </p>

              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 transition hover:text-violet-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Social
              </p>

              <ul className="mt-5 space-y-3">
                {section.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="text-sm text-zinc-400 transition hover:text-cyan-300"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative border-t border-zinc-800 px-8 py-6">
          <div className="mx-auto h-px max-w-xl bg-linear-to-r from-violet-500/0 via-violet-400/60 to-cyan-400/0" />

          <p className="mt-6 text-center text-sm text-zinc-500">
            {section.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}