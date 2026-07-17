import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/**
 * Brand mark: an "AS" monogram tile + wordmark. Drop a real logo image in
 * /public and swap the monogram tile if you have brand artwork.
 */
export function Logo({
  className,
  href = "/",
  showWordmark = true,
}: {
  className?: string;
  href?: string;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "group inline-flex items-center gap-2.5 font-semibold",
        className
      )}
    >
      <span
        className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-violet-400 to-violet-600 text-sm font-bold text-white shadow-sm ring-1 ring-violet-500/20 transition-transform group-hover:scale-105"
        aria-hidden="true"
      >
        AS
      </span>
      {showWordmark && (
        <span className="text-base tracking-tight">
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
