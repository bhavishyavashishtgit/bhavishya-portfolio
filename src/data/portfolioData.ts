import {
  personalInformation,
  aboutMe,
  education as rawEducation,
  skills as rawSkills,
  projects as rawProjects,
  experience as rawExperience,
  certifications as rawCertifications,
  achievements as rawAchievements,
  PORTFOLIO_DATA as rawPortfolioData
} from './portfolio.js';

export interface Project {
  id: string;
  name: string;
  problemSolved: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  isGithubPlaceholder?: boolean;
  demoUrl?: string;
  image?: string;
  category?: string;
  status?: string;
  stars?: number;
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  specialization: string;
  institution: string;
  period: string;
  details: string;
}

export interface MilestoneItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  type?: 'experience' | 'certification' | 'achievement' | string;
  verificationUrl?: string;
  isPlaceholderUrl?: boolean;
  skillsGained?: string[];
  role?: string;
  organization?: string;
}

export type Achievement = MilestoneItem;

export interface PersonalInfo {
  name: string;
  role: string;
  education: string;
  location?: string;
  email: string;
  bioGreeting: string;
  bioHeadline: string;
  summary: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  secretPhilosophy: string;
  currentFocus: string[];
  technicalInterests: string[];
  careerDirection: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    ...personalInformation,
    currentFocus: aboutMe.currentFocus,
    technicalInterests: aboutMe.technicalInterests,
    careerDirection: aboutMe.careerDirection,
    github: personalInformation.social.github,
    linkedin: personalInformation.social.linkedin
  } as PersonalInfo,
  aboutMe,
  education: rawEducation as EducationItem[],
  skills: rawSkills as SkillGroup[],
  projects: rawProjects as Project[],
  experience: rawExperience as MilestoneItem[],
  certifications: rawCertifications as MilestoneItem[],
  achievements: rawAchievements as MilestoneItem[]
};

export {
  personalInformation,
  aboutMe,
  rawEducation as education,
  rawSkills as skills,
  rawProjects as projects,
  rawExperience as experience,
  rawCertifications as certifications,
  rawAchievements as achievements
};

export default PORTFOLIO_DATA;
