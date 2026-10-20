# Sumit Kumar — Developer Portfolio & AI Assistant

An editorial dark-themed developer portfolio and interactive AI assistant built with **React 19**, **Vite**, **Tailwind CSS**, and **Node.js + Express**, powered by **Google Gemini AI**.

Designed for recruiters, hiring managers, and engineers to explore verified technical skills, production applications, professional experience, education, and contact channels.

[![Live Demo](https://img.shields.io/badge/Live%20Portfolio-Vercel-black?style=for-the-badge&logo=vercel)](https://portfolio-chi-woad-64.vercel.app)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/Frontend-React%2019%20%7C%20Vite-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Gemini](https://img.shields.io/badge/AI-Google%20Gemini%20Flash-orange?style=for-the-badge&logo=google)](https://ai.google.dev/)

---

## 🚀 Key Features

### 1. Editorial Dark UI / UX
* **Curated Palette**: `#101114` base, `#17191F` surface cards, `#8B5CF6` electric violet accents, and subtle borders.
* **Fluid Micro-interactions**: Smooth transitions and hover animations powered by Framer Motion.
* **Responsive Architecture**: Pixel-perfect layout across desktop, tablet, and mobile displays.
* **Accessibility-First**: Visible focus rings, keyboard navigation, and reduced-motion support.

### 2. Grounded AI Portfolio Assistant
* **Floating Launcher**: Bottom-right launcher button with ambient glow and tooltip.
* **Interactive Panel**: Expandable chat window with minimize, maximize, and conversation reset actions.
* **Strict Grounding**: Answers queries strictly using verified portfolio facts with zero hallucination.
* **Contextual Suggestions**: 1-click starter questions and quick-action pills (*Resume*, *GitHub*, *LinkedIn*, *Contact*).
* **Safe Markdown Renderer**: XSS-safe parser formatting code blocks with copy buttons, lists, bold keywords, and interactive links.
* **In-Page Navigation**: Markdown links smoothly scroll to corresponding page sections (`#projects`, `#skills`, `#experience`, `#contact`).

### 3. Flagship Projects Showcase
* **[MediCore AI](https://ai-powered-hospital-1.onrender.com/)**: Full-stack clinical management platform featuring automated symptom evaluation, doctor triage, medical report summarization, and RBAC workflows.
* **[AI Interview Agent](https://a-i-interview-client.onrender.com)**: Intelligent mock interview simulator generating contextual questions by role, evaluating speech/text responses, and delivering score analytics.
* **[Zentra E-Commerce](https://zentra-frontend.vercel.app)**: Modern storefront featuring AI-driven recommendations, dual payment gateways (Stripe & Razorpay), and order lifecycle tracking.
* **[Real Estate Platform](https://propsestate-ytdn.onrender.com/)**: Enterprise property portal with multi-criteria MongoDB aggregation search and responsive admin dashboard.
* **[Socket.io Chat](https://chat-app-frontend-omega-sand.vercel.app/)**: Bidirectional WebSocket messaging with presence tracking and persistent channels.

---

## 🏗️ Architecture & Project Structure

The project is structured as a clean monorepo with dedicated `client` and `server` workspaces:

```
Portfolio/
├── client/                     # Frontend React + Vite SPA
│   ├── public/                 # Static assets, PDFs (resume, certificates), sitemap
│   │   ├── resume.pdf
│   │   └── ...
│   ├── src/
│   │   ├── assets/             # Images & static media
│   │   ├── components/         # Page sections & UI components
│   │   │   ├── ai-assistant/   # Floating launcher, panel, input, messages & markdown renderer
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   ├── data/               # Structured data sources for portfolio sections
│   │   ├── App.jsx             # Main application layout
│   │   ├── index.css           # Tailwind custom styling & scrollbar design
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js          # Proxies /api requests to server:5000 in dev
│
├── server/                     # Backend AI Assistant Service
│   ├── data/
│   │   └── portfolioKnowledge.js # Verified knowledge base & prompt ground truth
│   ├── routes/
│   │   └── chat.js             # POST /api/chat with rate limiting & sanitization
│   ├── services/
│   │   ├── aiService.js        # Google Gemini integration with automatic model fallback
│   │   └── dbService.js        # Non-blocking MongoDB telemetry logging
│   ├── server.js               # Express application entry point
│   ├── package.json
│   └── .env.example            # Environment variables template
│
├── package.json                # Root npm workspace orchestrator
├── .gitignore                  # Prevents committing secrets, logs, and build artifacts
└── README.md
```

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind CSS, Framer Motion, GSAP, React Icons (`react-icons/lu`) |
| **Backend** | Node.js, Express, CORS, Express Rate Limit, Dotenv |
| **AI / LLM** | Google Gemini API (`gemini-3.5-flash-lite`, `gemini-2.5-flash-lite`, `gemini-3.1-flash-lite`) |
| **Database** | MongoDB Atlas (Optional Chat Analytics & Telemetry) |
| **Tooling** | ESLint 9, PostCSS, Autoprefixer, Git |

---

## ⚡ Quick Start

### Prerequisites
* **Node.js** >= 18.x
* **npm** >= 9.x
* A [Google AI Studio API Key](https://aistudio.google.com/) for the AI assistant

### 1. Clone the repository
```bash
git clone https://github.com/sumitkshatrya/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
Install all root, client, and server dependencies with one command:
```bash
npm install
cd server && npm install && cd ..
```

### 3. Configure environment variables
Create a `.env` file inside the `server/` directory:
```bash
cp server/.env.example server/.env
```

Edit `server/.env` with your credentials:
```env
PORT=5000
GEMINI_API_KEY=your_google_gemini_api_key
GEMINI_MODEL=gemini-3.5-flash-lite

# Optional: MongoDB connection for telemetry
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/
MONGODB_DB_NAME=portfolio
```

### 4. Run locally

* **Start the backend server (Port 5000)**:
  ```bash
  npm run server:dev
  ```

* **In a second terminal, start the frontend (Port 5173)**:
  ```bash
  npm run dev
  ```

Visit `http://localhost:5173` in your browser. The Vite development server automatically proxies `/api/*` requests to `http://localhost:5000`.

---

## 📡 API Endpoints

### `GET /api/health`
Health check endpoint verifying server availability.
* **Response `200 OK`**:
  ```json
  {
    "status": "healthy",
    "timestamp": "2026-10-20T12:00:00.000Z",
    "service": "Sumit's Portfolio AI Assistant Backend"
  }
  ```

### `POST /api/chat`
Generates a grounded assistant response based on recent message history.
* **Headers**: `Content-Type: application/json`
* **Request Body**:
  ```json
  {
    "message": "What are Sumit's strongest full-stack projects?",
    "history": [
      { "role": "user", "content": "Hi" },
      { "role": "assistant", "content": "Hello! How can I help you?" }
    ]
  }
  ```
* **Response `200 OK`**:
  ```json
  {
    "success": true,
    "reply": "Sumit has engineered several production-grade full-stack applications..."
  }
  ```
* **Safeguards**:
  * Rate-limited to 40 requests per 10 minutes per IP.
  * Rejects empty messages (`400 Bad Request`).
  * Enforces a 600-character limit per prompt to prevent DOS/prompt injection.
  * Sanitizes past turns and limits history to the 10 most recent messages.

---

## 📦 Deployment Guidance

### Deploying the Frontend (Vercel / Netlify)
1. Set the **Root Directory** to `client`.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Set Environment Variable:
   * `VITE_API_BASE_URL`: The URL of your deployed backend (e.g. `https://your-api.onrender.com`).

### Deploying the Backend (Render / Railway / VPS)
1. Set the **Root Directory** to `server`.
2. Build Command: `npm install`
3. Start Command: `node server.js`
4. Add Environment Variables:
   * `PORT=5000`
   * `GEMINI_API_KEY`: Your Gemini API key.
   * `GEMINI_MODEL`: `gemini-3.5-flash-lite` (or desired model).
   * `MONGODB_URI`: Your MongoDB connection string (optional).

---

## 👨‍💻 About Sumit Kumar

* **Role**: AI-Powered MERN / Full Stack Developer
* **Location**: Moradabad, UP, India
* **Education**: Master of Computer Applications (MCA) — AKTU / IIMT
* **Email**: [skumar21082001@gmail.com](mailto:skumar21082001@gmail.com)
* **Phone**: +91 9528865099
* **GitHub**: [@sumitkshatrya](https://github.com/sumitkshatrya)
* **LinkedIn**: [linkedin.com/in/sumit9kumar](https://linkedin.com/in/sumit9kumar)
* **Portfolio**: [portfolio-chi-woad-64.vercel.app](https://portfolio-chi-woad-64.vercel.app)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

### 1. Editorial Dark UI / UX
* **Curated Palette**: `#101114` base, `#17191F` surface cards, `#8B5CF6` electric violet accents, and subtle borders.
* **Fluid Micro-interactions**: Smooth transitions and hover animations powered by Framer Motion.
* **Responsive Architecture**: Pixel-perfect layout across desktop, tablet, and mobile displays.
* **Accessibility-First**: Visible focus rings, keyboard navigation, and reduced-motion support.

### 2. Grounded AI Portfolio Assistant
* **Floating Launcher**: Bottom-right launcher button with ambient glow and tooltip.
* **Interactive Panel**: Expandable chat window with minimize, maximize, and conversation reset actions.
* **Strict Grounding**: Answers queries strictly using verified portfolio facts with zero hallucination.
* **Contextual Suggestions**: 1-click starter questions and quick-action pills (*Resume*, *GitHub*, *LinkedIn*, *Contact*).
* **Safe Markdown Renderer**: XSS-safe parser formatting code blocks with copy buttons, lists, bold keywords, and interactive links.
* **In-Page Navigation**: Markdown links smoothly scroll to corresponding page sections (`#projects`, `#skills`, `#experience`, `#contact`).

### 3. Flagship Projects Showcase
* **[MediCore AI](https://ai-powered-hospital-1.onrender.com/)**: Full-stack clinical management platform featuring automated symptom evaluation, doctor triage, medical report summarization, and RBAC workflows.
* **[AI Interview Agent](https://a-i-interview-client.onrender.com)**: Intelligent mock interview simulator generating contextual questions by role, evaluating speech/text responses, and delivering score analytics.
* **[Zentra E-Commerce](https://zentra-frontend.vercel.app)**: Modern storefront featuring AI-driven recommendations, dual payment gateways (Stripe & Razorpay), and order lifecycle tracking.
* **[Real Estate Platform](https://propsestate-ytdn.onrender.com/)**: Enterprise property portal with multi-criteria MongoDB aggregation search and responsive admin dashboard.
* **[Socket.io Chat](https://chat-app-frontend-omega-sand.vercel.app/)**: Bidirectional WebSocket messaging with presence tracking and persistent channels.

---

## 🏗️ Architecture & Project Structure

The project is structured as a clean monorepo with dedicated `client` and `server` workspaces:

```
Portfolio/
├── client/                     # Frontend React + Vite SPA
│   ├── public/                 # Static assets, PDFs (resume, certificates), sitemap
│   │   ├── resume.pdf
│   │   └── ...
│   ├── src/
│   │   ├── assets/             # Images & static media
│   │   ├── components/         # Page sections & UI components
│   │   │   ├── ai-assistant/   # Floating launcher, panel, input, messages & markdown renderer
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   ├── data/               # Structured data sources for portfolio sections
│   │   ├── App.jsx             # Main application layout
│   │   ├── index.css           # Tailwind custom styling & scrollbar design
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js          # Proxies /api requests to server:5000 in dev
│
├── server/                     # Backend AI Assistant Service
│   ├── data/
│   │   └── portfolioKnowledge.js # Verified knowledge base & prompt ground truth
│   ├── routes/
│   │   └── chat.js             # POST /api/chat with rate limiting & sanitization
│   ├── services/
│   │   ├── aiService.js        # Google Gemini integration with automatic model fallback
│   │   └── dbService.js        # Non-blocking MongoDB telemetry logging
│   ├── server.js               # Express application entry point
│   ├── package.json
│   └── .env.example            # Environment variables template
│
├── package.json                # Root npm workspace orchestrator
├── .gitignore                  # Prevents committing secrets, logs, and build artifacts
└── README.md
```

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind CSS, Framer Motion, GSAP, React Icons (`react-icons/lu`) |
| **Backend** | Node.js, Express, CORS, Express Rate Limit, Dotenv |
| **AI / LLM** | Google Gemini API (`gemini-3.5-flash-lite`, `gemini-2.5-flash-lite`, `gemini-3.1-flash-lite`) |
| **Database** | MongoDB Atlas (Optional Chat Analytics & Telemetry) |
| **Tooling** | ESLint 9, PostCSS, Autoprefixer, Git |

---

## ⚡ Quick Start

### Prerequisites
* **Node.js** >= 18.x
* **npm** >= 9.x
* A [Google AI Studio API Key](https://aistudio.google.com/) for the AI assistant

### 1. Clone the repository
```bash
git clone https://github.com/sumitkshatrya/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
Install all root, client, and server dependencies with one command:
```bash
npm install
cd server && npm install && cd ..
```

### 3. Configure environment variables
Create a `.env` file inside the `server/` directory:
```bash
cp server/.env.example server/.env
```

Edit `server/.env` with your credentials:
```env
PORT=5000
GEMINI_API_KEY=your_google_gemini_api_key
GEMINI_MODEL=gemini-3.5-flash-lite

# Optional: MongoDB connection for telemetry
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/
MONGODB_DB_NAME=portfolio
```

### 4. Run locally

* **Start the backend server (Port 5000)**:
  ```bash
  npm run server:dev
  ```

* **In a second terminal, start the frontend (Port 5173)**:
  ```bash
  npm run dev
  ```

Visit `http://localhost:5173` in your browser. The Vite development server automatically proxies `/api/*` requests to `http://localhost:5000`.

---

## 📡 API Endpoints

### `GET /api/health`
Health check endpoint verifying server availability.
* **Response `200 OK`**:
  ```json
  {
    "status": "healthy",
    "timestamp": "2026-10-20T12:00:00.000Z",
    "service": "Sumit's Portfolio AI Assistant Backend"
  }
  ```

### `POST /api/chat`
Generates a grounded assistant response based on recent message history.
* **Headers**: `Content-Type: application/json`
* **Request Body**:
  ```json
  {
    "message": "What are Sumit's strongest full-stack projects?",
    "history": [
      { "role": "user", "content": "Hi" },
      { "role": "assistant", "content": "Hello! How can I help you?" }
    ]
  }
  ```
* **Response `200 OK`**:
  ```json
  {
    "success": true,
    "reply": "Sumit has engineered several production-grade full-stack applications..."
  }
  ```
* **Safeguards**:
  * Rate-limited to 40 requests per 10 minutes per IP.
  * Rejects empty messages (`400 Bad Request`).
  * Enforces a 600-character limit per prompt to prevent DOS/prompt injection.
  * Sanitizes past turns and limits history to the 10 most recent messages.

---

## 📦 Deployment Guidance

### Deploying the Frontend (Vercel / Netlify)
1. Set the **Root Directory** to `client`.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Set Environment Variable:
   * `VITE_API_BASE_URL`: The URL of your deployed backend (e.g. `https://your-api.onrender.com`).

### Deploying the Backend (Render / Railway / VPS)
1. Set the **Root Directory** to `server`.
2. Build Command: `npm install`
3. Start Command: `node server.js`
4. Add Environment Variables:
   * `PORT=5000`
   * `GEMINI_API_KEY`: Your Gemini API key.
   * `GEMINI_MODEL`: `gemini-3.5-flash-lite` (or desired model).
   * `MONGODB_URI`: Your MongoDB connection string (optional).

---

## 👨‍💻 About Sumit Kumar

* **Role**: AI-Powered MERN / Full Stack Developer
* **Location**: Moradabad, UP, India
* **Education**: Master of Computer Applications (MCA) — AKTU / IIMT
* **Email**: [skumar21082001@gmail.com](mailto:skumar21082001@gmail.com)
* **Phone**: +91 9528865099
* **GitHub**: [@sumitkshatrya](https://github.com/sumitkshatrya)
* **LinkedIn**: [linkedin.com/in/sumit9kumar](https://linkedin.com/in/sumit9kumar)
* **Portfolio**: [portfolio-chi-woad-64.vercel.app](https://portfolio-chi-woad-64.vercel.app)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

