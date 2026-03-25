import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";

const skillItems = [
  { icon: "⚛", label: "React" },
  { icon: "▲", label: "Next.js" },
  { icon: "🐍", label: "Python" },
  { icon: "☁", label: "AWS" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="grid min-h-[72vh] gap-10 bg-transparent pt-8 lg:grid-cols-[1.55fr_1fr] lg:items-center"
      style={{
        background:
          "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(0,212,255,0.07), transparent)",
      }}
    >
      <div className="space-y-7">
        <FadeIn delay={0}>
          <p className="inline-flex rounded-full border border-accent/20 bg-accent-dim px-3 py-1 text-xs font-semibold tracking-[0.2em] text-accent">
            PRODUCT ENGINEERING AGENCY
          </p>
        </FadeIn>
        <div className="space-y-2">
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-7xl font-[800] leading-[0.92] tracking-[-0.03em] text-white md:text-8xl">
              We Build Products
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <h1 className="font-heading text-7xl font-[800] leading-[0.92] tracking-[-0.03em] text-white md:text-8xl">
              That{" "}
              <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                Scale.
              </span>
            </h1>
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <p className="max-w-lg text-lg font-light leading-relaxed text-muted">
            We ship web, mobile, AI, and backend systems with performance-first architecture, clean developer experience, and measurable business impact.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/services"
              aria-label="View our services"
              className="rounded-full border border-accent bg-transparent px-6 py-3 text-accent transition hover:bg-accent/10"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              aria-label="Contact ScaleForge"
              className="rounded-full border border-white/15 bg-transparent px-6 py-3 text-white transition hover:bg-white/5"
            >
              Contact Us
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <ul className="flex flex-wrap gap-2 pt-1">
            {skillItems.map((item) => (
              <li
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/35 bg-accent-dim px-3 py-1 text-xs text-slate-200"
              >
                <span className="text-accent">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      <div className="relative hidden min-h-[360px] items-end justify-end lg:flex">
        <div className="relative flex w-full max-w-sm flex-col gap-4">
        <article className="float-1 w-64 self-start ml-8 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <p className="text-muted">12 Projects Delivered</p>
          <div className="mt-2 flex items-center gap-2 text-white">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            On track this quarter
          </div>
        </article>

        <article className="float-2 -mt-2 w-64 self-center ml-16 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <p className="text-muted">4 Technologies</p>
          <div className="mt-2 flex items-center gap-2 text-accent">
            <Image src="/images/nextjs-icon.svg" alt="Next.js icon" width={28} height={28} className="h-7 w-7 rounded-lg bg-white/5 p-1" />
            <Image src="/images/flutter-icon.svg" alt="Flutter icon" width={28} height={28} className="h-7 w-7 rounded-lg bg-white/5 p-1" />
            <Image src="/images/openai-icon.svg" alt="OpenAI icon" width={28} height={28} className="h-7 w-7 rounded-lg bg-white/5 p-1" />
            <Image src="/images/nestjs-icon.svg" alt="NestJS icon" width={28} height={28} className="h-7 w-7 rounded-lg bg-white/5 p-1" />
          </div>
        </article>

        <article className="float-3 -mt-2 w-64 self-end ml-4 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <p className="text-muted">100% Client Satisfaction</p>
          <p className="mt-2 text-accent">★★★★★</p>
        </article>
        </div>
      </div>
    </section>
  );
}
