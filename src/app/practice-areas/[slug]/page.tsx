import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { practiceAreas, attorneys } from "@/content/firm";
import PageHeader from "@/components/PageHeader";

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
    <>
      <PageHeader eyebrow="Practice area" title={area.title} intro={area.description} />
      <article className="mx-auto max-w-7xl px-6 py-20">
      <Link href="/practice-areas" className="font-mono text-xs text-gold">
        ← All practice areas
      </Link>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div>
          <div className="border-t border-rule pt-6">
            <p className="eyebrow">Services</p>
          </div>
          <ul className="mt-6">
            {area.services.map((s, i) => (
              <li
                key={s}
                className="flex gap-4 border-b border-rule py-3 text-sm"
              >
                <span className="font-mono text-xs text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {team.length > 0 && (
          <div>
            <div className="border-t border-rule pt-6">
              <p className="eyebrow">Who handles this</p>
            </div>
            <ul className="mt-6 space-y-4">
              {team.map((att) => (
                <li key={att.slug}>
                  <Link
                    href={`/attorneys/${att.slug}`}
                    className="block border-b border-rule pb-4 hover:text-gold"
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
        <Link href="/contact" className="btn-dark">
          Discuss a {area.title.toLowerCase()} matter
        </Link>
      </div>
      </article>
    </>
  );
}
