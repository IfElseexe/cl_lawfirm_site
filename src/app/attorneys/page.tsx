import Link from "next/link";
import type { Metadata } from "next";
import { attorneys } from "@/content/firm";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";

export const metadata: Metadata = { title: "Attorneys" };

export default function AttorneysPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="Attorneys"
        intro="The lawyer you meet is the lawyer who handles your file."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((att) => (
            <Link key={att.slug} href={`/attorneys/${att.slug}`} className="group">
              <Photo src={`/images/attorney-${att.slug}.jpg`} className="aspect-[3/4] w-full" zoomOnHover />
              <h2 className="mt-5 font-display text-2xl transition-colors group-hover:text-gold">
                {att.name}
              </h2>
              <p className="font-mono text-xs uppercase tracking-widest text-gold">
                {att.role}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
