"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#looks", label: "The Looks" },
  { href: "#what", label: "What We Do" },
  { href: "#how", label: "How It Works" },
  { href: "#service-area", label: "Service Area" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-hairline bg-navy-950/85 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-navy-950 via-navy-950/70 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Skyclear home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/skyclear-logo-trans.webp"
              alt="Skyclear Exterior Services"
              className="h-12 w-auto sm:h-14"
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm font-medium text-cream/80 transition-colors hover:text-cream"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold text-cream transition-colors hover:text-amber-400 xl:flex"
            >
              <PhoneIcon className="h-4 w-4 text-amber-400" />
              {site.phone}
            </a>
            <a
              href="#contact"
              className="btn-trace relative hidden rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-[0_0_24px_rgba(232,176,75,0.45)] transition-all hover:shadow-[0_0_36px_rgba(232,176,75,0.7)] sm:inline-block"
            >
              <span className="relative z-10">Get a Free Quote</span>
            </a>
            <button
              ref={burgerRef}
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className="text-cream lg:hidden"
            >
              <BurgerIcon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        className={`fixed inset-0 z-[70] flex flex-col bg-navy-950/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/skyclear-logo-trans.webp" alt="Skyclear" className="h-12 w-auto" />
          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={() => {
              setOpen(false);
              burgerRef.current?.focus();
            }}
            className="text-cream"
          >
            <CloseIcon className="h-8 w-8" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-1 px-7">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-4 font-display text-2xl font-600 text-cream/90 transition-colors hover:text-amber-400"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="space-y-3 px-7 pb-10">
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full border border-hairline py-4 text-lg font-semibold text-amber-400"
          >
            <PhoneIcon className="h-5 w-5" />
            {site.phone}
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-trace block rounded-full bg-amber-500 py-4 text-center text-lg font-semibold text-navy-950 shadow-[0_0_24px_rgba(232,176,75,0.5)]"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.1 2.2z" />
    </svg>
  );
}

function BurgerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden>
      <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}
