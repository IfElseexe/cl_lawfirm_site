"use client";

import Link from "next/link";
import { useState } from "react";
import { firm, nav } from "@/content/firm";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-xl tracking-tight">{firm.name}</span>
          <span className="eyebrow mt-1.5 hidden sm:block">
            Est. {firm.founded}
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-transparent pb-0.5 text-sm text-slate transition-colors hover:border-oxblood hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-ink px-4 py-2 text-sm text-bone transition-colors hover:bg-oxblood"
          >
            Request a consultation
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="font-mono text-sm md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-rule px-6 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-rule/60 py-3 text-sm"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block bg-ink px-4 py-3 text-center text-sm text-bone"
          >
            Request a consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
