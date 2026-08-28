import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";
import Cats from "@/cat/Cats";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  onViewDetails,
}: {
  project: Project;
  onViewDetails?: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      <div className="relative h-60 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          unoptimized={project.unoptimized}
          className="object-cover"
        />
        {project.hasCat && (
          <div className="absolute inset-0 pointer-events-none">
            <Cats />
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl">{project.title}</h3>
        <p className="mt-2 text-sm text-text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className="border-t mt-9 border-border pt-4 text-sm text-text-muted"/>

        <div className="mt-5 flex items-center justify-between text-sm font-medium">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent"
          >
            GitHub →
          </Link>

          {onViewDetails && (
            <button
              onClick={onViewDetails}
              className="font-semibold text-accent hover:text-accent-hover"
            >
              View Details
            </button>
          )}

          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover"
            >
              Live Demo →
            </Link>
          ) : (
            <span className="text-text-muted">Coming Soon</span>
          )}
        </div>
      </div>
    </div>
  );
}