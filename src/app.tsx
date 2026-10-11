import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Research from './components/research';
import Journey from './components/journey';
import Contact from './components/contact';
import Footer from './components/footer';
import PageMeta from './components/page-meta';
import ScrollToTop from './components/scroll-to-top';

const NotFound: React.FC = () => (
  <main id="main-content" className="page page-centered">
    <section className="card not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you were looking for does not exist.</p>
      <Link to="/" className="cta-button">Return home</Link>
    </section>
  </main>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <PageMeta />
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/research" element={<Research />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;