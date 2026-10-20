import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";
import { profileData } from "../data/profileData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-dark-border bg-dark-base px-5 py-12 text-editorial-muted sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded border border-dark-border bg-dark-surface font-mono text-xs font-bold text-accent-violetLight">
                SK
              </span>
              <span className="text-base font-bold text-editorial-primary">
                {profileData.name}
              </span>
            </div>
            <p className="mt-2 text-xs text-editorial-muted max-w-md">
              AI-Powered MERN & Full Stack Developer building scalable, performant web
              applications with clean component architectures and verified production metrics.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-3">
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
              href={profileData.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button"
              aria-label="X (Twitter) Profile"
            >
              <FiTwitter className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="icon-button"
              aria-label="Send Email"
            >
              <FiMail className="h-4 w-4" />
            </a>
            <a
              href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
              className="icon-button"
              aria-label="Call Direct"
            >
              <FiPhone className="h-4 w-4" />
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="icon-button ml-2 border-accent-violet/30 hover:border-accent-violet text-accent-violetLight"
              aria-label="Scroll back to top"
            >
              <FiArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom Sub-row */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-dark-border/60 pt-6 text-xs text-editorial-subtle sm:flex-row sm:items-center">
          <p className="font-mono">
            &copy; {new Date().getFullYear()} Sumit Kumar. All rights reserved.
          </p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Designed in Premium Editorial Dark</span>
            <span>·</span>
            <span>React 19 & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
