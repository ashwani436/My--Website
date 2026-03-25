import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your project with ScaleForge. Reach out for web, mobile, AI, and backend engineering support.",
  openGraph: {
    title: "Contact | ScaleForge Agency",
    description: "Get in touch with ScaleForge to build your next scalable product.",
    url: "/contact",
    images: [
      {
        url: "/images/hero-tech.svg",
        width: 1280,
        height: 720,
        alt: "ScaleForge contact visual",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-border bg-surface p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Contact</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Let&apos;s discuss your product goals
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          Share your brief and timeline, and we will propose a practical delivery plan tailored to your scope.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <ContactForm />

        <aside className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold text-foreground">Contact Details</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-muted">Email</dt>
              <dd className="mt-1 text-foreground">hello@youragency.com</dd>
            </div>
            <div>
              <dt className="text-muted">Phone</dt>
              <dd className="mt-1 text-foreground">+91 98765 43210</dd>
            </div>
            <div>
              <dt className="text-muted">Location</dt>
              <dd className="mt-1 text-foreground">Noida, India</dd>
            </div>
          </dl>
          <p className="mt-6 rounded-lg border border-border bg-black/40 px-4 py-3 text-sm text-slate-300">
            We typically respond within 24 hours.
          </p>
        </aside>
      </section>
    </div>
  );
}
