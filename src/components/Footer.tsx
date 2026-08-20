import Link from "next/link";
import { firm, nav, practiceAreas } from "@/content/firm";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-bone">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl">{firm.name}</p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-slate">
              {firm.address.line1}
              <br />
              {firm.address.line2}
              <br />
              {firm.address.city}, {firm.address.region} {firm.address.postalCode}
              <br />
              {firm.address.country}
            </address>
            <p className="mt-4 font-mono text-sm">
              <a href={`tel:${firm.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-oxblood">
                {firm.phone}
              </a>
              <br />
              <a href={`mailto:${firm.email}`} className="hover:text-oxblood">
                {firm.email}
              </a>
            </p>
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate hover:text-oxblood">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Practice</p>
            <ul className="mt-4 space-y-2 text-sm">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-slate hover:text-oxblood"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Required legal notices */}
        <div className="mt-16 border-t border-rule pt-8">
          <p className="max-w-reading text-xs leading-relaxed text-slate">
            {firm.disclaimer}
          </p>
          <div className="mt-6 flex flex-col gap-2 font-mono text-xs text-slate sm:flex-row sm:justify-between">
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
