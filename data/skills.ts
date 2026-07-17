import {
  Layers,
  Atom,
  Braces,
  Server,
  Wind,
  Database,
  Boxes,
  Container,
  GitBranch,
  Cloud,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  name: string;
  category: string;
  icon: LucideIcon;
};

/**
 * The 10 technologies rendered in the About section stack grid.
 * Edit freely — order is preserved.
 */
export const skills: Skill[] = [
  { name: "Next.js", category: "Framework", icon: Layers },
  { name: "React", category: "Library", icon: Atom },
  { name: "TypeScript", category: "Language", icon: Braces },
  { name: "Node.js", category: "Runtime", icon: Server },
  { name: "Tailwind CSS", category: "Styling", icon: Wind },
  { name: "PostgreSQL", category: "Database", icon: Database },
  { name: "Prisma", category: "ORM", icon: Boxes },
  { name: "Docker", category: "DevOps", icon: Container },
  { name: "Git", category: "Version Control", icon: GitBranch },
  { name: "AWS", category: "Cloud", icon: Cloud },
];
