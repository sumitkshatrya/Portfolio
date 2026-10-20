import React, { useState } from "react";
import { LuBot, LuSparkles, LuX } from "react-icons/lu";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function AIAssistantButton({ isOpen, onToggle }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center select-none">
      {/* Accessible Tooltip */}
      <AnimatePresence>
        {isHovered && !isOpen && (
          <Motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-16 hidden sm:flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-dark-border bg-dark-card/95 px-3 py-1.5 text-xs font-medium text-white shadow-xl backdrop-blur-md pointer-events-none"
            role="tooltip"
          >
            <LuSparkles className="h-3.5 w-3.5 text-accent-violetLight animate-pulse" />
            <span>Ask my AI assistant</span>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <Motion.button
        type="button"
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-2xl shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-violet focus:ring-offset-2 focus:ring-offset-dark-base ${
          isOpen
            ? "border border-accent-violet/60 bg-dark-card text-accent-violetLight shadow-accent-violet/20"
            : "border border-white/15 bg-gradient-to-br from-dark-card to-dark-surface hover:border-accent-violet/50 text-white shadow-black/40"
        }`}
        aria-label={isOpen ? "Close AI Assistant" : "Ask my AI assistant"}
        aria-expanded={isOpen}
      >
        {/* Subtle Ambient Pulse Ring when closed */}
        {!isOpen && (
          <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent-violet/30 to-accent-blue/30 opacity-75 blur-sm group-hover:opacity-100 transition-opacity" />
        )}

        <div className="relative z-10 flex items-center justify-center">
          {isOpen ? (
            <LuX className="h-6 w-6 text-white transition-transform group-hover:rotate-90 duration-200" />
          ) : (
            <div className="relative">
              <LuBot className="h-6 w-6 text-accent-violetLight transition-colors group-hover:text-white" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-violet opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-violet" />
              </span>
            </div>
          )}
        </div>
      </Motion.button>
    </div>
  );
}

