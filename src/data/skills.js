/**
 * Skills — grouped by category.
 *
 * Do not add percentage bars here. Each skill can list where it was used
 * so the site stays honest. Edit this file to add or remove a skill.
 *
 * Sources: resume (Faizaan_Alam_Resume.pdf / Modern) and public GitHub repos.
 */
export const skillGroups = [
  {
    id: "languages",
    title: "Programming",
    items: [
      { name: "JavaScript", evidence: "Most web projects" },
      { name: "TypeScript", evidence: "ModelJudge AI, ANUBANDH, Type Fighter" },
      { name: "Python", evidence: "ModelJudge AI, TruthScope AI, potato-disease" },
      { name: "Java", evidence: "Resume" },
      { name: "C++", evidence: "Resume" },
      { name: "C", evidence: "Resume (listed as basics)" },
    ],
  },
  {
    id: "web",
    title: "Web development",
    items: [
      { name: "React", evidence: "Pratibimb, Qaafila, CryptoTrack, Talksy, wallet" },
      { name: "HTML / CSS", evidence: "All frontend work" },
      { name: "Tailwind CSS", evidence: "Pratibimb, Qaafila, CryptoTrack, Talksy" },
      { name: "DaisyUI", evidence: "Pratibimb" },
      { name: "Vite", evidence: "Pratibimb, CryptoTrack, Qaafila" },
      { name: "Redux", evidence: "Resume" },
      { name: "Zustand", evidence: "Talksy" },
      { name: "Context API", evidence: "CryptoTrack, resume" },
      { name: "React Router", evidence: "Pratibimb, CryptoTrack" },
      { name: "Next.js", evidence: "ANUBANDH portal and verifier PWA" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      { name: "Node.js", evidence: "Talksy, ModelJudge AI, job portal, ANUBANDH" },
      { name: "Express.js", evidence: "Talksy, ModelJudge AI, job portal, ANUBANDH" },
      { name: "FastAPI", evidence: "ModelJudge AI, TruthScope AI" },
      { name: "REST APIs", evidence: "Resume and backend repos" },
      { name: "Socket.io", evidence: "ModelJudge AI" },
      { name: "JWT", evidence: "Talksy, ModelJudge AI, job portal" },
    ],
  },
  {
    id: "data",
    title: "Data and infrastructure",
    items: [
      { name: "MongoDB", evidence: "Talksy, ModelJudge AI, job portal" },
      { name: "PostgreSQL", evidence: "ANUBANDH" },
      { name: "Redis", evidence: "ModelJudge AI" },
      { name: "MinIO", evidence: "ModelJudge AI" },
      { name: "Prisma", evidence: "ANUBANDH" },
      { name: "Docker / Compose", evidence: "ModelJudge AI, ANUBANDH" },
      { name: "BullMQ", evidence: "ModelJudge AI" },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML",
    items: [
      {
        name: "Tabular model evaluation",
        evidence: "ModelJudge Score: performance, robustness, efficiency, explainability",
      },
      { name: "SHAP / LIME", evidence: "ModelJudge AI ML service" },
      { name: "scikit-learn", evidence: "TruthScope AI (sentiment, fake-news, NMF topics)" },
      { name: "OpenCV", evidence: "Potato disease severity mask" },
      { name: "Swin + YOLO hybrid", evidence: "Potato disease college demo" },
    ],
  },
  {
    id: "web3",
    title: "Web3 / blockchain",
    items: [
      { name: "Ethereum wallets", evidence: "web-based-wallet; resume fundamentals" },
      { name: "Solana wallets", evidence: "web-based-wallet; resume fundamentals" },
      { name: "Solidity", evidence: "ANUBANDH contracts" },
      { name: "Foundry / Anvil", evidence: "ANUBANDH" },
      { name: "ethers.js", evidence: "ANUBANDH" },
      { name: "OpenZeppelin", evidence: "ANUBANDH ERC-721 and RBAC" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    items: [
      { name: "Git / GitHub", evidence: "All public work" },
      { name: "GitHub Actions", evidence: "ModelJudge AI CI; resume" },
      { name: "pytest", evidence: "ModelJudge AI, TruthScope AI" },
      { name: "Vitest / Playwright", evidence: "ANUBANDH, Type Fighter" },
    ],
  },
]
