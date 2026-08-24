export default function Tag({ label }: { label: string }) {
  return (
    <span className="rounded border border-border bg-surface-alt px-2.5 py-1 font-mono text-xs text-text-muted">
      {label}
    </span>
  );
}
