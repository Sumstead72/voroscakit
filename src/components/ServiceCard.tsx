interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets?: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  bullets,
}: ServiceCardProps) {
  return (
    <div className="card-accent-line relative group bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:bg-card-hover hover:border-border-accent hover:-translate-y-1">
      <div className="text-accent text-2xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {description}
      </p>
      {bullets && bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((item) => (
            <li
              key={item}
              className="text-text-secondary text-sm flex items-start gap-2"
            >
              <span className="text-accent mt-0.5">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
