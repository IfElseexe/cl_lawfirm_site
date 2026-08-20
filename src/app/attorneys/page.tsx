import Link from "next/link";
import type { Metadata } from "next";
import { attorneys } from "@/content/firm";

export const metadata: Metadata = { title: "Attorneys" };

export default function AttorneysPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow">The firm</p>
      <h1 className="mt-4 font-display text-4xl font-light md:text-5xl">
        Attorneys
      </h1>

      <ul className="mt-14">
        {attorneys.map((att) => (
          <li key={att.slug}>
            <Link
              href={`/attorneys/${att.slug}`}
              className="group grid gap-2 border-b border-rule py-8 sm:grid-cols-[1fr_1fr_auto] sm:items-baseline sm:gap-8"
            >
              <span className="font-display text-2xl group-hover:text-oxblood">
                {att.name}
              </span>
              <span className="text-sm text-slate">{att.role}</span>
              <span className="hidden font-mono text-sm text-slate group-hover:text-oxblood sm:block">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
