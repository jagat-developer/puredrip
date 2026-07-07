import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { ContactPanel } from "@/components/contact-panel";
import { Magnetic } from "@/components/magnetic";
import { ProcessRail } from "@/components/process-rail";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { company, eventDripCategories, eventsProcess, images, pageSeo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo["private-events"]);

export default function PrivateEventsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-rule bg-background pt-[var(--header-height)]">
        <div className="absolute inset-0">
          <Image
            src={images.event}
            alt="A private celebration where Pure Drip is set up to serve guests"
            fill
            sizes="100vw"
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <p className="eyebrow">Private Events</p>
            <h1 className="mt-5 font-serif fluid-hero text-ink">
              Bring the clinic <em className="italic">to your celebration.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-base font-light leading-8 text-ink-soft sm:text-lg">
              Bridal parties. Corporate offsites. Milestone weekends. Retreat groups. We bring a
              nurse-led team, every supply, and a discreet set-up that fits the room you&apos;re
              already in.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <ButtonLink href="#inquiry" variant="primary">
                  Plan your event
                </ButtonLink>
              </Magnetic>
              <a href={`tel:${company.phone}`} className="text-sm font-medium text-ink underline-offset-8 hover:underline">
                Or call {company.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Menus by occasion"
            title="A menu, matched to the moment."
            italic="moment."
            summary="We build the menu around what you'd like everyone to leave feeling — energised, recovered, glowing, or simply well."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {eventDripCategories.map((category, idx) => (
            <Reveal key={category.title} delay={idx * 0.05}>
              <TiltCard className="h-full rounded-md" max={4}>
                <article className="flex h-full flex-col gap-4 rounded-md border border-rule bg-surface-1 p-7">
                  <h3 className="font-serif text-2xl text-ink">{category.title}</h3>
                  <p className="text-sm font-light leading-7 text-ink-soft">{category.body}</p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessRail
        steps={eventsProcess}
        eyebrow="How it works"
        title="From inquiry to event day."
        italic="event day."
        summary="A four-step rhythm that keeps everything calm — yours to host, ours to deliver."
      />

      <ContactPanel />
    </>
  );
}
