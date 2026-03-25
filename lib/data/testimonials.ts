export interface TestimonialItem {
  quote: string;
  client: string;
  company: string;
  rating: number;
}

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "ScaleForge transformed our outdated marketing site into a high-converting growth engine in under six weeks.",
    client: "Ariana Cole",
    company: "VertexLabs",
    rating: 5,
  },
  {
    quote:
      "From architecture to launch, the team was fast, thoughtful, and deeply technical. Our product velocity doubled.",
    client: "Marcus Chen",
    company: "Nimbus AI",
    rating: 5,
  },
  {
    quote:
      "Their backend and AI integration work helped us reduce manual support workload by nearly 40 percent.",
    client: "Priya Kapoor",
    company: "Orbit Commerce",
    rating: 5,
  },
  {
    quote:
      "Excellent communication, clean code, and reliable delivery. We now treat them as an extension of our team.",
    client: "Daniel Grant",
    company: "ForgePay",
    rating: 5,
  },
];
