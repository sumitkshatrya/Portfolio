export const projectsData = [
  {
    id: "medicore-ai",
    title: "AI-Powered Hospital & Doctor Management System",
    shortName: "MediCore AI",
    year: "2026",
    category: "Full Stack & Healthcare AI",
    featured: true,
    tagline:
      "Comprehensive AI-powered healthcare management platform featuring automated symptom analysis, doctor triage, medical report summarization, and RBAC workflows.",
    problem:
      "Hospital triage and patient scheduling frequently suffer from manual paperwork, delayed doctor assignment, and cumbersome medical report interpretation, straining clinical staff and delaying care.",
    solution:
      "Engineered a full-stack clinical platform leveraging OpenAI API for natural language symptom evaluation and doctor recommendation, paired with automated medical report summarization and an intelligent patient triage chatbot.",
    architecture:
      "Designed role-based access control (RBAC) separating Patient, Doctor, and Hospital Administrator portals with JWT security. MongoDB aggregations manage appointments and doctor availability schedules in real time.",
    contributions: [
      "Engineered automated symptom analysis engine recommending suitable medical specialists based on natural language queries.",
      "Implemented JWT authentication and fine-grained Role-Based Access Control (RBAC) across patient, doctor, and administrator dashboards.",
      "Built medical report summarization pipeline delivering concise, digestible patient health overviews.",
      "Designed real-time appointment scheduling, doctor availability management, and intelligent chatbot assistance.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "JWT",
      "Tailwind CSS",
      "REST APIs",
    ],
    metrics: [
      "Role-Based Access (RBAC)",
      "Automated Triage",
      "Medical Summarization",
      "Real-time Scheduling",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/sumitkshatrya/AI-POWERED-HOSPITAL",
    accentGradient: "from-violet-500/20 via-blue-500/10 to-transparent",
    badge: "Flagship AI Application",
  },
  {
    id: "ai-interview-agent",
    title: "AI Interview Preparation Platform",
    shortName: "AI Interview Agent",
    year: "2026",
    category: "MERN Stack + GenAI",
    featured: true,
    tagline:
      "Intelligent interview simulator generating contextual technical questions by role, evaluating speech/text responses, and delivering actionable performance analytics.",
    problem:
      "Job candidates lack affordable, objective, real-time mock interview platforms that provide instant technical feedback and communication analysis without human interviewer scheduling bottlenecks.",
    solution:
      "Built an interactive mock interview environment featuring dynamic question generation tailored to specific engineering roles, timed responses, real-time feedback scoring, and progress tracking.",
    architecture:
      "Structured with React and Tailwind CSS on the frontend with custom timer hooks and audio response recording, communicating with an Express/Node.js backend that orchestrates OpenAI API prompts with JWT-secured candidate sessions.",
    contributions: [
      "Built dynamic question generation pipeline delivering role-specific technical and behavioral questions.",
      "Developed intelligent feedback analyzer scoring communication clarity, technical depth, and candidate confidence.",
      "Engineered interactive interview UI with synchronized timer, progressive step flows, and response recording.",
      "Implemented candidate analytics dashboard visualizing score histories and improvement areas.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "JWT",
      "Tailwind CSS",
      "REST APIs",
    ],
    metrics: [
      "Dynamic Role Prompts",
      "Communication Analysis",
      "Progress Dashboards",
      "Timed Responses",
    ],
    liveUrl: "https://a-i-interview-client.onrender.com",
    githubUrl: "https://github.com/sumitkshatrya/A.I-Interview",
    accentGradient: "from-blue-500/20 via-violet-500/10 to-transparent",
    badge: "Production Deployed",
  },
  {
    id: "zentra-ecommerce",
    title: "Zentra — AI-Powered E-Commerce Platform",
    shortName: "Zentra Commerce",
    year: "2025",
    category: "Full Stack Commerce",
    featured: true,
    tagline:
      "Modern full-stack e-commerce web application with AI product recommendations, dual payment gateways (Stripe & Razorpay), and complete order lifecycle management.",
    problem:
      "Traditional online storefronts suffer from rigid catalogs, disconnected inventory states, and single-gateway checkout drop-offs.",
    solution:
      "Developed an end-to-end commerce system featuring AI-driven search and personalized recommendations, interactive cart/wishlist management, and resilient dual-gateway payment processing.",
    architecture:
      "MERN architecture utilizing MongoDB indexing for low-latency product filtering, Express RESTful endpoints for transactional checkout, and dual webhooks for Stripe and Razorpay payment reconciliation.",
    contributions: [
      "Engineered full-stack checkout flow integrating dual payment gateways (Stripe & Razorpay) with transactional security.",
      "Built AI-powered product recommendation algorithms based on browsing history and category affinities.",
      "Designed RESTful endpoints for real-time inventory tracking, order status updates, and user review management.",
      "Implemented secure JWT session management with persistent cart, wishlist, and customer order history.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe API",
      "Razorpay API",
      "JWT",
      "Tailwind CSS",
    ],
    metrics: [
      "Dual Gateway Checkout",
      "AI Recommendations",
      "Real-time Inventory",
      "Order Lifecycle Tracking",
    ],
    liveUrl: "https://zentra-frontend.vercel.app",
    githubUrl: "https://github.com/sumitkshatrya/E-Commerce-App",
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    badge: "Production Deployed",
  },
  {
    id: "real-estate-platform",
    title: "Enterprise Real Estate Management Platform",
    shortName: "Real Estate Portal",
    year: "2025",
    category: "MERN Platform",
    featured: false,
    tagline:
      "Full-featured property management system with AI recommendations, administrative CRUD controls, and high-performance MongoDB aggregation search.",
    problem:
      "Manual real estate property listing and lead coordination required excessive administrative hours, resulting in fragmented property data and delayed client inquiries.",
    solution:
      "Built an automated property portal with advanced multi-criteria filtering, administrator CRUD dashboard, integrated property inquiry chatbot, and optimized image uploads.",
    architecture:
      "Built during internship at The Entrepreneurship Network. Utilized MongoDB aggregation pipelines to reduce manual listing overhead by 40% while delivering responsive UI across all screen sizes.",
    contributions: [
      "Developed property management system with AI recommendations and responsive admin CRUD dashboard.",
      "Engineered MongoDB aggregation queries for rapid filtering by geographic location, budget range, and amenity tags.",
      "Built 8+ RESTful APIs for property data, user authentication, and client testimonials.",
      "Integrated AI inquiry chatbot for instant property guidance and automated lead capture.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "Tailwind CSS",
    ],
    metrics: [
      "40% Less Manual Effort",
      "8+ RESTful APIs",
      "Multi-Filter Aggregation",
      "Admin CRUD Suite",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/sumitkshatrya/Realestate",
    accentGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    badge: "Internship Enterprise Build",
  },
  {
    id: "realtime-chat-app",
    title: "Real-time Distributed Chat Application",
    shortName: "Socket.io Chat",
    year: "2025",
    category: "Distributed Systems & WebSockets",
    featured: false,
    tagline:
      "Low-latency real-time messaging platform powered by WebSockets, supporting private conversations, group rooms, typing telemetry, and active presence.",
    problem:
      "Standard HTTP polling architectures create latency and server overhead when coordinating real-time user communications.",
    solution:
      "Implemented a bidirectional event-driven communication system using Socket.io and Node.js, delivering instantaneous message delivery and live presence indicators.",
    architecture:
      "Decoupled React client communicating over secure WebSocket channels, backed by Express.js session validation and MongoDB message persistence with pagination.",
    contributions: [
      "Implemented bidirectional WebSocket event handlers for instant message broadcasting and acknowledgment.",
      "Built room routing for 1-on-1 private messaging and dynamic multi-user group channels.",
      "Added typing indicator telemetry, online/offline status monitoring, and message history persistence.",
    ],
    technologies: [
      "React.js",
      "Vite",
      "Socket.io",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    metrics: [
      "Sub-100ms Latency",
      "Presence Tracking",
      "Group & Direct Channels",
      "Persistent History",
    ],
    liveUrl: "https://chat-app-frontend-omega-sand.vercel.app/",
    githubUrl: "https://github.com/sumitkshatrya/Chat-App-frontend",
    accentGradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    badge: "Production Deployed",
  },
  {
    id: "project-ranking-system",
    title: "Project Evaluation & Ranking Platform",
    shortName: "Ranking Engine",
    year: "2025",
    category: "Analytical Tooling",
    featured: false,
    tagline:
      "Automated evaluation engine computing weighted technical scores across multiple academic and project parameters with visual reporting.",
    problem:
      "Academic and technical project assessment processes are often subjective, non-standardized, and cumbersome to tally across multiple judges.",
    solution:
      "Developed a standardized evaluation engine with automated mathematical scoring algorithms, role-based evaluator access, and interactive analytics dashboards.",
    architecture:
      "React/Vite single-page application with chart visualizations, RESTful API scoring calculations in Node.js, and structured relational persistence.",
    contributions: [
      "Designed algorithmic weighted scoring model for objective multi-parameter project evaluation.",
      "Built interactive dashboard featuring score distributions, parameter heatmaps, and ranking reports.",
      "Implemented secure scoring submissions with input sanitation and validation.",
    ],
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
    metrics: [
      "Weighted Algorithms",
      "Automated Leaderboards",
      "Analytics Dashboard",
      "Evaluator RBAC",
    ],
    liveUrl: "https://ranking-based-frontend.vercel.app/",
    githubUrl: "https://github.com/sumitkshatrya/Ranking-based-frontend",
    accentGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    badge: "Production Deployed",
  },
  {
    id: "text-utility-robo",
    title: "Text Utility Robo — Lexical Engine",
    shortName: "Text Utility",
    year: "2024",
    category: "Frontend Utility",
    featured: false,
    tagline:
      "High-speed browser-based text analysis and transformation utility for string manipulation, regex cleaning, and lexical diagnostics.",
    problem:
      "Developers and content writers frequently need fast, privacy-preserving client-side tools for string transformations, casing normalization, and character counting.",
    solution:
      "Built a lightweight client-side application executing instant regex manipulation, reading time estimations, whitespace deduplication, and export workflows.",
    architecture:
      "Pure client-side React architecture with zero network latency, instant state recalculations, and accessibility-first responsive layout.",
    contributions: [
      "Engineered real-time string transformation routines (casing, trimming, regex sanitization).",
      "Implemented dynamic reading-time, character, and word count calculators.",
      "Designed responsive UI with clipboard copy feedback and keyboard shortcut support.",
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
    metrics: [
      "Instant Processing",
      "Zero Network Overhead",
      "100% Client-Side",
      "Keyboard Accessible",
    ],
    liveUrl: "https://textutilityrobo.netlify.app",
    githubUrl: null,
    accentGradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
    badge: "Production Deployed",
  },
];
