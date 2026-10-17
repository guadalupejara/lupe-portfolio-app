import type { ProjectType } from "@/data/projects";

const LABELS: Record<ProjectType, { text: string; color: string }> = {
  professional: { text: "Professional", color: "text-text" },
  hackathon: { text: "Hackathon", color: "text-accent" },
  personal: { text: "Personal", color: "text-text-muted" },
};

export default function ProjectLabel({ type }: { type: ProjectType }) {
  const { text, color } = LABELS[type];
  return (
    <span
      className={`font-mono text-[11px] font-medium uppercase tracking-[0.12em] ${color}`}
    >
      {text}
    </span>
  );
}