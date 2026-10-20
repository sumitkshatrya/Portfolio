import React, { useState } from "react";
import { LuCheck, LuCopy, LuExternalLink, LuFileDown } from "react-icons/lu";

/**
 * Safely parses and renders assistant markdown responses into React elements
 * without dangerouslySetInnerHTML.
 */
export default function MarkdownRenderer({ content, onAnchorClick }) {
  if (!content) return null;

  // Split by code blocks first
  const blocks = splitCodeBlocks(content);

  return (
    <div className="space-y-2.5 text-xs sm:text-[13px] leading-relaxed text-editorial-primary font-sans break-words">
      {blocks.map((block, idx) => {
        if (block.type === "code") {
          return <CodeBlock key={idx} language={block.language} code={block.code} />;
        }
        return <TextBlock key={idx} text={block.text} onAnchorClick={onAnchorClick} />;
      })}
    </div>
  );
}

function CodeBlock({ language, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="my-2 rounded-lg border border-dark-border bg-dark-card overflow-hidden">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-dark-border bg-dark-surface/60 text-[11px] font-mono text-editorial-muted">
        <span>{language || "code"}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-accent-violet rounded px-1.5 py-0.5"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <LuCheck className="h-3 w-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <LuCopy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-3 overflow-x-auto text-[11px] font-mono text-zinc-200 leading-normal">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function TextBlock({ text, onAnchorClick }) {
  // Split into lines for headings, lists, and paragraphs
  const lines = text.split("\n");
  const elements = [];
  let currentList = [];
  let isNumberedList = false;

  const flushList = () => {
    if (currentList.length > 0) {
      if (isNumberedList) {
        elements.push(
          <ol key={`ol-${elements.length}`} className="list-decimal list-outside pl-4 space-y-1 my-1">
            {currentList.map((item, i) => (
              <li key={i} className="pl-1">
                {renderInline(item, onAnchorClick)}
              </li>
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc list-outside pl-4 space-y-1 my-1">
            {currentList.map((item, i) => (
              <li key={i} className="pl-1 text-editorial-primary">
                {renderInline(item, onAnchorClick)}
              </li>
            ))}
          </ul>
        );
      }
      currentList = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      flushList();
      continue;
    }

    // Heading: ###
    if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h4 key={`h4-${i}`} className="font-semibold text-sm text-white mt-2 mb-1">
          {renderInline(trimmed.slice(4), onAnchorClick)}
        </h4>
      );
      continue;
    }
    // Heading: ##
    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h3 key={`h3-${i}`} className="font-bold text-sm text-white mt-2.5 mb-1">
          {renderInline(trimmed.slice(3), onAnchorClick)}
        </h3>
      );
      continue;
    }

    // Unordered List: * or -
    const bulletMatch = rawLine.match(/^(\s*)[*-]\s+(.+)$/);
    if (bulletMatch) {
      if (isNumberedList) flushList();
      isNumberedList = false;
      currentList.push(bulletMatch[2]);
      continue;
    }

    // Numbered List: 1. or 2.
    const numberMatch = rawLine.match(/^(\s*)\d+\.\s+(.+)$/);
    if (numberMatch) {
      if (!isNumberedList) flushList();
      isNumberedList = true;
      currentList.push(numberMatch[2]);
      continue;
    }

    // Regular line
    flushList();
    elements.push(
      <p key={`p-${i}`} className="my-1">
        {renderInline(trimmed, onAnchorClick)}
      </p>
    );
  }

  flushList();

  return <>{elements}</>;
}

/**
 * Parses inline formatting: bold, italic, inline code, and links
 */
function renderInline(text, onAnchorClick) {
  if (!text) return null;

  const tokens = [];
  const regex = /(`[^`]+`)|(\[[^\]]+\]\([^)]+\))|(\*\*[^*]+\*\*)|(\*[^*]+\*)/g;

  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }

    const matchedStr = match[0];
    if (matchedStr.startsWith("`")) {
      tokens.push({ type: "code", value: matchedStr.slice(1, -1) });
    } else if (matchedStr.startsWith("[")) {
      const linkMatch = matchedStr.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        tokens.push({ type: "link", text: linkMatch[1], href: linkMatch[2] });
      } else {
        tokens.push({ type: "text", value: matchedStr });
      }
    } else if (matchedStr.startsWith("**")) {
      tokens.push({ type: "bold", value: matchedStr.slice(2, -2) });
    } else if (matchedStr.startsWith("*")) {
      tokens.push({ type: "italic", value: matchedStr.slice(1, -1) });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: "text", value: text.slice(lastIndex) });
  }

  return tokens.map((token, index) => {
    switch (token.type) {
      case "code":
        return (
          <code
            key={index}
            className="rounded bg-dark-card px-1.5 py-0.5 font-mono text-[11px] text-accent-violetLight border border-dark-border"
          >
            {token.value}
          </code>
        );
      case "bold":
        return (
          <strong key={index} className="font-semibold text-white">
            {token.value}
          </strong>
        );
      case "italic":
        return (
          <em key={index} className="italic text-zinc-300">
            {token.value}
          </em>
        );
      case "link": {
        const isAnchor = token.href.startsWith("#");
        const isResume = token.href.includes("resume.pdf");

        return (
          <a
            key={index}
            href={token.href}
            target={isAnchor ? undefined : "_blank"}
            rel={isAnchor ? undefined : "noopener noreferrer"}
            onClick={(e) => {
              if (isAnchor) {
                e.preventDefault();
                try {
                  const targetEl = document.querySelector(token.href);
                  if (targetEl) {
                    targetEl.scrollIntoView({ behavior: "smooth" });
                  }
                } catch {
                  const id = token.href.replace(/^#/, "");
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }
                if (onAnchorClick) onAnchorClick(token.href);
              }
            }}
            className="inline-flex items-center gap-1 text-accent-violetLight hover:text-white font-medium underline underline-offset-2 decoration-accent-violet/50 hover:decoration-white transition-colors"
          >
            <span>{token.text}</span>
            {isResume ? (
              <LuFileDown className="h-3 w-3 inline text-accent-blue" />
            ) : isAnchor ? null : (
              <LuExternalLink className="h-2.5 w-2.5 inline opacity-70" />
            )}
          </a>
        );
      }
      default:
        return <span key={index}>{token.value}</span>;
    }
  });
}

function splitCodeBlocks(text) {
  const parts = [];
  const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;

  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", text: text.slice(lastIndex, match.index) });
    }
    parts.push({
      type: "code",
      language: match[1]?.trim() || "code",
      code: match[2]?.trimEnd() || "",
    });
    lastIndex = codeBlockRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({ type: "text", text: text.slice(lastIndex) });
  }

  return parts;
}

