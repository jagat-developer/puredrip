import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { ContactPanel } from "@/components/contact-panel";
import { Magnetic } from "@/components/magnetic";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { company, images, pageSeo, wellnessShots } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo["wellness-shot"]);

export default function WellnessShotPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-rule bg-background pt-[var(--header-height)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">Wellness Shots</p>
            <h1 className="mt-5 font-serif fluid-hero text-ink">
              Targeted Wellness <em className="italic">in Minutes</em>
            </h1>
            <p className="mt-6 max-w-xl text-base font-light leading-8 text-ink-soft sm:text-lg">
              Intramuscular wellness shots designed for the days you need focused nutritional
              support. From energy and immunity to recovery and glow, each shot is selected to
              complement your individual wellness goals.
            </p>
            <p className="mt-4 max-w-xl text-base font-light leading-8 text-ink-soft sm:text-lg">
              Add one to any IV session or book as a convenient stand-alone appointment.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <ButtonLink href={company.bookingUrl} variant="primary">
                  Book a shot
                </ButtonLink>
              </Magnetic>
              <ButtonLink href="#menu" variant="secondary" showArrow={false}>
                See the menu
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface-3">
              <Image
                src={images.shot}
                alt="Wellness shots prepared on a clean surface"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="menu" className="border-y border-rule bg-surface-4 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Menu"
              title="The shot menu."
              italic="menu."
              summary="Each shot is administered by registered and licensed nurses with care and precision. Pre-order options are available as scheduling allows. Contact us to confirm availability."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wellnessShots.map((shot, idx) => (
              <Reveal key={shot.slug} delay={idx * 0.04}>
                <TiltCard className="h-full rounded-md" max={4}>
                  <article className="flex h-full flex-col gap-5 rounded-md border border-rule bg-surface-1 p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-2xl text-ink">{shot.name}</h3>
                      <span className="font-serif text-xl text-accent">{shot.price}</span>
                    </div>
                    <p className="text-sm font-light leading-7 text-ink-soft">{shot.blurb}</p>
                    {shot.available === "preorder" ? (
                      <span className="inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-accent">
                        Pre-order
                      </span>
                    ) : null}
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
