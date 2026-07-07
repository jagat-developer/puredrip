import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navItems } from "@/lib/site-data";
import { Wordmark } from "@/components/wordmark";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-surface-deep text-ink-on-dark">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Wordmark size="lg" tone="light" />
            <p className="mt-6 max-w-sm text-sm font-light leading-7 text-ink-on-dark/70">
              {company.bio}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.32em] text-ink-on-dark/40">
              {company.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.32em] text-ink-on-dark/40">Explore</h3>
            <ul className="mt-6 grid gap-3 text-sm font-light text-ink-on-dark/80">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.32em] text-ink-on-dark/40">Contact</h3>
            <ul className="mt-6 grid gap-4 text-sm font-light text-ink-on-dark/80">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`tel:${company.phone}`} className="hover:text-white">
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="break-all hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{company.serviceRegion}</span>
              </li>
            </ul>
            <div className="mt-8">
              <a
                href={company.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center rounded-full bg-background px-5 text-sm font-medium text-ink transition hover:bg-accent hover:text-white"
              >
                Book Now
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.32em] text-ink-on-dark/40">Connect</h3>
            <ul className="mt-6 grid gap-3 text-sm font-light text-ink-on-dark/80">
              {company.instagramUrl ? (
                <li>
                  <a
                    href={company.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    Instagram · {company.instagramHandle}
                  </a>
                </li>
              ) : null}
              {company.facebookUrl ? (
                <li>
                  <a
                    href={company.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    Facebook · {company.facebookHandle}
                  </a>
                </li>
              ) : null}
            </ul>
            <div className="mt-10 rounded-lg border border-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.32em] text-ink-on-dark/40">
                Partner clinic
              </p>
              <p className="mt-3 text-sm font-light leading-6 text-ink-on-dark/80">
                {company.partnerClinic.name}
                <br />
                {company.partnerClinic.address}
              </p>
              <p className="mt-3 text-xs text-ink-on-dark/50">{company.partnerClinic.cadence}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-ink-on-dark/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>Built with care in Nova Scotia.</p>
        </div>
      </div>
    </footer>
  );
}
