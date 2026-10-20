import React, { useState, useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  LuBot,
  LuX,
  LuMinus,
  LuRotateCcw,
  LuMaximize2,
} from "react-icons/lu";
import ChatMessage, { TypingIndicator } from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";

export default function AIAssistantPanel({
  isOpen,
  onClose,
  isMinimized,
  onToggleMinimize,
  messages,
  sendMessage,
  retryLastMessage,
  clearConversation,
  isLoading,
}) {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const panelRef = useRef(null);

  // Auto-scroll to bottom when messages update or loading state changes
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen, isMinimized]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap / auto-focus panel on open
  useEffect(() => {
    if (isOpen && !isMinimized) {
      panelRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput("");
    }
  };

  const handleSelectSuggested = (questionText) => {
    sendMessage(questionText);
  };

  if (!isOpen) return null;

  // Show suggested questions if conversation has only the welcome message
  const isFreshConversation = messages.length <= 1;

  return (
    <AnimatePresence>
      <Motion.div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Sumit's AI Assistant"
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          height: isMinimized ? "auto" : undefined,
        }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ type: "spring", damping: 25, stiffness: 320 }}
        className={`fixed z-40 flex flex-col overflow-hidden border border-dark-border bg-dark-surface shadow-2xl backdrop-blur-xl outline-none focus:ring-1 focus:ring-accent-violet/30 ${
          isMinimized
            ? "bottom-20 right-4 sm:right-6 w-[340px] rounded-2xl"
            : "bottom-0 right-0 sm:bottom-20 sm:right-6 w-full sm:w-[430px] h-[100dvh] sm:h-[620px] max-h-[100dvh] sm:max-h-[82vh] rounded-none sm:rounded-2xl"
        }`}
      >
        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between border-b border-dark-border bg-dark-card/90 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="grid h-9 w-9 place-items-center rounded-xl border border-accent-violet/40 bg-accent-violet/15 text-accent-violetLight shadow-inner">
                <LuBot className="h-5 w-5" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-dark-card bg-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold tracking-tight text-white">
                  Sumit's AI Assistant
                </h3>
                <span className="rounded-full bg-accent-violet/15 px-1.5 py-0.2 text-[9px] font-mono text-accent-violetLight border border-accent-violet/30">
                  AI
                </span>
              </div>
              <p className="text-[11px] font-sans text-editorial-muted">
                Explore my work and experience
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1">
            {!isMinimized && (
              <button
                type="button"
                onClick={clearConversation}
                className="rounded-lg p-1.5 text-editorial-muted hover:bg-white/[0.06] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-accent-violet"
                aria-label="Clear conversation history"
                title="Reset conversation"
              >
                <LuRotateCcw className="h-4 w-4" />
              </button>
            )}

            <button
              type="button"
              onClick={onToggleMinimize}
              className="rounded-lg p-1.5 text-editorial-muted hover:bg-white/[0.06] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-accent-violet"
              aria-label={isMinimized ? "Maximize chat panel" : "Minimize chat panel"}
              title={isMinimized ? "Expand" : "Minimize"}
            >
              {isMinimized ? (
                <LuMaximize2 className="h-4 w-4" />
              ) : (
                <LuMinus className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-editorial-muted hover:bg-white/[0.06] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-accent-violet"
              aria-label="Close assistant panel"
              title="Close"
            >
              <LuX className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ================= BODY & MESSAGES ================= */}
        {!isMinimized && (
          <>
            <div
              className="flex-1 overflow-y-auto px-4 py-4 sm:px-5 space-y-4"
              role="log"
              aria-live="polite"
              aria-atomic="false"
            >
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  onRetry={message.isError ? retryLastMessage : undefined}
                  onAnchorClick={() => {
                    // On small screens, close panel after clicking a navigation anchor so visitor sees section
                    if (window.innerWidth < 640) {
                      onClose();
                    }
                  }}
                />
              ))}

              {/* Typing indicator */}
              {isLoading && <TypingIndicator />}

              {/* Suggested Questions Section */}
              {isFreshConversation && (
                <div className="mt-4 pt-2 border-t border-dark-border/60">
                  <SuggestedQuestions
                    onSelectQuestion={handleSelectSuggested}
                    disabled={isLoading}
                  />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ================= FOOTER / INPUT ================= */}
            <ChatInput
              input={input}
              setInput={setInput}
              onSend={handleSend}
              isLoading={isLoading}
            />
          </>
        )}
      </Motion.div>
    </AnimatePresence>
  );
}

