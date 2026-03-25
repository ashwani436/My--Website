interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  tech: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  tech,
}: ServiceCardProps) {
  return (
    <article className="glow-hover rounded-2xl border border-border bg-surface p-6">
      <div className="mb-4 inline-flex rounded-xl bg-accent-dim p-2 text-lg text-accent">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
