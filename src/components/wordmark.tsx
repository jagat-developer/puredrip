import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "display";
  tone?: "ink" | "light";
};

const sizeMap: Record<NonNullable<WordmarkProps["size"]>, string> = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-6xl sm:text-7xl",
  display: "fluid-display",
};

export function Wordmark({ className, size = "md", tone = "ink" }: WordmarkProps) {
  return (
    <span
      aria-label="Pure Drip"
      className={cn(
        "font-serif leading-none tracking-tight",
        tone === "ink" ? "text-ink" : "text-background",
        sizeMap[size],
        className,
      )}
    >
      Pure<span className="italic">Drip</span>
    </span>
  );
}
