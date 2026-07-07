import Link from "next/link";
import { company } from "@/lib/site-data";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-5 pt-[var(--header-height)] text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-serif text-5xl text-ink sm:text-7xl">
        This page is <em className="italic">off the map.</em>
      </h1>
      <p className="mt-5 text-base font-light text-ink-soft">
        Let&apos;s get you back to something useful.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-background hover:bg-accent"
        >
          Back to home
        </Link>
        <a
          href={company.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-full border border-ink/15 px-6 text-sm font-medium text-ink hover:border-ink hover:bg-ink hover:text-background"
        >
          Book on JaneApp
        </a>
      </div>
    </section>
  );
}
