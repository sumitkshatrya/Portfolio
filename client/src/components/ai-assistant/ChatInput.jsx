import React, { useRef, useEffect } from "react";
import { LuSend, LuLoaderCircle, LuX } from "react-icons/lu";

export default function ChatInput({
  input,
  setInput,
  onSend,
  isLoading,
  disabled,
  maxLength = 500,
}) {
  const textareaRef = useRef(null);

  // Auto-resize textarea height up to 120px
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        120
      )}px`;
    }
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && !disabled && input.trim()) {
        onSend();
      }
    }
  };

  const handleClear = () => {
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const isOverLimit = input.length > maxLength;
  const canSend = !isLoading && !disabled && input.trim().length > 0 && !isOverLimit;

  return (
    <div className="border-t border-dark-border bg-dark-surface/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:pb-3 backdrop-blur-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (canSend) onSend();
        }}
        className="relative flex flex-col gap-1.5"
      >
        <div className="relative flex items-center rounded-xl border border-dark-border bg-dark-base focus-within:border-accent-violet focus-within:ring-1 focus-within:ring-accent-violet transition-all shadow-inner">
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled || isLoading}
            placeholder="Ask about my projects, skills, or experience..."
            className="w-full resize-none bg-transparent px-3.5 py-2.5 text-xs sm:text-[13px] text-editorial-primary placeholder:text-editorial-subtle focus:outline-none disabled:opacity-50 font-sans"
            aria-label="Ask Sumit's AI assistant a question"
          />

          {/* Clear button if text exists */}
          {input.length > 0 && !isLoading && (
            <button
              type="button"
              onClick={handleClear}
              className="mr-1 p-1 text-editorial-subtle hover:text-white transition-colors rounded"
              aria-label="Clear input"
            >
              <LuX className="h-3.5 w-3.5" />
            </button>
          )}

          {/* Send Button */}
          <button
            type="submit"
            disabled={!canSend}
            className={`mr-2 h-8 w-8 rounded-lg flex items-center justify-center transition-all ${
              canSend
                ? "bg-accent-violet hover:bg-accent-violetLight text-white shadow-md shadow-accent-violet/30 active:scale-95"
                : "bg-dark-card text-editorial-subtle cursor-not-allowed border border-dark-border"
            }`}
            aria-label="Send message"
          >
            {isLoading ? (
              <LuLoaderCircle className="h-4 w-4 animate-spin text-accent-violetLight" />
            ) : (
              <LuSend className="h-3.5 w-3.5" />
            )}
          </button>
        </div>

        {/* Input helper & character count */}
        <div className="flex items-center justify-between px-1 text-[10px] font-mono text-editorial-subtle">
          <span className="hidden sm:inline">
            <kbd className="rounded border border-dark-border bg-dark-card px-1 py-0.5">Enter</kbd> to send,{" "}
            <kbd className="rounded border border-dark-border bg-dark-card px-1 py-0.5">Shift+Enter</kbd> for newline
          </span>
          <span className="sm:hidden text-editorial-subtle">
            Tap send or hit return
          </span>
          <span className={isOverLimit ? "text-red-400 font-semibold" : ""}>
            {input.length}/{maxLength}
          </span>
        </div>
      </form>
    </div>
  );
}

