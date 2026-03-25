import { teamMembers } from "@/lib/data/team";
import TeamCard from "@/components/ui/TeamCard";
import { FadeIn } from "@/components/ui/FadeIn";

interface AboutTeamProps {
  compact?: boolean;
}

export default function AboutTeam({ compact = false }: AboutTeamProps) {
  return (
    <section id="about" className="space-y-8 pt-20">
      <FadeIn delay={0}>
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">About Us</p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Engineers who care about outcomes, not just output
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            We are a lean technical agency focused on building durable digital products. We blend product thinking, design systems, and deep engineering expertise to help founders and teams ship confidently.
          </p>
        </div>
      </FadeIn>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {(compact ? teamMembers.slice(0, 4) : teamMembers).map((member, index) => (
          <FadeIn key={member.name} delay={index * 0.1}>
            <TeamCard
              name={member.name}
              role={member.role}
              stack={member.stack}
              avatar={member.avatar}
              blurDataURL={member.blurDataURL}
              github={member.github}
              linkedin={member.linkedin}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
