import { socialLinks } from "@/data/socials";
import { cn } from "@/lib/utils";

/**
 * Renders every social profile as an icon link. Used in the navbar and footer.
 * All links open in a new tab.
 */
export function SocialLinks({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none"
          >
            <Icon className={cn("size-[1.15rem]", iconClassName)} />
          </a>
        </li>
      ))}
    </ul>
  );
}
