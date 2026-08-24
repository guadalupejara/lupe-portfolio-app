type ResumeEntryProps = {
  title: string;
  org: string;
  dates: string;
  bullets?: string[];
};

function ResumeEntry({
  title,
  org,
  dates,
  bullets,
}: ResumeEntryProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <p className="font-semibold text-cream-text">
          {title} <span className="font-normal text-cream-text/70">· {org}</span>
        </p>
        <p className="whitespace-nowrap text-sm text-cream-text/60">{dates}</p>
      </div>
      {bullets && bullets.length > 0 && (
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-cream-text/80">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResumeEntry;