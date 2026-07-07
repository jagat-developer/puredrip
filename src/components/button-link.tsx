import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost" | "dark";
  showArrow?: boolean;
};

export function ButtonLink({
  className,
  variant = "primary",
  showArrow = true,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium tracking-wide transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variant === "primary" && "bg-ink text-background hover:bg-accent hover:text-white",
        variant === "secondary" &&
          "border border-ink/15 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-background",
        variant === "ghost" && "text-ink/80 hover:text-accent",
        variant === "dark" && "bg-accent text-white hover:bg-accent-hover",
        className,
      )}
      {...props}
    >
      {children}
      {showArrow ? (
        <ArrowUpRight
          className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      ) : null}
    </Link>
  );
}
