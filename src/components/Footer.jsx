import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  const socials = [
    { id: 1, icon: <FiGithub className="w-12 h-12" />, url: "https://github.com/sumitkshatrya" },
    { id: 2, icon: <FiTwitter className="w-12 h-12" />, url: "https://x.com/SumitKumar49564" },
    { id: 3, icon: <FiLinkedin className="w-12 h-12" />, url: "https://www.linkedin.com/in/sumit-kumar-286a7b185/" },
  ];

  return (
    <footer className="bg-black py-16 px-6 sm:px-12 lg:px-20 flex flex-col justify-between min-h-[500px]">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-16">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-4xl font-bold text-white">Sumit Kumar</h3>
          <p className="text-2xl text-gray-300">Frontend Developer</p>
          {/* Contact Info */}
          <div className="mt-4 space-y-2 text-gray-300 text-xl">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FiPhone /> +91-9528865099
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FiMail /> skumar21082001@.com
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-12 mt-8 md:mt-0">
          {socials.map((social) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.5,
                rotateX: 15,
                rotateY: 15,
                transition: { type: "spring", stiffness: 200, damping: 12 },
              }}
              whileTap={{ scale: 0.9 }}
              style={{ transformStyle: "preserve-3d" }}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      
      <div className="container mx-auto flex flex-col items-center mt-auto">
        <p className="text-gray-300 text-lg mt-4">
          &copy; {new Date().getFullYear()} Sumit Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
