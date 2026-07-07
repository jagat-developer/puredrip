import { ContactPanel } from "@/components/contact-panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs, pageSeo } from "@/lib/site-data";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { jsonLd } from "@/lib/utils";

export const metadata = buildMetadata(pageSeo.faqs);

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faqs)) }}
      />

      <section className="border-b border-rule bg-surface-2 pt-[var(--header-height)]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="eyebrow">FAQs</p>
            <h1 className="mt-5 font-serif fluid-hero text-ink">
              The questions <em className="italic">we hear most.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-base font-light leading-8 text-ink-soft sm:text-lg">
              Don&apos;t see your question here? Send us a note — we reply within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Pure Drip — answered"
            title="What to expect."
            italic="expect."
          />
        </Reveal>
        <dl className="mt-12 divide-y divide-rule border-y border-rule">
          {faqs.map((faq, idx) => (
            <Reveal key={faq.q} delay={idx * 0.03}>
              <div className="py-8">
                <dt className="font-serif text-xl text-ink">{faq.q}</dt>
                <dd className="mt-4 text-sm font-light leading-7 text-ink-soft">{faq.a}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      <ContactPanel />
    </>
  );
}
