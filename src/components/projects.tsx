import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return projects.filter((project) => {
      const matchesCategory = category === 'All' || project.category === category;
      const searchableText = [
        project.title,
        project.category,
        project.status,
        project.description,
        ...project.technologies,
      ].join(' ').toLocaleLowerCase();
      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [category, query]);

  return (
    <main id="main-content" className="page">
      <section className="page-intro">
        <p className="eyebrow">Projects</p>
        <h1>Practical engineering work and learning in progress.</h1>
        <p className="lead">A considered record of educational resources, technical explorations, and team experience. Each entry is labeled according to what is known and what is still being learned.</p>
      </section>

      <p className="results-count" role="status">
        Showing <strong>{filteredProjects.length}</strong> of <strong>{projects.length}</strong> entries
      </p>

      <section className="project-filters" aria-label="Filter projects">
        <label>
          Search projects
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or topic"
          />
        </label>
        <label>
          Category
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </section>

      <section className="card-grid two-up project-grid">
        {filteredProjects.map((project) => (
          <article key={project.title} className="project-card card">
            <div className="project-topline">
              <span className="meta-chip">{project.category}</span>
              <span className="status-badge">{project.status}</span>
            </div>

            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>My contribution:</strong> {project.contribution}</p>

            {project.technologies.length > 0 && <div className="tag-list">
              {project.technologies.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>}

            <div className="project-links">
              {project.repositoryUrl && (
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer">Repository</a>
              )}
              {project.liveDemoUrl && (
                <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">Demo</a>
              )}
            </div>
          </article>
        ))}
        {filteredProjects.length === 0 && (
          <p className="empty-state card" role="status">No projects match those filters. Try a different search or category.</p>
        )}
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">How I approach project work</p>
          <h2>Start with the need. Learn the tools. Be honest about the result.</h2>
        </div>
        <div className="card-grid three-up">
          <article className="card info-card">
            <h3>Understand the context</h3>
            <p>Identify who a project is for and what problem or learning goal it addresses.</p>
          </article>
          <article className="card info-card">
            <h3>Work with what is known</h3>
            <p>Separate confirmed participation and outcomes from details that are not documented.</p>
          </article>
          <article className="card info-card">
            <h3>Keep learning visible</h3>
            <p>Share explorations as explorations, and make room to add evidence as work develops.</p>
          </article>
        </div>
      </section>

      <section className="stacked-section">
        <Link to="/contact" className="secondary-button">Discuss engineering and learning</Link>
      </section>
    </main>
  );
};

export default Projects;