"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type { LeadSubmission } from "@/lib/types";
import { INTENT_OPTIONS } from "@/lib/lead";

type Stage = "form" | "submitting" | "success" | "error";

const initialForm: LeadSubmission = {
  name: "",
  email: "",
  phone: "",
  intent: "iv-therapy",
  message: "",
  preferredDate: "",
  caslConsent: true,
  website: "",
};

export function QuoteForm() {
  const [stage, setStage] = useState<Stage>("form");
  const [form, setForm] = useState<LeadSubmission>(initialForm);
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState("");
  const [mailtoFallback, setMailtoFallback] = useState<string | null>(null);

  function update<K extends keyof LeadSubmission>(key: K, value: LeadSubmission[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) {
      setMessage("Please confirm consent so we can reply.");
      return;
    }
    setStage("submitting");
    setMessage("");
    setMailtoFallback(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, caslConsent: true }),
      });
      const result = (await response.json()) as { ok?: boolean; mailto?: string; message?: string };

      if (!response.ok && response.status !== 202) {
        throw new Error(result.message || "Unable to submit request.");
      }

      setStage("success");
      setMessage(result.message || "Inquiry received. We'll be in touch shortly.");
      if (result.mailto) {
        setMailtoFallback(result.mailto);
      }
    } catch (error) {
      setStage("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please call us directly.");
    }
  }

  if (stage === "success") {
    return (
      <div className="grid gap-4 rounded-md border border-accent/30 bg-surface-1 p-7 text-center">
        <p className="eyebrow">Thank you</p>
        <h3 className="font-serif text-3xl text-ink">We&apos;ll be in touch.</h3>
        <p className="text-sm font-light text-ink-soft" aria-live="polite">
          {message}
        </p>
        {mailtoFallback ? (
          <a
            href={mailtoFallback}
            className="mx-auto inline-flex h-11 items-center gap-2 rounded-full border border-accent px-5 text-sm font-medium text-accent transition hover:bg-accent hover:text-white"
          >
            Open prefilled email <Send className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    );
  }

  const submitting = stage === "submitting";

  return (
    <form onSubmit={submit} className="grid gap-3" aria-label="Pure Drip inquiry">
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website ?? ""}
            onChange={(event) => update("website", event.target.value)}
          />
        </label>
      </div>

      <fieldset className="grid gap-2">
        <legend className="text-sm font-medium text-ink">What can we help with?</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {INTENT_OPTIONS.map((option) => {
            const checked = form.intent === option.id;
            return (
              <label
                key={option.id}
                className={`flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2 text-sm font-medium transition ${
                  checked
                    ? "border-accent bg-accent/5 text-ink"
                    : "border-ink/10 bg-white text-ink-soft hover:border-accent/50"
                }`}
              >
                <input
                  type="radio"
                  name="intent"
                  className="h-4 w-4 accent-accent"
                  checked={checked}
                  onChange={() => update("intent", option.id)}
                />
                <span>{option.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Name">
          <input required value={form.name} onChange={(event) => update("name", event.target.value)} />
        </Field>
        <Field label="Phone">
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Email">
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>

        <Field label="Preferred date (optional)">
          <input
            type="date"
            value={form.preferredDate ?? ""}
            onChange={(event) => update("preferredDate", event.target.value)}
          />
        </Field>
      </div>

      <Field label="Anything else worth noting?">
        <textarea
          rows={2}
          value={form.message ?? ""}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Group size, location, specific goals…"
        />
      </Field>

      <label className="flex items-start gap-3 text-xs font-light leading-5 text-ink-soft">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 h-4 w-4 accent-accent"
        />
        <span>
          I consent to <strong className="font-medium text-ink">Pure Drip</strong> contacting me about my
          inquiry by phone or email. I can withdraw consent at any time.
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting || !consent}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-background transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {submitting ? "Sending…" : "Send inquiry"}
      </button>

      {message ? (
        <p
          aria-live="polite"
          className={
            stage === "error" ? "text-sm font-medium text-red-600" : "text-sm font-medium text-accent"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactElement }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      <span className="form-control">{children}</span>
    </label>
  );
}
