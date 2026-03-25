import { services } from "@/lib/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Services() {
  return (
    <section id="services" className="space-y-8 pt-20">
      <FadeIn delay={0}>
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Services</p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Multi-discipline engineering for modern teams
          </h2>
        </div>
      </FadeIn>
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.1}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              tech={service.tech}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
