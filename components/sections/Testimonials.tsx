"use client";

// Client Component — needed for carousel index state and previous/next interactions.
import { useState } from "react";
import clsx from "clsx";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const prev = () => {
    setActiveIndex((previous) =>
      previous === 0 ? testimonials.length - 1 : previous - 1,
    );
  };

  const next = () => {
    setActiveIndex((previous) =>
      previous === testimonials.length - 1 ? 0 : previous + 1,
    );
  };

  return (
    <section id="testimonials" className="space-y-8 pt-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <FadeIn delay={0}>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Testimonials</p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Trusted by product teams shipping at speed
            </h2>
          </div>
        </FadeIn>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Show previous testimonial"
            className="rounded-full border border-border bg-black/40 px-4 py-2 text-sm text-foreground transition hover:border-accent/40 hover:text-accent"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Show next testimonial"
            className="rounded-full border border-border bg-black/40 px-4 py-2 text-sm text-foreground transition hover:border-accent/40 hover:text-accent"
          >
            Next
          </button>
        </div>
      </div>

      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {testimonials.map((item, index) => (
          <FadeIn key={`${item.client}-${item.company}`} delay={index * 0.1}>
            <div
              className={clsx(
                "min-w-[85%] snap-start transition-all duration-300 sm:min-w-[70%] lg:min-w-0",
                index === activeIndex ? "lg:scale-[1.02]" : "opacity-80",
              )}
            >
              <TestimonialCard
                quote={item.quote}
                client={item.client}
                company={item.company}
                rating={item.rating}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
