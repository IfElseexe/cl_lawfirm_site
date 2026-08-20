import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { attorneys, practiceAreas } from "@/content/firm";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";

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
    <>
      <PageHeader eyebrow={att.role} title={att.name} />
      <article className="mx-auto max-w-7xl px-6 py-20">
      <Link href="/attorneys" className="font-mono text-xs text-gold">
        ← All attorneys
      </Link>

      <div className="mt-12 grid gap-16 md:grid-cols-[1fr_2fr]">
        <Photo src={`/images/attorney-${att.slug}.jpg`} className="aspect-[3/4] w-full" />
        <div>
          <p className="max-w-reading text-lg leading-relaxed text-slate">
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
                    className="border border-rule px-3 py-1.5 text-sm hover:border-gold hover:text-gold"
                  >
                    {a.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

      <div className="mt-16 grid gap-12 border-t border-rule pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <DetailList label="Admissions" items={[...att.admissions]} />
          <DetailList label="Education" items={[...att.education]} />
          <DetailList label="Languages" items={[...att.languages]} />
      <div>
            <p className="eyebrow">Contact</p>
            <a
              href={`mailto:${att.email}`}
              className="mt-3 block font-mono text-sm hover:text-gold"
            >
              {att.email}
            </a>
          </div>
      </div>
      </article>
    </>
  );
}
