import Link from "next/link";
import { firm, practiceAreas, principles } from "@/content/firm";

export default function Home() {
  return (
    <>
      {/* ── Hero: the thesis, set as a legal citation ────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-32">
        <p className="eyebrow">
          {firm.address.city} · Est. {firm.founded}
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          {firm.tagline}
        </h1>
        <p className="mt-8 max-w-reading text-lg leading-relaxed text-slate">
          {firm.metaDescription}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="bg-ink px-6 py-3 text-sm text-bone transition-colors hover:bg-oxblood"
          >
            Request a consultation
          </Link>
          <Link
            href="/practice-areas"
            className="border border-ink px-6 py-3 text-sm transition-colors hover:bg-ink hover:text-bone"
          >
            How we can help
          </Link>
        </div>
      </section>

      {/* ── Practice areas as a table of authorities ─────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rule-top pt-8">
          <p className="eyebrow">Table of authorities</p>
          <h2 className="mt-3 font-display text-3xl font-light">Practice areas</h2>
        </div>

        <ul className="mt-10">
          {practiceAreas.map((area, i) => (
            <li key={area.slug}>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="group grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-rule py-6 transition-colors hover:bg-bone sm:grid-cols-[4rem_1fr_auto] sm:gap-8"
              >
                <span className="font-mono text-sm text-oxblood">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="font-display text-2xl transition-colors group-hover:text-oxblood">
                    {area.title}
                  </span>
                  <span className="mt-1 block max-w-reading text-sm text-slate">
                    {area.summary}
                  </span>
                </span>
                <span className="hidden font-mono text-sm text-slate group-hover:text-oxblood sm:block">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Principles, using real section markers ───────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rule-top pt-8">
          <p className="eyebrow">How we work</p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.marker}>
              <p className="font-mono text-sm text-oxblood">{p.marker}</p>
              <h3 className="mt-3 font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing call to action ───────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="bg-ink px-8 py-16 text-bone md:px-16">
          <p className="eyebrow !text-bone/60">Next step</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-light leading-tight md:text-4xl">
            Tell us what you are dealing with. We will tell you whether we can help.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block border border-bone px-6 py-3 text-sm transition-colors hover:bg-bone hover:text-ink"
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </>
  );
}
