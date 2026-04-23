import { motion as Motion } from "framer-motion";
import { FiArrowUpRight, FiBriefcase, FiCheckCircle } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    role: "MERN Stack Developer",
    company: "The Entrepreneurship Network",
    period: "Aug 2025 - Nov 2025",
    type: "Internship",
    description:
      "Developed a Real Estate Platform with property management, admin CRUD, testimonials, REST APIs, authentication, and responsive React interfaces.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
  },
  {
    id: 2,
    role: "Frontend Development Intern",
    company: "PearlThoughts",
    period: "July 2025 - Aug 2025",
    type: "Remote",
    description:
      "Built reusable React single-page application views, integrated REST APIs, improved UI fidelity, and deployed applications with Git/GitHub workflows.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Bootstrap", "Git", "GitHub"],
    certificate: "/Sumit Pearl Thoughts internship.pdf",
  },
];

const certifications = [
  { name: "JavaScript for Beginners", issuer: "Udemy", file: "/java script for beginner certificate.pdf" },
  { name: "Java Programming", issuer: "Anudip Foundation" },
  { name: "Smart Cities Research Paper", issuer: "IJCRT", file: "/IJCRT_Certificate_IJCRT_286965.pdf" },
];

const Experience = () => {
  return (
    <section id="experience" className="section-shell bg-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="section-eyebrow"
          >
            Experience
          </Motion.p>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="section-title"
          >
            Practical full-stack work and certifications
          </Motion.h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <div className="relative grid gap-5">
            {experiences.map((exp, index) => (
              <Motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/20"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="grid h-12 w-12 flex-none place-items-center rounded-lg bg-cyan-400/12 text-cyan-300">
                      <FiBriefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                      <p className="mt-1 text-sm font-semibold text-slate-300">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm font-bold text-amber-300">{exp.period}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{exp.type}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-300">{exp.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.certificate && (
                  <a href={exp.certificate} download className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-white">
                    Certificate
                    <FiArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </Motion.article>
            ))}
          </div>

          <Motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/20"
          >
            <h3 className="text-2xl font-black text-white">Certifications</h3>
            <div className="mt-6 grid gap-4">
              {certifications.map((cert) => {
                const Wrapper = cert.file ? "a" : "div";

                return (
                <Wrapper
                  key={cert.name}
                  href={cert.file}
                  download={cert.file ? true : undefined}
                  className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/40 hover:bg-white/[0.06]"
                >
                  <FiCheckCircle className="mt-1 h-5 w-5 flex-none text-emerald-300" />
                  <span>
                    <span className="block font-bold text-white">{cert.name}</span>
                    <span className="mt-1 block text-sm text-slate-400">{cert.issuer}</span>
                  </span>
                </Wrapper>
                );
              })}
            </div>
          </Motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Experience;
