export interface Project {
  id: string;
  name: string;
  problemSolved: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  isGithubPlaceholder?: boolean;
  demoUrl?: string;
  stars?: number;
  featured: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  date: string;
  title: string;
  issuer: string;
  description: string;
  verificationUrl?: string;
  isPlaceholderUrl?: boolean;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Bhavishya",
    role: "AI & ML Student | Cybersecurity Enthusiast | Developer",
    education: "B.Tech in Artificial Intelligence & Machine Learning",
    bioGreeting: "Hello, World! 👋",
    bioHeadline: "Hi, I'm Bhavishya.",
    summary:
      "I'm a B.Tech student specialising in Artificial Intelligence and Machine Learning, interested in cybersecurity, AI security and building practical software solutions. I enjoy exploring security concepts, developing applications and learning through hands-on projects.",
    email: "bhavishyavashishtmail@gmail.com",
    github: "https://github.com/bhavishyavashishtgit",
    linkedin: "https://www.linkedin.com/in/bhavishya-vashisht-a93bba365",
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
    ],
    careerDirection:
      "Seeking software development and security engineering roles where practical engineering meets algorithmic thinking and system hardening."
  },

  skills: [
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
  ] as SkillGroup[],

  projects: [
    {
      id: "cybersaiten",
      name: "CYBERSAITEN",
      problemSolved:
        "Lack of centralized, accessible platforms that combine automated vulnerability assessment with guided AI-driven cybersecurity education.",
      description:
        "An AI-powered ethical security platform featuring vulnerability analysis, interactive cybersecurity learning tools, an integrated AI Mentor for security guidance, CVE Intelligence Center, and automated report generation.",
      technologies: ["FastAPI", "PostgreSQL", "Python", "JWT", "REST APIs"],
      githubUrl: "https://github.com/bhavishyavashishtgit/cybersaiten",
      isGithubPlaceholder: true,
      featured: true
    },
    {
      id: "promptguard-dsl",
      name: "PromptGuard DSL",
      problemSolved:
        "Difficulty in standardizing and automating adversarial prompt injection and jailbreak tests across different LLM setups.",
      description:
        "A domain-specific language for testing AI security scenarios using structured fixture-based tests and generating verifiable evidence reports against prompt injection and model bypass attempts.",
      technologies: ["Python", "FastAPI", "React", "JavaScript"],
      githubUrl: "https://github.com/bhavishyavashishtgit/promptguard-dsl",
      featured: true
    },
    {
      id: "opportech",
      name: "OpporTech",
      problemSolved:
        "Students missing out on key technical opportunities due to scattered listings and lack of structured early-career tracking.",
      description:
        "An AI-powered opportunity discovery platform helping students explore and filter internships, hackathons, scholarships, technical workshops, and career development initiatives.",
      technologies: ["React", "Vite", "Express", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/bhavishyavashishtgit/-OpporTech_uiux_project.git",
      featured: false
    },
    {
      id: "india-2047",
      name: "India 2047",
      problemSolved:
        "Need for accessible technical and policy research frameworks for India's technological advancement.",
      description:
        "A technology-focused project exploring research concepts, technological sovereignty, and collaborative developmental opportunities aligned with India's centenary milestone in 2047.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Data Visualization"],
      githubUrl: "https://github.com/bhavishyavashishtgit/india-2047",
      featured: false
    }
  ] as Project[],

  achievements: [
    {
      id: "tryhackme-php2shell",
      date: "Hands-on Lab Milestone",
      title: "TryHackMe — PHP2Shell Room Completion",
      issuer: "TryHackMe",
      description:
        "Completed practical offensive cybersecurity challenges in the PHP2Shell room, practicing web vulnerability exploitation, reverse shells, and Linux privilege escalation.",
      verificationUrl: "https://tryhackme.com/p/bhavishya",
      isPlaceholderUrl: true
    },
    {
      id: "opswat-cert",
      date: "Cybersecurity Certificate",
      title: "OPSWAT Cybersecurity Learning Certificate",
      issuer: "OPSWAT Academy",
      description:
        "Earned foundational certification covering critical infrastructure protection, endpoint security fundamentals, data sanitization principles, and security awareness.",
      verificationUrl: "https://learn.opswat.com/certificates/placeholder",
      isPlaceholderUrl: true
    },
    {
      id: "campus-ambassador",
      date: "Leadership Achievement",
      title: "Verified Campus Ambassador",
      issuer: "Technical Student Programs",
      description:
        "Led campus awareness sessions and peer workshops on coding practices, open-source development, and cybersecurity fundamentals.",
      verificationUrl: "https://github.com/bhavishyavashishtgit",
      isPlaceholderUrl: true
    },
    {
      id: "aiml-foundation",
      date: "Academic & Research Milestone",
      title: "B.Tech AIML Specialization & AI Security Tooling",
      issuer: "Undergraduate Engineering",
      description:
        "Deepened coursework in machine learning algorithms, systems security, and initiated independent open-source tooling projects including PromptGuard DSL.",
      verificationUrl: "https://github.com/bhavishyavashishtgit/promptguard-dsl",
      isPlaceholderUrl: false
    }
  ] as Achievement[]
};
