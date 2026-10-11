export const researchInterests = [
  {
    title: 'Responsible AI and safety',
    description:
      'How can intelligent systems be developed with attention to reliability, permission boundaries, human safety, and possible harms?',
  },
  {
    title: 'Human and environmental effects',
    description:
      'How might AI deployment affect people, communities, resources, and the environment, and how can those effects inform engineering choices?',
  },
  {
    title: 'Mathematical foundations of AI',
    description:
      'I am interested in the mathematics and computational reasoning that underpin algorithms and learning systems.',
  },
  {
    title: 'Accessible technology and education',
    description:
      'How can technology and youth education create opportunities in communities where access to resources is limited?',
  },
];

export const researchQuestions = [
  'What practical safeguards help an AI system respect human permissions and boundaries?',
  'How can engineers consider environmental and community effects early in a technology project?',
  'How can mathematical reasoning support understandable and reliable intelligent systems?',
];

export const literatureReviews = [
  'Two literature reviews in physics',
  'Two literature reviews in mathematics',
  'One literature review in chemistry',
];

export const researchEntries: {
  title: string;
  status: 'Completed' | 'In progress' | 'Proposed';
  description: string;
  url?: string;
}[] = [];
