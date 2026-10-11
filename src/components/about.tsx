import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

const About: React.FC = () => {
  return (
    <main id="main-content" className="page">
      <section className="page-intro">
        <p className="eyebrow">About</p>
        <h1>My first mathematics classroom had four legs.</h1>
        <p className="lead">
          {profile.academicStage} · {profile.academicFocus} · {profile.institution}, {profile.location}
        </p>
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">A foundation for what comes next</p>
          <h2>Curiosity, perseverance, and a practical view of engineering.</h2>
        </div>
        <div className="card-grid three-up">
          <article className="card info-card">
            <span className="meta-chip">01 · Learn</span>
            <h3>Build strong fundamentals</h3>
            <p>Mathematics and science are the foundation I use to ask clear questions, test assumptions, and grow into more advanced technical study.</p>
          </article>
          <article className="card info-card">
            <span className="meta-chip">02 · Explore</span>
            <h3>Connect ideas to systems</h3>
            <p>My studies in information technology and AI let me explore how computational ideas can be shaped into practical tools and learning experiences.</p>
          </article>
          <article className="card info-card">
            <span className="meta-chip">03 · Consider impact</span>
            <h3>Keep people in view</h3>
            <p>My experiences in rural communities and student leadership encourage me to think about access, context, and the people a technology is meant to serve.</p>
          </article>
        </div>
      </section>

      <section className="story-layout">
        <div className="story-copy">
          {profile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <aside className="card fact-panel">
          <h3>Academic record</h3>
          <ul>
            {profile.academicRecord.map((record) => (
              <li key={record.label}><strong>{record.label}:</strong> {record.value}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">Why this path</p>
          <h3>I am interested in mathematics, AI, and engineering because they are tools for thinking clearly and solving real problems.</h3>
        </div>

        <div className="card-grid two-up">
          <article className="info-card card">
            <h3>Mathematics</h3>
            <p>
              I value mathematical reasoning because it helps me separate assumptions from evidence and approach difficult problems with structure.
            </p>
          </article>

          <article className="info-card card">
            <h3>AI and engineering</h3>
            <p>
              I want to understand how intelligent systems can support decisions, improve learning, and become more useful in everyday contexts.
            </p>
          </article>
        </div>
      </section>

      <section className="stacked-section">
        <p className="body-copy quote-box">
          {profile.philosophy}
        </p>
      </section>

      <section className="stacked-section">
        <div className="button-row">
          <Link to="/projects" className="cta-button">Explore my projects</Link>
          <Link to="/journey" className="secondary-button">Continue to my journey</Link>
        </div>
      </section>
    </main>
  );
};

export default About;