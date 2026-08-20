import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { practiceAreas, attorneys } from "@/content/firm";

export function generateStaticParams() {
  return practiceAreas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const area = practiceAreas.find((a) => a.slug === params.slug);
  return {
    title: area?.title ?? "Practice Area",
    description: area?.summary,
  };
}

export default function PracticeAreaPage({
  params,
}: {
  params: { slug: string };
}) {
  const area = practiceAreas.find((a) => a.slug === params.slug);
  if (!area) notFound();

  const team = attorneys.filter((att) => att.practiceAreas.includes(area.slug));

  return (
    <article className="mx-auto max-w-6xl px-6 py-20">
      <Link href="/practice-areas" className="font-mono text-xs text-oxblood">
        ← All practice areas
      </Link>

      <h1 className="mt-8 max-w-3xl font-display text-4xl font-light md:text-5xl">
        {area.title}
      </h1>
      <p className="mt-6 max-w-reading text-lg leading-relaxed text-slate">
        {area.description}
      </p>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <div className="rule-top pt-6">
            <p className="eyebrow">Services</p>
          </div>
          <ul className="mt-6">
            {area.services.map((s, i) => (
              <li
                key={s}
                className="flex gap-4 border-b border-rule py-3 text-sm"
              >
                <span className="font-mono text-xs text-oxblood">
                  §&nbsp;{i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {team.length > 0 && (
          <div>
            <div className="rule-top pt-6">
              <p className="eyebrow">Who handles this</p>
            </div>
            <ul className="mt-6 space-y-4">
              {team.map((att) => (
                <li key={att.slug}>
                  <Link
                    href={`/attorneys/${att.slug}`}
                    className="block border-b border-rule pb-4 hover:text-oxblood"
                  >
                    <span className="font-display text-xl">{att.name}</span>
                    <span className="block text-sm text-slate">{att.role}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-16">
        <Link
          href="/contact"
          className="inline-block bg-ink px-6 py-3 text-sm text-bone hover:bg-oxblood"
        >
          Discuss a {area.title.toLowerCase()} matter
        </Link>
      </div>
    </article>
  );
}
