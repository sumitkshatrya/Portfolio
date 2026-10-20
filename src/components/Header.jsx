import { AnimatePresence, motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownload, FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { profileData } from "../data/profileData";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Approach", href: "#approach" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Track active section and scroll offset
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = ["about", "projects", "skills", "experience", "approach", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-dark-border bg-dark-base/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Personal Typographic Wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-accent-violet rounded-lg p-1"
          onClick={() => setIsOpen(false)}
          aria-label="Sumit Kumar - Home"
        >
          <div className="grid h-10 w-10 place-items-center rounded-lg border border-dark-border bg-dark-surface font-mono text-sm font-bold text-accent-violetLight transition-colors group-hover:border-accent-violet/60">
            SK
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-bold tracking-tight text-editorial-primary group-hover:text-white transition-colors">
              {profileData.name}
            </span>
            <span className="font-mono text-xs text-editorial-muted">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center rounded-full border border-dark-border bg-dark-surface/80 p-1 backdrop-blur-md lg:flex shadow-sm"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-editorial-muted hover:text-editorial-primary hover:bg-white/[0.04]"
                }`}
              >
                {isActive && (
                  <Motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-accent-violet/20 border border-accent-violet/40 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
            aria-label="GitHub Profile"
          >
            <FiGithub className="h-4 w-4" />
          </a>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin className="h-4 w-4" />
          </a>
          <a
            href={profileData.socials.resume}
            download
            className="btn-secondary !min-h-10 !px-4 !py-2 !text-xs font-mono"
          >
            <FiDownload className="h-3.5 w-3.5 text-accent-violetLight" />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="icon-button lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-dark-border bg-dark-surface/[0.98] px-5 py-6 backdrop-blur-xl lg:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-accent-violet/15 text-accent-violetLight border border-accent-violet/30"
                        : "text-editorial-muted hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-violetLight" />
                    )}
                  </a>
                );
              })}

              <div className="mt-4 flex flex-col gap-3 border-t border-dark-border pt-4">
                <a
                  href={profileData.socials.resume}
                  download
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center !min-h-11 font-mono text-xs"
                >
                  <FiDownload className="h-4 w-4" />
                  Download Resume
                </a>
                <div className="flex justify-center gap-3 pt-2">
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-button"
                    aria-label="GitHub Profile"
                  >
                    <FiGithub className="h-4 w-4" />
                  </a>
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-button"
                    aria-label="LinkedIn Profile"
                  >
                    <FiLinkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </nav>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
