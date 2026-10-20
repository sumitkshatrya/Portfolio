import { motion as Motion } from "framer-motion";
import { FiCheckCircle, FiCode, FiCpu, FiDatabase, FiLock } from "react-icons/fi";
import { engineeringPillars } from "../data/engineeringData";

const pillarIcons = {
  "01": FiCode,
  "02": FiLock,
  "03": FiDatabase,
  "04": FiCpu,
};

const EngineeringApproach = () => {
  return (
    <section id="approach" className="section-shell relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="section-eyebrow">Methodology & Craft</p>
          <h2 className="section-title mt-3">
            How I approach software engineering.
          </h2>
          <p className="section-copy">
            Principles grounded in production deployments, quantifiable performance
            optimizations, and real-world system architecture.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {engineeringPillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.number] || FiCode;

            return (
              <Motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="editorial-card flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between border-b border-dark-border pb-4">
                    <span className="font-mono text-sm font-bold text-accent-violetLight">
                      {pillar.number} // PILLAR
                    </span>
                    <div className="grid h-8 w-8 place-items-center rounded-md border border-dark-border bg-dark-card text-editorial-muted">
                      <Icon className="h-4 w-4 text-accent-blue" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-lg font-bold text-editorial-primary sm:text-xl">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs leading-relaxed text-editorial-muted sm:text-sm">
                    {pillar.description}
                  </p>

                  {/* Concrete Real Evidence Callout */}
                  <div className="mt-5 rounded-lg border border-dark-border/80 bg-dark-base/80 p-3.5">
                    <div className="flex items-start gap-2.5">
                      <FiCheckCircle className="h-4 w-4 text-emerald-400 flex-none mt-0.5" />
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-editorial-subtle block">
                          Verified Project Implementation:
                        </span>
                        <p className="mt-0.5 text-xs text-editorial-primary leading-relaxed">
                          {pillar.evidence}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags Footer */}
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-dark-border/60 pt-4">
                  {pillar.tags.map((tag) => (
                    <span key={tag} className="tech-pill text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproach;

