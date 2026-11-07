/**
 * ==============================================================================
 * PORTFOLIO CONTENT CONFIGURATION
 * File: src/data/portfolio.js
 * ==============================================================================
 * 
 * Welcome! This is the central data file for your entire portfolio website.
 * To update your portfolio (add new projects, update skills, change your resume,
 * or add certifications/achievements), simply edit the values in this file!
 * 
 * Whenever you push changes to GitHub, AWS Amplify will automatically build
 * and publish your updated portfolio live.
 * 
 * TABLE OF CONTENTS:
 * 1. personalInformation (Bio, Name, Title, Social Links, Resume URL)
 * 2. aboutMe (Background story, Career direction, Current learning focus)
 * 3. education (Degrees, Universities, coursework)
 * 4. skills (Categorized technical abilities: Programming, Security, AI, Web, Tools)
 * 5. projects (All featured & open-source projects with tags, GitHub & live demo links)
 * 6. experience (Internships, student ambassadorships, research roles)
 * 7. certifications (Industry certifications with verification URLs)
 * 8. achievements (Hackathons, lab milestones like TryHackMe, awards)
 * ==============================================================================
 */

export const personalInformation = {
  name: "Bhavishya",
  role: "AI & ML Student | Cybersecurity Enthusiast | Developer",
  education: "B.Tech in Artificial Intelligence & Machine Learning",
  location: "India",
  email: "bhavishyavashishtmail@gmail.com",
  
  // Greeting and headlines used in the Hero section
  bioGreeting: "Hello, World! 👋",
  bioHeadline: "Hi, I'm Bhavishya.",
  
  // Concise summary statement
  summary:
    "I'm a B.Tech student specialising in Artificial Intelligence and Machine Learning, interested in cybersecurity, AI security and building practical software solutions. I enjoy exploring security concepts, developing applications and learning through hands-on projects.",
  
  // Social media and profile links
  social: {
    github: "https://github.com/bhavishyavashishtgit",
    linkedin: "https://www.linkedin.com/in/bhavishya-vashisht-a93bba365",
    email: "bhavishyavashishtmail@gmail.com"
  },
  
  // Path to your resume PDF in the public folder (simply replace public/resume.pdf to update)
  resumeUrl: "/resume.pdf",
  
  // Secret command quote revealed in the interactive terminal
  secretPhilosophy:
    "Every expert was once a beginner. Every vulnerability is an opportunity to learn, understand, and build something more secure."
};

export const aboutMe = {
  background: [
    "I am an Artificial Intelligence and Machine Learning student dedicated to building secure, dependable digital software. My journey started with a curiosity about how software systems operate under the hood and evolved into an active interest in cybersecurity and AI safety.",
    "As machine learning models integrate deeper into web and enterprise applications, ensuring their robustness against prompt manipulation, adversarial inputs, and traditional software vulnerabilities is paramount. I focus on bridging secure systems design with modern developer tooling."
  ],
  careerDirection:
    "Seeking software development and security engineering roles where practical engineering meets algorithmic thinking and system hardening.",
  currentFocus: [
    "Adversarial testing & security guardrails for Generative AI / LLMs",
    "Hands-on web exploitation and Linux system security labs",
    "Full-stack development using React, FastAPI, and PostgreSQL"
  ],
  technicalInterests: [
    "AI Security & LLM Defense",
    "Cybersecurity Fundamentals",
    "Software Development & REST APIs",
    "Ethical Hacking & Vulnerability Analysis",
    "DevSecOps & Secure Coding"
  ]
};

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "Artificial Intelligence and Machine Learning",
    institution: "Undergraduate Engineering Institution",
    period: "2023 – 2027 (Expected)",
    details:
      "Core coursework in machine learning, algorithms, data structures, network security, and secure software development."
  }
];

export const skills = [
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "HTML5", "CSS3", "Bash"]
  },
  {
    category: "Cybersecurity",
    skills: [
      "Linux Fundamentals",
      "Cybersecurity Fundamentals",
      "Information Security",
      "Security Awareness",
      "AI Security Concepts",
      "Vulnerability Assessment"
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Artificial Intelligence",
      "Machine Learning Fundamentals",
      "AI-Powered Applications",
      "LLM Security Concepts",
      "Prompt Testing"
    ]
  },
  {
    category: "Web Development",
    skills: [
      "React",
      "Vite",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "Tailwind CSS"
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Linux CLI",
      "JWT Authentication",
      "AWS Amplify"
    ]
  }
];

/**
 * PROJECTS DIRECTORY
 * To add a new project, simply copy an object block below and update the fields.
 * If you do not have a live demo or image yet, leave them as "" and they will cleanly auto-hide.
 */
export const projects = [
  {
    id: "cybersaiten",
    name: "CYBERSAITEN",
    category: "AI Security Platform",
    status: "Completed",
    problemSolved:
      "Lack of centralized, accessible platforms that combine automated vulnerability assessment with guided AI-driven cybersecurity education.",
    description:
      "An AI-powered ethical security platform featuring vulnerability analysis, interactive cybersecurity learning tools, an integrated AI Mentor for security guidance, CVE Intelligence Center, and automated report generation.",
    technologies: ["FastAPI", "PostgreSQL", "Python", "JWT", "REST APIs"],
    githubUrl: "https://github.com/bhavishyavashishtgit/cybersaiten",
    demoUrl: "",
    image: "",
    featured: true,
    isGithubPlaceholder: true
  },
  {
    id: "promptguard-dsl",
    name: "PromptGuard DSL",
    category: "Security Tooling",
    status: "Completed",
    problemSolved:
      "Difficulty in standardizing and automating adversarial prompt injection and jailbreak tests across different LLM setups.",
    description:
      "A domain-specific language for testing AI security scenarios using structured fixture-based tests and generating verifiable evidence reports against prompt injection and model bypass attempts.",
    technologies: ["Python", "FastAPI", "React", "JavaScript"],
    githubUrl: "https://github.com/bhavishyavashishtgit/promptguard-dsl",
    demoUrl: "",
    image: "",
    featured: true,
    isGithubPlaceholder: false
  },
  {
    id: "opportech",
    name: "OpporTech",
    category: "Web Application",
    status: "Completed",
    problemSolved:
      "Students missing out on key technical opportunities due to scattered listings and lack of structured early-career tracking.",
    description:
      "An AI-powered opportunity discovery platform helping students explore and filter internships, hackathons, scholarships, technical workshops, and career development initiatives.",
    technologies: ["React", "Vite", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/bhavishyavashishtgit/-OpporTech_uiux_project.git",
    demoUrl: "",
    image: "",
    featured: false,
    isGithubPlaceholder: false
  },
  {
    id: "india-2047",
    name: "India 2047",
    category: "Vision & Research",
    status: "Completed",
    problemSolved:
      "Need for accessible technical and policy research frameworks for India's technological advancement.",
    description:
      "A technology-focused project exploring research concepts, technological sovereignty, and collaborative developmental opportunities aligned with India's centenary milestone in 2047.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Data Visualization"],
    githubUrl: "https://github.com/bhavishyavashishtgit/india-2047",
    demoUrl: "",
    image: "",
    featured: false,
    isGithubPlaceholder: false
  }
];

export const experience = [
  {
    id: "campus-ambassador",
    title: "Verified Campus Ambassador",
    role: "Verified Campus Ambassador",
    issuer: "Technical Student Programs",
    organization: "Technical Student Programs",
    date: "2024 – Present",
    type: "experience",
    description:
      "Led campus awareness sessions and peer workshops on coding practices, open-source development, and cybersecurity fundamentals.",
    skillsGained: ["Community Leadership", "Technical Evangelism", "Peer Mentoring"],
    verificationUrl: "https://github.com/bhavishyavashishtgit",
    isPlaceholderUrl: true
  }
];

export const certifications = [
  {
    id: "opswat-cert",
    title: "OPSWAT Cybersecurity Learning Certificate",
    issuer: "OPSWAT Academy",
    date: "Certified",
    type: "certification",
    description:
      "Earned foundational certification covering critical infrastructure protection, endpoint security fundamentals, data sanitization principles, and security awareness.",
    verificationUrl: "https://learn.opswat.com/certificates/placeholder",
    isPlaceholderUrl: true
  }
];

export const achievements = [
  {
    id: "tryhackme-php2shell",
    title: "TryHackMe — PHP2Shell Room Completion",
    issuer: "TryHackMe",
    date: "Hands-on Lab Milestone",
    type: "achievement",
    description:
      "Completed practical offensive cybersecurity challenges in the PHP2Shell room, practicing web vulnerability exploitation, reverse shells, and Linux privilege escalation.",
    verificationUrl: "https://tryhackme.com/p/bhavishya",
    isPlaceholderUrl: true
  },
  {
    id: "aiml-foundation-item",
    title: "B.Tech AIML Specialization & AI Security Tooling",
    issuer: "Undergraduate Engineering",
    date: "Academic & Research Milestone",
    type: "achievement",
    description:
      "Deepened coursework in machine learning algorithms, systems security, and initiated independent open-source tooling projects including PromptGuard DSL.",
    verificationUrl: "https://github.com/bhavishyavashishtgit/promptguard-dsl",
    isPlaceholderUrl: false
  }
];

// Unified default export for backwards compatibility
export const PORTFOLIO_DATA = {
  personal: {
    ...personalInformation,
    currentFocus: aboutMe.currentFocus,
    technicalInterests: aboutMe.technicalInterests,
    careerDirection: aboutMe.careerDirection,
    github: personalInformation.social.github,
    linkedin: personalInformation.social.linkedin
  },
  aboutMe,
  education,
  skills,
  projects,
  experience,
  certifications,
  achievements
};

export default PORTFOLIO_DATA;
