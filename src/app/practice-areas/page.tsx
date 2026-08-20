import Link from "next/link";
import type { Metadata } from "next";
import { practiceAreas } from "@/content/firm";

export const metadata: Metadata = { title: "Practice Areas" };

export default function PracticeAreasPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow">Practice</p>
      <h1 className="mt-4 font-display text-4xl font-light md:text-5xl">
        What we do
      </h1>

      <div className="mt-14 grid gap-px bg-rule sm:grid-cols-2">
        {practiceAreas.map((area) => (
          <Link
            key={area.slug}
            href={`/practice-areas/${area.slug}`}
            className="group bg-paper p-8 transition-colors hover:bg-bone"
          >
            <h2 className="font-display text-2xl group-hover:text-oxblood">
              {area.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate">{area.summary}</p>
            <p className="mt-6 font-mono text-xs text-oxblood">Read more →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
