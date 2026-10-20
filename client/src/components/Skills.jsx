import { motion as Motion } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiServer,
  FiTool,
} from "react-icons/fi";
import { skillsData } from "../data/skillsData";

const categoryIcons = {
  "Frontend Engineering": FiGlobe,
  "Backend Engineering": FiServer,
  "Databases & Storage": FiDatabase,
  "AI & GenAI Integrations": FiCpu,
  "Cloud, Deployment & DevOps": FiLayers,
  "APIs, Tools & Productivity": FiTool,
};

const Skills = () => {
  return (
    <section id="skills" className="section-shell relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="section-eyebrow">Technical Capabilities</p>
          <h2 className="section-title mt-3">
            Core stack & engineering competencies.
          </h2>
          <p className="section-copy">
            Technologies, libraries, and protocols actively applied across production
            deployments, internships, and full-stack systems.
          </p>
        </div>

        {/* Categorized Skills Matrix */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((categoryGroup, index) => {
            const Icon = categoryIcons[categoryGroup.category] || FiCode;

            return (
              <Motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="editorial-card flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg border border-dark-border bg-dark-card text-accent-violetLight">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-editorial-primary">
                        {categoryGroup.category}
                      </h3>
                      <p className="text-xs text-editorial-muted">
                        {categoryGroup.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {categoryGroup.items.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-mono transition-colors ${
                          skill.highlight
                            ? "border border-accent-violet/30 bg-accent-violet/10 text-accent-violetLight font-medium"
                            : "border border-dark-border bg-dark-base text-editorial-muted hover:border-dark-borderHover hover:text-editorial-primary"
                        }`}
                      >
                        {skill.highlight && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-violetLight" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Subtext */}
                <div className="mt-6 border-t border-dark-border/60 pt-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-editorial-subtle">
                    <span>Active Production Use</span>
                    <span className="text-accent-violetLight font-semibold">Verified</span>
                  </div>
                </div>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
