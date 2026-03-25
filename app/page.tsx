import type { Metadata } from "next";
import { Suspense, lazy } from "react";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

const Testimonials = lazy(() => import("@/components/sections/Testimonials"));

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Home",
  description:
    "ScaleForge builds products that scale with Next.js, Flutter, AI systems, and backend engineering.",
  openGraph: {
    title: "ScaleForge Agency | Home",
    description:
      "Dark, performance-first agency website built with Next.js App Router and static rendering.",
    url: "/",
    images: [
      {
        url: "/images/hero-tech.svg",
        width: 1280,
        height: 720,
        alt: "ScaleForge hero image",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="pb-6">
      <Hero />
      <Services />
      <Suspense
        fallback={<div className="h-96 animate-pulse rounded-2xl border border-border bg-white/5" />}
      >
        <Testimonials />
      </Suspense>
      <Contact />
    </div>
  );
}
