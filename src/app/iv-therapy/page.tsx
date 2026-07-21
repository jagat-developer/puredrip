import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { ContactPanel } from "@/components/contact-panel";
import { ImagePair } from "@/components/image-pair";
import { Magnetic } from "@/components/magnetic";
import { ProcessRail } from "@/components/process-rail";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { company, images, ivBenefits, ivProcess, pageSeo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

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
              Hydration, energy, recovery, and glow. Personalized treatments featuring
              thoughtfully sourced ingredients, evidence-informed practices, and professional
              nursing care in the comfort of your own space.
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
                alt="Branded Pure Drip IV infusion bags on an IV stand"
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
          <div className="max-w-3xl">
            <h2 className="font-serif fluid-h2 text-ink">What Is IV Therapy?</h2>
            <div className="mt-8 space-y-6 text-base font-light leading-8 text-ink-soft sm:text-lg">
              <p>
                IV therapy is a personalized wellness treatment that delivers fluids, vitamins,
                and minerals directly into the bloodstream, bypassing the digestive system for
                efficient delivery and hydration support.
              </p>
              <p>
                When nutrients are taken orally, they must travel through the digestive tract
                before they can be absorbed and utilized by the body. Factors such as digestion,
                nutrient breakdown, and individual absorption can influence how much is available
                to the body. IV therapy provides a direct method of delivering hydration and
                nutrients into the bloodstream, allowing faster and better absorption.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Benefits"
            title="Why Clients Choose IV Therapy"
          />
        </Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
          {ivBenefits.map((benefit, idx) => (
            <Reveal
              key={benefit.title}
              delay={idx * 0.05}
              className={cn("lg:col-span-2", idx === 3 && "lg:col-start-2")}
            >
              <TiltCard className="h-full rounded-md" max={3}>
                <article className="flex h-full flex-col gap-4 rounded-md border border-rule bg-background p-8">
                  <h3 className="font-serif text-2xl text-ink">{benefit.title}</h3>
                  <p className="text-sm font-light leading-7 text-ink-soft">{benefit.body}</p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-base font-light leading-8 text-ink-soft sm:text-lg">
            At Pure Drip, every IV therapy session is personalized, professional, and delivered
            with care. We bring a seamless wellness experience to you, helping you feel restored,
            refreshed, and ready for what&apos;s ahead.
          </p>
        </Reveal>
      </section>

      <div id="process">
        <ProcessRail
          steps={ivProcess}
          eyebrow="How it works"
          title="Six simple steps from booking to feeling your best."
          italic="feeling your best."
          summary="Every Pure Drip session is designed with intention, guiding you through a seamless wellness experience from your first booking to your post-treatment follow-up."
        />
      </div>

      <ImagePair
        eyebrow="Custom care"
        title="Every drip is built for you."
        italic="you."
        body="Specific formulas are matched to your intake. If you have a target — recovery, glow, energy, immune support — tell us at booking and we'll bring the right combination. For specific drip availability and pricing, reach out and we'll share what's currently available."
        image={images.team}
        imageAlt="A clinical close-up of a Pure Drip nurse preparing an IV infusion"
        reverse
      />

      <ContactPanel />
    </>
  );
}
