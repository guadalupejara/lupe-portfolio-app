import Link from "next/link";
import type { ReactNode } from "react";

export default function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-accent"
    >
      <span className="text-accent">{icon}</span>
      <span>
        <span className="block text-xs uppercase tracking-wide text-text-muted">
          {label}
        </span>
        <span className="block font-medium">{value}</span>
      </span>
    </Link>
  );
}
