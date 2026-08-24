import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl md:text-5xl">Projects</h1>
      <p className="mt-2 text-text-muted">A selection of projects I&apos;ve built.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button
          href="https://github.com/guadalupejara"
          variant="secondary"
          external
        >
          View More Projects on GitHub
        </Button>
      </div>
    </section>
  );
}