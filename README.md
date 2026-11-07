# Bhavishya — Developer Portfolio

A clean, developer-focused personal portfolio website inspired by the design aesthetics of **Visual Studio Code**, **GitHub**, and the **AWS Builder Center**. Built for **Bhavishya** — B.Tech student in Artificial Intelligence and Machine Learning, Cybersecurity Enthusiast, and Software Developer.

---

## 💻 Design Philosophy

- **Classic & Minimal**: Restrained color palette inspired by the VS Code dark theme (`#1e1e1e`, `#252526`, `#3c3c3c`, `#cccccc`, `#007acc`).
- **Technical & Practical**: Clean repository-style project cards, structured capabilities, and zero artificial marketing or cybersecurity fluff.
- **Developer-Native**: Integrated VS Code-style interactive terminal emulator supporting standard commands, arrow-key navigation, and command history.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: Configured for [AWS Amplify Hosting](https://aws.amazon.com/amplify/hosting/) via `amplify.yml`

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation & Local Run
```bash
# 1. Install dependencies
npm ci

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ☁️ Deploying to AWS Amplify Hosting

This repository includes a pre-configured `amplify.yml` file ready for automatic deployment:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

1. Push this repository to GitHub.
2. In the AWS Amplify Console, select **Host web app** and connect your GitHub repository.
3. Amplify will detect `amplify.yml`, run `npm ci` and `npm run build`, and deploy the site.

---

## 📝 HOW TO UPDATE YOUR PORTFOLIO

All portfolio content is decoupled from layout code and centrally maintained in:
`src/data/portfolio.js`

You never need to edit React JSX files to update your projects, skills, certifications, or personal information.

---

### 1. How to Add New Projects
Open `src/data/portfolio.js` and locate `export const projects = [...]`. Add a new project object to the array:

```javascript
{
  id: "my-new-tool",
  name: "Tool Name",
  category: "AI Security Tool", // or "Web Application", "Research", etc.
  status: "Completed",          // or "In Progress", "Prototype"
  problemSolved: "Explain what challenge or pain point this project solves.",
  description: "Detailed overview of the architecture, workflow, and implementation.",
  technologies: ["Python", "FastAPI", "React", "Docker"],
  githubUrl: "https://github.com/bhavishyavashishtgit/my-new-tool",
  demoUrl: "https://my-demo-url.com", // leave as "" if not deployed; link will auto-hide
  image: "",                          // optional thumbnail URL or path; auto-hides if empty
  featured: true
}
```
*Note: Any optional fields like `demoUrl` or `image` will automatically hide in the UI when set to `""`.*

---

### 2. How to Update Skills
In `src/data/portfolio.js`, find `export const skills = [...]`. You can add new skills to an existing category or create a completely new category:

```javascript
{
  category: "DevSecOps & Cloud",
  skills: ["Docker", "GitHub Actions", "AWS Amplify", "Terraform", "OWASP ZAP"]
}
```
The skills grid will automatically render the new category and calculate the count badge.

---

### 3. How to Add Certifications, Achievements & Experience
In `src/data/portfolio.js`, update the relevant array:

- **Certifications** (`export const certifications = [...]`):
  ```javascript
  {
    id: "security-plus",
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2025",
    type: "certification",
    description: "Covers network security, threats, attacks, and risk mitigation.",
    verificationUrl: "https://verify.com/cert-id", // leave "" if not yet available
    isPlaceholderUrl: false
  }
  ```

- **Achievements & Labs** (`export const achievements = [...]`):
  ```javascript
  {
    id: "thm-top-1-percent",
    title: "TryHackMe — Top 1% Global Rank",
    issuer: "TryHackMe",
    date: "Milestone",
    type: "achievement",
    description: "Solved 100+ cybersecurity lab machines covering web exploitation and privilege escalation.",
    verificationUrl: "https://tryhackme.com/p/bhavishya",
    isPlaceholderUrl: false
  }
  ```

- **Experience & Leadership** (`export const experience = [...]`):
  ```javascript
  {
    id: "security-intern",
    title: "Security Engineering Intern",
    role: "Security Engineering Intern",
    issuer: "Tech Systems Corp",
    date: "Summer 2025",
    type: "experience",
    description: "Built automated container scanning tools and assisted with penetration testing.",
    skillsGained: ["Static Analysis", "Docker Hardening", "CI/CD Security"]
  }
  ```
The timeline automatically creates the node, tags the category pill (Experience, Certification, or Milestone), and updates the category filters.

---

### 4. How to Update the Resume PDF
Your resume is served directly from the public static assets directory:
`public/resume.pdf`

1. Export your updated resume as a PDF file named `resume.pdf`.
2. Replace `public/resume.pdf` with your new file.
3. Both the **Resume** button in the navigation bar and the **Download Resume** button in the hero section immediately serve the new PDF without altering any code.
4. If you host your resume on Google Drive or Notion, you can also update `resumeUrl` in `src/data/portfolio.js`.

---

### 5. How to Edit Personal Details
In `src/data/portfolio.js`, edit `export const personalInformation = { ... }`:
- `name`: Your display name
- `role`: Headline subtitle
- `education`: Degree and university
- `email`: Contact email address
- `social`: GitHub, LinkedIn, and email URLs
- `bioHeadline` & `summary`: Hero intro text
- `secretPhilosophy`: The quote revealed by typing `secret` in the terminal

---

### 6. How to Deploy Changes via GitHub
Every time you commit and push to GitHub, AWS Amplify automatically triggers a fresh production build and deploys your updates live:

```bash
# 1. Check your changes
git status

# 2. Stage all updated files
git add .

# 3. Commit with a descriptive message
git commit -m "Update projects: added CYBERSAITEN and refreshed resume"

# 4. Push to main branch
git push origin main
```

AWS Amplify will detect the commit, run `npm ci` and `npm run build`, and deploy your updated portfolio in under 2 minutes.

---

## 📁 Project Structure

```
├── amplify.yml                # AWS Amplify deployment pipeline
├── index.html                 # HTML entry point with fonts & metadata
├── package.json               # Dependencies and scripts
├── package-lock.json          # Dependency lockfile
├── public/
│   └── resume.pdf             # Drop-in resume PDF (replaces without code edits)
├── README.md                  # Project documentation & maintainer's guide
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Clean navigation bar with theme toggle & resume link
│   │   ├── Hero.tsx           # Developer introduction with code preview & direct download
│   │   ├── About.tsx          # Dynamic biography, education, and technical interests
│   │   ├── Skills.tsx         # Dynamic categorized skills grid
│   │   ├── Projects.tsx       # Dynamic project cards with auto-hiding optional links
│   │   ├── Timeline.tsx       # Filterable experience, certifications & achievements
│   │   ├── Terminal.tsx       # VS Code integrated terminal emulator
│   │   ├── Contact.tsx        # Profile links and clean contact form
│   │   ├── Footer.tsx         # Minimal developer footer
│   │   ├── ResumeModal.tsx    # Markdown-style CV preview with print & download
│   │   └── MatrixBackground.tsx # HTML5 Canvas Matrix rain effect (low-opacity)
│   ├── data/
│   │   ├── portfolio.js       # ★ Central editable content configuration ★
│   │   └── portfolioData.ts   # Typed re-exports for TypeScript components
│   ├── App.tsx                # Main application coordinator
│   ├── index.css              # Global styles & VS Code color system
│   └── main.tsx               # Application entry point
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration
```

---

## 📬 Contact & Profiles

- **Developer**: Bhavishya
- **GitHub**: [github.com/bhavishyavashishtgit](https://github.com/bhavishyavashishtgit)
- **LinkedIn**: [linkedin.com/in/bhavishya-vashisht-a93bba365](https://www.linkedin.com/in/bhavishya-vashisht-a93bba365)
- **Email**: `bhavishyavashishtmail@gmail.com`
