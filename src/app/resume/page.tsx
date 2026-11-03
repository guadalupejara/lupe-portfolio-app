import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ResumeEntry from "@/components/ResumeEntry";

const CONTACT = [
  { icon: faEnvelope, label: "Hellolupejara@gmail.com", href: "mailto:Hellolupejara@gmail.com" },
  { icon: faPhone, label: "(323) 609-5804", href: "tel:+13236095804" },
  { icon: faLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/guadalupejara" },
  { icon: faGithub, label: "GitHub", href: "https://github.com/guadalupejara" },
];

const SKILL_GROUPS = [
  {
    category: "Backend & APIs",
    skills: [
      "C#",
      ".NET Core",
      "ASP.NET",
      "Node.js",
      "RESTful API design",
      "Entity Framework",
      "ADO.NET",
      "authentication/authorization (Firebase OAuth, role-based access)",
    ],
  },
  {
    category: "Databases",
    skills: [
      "SQL Server (T-SQL, stored procedures)",
      "PostgreSQL (Supabase)",
      "Firebase/Firestore",
      "MongoDB (Associate certified)",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Google Cloud (via Firebase: Auth, Firestore, Cloud Functions)",
      "Azure DevOps (Repos, pull requests)",
      "Git/GitHub",
      "Vercel",
    ],
  },
  {
    category: "Front End",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "TanStack Start",
      "Tailwind CSS",
      "MUI",
      "Formik/Yup",
    ],
  },
  {
    category: "Practices",
    skills: [
      "Agile/Scrum",
      "OOP",
      "debugging and root cause analysis",
      "code review",
      "schema validation",
    ],
  },
];

const PROJECTS = [
  {
    title: "Recoverly",
    subtitle: "Method Hackathon, 2nd Place & Most Unique Concept | 10/2026",
    bullets: [
      "Placed 2nd and won Most Unique Concept in a week-long Method hackathon on a team of 4, building Recoverly, a supplier-side app that helps analysts dispute invalid retailer chargebacks (Walmart, Amazon) with a rules-based readiness score and deadline alerts.",
      "Ran the Home Depot associate interview and supplier research behind the product, including the finding that every document for a purchase order should live in one case timeline, which became the app's core design. Judges recognized the concept as unique given how few supplier-side software examples exist, and credited the depth of research completed in one week.",
      "Served as Research & Software Engineer, setting up the prototype structure and deploying it to Vercel (TanStack Start, Supabase, TypeScript, Tailwind), with mentorship from a Method Associate Director / Senior Software Engineer.",
    ],
    url: "https://retailer-resolve.vercel.app/",
  },
  {
    title: "Mi Casita",
    subtitle: "Personal Full-Stack Project",
    bullets: [
      "Built a centralized home-organization dashboard (calendar, sticky notes, reminders, lists, messaging) using React, Next.js, and Tailwind CSS, with Firebase for the backend and authentication.",
      "Secured the app with Firebase OAuth (login/logout, profile updates, secure account deletion) and role-based routing between public and authenticated pages.",
      "Enforced clean user data with Yup and Formik schema validation, including a settings form that pre-populates and updates user data in real time.",
      "Persisted draggable, real-time sticky notes with customizable fonts and colors to the database.",
    ],
    url: "https://github.com/guadalupejara/mi_casita",
  },
  {
    title: "Echos",
    subtitle: "Personal Full-Stack Project",
    bullets: [
      "Built and deployed a private, distraction-free writing app with React, Tailwind CSS, and Vite.",
      "Added customizable UI themes (background, font, color) through controlled dropdown state, plus a local save that exports reflections as a .txt file.",
    ],
    url: "https://echos-alpha.vercel.app/",
  },
];

const EXPERIENCE = [
  {
    title: "Software Developer",
    org: "TopSpin Max",
    dates: "06/2025 – 12/2025",
    bullets: [
      "Built the Gear history feature in React from Figma designs: refactored the existing stepper to reduce its code and improve readability, and built a reusable, user-customizable form with schema validation enforcing required data, plus a reusable table component",
      "Reproduced and resolved 3 production bugs in tournaments, tracing root causes to API responses and verifying fixes through manual testing before release.",
      "Integrated tournament location data through Supabase (Postgres) APIs, connecting the React front end to 4 queries/endpoints, and managed staging-to-production merges to ship 2 releases.",
    ],
  },
  {
    title: "Software Developer Intern",
    org: "Cloudfit Software",
    dates: "06/2025 – 08/2025",
    bullets: [
      "Migrated 10 components from Ant Design to MUI by driving a component builder in one repo via terminal command line and validating the generated output in a second repo, learning the workflow from scratch via wikis and manual investigation.",
      "Connected the React front end to local SQL Server tables through Entity Framework in an isolated, non-production environment, hydrating migrated MUI components with real data to verify that affected schemas/views rendered correctly after the Ant Design migration.",
      "Delivered the Ant Design to MUI migration on isolated feature branches in Azure DevOps Repos, with every pull request peer-reviewed before merging to main, across 4 PRs.",
      "Presented migration findings in weekly stakeholder demos, incorporating feedback to adjust goals and priorities, and worked with a Senior Software Engineer who guided technical direction and reviewed pull requests.",
      "Met weekly with a project manager mentor to prioritize tasks and plan my time across internship goals, building habits for scoping work and managing competing priorities in a DoD contractor environment.",
    ],
  },
  {
    title: "Software Engineer Resident",
    org: "Method",
    dates: "06/2024 – 07/2024",
    bullets: [
      "Co-built an MVP from scratch on one of three engineering teams (2-3 engineers each), helping select the tech stack (Next.js, Firebase, Chart.js) and delivering the app to stakeholders in 2 weeks from finalized designs.",
      "Owned application development outside of DevOps: built Firebase cloud functions (HTTP triggers) for reading and writing 3 collections, plus a reusable dropdown component and metric-based leaderboard pages, including an experience-points view in Chart.js.",
      "Collaborated with 2 Product Managers and 2 UI Designers on UX/UI processes (user interviews, feature prioritization, and finalization) for login, navigation bar, dashboard, and leaderboard pages.",
      "Completed a residency at a technology consultancy, with weekly mentorship and training in consulting delivery alongside hands-on MVP development.",
    ],
  },
  {
    title: "Fullstack Software Engineer (Contract, Sabio Cohort)",
    org: "Resolvely.AI",
    dates: "10/2023 – 03/2024",
    bullets: [
      "Joined a cohort team that shrank from 18 to 12 engineers to finish a college-transition web platform for admins and high school seniors, started by a prior cohort, and delivered it to completion.",
      "Built the success story workflow end to end: student profile and story submission forms, the admin review interface, and an admin-triggered .NET email flow (PUT endpoint, controller, model, and service methods) that sends students a templated Brevo email when their story is approved or denied, behind an interface abstraction so the email provider can be swapped without touching business logic.",
      "Connected React views and Formik forms through Axios to .NET APIs calling SQL Server stored procedures (ADO.NET), validating each request with Yup schemas (min/max length rules) and C# checks so payloads match the backend model and SQL table definitions before reaching the database.",
      "Took over the comment section after its original engineer left and connected it to the events page, so users viewing an event card can leave real-time comments on that specific card.",
    ],
  },
];

const EDUCATION = [
  { title: "Full Stack Engineer Certification", org: "Sabio Enterprises Bootcamp", dates: "03/2024" },
  { title: "Master of Arts", org: "University of Roehampton", dates: "06/2019" },
  { title: "B.A. & B.S.", org: "University of California, Riverside", dates: "06/2016" },
];

const CERTIFICATIONS = [
  "MongoDB Associate (07/2024)",
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
            href="Guadalupe_Jara_Software_Engineer_HD.pdf"
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
            Full-stack software engineer building production web applications
            since 2023 across C#/.NET, Node.js, and React/TypeScript. Builds
            and secures RESTful APIs backed by SQL Server, PostgreSQL
            (Supabase), and Firebase, delivers through feature-branch and
            peer-reviewed pull request workflows in Azure DevOps, and traces
            production bugs to root cause. Works in Agile teams with product
            and design. Placed 2nd at the Method hackathon with Recoverly, a
            supplier chargeback-recovery app built on Home Depot associate
            research I conducted.
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
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent-hover"
                >
                  {project.url.replace("https://", "").replace(/\/$/, "")}
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