import Link from "next/link";

import { navLinks, siteConfig } from "@/lib/site";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.role} building fast, modern web applications with
              Next.js, React and AI. Open to freelance work and full-time roles.
            </p>
            <SocialLinks />
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <h2 className="mb-3 text-sm font-semibold">Navigation</h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {year === 2026 ? 2026 : `2026–${year}`} {siteConfig.name}. All
            rights reserved.
          </p>
          <p>
            Built with{" "}
            <span className="font-medium text-foreground">Next.js</span> &amp;{" "}
            <span className="font-medium text-foreground">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
