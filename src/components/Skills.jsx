import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Card from "./Card";
import {
  FaReact, FaCode, FaJava, FaDatabase, FaGithub, FaHtml5, FaCss3Alt, FaBolt
} from "react-icons/fa";
import {
  SiTailwindcss, SiBootstrap, SiMysql, SiMongodb, SiC, SiPostman, SiVercel, SiNetlify, SiRender, SiRailway
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-blue-500 text-5xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaCode className="text-yellow-500 text-5xl" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
    { name: "Bootstrap 5", icon: <SiBootstrap className="text-purple-600 text-5xl" /> },
    { name: "Java (Basic)", icon: <FaJava className="text-red-500 text-5xl" /> },
    { name: "C Language (Basic)", icon: <SiC className="text-blue-500 text-5xl" /> },
  ];

  const tools = [
    { name: "Git & GitHub", icon: <FaGithub className="text-gray-300 text-5xl" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-500 text-5xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
    { name: "REST API", icon: <FaDatabase className="text-yellow-500 text-5xl" /> },
    { name: "Postman API", icon: <SiPostman className="text-orange-500 text-5xl" /> },
    { name: "Thunder Client API", icon: <FaBolt className="text-indigo-500 text-5xl" /> },
    { name: "Frontend Deploy (Vercel)", icon: <SiVercel className="text-black text-5xl" /> },
    { name: "Frontend Deploy (Netlify)", icon: <SiNetlify className="text-teal-400 text-5xl" /> },
    { name: "Backend Deploy (Render)", icon: <SiRender className="text-purple-500 text-5xl" /> },
    { name: "Backend Deploy (Railway)", icon: <SiRailway className="text-red-500 text-5xl" /> },
  ];

  const create3DCard = (item) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-50, 50], [15, -15]);
    const rotateY = useTransform(x, [-50, 50], [-15, 15]);

    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      const posX = e.clientX - rect.left - rect.width / 2;
      const posY = e.clientY - rect.top - rect.height / 2;
      x.set(posX / 10);
      y.set(posY / 10);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        key={item.name}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.3 }}
        className="p-8"
      >
        <Card {...item} textSize="3xl md:text-4xl" />
      </motion.div>
    );
  };

  return (
    <section className="py-24 bg-gray-900 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-white drop-shadow-[2px_2px_8px_rgba(128,0,255,0.7)]"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 mb-16">
          {skills.map(create3DCard)}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-white drop-shadow-[2px_2px_8px_rgba(128,0,255,0.7)]"
        >
     Tools & Databases
        </motion.h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          {tools.map(create3DCard)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
