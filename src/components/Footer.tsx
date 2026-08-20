import Link from "next/link";
import { firm, nav, practiceAreas } from "@/content/firm";

export default function Footer() {
  const socials = Object.entries(firm.social).filter(([, url]) => url);

  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl text-white">{firm.name}</p>
            <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-gold">
              Attorneys at Law
            </p>
            <address className="mt-6 not-italic text-sm leading-relaxed">
              {firm.address.line1}
              <br />
              {firm.address.line2}
              <br />
              {firm.address.city}, {firm.address.region} {firm.address.postalCode}
              <br />
              {firm.address.country}
            </address>
            <p className="mt-5 font-mono text-sm">
              <a
                href={`tel:${firm.phone.replace(/[^0-9+]/g, "")}`}
                className="transition-colors hover:text-gold"
              >
                {firm.phone}
              </a>
              <br />
              <a
                href={`mailto:${firm.email}`}
                className="transition-colors hover:text-gold"
              >
                {firm.email}
              </a>
            </p>
            {socials.length > 0 && (
              <div className="mt-6 flex gap-5 text-sm">
                {socials.map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    className="capitalize transition-colors hover:text-gold"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Practice</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="transition-colors hover:text-gold"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Required legal notices */}
        <div className="mt-16 border-t border-white/15 pt-8">
          <p className="max-w-reading text-xs leading-relaxed text-white/50">
            {firm.disclaimer}
          </p>
          <div className="mt-6 flex flex-col gap-2 font-mono text-xs text-white/40 sm:flex-row sm:justify-between">
            <span>
              © {new Date().getFullYear()} {firm.name}. All rights reserved.
            </span>
            <span>{firm.advertisingNotice}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
