import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getAllPosts } from "@/data/posts";
import { SectionHeading } from "@/components/section-heading";
import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

/**
 * "Latest writing" teaser on the home page — shows the 3 most recent posts.
 */
export function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="scroll-mt-16 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="// blog"
            title="Latest writing"
            description="Notes on Next.js, full-stack development and building with AI."
          />
          <Reveal>
            <Button asChild variant="outline">
              <Link href="/blog">
                View all posts
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal as="article" key={post.slug} delay={i}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
