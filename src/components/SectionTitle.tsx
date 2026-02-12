export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-[2.8rem] font-bold leading-[1.15] tracking-tight text-text-primary mb-6">
      {children}
    </h2>
  );
}
