import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="No such page"
        intro="The page you were looking for has moved or never existed."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/" className="btn-dark">
          Back to the homepage
        </Link>
      </section>
    </>
  );
}
