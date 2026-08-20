import Link from "next/link";
import { firm, practiceAreas, principles, attorneys } from "@/content/firm";
import Hero from "@/components/Hero";
import PressBar from "@/components/PressBar";
import SectionHeading from "@/components/SectionHeading";
import Testimonials from "@/components/Testimonials";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <>
      <Hero />
      <PressBar />

      {/* ── Introduction: image band, text band ──────────────── */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <Photo src="/images/office.jpg" className="aspect-[4/5] w-full" />
          <div>
            <SectionHeading
              eyebrow={`Established ${firm.founded}`}
              title={`A firm built for the decisions that matter`}
              intro="[PLACEHOLDER] Two or three sentences introducing the firm. What it does, who it acts for, and why a client should trust it with something consequential."
            />
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-rule pt-8">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-slate">
                  Practice areas
                </dt>
                <dd className="mt-2 font-display text-4xl font-light">
                  {practiceAreas.length}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-slate">
                  Attorneys
                </dt>
                <dd className="mt-2 font-display text-4xl font-light">
                  {attorneys.length}
                </dd>
              </div>
            </dl>
            <Link href="/about" className="btn-dark mt-10">
              About the firm
            </Link>
          </div>
        </div>
      </section>

      {/* ── Practice areas ───────────────────────────────────── */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Practice areas"
            title="How we can help"
            align="center"
          />
          <div className="mt-16 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group bg-bone p-8 transition-colors hover:bg-white"
              >
                <Photo src={`/images/practice-${area.slug}.jpg`} className="mb-6 aspect-[3/2] w-full" zoomOnHover />
                <h3 className="font-display text-xl transition-colors group-hover:text-gold">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {area.summary}
                </p>
                <span className="mt-5 inline-block font-mono text-xs text-gold">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach: reversed band ──────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <SectionHeading eyebrow="How we work" title="Our approach" />
            <div className="mt-10 space-y-8">
              {principles.map((p) => (
                <div key={p.marker} className="border-l-2 border-gold pl-6">
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <Photo src="/images/approach.jpg" className="order-1 aspect-[4/5] w-full lg:order-2" />
        </div>
      </section>

      {/* ── Attorneys preview ────────────────────────────────── */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our team"
            title="The people who will handle your matter"
            align="center"
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {attorneys.slice(0, 3).map((att) => (
              <Link key={att.slug} href={`/attorneys/${att.slug}`} className="group">
                <Photo src={`/images/attorney-${att.slug}.jpg`} className="aspect-[3/4] w-full" zoomOnHover />
                <h3 className="mt-5 font-display text-xl transition-colors group-hover:text-gold">
                  {att.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-gold">
                  {att.role}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/attorneys" className="btn-dark">
              Meet the full team
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="bg-gold py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="font-display text-3xl font-light leading-tight text-white sm:text-4xl">
              Tell us what you are dealing with.
            </h2>
            <p className="mt-3 text-white/85">
              We respond within one business day.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-charcoal px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-ink"
            >
              Free consultation
            </Link>
            <a
              href={`tel:${firm.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center border border-white px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gold"
            >
              {firm.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
