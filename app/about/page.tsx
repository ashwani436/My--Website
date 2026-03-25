import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiTypeorm,
  SiFlutter,
  SiPython,
  SiOpenai,
  SiPostgresql,
  SiMongodb,
  SiDocker,
} from "react-icons/si";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the ScaleForge team building scalable web, mobile, AI, and backend systems.",
  openGraph: {
    title: "About | ScaleForge Agency",
    description:
      "Learn about the team, values, and delivery mindset behind ScaleForge.",
    url: "/about",
    images: [
      {
        url: "/images/hero-tech.svg",
        width: 1280,
        height: 720,
        alt: "ScaleForge about page image",
      },
    ],
  },
};

const deliveryOutcomes = [
  "Scalable Web Applications",
  "Cross-platform Mobile Apps",
  "AI-powered Products",
  "Robust APIs & Backend Systems",
];

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "TypeORM", icon: SiTypeorm },
  { name: "Flutter", icon: SiFlutter },
  { name: "Python", icon: SiPython },
  { name: "OpenAI", icon: SiOpenai },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "AWS", icon: AwsGlyph },
  { name: "Docker", icon: SiDocker },
];

function AwsGlyph(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 15.5c4.6 3 10.2 3.2 16 .2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.5 9.5h2.2l2.2 5h-2l-.35-.9H7.6l-.35.9h-2l2.25-5Zm.7 2.8h1.35l-.68-1.7-.67 1.7Z"
        fill="currentColor"
      />
      <path d="M13 14.5V9.5h1.8v3.4h1.8v1.6H13Z" fill="currentColor" />
    </svg>
  );
}

const workSteps = [
  {
    title: "Discover",
    description: "We map business goals, define scope, and align architecture with product priorities.",
  },
  {
    title: "Build",
    description: "Our team delivers iteratively with tight feedback loops, clean code, and clear ownership.",
  },
  {
    title: "Deliver",
    description: "We launch, optimize, and hand over maintainable systems with documentation and support.",
  },
];

const differentiators = [
  "Full-stack in-house",
  "Fast Delivery",
  "Clean Scalable Code",
];

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <FadeIn delay={0}>
        <section className="rounded-2xl border border-border bg-surface p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">About</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Outcome-focused engineering partner for ambitious teams
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            We help startups and enterprises ship digital products that are stable, scalable, and ready for growth. Our process stays lean, transparent, and focused on what creates measurable business impact.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={0.08}>
        <section className="rounded-2xl border border-border bg-surface p-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">What We Deliver</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {deliveryOutcomes.map((item, index) => (
              <article
                key={item}
                className={`glow-hover min-h-24 rounded-xl border border-border bg-black/40 p-5 ${index % 2 === 0 ? "float-1" : "float-2"}`}
              >
                <p className="font-medium text-foreground">{item}</p>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.16}>
        <section className="rounded-2xl border border-border bg-surface p-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Technologies We Work With</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map(({ name, icon: Icon }) => (
              <li key={name} className="rounded-lg border border-border bg-black/40 px-4 py-3">
                <span className="flex items-center gap-2 text-sm text-slate-200">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <FadeIn delay={0.24}>
        <section className="rounded-2xl border border-border bg-surface p-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">How We Work</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {workSteps.map((step, index) => (
              <li key={step.title} className="min-h-44 rounded-xl border border-border bg-black/40 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </FadeIn>

      <FadeIn delay={0.32}>
        <section className="rounded-2xl border border-border bg-surface p-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Why Choose Us</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {differentiators.map((item) => (
              <article key={item} className="glow-hover min-h-24 rounded-xl border border-border bg-black/40 p-5">
                <p className="font-medium text-foreground">{item}</p>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
