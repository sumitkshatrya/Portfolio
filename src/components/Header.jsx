import { AnimatePresence, motion as Motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiTwitter, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Experience", path: "#experience" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
];

const socials = [
  { id: 1, label: "GitHub", icon: FiGithub, url: "https://github.com/sumitkshatrya" },
  { id: 2, label: "X", icon: FiTwitter, url: "https://x.com/SumitKumar49564" },
  { id: 3, label: "LinkedIn", icon: FiLinkedin, url: "https://www.linkedin.com/in/sumit-kumar-286a7b185/" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/78 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Motion.a
          href="#home"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-400 text-base font-black text-slate-950 shadow-lg shadow-cyan-500/20">
            SK
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold">Sumit Kumar</span>
            <span className="block text-xs text-slate-400">MERN Stack Developer</span>
          </span>
        </Motion.a>

        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 lg:flex">
          {navItems.map((item, index) => (
            <Motion.a
              key={item.name}
              href={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + index * 0.04 }}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.name}
            </Motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button"
                aria-label={social.label}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          className="icon-button lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/96 px-5 pb-5 lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-3 flex gap-2 border-t border-white/10 pt-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label={social.label}>
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </Motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
