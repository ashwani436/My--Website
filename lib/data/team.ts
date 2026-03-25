export interface TeamMember {
  name: string;
  role: string;
  stack: string[];
  avatar: string;
  blurDataURL: string;
  github: string;
  linkedin: string;
}

const avatarBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIGZpbGw9IiMxMTExMTEiLz48Y2lyY2xlIGN4PSI0OCIgY3k9IjM2IiByPSIxOCIgc3Ryb2tlPSIjMDBkNGZmIiBzdHJva2Utb3BhY2l0eT0iMC4zIiBmaWxsPSJub25lIi8+PC9zdmc+";

export const teamMembers: TeamMember[] = [
  {
    name: "[Your Name]",
    role: "Full Stack Developer",
    stack: ["React", "Next.js", "Node.js", "TypeScript"],
    avatar: "/images/team-1.svg",
    blurDataURL: avatarBlurDataURL,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "[Name 2]",
    role: "Flutter Developer",
    stack: ["Flutter", "iOS", "Android", "Cross-platform"],
    avatar: "/images/team-2.svg",
    blurDataURL: avatarBlurDataURL,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "[Name 3]",
    role: "AI Developer",
    stack: ["LLMs", "RAG", "Python", "OpenAI"],
    avatar: "/images/team-3.svg",
    blurDataURL: avatarBlurDataURL,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "[Name 4]",
    role: "Backend Developer",
    stack: ["NestJS", "TypeORM", "PostgreSQL", "Node.js"],
    avatar: "/images/team-4.svg",
    blurDataURL: avatarBlurDataURL,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];
