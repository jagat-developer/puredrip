import Image from "next/image";
import { ContactPanel } from "@/components/contact-panel";
import { ImagePair } from "@/components/image-pair";
import { Reveal } from "@/components/reveal";
import { aboutPrinciples, images, pageSeo } from "@/lib/site-data";
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
              Pure Drip was founded by Daman Kaur, LPN, after experiencing firsthand how long
              hours and the pressures of modern life can make it difficult to stay properly
              nourished, hydrated, and supported.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface-3">
              <Image
                src={images.founder}
                alt="Daman Kaur, LPN, founder of Pure Drip"
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
        eyebrow="Our Team"
        title="Experienced professionals, dedicated to your care."
        italic="care."
        body="Pure Drip is supported by a team of healthcare professionals, including registered nurses and licensed practical nurses, with clinical oversight from a registered pharmacist. Our team brings experience from healthcare settings and follows thoughtful screening, safe practices, and professional standards to deliver a comfortable, personalized IV therapy experience. Every visit is guided by patient safety, clinical care, and attention to detail from start to finish."
        image={images.science}
        imageAlt="A clinical close-up reflecting Pure Drip's pharmacy-grade standards"
      />

      <section className="bg-surface-4 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow">What we stand for</p>
            <h2 className="mt-5 font-serif fluid-h2 text-ink">
              Four principles that guide every Pure Drip experience.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPrinciples.map((pillar, idx) => (
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
