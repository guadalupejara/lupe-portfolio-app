import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden rounded-b-lg ">
      {/* Background image */}
      <Image
        src="/va.jpeg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Content box — pinned to bottom-left corner, ~1/4 of hero width & height */}
      <div className="absolute bottom-0 left-0 z-10 flex w-1/4 min-h-screen min-w-[75%] sm:min-w-[320px] flex-col justify-center bg-bg/40 px-6 py-6 backdrop-blur-sm">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cream">
          Software Engineer
        </p>
        <h1 className="font-display text-3xl leading-tight md:text-4xl">
          Hi, I&apos;m Lupe.
        </h1>
        <p className="mt-3 text-sm text-text-muted md:text-base">
          I build thoughtful, scalable software that solves real problems.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/projects" variant="primary">
            View My Work
          </Button>
          <Button href="/resume" variant="secondary">
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
}