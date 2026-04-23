import Spline from "@splinetool/react-spline";
import { motion as Motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiExternalLink } from "react-icons/fi";

const stats = [
  { value: "7+", label: "Projects" },
  { value: "MERN", label: "Stack" },
  { value: "2025", label: "MCA" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(251,191,36,0.14),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0),#020617_92%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div>
          <Motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow"
          >
            MERN Stack Developer
          </Motion.p>

          <Motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl"
          >
            Building fast, reliable web apps with product-level detail.
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            I build production-ready React and MERN applications with clean APIs, responsive UI, authentication, dashboards, and deployment workflows.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <FiExternalLink className="h-4 w-4" />
            </a>
            <a href="/resume.pdf" className="btn-secondary" download>
              Resume
              <FiDownload className="h-4 w-4" />
            </a>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="relative min-h-[360px] lg:min-h-[620px]"
        >
          <Spline
            className="absolute inset-0 h-full w-full scale-125 sm:scale-110 lg:scale-125"
            scene="https://prod.spline.design/ZH0N0X5EF3nNQdC1/scene.splinecode"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
        </Motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-white/15 bg-white/5 p-3 text-slate-300 backdrop-blur transition hover:border-cyan-300/60 hover:text-white md:grid"
        aria-label="Scroll to about"
      >
        <FiArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
