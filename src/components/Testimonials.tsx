import { testimonials } from "@/content/firm";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="In their words"
          title="What clients say"
          align="center"
          light
        />

        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="bg-charcoal p-9">
              <div className="font-mono text-sm text-gold" aria-hidden="true">
                ★★★★★
              </div>
              <blockquote className="mt-5 font-display text-xl font-light leading-relaxed text-white/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/15 pt-5">
                <span className="block text-sm text-white">{t.author}</span>
                <span className="mt-0.5 block font-mono text-xs text-white/50">
                  {t.matter}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
