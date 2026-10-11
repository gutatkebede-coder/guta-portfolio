import React from 'react';
import { Link } from 'react-router-dom';
import { certificates, skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <main id="main-content" className="page">
      <section className="page-intro">
        <p className="eyebrow">Skills</p>
        <h1>Building a foundation in technical reasoning and practical learning.</h1>
        <p className="lead">A transparent snapshot of areas I have studied, practiced, and want to keep developing. The labels describe the kind of experience behind each skill, not a claim of expert proficiency.</p>
      </section>

      <section className="skill-groups">
        {skills.map((group) => (
          <div key={group.title} className="card skill-group">
            <h2>{group.title}</h2>
            <ul>
              {group.items.map((skill) => (
                <li key={skill.name}>
                  <span>{skill.name}</span>
                  <em>{skill.level}</em>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">My learning loop</p>
          <h2>Study the idea, practice it, reflect, and try again.</h2>
        </div>
        <div className="card-grid three-up">
          <article className="card info-card"><span className="meta-chip">01</span><h3>Study</h3><p>Build conceptual foundations in mathematics, computing, and AI.</p></article>
          <article className="card info-card"><span className="meta-chip">02</span><h3>Practice</h3><p>Use exercises, technical training, teamwork, and peer learning to put ideas to work.</p></article>
          <article className="card info-card"><span className="meta-chip">03</span><h3>Reflect</h3><p>Notice what is working, identify gaps, and plan the next topic to learn.</p></article>
        </div>
        <p className="body-copy">
          My technical training has included Python, AI, data analysis, and Android development through ETO-related courses and certificates. I continue to build my foundations through study, experimentation, and practice rather than presenting these topics as expert-level proficiency.
        </p>
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">Certificates</p>
          <h2>Training and credentials</h2>
        </div>
        {certificates.length > 0 ? (
          <div className="card-grid two-up">
            {certificates.map((certificate) => (
              <article className="card info-card" key={`${certificate.title}-${certificate.issuer}`}>
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}{certificate.date ? ` · ${certificate.date}` : ''}</p>
                {certificate.verificationUrl && <a href={certificate.verificationUrl} target="_blank" rel="noreferrer">Verify certificate</a>}
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">No certificate titles or verification links have been provided for publication yet.</p>
        )}
      </section>

      <section className="stacked-section">
        <Link to="/research" className="secondary-button">Explore my research interests</Link>
      </section>
    </main>
  );
};

export default Skills;