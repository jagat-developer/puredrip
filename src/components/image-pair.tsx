import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type ImagePairProps = {
  eyebrow?: string;
  title: string;
  italic?: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children?: ReactNode;
};

export function ImagePair({
  eyebrow,
  title,
  italic,
  body,
  image,
  imageAlt,
  reverse = false,
  children,
}: ImagePairProps) {
  const renderTitle = () => {
    if (!italic || !title.includes(italic)) return title;
    const parts = title.split(italic);
    return (
      <>
        {parts[0]}
        <em className="font-serif italic text-ink">{italic}</em>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <div
        className={cn(
          "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
          reverse && "lg:[&>:first-child]:order-2",
        )}
      >
        <Reveal>
          <div className="max-w-xl">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className="mt-5 font-serif fluid-h2 text-ink">{renderTitle()}</h2>
            <p className="mt-6 text-base font-light leading-8 text-ink-soft sm:text-lg">
              {body}
            </p>
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-surface-2 sm:aspect-[5/6]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
