import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];

  const socials = [
    { id: 1, icon: <FiGithub className="w-8 h-8" />, url: "https://github.com/sumitkshatrya" },
    { id: 2, icon: <FiTwitter className="w-8 h-8" />, url: "https://x.com/SumitKumar49564" },
    { id: 3, icon: <FiLinkedin className="w-8 h-8" />, url: "https://www.linkedin.com/in/sumit-kumar-286a7b185/" },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md relative">
      {/* Logo (Top-Left Corner) */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.2, rotateX: 10, rotateY: 10 }}
        style={{ transformStyle: "preserve-3d" }}
        className="absolute top-4 left-6 text-6xl md:text-5xl font-bold text-violet-500 z-20"
      >
        Sumit Kumar
      </motion.a>

      {/* Social Icons (Top-Right Corner) */}
      <div className="absolute top-4 right-6 flex space-x-6 z-20">
        {socials.map((social) => (
          <motion.a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.4, rotateX: 10, rotateY: 10, transition: { type: "spring", stiffness: 200, damping: 12 } }}
            whileTap={{ scale: 0.9 }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* Desktop Nav Links (Center) */}
      <nav className="hidden lg:flex justify-center space-x-12 py-6">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.path}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.1, rotateX: 5, rotateY: 5 }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-xl text-gray-300 hover:text-violet-500 font-medium transition-colors duration-300"
          >
            {item.name}
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden absolute top-4 right-6">
        <button
          className="text-white text-3xl z-30"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (Below Social Icons) */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-gray-900 mt-20 px-6 pb-4 space-y-3"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={toggleMenu}
              className="block text-xl text-gray-300 hover:text-violet-500 font-medium py-2"
            >
              {item.name}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
