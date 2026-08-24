import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ResumeEntry from "@/components/ResumeEntry";

const CONTACT = [
  { icon: faEnvelope, label: "Hellolupejara@gmail.com", href: "mailto:Hellolupejara@gmail.com" },
  { icon: faPhone, label: "(323) 609-5804", href: "tel:+13236095804" },
  { icon: faLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/lupe-dev" },
  { icon: faGithub, label: "GitHub", href: "https://github.com/guadalupejara" },
  { icon: faGlobe, label: "Portfolio", href: "/" },
];

const SKILL_GROUPS = [
  {
    category: "Front End",
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "HTML5",
      "CSS",
      "jQuery",
      "Ajax/Axios",
      "Bootstrap",
      "Formik",
      "Yup",
      "Chart.js",
      "YAML",
    ],
  },
  {
    category: "Back End",
    skills: [
      "C#",
      ".NET Core",
      "ASP.NET",
      "ADO.NET",
      "Entity Framework",
      "Node.js",
      "RESTful APIs",
      "T-SQL",
      "Firebase",
      "Supabase",
      "Tanstack",
      "Brevo",
    ],
  },
  {
    category: "DevOps / Tools",
    skills: [
      "Azure DevOps",
      "CI/CD",
      "Git",
      "GitHub",
      "Docker (familiar)",
      "Jira",
      "Trello",
      "Postman",
      "SSMS",
      "Visual Studio",
      "VS Code",
    ],
  },
  {
    category: "Collaboration",
    skills: [
      "Agile/Scrum",
      "Critical Thinking",
      "Problem Solving",
      "Object-Oriented Design",
      "Cross-functional Collaboration",
    ],
  },
];

const PROJECTS = [
  {
    title: "Mi Casita",
    subtitle: "Personal Full-Stack Project",
    bullets: [
      "Built a centralized home-organization dashboard (calendar, sticky notes, reminders, lists, messaging) using React, Next.js, and Tailwind CSS, with Firebase for backend and auth.",
      "Implemented Firebase OAuth authentication (login/logout, profile updates, secure account deletion) and role-based, secure HTTP routing between public and authenticated pages.",
      "Used Yup and Formik for schema-based form validation, and built a dynamic settings form that pre-populates and updates user data in real time.",
      "Built draggable, real-time sticky notes with customizable fonts and colors, persisted to the database.",
    ],
    githubUrl: "https://github.com/guadalupejara/mi_casita",
  },
  {
    title: "Echos",
    subtitle: "Personal Full-Stack Project",
    bullets: [
      "Built a private, distraction-free writing app with React and Tailwind CSS, using Vite for the build tooling.",
      "Built customizable UI (background, font, and color themes) via controlled dropdown state.",
      "Implemented two text-release interactions: an instant scatter/erase effect and a toggleable auto-erase-as-you-type mode.",
      "Added a local save feature to export reflections as a .txt file.",
    ],
    githubUrl: "https://github.com/guadalupejara/echos",
  },
];

const EXPERIENCE = [
  {
    title: "Software Developer",
    org: "TopSpin Max",
    dates: "06/2025 – Current",
    bullets: [
      "Developed and enhanced a Gear feature in React, supporting create, update, and delete operations for gear history data; refactored and built reusable stepper, form, and table components.",
      "Identified, documented, and tracked application bugs using Trello; reproduced reported issues, implemented fixes, and validated solutions through testing.",
      "Implemented feature designs and interaction behaviors from Figma, contributing to UI consistency and early-stage mockup ideation.",
      "Integrated location-based inputs into tournament features and managed updates across staging and production branches to support release readiness.",
    ],
  },
  {
    title: "Software Developer Intern",
    org: "Cloudfit Software",
    dates: "06/2025 – 08/2025",
    bullets: [
      "Migrated Ant Design components to MUI, using a dual-repository workflow (Repo A generating component files for Repo B).",
      "Integrated local SQL databases with front-end applications via Entity Framework, enabling smooth front-to-back data flow.",
      "Collaborated with Product Managers and stakeholders in Agile sprints to align technical tasks with business goals.",
      "Worked within an Azure DevOps environment managing work items, repos, and deployment pipelines.",
      "Worked one-on-one with a dedicated mentor to navigate DoD company \"ways of working\" and participated in sandbox workshops to expand technical and collaborative skills.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Method",
    dates: "06/2024 – 07/2024",
    bullets: [
      "Engineered metric-based leaderboards, including a leaderboard displaying overall experience points, using Chart.js; built to scale for Method's 2,000+ employees.",
      "Collaborated with 2 Product Managers and 2 UI Designers on UX/UI processes — user interviews, feature prioritization, and finalization for login, navigation bar, dashboard, and leaderboard pages.",
      "Implemented Next.js, leveraging server-side rendering and advanced routing to optimize performance and scalability.",
      "Developed cloud functions for retrieving and inserting documents from collections, including embedded functions to trigger specific calls.",
    ],
  },
  {
    title: "Fullstack Software Engineer",
    org: "Resolvely.AI",
    dates: "10/2023 – 03/2024",
    bullets: [
      "Built React.js front-end views with Axios connections to .NET APIs retrieving SQL data via stored procedures.",
      "Streamlined quality control across the application by implementing Yup schema validation on the front end and C# backend checks to keep data types consistent with SQL table definitions.",
      "Built a responsive dual-card form UI using Formik and React useState for live state capture; success/error handlers in React and .NET communicated with SQL via ADO.NET and ASP.NET.",
      "Built a customizable administrative email feature triggered on a PUT call; built the controller endpoint, model, and methods in .NET to securely receive and update data, using interface-based abstraction and Brevo for templated email.",
    ],
  },
];

const EDUCATION = [
  { title: "Master of Arts", org: "University of Roehampton", dates: "06/2019" },
  { title: "B.A. & B.S.", org: "University of California, Riverside", dates: "06/2016" },
];

const CERTIFICATIONS = [
  "MongoDB University — SI Associate (07/2024)",
  "Google — UX Design Specialization (01/2023)",
];

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-lg bg-cream px-6 py-10 text-cream-text md:px-12 md:py-14">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div>
            <h1 className="font-display text-4xl md:text-5xl">
              Guadalupe &ldquo;Lupe&rdquo; Jara
            </h1>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-cream-text/70">
              {CONTACT.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1.5 hover:text-accent"
                >
                  <FontAwesomeIcon icon={item.icon} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <a
            href="/lupe-dev-resume.pdf"
            download
            className="inline-flex items-center gap-2 self-start rounded-md bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-wide text-text transition-colors hover:bg-accent-hover"
          >
            Download PDF
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-cream-text/50">
            Summary
          </h2>
          <p className="text-sm leading-relaxed text-cream-text/80">
            Full-stack software engineer specializing in React.js front ends
            backed by C#/.NET and Node.js services, consuming and building
            RESTful APIs against SQL and cloud-hosted data. Comfortable
            across the full stack — from component architecture and state
            management to API design and database integration — in
            fast-paced, collaborative Agile/Scrum teams.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-cream-text/50">
            Skills
          </h2>
          <div className="space-y-3">
            {SKILL_GROUPS.map((group) => (
              <div key={group.category}>
                <p className="mb-1.5 text-sm font-semibold text-cream-text">
                  {group.category}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-cream-text/20 px-3 py-1 font-mono text-xs text-cream-text/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-cream-text/50">
            Projects
          </h2>
          {PROJECTS.map((project) => (
            <div key={project.title} className="mb-6">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <p className="font-semibold text-cream-text">
                  {project.title}{" "}
                  <span className="font-normal text-cream-text/70">
                    | {project.subtitle}
                  </span>
                </p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent-hover"
                >
                  {project.githubUrl.replace("https://", "")}
                </a>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-cream-text/80">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-cream-text/50">
            Experience
          </h2>
          {EXPERIENCE.map((job) => (
            <ResumeEntry
              key={job.title + job.org}
              title={job.title}
              org={job.org}
              dates={job.dates}
              bullets={job.bullets}
            />
          ))}
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-cream-text/50">
            Education
          </h2>
          {EDUCATION.map((edu) => (
            <ResumeEntry
              key={edu.title}
              title={edu.title}
              org={edu.org}
              dates={edu.dates}
            />
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-cream-text/50">
            Certifications
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-cream-text/80">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}