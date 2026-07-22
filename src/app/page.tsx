import Image from "next/image";
import Link from "next/link";
import { AnimatedHeading } from "@/components/animated-heading";
import { ButtonLink } from "@/components/button-link";
import { ContactPanel } from "@/components/contact-panel";
import { ImagePair } from "@/components/image-pair";
import { Magnetic } from "@/components/magnetic";
import { MembershipCard } from "@/components/membership-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SparkleField } from "@/components/sparkle-field";
import { TiltCard } from "@/components/tilt-card";
import { Wordmark } from "@/components/wordmark";
import {
  company,
  heroBenefits,
  homePageSeo,
  images,
  memberships,
  pillars,
} from "@/lib/site-data";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { jsonLd } from "@/lib/utils";

export const metadata = buildMetadata(homePageSeo);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            localBusinessSchema(),
            breadcrumbSchema([{ name: "Home", path: "/" }]),
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-surface-deep pt-[var(--header-height)]">
        <div className="absolute inset-0">
          <Image
            src={images.heroLanding}
            alt="Two Pure Drip clients toasting with tea during a mobile IV therapy session"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40" />
        </div>
        <SparkleField count={18} seed={11} />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pb-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.32em] text-white/70">
              {company.tagline}
            </p>
          </Reveal>
          <Wordmark size="display" tone="light" className="mt-4 block" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <AnimatedHeading
              text="You deserve more than just getting by."
              highlight="just getting by."
              highlightClassName="italic text-white"
              className="font-serif fluid-hero text-white"
            />
            <div className="self-end">
              <Reveal delay={0.2}>
                <p className="max-w-md text-base font-light leading-8 text-white/80 sm:text-lg">
                  Nova Scotia&apos;s first mobile IV therapy clinic. Nurse-led hydration, vitamin
                  infusions, and wellness shots — delivered to your home, office, hotel, or event.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Magnetic>
                    <ButtonLink href={company.bookingUrl} variant="dark">
                      Book Now
                    </ButtonLink>
                  </Magnetic>
                  <Link
                    href="/iv-therapy"
                    className="text-sm font-medium text-white underline-offset-8 transition hover:underline"
                  >
                    Explore IV Therapy →
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="eyebrow">Welcome to Pure Drip</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif fluid-h2 text-ink">
              Luxury IV therapy, delivered wherever you are.
              <br />
              Body restored. Mind renewed.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="border-y border-rule bg-surface-2">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Feel the difference"
              title="Hydration with intention."
              italic="intention."
              summary="Feel better, faster. Our personalized IV therapy and vitamin shots deliver essential hydration and nutrients directly into your bloodstream to support energy, recovery, immunity, and overall wellness."
            />
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {heroBenefits.map((benefit, idx) => (
              <Reveal key={benefit.eyebrow} delay={idx * 0.05}>
                <TiltCard className="h-full" max={3}>
                  <article className="flex h-full flex-col gap-4 bg-background p-8">
                    <p className="eyebrow">{benefit.eyebrow}</p>
                    <h3 className="font-serif text-2xl text-ink">{benefit.title}</h3>
                    <p className="text-sm font-light leading-7 text-ink-soft">{benefit.body}</p>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Professional care — pillars as photo + text */}
      <section className="pt-20 sm:pt-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Professional care"
              title="Care you can trust, delivered to your door."
              italic="trust,"
            />
          </Reveal>
        </div>
      </section>
      {[
        {
          italic: "Anywhere",
          image: images.welcome,
          imageAlt: "A Pure Drip client relaxing during a mobile IV therapy session at home",
        },
        {
          italic: "Backed",
          image: images.shot,
          imageAlt: "A Pure Drip client holding a wellness shot formulated with high-quality ingredients",
        },
        {
          italic: "Wellness",
          image: images.recovery,
          imageAlt: "A Pure Drip client relaxing with a branded comfort pillow during a treatment",
        },
        {
          italic: "Care",
          image: images.team,
          imageAlt: "Close-up of a Pure Drip nurse administering IV therapy with sterile technique",
        },
      ].map((meta, idx) => (
        <ImagePair
          key={pillars[idx].title}
          title={pillars[idx].title}
          italic={meta.italic}
          body={pillars[idx].body}
          image={meta.image}
          imageAlt={meta.imageAlt}
          reverse={idx % 2 === 1}
        />
      ))}

      {/* Pure Drip Club teaser */}
      <section className="relative overflow-hidden bg-surface-deep text-ink-on-dark">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.32em] text-ink-on-dark/40">
                Pure Drip Club
              </p>
              <h2 className="mt-5 font-serif fluid-h2 text-background">
                Your wellness, <em className="italic">elevated.</em>
              </h2>
              <p className="mt-6 max-w-xl text-base font-light leading-8 text-ink-on-dark/75 sm:text-lg">
                An exclusive membership for those who prioritise energy, recovery, and long-term
                well-being. Curated monthly care — nurse-led, consistent, intentional.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex justify-start lg:justify-end">
                <ButtonLink href="/pure-drip-club" variant="dark">
                  Explore the Club
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {memberships.map((tier, idx) => (
              <Reveal key={tier.slug} delay={idx * 0.06}>
                <MembershipCard tier={tier} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reserve CTA */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0">
          <Image
            src={images.glow}
            alt="A Pure Drip client relaxing in a robe during a Glow infusion session"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 sm:py-36">
          <Reveal>
            <p className="eyebrow">Reserve your drip</p>
            <h2 className="mt-6 font-serif text-4xl text-ink sm:text-7xl">
              Care that meets you <em className="italic">where you are.</em>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base font-light leading-8 text-ink-soft sm:text-lg">
              Book directly on JaneApp, or send us an inquiry and we&apos;ll come back with
              availability and a tailored recommendation.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <ButtonLink href={company.bookingUrl} variant="primary">
                  Book on JaneApp
                </ButtonLink>
              </Magnetic>
              <Link
                href="#inquiry"
                className="text-sm font-medium text-ink underline-offset-8 transition hover:underline"
              >
                Or send us a note
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
