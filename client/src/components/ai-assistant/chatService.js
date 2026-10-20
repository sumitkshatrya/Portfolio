/**
 * Client service to communicate with the AI Portfolio Assistant backend.
 */

const isLocalhost =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  (isLocalhost ? "" : "https://sumit-portfolio-server.vercel.app")
).replace(/\/+$/, "");

export async function sendChatMessage(message, history = []) {
  if (!message || !message.trim()) {
    throw new Error("Message cannot be empty.");
  }

  const endpoint = `${API_BASE_URL}/api/chat`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message.trim(),
        history,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMsg = data.error || `Server responded with status ${response.status}`;
      throw new Error(errorMsg);
    }

    if (!data.reply) {
      throw new Error("Received empty response from assistant.");
    }

    return {
      reply: data.reply,
    };
  } catch (error) {
    if (error.name === "TypeError" && error.message.includes("Failed to fetch")) {
      throw new Error("Unable to reach the assistant server. Please ensure the backend is running.");
    }
    throw error;
  }
}

