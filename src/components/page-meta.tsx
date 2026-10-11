import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const metadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'GTKA Intelligence | Guta Teshome Kebede',
    description: 'Guta Teshome Kebede is an Artificial Intelligence Engineering student interested in mathematics, computing, and responsible AI.',
  },
  '/about': {
    title: 'About | GTKA Intelligence',
    description: 'Learn about Guta Teshome Kebede’s background, education, and interest in mathematics, AI, and useful engineering.',
  },
  '/projects': {
    title: 'Projects | GTKA Intelligence',
    description: 'Explore documented engineering experiences and project explorations by Guta Teshome Kebede.',
  },
  '/skills': {
    title: 'Skills | GTKA Intelligence',
    description: 'A grounded overview of Guta Teshome Kebede’s technical training and academic experience.',
  },
  '/research': {
    title: 'Research | GTKA Intelligence',
    description: 'Research interests in mathematics, artificial intelligence, responsible technology, and scientific problem-solving.',
  },
  '/journey': {
    title: 'Journey | GTKA Intelligence',
    description: 'A timeline of Guta Teshome Kebede’s education, academic milestones, and community leadership.',
  },
  '/contact': {
    title: 'Contact | GTKA Intelligence',
    description: 'Connect with Guta Teshome Kebede about AI engineering, mathematics, research, and responsible technology.',
  },
};

const PageMeta: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = metadata[pathname];
    document.title = page?.title ?? 'Page not found | GTKA Intelligence';

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = page?.description ?? 'The requested page could not be found.';
  }, [pathname]);

  return null;
};

export default PageMeta;
