export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'java' | 'data';
  stack: string[];
  githubLink?: string;
  demoLink?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'language' | 'framework' | 'tool';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}