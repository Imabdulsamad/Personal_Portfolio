export type Post = {
  slug: string;
  title: string;
  /** ISO date string (YYYY-MM-DD). */
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
  author: string;
};

/**
 * Blog post metadata. The article body for each entry lives in
 * `/content/<slug>.mdx` and is rendered by `app/blog/[slug]/page.tsx`.
 * Keep `slug` in sync with the MDX filename.
 */
export const posts: Post[] = [
  {
    slug: "building-modern-web-apps-with-nextjs-16",
    title: "Building Modern Web Apps with Next.js 16",
    date: "2026-06-28",
    excerpt:
      "A tour of what makes Next.js 16 my default choice in 2026 — the App Router, React Server Components, partial pre-rendering and Turbopack.",
    readingTime: "6 min read",
    tags: ["Next.js", "React", "Architecture"],
    author: "Abdul Samad",
  },
  {
    slug: "server-actions-vs-api-routes",
    title: "Server Actions vs API Routes: When to Use What",
    date: "2026-05-14",
    excerpt:
      "Server Actions collapse a whole layer of boilerplate, but API routes still earn their place. Here's the mental model I use to choose.",
    readingTime: "5 min read",
    tags: ["Next.js", "Server Actions", "Backend"],
    author: "Abdul Samad",
  },
  {
    slug: "integrating-ai-into-your-nextjs-app",
    title: "Integrating AI Into Your Next.js App",
    date: "2026-04-02",
    excerpt:
      "A practical walkthrough of adding streaming AI features to a Next.js application — from the Server Action to a smooth streaming UI.",
    readingTime: "8 min read",
    tags: ["AI", "Next.js", "Tutorial"],
    author: "Abdul Samad",
  },
];

/** All posts, newest first. */
export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Look up a single post by slug. */
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
