import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../data/social-links';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured';

const Contact: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() ?? '';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!endpoint) {
      setSubmissionState('unconfigured');
      return;
    }

    let parsedEndpoint: URL;
    try {
      parsedEndpoint = new URL(endpoint);
    } catch {
      setErrorMessage('The message service is not configured correctly. Please use a valid Formspree form URL.');
      setSubmissionState('error');
      return;
    }
    if (parsedEndpoint.protocol !== 'https:' || parsedEndpoint.hostname !== 'formspree.io' || !parsedEndpoint.pathname.startsWith('/f/')) {
      setErrorMessage('The message service is not configured correctly. Please use a valid Formspree form URL.');
      setSubmissionState('error');
      return;
    }

    setSubmissionState('submitting');
    setErrorMessage('');
    try {
      const response = await fetch(parsedEndpoint.toString(), {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!response.ok) {
        setErrorMessage('Your message could not be sent. Please try again later.');
        setSubmissionState('error');
        return;
      }
      setSubmissionState('success');
      form.reset();
    } catch {
      setErrorMessage('A network error prevented your message from being sent. Please check your connection and try again.');
      setSubmissionState('error');
    }
  };

  return (
    <main id="main-content" className="page">
      <section className="card contact-card">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s connect around research, engineering, and meaningful technology.</h1>
        <p className="body-copy">
          I am interested in conversations about AI engineering, mathematics, scientific research, student learning, responsible technology, and practical projects with real-world value.
        </p>
        <p className="contact-prompt">Use the form below to introduce yourself and share what you would like to discuss.</p>

        {socialLinks.email && (
          <p>Email: <a href={`mailto:${socialLinks.email}`}>{socialLinks.email}</a></p>
        )}
        {socialLinks.linkedIn && (
          <p><a href={socialLinks.linkedIn} target="_blank" rel="noreferrer">LinkedIn profile</a></p>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input name="name" type="text" autoComplete="name" maxLength={100} placeholder="e.g. Hana Bekele" required />
          </label>
          <label>
            Your email
            <input name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={6} maxLength={5000} placeholder="Hello Guta, I’m reaching out about…" required />
          </label>
          <label className="honeypot" aria-hidden="true">
            Leave this field empty
            <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
          </label>
          <button className="cta-button" type="submit" disabled={submissionState === 'submitting'}>
            {submissionState === 'submitting' ? 'Sending…' : 'Send message'}
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {submissionState === 'success' && 'Your message was sent successfully.'}
            {submissionState === 'unconfigured' && 'The message form is not connected yet. Use the GitHub profile link below, or configure the Formspree endpoint to enable delivery.'}
            {submissionState === 'error' && errorMessage}
          </p>
        </form>

        <div className="link-stack">
          <a
            href={socialLinks.githubProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="cta-button"
          >
            Visit GitHub · @{socialLinks.githubUsername}
          </a>
        </div>

        <p className="note-text">Please do not include passwords, financial information, or other sensitive personal details in your message.</p>
      </section>
      <section className="stacked-section">
        <Link to="/" className="secondary-button">Return to home</Link>
      </section>
    </main>
  );
};

export default Contact;