import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
      {
      id: 1,
      title: "Real-time Chat Application",
      description: "A real-time messaging application with instant messaging capabilities and user authentication.",
      technologies: ["React.js", "Vite", "TailwindCSS", "Node.js", "Express", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/sumitkshatrya",
      liveUrl: "https://chat-app-frontend-omega-sand.vercel.app/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXa2RFDRShkXH03IKgZgsWT069w_AKhsdcQ&s"
      },
    {
      id: 2,
      title: "Text Utility App",
      description:
        "React app for text transformations like uppercase/lowercase conversion, word/character count, and whitespace cleanup.",
      technologies: ["React.js", "JavaScript", "CSS"],
      githubUrl: "https://github.com/sumitkshatrya",
      liveUrl: "textutilityrobo.netlify.app",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLw55msl_eHJ5KgmQaraGx3YdRo4dOsp9BqA&s",
    },
    {
      id: 3,
      title: "Tic-Tac-Toe Game",
      description:
        "Interactive browser-based Tic-Tac-Toe game using core JavaScript, HTML, and CSS.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/sumitkshatrya",
      liveUrl: "https://tic-toc-game-mauve.vercel.app/",
      image: "https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU",
    },
    {
    id: 4,
      title: "NewsMonkey App",
      description:
        "Built a dynamic news web app using React.js to fetch and display live news articles. Integrated NewsAPI for real-time headlines with infinite scroll.",
      technologies: ["React.js", "News API", "Bootstrap 5", "CSS"],
      githubUrl: "https://github.com/sumitkshatrya",
      liveUrl: "#",
      image: "https://images.timesnownews.com/thumb/msid-152886181,thumbsize-1225716,width-1280,height-720,resizemode-75/152886181.jpg",
    },
     
    {
      "id": 5,
      "title": "Project Ranking System",
      "description": "A comprehensive project evaluation and ranking platform with automated scoring based on multiple technical parameters.",
      "technologies": ["React.js", "Vite", "TailwindCSS", "Node.js", "Express", "MongoDB"],
      "githubUrl": "https://github.com/sumitkshatrya",
      "liveUrl": "https://ranking-based-frontend.vercel.app/",
      "image": "https://community.fabric.microsoft.com/t5/image/serverpage/image-id/519441i27A3B7D99516021C/image-size/large?v=v2&px=999"
    },
      {
        "id": 6,
        "title": "Real Estate Platform",
        "description": "A mern-stack real estate listing platform with property search, agent profiles, and booking system.",
        "technologies": ["React.js", "Vite", "TailwindCSS", "Node.js", "Express", "MongoDB"],
        "githubUrl": "https://github.com/sumitkshatrya",
        "liveUrl": "#",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrPSCTEug9KOQf1-S8eALDhfuGM8clPPyQA&s"
}
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-[2px_2px_8px_rgba(128,0,255,0.6)]"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateX: 8,
                rotateY: -8,
                boxShadow: "0px 15px 40px rgba(128,0,255,0.4)",
              }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors text-lg"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors text-lg"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
