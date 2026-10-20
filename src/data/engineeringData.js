export const engineeringPillars = [
  {
    id: "components",
    number: "01",
    title: "Reusable Component Architecture",
    description:
      "Crafting modular, single-responsibility UI elements in React that isolate state, enforce consistent styling tokens, and eliminate code duplication across large applications.",
    evidence:
      "Reduced code duplication by 30% across 3 single-page applications at PearlThoughts by implementing design tokens and composable React components.",
    tags: ["React.js", "Modularity", "Design Tokens", "State Isolation"],
  },
  {
    id: "auth-security",
    number: "02",
    title: "Authentication & Role-Based Access",
    description:
      "Implementing resilient security perimeters with JSON Web Tokens (JWT), httpOnly cookie patterns, password hashing (bcrypt), and strict role guards separating user types.",
    evidence:
      "Engineered multi-tenant RBAC in MediCore and AI Interview Agent, isolating patient, doctor, administrator, and candidate capabilities.",
    tags: ["JWT", "RBAC", "Route Guards", "Secure Cookies"],
  },
  {
    id: "data-modeling",
    number: "03",
    title: "Data Modeling & Aggregation Pipelines",
    description:
      "Designing clean schema contracts in MongoDB and relational databases with deliberate indexing to power multi-criteria filtering, pagination, and real-time summaries.",
    evidence:
      "Constructed MongoDB aggregation search queries for the Real Estate Platform, slashing property filtering latency and reducing manual listing overhead by 40%.",
    tags: ["MongoDB", "Aggregation", "Indexing", "Query Optimization"],
  },
  {
    id: "production-ai",
    number: "04",
    title: "Production Reliability & AI Integration",
    description:
      "Treating LLM endpoints as structured, typed microservices with prompt guardrails, fallback states, graceful error boundaries, and CI/CD deployment pipelines on Vercel and Render.",
    evidence:
      "Integrated OpenAI API with progressive streaming, timeout handling, and structured response parsing in AI Interview Agent and MediCore triage.",
    tags: ["OpenAI API", "Prompt Engineering", "CI/CD", "Error Boundaries"],
  },
];

