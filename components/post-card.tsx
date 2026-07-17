import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

import type { Post } from "@/data/posts";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Blog post preview card. Server Component — used on the home teaser and the
 * /blog index.
 */
export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="group h-full transition-all hover:border-accent/50 hover:shadow-md">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {post.readingTime}
          </span>
        </div>
        <CardTitle className="mt-3 text-lg leading-snug transition-colors group-hover:text-accent">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <CardDescription className="mt-2 line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        <ul className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="accent" className="font-normal">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all hover:gap-2.5"
        >
          Read More
          <ArrowRight className="size-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
