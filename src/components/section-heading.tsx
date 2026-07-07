import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  italic?: string;
  summary?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  italic,
  summary,
  align = "left",
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!italic) return title;
    const parts = title.split(italic);
    if (parts.length !== 2) return title;
    return (
      <>
        {parts[0]}
        <em className="font-serif italic text-ink">{italic}</em>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="mb-5 eyebrow">{eyebrow}</p> : null}
      <h2 className="font-serif fluid-h2 text-ink">{renderTitle()}</h2>
      {summary ? (
        <p className="mt-6 text-base font-light leading-8 text-ink-soft sm:text-lg">{summary}</p>
      ) : null}
    </div>
  );
}
