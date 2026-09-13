/**
 * Projects shown on the site.
 *
 * To add a project: copy an object, fill the fields, save.
 * Leave github or live as "" to hide that button.
 * image is optional: a numbered editorial cover is used if empty.
 *
 * Only verified links are included. Talksy has no public GitHub repo.
 */
export const projects = [
  {
    id: "pratibimb",
    title: "Pratibimb 4.0",
    tag: "Editorial",
    featured: true,
    description:
      "Digital home of Pratibimb, the annual magazine of the IEEE Student Branch at Bharati Vidyapeeth's College of Engineering. Themeable archive, in-browser PDF reader, and a file-swap workflow so editors can add editions without changing React code.",
    highlights: [
      "Chief Editor of the magazine and builder of the public site.",
      "Issue archive, reader, and team pages driven by data files.",
    ],
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS", "DaisyUI", "React Router"],
    github: "https://github.com/Faizaan-Alam/pratibimb",
    live: "https://pratibimb-mu.vercel.app",
    image: "/images/projects/pratibimb.svg",
  },
  {
    id: "model-judge",
    title: "ModelJudge AI",
    tag: "AI / systems",
    featured: true,
    description:
      "Multi-service platform for explainable evaluation of tabular ML models. A React/TypeScript client, Express API, BullMQ worker, FastAPI ML service, and object storage produce a composite ModelJudge Score across performance, robustness, efficiency, explainability, and reproducibility.",
    highlights: [
      "Five-service architecture with Docker Compose.",
      "SHAP/LIME explanations owned by the Python ML service, not the Node layer.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "Socket.io",
      "FastAPI",
      "MongoDB",
      "Redis",
      "MinIO",
      "Docker Compose",
      "GitHub Actions",
    ],
    github: "https://github.com/Faizaan-Alam/model-judge-Ai",
    live: "",
    image: "/images/projects/model-judge.svg",
  },
  {
    id: "anubandh",
    title: "ANUBANDH",
    tag: "Web3 · SIH",
    featured: true,
    description:
      "Smart India Hackathon problem SIH26125 (Bharat Electronics Limited): a permissioned EVM platform for decentralized identity, smart-contract RBAC, NFT asset management, signed attestations, and a tamper-evident audit trail.",
    highlights: [
      "On-chain DID registration, key rotation, and revocation.",
      "Next.js portal plus an installable verifier PWA with genuine offline gating.",
    ],
    technologies: [
      "Solidity",
      "Foundry",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Next.js",
      "ethers.js",
    ],
    github: "https://github.com/Faizaan-Alam/anubandh-sih26125",
    live: "https://anubandh-web.vercel.app",
    image: "/images/projects/anubandh.svg",
  },
  {
    id: "qaafila",
    title: "Qaafila",
    tag: "Literary society",
    featured: true,
    description:
      "Official website of Qaafila, BVP's literary society. Built during the 2026-27 tenure as President: team, legacy, evenings, and write-ups in one place.",
    highlights: [
      "Live site used by the society.",
      "Copy and portraits are data-driven for future tenures.",
    ],
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Faizaan-Alam/qaafila_bvp",
    live: "https://qaafila-bvp.vercel.app",
    image: "/images/projects/qaafila.svg",
  },
  {
    id: "cryptotrack",
    title: "CryptoTrack",
    tag: "Product",
    featured: true,
    description:
      "Real-time tracker for the top 100 cryptocurrencies: portfolio, watchlists, price alerts, and charts, with in-memory caching to stay inside CoinGecko rate limits.",
    highlights: [
      "Deployed on Vercel.",
      "Dashboard, coin pages, and localStorage-backed watchlist.",
    ],
    technologies: ["React 19", "Vite", "Tailwind CSS", "Recharts", "CoinGecko API"],
    github: "https://github.com/Faizaan-Alam/cryptotrack",
    live: "https://cryptotrack-sandy.vercel.app",
    image: "/images/projects/cryptotrack.svg",
  },
  {
    id: "talksy",
    title: "Talksy",
    tag: "Realtime",
    featured: true,
    description:
      "Real-time chat and video calling platform with JWT authentication and Stream APIs for messaging and call infrastructure. Zustand on the client; React Native frontend noted as in progress on the resume.",
    highlights: [
      "JWT auth and structured error handling on a deployed backend.",
    ],
    technologies: ["React", "Express", "MongoDB", "Tailwind CSS", "Zustand", "Stream APIs", "JWT"],
    github: "",
    live: "",
    image: "/images/projects/talksy.svg",
  },
  {
    id: "wallet",
    title: "Web-based wallet",
    tag: "Web3",
    featured: false,
    description:
      "Browser wallet that creates Ethereum and Solana accounts from a secret recovery phrase.",
    highlights: [],
    technologies: ["React", "JavaScript", "Ethereum", "Solana"],
    github: "https://github.com/Faizaan-Alam/web-based-wallet",
    live: "https://web-based-wallet-sigma.vercel.app",
    image: "/images/projects/wallet.svg",
  },
  {
    id: "type-fighter",
    title: "Type Fighter",
    tag: "Game",
    featured: false,
    description:
      "Web typing-combat game: type to punch, defend, crit, and KO. Modes, bosses, style meter, local profile, and procedural Web Audio.",
    highlights: [],
    technologies: ["TypeScript", "Vite", "Vitest"],
    github: "https://github.com/Faizaan-Alam/web-based-typing-game",
    live: "",
    image: "/images/projects/type-fighter.svg",
  },
  {
    id: "truthscope",
    title: "TruthScope AI",
    tag: "AI / analytics",
    featured: false,
    description:
      "Misinformation and sentiment analytics: collectors, SQLite, FastAPI, and a dashboard that scores risk signals (not claims of objective truth).",
    highlights: [],
    technologies: ["Python", "FastAPI", "scikit-learn", "SQLite"],
    github: "https://github.com/Faizaan-Alam/truthscope-ai",
    live: "",
    image: "/images/projects/truthscope.svg",
  },
  {
    id: "potato-disease",
    title: "Potato disease detection",
    tag: "College demo",
    featured: false,
    description:
      "Swin-YOLO hybrid classifier for early blight, late blight, and healthy leaves, with OpenCV severity percentage and a one-page Flask UI.",
    highlights: [],
    technologies: ["Python", "OpenCV", "Flask"],
    github: "https://github.com/Faizaan-Alam/potato-disease",
    live: "",
    image: "/images/projects/potato-disease.svg",
  },
  {
    id: "job-portal",
    title: "Job portal",
    tag: "Internship",
    featured: false,
    description:
      "MERN job portal from the 3skil internship: JWT auth for seekers and employers, listings, and application management. Image uploads via Cloudinary.",
    highlights: [],
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Cloudinary"],
    github: "https://github.com/Faizaan-Alam/job-portal-app",
    live: "",
    image: "/images/projects/job-portal.svg",
  },
]
