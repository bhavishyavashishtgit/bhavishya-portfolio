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

## 📁 Project Structure

```
├── amplify.yml                # AWS Amplify deployment pipeline
├── index.html                 # HTML entry point with fonts & metadata
├── package.json               # Dependencies and scripts
├── package-lock.json          # Dependency lockfile
├── README.md                  # Project documentation
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Clean navigation bar with theme toggle & resume button
│   │   ├── Hero.tsx           # Developer introduction with VS Code code preview
│   │   ├── About.tsx          # Biography, education, and technical interests
│   │   ├── Skills.tsx         # Categorized skills without proficiency bars
│   │   ├── Projects.tsx       # Repository-style project cards (CYBERSAITEN, PromptGuard DSL, etc.)
│   │   ├── Timeline.tsx       # Vertical learning milestones & certifications
│   │   ├── Terminal.tsx       # VS Code integrated terminal emulator
│   │   ├── Contact.tsx        # Profile links and clean contact form
│   │   ├── Footer.tsx         # Minimal developer footer
│   │   └── ResumeModal.tsx    # Curriculum vitae preview with print support
│   ├── data/
│   │   └── portfolioData.ts   # Central data file for projects, skills & bio
│   ├── utils/
│   │   └── projectDownloader.ts # In-browser source code exporter
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
