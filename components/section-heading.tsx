import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

/**
 * Consistent section header — small purple eyebrow + large title + optional
 * description. Used across About, Portfolio, Blog and Contact.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="mb-2 flex items-center gap-2 text-sm font-medium text-accent">
        {align === "center" && (
          <span className="h-px w-6 bg-accent/50" aria-hidden />
        )}
        <span className="font-mono">{eyebrow}</span>
        {align === "center" && (
          <span className="h-px w-6 bg-accent/50" aria-hidden />
        )}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
}
