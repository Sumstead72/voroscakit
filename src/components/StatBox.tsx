export default function StatBox({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="text-center p-8 border border-border bg-card">
      <span className="font-mono text-[2.5rem] font-bold text-accent block logo-glow">
        {value}
      </span>
      <span className="text-xs text-text-secondary uppercase tracking-wide mt-2 block">
        {label}
      </span>
    </div>
  );
}
