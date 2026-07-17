/**
 * Central site configuration. Edit these values to rebrand the site.
 * Consumed by metadata, navbar, footer, sitemap and robots.
 */
export const siteConfig = {
  name: "Abdul Samad",
  title: "Abdul Samad — Full Stack Developer",
  description:
    "Abdul Samad is a full-stack developer building fast, modern web applications with Next.js, React and AI.",
  // Falls back to production URL if the env var is not set.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdulsamad.dev",
  author: "Abdul Samad",
  role: "Full Stack Developer",
  email: "hello@abdulsamad.dev",
  keywords: [
    "Abdul Samad",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "AI Web Apps",
    "Portfolio",
  ],
} as const;

/**
 * Primary navigation links. Anchor links resolve on the home page;
 * `/blog` is a real route.
 */
export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
] as const;
