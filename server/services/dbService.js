import mongoose from "mongoose";

let isConnected = false;

// Lightweight schema for aggregate telemetry/analytics (no private data or passwords)
const ChatLogSchema = new mongoose.Schema(
  {
    userMessageLength: { type: Number, required: true },
    responseLength: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
    status: { type: String, enum: ["success", "error"], default: "success" },
    queryPreview: { type: String, maxlength: 120 }, // Truncated preview for popular query analysis
  },
  { timestamps: true }
);

const ChatLog = mongoose.models.ChatLog || mongoose.model("ChatLog", ChatLogSchema);

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return;
  }

  if (isConnected) return;

  try {
    await mongoose.connect(uri, {
      dbName: process.env.MONGODB_DB_NAME || "portfolio",
      serverSelectionTimeoutMS: 2500,
    });
    isConnected = true;
    console.log("[MongoDB] Connected successfully to cluster.");
  } catch (err) {
    console.warn("[MongoDB] Connection warning (non-fatal):", err.message);
    isConnected = false;
  }
}

export async function logInteraction({ userMessage, reply, status = "success" }) {
  if (!isConnected) return;
  try {
    const preview = (userMessage || "").slice(0, 100);
    await ChatLog.create({
      userMessageLength: (userMessage || "").length,
      responseLength: (reply || "").length,
      status,
      queryPreview: preview,
    });
  } catch (err) {
    // Non-blocking log error
    console.debug("[MongoDB] Failed to save chat log:", err.message);
  }
}

