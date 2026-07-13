import { Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { company } from "@/lib/site-data";

export function ContactPanel() {
  return (
    <section
      id="inquiry"
      className="relative overflow-hidden border-y border-rule bg-surface-4"
    >
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="self-center">
          <p className="eyebrow">Inquire</p>
          <h2 className="mt-5 font-serif fluid-h2 text-ink">
            Reserve <em className="italic">your drip.</em>
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-8 text-ink-soft">
            Ready to begin your wellness journey? Tell us what you&apos;re looking for, from a
            single session to a private event or membership, and we&apos;ll be in touch within one
            business day with availability and next steps.
          </p>
          <p className="mt-4 max-w-xl text-sm font-light leading-7 text-ink-soft">
            Prefer the fastest path? Book directly on JaneApp, or use the form for custom timing,
            groups, and membership questions.
          </p>
          <div className="mt-10 grid gap-3 text-sm font-medium text-ink">
            <a
              href={company.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-fit items-center rounded-full bg-ink px-6 text-sm font-medium text-background transition hover:bg-accent"
            >
              Book on JaneApp
            </a>
            <a href={`tel:${company.phone}`} className="flex gap-3 transition hover:text-accent">
              <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex gap-3 break-all transition hover:text-accent"
            >
              <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
              {company.email}
            </a>
            <p className="flex gap-3 text-ink-soft">
              <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
              {company.serviceRegion}
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-rule bg-surface-1 p-6 shadow-sm sm:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
