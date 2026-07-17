import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

/**
 * Required by @next/mdx. Applies Tailwind typography-like styling to the
 * elements produced by MDX blog posts. Shared by every `/content/*.mdx` file.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="mt-2 scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6"
        {...props}
      />
    ),
    ul: (props) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground" {...props} />
    ),
    ol: (props) => (
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground" {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        className="mt-6 border-l-2 border-accent pl-6 italic text-foreground"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-sm"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="my-6 overflow-x-auto rounded-lg border bg-muted p-4 text-sm"
        {...props}
      />
    ),
    a: ({ href = "", ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const isExternal = href.startsWith("http");
      return (
        <Link
          href={href}
          className="font-medium text-accent underline underline-offset-4 hover:opacity-80"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...props}
        />
      );
    },
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        sizes="100vw"
        className="my-6 h-auto w-full rounded-lg border"
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
