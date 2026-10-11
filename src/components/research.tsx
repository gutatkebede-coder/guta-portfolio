import React from 'react';
import { Link } from 'react-router-dom';
import { literatureReviews, researchInterests, researchQuestions, researchEntries } from '../data/research';

const Research: React.FC = () => {
  return (
    <main id="main-content" className="page">
      <section className="page-intro">
        <p className="eyebrow">Research</p>
        <h1>Exploring mathematics, AI, and meaningful scientific questions.</h1>
        <p className="lead">My interests are still developing. I use research as a way to understand evidence, connect ideas across fields, and ask how technology can be useful and responsible in real contexts.</p>
      </section>

      <section className="card-grid two-up">
        {researchInterests.map((topic) => (
          <article key={topic.title} className="card info-card">
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
          </article>
        ))}
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">Questions I want to investigate</p>
          <h2>Research starts with asking better questions.</h2>
        </div>
        <ul className="list-stack">
          {researchQuestions.map((question) => <li className="list-item card" key={question}>{question}</li>)}
        </ul>
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">A responsible research lens</p>
          <h2>Good technical questions include the people and context around them.</h2>
        </div>
        <div className="card-grid three-up">
          <article className="card info-card"><h3>Evidence</h3><p>What do the available sources and measurements actually support?</p></article>
          <article className="card info-card"><h3>Reliability</h3><p>Where could a method or system fail, and how might those limits be made clear?</p></article>
          <article className="card info-card"><h3>Impact</h3><p>Who may benefit from an idea, who may be affected, and what wider effects deserve consideration?</p></article>
        </div>
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">Research-related academic work</p>
          <h3>I have completed five literature reviews across different scientific areas.</h3>
        </div>

        <ul className="list-stack">
          {literatureReviews.map((item) => (
            <li key={item} className="list-item card">{item}</li>
          ))}
        </ul>
      </section>

      <section className="stacked-section">
        <details className="card expandable">
          <summary>Research projects, publications, preprints, and notes</summary>
          {researchEntries.length > 0 ? (
            <div className="card-grid two-up details-content">
              {researchEntries.map((entry) => (
                <article className="info-card card" key={entry.title}>
                  <span className="meta-chip">{entry.status}</span>
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                  {entry.url && <a href={entry.url} target="_blank" rel="noreferrer">Read more</a>}
                </article>
              ))}
            </div>
          ) : (
            <p className="details-content">There are no public research projects, publications, preprints, or research notes to list at this time. New entries can be added in <code>src/data/research.ts</code>.</p>
          )}
        </details>
      </section>

      <section className="stacked-section">
        <p className="body-copy quote-box">
          These works are part of my learning and academic exposure, not a claim of established publication record. I see research as a way to deepen understanding, ask better questions, and connect mathematics and AI to real human needs.
        </p>
      </section>

      <section className="stacked-section">
        <div className="section-header compact">
          <p className="eyebrow">Future directions</p>
          <h3>Questions I hope to study more deeply.</h3>
        </div>
        <p className="body-copy">
          I want to learn how AI systems can be made more reliable and responsible, how their effects on people and the environment can be considered, and how computation can support practical problem-solving in communities.
        </p>
      </section>

      <section className="stacked-section">
        <Link to="/journey" className="secondary-button">View my academic journey</Link>
      </section>
    </main>
  );
};

export default Research;