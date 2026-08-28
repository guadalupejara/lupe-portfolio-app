"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Tag from "./Tag";
import type { Project } from "@/data/projects";

type Tab = "demo" | "notes" | "gallery";

function getVideoEmbed(url: string): { type: "iframe" | "video"; src: string } {
  // YouTube "watch" or short youtu.be link → convert to /embed/ (required for framing)
  const ytMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  if (ytMatch) {
    return { type: "iframe", src: `https://www.youtube.com/embed/${ytMatch[1]}` };
  }
  // Already a YouTube embed URL
  if (url.includes("youtube.com/embed/")) {
    return { type: "iframe", src: url };
  }
  // Google Drive share link → convert to /preview (required for embedding)
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch) {
    return {
      type: "iframe",
      src: `https://drive.google.com/file/d/${driveMatch[1]}/preview`,
    };
  }
  // Otherwise assume it's a direct video file (e.g. a local .mp4 in /public)
  return { type: "video", src: url };
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const availableTabs: Tab[] = [
    ...(project.videoUrl ? (["demo"] as Tab[]) : []),
    ...(project.notes ? (["notes"] as Tab[]) : []),
    ...(project.gallery && project.gallery.length > 0
      ? (["gallery"] as Tab[])
      : []),
  ];

  const [activeTab, setActiveTab] = useState<Tab | null>(
    availableTabs[0] ?? null
  );
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const videoEmbed = project.videoUrl ? getVideoEmbed(project.videoUrl) : null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/80 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-full w-full max-w-2xl overflow-y-auto rounded-lg border border-border bg-surface p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl">{project.title}</h2>
            <p className="mt-1 text-sm text-text-muted">
              {project.description}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 text-text-muted transition-colors hover:text-accent"
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Tabs */}
        {availableTabs.length > 0 && (
          <div className="mb-5 flex gap-2 border-b border-border">
            {availableTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`border-b-2 px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  activeTab === tab
                    ? "border-accent text-text"
                    : "border-transparent text-text-muted hover:text-text"
                }`}
              >
                {tab === "demo"
                  ? "Demo"
                  : tab === "notes"
                    ? "Notes"
                    : "Gallery"}
              </button>
            ))}
          </div>
        )}

        {/* Tab content */}
        <div className="mb-6">
          {activeTab === "demo" && videoEmbed && (
            <div className="aspect-video w-full overflow-hidden rounded-md bg-bg">
              {videoEmbed.type === "iframe" ? (
                <iframe
                  src={videoEmbed.src}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={videoEmbed.src}
                  controls
                  className="h-full w-full"
                />
              )}
            </div>
          )}

          {activeTab === "notes" && project.notes && (
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
                  Key Features
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-sm text-text-muted">
                  {project.notes.keyFeatures.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
                  What I Learned
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-sm text-text-muted">
                  {project.notes.whatLearned.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "gallery" && project.gallery && (
            <div className="relative">
              <div className="relative aspect-video w-full overflow-hidden rounded-md bg-bg">
                <Image
                  src={project.gallery[galleryIndex]}
                  alt={`${project.title} screenshot ${galleryIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setGalleryIndex((i) =>
                        i === 0 ? project.gallery!.length - 1 : i - 1
                      )
                    }
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-bg/70 p-2 text-text hover:text-accent"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button
                    onClick={() =>
                      setGalleryIndex((i) =>
                        i === project.gallery!.length - 1 ? 0 : i + 1
                      )
                    }
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-bg/70 p-2 text-text hover:text-accent"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                  <div className="mt-3 flex justify-center gap-1.5">
                    {project.gallery.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-1.5 rounded-full ${
                          i === galleryIndex ? "bg-accent" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {availableTabs.length === 0 && (
            <p className="text-sm text-text-muted">
              More details coming soon — check the code on GitHub in the
              meantime.
            </p>
          )}
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap items-center gap-4 border-t border-border pt-4 text-sm font-medium">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text hover:text-accent"
          >
            <FontAwesomeIcon icon={faGithub} />
            View on GitHub
          </Link>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover"
            >
              Live Demo →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}