/**
 * Personal information: edit this file to change name, bio, contact, and education.
 *
 * Photo: drop a new file at public/images/profile/faizaan.webp
 *        (keep the same filename, then refresh).
 * Resume: replace public/resume/Faizaan_Alam_Resume.pdf
 */
export const personal = {
  name: "Faizaan Alam",
  firstName: "Faizaan",
  lastName: "Alam",
  headline: "B.Tech CSE AIML Student · Developer · Writer · Athlete",
  kicker: "Portfolio",
  shortIntro:
    "I build full-stack web apps, work with AI/ML systems, and still make time for poetry, films, and the 100m.",
  about: [
    "I am a B.Tech Computer Science student specializing in AI/ML at Guru Gobind Singh Indraprastha University, based at Bharati Vidyapeeth's College of Engineering in New Delhi.",
    "Most of my work sits in the MERN stack: React on the front, Node and Express behind it, with Python when the problem is a model, a pipeline, or an evaluation. I have also been learning Web3 by shipping things: a browser wallet for Ethereum and Solana, and ANUBANDH, a permissioned identity and asset platform for Smart India Hackathon.",
    "I do not only write code. I am Chief Editor of Pratibimb, the IEEE student magazine, and I built its public site so editors can swap issues without touching React. I am President of Qaafila, the college literary society, and I built that house too. Poetry and shayari are the through-line.",
    "On the track I sprint the 100m for the college athletics team. The same discipline shows up in how I like to ship: clear structure, honest scope, and work that can be maintained by someone else later.",
  ],
  facts: [
    { label: "Study", value: "B.Tech CSE (AI/ML), GGSIPU" },
    { label: "College", value: "BVCOE, New Delhi" },
    { label: "CGPA", value: "8.35" },
    { label: "Now", value: "Web Development Intern, Tekraze" },
  ],
  email: "faizaanalam.connect@gmail.com",
  phone: "+91 93199 55443",
  phoneHref: "tel:+919319955443",
  contactForm: {
    subject: "New message from faizaan-alam-portfolio",
    success: "Sent. I will reply to the email you entered.",
    error: "The message did not send. Email me directly instead.",
  },
  location: "New Delhi, India",
  availability:
    "Available for Software Engineer / Full Stack intern roles. Open to remote and on-site.",
  github: "https://github.com/Faizaan-Alam",
  githubHandle: "Faizaan-Alam",
  linkedin: "https://www.linkedin.com/in/faizaan-alam-b59579323",
  resumePath: "/resume/Faizaan_Alam_Resume.pdf",
  photo: "/images/profile/faizaan.webp",
  photoAlt: "Portrait of Faizaan Alam, wearing glasses and a light blue shirt",
  seo: {
    title: "Faizaan Alam | Developer, Writer, Athlete",
    description:
      "Faizaan Alam is a B.Tech CSE AIML student at GGSIPU and a full-stack developer working with React, Node.js, Python, and Web3. Writer, editor, and 100m sprinter based in New Delhi.",
    url: "",
    image: "/images/profile/faizaan.webp",
  },
}

export const education = [
  {
    title: "B.Tech, Computer Science (AI/ML)",
    org: "Guru Gobind Singh Indraprastha University",
    detail: "Bharati Vidyapeeth's College of Engineering, New Delhi",
    meta: "CGPA 8.35",
  },
  {
    title: "Senior Secondary (XII), CBSE",
    org: "Hansraj Model School",
    detail: null,
    meta: "88.6% · 2025",
  },
]

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "hobbies", label: "Hobbies" },
  { id: "sports", label: "Sports" },
  { id: "contact", label: "Contact" },
]
