import {
  SiReact,
  SiMui,
  SiBootstrap,
  SiTailwindcss,
  SiCplusplus,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiDotnet,
  SiFirebase,
  SiMysql,
  SiNodedotjs,
  SiFigma,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

const SKILLS: { label: string; icon: IconType; color: string }[] = [
  { label: "React", icon: SiReact, color: "#61DAFB" },
  { label: "MUI", icon: SiMui, color: "#007FFF" },
  { label: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { label: "C++", icon: SiCplusplus, color: "#00599C" },
  { label: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { label: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { label: ".NET", icon: SiDotnet, color: "#512BD4" },
  { label: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { label: "MySQL", icon: SiMysql, color: "#4479A1" },
  { label: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { label: "Figma", icon: SiFigma, color: "#F24E1E" },
  { label: "Git", icon: SiGit, color: "#F05032" },
];

export default function SkillsStrip() {
  return (
    <div className="border-b border-border bg-bg">
      <p className="mx-auto flex max-w-6xl items-center gap-2 px-6 pt-6 font-mono text-xs uppercase tracking-widest text-accent">
        Languages & Tools
      </p>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-5 px-6 py-6">
        {SKILLS.map(({ label, icon: Icon, color }) => (
          <div
            key={label}
            title={label}
            className="flex flex-col items-center gap-1.5 text-text-muted"
          >
            <Icon size={28} color={color} />
            <span className="text-[10px] uppercase tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}