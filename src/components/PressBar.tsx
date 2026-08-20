import { pressMentions } from "@/content/firm";

/**
 * Renders only when the firm has genuine, verifiable press coverage.
 * See the note in src/content/firm.ts before populating this.
 */
export default function PressBar() {
  if (!pressMentions.length) return null;

  return (
    <section className="border-b border-rule bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6">
        <span className="eyebrow">As featured in</span>
        {pressMentions.map((p) => (
          <a
            key={p.outlet}
            href={p.url}
            className="font-display text-lg text-slate transition-colors hover:text-gold"
          >
            {p.outlet}
          </a>
        ))}
      </div>
    </section>
  );
}
