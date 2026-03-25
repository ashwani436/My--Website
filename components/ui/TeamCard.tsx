import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  name: string;
  role: string;
  stack: string[];
  avatar: string;
  blurDataURL: string;
  github: string;
  linkedin: string;
}

export default function TeamCard({
  name,
  role,
  stack,
  avatar,
  blurDataURL,
  github,
  linkedin,
}: TeamCardProps) {
  return (
    <article className="glow-hover rounded-2xl border border-border bg-surface p-5">
      <Image
        src={avatar}
        alt={`${name} profile avatar`}
        width={96}
        height={96}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        className="mb-4 rounded-xl border border-border object-cover"
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      <p className="mt-1 text-sm text-muted">{role}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center gap-4">
        <Link
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} GitHub profile`}
          className="text-sm text-slate-300 transition-colors hover:text-accent"
        >
          GitHub
        </Link>
        <Link
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} LinkedIn profile`}
          className="text-sm text-slate-300 transition-colors hover:text-accent"
        >
          LinkedIn
        </Link>
      </div>
    </article>
  );
}
