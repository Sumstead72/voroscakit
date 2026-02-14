export default function PageDivider({ label }: { label: string }) {
  return (
    <div className="page-divider relative z-10 text-center py-8">
      <span className="font-mono text-[0.7rem] text-text-muted tracking-[4px] uppercase bg-primary px-6 relative">
        / {label} /
      </span>
    </div>
  );
}
