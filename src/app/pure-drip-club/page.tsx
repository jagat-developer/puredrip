import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { ContactPanel } from "@/components/contact-panel";
import { Magnetic } from "@/components/magnetic";
import { MembershipCard } from "@/components/membership-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { company, images, memberships, pageSeo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo["pure-drip-club"]);

export default function PureDripClubPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-surface-deep pt-[var(--header-height)] text-ink-on-dark">
        <div className="absolute inset-0">
          <Image
            src={images.club}
            alt="Pure Drip branded pillow and blanket in a comfortable treatment setting"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-deep via-surface-deep/80 to-surface-deep/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.32em] text-ink-on-dark/45">
              Pure Drip Club
            </p>
            <h1 className="mt-6 font-serif fluid-hero text-background">
              Your wellness, <em className="italic">elevated.</em>
            </h1>
            <p className="mt-7 max-w-2xl text-base font-light leading-8 text-ink-on-dark/75 sm:text-lg">
              An exclusive membership for those who prioritise energy, recovery, and long-term
              well-being. Curated monthly care — nurse-led, consistent, intentional.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <ButtonLink href={company.bookingUrl} variant="dark">
                  Join the Club
                </ButtonLink>
              </Magnetic>
              <a
                href={`tel:${company.phone}`}
                className="text-sm font-medium text-background/80 underline-offset-8 hover:underline"
              >
                Or call {company.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Memberships"
              title="Three tiers, one promise."
              italic="promise."
              summary="Every tier includes a monthly nurse-led session, member-only pricing on add-ons, and priority access — with progressively elevated care at each level."
            />
          </Reveal>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {memberships.map((tier, idx) => (
              <Reveal key={tier.slug} delay={idx * 0.06}>
                <MembershipCard tier={tier} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-xs uppercase tracking-[0.28em] text-ink-mute">
              Six-month minimum on all tiers · Pause anytime with two weeks&apos; notice
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-rule bg-surface-4 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow">The experience</p>
            <h2 className="mt-6 font-serif fluid-h2 text-ink">
              Membership is not <em className="italic">occasional care.</em>
            </h2>
            <p className="mt-8 text-base font-light leading-8 text-ink-soft sm:text-lg">
              It is structured wellness, designed around your lifestyle. Consistent. Elevated.
              Personalised.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow">Join the Club</p>
            <h2 className="mt-6 font-serif text-5xl text-ink sm:text-7xl">
              Proactive wellness. Priority access. <em className="italic">Elevated care.</em>
            </h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <ButtonLink href={company.bookingUrl} variant="primary">
                  Join the Pure Drip Club
                </ButtonLink>
              </Magnetic>
              <a href="#inquiry" className="text-sm font-medium text-ink underline-offset-8 hover:underline">
                Or send us a note
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
