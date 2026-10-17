"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project, ProjectType } from "@/data/projects";

const FILTERS: { value: "all" | ProjectType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "professional", label: "Professional" },
  { value: "hackathon", label: "Hackathon" },
  { value: "personal", label: "Personal" },
];

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"all" | ProjectType>("all");

  const shown =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-[0.12em]">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
            className={`border-b-2 pb-1 transition-colors ${
              filter === f.value
                ? "border-accent text-text"
                : "border-transparent text-text-muted hover:text-text"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {shown.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onViewDetails={() => setSelected(project)}
          />
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}