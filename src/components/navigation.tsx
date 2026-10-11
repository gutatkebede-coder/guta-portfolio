import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Research', path: '/research' },
  { label: 'Journey', path: '/journey' },
  { label: 'Contact', path: '/contact' },
];

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', closeMenuOnEscape);
    return () => window.removeEventListener('keydown', closeMenuOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="page nav-shell">
        <Link to="/" className="brand" aria-label="Guta Teshome Kebede home">
          <img
            className="brand-avatar"
            src="/profile-photo.png"
            alt=""
            width="40"
            height="40"
          />
          <span className="brand-name">GUTA TESHOME KEBEDE</span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-panel ${menuOpen ? 'is-open' : ''}`}>
          <nav id="primary-navigation" aria-label="Primary navigation" className="nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="cta-button nav-cta" onClick={() => setMenuOpen(false)}>
            Connect
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
