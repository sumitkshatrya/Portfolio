import React from "react";
import { LuBot, LuUser, LuCircleAlert, LuRotateCcw } from "react-icons/lu";
import MarkdownRenderer from "./MarkdownRenderer";

function formatTimestamp(timestamp) {
  try {
    const d = new Date(timestamp);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

export default function ChatMessage({ message, onRetry, onAnchorClick }) {
  const isUser = message.role === "user";
  const isError = message.isError;

  return (
    <div
      className={`flex gap-3 w-full animate-fade-in ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* Assistant Avatar */}
      {!isUser && (
        <div className="flex-shrink-0 mt-0.5">
          <div className="h-7 w-7 rounded-lg border border-accent-violet/40 bg-accent-violet/10 flex items-center justify-center text-accent-violetLight shadow-sm">
            <LuBot className="h-4 w-4" />
          </div>
        </div>
      )}

      {/* Message Bubble Container */}
      <div
        className={`flex flex-col max-w-[85%] sm:max-w-[80%] ${
          isUser ? "items-end" : "items-start"
        }`}
      >
        <div
          className={`rounded-2xl px-3.5 py-2.5 shadow-sm text-xs sm:text-[13px] ${
            isUser
              ? "bg-accent-violet/15 text-white border border-accent-violet/30 rounded-tr-sm"
              : isError
              ? "bg-red-500/10 text-red-200 border border-red-500/30 rounded-tl-sm"
              : "bg-dark-card text-editorial-primary border border-dark-border rounded-tl-sm"
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
          ) : isError ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-red-300 font-medium">
                <LuCircleAlert className="h-4 w-4 flex-shrink-0" />
                <span>{message.content}</span>
              </div>
              {onRetry && (
                <button
                  type="button"
                  onClick={onRetry}
                  className="inline-flex items-center gap-1.5 rounded bg-red-500/20 px-2.5 py-1 text-[11px] font-mono text-red-200 hover:bg-red-500/30 transition-colors focus:outline-none focus:ring-1 focus:ring-red-400"
                >
                  <LuRotateCcw className="h-3 w-3" />
                  <span>Retry Message</span>
                </button>
              )}
            </div>
          ) : (
            <MarkdownRenderer content={message.content} onAnchorClick={onAnchorClick} />
          )}
        </div>

        {/* Timestamp */}
        {message.timestamp && (
          <span className="mt-1 px-1 text-[10px] font-mono text-editorial-subtle">
            {formatTimestamp(message.timestamp)}
          </span>
        )}
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="flex-shrink-0 mt-0.5">
          <div className="h-7 w-7 rounded-lg border border-dark-border bg-dark-card flex items-center justify-center text-zinc-300 shadow-sm">
            <LuUser className="h-3.5 w-3.5" />
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Animated typing indicator with glowing wave dots
 */
export function TypingIndicator() {
  return (
    <div className="flex gap-3 justify-start items-start w-full animate-fade-in">
      <div className="h-7 w-7 rounded-lg border border-accent-violet/40 bg-accent-violet/10 flex items-center justify-center text-accent-violetLight shadow-sm flex-shrink-0 mt-0.5">
        <LuBot className="h-4 w-4 animate-pulse" />
      </div>
      <div className="rounded-2xl rounded-tl-sm px-4 py-3 bg-dark-card border border-dark-border shadow-sm flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-accent-violet animate-bounce [animation-delay:-0.3s]" />
        <span className="h-2 w-2 rounded-full bg-accent-violetLight animate-bounce [animation-delay:-0.15s]" />
        <span className="h-2 w-2 rounded-full bg-accent-blue animate-bounce" />
        <span className="ml-2 text-[11px] font-mono text-editorial-muted">Generating response...</span>
      </div>
    </div>
  );
}

