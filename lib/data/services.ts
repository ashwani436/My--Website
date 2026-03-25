export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  tech: string[];
}

export const services: ServiceItem[] = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Production-grade web platforms with App Router, robust SEO, and performance-first architecture.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    icon: "📱",
    title: "Mobile (Flutter)",
    description:
      "Cross-platform mobile apps that feel native, ship faster, and stay maintainable at scale.",
    tech: ["Flutter", "Dart", "Firebase", "CI/CD"],
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    description:
      "Intelligent assistants and workflow automation powered by LLMs, RAG, and modern AI infrastructure.",
    tech: ["Python", "OpenAI", "RAG", "Vector DB"],
  },
  {
    icon: "🛠️",
    title: "Backend Engineering",
    description:
      "Secure, scalable APIs and data systems built for reliability, observability, and growth.",
    tech: ["NestJS", "TypeORM", "PostgreSQL", "Node.js"],
  },
];
