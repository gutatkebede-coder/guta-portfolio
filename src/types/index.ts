export interface Project {
    title: string;
    category: string;
    status: 'Completed' | 'In progress' | 'Prototype' | 'Research exploration';
    problemStatement: string;
    description: string;
    contribution: string;
    technologies: string[];
    imageUrl?: string;
    repositoryUrl: string;
    liveDemoUrl?: string;
    lessonsLearned?: string;
}

export interface Skill {
    name: string;
    level: 'Learning' | 'Working knowledge' | 'Project experience';
}

export interface ResearchTopic {
    title: string;
    summary: string;
    status: 'Completed' | 'Ongoing' | 'Proposed';
    tags: string[];
    link?: string;
}

export interface Milestone {
    date: string;
    description: string;
}

export interface CommunityImpact {
    initiative: string;
    description: string;
    impact: string;
}