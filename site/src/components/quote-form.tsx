"use client";

import { useState } from "react";

// The lead engine — submits to Netlify Forms. The form below carries the
// `data-netlify` attributes so Netlify detects it at deploy; leads then land in
// Netlify → Forms (wire email / Slack / SMS from Forms → Notifications). No
// webhook, no secrets, built-in spam filtering. On localhost it just simulates
// success so the UX stays testable.
type Status = "idle" | "sending" | "ok" | "error";

const CONTACT_METHODS = ["Text", "Call", "Email"] as const;
type ContactMethod = (typeof CONTACT_METHODS)[number];

const encode = (data: FormData) =>
  new URLSearchParams(data as unknown as Record<string, string>).toString();

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [prefer, setPrefer] = useState<ContactMethod>("Text");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — real users never fill this. Show success, never send the lead.
    if (data.get("company")) {
      setStatus("ok");
      form.reset();
      return;
    }

    if (!data.get("name") || !data.get("phone") || !data.get("email")) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // Netlify Forms only exists on the deployed site — locally, simulate success.
    const host = typeof window !== "undefined" ? window.location.hostname : "";
    if (host === "localhost" || host === "127.0.0.1") {
      await new Promise((r) => setTimeout(r, 700));
      setStatus("ok");
      form.reset();
      setPrefer("Text");
      return;
    }

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (!res.ok) throw new Error(`Netlify responded ${res.status}`);
      setStatus("ok");
      form.reset();
      setPrefer("Text");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-navy-950">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-700 text-white">
          Thanks — we&apos;ll be in touch
        </h3>
        <p className="mt-2 text-white/75">
          We&apos;ll get back to you within 24 hours. Need it sooner? Call{" "}
          <a href="tel:+12817717158" className="font-semibold text-sky-300">
            (281) 771-7158
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      name="quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="company"
      onSubmit={onSubmit}
      className="space-y-4"
    >
      {/* Netlify form detection + fields it can't infer from the visible inputs */}
      <input type="hidden" name="form-name" value="quote" />
      <input type="hidden" name="preferredContact" value={prefer} readOnly />
      <input type="hidden" name="source" value="skyclearx.com" />
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Name" required placeholder="Your name" />
        <Field name="phone" label="Phone" type="tel" required placeholder="(281) 000-0000" />
      </div>
      <Field name="email" label="Email" type="email" required placeholder="you@email.com" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="service">I&apos;m interested in</Label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:shadow-[0_0_0_3px_rgba(95,180,232,0.18)]"
          >
            <option value="" disabled className="text-navy-950">
              Choose one…
            </option>
            {[
              "Permanent lighting — new install",
              "Holiday lighting",
              "Commercial property",
              "Not sure yet",
            ].map((s) => (
              <option key={s} value={s} className="text-navy-950">
                {s}
              </option>
            ))}
          </select>
        </div>
        <Field name="location" label="Address or City" placeholder="Cypress, TX" />
      </div>

      <div>
        <span id="prefer-label" className="mb-1.5 block text-sm font-medium text-white/80">
          Best way to reach you
        </span>
        <div
          role="radiogroup"
          aria-labelledby="prefer-label"
          className="grid grid-cols-3 gap-2 rounded-xl border border-white/15 bg-white/[0.04] p-1"
        >
          {CONTACT_METHODS.map((m, i) => {
            const on = prefer === m;
            const emoji = m === "Text" ? "💬" : m === "Call" ? "📞" : "✉️";
            return (
              <button
                key={m}
                type="button"
                id={`prefer-${m.toLowerCase()}`}
                role="radio"
                aria-checked={on}
                tabIndex={on ? 0 : -1}
                onClick={() => setPrefer(m)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                    e.preventDefault();
                    const next = CONTACT_METHODS[(i + 1) % CONTACT_METHODS.length];
                    setPrefer(next);
                    document.getElementById(`prefer-${next.toLowerCase()}`)?.focus();
                  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                    e.preventDefault();
                    const prev =
                      CONTACT_METHODS[(i - 1 + CONTACT_METHODS.length) % CONTACT_METHODS.length];
                    setPrefer(prev);
                    document.getElementById(`prefer-${prev.toLowerCase()}`)?.focus();
                  }
                }}
                className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  on
                    ? "bg-sky-500 text-navy-950 shadow-[0_0_18px_rgba(95,180,232,0.45)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <span aria-hidden>{emoji}</span>
                {m}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us a bit about what you need…"
          className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-sky-400 focus:shadow-[0_0_0_3px_rgba(95,180,232,0.18)]"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-amber-400">
          Please fill in your name, phone, and email — or just call us at (281) 771-7158.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-trace w-full rounded-full bg-amber-500 px-7 py-4 text-base font-semibold text-navy-950 shadow-[0_0_30px_rgba(232,176,75,0.5)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_44px_rgba(232,176,75,0.75)] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Get My Free Quote"}
      </button>
      <p className="text-center text-xs leading-relaxed text-white/45">
        By submitting, you agree to receive calls &amp; texts from Skyclear about your
        request. Msg &amp; data rates may apply; reply STOP to opt out. We respond within
        24 hours — no spam, ever.
      </p>
    </form>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-white/80">
      {children}
    </label>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {required && <span className="text-sky-400"> *</span>}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-sky-400 focus:shadow-[0_0_0_3px_rgba(95,180,232,0.18)]"
      />
    </div>
  );
}
