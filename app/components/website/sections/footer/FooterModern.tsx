import { FooterSection as FooterSectionData } from '@/lib/website';

type FooterModernProps = {
  section: FooterSectionData;
};

export default function FooterModern({ section }: FooterModernProps) {
  return (
    <footer className="overflow-hidden bg-zinc-950 px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-zinc-800 bg-zinc-900 p-8 shadow-2xl sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-2xl font-black tracking-tight">
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
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Menu
              </p>

              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 transition hover:text-cyan-300"
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

        <div className="mt-10 border-t border-zinc-800 pt-6">
          <p className="text-center text-sm text-zinc-500">
            {section.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}