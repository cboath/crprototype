import "./App.css"
import { NavLink, Navigate, Route, Routes } from "react-router-dom"
import type { ReactNode } from "react"

const eventHighlights = [
  {
    title: "First Bestest Ever Workshops",
    description:
      "Weekly continuing-education sessions for self-represented litigants.",
  },
  {
    title: "Pre-Trial Calendar Conferences",
    description:
      "Learn how to do some law shit.",
  },
  {
    title: "Community Court Programs",
    description:
      "Publish legal aid and outreach events with seat limits, waitlists, and translated notices.",
  },
]

const faqItems = [
  {
    question: "Can Court Rebel handle sealed or restricted hearings?",
    answer:
      "Probably, I don't know any of this stuff.",
  },
  {
    question: "Do participants get reminders before hearings?",
    answer:
      "No, dingus.  We don't know your life",
  },
  {
    question: "Who is this for?",
    answer:
      "Court Rebel is for YOU.",
  },
]

const schedulingSteps = [
  {
    step: "01",
    title: "Do something that gets you into court.",
    detail:
      "Cheat on your ex.  Punch a dude.  Rob a bank.  Totally up to you.",
  },
  {
    step: "02",
    title: "Think you can out-smart the system.",
    detail:
      "Self explanatory.",
  },
  {
    step: "03",
    title: "Come get some advice from the pros.",
    detail:
      "Learn how and when to properly say NOT GUILTY.",
  },
]

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <NavLink to="/" className="brand-mark" aria-label="Court Rebel home">
            <img src="/SelfRepU_full-color.jpg" alt="" />
          </NavLink>
          <div>
            <p className="brand-name">Court Rebel</p>
            <p className="brand-tag">Legal stuff and things</p>
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
          <p>Purpose-built happy times.</p>
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
          <p className="eyebrow">YOU CAN DO IT!</p>
          <h1>That judge won't know what hit them.</h1>
          <p className="hero-text">
            Court Rebel does stuff to help you navigate the legal system.
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
          <h2>Calendar of upcoming legal events.</h2>
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
          <h2>We build confidence for real courtroom operations.</h2>
          <p className="hero-text">
            Court Rebel is for those who manage and participate in self-representation.
          </p>
        </div>
        <div className="quote-card">
          <p className="quote-text">
            “Our mission is to reduce procedural friction so people can navigate the legal system faster and
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
