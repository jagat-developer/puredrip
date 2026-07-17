import Image from "next/image";
import { MapPin } from "lucide-react";
import { ContactPanel } from "@/components/contact-panel";
import { Reveal } from "@/components/reveal";
import { company, images, pageSeo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.location);

export default function LocationPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-rule bg-background pt-[var(--header-height)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">Location & Service Area</p>
            <h1 className="mt-5 font-serif fluid-hero text-ink">
              Serving Halifax <em className="italic">& beyond.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base font-light leading-8 text-ink-soft sm:text-lg">
              Pure Drip comes to you across Halifax Regional Municipality and the surrounding area.
              For clients who prefer an in-clinic visit, we partner with FLUID Multidisciplinary
              Health Clinic for in-person sessions on a regular cadence.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface-3">
              <Image
                src={images.location}
                alt="Pure Drip brochures with booking details"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-rule bg-surface-4 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="hairline pt-6">
              <p className="eyebrow">Mobile</p>
              <h2 className="mt-5 font-serif fluid-h3 text-ink">
                We come to you, across HRM.
              </h2>
              <p className="mt-5 text-base font-light leading-8 text-ink-soft">
                Homes, offices, hotels, event spaces. Mobile bookings cover Halifax, Dartmouth,
                Bedford, Sackville, Cole Harbour, and surrounding areas. Outside HRM? Reach out —
                we travel for groups and special bookings.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="hairline pt-6">
              <p className="eyebrow">In-clinic</p>
              <h2 className="mt-5 font-serif fluid-h3 text-ink">
                {company.partnerClinic.name}
              </h2>
              <div className="mt-5 flex items-start gap-3 text-base font-light leading-8 text-ink-soft">
                <MapPin className="mt-1.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{company.partnerClinic.address}</span>
              </div>
              <p className="mt-5 text-sm uppercase tracking-[0.28em] text-ink-mute">
                {company.partnerClinic.cadence}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
