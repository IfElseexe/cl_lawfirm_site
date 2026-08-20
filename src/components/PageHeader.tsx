/**
 * Dark banner for interior pages. The site header is transparent and
 * overlays the homepage hero, so every other page needs a dark band
 * behind it to keep the navigation legible.
 */
export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="photo-slot pb-20 pt-44">
      <div className="absolute inset-0 bg-charcoal/85" />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-light leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <div className="mt-6 h-px w-16 bg-gold" />
        {intro && (
          <p className="mt-6 max-w-reading leading-relaxed text-white/75">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
