"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg tracking-wide"
          onClick={() => setOpen(false)}
        >
          Guadalupe Jara
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 text-sm font-medium uppercase tracking-wide md:flex">
          {LINKS.map((link) => {
            const isActive = pathname === link.href.replace("/#", "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-1 transition-colors ${
                  isActive
                    ? "border-accent text-text"
                    : "border-transparent text-text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-text md:hidden"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-surface px-6 py-4 text-sm font-medium uppercase tracking-wide md:hidden">
          {LINKS.map((link) => {
            const isActive = pathname === link.href.replace("/#", "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded px-2 py-3 transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}