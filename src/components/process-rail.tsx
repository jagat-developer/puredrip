import type { ProcessStep } from "@/lib/types";
import { Reveal } from "@/components/reveal";

type ProcessRailProps = {
  steps: ProcessStep[];
  eyebrow?: string;
  title: string;
  italic?: string;
  summary?: string;
};

export function ProcessRail({ steps, eyebrow, title, italic, summary }: ProcessRailProps) {
  const renderTitle = () => {
    if (!italic || !title.includes(italic)) return title;
    const parts = title.split(italic);
    return (
      <>
        {parts[0]}
        <em className="font-serif italic">{italic}</em>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="border-y border-rule bg-surface-4">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="max-w-3xl">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className="mt-5 font-serif fluid-h2 text-ink">{renderTitle()}</h2>
            {summary ? (
              <p className="mt-6 text-base font-light leading-8 text-ink-soft sm:text-lg">
                {summary}
              </p>
            ) : null}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <Reveal key={step.index} delay={idx * 0.05}>
              <article className="flex h-full flex-col gap-5 bg-background p-8">
                <p className="font-serif text-2xl italic text-accent">{step.index}</p>
                <h3 className="font-serif text-xl text-ink">{step.title}</h3>
                <p className="text-sm font-light leading-7 text-ink-soft">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
