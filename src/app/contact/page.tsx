import type { Metadata } from "next";
import { firm } from "@/content/firm";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Request a consultation"
        intro="Tell us briefly what you are dealing with. We will respond within one business day and let you know whether we are the right firm for it."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <ContactForm />

          <aside className="space-y-8">
            <div>
              <p className="eyebrow">Office</p>
              <address className="mt-3 not-italic text-sm leading-relaxed text-slate">
                {firm.address.line1}
                <br />
                {firm.address.line2}
                <br />
                {firm.address.city}, {firm.address.region}{" "}
                {firm.address.postalCode}
                <br />
                {firm.address.country}
              </address>
            </div>
            <div>
              <p className="eyebrow">Direct</p>
              <p className="mt-3 font-mono text-sm">
                <a
                  href={`tel:${firm.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-gold"
                >
                  {firm.phone}
                </a>
                <br />
                <a href={`mailto:${firm.email}`} className="hover:text-gold">
                  {firm.email}
                </a>
              </p>
            </div>
            <div className="border-t border-rule pt-6">
              <p className="text-xs leading-relaxed text-slate">
                {firm.disclaimer}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
