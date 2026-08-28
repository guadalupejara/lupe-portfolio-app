"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import Button from "@/components/Button";
import { PROJECTS, type Project } from "@/data/projects";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl md:text-5xl">Projects</h1>
      <p className="mt-2 text-text-muted">A selection of projects I&apos;ve built.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onViewDetails={() => setSelected(project)}
          />
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

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}