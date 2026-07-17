import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { skills } from "@/data/skills";
import { siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const highlights = [
  "5+ years shipping production web apps",
  "End-to-end: design, frontend, backend, deploy",
  "Performance- and accessibility-first mindset",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <SectionHeading
          eyebrow="// about-me"
          title="A developer who ships end-to-end"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bio */}
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m {siteConfig.name}, a {siteConfig.role.toLowerCase()} who
              loves turning ambitious ideas into polished, reliable products. My
              work sits at the intersection of clean user interfaces and robust
              systems — the kind of software that feels effortless to use and is
              a pleasure to maintain.
            </p>
            <p>
              I specialise in the modern TypeScript stack: Next.js and React on
              the front-end, Node.js and PostgreSQL on the back-end, and AI
              woven in where it genuinely improves the experience. I care deeply
              about performance, accessibility and developer experience, and I
              sweat the details that separate a good product from a great one.
            </p>
            <p>
              When I&apos;m not building, I&apos;m writing about what I learn,
              contributing to open source, and exploring how AI is reshaping the
              way we build for the web.
            </p>

            <ul className="space-y-3 pt-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Tech stack grid */}
          <div>
            <Reveal>
              <h3 className="mb-5 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                Tech Stack
              </h3>
            </Reveal>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {skills.map(({ name, category, icon: Icon }, i) => (
                <Reveal as="li" key={name} delay={i}>
                  <div className="group flex h-full items-center gap-3 rounded-xl border border-border bg-card p-3.5 transition-colors hover:border-accent/50">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold">
                        {name}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {category}
                      </span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-6">
              <div className="relative hidden aspect-[16/9] overflow-hidden rounded-xl border border-border lg:block">
                <Image
                  src="/projects/about-workspace.svg"
                  alt="Illustration of a developer workspace"
                  fill
                  sizes="(max-width: 1024px) 0px, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
