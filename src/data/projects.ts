export type PortfolioProject = {
  title: string;
  category: string;
  status: 'Exploration' | 'Team experience' | 'Learning' | 'Planned' | 'Completed';
  description: string;
  contribution: string;
  technologies: string[];
  repositoryUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
};

export const projects: PortfolioProject[] = [
  {
    title: 'Smart Water Detector',
    category: 'Engineering exploration',
    status: 'Exploration',
    description:
      'A water-related sensing and monitoring project area I have worked on or explored. The implementation details available to me are limited, so I am not presenting it as a completed product.',
    contribution:
      'My specific implementation contribution has not been documented in the available project materials.',
    technologies: [],
    featured: true,
  },
  {
    title: 'Student dormitory solar-energy collaboration',
    category: 'Engineering teamwork',
    status: 'Team experience',
    description:
      'I participated in a five-person student team exploring solar energy for student accommodation. Available information does not confirm a completed installation or technical specification.',
    contribution: 'Participated as one member of a five-person team.',
    technologies: [],
    featured: true,
  },
  {
    title: 'Mathematics and English study handbooks',
    category: 'Educational resources',
    status: 'Completed',
    description:
      'I developed mathematics and English study handbooks to support fellow students. The handbook files are not currently available in this portfolio.',
    contribution: 'Developed mathematics and English study handbooks for fellow students.',
    technologies: [],
    featured: false,
  },
  {
    title: 'GTKA Intelligence',
    category: 'Personal brand',
    status: 'Completed',
    description:
      'My personal portfolio and technology identity. This entry describes the brand and portfolio only; it does not claim that a separate AI assistant has been built.',
    contribution: 'Personal portfolio and identity.',
    technologies: ['React', 'TypeScript', 'Vite'],
    featured: false,
  },
  {
    title: 'Python and AI learning projects',
    category: 'Programming and AI',
    status: 'Planned',
    description:
      'A place to share future programming and AI experiments when there is verified implementation evidence to describe.',
    contribution: 'Future learning direction; no project implementation is claimed here.',
    technologies: [],
    featured: false,
  },
];
