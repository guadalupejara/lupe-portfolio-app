import Image from "next/image";
import Button from "./Button";

function CallToAction() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      {/* Background image */}
      <Image
        src="/sunflower.jpg"
        alt=""
        fill
        className="object-cover"
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-surface/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 py-35 md:flex-row md:items-center md:justify-between">
        <h2 className="font-display text-3xl leading-tight md:text-4xl shadow-2xl text-cream">
          Got an idea?
          <br />
          Let&apos;s build it.
        </h2>

        <div className="flex flex-col gap-4 md:items-end">
          <p className="text-text-muted">
            I&apos;m open to new opportunities and exciting collaborations.
          </p>
          <Button href="/contact" variant="primary">
            Work With Me →
          </Button>
        </div>
      </div>
    </section>
  );
}
export default CallToAction;