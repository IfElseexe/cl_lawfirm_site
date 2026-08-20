import Link from "next/link";
import { firm } from "@/content/firm";
import Photo from "@/components/Photo";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Photo src={firm.hero.image} className="absolute inset-0 h-full w-full" />
      {/* Photograph, when supplied. Falls back to the gradient behind it. */}
      {/* Overlay keeps the headline legible over any photograph. */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32">
        <div className="max-w-2xl animate-riseIn">
          <p className="eyebrow">{firm.hero.eyebrow}</p>
          <h1 className="mt-6 font-display text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {firm.hero.headline}
          </h1>
          <div className="mt-7 h-px w-24 bg-gold" />
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
            {firm.hero.subhead}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold">
              Free consultation
            </Link>
            <Link href="/practice-areas" className="btn-outline">
              How we can help
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
