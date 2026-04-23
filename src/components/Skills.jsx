import { motion as Motion } from "framer-motion";
import { FaBolt, FaCode, FaCss3Alt, FaDatabase, FaGithub, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { SiBootstrap, SiC, SiMongodb, SiMysql, SiNetlify, SiPostman, SiRailway, SiRender, SiTailwindcss, SiVercel } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, tone: "text-orange-300" },
  { name: "CSS3", icon: FaCss3Alt, tone: "text-blue-300" },
  { name: "JavaScript", icon: FaCode, tone: "text-yellow-300" },
  { name: "React.js", icon: FaReact, tone: "text-cyan-300" },
  { name: "Tailwind CSS", icon: SiTailwindcss, tone: "text-sky-300" },
  { name: "Bootstrap 5", icon: SiBootstrap, tone: "text-violet-300" },
  { name: "Java", icon: FaJava, tone: "text-red-300" },
  { name: "C Language", icon: SiC, tone: "text-blue-300" },
];

const tools = [
  { name: "Git & GitHub", icon: FaGithub, tone: "text-slate-200" },
  { name: "VS Code", icon: FaCode, tone: "text-blue-300" },
  { name: "MySQL", icon: SiMysql, tone: "text-sky-300" },
  { name: "MongoDB", icon: SiMongodb, tone: "text-emerald-300" },
  { name: "REST APIs", icon: FaDatabase, tone: "text-amber-300" },
  { name: "Postman", icon: SiPostman, tone: "text-orange-300" },
  { name: "Thunder Client", icon: FaBolt, tone: "text-indigo-300" },
  { name: "Vercel", icon: SiVercel, tone: "text-slate-200" },
  { name: "Netlify", icon: SiNetlify, tone: "text-teal-300" },
  { name: "Render", icon: SiRender, tone: "text-purple-300" },
  { name: "Railway", icon: SiRailway, tone: "text-rose-300" },
];

const SkillGrid = ({ items }) => (
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
    {items.map((item, index) => {
      const Icon = item.icon;
      return (
        <Motion.div
          key={item.name}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.42, delay: index * 0.04 }}
          whileHover={{ y: -6 }}
          className="skill-card"
        >
          <Icon className={`h-9 w-9 ${item.tone}`} />
          <span className="mt-4 text-center text-sm font-bold text-white">{item.name}</span>
        </Motion.div>
      );
    })}
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section-shell bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="section-eyebrow"
          >
            Technical Stack
          </Motion.p>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="section-title"
          >
            Tools I use to ship reliable applications
          </Motion.h2>
        </div>

        <SkillGrid items={skills} />

        <div className="mt-14 border-t border-white/10 pt-10">
          <h3 className="mb-6 text-2xl font-black text-white">Tools, databases, and deployment</h3>
          <SkillGrid items={tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
