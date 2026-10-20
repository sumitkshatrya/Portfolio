import { motion as Motion } from "framer-motion";
import {
  FiAward,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiShield,
} from "react-icons/fi";
import profileImg from "../assets/sk.jpg";
import { profileData } from "../data/profileData";

const capabilities = [
  {
    icon: FiCode,
    title: "Intuitive Interfaces",
    desc: "Component-driven UIs with React and Tailwind CSS that prioritize hierarchy, accessibility, and fluid responsiveness.",
  },
  {
    icon: FiLayers,
    title: "Full-Stack API Design",
    desc: "RESTful architecture with Node.js and Express, implementing route validation, error handling, and clean contract boundaries.",
  },
  {
    icon: FiShield,
    title: "Authentication & RBAC",
    desc: "Robust security models using JSON Web Tokens (JWT), role-based authorization guards, and sanitized data inputs.",
  },
  {
    icon: FiDatabase,
    title: "Database Modeling",
    desc: "Efficient MongoDB schema design and aggregation pipelines designed for high-throughput searching and sorting.",
  },
  {
    icon: FiCpu,
    title: "AI Integration",
    desc: "Embedding LLM capabilities (OpenAI API, prompt pipelines) into production workflows for real-time triage and dynamic content.",
  },
  {
    icon: FiAward,
    title: "Reliable Deployment",
    desc: "Shipping tested web apps via Git, GitHub, Vercel, and Render with automated CI/CD checks and performance audits.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-shell relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="section-eyebrow">About & Philosophy</p>
          <h2 className="section-title mt-3">
            Bridging analytical mathematics with practical web engineering.
          </h2>
        </div>

        {/* Main Grid: Portrait & Editorial Narrative */}
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Portrait & Credentials Card */}
          <div className="lg:col-span-5">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-dark-border bg-dark-surface p-2.5 shadow-xl transition-all hover:border-dark-borderHover"
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-xl bg-dark-base">
                <img
                  src={profileImg}
                  alt="Sumit Kumar — Full Stack Developer"
                  loading="lazy"
                  className="h-full w-full object-cover object-top filter grayscale contrast-105 transition-all duration-500 group-hover:filter-none group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent opacity-80" />

                {/* Overlay Metadata Tag */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 rounded-lg border border-dark-border bg-dark-surface/90 p-3 sm:p-3.5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-editorial-primary">
                        Sumit Kumar
                      </p>
                      <p className="font-mono text-[11px] sm:text-xs text-editorial-muted">
                        Moradabad, UP, India
                      </p>
                    </div>
                    <span className="rounded bg-accent-violet/20 border border-accent-violet/30 px-2 py-0.5 font-mono text-[10px] text-accent-violetLight">
                      MCA 2025
                    </span>
                  </div>
                </div>
              </div>

              {/* Education Snippet under portrait */}
              <div className="mt-3.5 space-y-2 p-2 font-mono text-xs text-editorial-muted max-w-md mx-auto lg:max-w-none">
                <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                  <span>IIMT College of Engg. (AKTU)</span>
                  <span className="text-editorial-subtle">MCA</span>
                </div>
                <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap border-t border-dark-border/60 pt-2">
                  <span>Hindu College, Moradabad</span>
                  <span className="text-editorial-subtle">B.Sc. Math</span>
                </div>
              </div>
            </Motion.div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Editorial Paragraphs */}
            <div className="space-y-5 text-base leading-relaxed text-editorial-muted">
              {profileData.aboutNarrative.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Philosophy Blockquote */}
            <div className="relative rounded-xl border-l-2 border-accent-violet bg-dark-surface/60 p-6 backdrop-blur-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-accent-violetLight">
                Engineering Philosophy
              </span>
              <blockquote className="mt-2 text-base font-medium italic text-editorial-primary leading-relaxed sm:text-lg">
                &ldquo;{profileData.philosophy}&rdquo;
              </blockquote>
            </div>

            {/* Core Capability Matrix */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-editorial-subtle mb-4">
                What I Bring to Engineering Teams
              </h3>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={cap.title}
                      className="rounded-lg border border-dark-border bg-dark-surface/50 p-4 transition-colors hover:border-dark-borderHover hover:bg-dark-card/50"
                    >
                      <div className="flex items-center gap-2.5 text-editorial-primary">
                        <Icon className="h-4 w-4 text-accent-violetLight flex-none" />
                        <h4 className="text-sm font-semibold">{cap.title}</h4>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-editorial-muted">
                        {cap.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
