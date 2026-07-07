import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { ContactPanel } from "@/components/contact-panel";
import { ImagePair } from "@/components/image-pair";
import { Magnetic } from "@/components/magnetic";
import { ProcessRail } from "@/components/process-rail";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { company, heroBenefits, images, ivProcess, pageSeo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo["iv-therapy"]);

export default function IvTherapyPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-rule bg-surface-2 pt-[var(--header-height)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[calc(100svh-var(--header-height))] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-10">
          <Reveal>
            <p className="eyebrow">IV Therapy</p>
            <h1 className="mt-5 font-serif fluid-hero text-ink">
              Nurse-led IV therapy, <em className="italic">delivered to you.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base font-light leading-8 text-ink-soft sm:text-lg">
              Hydration, energy, recovery, and glow — every drip is built on clinical evidence,
              dosed by a registered pharmacist, and administered by a registered nurse in the space
              you choose.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <ButtonLink href={company.bookingUrl} variant="primary">
                  Book a session
                </ButtonLink>
              </Magnetic>
              <ButtonLink href="#process" variant="secondary" showArrow={false}>
                How it works
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface-3 lg:h-[32rem] lg:max-h-[62vh] lg:aspect-auto xl:h-[34rem]">
              <Image
                src={images.science}
                alt="Clinical setup for an in-home Pure Drip session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Benefits"
            title="What our drips deliver."
            italic="deliver."
            summary="Same intake, different formula. Every session is matched to your goals on the day."
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
      </section>

      <div id="process">
        <ProcessRail
          steps={ivProcess}
          eyebrow="How it works"
          title="Six simple steps from book to recharge."
          italic="recharge."
          summary="Every Pure Drip session follows the same calm, clinical rhythm — from your first booking to the follow-up the next day."
        />
      </div>

      <ImagePair
        eyebrow="Custom care"
        title="The drip menu is built for you."
        italic="you."
        body="Specific formulas are matched to your intake. If you have a target — recovery, glow, energy, immune support — tell us at booking and we'll bring the right combination. For specific drip availability and pricing, reach out and we'll share the current menu."
        image={images.team}
        imageAlt="A Pure Drip nurse preparing an in-home session"
        reverse
      />

      <ContactPanel />
    </>
  );
}
