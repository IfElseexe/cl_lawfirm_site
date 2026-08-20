"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { firm, nav } from "@/content/firm";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socials = Object.entries(firm.social).filter(([, url]) => url);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* ── Utility bar: phone, address, social ─────────────── */}
      <div className="hidden border-b border-white/15 bg-charcoal/60 backdrop-blur-sm lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-xs text-white/80">
          <div className="flex items-center gap-8">
            <a
              href={`tel:${firm.phone.replace(/[^0-9+]/g, "")}`}
              className="font-mono transition-colors hover:text-gold"
            >
              {firm.phone}
            </a>
            <span className="text-white/50">
              {firm.address.line1}, {firm.address.city} {firm.address.postalCode}
            </span>
          </div>
          {socials.length > 0 && (
            <div className="flex items-center gap-5">
              {socials.map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  className="capitalize transition-colors hover:text-gold"
                >
                  {platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Main nav ─────────────────────────────────────────── */}
      <div
        className={`transition-colors duration-300 ${
          scrolled ? "fixed inset-x-0 top-0 bg-charcoal shadow-lg" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex flex-col leading-none text-white">
            <span className="font-display text-2xl tracking-tight">
              {firm.shortName}
            </span>
            <span className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-gold">
              Attorneys at Law
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/85 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-gold !px-6 !py-2.5">
              Free consultation
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="font-mono text-sm text-white lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ────────────────────────────────────── */}
      {open && (
        <nav className="bg-charcoal px-6 pb-6 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-4 text-white/85"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-gold mt-6 w-full"
          >
            Free consultation
          </Link>
          <a
            href={`tel:${firm.phone.replace(/[^0-9+]/g, "")}`}
            className="mt-4 block text-center font-mono text-sm text-white/70"
          >
            {firm.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
