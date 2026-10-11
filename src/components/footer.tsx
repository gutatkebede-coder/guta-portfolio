import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="page footer-shell">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <nav aria-label="Footer navigation" className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/research">Research</Link>
          <Link to="/journey">Journey</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;