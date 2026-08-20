import type { Metadata } from "next";
import Link from "next/link";
import { firm, principles } from "@/content/firm";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Photo from "@/components/Photo";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={firm.name} intro={firm.tagline} />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <Photo src="/images/office.jpg" className="aspect-[4/5] w-full" />
          <div className="max-w-reading space-y-6 leading-relaxed text-slate">
            <p>
              [PLACEHOLDER] Open with the firm&rsquo;s origin and the conviction
              behind it. What did the founders think was missing from the way
              legal services were being delivered? Be specific — this paragraph is
              what separates the firm from every other firm in {firm.address.city}.
            </p>
            <p>
              [PLACEHOLDER] Second paragraph: who the firm serves today and what
              kind of work it takes on. Concrete examples land harder than
              adjectives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="How we work" title="Our principles" align="center" />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.marker} className="border-t-2 border-gold pt-6">
                <h2 className="font-display text-xl">{p.title}</h2>
                <p className="mt-3 leading-relaxed text-slate">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/contact" className="btn-dark">
              Request a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
