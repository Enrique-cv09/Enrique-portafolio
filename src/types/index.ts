export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  architectureDetails?: {
    summary: string;
    highlights: string[];
  };
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; icon?: string }[];
}