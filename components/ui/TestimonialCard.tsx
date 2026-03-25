interface TestimonialCardProps {
  quote: string;
  client: string;
  company: string;
  rating: number;
}

export default function TestimonialCard({
  quote,
  client,
  company,
  rating,
}: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-6">
      <p className="mb-3 text-4xl leading-none text-accent">“</p>
      <div className="mb-4 text-accent" aria-label={`${rating} star rating`}>
        {"★".repeat(rating)}
      </div>
      <blockquote className="text-sm italic leading-relaxed text-muted">"{quote}"</blockquote>
      <footer className="mt-5 text-sm text-muted">
        <p className="font-semibold text-foreground">{client}</p>
        <p className="text-xs">{company}</p>
      </footer>
    </article>
  );
}
