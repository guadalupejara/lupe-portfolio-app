import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-text hover:bg-accent-hover"
      : "border border-border text-text hover:border-accent hover:text-accent";

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={`${base} ${styles}`} {...props}>
      {children}
      {icon}
    </Link>
  );
}
