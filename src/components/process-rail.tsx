import type { ProcessStep } from "@/lib/types";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

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

        <div className="mt-16 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
          {steps.map((step, idx) => {
            const remainder = steps.length % 3;
            const lastRowStart = steps.length - remainder;
            const isLastRowStart = remainder > 0 && idx === lastRowStart;
            return (
            <Reveal
              key={step.index}
              delay={idx * 0.05}
              className={cn(
                "lg:col-span-2",
                isLastRowStart && remainder === 1 && "lg:col-start-3",
                isLastRowStart && remainder === 2 && "lg:col-start-2",
              )}
            >
              <article className="flex h-full flex-col gap-5 rounded-md border border-rule bg-background p-8">
                <p className="font-serif text-2xl italic text-accent">{step.index}</p>
                <h3 className="font-serif text-xl text-ink">{step.title}</h3>
                <p className="text-sm font-light leading-7 text-ink-soft">{step.body}</p>
              </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
