import Link from "next/link";
import type { Metadata } from "next";
import { practiceAreas } from "@/content/firm";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";

export const metadata: Metadata = { title: "Practice Areas" };

export default function PracticeAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Practice"
        title="What we do"
        intro="Select an area to see the work it covers and who at the firm handles it."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-px bg-rule sm:grid-cols-2">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="group bg-bone p-9 transition-colors hover:bg-white"
            >
              <Photo src={`/images/practice-${area.slug}.jpg`} className="mb-7 aspect-[16/9] w-full" zoomOnHover />
              <h2 className="font-display text-2xl transition-colors group-hover:text-gold">
                {area.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{area.summary}</p>
              <span className="mt-6 inline-block font-mono text-xs text-gold">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
