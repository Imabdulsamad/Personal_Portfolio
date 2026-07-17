export type Project = {
  slug: string;
  title: string;
  description: string;
  /** Path under /public. Replace with real screenshots when available. */
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};

/**
 * Portfolio projects rendered as a grid of cards on the home page.
 * Edit this array to add/remove projects — the UI adapts automatically.
 */
export const projects: Project[] = [
  {
    slug: "ai-content-studio",
    title: "AI Content Studio",
    description:
      "A SaaS platform that generates blog posts, marketing copy and images with AI. Streaming responses, credit-based billing and a polished editor.",
    image: "/projects/ai-content-studio.svg",
    tags: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com/ai-content-studio",
    githubUrl: "https://github.com/Imabdulsamad",
    featured: true,
  },
  {
    slug: "devconnect",
    title: "DevConnect",
    description:
      "A real-time social network for developers — profiles, threads, follows and live notifications powered by WebSockets.",
    image: "/projects/devconnect.svg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com/devconnect",
    githubUrl: "https://github.com/Imabdulsamad",
  },
  {
    slug: "clouddrive",
    title: "CloudDrive",
    description:
      "A Google-Drive-style file manager with drag-and-drop uploads, folder sharing and signed URLs backed by AWS S3.",
    image: "/projects/clouddrive.svg",
    tags: ["Next.js", "AWS S3", "Prisma", "Tailwind CSS"],
    liveUrl: "https://example.com/clouddrive",
    githubUrl: "https://github.com/Imabdulsamad",
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    description:
      "A Kanban-style project manager with type-safe APIs, optimistic updates and role-based team workspaces.",
    image: "/projects/taskflow.svg",
    tags: ["Next.js", "tRPC", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com/taskflow",
    githubUrl: "https://github.com/Imabdulsamad",
    featured: true,
  },
  {
    slug: "shopwave",
    title: "ShopWave",
    description:
      "A headless e-commerce storefront with a Sanity-powered CMS, Stripe checkout and blazing-fast static product pages.",
    image: "/projects/shopwave.svg",
    tags: ["Next.js", "Stripe", "Sanity", "Tailwind CSS"],
    liveUrl: "https://example.com/shopwave",
    githubUrl: "https://github.com/Imabdulsamad",
  },
  {
    slug: "cryptotrack",
    title: "CryptoTrack",
    description:
      "A real-time cryptocurrency dashboard with live prices, interactive charts and a personal watchlist synced across devices.",
    image: "/projects/cryptotrack.svg",
    tags: ["React", "TypeScript", "CoinGecko API", "Recharts"],
    liveUrl: "https://example.com/cryptotrack",
    githubUrl: "https://github.com/Imabdulsamad",
  },
];
