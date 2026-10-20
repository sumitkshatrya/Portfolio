import express from "express";
import rateLimit from "express-rate-limit";
import { aiService } from "../services/aiService.js";
import { logInteraction } from "../services/dbService.js";

const router = express.Router();

// Rate limiter: max 40 requests per 10 minutes per IP
const chatLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 40,
  message: {
    error: "Too many messages sent. Please pause for a few minutes before asking more questions.",
  },
  standardHeaders: true,
  legacyHeaders: false,
  validate: { trustProxy: false },
});

/**
 * POST /api/chat
 * Body: { message: string, history?: Array<{ role: 'user'|'assistant', content: string }> }
 */
router.post("/chat", chatLimiter, async (req, res) => {
  try {
    const { message, history } = req.body;

    // 1. Validation: Message presence
    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Message is required and must be text.",
      });
    }

    const trimmedMessage = message.trim();

    // 2. Validation: Empty message check
    if (trimmedMessage.length === 0) {
      return res.status(400).json({
        error: "Message cannot be empty.",
      });
    }

    // 3. Validation: Message length cap (prevent DOS / prompt abuse)
    if (trimmedMessage.length > 600) {
      return res.status(400).json({
        error: "Message exceeds maximum allowed length of 600 characters. Please be more concise.",
      });
    }

    // 4. Validation & Sanitization: Conversation history
    let sanitizedHistory = [];
    if (Array.isArray(history)) {
      sanitizedHistory = history
        .filter(
          (item) =>
            item &&
            typeof item === "object" &&
            (item.role === "user" || item.role === "assistant") &&
            typeof item.content === "string" &&
            item.content.trim().length > 0
        )
        .slice(-10) // Limit to last 10 messages max
        .map((item) => ({
          role: item.role,
          content: item.content.slice(0, 1000), // Cap past message content
        }));
    }

    // 5. Generate AI response
    const result = await aiService.generateChatResponse(trimmedMessage, sanitizedHistory);

    // 6. Log interaction (asynchronous / non-blocking)
    logInteraction({
      userMessage: trimmedMessage,
      reply: result.reply,
      status: "success",
    }).catch(() => {});

    return res.status(200).json({
      success: true,
      reply: result.reply,
    });
  } catch (error) {
    console.error("[Chat Route Error]:", error.message);

    logInteraction({
      userMessage: req.body?.message,
      reply: null,
      status: "error",
    }).catch(() => {});

    return res.status(500).json({
      error:
        error.message ||
        "An unexpected error occurred while processing your request. Please try again.",
    });
  }
});

export default router;

