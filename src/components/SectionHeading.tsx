export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl">{title}</h2>
    </div>
  );
}
