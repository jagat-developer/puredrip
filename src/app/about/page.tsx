import Image from "next/image";
import { ContactPanel } from "@/components/contact-panel";
import { ImagePair } from "@/components/image-pair";
import { Reveal } from "@/components/reveal";
import { company, images, pageSeo, pillars } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.about);

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-rule bg-surface-2 pt-[var(--header-height)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">About Pure Drip</p>
            <h1 className="mt-5 font-serif fluid-hero text-ink">
              Mobile IV therapy, <em className="italic">delivered with care.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base font-light leading-8 text-ink-soft sm:text-lg">
              Pure Drip was founded by {company.ownerName} after watching too many people choose
              between modern wellness and the time it takes to access it. We bring the clinic to
              you so the choice doesn&apos;t have to be made.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface-3">
              <Image
                src={images.team}
                alt="Pure Drip founder and team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ImagePair
        eyebrow="Our team"
        title="A small team, trained for the work."
        italic="work."
        body="Pure Drip is led by a registered pharmacist, a registered nurse, and an LPN — the same professionals you&apos;d meet in a hospital infusion suite. Sterile technique, clinical screening, and pharmaceutical-grade formulations come standard on every visit."
        image={images.science}
        imageAlt="A clinical close-up reflecting Pure Drip's pharmacy-grade standards"
      />

      <section className="bg-surface-4 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow">What we stand for</p>
            <h2 className="mt-5 font-serif fluid-h2 text-ink">
              Four <em className="italic">principles</em> on every visit.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 0.05}>
                <div className="hairline pt-6">
                  <h3 className="font-serif text-xl text-ink">{pillar.title}</h3>
                  <p className="mt-4 text-sm font-light leading-7 text-ink-soft">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
