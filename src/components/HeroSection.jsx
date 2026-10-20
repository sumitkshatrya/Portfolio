import { motion as Motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { profileData } from "../data/profileData";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("stack");

  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Editorial ambient gradients */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent-violet/15 via-accent-blue/10 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-70"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Left Column: Editorial Headline & Positioning */}
          <div className="lg:col-span-7">
            {/* Status Pill */}
            <Motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-dark-border bg-dark-surface/90 px-3.5 py-1.5 backdrop-blur-sm shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs font-medium text-editorial-muted">
                {profileData.availability.status}
              </span>
            </Motion.div>

            {/* Eyebrow */}
            <Motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="section-eyebrow"
            >
              {profileData.eyebrow}
            </Motion.p>

            {/* Main Headline */}
            <Motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-4 text-4xl font-extrabold tracking-tight text-editorial-primary sm:text-6xl lg:text-7xl leading-[1.08]"
            >
              Engineering{" "}
              <span className="bg-gradient-to-r from-accent-violetLight via-accent-violet to-accent-blue bg-clip-text text-transparent">
                thoughtful digital
              </span>{" "}
              experiences.
            </Motion.h1>

            {/* Supporting Copy */}
            <Motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-editorial-muted sm:text-lg sm:leading-8"
            >
              {profileData.subheadline}
            </Motion.p>

            {/* Call to Actions */}
            <Motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a href="#projects" className="btn-primary group">
                Explore My Work
                <FiArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href={profileData.socials.resume}
                download
                className="btn-secondary group font-mono text-xs"
              >
                <FiDownload className="h-4 w-4 text-accent-violetLight transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </a>

              <a href="#contact" className="btn-ghost">
                Let&apos;s Talk
              </a>
            </Motion.div>

            {/* Social Anchors */}
            <Motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="mt-10 flex items-center gap-4 text-editorial-muted"
            >
              <span className="font-mono text-xs tracking-wider uppercase text-editorial-subtle">
                Connect:
              </span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-editorial-muted hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub className="h-3.5 w-3.5" />
                <span>GitHub</span>
                <FiArrowUpRight className="h-3 w-3 opacity-60" />
              </a>
              <span className="text-dark-border">/</span>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-editorial-muted hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
                <FiArrowUpRight className="h-3 w-3 opacity-60" />
              </a>
              <span className="text-dark-border">/</span>
              <a
                href="mailto:skumar21082001@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-editorial-muted hover:text-white transition-colors"
                aria-label="Email Sumit"
              >
                <FiMail className="h-3.5 w-3.5" />
                <span>Email</span>
              </a>
            </Motion.div>
          </div>

          {/* Right Column: Original CSS Technical Composition (Zero-Lag, Instant Load) */}
          <div className="lg:col-span-5">
            <Motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl border border-dark-border bg-dark-surface/90 p-5 shadow-2xl backdrop-blur-md"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-dark-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-editorial-subtle">
                    sumit@fullstack-runtime ~ v2.4
                  </span>
                </div>
                <div className="flex items-center gap-1 rounded border border-dark-border bg-dark-base px-2 py-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] text-editorial-muted">Live</span>
                </div>
              </div>

              {/* Composition Interactive Tabs */}
              <div className="mt-4 flex gap-1 rounded-lg border border-dark-border bg-dark-base/80 p-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("stack")}
                  className={`flex-1 rounded-md py-1.5 text-center font-mono text-xs font-medium transition-all ${
                    activeTab === "stack"
                      ? "bg-dark-card text-editorial-primary shadow-sm"
                      : "text-editorial-muted hover:text-editorial-primary"
                  }`}
                >
                  Core Pipeline
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("ai")}
                  className={`flex-1 rounded-md py-1.5 text-center font-mono text-xs font-medium transition-all ${
                    activeTab === "ai"
                      ? "bg-dark-card text-editorial-primary shadow-sm"
                      : "text-editorial-muted hover:text-editorial-primary"
                  }`}
                >
                  AI & RAG Engine
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("metrics")}
                  className={`flex-1 rounded-md py-1.5 text-center font-mono text-xs font-medium transition-all ${
                    activeTab === "metrics"
                      ? "bg-dark-card text-editorial-primary shadow-sm"
                      : "text-editorial-muted hover:text-editorial-primary"
                  }`}
                >
                  Verified Output
                </button>
              </div>

              {/* Tab Contents */}
              <div className="mt-4 min-h-[290px] rounded-lg border border-dark-border bg-dark-base/95 p-4 font-mono text-xs">
                {activeTab === "stack" && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between text-editorial-subtle">
                      <span>// Production MERN Architecture</span>
                      <span className="text-accent-violetLight">REST + JWT</span>
                    </div>

                    <div className="rounded border border-dark-border/80 bg-dark-surface/50 p-2.5">
                      <div className="flex items-center gap-2 text-editorial-primary">
                        <FiGlobe className="h-4 w-4 text-accent-blue" />
                        <span className="font-semibold">Client Tier</span>
                        <span className="text-editorial-subtle">·</span>
                        <span className="text-[11px] text-editorial-muted">React.js + Vite + Tailwind</span>
                      </div>
                      <p className="mt-1 text-[11px] text-editorial-subtle">
                        Modular component trees, responsive layouts, code splitting.
                      </p>
                    </div>

                    <div className="rounded border border-dark-border/80 bg-dark-surface/50 p-2.5">
                      <div className="flex items-center gap-2 text-editorial-primary">
                        <FiLayers className="h-4 w-4 text-accent-violetLight" />
                        <span className="font-semibold">API Tier</span>
                        <span className="text-editorial-subtle">·</span>
                        <span className="text-[11px] text-editorial-muted">Node.js + Express + JWT RBAC</span>
                      </div>
                      <p className="mt-1 text-[11px] text-editorial-subtle">
                        RESTful controllers, role guards, WebSocket event broadcasts.
                      </p>
                    </div>

                    <div className="rounded border border-dark-border/80 bg-dark-surface/50 p-2.5">
                      <div className="flex items-center gap-2 text-editorial-primary">
                        <FiDatabase className="h-4 w-4 text-emerald-400" />
                        <span className="font-semibold">Data Tier</span>
                        <span className="text-editorial-subtle">·</span>
                        <span className="text-[11px] text-editorial-muted">MongoDB + Aggregations</span>
                      </div>
                      <p className="mt-1 text-[11px] text-editorial-subtle">
                        Optimized indexing, multi-stage pipelines, sub-50ms queries.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "ai" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-editorial-subtle">
                      <span>// AI Orchestration Flow</span>
                      <span className="text-emerald-400">OpenAI API</span>
                    </div>

                    <div className="space-y-2 text-[11px] text-editorial-muted">
                      <p className="text-editorial-primary">
                        <span className="text-accent-violetLight">const</span> agent ={" "}
                        <span className="text-accent-blue">new</span> InterviewOrchestrator(&#123;
                      </p>
                      <p className="pl-4">
                        model: <span className="text-emerald-300">&quot;gpt-4o&quot;</span>,
                      </p>
                      <p className="pl-4">
                        systemPrompt: <span className="text-amber-300">&quot;Technical interviewer analyzing code clarity&quot;</span>,
                      </p>
                      <p className="pl-4">
                        evaluation: [
                        <span className="text-emerald-300">&quot;syntax&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;confidence&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;communication&quot;</span>
                        ],
                      </p>
                      <p className="text-editorial-primary">&#125;);</p>
                    </div>

                    <div className="mt-3 rounded border border-accent-violet/30 bg-accent-violet/10 p-2.5">
                      <div className="flex items-center gap-2 text-accent-violetLight font-medium">
                        <FiCpu className="h-3.5 w-3.5" />
                        <span>Symptom Triage & Summarizer</span>
                      </div>
                      <p className="mt-1 text-[10px] text-editorial-muted">
                        Streaming clinical insights, medical report summaries, and dynamic question trees.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "metrics" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-editorial-subtle">
                      <span>// Verified Engineering Impact</span>
                      <span className="text-amber-400">Resume Metrics</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <div className="rounded border border-dark-border bg-dark-surface p-2.5">
                        <span className="text-lg font-bold text-accent-violetLight">20%</span>
                        <p className="text-[10px] text-editorial-muted mt-0.5">Faster load time via optimization</p>
                      </div>
                      <div className="rounded border border-dark-border bg-dark-surface p-2.5">
                        <span className="text-lg font-bold text-accent-blue">40%</span>
                        <p className="text-[10px] text-editorial-muted mt-0.5">Reduced manual listing effort</p>
                      </div>
                      <div className="rounded border border-dark-border bg-dark-surface p-2.5">
                        <span className="text-lg font-bold text-emerald-400">30%</span>
                        <p className="text-[10px] text-editorial-muted mt-0.5">Code duplication reduction</p>
                      </div>
                      <div className="rounded border border-dark-border bg-dark-surface p-2.5">
                        <span className="text-lg font-bold text-purple-400">100%</span>
                        <p className="text-[10px] text-editorial-muted mt-0.5">Cross-browser responsive UI</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded border border-dark-border bg-dark-surface/60 px-3 py-2 text-[10px] text-editorial-muted">
                      <FiCheckCircle className="h-3.5 w-3.5 text-emerald-400 flex-none" />
                      <span>Documented in internships & production deployments.</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Quick Specs Footer */}
              <div className="mt-4 flex items-center justify-between pt-2 text-[11px] font-mono text-editorial-subtle">
                <span>Frontend: React 19 + Tailwind</span>
                <span>Backend: Node + Express + Mongo</span>
              </div>
            </Motion.div>
          </div>
        </div>

        {/* Floating Quick Stat Bar */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {profileData.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="editorial-card !p-4 flex flex-col justify-between"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-editorial-subtle">
                0{idx + 1}
              </span>
              <div className="mt-2">
                <span className="text-2xl font-black text-editorial-primary tracking-tight">
                  {stat.value}
                </span>
                <p className="mt-0.5 text-xs text-editorial-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
