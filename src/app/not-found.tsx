import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl font-light md:text-5xl">
        No such page
      </h1>
      <p className="mt-4 max-w-reading text-slate">
        The page you were looking for has moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-ink px-6 py-3 text-sm text-bone hover:bg-oxblood"
      >
        Back to the homepage
      </Link>
    </section>
  );
}
