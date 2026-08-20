"use client";

import { useState } from "react";
import { practiceAreas } from "@/content/firm";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 w-full border border-rule bg-bone px-3 py-2.5 text-sm outline-none transition-colors focus:border-oxblood";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rule-top pt-8">
        <p className="eyebrow">Received</p>
        <p className="mt-4 max-w-reading font-display text-2xl leading-snug">
          Thank you. We have your enquiry and will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm">
          Full name
          <input name="name" required className={field} />
        </label>
        <label className="block text-sm">
          Email
          <input type="email" name="email" required className={field} />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm">
          Phone <span className="text-slate">(optional)</span>
          <input type="tel" name="phone" className={field} />
        </label>
        <label className="block text-sm">
          Type of matter
          <select name="matter" required defaultValue="" className={field}>
            <option value="" disabled>
              Select one
            </option>
            {practiceAreas.map((a) => (
              <option key={a.slug} value={a.title}>
                {a.title}
              </option>
            ))}
            <option value="Other">Other / not sure</option>
          </select>
        </label>
      </div>

      <label className="block text-sm">
        How can we help?
        <textarea name="message" required rows={6} className={field} />
        <span className="mt-2 block text-xs text-slate">
          Please keep this general. Do not send confidential details until we have
          confirmed an attorney&ndash;client relationship in writing.
        </span>
      </label>

      {/* Honeypot — bots fill this, humans never see it. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px]"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-ink px-6 py-3 text-sm text-bone transition-colors hover:bg-oxblood disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-oxblood">
          {error} You can also email us directly.
        </p>
      )}
    </form>
  );
}
