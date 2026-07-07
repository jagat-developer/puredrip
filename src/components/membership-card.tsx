import { Check } from "lucide-react";
import type { MembershipTier } from "@/lib/types";
import { TiltCard } from "@/components/tilt-card";
import { cn } from "@/lib/utils";

type MembershipCardProps = {
  tier: MembershipTier;
};

export function MembershipCard({ tier }: MembershipCardProps) {
  const popular = tier.emphasis === "popular";
  const elite = tier.emphasis === "elite";

  return (
    <TiltCard
      className={cn(
        "relative h-full rounded-lg",
        popular ? "ring-1 ring-accent" : undefined,
      )}
      max={3}
    >
      <div
        className={cn(
          "flex h-full flex-col gap-6 rounded-lg border border-rule bg-surface-1 p-8",
          elite && "bg-surface-deep text-ink-on-dark",
        )}
      >
        {popular ? (
          <span className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-accent px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-white">
            Most Popular
          </span>
        ) : null}

        <div>
          <p
            className={cn(
              "text-xs uppercase tracking-[0.32em]",
              elite ? "text-ink-on-dark/50" : "text-ink-mute",
            )}
          >
            {tier.emphasis === "essential" ? "Essential" : tier.emphasis === "popular" ? "Signature" : "Elite"}
          </p>
          <h3 className={cn("mt-4 font-serif text-3xl", elite ? "text-white" : "text-ink")}>
            {tier.name}
          </h3>
          <p
            className={cn(
              "mt-3 text-sm font-light leading-6",
              elite ? "text-ink-on-dark/70" : "text-ink-soft",
            )}
          >
            {tier.tagline}
          </p>
        </div>

        <div className="flex items-baseline gap-2">
          <span className={cn("font-serif text-5xl", elite ? "text-white" : "text-ink")}>
            {tier.price}
          </span>
          <span
            className={cn(
              "text-sm font-light",
              elite ? "text-ink-on-dark/60" : "text-ink-mute",
            )}
          >
            {tier.cadence}
          </span>
        </div>

        <ul className="grid gap-3 text-sm font-light">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check
                className={cn(
                  "mt-0.5 h-4 w-4 shrink-0",
                  elite ? "text-accent" : "text-accent",
                )}
                aria-hidden="true"
              />
              <span className={elite ? "text-ink-on-dark/85" : "text-ink-soft"}>{feature}</span>
            </li>
          ))}
        </ul>

        <p
          className={cn(
            "mt-auto pt-6 text-xs italic",
            elite ? "text-ink-on-dark/55" : "text-ink-mute",
          )}
        >
          {tier.audience}
        </p>

        <a
          href={tier.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex h-12 items-center justify-center rounded-full text-sm font-medium transition",
            elite
              ? "bg-background text-ink hover:bg-accent hover:text-white"
              : popular
                ? "bg-accent text-white hover:bg-accent-hover"
                : "bg-ink text-background hover:bg-accent hover:text-white",
          )}
        >
          {tier.cta.label}
        </a>
      </div>
    </TiltCard>
  );
}
