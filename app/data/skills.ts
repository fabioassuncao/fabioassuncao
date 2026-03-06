import type { SkillGroup } from "~/types";

export const skills: SkillGroup[] = [
  {
    name: { pt: "Backend", en: "Backend" },
    items: ["PHP", "Go", "Node.js", "TypeScript", "Python", "Rust", "SQL"],
  },
  {
    name: { pt: "Arquitetura", en: "Architecture" },
    items: [
      "Microservices",
      "Event-Driven",
      "REST / GraphQL",
      "Domain-Driven Design",
      "CQRS",
    ],
  },
  {
    name: { pt: "Cloud & DevOps", en: "Cloud & DevOps" },
    items: [
      "AWS",
      "GCP",
      "Cloudflare",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
    ],
  },
  {
    name: { pt: "Engenharia", en: "Engineering" },
    items: [
      "Git",
      "Linux",
      "Testing",
      "Observability",
      "Performance",
      "Security",
    ],
  },
];
