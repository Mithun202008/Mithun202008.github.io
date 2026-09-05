export const personalData = {
  name: "Mithun A",
  fullName: "Mithun Anbazhagan",
  callsign: "MITHUN // SYSTEM",
  systemVersion: "v2.6.4",
  status: "ONLINE",
  availability: "AVAILABLE FOR OPPORTUNITIES",
  location: "Tamil Nadu, India",
  role: "Computer Science Engineering Student",
  institution: "Chennai Institute of Technology",
  degree: "B.E. Computer Science and Engineering",
  academicPeriod: "2025 – 2029 (2nd Year)",
  cgpa: "8.55 / 10",
  bioHeadline: "Computer Science Engineering student building secure, scalable and intelligent digital systems.",
  rotatingRoles: [
    "Cloud Computing Enthusiast",
    "Cybersecurity Explorer",
    "Software Developer",
    "Systems & Network Engineer"
  ],
  interests: [
    "Cloud Computing",
    "Cybersecurity",
    "Software Engineering",
    "AI/ML",
    "Linux Systems",
    "Web Technologies",
    "Problem Solving / DSA"
  ],
  resumeLink: "https://drive.google.com/file/d/1fEmkQrOt0pAiUJDFTTJ8DDyUnEIepaEI/view?usp=sharing",
  contacts: {
    email: "mithunanbazhagan@gmail.com",
    phone: "+91 8825671929",
    github: "https://github.com/Mithun202008",
    linkedin: "https://www.linkedin.com/in/mithun-a-0792a6353/",
    leetcode: "https://leetcode.com/u/mithunanbazhagan/",
    credly: "https://www.credly.com/users/mithun-a.78d500ce/badges/credly"
  }
};

export const projectsData = [
  {
    id: "001",
    slug: "proxc",
    title: "PROXC — Proxy Validation & Analysis Engine",
    domain: "Systems & Security",
    status: "OPEN SOURCE",
    featured: true,
    tagline: "High-performance cross-platform CLI tool for concurrent proxy validation, analysis, and network health audits.",
    description: "Architected an open-source, concurrent command-line utility in Python supporting HTTP, HTTPS, SOCKS4, and SOCKS5 proxies. Features automated CSV field detection, configurable timeouts, custom target URL validation, and structured output. Engineered multi-platform installers (Linux/macOS shell, Windows PowerShell, Debian/Kali packaging) and officially submitted PROXC to the Kali Linux Bug Tracker for consideration as a new pentesting tool.",
    techStack: ["Python", "Networking", "Multithreading", "Linux Packaging", "SOCKS4/5", "Debian/Kali"],
    github: "https://github.com/Mithun202008/proxychk",
    live: null,
    metrics: ["Kali Bug Tracker Submission", "4 Protocols Supported", "Concurrent Engine", "Cross-Platform"]
  },
  {
    id: "002",
    slug: "muleguard-ai",
    title: "MuleGuard AI — Cybercrime Intelligence Platform",
    domain: "Cybersecurity & AI",
    status: "RESEARCH & CONCEPT",
    featured: true,
    tagline: "Financial cyber-theft investigation platform designed to identify mule accounts and trace fraudulent transactions.",
    description: "Designed a cybersecurity and intelligence framework targeting complex financial fraud schemes involving distributed mule accounts. Formulated graph-based transaction tracing pipelines and data integration flows to correlate multi-account transactions, detect anomaly spikes, and automate evidence compilation for forensic investigators.",
    techStack: ["Cyber Investigation", "Fraud Analytics", "Data Integration", "AI-Assisted Forensics", "Network Graphing"],
    github: "https://github.com/Mithun202008",
    live: null,
    metrics: ["Multi-Account Graphing", "Forensic Data Ingestion", "Pattern Analysis"]
  },
  {
    id: "003",
    slug: "rpa-monitor",
    title: "RPA Monitor — Large-Scale Data Handling Web App",
    domain: "Web & Systems",
    status: "ACTIVE",
    featured: true,
    tagline: "Web-based data management engine engineered to process and visualize 50,000+ records directly in the browser.",
    description: "Engineered a data-heavy enterprise UI designed to simulate, manipulate, and render over 50,000 live data records without DOM freezing or memory leaks. Implemented client-side memory optimizations, efficient chunking, and responsive state synchronization to overcome browser rendering bottlenecks.",
    techStack: ["JavaScript", "Frontend Data Optimization", "DOM Virtualization", "Web Engineering"],
    github: "https://github.com/Mithun202008/rpa-monitor",
    live: "https://rpa-monitor-six.vercel.app/",
    metrics: ["50,000+ Records Handled", "0 FPS Degradation", "Client-Side Ingestion"]
  },
  {
    id: "004",
    slug: "aetheris-ai",
    title: "Aetheris AI — Modern Interactive Web Interface",
    domain: "Frontend Engineering",
    status: "DEPLOYED",
    featured: false,
    tagline: "Component-driven, responsive web interface emphasizing modern visual design aesthetics and type safety.",
    description: "Developed a modern, responsive web application interface showcasing component-based architecture in React, TypeScript type safety, and fast Vite bundling. Designed with high-contrast visual hierarchy, custom layout flows, and mobile-adaptive interfaces.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "UI/UX Architecture"],
    github: "https://github.com/Mithun202008/Aetheris-AI",
    live: "https://fw-teal.vercel.app/",
    metrics: ["100% Type-Safe", "Responsive Layout", "Component Architecture"]
  },
  {
    id: "005",
    slug: "parklink",
    title: "ParkLink — Smart Parking Marketplace",
    domain: "Full-Stack Web",
    status: "PROTOTYPE",
    featured: false,
    tagline: "Decentralized parking discovery and reservation marketplace prototype.",
    description: "Prototyped a web application for locating, reserving, and managing urban parking spots. Engineered a lightweight backend with Flask and MongoDB to handle real-time spot availability checking and booking records.",
    techStack: ["Flask", "Python", "MongoDB", "REST APIs", "Bootstrap"],
    github: "https://github.com/Mithun202008/parklink",
    live: null,
    metrics: ["Dynamic Reservations", "NoSQL Schema", "REST Integration"]
  },
  {
    id: "006",
    slug: "ecommerce-platform",
    title: "Full-Stack E-Commerce Engine",
    domain: "Web & Software",
    status: "ARCHIVED",
    featured: false,
    tagline: "E-commerce platform featuring catalog filtering, shopping cart state management, and checkout flows.",
    description: "Built an end-to-end full-stack e-commerce web platform. Implemented responsive product showcases, relational/document database schemas, state management for user carts, and checkout validation.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Mithun202008/e-commerce-project",
    live: null,
    metrics: ["Cart State Sync", "Modular Catalog", "Secure APIs"]
  },
  {
    id: "007",
    slug: "chat-application",
    title: "Real-Time WebSocket Chat Application",
    domain: "Web & Software",
    status: "ARCHIVED",
    featured: false,
    tagline: "Bidirectional real-time chat application with instant messaging rooms.",
    description: "Constructed a low-latency real-time chat service leveraging WebSocket protocols. Supports active channel rooms, live typing indicators, and instant message broadcast across connected clients.",
    techStack: ["JavaScript", "Node.js", "Socket.io", "Express.js", "HTML5/CSS3"],
    github: "https://github.com/Mithun202008",
    live: null,
    metrics: ["Low-Latency Sockets", "Multi-Room Broadcast", "Client Sync"]
  },
  {
    id: "008",
    slug: "blogging-platform",
    title: "Dynamic Content & Blogging Platform",
    domain: "Web & Software",
    status: "ARCHIVED",
    featured: false,
    tagline: "Markdown-powered content creation and publication platform.",
    description: "Developed a dynamic web publication platform supporting rich text/Markdown authoring, tag-based categorization, article indexing, and responsive reading views.",
    techStack: ["JavaScript", "Node.js", "Express.js", "REST APIs", "CSS3"],
    github: "https://github.com/Mithun202008",
    live: null,
    metrics: ["Markdown Parsing", "Fast Article Indexing", "REST Architecture"]
  }
];

export const skillsData = [
  {
    category: "Programming",
    code: "LANG",
    skills: [
      { name: "C", level: "Core", highlight: true },
      { name: "C++", level: "Data Structures & Systems", highlight: true },
      { name: "Python", level: "Scripting, Automation, Tools", highlight: true },
      { name: "JavaScript", level: "Modern ES6+", highlight: true },
      { name: "Kotlin", level: "App Fundamentals", highlight: false },
      { name: "Embedded C", level: "Hardware Systems", highlight: false },
      { name: "SQL", level: "Relational Queries", highlight: true }
    ]
  },
  {
    category: "Web & Full-Stack",
    code: "WEB",
    skills: [
      { name: "React.js", level: "Component Engineering", highlight: true },
      { name: "TypeScript", level: "Type-Safe Architecture", highlight: true },
      { name: "Tailwind CSS", level: "Utility-First Design", highlight: true },
      { name: "Node.js", level: "Server-Side Runtime", highlight: true },
      { name: "Express.js", level: "REST API Framework", highlight: true },
      { name: "HTML5 / CSS3", level: "Semantic Markup", highlight: false },
      { name: "REST APIs", level: "System Communication", highlight: true }
    ]
  },
  {
    category: "Databases",
    code: "DATA",
    skills: [
      { name: "MySQL", level: "Relational Modeling", highlight: true },
      { name: "MongoDB", level: "Document Store / Atlas", highlight: true }
    ]
  },
  {
    category: "Cybersecurity & Systems",
    code: "SEC",
    skills: [
      { name: "Linux (Fedora, Kali)", level: "Primary OS & Bash Scripting", highlight: true },
      { name: "Computer Networks", level: "HTTP, SOCKS4/5, TCP/IP, OSI", highlight: true },
      { name: "Burp Suite", level: "Web Traffic Interception", highlight: true },
      { name: "CTF Challenges", level: "Vulnerability Exploitation", highlight: true },
      { name: "Ethical Hacking", level: "Security Auditing", highlight: false }
    ]
  },
  {
    category: "Development & Cloud",
    code: "OPS",
    skills: [
      { name: "Git & GitHub", level: "Version Control & CI/CD", highlight: true },
      { name: "Linux CLI", level: "Shell Automation", highlight: true },
      { name: "VS Code", level: "Primary IDE", highlight: false },
      { name: "Vercel / Render", level: "Static & Web Deployment", highlight: true },
      { name: "VMware / VirtualBox", level: "Virtualization Sandboxing", highlight: true }
    ]
  },
  {
    category: "AI & Data Science",
    code: "AI",
    skills: [
      { name: "Python-based ML", level: "Model Exploration", highlight: true },
      { name: "PyTorch", level: "Neural Network Basics", highlight: false },
      { name: "Data Processing", level: "CSV, JSON, Streaming Buffers", highlight: true }
    ]
  }
];

export const achievementsData = [
  {
    id: "01",
    title: "Frontend Battle — IIT Bhubaneswar",
    category: "Hackathon / Competition",
    status: "QUALIFIED ROUND 1",
    description: "Participated and advanced to the first round of the competitive Frontend Battle hackathon conducted by IIT Bhubaneswar, engineering rapid UI under strict constraints.",
    date: "2025 - 2026"
  },
  {
    id: "02",
    title: "Chandigarh Police Hackathon",
    category: "Cybersecurity & Tech Challenge",
    status: "QUALIFIED ROUND 1",
    description: "Participated and advanced to the first round of the national security challenge organized by Chandigarh Police, addressing law enforcement technical problems.",
    date: "2025 - 2026"
  },
  {
    id: "03",
    title: "Competitive Capture The Flag (CTF)",
    category: "Cybersecurity Exercise",
    status: "ACTIVE PARTICIPANT",
    description: "Actively participated in competitive Capture The Flag cybersecurity competitions focusing on network forensics, web exploitation, and cryptanalysis.",
    date: "Ongoing"
  },
  {
    id: "04",
    title: "Smart India Hackathon (SIH)",
    category: "National Hackathon",
    status: "INSTITUTIONAL ROUNDS",
    description: "Participated in the internal competitive selection and institutional problem statement rounds for Smart India Hackathon.",
    date: "2025"
  },
  {
    id: "05",
    title: "LeetCode Algorithmic Problem Solving",
    category: "Data Structures & Algorithms",
    status: "370+ PROBLEMS SOLVED",
    description: "Solved 370+ algorithmic problems on LeetCode covering dynamic programming, graph algorithms, trees, binary search, and data structures.",
    link: "https://leetcode.com/u/mithunanbazhagan/",
    date: "Continuous Practice"
  }
];

export const certificationsData = [
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "January 2026",
    credentialId: "Verified Credential",
    url: "https://www.credly.com/users/mithun-a.78d500ce/badges/credly",
    domain: "Programming & Systems"
  },
  {
    title: "MongoDB Basics",
    issuer: "MongoDB University",
    date: "Verified",
    credentialId: "Verified Credential",
    url: "https://www.credly.com/users/mithun-a.78d500ce/badges/credly",
    domain: "Databases & Data Modeling"
  }
];
