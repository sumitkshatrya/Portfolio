import { FiGithub, FiLinkedin, FiMail, FiPhone, FiTwitter } from "react-icons/fi";

const socials = [
  { id: 1, label: "GitHub", icon: FiGithub, url: "https://github.com/sumitkshatrya" },
  { id: 2, label: "X", icon: FiTwitter, url: "https://x.com/SumitKumar49564" },
  { id: 3, label: "LinkedIn", icon: FiLinkedin, url: "https://www.linkedin.com/in/sumit-kumar-286a7b185/" },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-black">Sumit Kumar</h3>
          <p className="mt-2 text-sm text-slate-400">MERN Stack Developer</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300 sm:flex-row sm:gap-5">
            <a href="tel:+919528865099" className="inline-flex items-center gap-2 transition hover:text-white">
              <FiPhone className="h-4 w-4 text-cyan-300" />
              +91 9528865099
            </a>
            <a href="mailto:skumar21082001@gmail.com" className="inline-flex items-center gap-2 transition hover:text-white">
              <FiMail className="h-4 w-4 text-cyan-300" />
              skumar21082001@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
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

      <p className="mx-auto mt-8 max-w-7xl text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Sumit Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
