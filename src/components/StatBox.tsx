export default function StatBox({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="text-center p-6 rounded-lg border border-border bg-card/50">
      <div className="font-mono text-3xl font-bold text-accent mb-2">
        {value}
      </div>
      <div className="text-sm text-text-secondary">{label}</div>
    </div>
  );
}
