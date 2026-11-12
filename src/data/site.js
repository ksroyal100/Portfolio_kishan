// ─────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH — edit your content here, nowhere else.
//  Everything shown on the site is read from this file.
// ─────────────────────────────────────────────────────────────

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://kishan-portfolio-s.vercel.app'

export const profile = {
  name: 'Kishan Sahu',
  initials: 'KS',
  title: 'Software Engineer',
  roles: ['Backend Developer', 'Full-Stack Developer', 'AI-Integrated App Builder'],
  headline: 'I build scalable backends and AI-powered products.',
  intro:
    'Software engineer working across Java / Spring Boot, Node.js and Next.js. I like turning messy requirements into clean REST APIs, reliable data models and interfaces people actually enjoy using — and I ship them to production.',
  location: 'India',
  availability: 'Open to SWE roles · Open to relocation',
  email: 'guptakishan492@gmail.com',
  github: 'https://github.com/ksroyal100',
  linkedin: 'https://www.linkedin.com/in/kishansahu492',
  resume: '/Kishan_Sahu_Resume.pdf',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

// Numbers are taken from your resume. Keep them true — interviewers ask.
export const stats = [
  { value: 100, suffix: '+', label: 'DSA problems solved', sub: 'LeetCode & GFG' },
  { value: 1200, suffix: '+', label: 'Hours of hands-on coding' },
  { value: 4, suffix: '', label: 'Projects built end-to-end' },
  { value: 8.1, suffix: '', label: 'CGPA in BCA', decimals: 1 },
]

// export const about = {
//   paragraphs: [
//     'I am a backend-leaning full-stack developer who enjoys the unglamorous parts of software that make products dependable: API design, authentication, data modelling, caching and deployment.',
//     'My core stack is Java (Spring Boot, Hibernate/JPA) and Node.js (Express) with MySQL and MongoDB, paired with React and Next.js on the front end. Lately I have been integrating LLMs into real workflows — Gemini and OpenAI APIs, prompt design and RAG-style pipelines — as in my Smart Code Reviewer.',
//     'I am actively sharpening data structures, algorithms and system design, and I am looking for an engineering team where I can own features end-to-end and learn from strong engineers.',
//   ],
//   facts: [
//     { label: 'Focus', value: 'Backend · Full-Stack · AI integration' },
//     { label: 'Education', value: 'BCA, VBS Purvanchal University' },
//     { label: 'Based in', value: 'India · open to relocation' },
//     { label: 'Looking for', value: 'Backend / Full-Stack SDE roles' },
//   ],
// }


export const about = {
  paragraphs: [
    "I am a software engineer focused on backend engineering and building practical software applications. My primary interests include Java, Spring Boot, REST API development, database design, and software architecture.",

    "I also work with JavaScript, TypeScript, Next.js, and React to develop full-stack applications. Through my projects, I have explored authentication, database integration, API development, and AI-powered application features.",

    "I enjoy understanding engineering problems, writing maintainable code, and turning ideas into working software. I am continuously strengthening my knowledge of data structures, algorithms, backend systems, and system design."
  ],
  facts: [
    { label: "Primary Focus", value: "Backend Engineering" },
    { label: "Backend Stack", value: "Spring Boot · REST APIs · SQL" },
    { label: "Additional Stack", value: "Next.js · TypeScript · Node.js" },
    { label: "Education", value: "BCA · 8.1 CGPA" },
    { label: "Location", value: "India · Open to Relocation" }
  ]
}


export const skills = [
  {
    category: 'Languages',
    blurb: 'Strong on Java and JavaScript fundamentals.',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    category: 'Backend',
    blurb: 'REST APIs, auth and data layers.',
    items: ['Spring Boot', 'Hibernate / JPA', 'Node.js', 'Express', 'REST APIs', 'JWT Auth', 'Microservices (basics)'],
  },
  {
    category: 'Frontend',
    blurb: 'Fast, accessible, responsive UIs.',
    items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Redux', 'Framer Motion'],
  },
  {
    category: 'Databases',
    blurb: 'Relational and document stores.',
    items: ['MySQL', 'MongoDB', 'Redis (caching)'],
  },
  {
    category: 'AI Integration',
    blurb: 'Shipping LLM features into real apps.',
    items: ['Gemini API', 'OpenAI API', 'Prompt Engineering', 'LangChain', 'RAG basics'],
  },
  {
    category: 'Cloud & Tooling',
    blurb: 'Ship, version and deploy.',
    items: ['Git & GitHub', 'GitHub Actions', 'Docker (basic)', 'AWS (EC2, S3, RDS)', 'Vercel', 'Render', 'Postman'],
  },
]

export const projects = [
  {
    slug: 'smartbuddy',
    featured: true,
    title: 'SmartBuddy — AI Code Reviewer',
    type: 'AI · Full-Stack',
    image: '/images/projects/smartbuddy.webp',
    summary:
      'Paste code and get a structured review: what is wrong, why it matters and a recommended fix. Built around a code-review workflow rather than a general chat box.',
    highlights: [
      'Gemini-powered analysis returns a consistent Bad Code → Issues → Recommended Fix format.',
      'Next.js front end with a split editor / review view; REST APIs in Spring Boot with MySQL via Hibernate/JPA.',
    ],
    stack: ['Next.js', 'Gemini API', 'Spring Boot', 'MySQL', 'Hibernate / JPA'],
    live: 'https://smart-code-reviewer.vercel.app/',
    github: 'https://github.com/ksroyal100/Smart_Code_Reviewer',
  },
  {
    slug: 'livedocs',
    title: 'LiveDocs',
    type: 'Collaborative Editor',
    image: '/images/projects/livedocs.webp',
    summary:
      'A real-time collaborative document editor: rich-text editing, shareable documents and threaded comments with reactions.',
    highlights: [
      'Secure authentication and per-document sharing.',
      'Built with Next.js and TypeScript.',
    ],
    stack: ['Next.js', 'TypeScript'],
    live: 'https://livesdocs.vercel.app/',
    github: 'https://github.com/ksroyal100/Livesdocs',
  },
  {
    slug: 'vshop',
    title: 'V-Shop',
    type: 'MERN E-Commerce',
    image: '/images/projects/vshop.webp',
    summary:
      'Full-stack e-commerce app with authentication, product catalogue, cart and order modules.',
    highlights: [
      'JWT-based auth; tested with 50+ users.',
      'Optimised REST APIs for roughly 25% faster responses.',
    ],
    stack: ['React', 'Tailwind CSS', 'MUI', 'Node.js', 'Express', 'MongoDB Atlas'],
    live: 'https://ecommerce-frontend-dusky-alpha.vercel.app/',
    github: 'https://github.com/ksroyal100/Ecommerce-Frontend',
  },
  {
    slug: 'budget-planner',
    title: 'Budget Planner',
    type: 'Mobile App',
    image: '/images/projects/budget-planner.webp',
    summary:
      'Cross-platform expense tracker with authentication, budget tracking and interactive charts.',
    highlights: [
      'CRUD flows backed by a real-time database.',
      'Modular, reusable components across screens.',
    ],
    stack: ['React Native', 'Real-time DB', 'Charts'],
    github: 'https://github.com/ksroyal100/Planner',
  },
]

// NOTE: your two resumes disagreed on this entry (university internship Aug 2022–Dec 2023
// vs. “self-initiated projects” Dec 2024–Present). Keep whichever is TRUE and matches
// your LinkedIn, then make the resume PDF match.
export const experience = [
  {
    role: 'Full-Stack Developer Intern',
    org: 'Veer Bahadur Singh Purvanchal University',
    place: 'Jaunpur, India',
    period: 'Aug 2022 – Dec 2023',
    points: [
      'Built and shipped applications end-to-end following the SDLC, using Java and JavaScript with OOP principles.',
      'Developed RESTful APIs in Node.js backed by MongoDB.',
      'Worked in sprint-based Agile/Scrum cycles with unit testing, debugging and code optimisation.',
      'Used Git/GitHub for version control and CI workflows; deployed to Render and Vercel.',
    ],
  },
]

export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Veer Bahadur Singh Purvanchal University',
    period: '2020 – 2023',
    note: '8.1 CGPA · Data Structures & Algorithms, DBMS (MySQL, MongoDB), Web Development, Systems Design.',
  },
]

export const certifications = [
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', desc: 'Cloud concepts, core services, security and pricing.' },
  { name: 'Oracle Java Programming', issuer: 'Oracle', desc: 'Core Java, OOP and application development.' },
  { name: 'Google Essentials: Generative AI', issuer: 'Google', desc: 'Gen-AI fundamentals and prompt engineering.' },
]
