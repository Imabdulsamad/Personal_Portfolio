import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";

import { getAllPosts, getPostBySlug } from "@/data/posts";
import { siteConfig } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Pre-render every known post at build time; unknown slugs → 404.
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // MDX body lives in /content/<slug>.mdx and is compiled by @next/mdx.
  const { default: Content } = await import(`../../../content/${slug}.mdx`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    keywords: post.tags.join(", "),
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Button asChild variant="ghost" size="sm" className="-ml-2 mb-8">
        <Link href="/blog">
          <ArrowLeft className="size-4" />
          Back to blog
        </Link>
      </Button>

      <header className="mb-10">
        <ul className="mb-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="accent" className="font-normal">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4" />
            {post.readingTime}
          </span>
          <span>by {post.author}</span>
        </div>
      </header>

      <div className="mdx">
        <Content />
      </div>

      <hr className="my-12 border-border" />

      <div className="flex items-center justify-between">
        <Button asChild variant="outline">
          <Link href="/blog">
            <ArrowLeft className="size-4" />
            All posts
          </Link>
        </Button>
        <Button
          asChild
          className="bg-violet-500 text-white hover:bg-violet-600"
        >
          <Link href="/#contact">Get in touch</Link>
        </Button>
      </div>
    </article>
  );
}
