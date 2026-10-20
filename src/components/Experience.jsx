import { motion as Motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiDownload,
  FiFileText,
  FiMapPin,
} from "react-icons/fi";
import {
  certificationsData,
  educationData,
  workExperiences,
} from "../data/experienceData";

const Experience = () => {
  return (
    <section id="experience" className="section-shell bg-dark-base relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="section-eyebrow">Career Timeline</p>
          <h2 className="section-title mt-3">
            Practical experience, education & verified credentials.
          </h2>
          <p className="section-copy">
            Hands-on software development across enterprise and startup teams, supported
            by rigorous academic foundations in computer applications and mathematics.
          </p>
        </div>

        {/* Timeline Grid: Work Experience (Left/Wide) + Education & Certifications (Right) */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Work Experience Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-violetLight">
              <FiBriefcase className="h-4 w-4" />
              <span>Professional & Internship Experience</span>
            </div>

            <div className="relative border-l border-dark-border pl-6 sm:pl-8 space-y-10">
              {workExperiences.map((exp, index) => (
                <Motion.article
                  key={exp.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative group"
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-dark-base bg-accent-violet group-hover:scale-125 transition-transform" />

                  <div className="editorial-card !p-6">
                    {/* Role & Period */}
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-editorial-primary">
                          {exp.role}
                        </h3>
                        <p className="mt-0.5 text-sm font-semibold text-accent-violetLight">
                          {exp.organization}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-xs text-editorial-muted">
                        <FiCalendar className="h-3.5 w-3.5 text-editorial-subtle" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Metadata Sub-row */}
                    <div className="mt-2 flex items-center gap-3 font-mono text-xs text-editorial-subtle">
                      <span className="flex items-center gap-1">
                        <FiMapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                      <span>·</span>
                      <span className="rounded bg-dark-card border border-dark-border px-2 py-0.5 text-[10px]">
                        {exp.type}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="mt-4 text-xs leading-relaxed text-editorial-muted sm:text-sm">
                      {exp.summary}
                    </p>

                    {/* Key Bullet Points from Resume */}
                    <ul className="mt-4 space-y-2 text-xs text-editorial-muted sm:text-sm">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-violetLight flex-none" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Used */}
                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-dark-border/60 pt-4">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-pill text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Verified Certificate Download */}
                    {exp.certificate && (
                      <div className="mt-4 pt-2">
                        <a
                          href={exp.certificate}
                          download
                          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-accent-violetLight hover:text-white transition-colors"
                        >
                          <FiDownload className="h-3.5 w-3.5" />
                          <span>{exp.certificateLabel || "View Certificate"}</span>
                          <FiArrowUpRight className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </Motion.article>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div className="lg:col-span-5 space-y-10">
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-blue mb-6">
                <FiBookOpen className="h-4 w-4" />
                <span>Academic Education</span>
              </div>

              <div className="space-y-4">
                {educationData.map((edu, idx) => (
                  <Motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="editorial-card !p-5"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-base font-bold text-editorial-primary">
                        {edu.degree}
                      </h4>
                      <span className="font-mono text-xs text-editorial-subtle flex-none">
                        {edu.period}
                      </span>
                    </div>

                    <p className="mt-1 text-sm font-medium text-editorial-muted">
                      {edu.institution}
                    </p>
                    {edu.affiliation && (
                      <p className="font-mono text-xs text-editorial-subtle">
                        {edu.affiliation} · {edu.location}
                      </p>
                    )}

                    <p className="mt-3 text-xs leading-relaxed text-editorial-muted">
                      {edu.focus}
                    </p>

                    <div className="mt-3 rounded border border-dark-border/60 bg-dark-base/60 p-2.5 font-mono text-[11px] text-accent-violetLight">
                      {edu.highlight}
                    </div>
                  </Motion.div>
                ))}
              </div>
            </div>

            {/* Certifications & Research */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400 mb-6">
                <FiAward className="h-4 w-4" />
                <span>Certifications & Research</span>
              </div>

              <div className="space-y-3">
                {certificationsData.map((cert) => {
                  const Wrapper = cert.file ? "a" : "div";

                  return (
                    <Wrapper
                      key={cert.id}
                      href={cert.file || undefined}
                      download={cert.file ? true : undefined}
                      className={`editorial-card !p-4 flex items-center justify-between group ${
                        cert.file ? "cursor-pointer hover:border-accent-violet/40" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="grid h-8 w-8 place-items-center rounded-lg border border-dark-border bg-dark-card text-emerald-400">
                          <FiCheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-editorial-primary group-hover:text-white transition-colors">
                            {cert.name}
                          </p>
                          <p className="text-xs text-editorial-muted">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      {cert.hasDownload && (
                        <span className="inline-flex items-center gap-1 font-mono text-xs text-accent-violetLight group-hover:text-white transition-colors">
                          <FiDownload className="h-3.5 w-3.5" />
                          <span className="hidden sm:inline">PDF</span>
                        </span>
                      )}
                    </Wrapper>
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

export default Experience;
