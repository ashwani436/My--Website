import type { Metadata } from "next";
import Services from "@/components/sections/Services";
import Button from "@/components/ui/Button";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ScaleForge services: web development, Flutter mobile apps, AI solutions, and backend engineering.",
  openGraph: {
    title: "Services | ScaleForge Agency",
    description: "High-impact product engineering services for scaling teams.",
    url: "/services",
    images: [
      {
        url: "/images/hero-tech.svg",
        width: 1280,
        height: 720,
        alt: "ScaleForge services visual",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-border bg-surface p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Services</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Full-spectrum engineering services for digital products
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          Our workflows are optimized for rapid iteration without sacrificing quality. We embed with your team, prioritize business outcomes, and deliver production-ready systems from day one.
        </p>
      </section>
      <Services />
      <section className="rounded-2xl border border-border bg-surface p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Need a custom engagement model?
        </h2>
        <p className="mt-3 text-sm text-muted">
          We support sprint-based delivery, retained engineering pods, and project rescue engagements.
        </p>
        <div className="mt-5">
          <Button href="/contact">Talk to our team</Button>
        </div>
      </section>
    </div>
  );
}
