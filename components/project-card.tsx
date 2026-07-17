import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

/**
 * A single portfolio project. Server Component — purely presentational.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group h-full gap-0 overflow-hidden py-0 transition-all hover:border-accent/50 hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.featured && (
          <Badge
            variant="accent"
            className="absolute left-3 top-3 backdrop-blur"
          >
            Featured
          </Badge>
        )}
      </div>

      <CardHeader className="pt-5">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="mt-1.5 line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pt-4">
        <ul className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="secondary" className="font-normal">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="gap-2 pt-5 pb-5">
        <Button asChild size="sm" className="flex-1">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="size-4" />
            Live Demo
          </a>
        </Button>
        <Button asChild size="sm" variant="outline" className="flex-1">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
