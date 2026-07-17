import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { BlogTeaser } from "@/components/sections/blog-teaser";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <BlogTeaser />
      <Contact />
    </>
  );
}
