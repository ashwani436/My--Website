import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";

const mapBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDcyMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjcyMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiMxMTExMTEiLz48L3N2Zz4=";

export default function Contact() {
  return (
    <section id="contact" className="space-y-8 pt-20">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Contact</p>
        <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Let&apos;s build your next high-impact product
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />
        <div className="space-y-4 rounded-2xl border border-border bg-surface p-6">
          <p className="text-sm text-slate-200">
            Email:{" "}
            <a
              href="mailto:hello@scaleforge.dev"
              className="text-accent transition-colors hover:text-white"
            >
              hello@scaleforge.dev
            </a>
          </p>
          <p className="text-sm text-muted">Location: Remote-first, working worldwide.</p>
          <div className="overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/map-placeholder.svg"
              alt="Map placeholder showing global remote coverage"
              width={720}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              placeholder="blur"
              blurDataURL={mapBlurDataURL}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
