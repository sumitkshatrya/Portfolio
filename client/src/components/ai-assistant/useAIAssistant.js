import { useState, useEffect, useCallback } from "react";
import { sendChatMessage } from "./chatService";

const STORAGE_KEY = "sumit_portfolio_ai_chat_v1";

const INITIAL_MESSAGE = {
  id: "welcome-msg",
  role: "assistant",
  content:
    "Hello! I am **Sumit's AI Assistant**. I can help you explore his verified skills, production projects (like **MediCore AI** and **AI Interview Agent**), professional experience, education, resume, and contact details.\n\nHow can I help you today?",
  timestamp: new Date().toISOString(),
};

export function useAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUserMessage, setLastUserMessage] = useState(null);

  // Initialize messages from sessionStorage if available
  const [messages, setMessages] = useState(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const valid = parsed.filter(
            (m) =>
              m &&
              typeof m.content === "string" &&
              (m.role === "user" || m.role === "assistant")
          );
          if (valid.length > 0) return valid;
        }
      }
    } catch {
      // Fallback
    }
    return [INITIAL_MESSAGE];
  });

  // Sync messages to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Ignore quota errors
    }
  }, [messages]);

  const sendMessage = useCallback(
    async (text) => {
      const trimmed = (text || "").trim();
      if (!trimmed || isLoading) return;

      const userMsg = {
        id: `user-${Date.now()}`,
        role: "user",
        content: trimmed,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setLastUserMessage(trimmed);
      setError(null);
      setIsLoading(true);

      // Prepare history excluding any error messages
      const historyPayload = messages
        .filter((m) => !m.isError)
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      try {
        const res = await sendChatMessage(trimmed, historyPayload);

        const assistantMsg = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: res.reply,
          timestamp: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, assistantMsg]);
      } catch (err) {
        const errMsg = err.message || "Something went wrong. Please try again.";
        setError(errMsg);

        const errorMsg = {
          id: `error-${Date.now()}`,
          role: "assistant",
          isError: true,
          content: errMsg,
          timestamp: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages]
  );

  const retryLastMessage = useCallback(() => {
    if (lastUserMessage) {
      // Remove last error message
      setMessages((prev) => prev.filter((m) => !m.isError));
      sendMessage(lastUserMessage);
    }
  }, [lastUserMessage, sendMessage]);

  const clearConversation = useCallback(() => {
    setMessages([
      {
        ...INITIAL_MESSAGE,
        id: `welcome-${Date.now()}`,
        timestamp: new Date().toISOString(),
      },
    ]);
    setError(null);
    setLastUserMessage(null);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  }, []);

  return {
    isOpen,
    setIsOpen,
    isMinimized,
    setIsMinimized,
    isLoading,
    error,
    messages,
    sendMessage,
    retryLastMessage,
    clearConversation,
  };
}

