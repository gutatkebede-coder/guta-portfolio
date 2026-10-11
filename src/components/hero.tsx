import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { researchInterests } from '../data/research';
import { skills } from '../data/skills';
import { socialLinks } from '../data/social-links';

const Hero: React.FC = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const highlights = profile.academicRecord.filter(({ label }) =>
    [
      'Ethiopian national examination',
      'Mathematics',
      'Physics',
      'Chemistry',
      'Grade 12 regional model examination',
    ].includes(label)
  );

  return (
    <main id="main-content" className="page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{profile.role} · {profile.institution}</p>
          <p className="hero-name">{profile.name}</p>
          <h1>Where mathematics meets intelligence and engineering.</h1>
          <p className="lead">{profile.introduction}</p>
          <p className="hero-location">{profile.academicStage} <span aria-hidden="true">/</span> {profile.location}</p>
          <div className="button-row">
            <Link to="/projects" className="cta-button">Explore My Projects</Link>
            <Link to="/about" className="secondary-button">About Me</Link>
            <Link to="/contact" className="secondary-button">Contact Me</Link>
            <a
              href={socialLinks.githubProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub profile · @{socialLinks.githubUsername}
            </a>
          </div>
        </div>

        <div className="hero-profile">
          <figure className="hero-profile-photo card">
            <img
              src="/profile-photo.png"
              alt={`Profile portrait of ${profile.name}`}
              width="785"
              height="665"
              loading="eager"
            />
            <figcaption>
              <strong>{profile.name}</strong>
              <span>{profile.role} · {profile.location}</span>
            </figcaption>
          </figure>
          <div className="hero-panel card" aria-label="Portfolio highlights">
            <p className="panel-label">Selected highlights</p>
            <div className="stats-grid">
              {highlights.map((item) => (
                <div key={item.label} className="stat-item">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">Selected engineering experiences</p>
          <h2>Work and exploration, presented with their actual status.</h2>
        </div>
        <div className="card-grid two-up">
          {featuredProjects.map((project) => (
            <article className="card info-card" key={project.title}>
              <div className="project-topline">
                <span className="meta-chip">{project.category}</span>
                <span className="status-badge">{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
        <Link to="/projects" className="text-link">See project details <span aria-hidden="true">→</span></Link>
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">A little about my path</p>
          <h2>Learning shaped by mathematics, community, and persistence.</h2>
        </div>
        <p className="body-copy home-story">{profile.biography[0]} {profile.biography[1]}</p>
        <Link to="/about" className="text-link">Read my story <span aria-hidden="true">→</span></Link>
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">Research interests</p>
          <h2>Questions at the intersection of mathematics, AI, and society.</h2>
        </div>
        <div className="tag-list interest-tags">
          {researchInterests.map((interest) => (
            <span className="tag" key={interest.title}>{interest.title}</span>
          ))}
        </div>
        <Link to="/research" className="text-link">Explore research interests <span aria-hidden="true">→</span></Link>
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">Learning and experience</p>
          <h2>Technical foundations, communication, and collaboration.</h2>
        </div>
        <div className="card-grid two-up">
          {skills.map((category) => (
            <article className="card info-card" key={category.title}>
              <h3>{category.title}</h3>
              <div className="tag-list">
                {category.items.slice(0, 3).map((item) => (
                  <span className="tag" key={item.name}>{item.name}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <Link to="/skills" className="text-link">View skills and learning areas <span aria-hidden="true">→</span></Link>
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">My focus</p>
          <h2>Mathematics, AI, and useful engineering.</h2>
        </div>

        <div className="card-grid three-up">
          <article className="info-card card">
            <h3>Mathematics</h3>
            <p>
              I am drawn to the structure and rigor of mathematics, especially how it shapes reasoning, algorithms, and problem-solving.
            </p>
          </article>

          <article className="info-card card">
            <h3>AI and computation</h3>
            <p>
              I want to understand how intelligent systems learn, adapt, and support thoughtful decision-making in real situations.
            </p>
          </article>

          <article className="info-card card">
            <h3>Responsible engineering</h3>
            <p>
              My goal is to build technology that is useful, reliable, and grounded in real problems experienced by communities and students.
            </p>
          </article>
        </div>
      </section>

      <section className="stacked-section split-layout">
        <div>
          <div className="section-header compact">
            <p className="eyebrow">Community and education</p>
            <h2>Working with people, not just systems.</h2>
          </div>
          <p className="body-copy">
            I have led mathematics outreach work, helped build a charity initiative around community support, and served as an IYMC Ambassador. These experiences have shaped how I think about learning, leadership, and the value of practical collaboration.
          </p>
          <Link to="/journey" className="text-link">More about community work <span aria-hidden="true">→</span></Link>
        </div>

        <div className="card callout-card">
          <h3>Current direction</h3>
          <p>
            I am building a stronger foundation in AI engineering, data analysis, and research while continuing to learn how technology can be deployed responsibly for meaningful impact.
          </p>
        </div>
      </section>

      <section className="stacked-section call-to-action-box">
        <p className="eyebrow">Next steps</p>
        <h2>{profile.mission}</h2>
        <div className="button-row">
          <Link to="/projects" className="cta-button">See my work</Link>
          <Link to="/contact" className="secondary-button">Contact me</Link>
        </div>
      </section>
    </main>
  );
};

export default Hero;