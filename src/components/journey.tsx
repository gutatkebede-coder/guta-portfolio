import React from 'react';
import { Link } from 'react-router-dom';
import { milestones } from '../data/journey';
import { profile } from '../data/profile';
import { communityImpact } from '../data/community';

const Journey: React.FC = () => {
  return (
    <main id="main-content" className="page">
      <section className="page-intro">
        <p className="eyebrow">Journey</p>
        <h1>A timeline of education, leadership, and learning.</h1>
        <p className="lead">From early curiosity about numbers to undergraduate study in information technology and AI, my path has been shaped by learning, service, and steady effort.</p>
      </section>

      <section className="timeline">
        {milestones.map((item) => (
          <article key={item.period} className="timeline-item card">
            <div className="timeline-marker" aria-hidden="true" />
            <div>
              <h3 className="timeline-period">{item.period}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="stacked-section">
        <p className="eyebrow">Community and leadership</p>
        <h2>Making learning and opportunity more accessible</h2>
        <div className="card-grid three-up">
          {communityImpact.map((item) => (
            <article key={item.initiative} className="card info-card">
              <h3>{item.initiative}</h3>
              <p>{item.description}</p>
              <p>{item.impact}</p>
            </article>
          ))}
        </div>
        <p className="body-copy quote-box">
          {profile.taekwondo}
        </p>
      </section>

      <section className="stacked-section call-to-action-box">
        <p className="eyebrow">Looking ahead</p>
        <h2>Continuing to grow as a student, teammate, and community-minded engineer.</h2>
        <p>I am focused on strengthening my technical foundations while staying connected to educational opportunity, thoughtful research, and practical problem-solving.</p>
        <Link to="/skills" className="secondary-button">Explore my skills and learning areas</Link>
      </section>

      <section className="stacked-section">
        <Link to="/contact" className="cta-button">Get in touch</Link>
      </section>
    </main>
  );
};

export default Journey;