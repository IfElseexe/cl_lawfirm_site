import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { attorneys, practiceAreas } from "@/content/firm";

export function generateStaticParams() {
  return attorneys.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const att = attorneys.find((a) => a.slug === params.slug);
  return { title: att?.name ?? "Attorney", description: att?.role };
}

function DetailList({ label, items }: { label: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <ul className="mt-3 space-y-1.5 text-sm text-slate">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AttorneyPage({
  params,
}: {
  params: { slug: string };
}) {
  const att = attorneys.find((a) => a.slug === params.slug);
  if (!att) notFound();

  const areas = practiceAreas.filter((p) => att.practiceAreas.includes(p.slug));

  return (
    <article className="mx-auto max-w-6xl px-6 py-20">
      <Link href="/attorneys" className="font-mono text-xs text-oxblood">
        ← All attorneys
      </Link>

      <div className="mt-8 grid gap-16 md:grid-cols-[2fr_1fr]">
        <div>
          <p className="eyebrow">{att.role}</p>
          <h1 className="mt-4 font-display text-4xl font-light md:text-5xl">
            {att.name}
          </h1>
          <p className="mt-8 max-w-reading text-lg leading-relaxed text-slate">
            {att.bio}
          </p>

          {areas.length > 0 && (
            <div className="mt-12">
              <p className="eyebrow">Practice areas</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/practice-areas/${a.slug}`}
                    className="border border-rule px-3 py-1.5 text-sm hover:border-oxblood hover:text-oxblood"
                  >
                    {a.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-8 rule-top pt-8 md:border-t-0 md:pt-0">
          <DetailList label="Admissions" items={[...att.admissions]} />
          <DetailList label="Education" items={[...att.education]} />
          <DetailList label="Languages" items={[...att.languages]} />
          <div>
            <p className="eyebrow">Contact</p>
            <a
              href={`mailto:${att.email}`}
              className="mt-3 block font-mono text-sm hover:text-oxblood"
            >
              {att.email}
            </a>
          </div>
        </aside>
      </div>
    </article>
  );
}
