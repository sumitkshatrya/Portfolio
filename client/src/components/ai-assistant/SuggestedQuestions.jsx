import React from "react";
import {
  LuSparkles,
  LuBot,
  LuBriefcase,
  LuCode,
  LuFileText,
  LuMail,
  LuGithub,
  LuLinkedin,
  LuArrowRight,
} from "react-icons/lu";

const SUGGESTED_QUESTIONS = [
  { text: "Explore my featured projects", icon: LuBriefcase },
  { text: "Explain my AI projects", icon: LuBot },
  { text: "What technologies do I use?", icon: LuCode },
  { text: "Tell me about my experience", icon: LuSparkles },
  { text: "Where can I find my resume?", icon: LuFileText },
  { text: "How can I contact Sumit?", icon: LuMail },
];

export default function SuggestedQuestions({ onSelectQuestion, disabled }) {
  return (
    <div className="space-y-4 px-1 py-2">
      {/* Quick Navigation Pills */}
      <div>
        <span className="text-[11px] font-mono uppercase tracking-wider text-editorial-muted/80 block mb-2">
          Quick Actions
        </span>
        <div className="flex flex-wrap gap-1.5">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-dark-border bg-dark-card/90 px-3 py-1 text-[11px] font-mono text-zinc-300 hover:text-white hover:border-accent-violet/60 hover:bg-dark-cardHover transition-all focus:outline-none focus:ring-1 focus:ring-accent-violet"
          >
            <LuFileText className="h-3 w-3 text-accent-violetLight" />
            <span>Resume</span>
          </a>
          <a
            href="https://github.com/sumitkshatrya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-dark-border bg-dark-card/90 px-3 py-1 text-[11px] font-mono text-zinc-300 hover:text-white hover:border-accent-violet/60 hover:bg-dark-cardHover transition-all focus:outline-none focus:ring-1 focus:ring-accent-violet"
          >
            <LuGithub className="h-3 w-3 text-accent-blue" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/sumit9kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-dark-border bg-dark-card/90 px-3 py-1 text-[11px] font-mono text-zinc-300 hover:text-white hover:border-accent-violet/60 hover:bg-dark-cardHover transition-all focus:outline-none focus:ring-1 focus:ring-accent-violet"
          >
            <LuLinkedin className="h-3 w-3 text-sky-400" />
            <span>LinkedIn</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1.5 rounded-full border border-dark-border bg-dark-card/90 px-3 py-1 text-[11px] font-mono text-zinc-300 hover:text-white hover:border-accent-violet/60 hover:bg-dark-cardHover transition-all focus:outline-none focus:ring-1 focus:ring-accent-violet"
          >
            <LuMail className="h-3 w-3 text-emerald-400" />
            <span>Contact</span>
          </a>
        </div>
      </div>

      {/* Suggested Questions Grid */}
      <div>
        <span className="text-[11px] font-mono uppercase tracking-wider text-editorial-muted/80 block mb-2">
          Suggested Questions
        </span>
        <div className="grid grid-cols-1 gap-1.5">
          {SUGGESTED_QUESTIONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                type="button"
                disabled={disabled}
                onClick={() => onSelectQuestion(item.text)}
                className="group flex items-center justify-between w-full text-left rounded-lg border border-dark-border bg-dark-surface/80 hover:bg-dark-cardHover px-3 py-2 text-xs text-editorial-primary transition-all duration-150 hover:border-accent-violet/50 focus:outline-none focus:ring-1 focus:ring-accent-violet disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-1 rounded bg-dark-card text-accent-violetLight group-hover:text-white transition-colors flex-shrink-0">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-zinc-200 group-hover:text-white transition-colors font-medium truncate">
                    {item.text}
                  </span>
                </div>
                <LuArrowRight className="h-3 w-3 text-editorial-muted group-hover:text-accent-violetLight group-hover:translate-x-0.5 transition-all opacity-60 group-hover:opacity-100 flex-shrink-0 ml-1.5" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
