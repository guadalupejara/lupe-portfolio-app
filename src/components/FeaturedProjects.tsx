import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";
import { FEATURED_PROJECTS } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <p className="flex items-center gap-2 font-mono text-m uppercase tracking-widest text-cream">
          <FontAwesomeIcon icon={faLeaf} className="text-accent" />
          Featured Projects
        </p>
        <Link
          href="/projects"
          className="text-sm font-semibold uppercase tracking-wide text-text-muted transition-colors hover:text-accent"
        >
          View All Projects →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}