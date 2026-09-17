export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  problem?: string;
  solution?: string;
  architecture?: string[];
  challenges?: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor?: string;
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    icon?: string;
    description?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  board?: string;
  description?: string;
  current?: boolean;
}

export interface AchievementItem {
  title: string;
  metric: string;
  description: string;
  category: string;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    role: string;
    subrole: string;
    tagline: string;
    bioParagraph1: string;
    bioParagraph2: string;
    location: string;
    email: string;
    githubUrl: string;
    linkedinUrl: string;
    resumePath: string;
    availableForWork: boolean;
    avatarUrl?: string;
    softSkills: string[];
  };
  achievements: AchievementItem[];
  education: EducationItem[];
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
}
