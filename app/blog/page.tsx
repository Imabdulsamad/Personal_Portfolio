import type { Metadata } from "next";

import { getAllPosts } from "@/data/posts";
import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on Next.js, full-stack development, TypeScript and building modern web apps with AI — by Abdul Samad.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Abdul Samad",
    description:
      "Articles on Next.js, full-stack development and building with AI.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="mb-2 font-mono text-sm font-medium text-accent">// blog</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Writing
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Thoughts on Next.js, full-stack development, TypeScript and building
          modern web applications with AI.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal as="article" key={post.slug} delay={i % 3}>
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
