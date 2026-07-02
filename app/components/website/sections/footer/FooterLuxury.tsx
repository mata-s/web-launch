import { FooterSection as FooterSectionData } from '@/lib/website';

type FooterLuxuryProps = {
  section: FooterSectionData;
};

export default function FooterLuxury({ section }: FooterLuxuryProps) {
  return (
    <footer className="bg-[#f8f3ef] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-8 shadow-xl sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-2xl font-bold tracking-tight text-zinc-950">
              {section.companyName}
            </p>

            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-600">
              {section.description}
            </p>

            <div className="mt-8 space-y-3 text-sm text-zinc-700">
              <p>{section.email}</p>
              <p>{section.phone}</p>
              <p>{section.address}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                Menu
              </p>

              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-700 transition hover:text-zinc-950"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                Social
              </p>

              <ul className="mt-5 space-y-3">
                {section.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="text-sm text-zinc-700 transition hover:text-zinc-950"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6">
          <p className="text-center text-sm text-zinc-500">
            {section.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}