import { motion as Motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiMessageSquare,
  FiHome,
  FiShoppingBag,
  FiBarChart2,
  FiFileText,
  FiGrid,
  FiCpu,
} from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "AI Interview Preparation Platform",
    category: "Featured MERN + AI",
    description:
      "Full-stack platform that simulates role-based interviews, records responses, analyzes performance, and gives AI feedback through a clean candidate dashboard.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "AI Integration", "Tailwind CSS"],
    githubUrl: "https://github.com/sumitkshatrya",
    liveUrl: "https://a-i-interview-client.onrender.com",
    icon: FiCpu,
    accent: "from-cyan-400 via-sky-500 to-indigo-500",
    metrics: ["AI feedback", "JWT auth", "Progress tracking"],
  },
  {
    id: 2,
    title: "Zentra E-commerce",
    category: "Full-stack Commerce",
    description:
      "E-commerce app with product catalog, cart, wishlist, order flow, secure authentication, and Stripe/Razorpay payment integration.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Stripe", "Razorpay"],
    githubUrl: "https://github.com/sumitkshatrya",
    liveUrl: "https://zentra-frontend.vercel.app",
    icon: FiShoppingBag,
    accent: "from-emerald-400 via-teal-500 to-cyan-500",
    metrics: ["Payments", "Orders", "Wishlist"],
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    category: "Messaging Platform",
    description:
      "Socket.io chat platform with secure authentication, private conversations, group chat, typing indicators, and online status.",
    technologies: ["React.js", "Vite", "Node.js", "Express", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/sumitkshatrya",
    liveUrl: "https://chat-app-frontend-omega-sand.vercel.app/",
    icon: FiMessageSquare,
    accent: "from-violet-400 via-fuchsia-500 to-rose-500",
    metrics: ["WebSocket", "Groups", "Presence"],
  },
  {
    id: 4,
    title: "Real Estate Platform",
    category: "MERN Property App",
    description:
      "Property management system with admin CRUD, advanced search and filtering, testimonials, image upload, and inquiry forms.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com/sumitkshatrya",
    liveUrl: "#",
    icon: FiHome,
    accent: "from-amber-300 via-orange-400 to-red-500",
    metrics: ["Admin CRUD", "Search", "Inquiries"],
  },
  {
    id: 5,
    title: "Project Ranking System",
    category: "Evaluation Tool",
    description:
      "Project evaluation and ranking platform with automated scoring based on multiple technical parameters and a responsive dashboard.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/sumitkshatrya",
    liveUrl: "https://ranking-based-frontend.vercel.app/",
    icon: FiBarChart2,
    accent: "from-blue-400 via-indigo-500 to-purple-500",
    metrics: ["Scoring", "Dashboard", "Reports"],
  },
  {
    id: 6,
    title: "Text Utility App",
    category: "React Utility",
    description:
      "Focused React tool for text transformations, word and character counting, whitespace cleanup, and quick content checks.",
    technologies: ["React.js", "JavaScript", "CSS"],
    githubUrl: "https://github.com/sumitkshatrya",
    liveUrl: "https://textutilityrobo.netlify.app",
    icon: FiFileText,
    accent: "from-lime-300 via-green-500 to-emerald-600",
    metrics: ["Transforms", "Counters", "Cleanup"],
  },
  {
    id: 7,
    title: "Tic-Tac-Toe Game",
    category: "Browser Game",
    description:
      "Interactive JavaScript game with clear state handling, win detection, reset flow, and a lightweight responsive interface.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/sumitkshatrya",
    liveUrl: "https://tic-toc-game-mauve.vercel.app/",
    icon: FiGrid,
    accent: "from-pink-400 via-rose-500 to-orange-500",
    metrics: ["Game logic", "Responsive", "Reset"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="section-shell bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="section-eyebrow"
          >
            Selected Work
          </Motion.p>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="section-title"
          >
            Projects built for real product behavior
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="section-copy"
          >
            MERN applications with auth, dashboards, APIs, deployment workflows, and responsive interfaces that stay usable beyond the demo.
          </Motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isFeatured = index === 0;

            return (
              <Motion.article
                key={project.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                whileHover={{ y: -8 }}
                className={`group project-card ${isFeatured ? "md:col-span-2" : ""}`}
              >
                <div className={`project-visual bg-gradient-to-br ${project.accent}`}>
                  <div className="project-browser">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-lg bg-white/18 text-white shadow-lg shadow-black/20 backdrop-blur">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
                        {project.category}
                      </span>
                    </div>
                    <div className="grid gap-2">
                      {project.metrics.map((metric) => (
                        <span key={metric} className="project-metric">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-action">
                      <FiGithub className="h-4 w-4" />
                      Code
                    </a>
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-action">
                        Live
                        <FiArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
