import { motion as Motion } from "framer-motion";
import { FiAward, FiBookOpen, FiCode, FiLayers } from "react-icons/fi";
import profileImg from "../assets/sk.jpg";

const highlights = [
  { icon: FiCode, label: "Frontend", value: "React, Tailwind, responsive UI" },
  { icon: FiLayers, label: "Backend", value: "Node, Express, REST APIs" },
  { icon: FiAward, label: "Focus", value: "Performance, auth, dashboards" },
];

const education = [
  "MCA: IIMT College of Engineering, Greater Noida (2023-2025)",
  "BSc Mathematics: Hindu College, Moradabad (2019-2023)",
  "Intermediate: R.R.K School, Moradabad (2018-2019)",
  "High School: R.R.K School, Moradabad (2016-2017)",
];

const About = () => {
  return (
    <section className="section-shell bg-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[28rem] w-full max-w-md overflow-hidden rounded-3xl"
        >
          <div className="absolute -inset-4 rounded-[2rem] border border-cyan-300/20" />
          <Motion.img
            src={profileImg}
            alt="Sumit Kumar"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative h-full w-full rounded-2xl object-contain shadow-2xl shadow-black/40 hover:shadow-2xl hover:shadow-cyan-400/50 cursor-pointer"
            style={{ originX: 0.5, originY: 0.5 }}
          />
          <div className="absolute -bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-slate-900/90 p-5 shadow-xl shadow-black/30 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Available for work</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Open to MERN, frontend, and full-stack developer roles.</p>
          </div>
        </Motion.div>

        <div>
          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="section-eyebrow"
          >
            About Me
          </Motion.p>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="section-title"
          >
            I turn project ideas into structured, usable web applications.
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 text-lg leading-8 text-slate-300"
          >
            I am Sumit Kumar, a MERN stack developer with hands-on experience building full-stack applications using MongoDB, Express.js, React.js, and Node.js. I care about clean UI, scalable APIs, secure authentication, and interfaces that stay clear on every screen size.
          </Motion.p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <Icon className="h-6 w-6 text-cyan-300" />
                  <p className="mt-4 text-sm font-bold text-white">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.value}</p>
                </Motion.div>
              );
            })}
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.035] p-6">
            <div className="mb-5 flex items-center gap-3">
              <FiBookOpen className="h-5 w-5 text-amber-300" />
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <ul className="grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
              {education.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
