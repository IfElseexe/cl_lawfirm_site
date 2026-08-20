import type { Metadata } from "next";
import { firm, principles } from "@/content/firm";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow">About</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-light leading-tight md:text-5xl">
        {firm.name}
      </h1>

      <div className="mt-10 max-w-reading space-y-6 text-lg leading-relaxed text-slate">
        <p>
          [PLACEHOLDER] Open with the firm&rsquo;s origin and the conviction behind
          it. What did the founders think was missing from the way legal services
          were being delivered? Be specific — this paragraph is what separates the
          firm from every other firm in {firm.address.city}.
        </p>
        <p>
          [PLACEHOLDER] Second paragraph: who the firm serves today and what kind
          of work it takes on. Concrete examples land harder than adjectives.
        </p>
      </div>

      <div className="mt-20">
        <div className="rule-top pt-8">
          <p className="eyebrow">Principles</p>
        </div>
        <div className="mt-10 space-y-10">
          {principles.map((p) => (
            <div key={p.marker} className="grid gap-3 sm:grid-cols-[5rem_1fr] sm:gap-8">
              <p className="font-mono text-sm text-oxblood">{p.marker}</p>
              <div className="max-w-reading">
                <h2 className="font-display text-2xl">{p.title}</h2>
                <p className="mt-2 leading-relaxed text-slate">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
