export type SkillCategory = {
  title: string;
  items: { name: string; level: string }[];
};

export const skills: SkillCategory[] = [
  {
    title: 'Programming and software development',
    items: [
      { name: 'Python', level: 'Developing through technical training' },
      { name: 'Android development', level: 'Technical training' },
      { name: 'Git and GitHub', level: 'Learning and using' },
    ],
  },
  {
    title: 'Artificial intelligence and data',
    items: [
      { name: 'Artificial intelligence foundations', level: 'Technical training' },
      { name: 'Machine learning fundamentals', level: 'Learning area' },
      { name: 'Data analysis', level: 'Technical training' },
      { name: 'AI safety and responsible AI', level: 'Research interest' },
    ],
  },
  {
    title: 'Mathematics and scientific thinking',
    items: [
      { name: 'Mathematical reasoning', level: 'Academic strength' },
      { name: 'Problem-solving', level: 'Academic and club experience' },
      { name: 'Scientific literature review', level: 'Academic experience' },
    ],
  },
  {
    title: 'Communication and leadership',
    items: [
      { name: 'Mathematics education and peer support', level: 'Club leadership' },
      { name: 'Community service', level: 'Leadership experience' },
      { name: 'Team collaboration', level: 'Student engineering team' },
      { name: 'Educational outreach', level: 'IYMC Ambassador experience' },
    ],
  },
];

export const certificates: {
  title: string;
  issuer: string;
  date: string;
  verificationUrl?: string;
}[] = [];
