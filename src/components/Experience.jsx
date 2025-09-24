import { motion } from "framer-motion"

const Experience = () => {
  const experiences = [
    
    {
      id: 1,
      role: "Java Programming",
      company: "Anudip Foundation",
      period: "2025",
      description:
        "Completed comprehensive Java programming certification covering core concepts and basic OOP principles.",
      technologies: ["Java", "OOP", "Programming Fundamentals"],
      certificate: "/certificates/java-programming.pdf",
    },
    {
      id: 2,
      role: "JavaScript for Beginners",
      company: "Udemy",
      period: "2025",
      description:
        "Completed beginner to intermediate JavaScript course covering fundamentals, DOM manipulation, and basic algorithms.",
      technologies: ["JavaScript", "DOM Manipulation", "Algorithms"],
      // FIX: Corrected path and filename to match the image.
      certificate: "/java script for beginner certificate.pdf",
    },
    {
      id: 3,
      role: "Internship",
      company: "PearlThoughts",
      period: "2025",
      description:
        "Completed one month internship at PearlThoughts, gaining hands-on experience in web development and project collaboration.",
      technologies: [
        "Web Development",
        "Team Collaboration",
        "Project Management",
        "Internship",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js + vite",
        "Bootstrap",
        "Git",
        "GitHub",
        "Tailwind CSS",
      ],
      // FIX: Corrected path and filename to match the image.
      certificate: "/Sumit Pearl Thoughts internship.pdf",
    },
    {
      id: 4,
      role: "Research Paper",
      company: "IJCERT",
      period: "2025",
      description:
        "Analysis of the Factors for the Effective Growth of Smart Cities",
      technologies: [
        "Research",
        "Data Analysis",
        "Urban Development",
        "Smart Cities",
        "IJCRT",
      ],
      // FIX: Corrected path and filename to match the image.
      certificate: "/IJCRT_Certificate_IJCRT_286965.pdf",
    },
  ]

  // Framer Motion variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-20 bg-black px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-white drop-shadow-[2px_2px_8px_rgba(128,0,255,0.7)]"
        >
          Certifications
        </motion.h2>

        {/* Timeline wrapper */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative border-l border-purple-600 ml-6 space-y-12"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={item}
              whileHover={{
                scale: 1.03,
                rotateX: 5,
                rotateY: -5,
                boxShadow: "0px 8px 25px rgba(128,0,255,0.6)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-2 w-6 h-6 bg-purple-600 rounded-full border-4 border-black"></div>

              {/* Card */}
              <div className="bg-gray-900 p-8 rounded-2xl shadow-xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 text-lg">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1 bg-purple-600 text-white rounded-full text-lg mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 text-lg">{exp.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Download button */}
                <a
                  href={exp.certificate}
                  download
                  className="inline-block px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-lg rounded-lg shadow-md transition-all"
                >
                  📥 Download Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience;