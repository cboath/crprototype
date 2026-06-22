import './App.css'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import type { ReactNode } from 'react'

const eventHighlights = [
  {
    title: 'Docket Review Workshops',
    description:
      'Weekly continuing-education sessions for attorneys and clerks with registration caps and attendance tracking.',
  },
  {
    title: 'Pre-Trial Calendar Conferences',
    description:
      'Coordinate judges, court reporters, and counsel in one schedule with automatic reminders.',
  },
  {
    title: 'Community Court Programs',
    description:
      'Publish legal aid and outreach events with seat limits, waitlists, and translated notices.',
  },
]

const faqItems = [
  {
    question: 'Can Court Rebel handle sealed or restricted hearings?',
    answer:
      'Yes. Scheduling visibility can be segmented by role so only authorized staff can view protected events.',
  },
  {
    question: 'Do participants get reminders before hearings?',
    answer:
      'Automated notices can be sent by email and SMS at configurable intervals with location and room details.',
  },
  {
    question: 'Can we import existing calendars?',
    answer:
      'Court Rebel supports CSV and calendar import workflows, plus API-based sync for legacy case systems.',
  },
]

const schedulingSteps = [
  {
    step: '01',
    title: 'Create a matter-ready event',
    detail:
      'Set courtroom, judge assignment, participant list, case references, and service rules in one form.',
  },
  {
    step: '02',
    title: 'Notify all legal parties',
    detail:
      'Issue reminders, procedural notes, and required documents with real-time delivery confirmation.',
  },
  {
    step: '03',
    title: 'Adjust live without confusion',
    detail:
      'Move hearings, merge dockets, and update all attendees instantly from a single timeline view.',
  },
]

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark" aria-hidden="true">
            CR
          </span>
          <div>
            <p className="brand-name">Court Rebel</p>
            <p className="brand-tag">Legal court event scheduling platform</p>
          </div>
        </div>

        <nav className="topnav" aria-label="Primary">
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/scheduling" className="nav-cta">
            Scheduling
          </NavLink>
        </nav>
      </header>

      <section className="header-image-wrap" aria-label="Courtroom header image">
        <img src="/courtroom-header.svg" alt="Courtroom interior with judge bench and seating" />
      </section>

      <main>
        {children}
      </main>

      <footer className="site-footer">
        <div className="site-footer-row">
          <p>Court Rebel</p>
          <p>Purpose-built scheduling for legal court events and judicial operations.</p>
        </div>
        <p className="legal-disclaimer">
          The information provided on this site is for general informational purposes only and
          does not constitute legal advice. Use of Court Rebel does not create an
          attorney-client relationship. Consult a qualified attorney regarding any specific legal
          matter. &copy; {new Date().getFullYear()} Court Rebel. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <Layout>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Built for courts, clerks, and legal administrators</p>
          <h1>Organize legal court events without docket-day confusion.</h1>
          <p className="hero-text">
            Court Rebel centralizes scheduling for hearings, workshops, mediation days, and public
            legal programs with secure notices and role-based access.
          </p>
          <div className="hero-actions">
            <NavLink to="/scheduling" className="primary-button">
              Start scheduling
            </NavLink>
            <NavLink to="/events" className="secondary-button">
              View event types
            </NavLink>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function EventsPage() {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">Events</p>
          <h2>Every legal event format in one calendar.</h2>
        </div>
        <div className="feature-grid">
          {eventHighlights.map((event) => (
            <article key={event.title} className="feature-card">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

function FaqPage() {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Answers for legal operations teams.</h2>
        </div>
        <div className="faq-grid">
          {faqItems.map((item) => (
            <article key={item.question} className="feature-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

function AboutPage() {
  return (
    <Layout>
      <section className="page-section about-grid">
        <div>
          <p className="eyebrow">About Us</p>
          <h2>We build software for real courtroom operations.</h2>
          <p className="hero-text">
            Court Rebel was created with input from clerks, administrators, and legal aid
            organizers who needed a more reliable way to run court events and communicate change.
          </p>
        </div>
        <div className="quote-card">
          <p className="quote-text">
            “Our mission is to reduce procedural friction so courts can serve people faster and
            with more clarity.”
          </p>
          <p className="quote-meta">Court Rebel Team</p>
        </div>
      </section>
    </Layout>
  )
}

function SchedulingPage() {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-heading narrow">
          <p className="eyebrow">Scheduling</p>
          <h2>From filing windows to hearing day, keep everyone aligned.</h2>
        </div>
        <div className="timeline-grid">
          {schedulingSteps.map((item) => (
            <article key={item.step} className="timeline-card">
              <p className="timeline-step">{item.step}</p>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/scheduling" element={<SchedulingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
