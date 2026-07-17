import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

/**
 * Portfolio grid. Server Component — reads project data at build time.
 */
export function Projects() {
  return (
    <section id="portfolio" className="scroll-mt-16 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <SectionHeading
          eyebrow="// portfolio"
          title="Featured projects"
          description="A selection of things I've designed and built. Each one solved a real problem end-to-end — from the first wireframe to production."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.slug} delay={i % 3}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
