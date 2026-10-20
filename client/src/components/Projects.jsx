import { motion as Motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
  FiLock,
  FiShield,
} from "react-icons/fi";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "featured") return project.featured;
    if (filter === "ai")
      return (
        project.technologies.some(
          (t) =>
            t.toLowerCase().includes("openai") ||
            t.toLowerCase().includes("ai") ||
            t.toLowerCase().includes("gemini")
        ) ||
        project.category.toLowerCase().includes("ai") ||
        project.tagline.toLowerCase().includes("ai")
      );
    return true;
  });

  const featuredProjects = projectsData.filter((p) => p.featured);
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-shell bg-dark-base relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Portfolio Case Studies</p>
            <h2 className="section-title mt-3">
              Production systems engineered for real utility.
            </h2>
            <p className="section-copy">
              A curated selection of full-stack web applications, AI-integrated
              platforms, and distributed systems built with React, Node.js, and MongoDB.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-dark-border bg-dark-surface p-1">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                filter === "all"
                  ? "bg-accent-violet text-white shadow-sm"
                  : "text-editorial-muted hover:text-editorial-primary"
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("featured")}
              className={`rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                filter === "featured"
                  ? "bg-accent-violet text-white shadow-sm"
                  : "text-editorial-muted hover:text-editorial-primary"
              }`}
            >
              Featured Case Studies ({featuredProjects.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("ai")}
              className={`rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                filter === "ai"
                  ? "bg-accent-violet text-white shadow-sm"
                  : "text-editorial-muted hover:text-editorial-primary"
              }`}
            >
              AI Integrations
            </button>
          </div>
        </div>

        {/* Featured Case Studies (Asymmetric Large Presentations) */}
        <div className="mt-16 space-y-20 lg:space-y-24">
          {filteredProjects
            .filter((p) => (filter === "all" ? p.featured : true))
            .map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <Motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55 }}
                  className="rounded-2xl border border-dark-border bg-dark-surface p-5 sm:p-8 lg:p-10 shadow-2xl"
                >
                  <div
                    className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
                      isEven ? "" : "lg:[&>*:first-child]:order-2"
                    }`}
                  >
                    {/* Project Information */}
                    <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                      {/* Meta Pill Row */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                        <span className="font-mono text-xs text-accent-violetLight bg-accent-violet/10 border border-accent-violet/30 px-2.5 py-0.5 rounded">
                          {project.year}
                        </span>
                        <span className="font-mono text-xs text-editorial-muted bg-dark-card border border-dark-border px-2.5 py-0.5 rounded">
                          {project.category}
                        </span>
                        {project.badge && (
                          <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                            {project.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Value Proposition */}
                      <div>
                        <h3 className="text-xl font-black text-editorial-primary sm:text-3xl lg:text-4xl leading-tight">
                          {project.title}
                        </h3>
                        <p className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-editorial-muted sm:text-base">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Engineering Challenge & Architecture */}
                      <div className="space-y-3 rounded-xl border border-dark-border/80 bg-dark-base/60 p-4 font-mono text-xs">
                        <div>
                          <span className="font-semibold text-accent-violetLight uppercase tracking-wider text-[11px] block">
                            Problem
                          </span>
                          <p className="mt-1 text-editorial-muted font-sans text-xs sm:text-sm leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                        <div className="border-t border-dark-border/60 pt-3">
                          <span className="font-semibold text-accent-blue uppercase tracking-wider text-[11px] block">
                            Architecture & Solution
                          </span>
                          <p className="mt-1 text-editorial-muted font-sans text-xs sm:text-sm leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Technical Contributions Checklist */}
                      <div>
                        <span className="font-mono text-xs uppercase tracking-wider text-editorial-subtle block mb-2">
                          Key Technical Contributions:
                        </span>
                        <ul className="space-y-2 text-xs text-editorial-muted sm:text-sm">
                          {project.contributions.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <FiCheckCircle className="h-4 w-4 text-accent-violetLight flex-none mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-pill">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                          >
                            <span>Live Deployment</span>
                            <FiExternalLink className="h-4 w-4" />
                          </a>
                        )}

                        {project.adminUrl && (
                          <a
                            href={project.adminUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary !border-accent-violet/30 hover:!border-accent-violet/70"
                          >
                            <FiShield className="h-4 w-4 text-accent-violetLight" />
                            <span>Admin Portal</span>
                            <FiArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                          >
                            <FiGithub className="h-4 w-4" />
                            <span>Repository</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Realistic CSS Application Visual Preview */}
                    <div className="lg:col-span-6">
                      <div className="overflow-hidden rounded-xl border border-dark-border bg-dark-base shadow-2xl">
                        {/* Browser Window Header */}
                        <div className="flex items-center justify-between border-b border-dark-border bg-dark-card/90 px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <div className="flex items-center gap-1.5 sm:gap-2 rounded border border-dark-border bg-dark-base px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px] text-editorial-subtle max-w-[170px] xs:max-w-[220px] sm:max-w-xs">
                            {project.liveUrl ? (
                              <>
                                <FiLock className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                                <span className="truncate">
                                  {project.liveUrl
                                    .replace(/^https?:\/\//, "")
                                    .replace(/\/$/, "")}
                                </span>
                              </>
                            ) : (
                              <span>Private build</span>
                            )}
                          </div>
                          <span className="font-mono text-[10px] text-editorial-subtle hidden xs:inline">
                            {project.liveUrl ? "HTTPS" : "Local"}
                          </span>
                        </div>

                        {/* Interactive UI Mockup Representation */}
                        <div className="p-4 sm:p-6 bg-gradient-to-b from-dark-surface to-dark-base min-h-[320px] sm:min-h-[340px] flex flex-col justify-between">
                          {/* Top UI Bar inside mockup */}
                          <div className="flex items-center justify-between border-b border-dark-border/60 pb-3 gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="h-6 w-6 rounded bg-accent-violet/20 border border-accent-violet/40 grid place-items-center font-mono text-xs text-accent-violetLight font-bold flex-shrink-0">
                                {project.shortName.slice(0, 2).toUpperCase()}
                              </div>
                              <span className="text-xs font-bold text-editorial-primary truncate">
                                {project.shortName}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1 sm:gap-2 justify-end">
                              {project.metrics.slice(0, 2).map((m) => (
                                <span
                                  key={m}
                                  className="rounded bg-dark-card border border-dark-border px-1.5 sm:px-2 py-0.5 font-mono text-[9px] sm:text-[10px] text-editorial-muted"
                                >
                                  {m}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Specific UI Mockup Content Based on Project */}
                          {project.id === "medicore-ai" && (
                            <div className="my-4 space-y-3">
                              <div className="rounded-lg border border-dark-border bg-dark-card p-3">
                                <div className="flex items-center justify-between text-xs font-mono text-editorial-muted flex-wrap gap-1">
                                  <span>Patient Symptom Assessment</span>
                                  <span className="text-emerald-400">OpenAI Triage Active</span>
                                </div>
                                <p className="mt-2 text-xs text-editorial-primary bg-dark-base p-2.5 rounded border border-dark-border/60">
                                  &quot;Experiencing persistent migraines and visual aura for 48 hours...&quot;
                                </p>
                                <div className="mt-2.5 flex items-center justify-between text-[11px] flex-wrap gap-1">
                                  <span className="text-accent-violetLight font-medium">Recommended: Neurologist</span>
                                  <span className="text-editorial-subtle">Confidence: 94%</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center font-mono text-[10px] sm:text-[11px]">
                                <div className="rounded border border-dark-border bg-dark-surface p-2">
                                  <span className="text-editorial-subtle block">Doctor Portal</span>
                                  <span className="text-emerald-400 font-bold">Online</span>
                                </div>
                                <div className="rounded border border-dark-border bg-dark-surface p-2">
                                  <span className="text-editorial-subtle block">RBAC Guard</span>
                                  <span className="text-accent-blue font-bold">JWT Verified</span>
                                </div>
                                <div className="rounded border border-dark-border bg-dark-surface p-2">
                                  <span className="text-editorial-subtle block">EHR Summaries</span>
                                  <span className="text-accent-violetLight font-bold">Automated</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.id === "ai-interview-agent" && (
                            <div className="my-4 space-y-3">
                              <div className="rounded-lg border border-dark-border bg-dark-card p-3">
                                <div className="flex items-center justify-between text-xs font-mono flex-wrap gap-1">
                                  <span className="text-editorial-muted">Role: Senior Frontend Engineer</span>
                                  <span className="text-amber-400">Timer: 02:45</span>
                                </div>
                                <p className="mt-2 text-xs text-editorial-primary bg-dark-base p-2.5 rounded border border-dark-border/60">
                                  &quot;How would you prevent unnecessary React re-renders in a high-frequency WebSocket chart?&quot;
                                </p>
                                <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono flex-wrap gap-1">
                                  <span className="text-emerald-400">AI Feedback: Clarity 92/100</span>
                                  <span className="text-accent-blue">Technical Depth: Solid</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-2 text-center font-mono text-[10px] sm:text-[11px]">
                                <div className="rounded border border-dark-border bg-dark-surface p-2">
                                  <span className="text-editorial-subtle block">Adaptive Prompts</span>
                                  <span className="text-accent-violetLight font-bold">Dynamic Flow</span>
                                </div>
                                <div className="rounded border border-dark-border bg-dark-surface p-2">
                                  <span className="text-editorial-subtle block">Candidate Metrics</span>
                                  <span className="text-emerald-400 font-bold">Real-time Score</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.id === "zentra-ecommerce" && (
                            <div className="my-4 space-y-3">
                              <div className="rounded-lg border border-dark-border bg-dark-card p-3">
                                <div className="flex items-center justify-between text-xs font-mono flex-wrap gap-1">
                                  <span className="text-editorial-muted">Transaction Gateway</span>
                                  <span className="text-emerald-400">Webhook Verified</span>
                                </div>
                                <div className="mt-2 flex items-center justify-between bg-dark-base p-2.5 rounded border border-dark-border/60 text-xs flex-wrap gap-1">
                                  <span className="text-editorial-primary font-medium">Dual Checkout Pipeline</span>
                                  <span className="font-mono text-accent-violetLight">Stripe + Razorpay</span>
                                </div>
                                <div className="mt-2 flex items-center justify-between text-[11px] font-mono flex-wrap gap-1">
                                  <span className="text-editorial-subtle">Inventory Sync: Zero Latency</span>
                                  <span className="text-emerald-400">AI Recommendations</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center font-mono text-[10px] sm:text-[11px]">
                                <div className="rounded border border-dark-border bg-dark-surface p-2">
                                  <span className="text-editorial-subtle block">Cart / Wishlist</span>
                                  <span className="text-accent-blue font-bold">Persistent</span>
                                </div>
                                <div className="rounded border border-dark-border bg-dark-surface p-2">
                                  <span className="text-editorial-subtle block">Order History</span>
                                  <span className="text-emerald-400 font-bold">Indexed</span>
                                </div>
                                <div className="rounded border border-dark-border bg-dark-surface p-2">
                                  <span className="text-editorial-subtle block">Auth Token</span>
                                  <span className="text-accent-violetLight font-bold">JWT Secured</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Fallback mockup for other projects */}
                          {project.id !== "medicore-ai" &&
                            project.id !== "ai-interview-agent" &&
                            project.id !== "zentra-ecommerce" && (
                              <div className="my-4 rounded-lg border border-dark-border bg-dark-card p-4 space-y-3">
                                <div className="flex items-center justify-between text-xs font-mono">
                                  <span className="text-editorial-muted">System State</span>
                                  <span className="text-emerald-400">Operational</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs">
                                  <div className="rounded border border-dark-border bg-dark-base p-2">
                                    <span className="text-editorial-subtle text-[10px] block">Pipeline</span>
                                    <span className="text-accent-violetLight font-bold">RESTful</span>
                                  </div>
                                  <div className="rounded border border-dark-border bg-dark-base p-2">
                                    <span className="text-editorial-subtle text-[10px] block">Database</span>
                                    <span className="text-emerald-400 font-bold">MongoDB</span>
                                  </div>
                                </div>
                              </div>
                            )}

                          {/* Mockup Status Bar */}
                          <div className="flex items-center justify-between pt-2 border-t border-dark-border/60 text-[10px] font-mono text-editorial-subtle">
                            <span>Status: Verified Build</span>
                            <span className="text-accent-violetLight">
                              {project.metrics[0]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Motion.article>
              );
            })}
        </div>

        {/* Secondary Supporting Projects Grid (Clean Editorial Cards) */}
        {filter === "all" && (
          <div className="mt-20">
            <div className="border-t border-dark-border pt-12 pb-8">
              <h3 className="text-xl font-bold text-editorial-primary sm:text-2xl">
                Additional Engineered Systems & Utilities
              </h3>
              <p className="mt-1 text-sm text-editorial-muted">
                Focused applications, real-time communication tools, and data platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {secondaryProjects.map((project) => (
                <Motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                  className="editorial-card flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-accent-violetLight bg-accent-violet/10 border border-accent-violet/30 px-2 py-0.5 rounded">
                          {project.year}
                        </span>
                        <span className="font-mono text-xs text-editorial-subtle">
                          {project.category}
                        </span>
                      </div>
                      {project.badge && (
                        <span className="font-mono text-[10px] text-editorial-muted bg-dark-card border border-dark-border px-2 py-0.5 rounded">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="mt-4 text-xl font-bold text-editorial-primary group-hover:text-accent-violetLight transition-colors">
                      {project.title}
                    </h4>

                    {/* Tagline */}
                    <p className="mt-2 text-xs leading-relaxed text-editorial-muted sm:text-sm">
                      {project.tagline}
                    </p>

                    {/* Technical problem & contribution */}
                    <div className="mt-4 rounded-lg border border-dark-border bg-dark-base/60 p-3 font-mono text-xs">
                      <span className="text-editorial-subtle text-[11px] block">
                        Technical Highlights:
                      </span>
                      <p className="mt-1 text-editorial-muted font-sans text-xs leading-relaxed">
                        {project.contributions[0]}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-pill text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-dark-border/80 pt-4">
                    <div className="flex flex-wrap items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-editorial-primary hover:text-accent-violetLight transition-colors"
                        >
                          <span>Live Demo</span>
                          <FiExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.adminUrl && (
                        <a
                          href={project.adminUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-violetLight hover:text-white transition-colors"
                        >
                          <FiShield className="h-3.5 w-3.5" />
                          <span>Admin Portal</span>
                          <FiArrowUpRight className="h-3 w-3 opacity-60" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-editorial-muted hover:text-editorial-primary transition-colors"
                        >
                          <FiGithub className="h-3.5 w-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>

                    <span className="font-mono text-[11px] text-editorial-subtle">
                      {project.metrics[0]}
                    </span>
                  </div>
                </Motion.article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
