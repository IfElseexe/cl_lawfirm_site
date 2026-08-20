import type { Metadata } from "next";
import { firm } from "@/content/firm";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 font-display text-4xl font-light md:text-5xl">
        Request a consultation
      </h1>
      <p className="mt-6 max-w-reading leading-relaxed text-slate">
        Tell us briefly what you are dealing with. We will respond within one
        business day and let you know whether we are the right firm for it.
      </p>

      <div className="mt-14 grid gap-16 md:grid-cols-[1.5fr_1fr]">
        <ContactForm />

        <aside className="space-y-8">
          <div>
            <p className="eyebrow">Office</p>
            <address className="mt-3 not-italic text-sm leading-relaxed text-slate">
              {firm.address.line1}
              <br />
              {firm.address.line2}
              <br />
              {firm.address.city}, {firm.address.region} {firm.address.postalCode}
              <br />
              {firm.address.country}
            </address>
          </div>
          <div>
            <p className="eyebrow">Direct</p>
            <p className="mt-3 font-mono text-sm">
              <a href={`tel:${firm.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-oxblood">
                {firm.phone}
              </a>
              <br />
              <a href={`mailto:${firm.email}`} className="hover:text-oxblood">
                {firm.email}
              </a>
            </p>
          </div>
          <div className="rule-top pt-6">
            <p className="text-xs leading-relaxed text-slate">{firm.disclaimer}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
