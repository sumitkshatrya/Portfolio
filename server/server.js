import "dotenv/config";
import cors from "cors";
import express from "express";
import chatRouter from "./routes/chat.js";
import { connectDB } from "./services/dbService.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Security and CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://portfolio-chi-woad-64.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, or same-origin server proxy)
      if (!origin || allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in dev, can restrict in production
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Payload size limit to prevent abuse
app.use(express.json({ limit: "50kb" }));

// Health Check Endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "Sumit's Portfolio AI Assistant Backend",
  });
});

// Chat API Route
app.use("/api", chatRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found." });
});

// Safe Global Error Handler (no stack trace leak)
app.use((err, req, res, _next) => {
  console.error("[Server Error]", err.message);
  res.status(500).json({ error: "Internal server error occurred." });
});

// Initialize database and start server
async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`[Portfolio AI Server] Running on http://localhost:${PORT}`);
    console.log(`[Portfolio AI Server] Health check available at http://localhost:${PORT}/api/health`);
  });
}

startServer();
