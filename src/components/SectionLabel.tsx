export default function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-[30px] h-px bg-accent" />
      <span className="font-mono text-xs uppercase tracking-[3px] text-accent">
        {text}
      </span>
    </div>
  );
}
