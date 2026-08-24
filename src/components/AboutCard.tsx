import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faCode,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const QUICK_LINKS = [
  { href: "/resume", label: "Resume", icon: faFileLines },
  { href: "/projects", label: "Projects", icon: faCode },
  { href: "https://github.com/guadalupejara", label: "GitHub", icon: faGithub, external: true },
  { href: "https://linkedin.com/in/guadalupejara", label: "LinkedIn", icon: faLinkedin, external: true },
];

function AboutCard() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      {/* Photo + bio block */}
      <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-center">
        <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-lg">
          <Image
            src="/lupe.jpg"
            alt="Portrait of Lupé"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-3 flex items-center gap-2 font-mono text-s uppercase tracking-widest text-cream">
            <FontAwesomeIcon icon={faLeaf}  className="text-accent"/>
            About Me
          </p>
          <p className="max-w font-display text-m leading-snug text-text md:text-lg">
            I am skilled in leveraging a diverse toolkit that includes .NET, C#, SQL, noSQL databases, JavaScript (React & jQuery), and frameworks like Bootstrap and Tailwind CSS to create intuitive and responsive user interfaces. <br /> <br />
            I am passionate about fostering interpersonal relationships and cultivating empathy, with a strong commitment to equity, communication, transparency, and critical thinking. I thrive in collaborative environments that prioritize growth and teamwork. <br /> <br />
            As a detail-oriented storyteller, I focus on crafting user experiences that bridge the gap between technology and human connection, embracing diverse narratives to enrich the overall user experience.
          </p>
        </div>
      </div>

      {/* Quick links — separate full-width bordered strip */}
      <div className="flex w-full flex-col divide-y divide-border rounded-lg border border-border sm:flex-row sm:divide-x sm:divide-y-0 mt-6">
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
           className="flex flex-1 items-center justify-center gap-2 px-6 py-6 text-m font-semibold uppercase tracking-wide text-text transition-colors hover:text-accent"
          >
            <FontAwesomeIcon icon={link.icon} className="text-sm" />
            {link.label}
            <span aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default AboutCard;