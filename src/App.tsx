import "./App.css"
import { NavLink, Navigate, Route, Routes, useLocation } from "react-router-dom"
import { useEffect, useId, useRef, useState } from "react"
import type { FormEvent, ReactNode } from "react"

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
    question: "Will I receive legal advice from Self Rep U?",
    answer:
      "No.  Self Rep U provides general legal information and education, but does not offer personalized legal advice.",
  },
  {
    question: "Can I discuss my specific case with Self Rep U?",
    answer:
      "No. Self Rep U will not take questions about the facts of your specific case.  We will take questions about court procedures and general legal information.  If you ask us a question that is out of scope, we will let you know.",
  },
  {
    question: "Is Self Rep U associated with any law firm?",
    answer:
      "No. Self Rep U is an independent educational program and is not affiliated with any law firm.",
  },
  {
    question: "Is Self Rep U a court service?",
    answer:
      "No. Self Rep U is not connected with the Missouri courts, any bar association, or any other legal organization.  We are a privately held independent educational program.",
  },
  {
    question: "Does Self Rep U replace the need for an attorney?",
    answer:
      "No. In most cases, representing yourself is a bad idea. Our guess is you already know that. Self Rep U will not offer personalized legal advice.  Self Rep U does not replace the need to consult a qualified attorney regarding any specific legal matter.",
  },
  {
    question: "How long is each class?",
    answer:
      "Our goal is to have you in and out in 1 hour.  We know your time is valuable, and we are not going to waste your Friday night.  We offer real information in plain English in 1 hour.",
  },
  {
    question: "Is this legal education?",
    answer:
      "The goal is not to turn you into a lawyer.  The goal is to give you the information you need to navigate the legal system with confidence.  We will not teach you how to practice law, but we will teach you how to understand the process and avoid common mistakes that derail cases before they ever reach a courtroom.",
  },
  {
    question: "Is this the same as the Litigant Awareness Program required by the court?",
    answer:
      "No. If you are representing yourself, you will still be required to take the Litigant Awareness Program.  Self Rep U is a separate educational program that is not affiliated with the Missouri courts or any other legal organization.  It is designed to fill the gap between the Litigant Awareness Program and the courtroom, giving you practical information to help you navigate the legal system with confidence.",
  },
  {
    question: "What question did I forget to ask?",
    answer:
      "Your goal is not to be a lawyer, but to be an informed participant in the legal process well enough to tell your story without getting derailed by procedure, legal jargon,  or objections.  Your goal should be to avioid major mistakes, missed deadlines, and saying the wrong thing.  Self Rep U is designed to help you do that.  We know protecitng your relationship with your children and financial stability is your top priority.",
  }
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

function Layout({ children, title }: { children: ReactNode; title: string }) {
  const location = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const prevPathname = useRef(location.pathname)

  useEffect(() => {
    document.title = `${title} — Self Rep U`
  }, [title])

  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      mainRef.current?.focus()
    }
    prevPathname.current = location.pathname
  }, [location.pathname])

  return (
    <div className="page-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="topbar">
        <div className="brand-block">
          <NavLink to="/" className="brand-mark" aria-label="Self Rep U home">
            <img src="/SelfRepU_full-color.png" alt="" />
          </NavLink>
          <div>
            <p className="brand-name">When it's Them vs. U</p>
          </div>
        </div>

        <nav className="topnav" aria-label="Primary">
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/scheduling" className="nav-cta">
            Class Schedule
          </NavLink>
          <NavLink to="/register" className="nav-cta-register">
            Register
          </NavLink>
        </nav>
      </header>

      <section className="header-image-wrap">
        <img src="/courtBanner.png" alt="Courtroom interior with judge bench and seating" />
      </section>

      <main id="main-content" tabIndex={-1} ref={mainRef}>
        {children}
      </main>

      <footer className="site-footer">
        <div className="site-footer-row">
          <p>Self Rep U</p>
          <p>Purpose-built happy times.</p>
        </div>
        <p className="legal-disclaimer">
          The information provided on this site is for general informational purposes only and
          does not constitute legal advice. Use of Self Rep U does not create an
          attorney-client relationship. Consult a qualified attorney regarding any specific legal
          matter. &copy; {new Date().getFullYear()} Self Rep U. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <Layout title="Representing yourself in family court">
      <section className="hero-section">
        <div className="hero-copy">
          <h1>Representing yourself in family court?
            <br />Here's what you need to know.</h1>
          <p className="hero-text">
            Self Rep U is a live, in-person education program for self-represented individuals in Missouri family law cases. We cover the vocabulary, the format, the procedural realities, and the common mistakes that derail cases before they ever reach a courtroom.
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
    <Layout title="Events">
      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">Events</p>
          <h1>Calendar of upcoming legal events.</h1>
        </div>
        <div className="feature-grid">
          {eventHighlights.map((event) => (
            <article key={event.title} className="feature-card">
              <h2>{event.title}</h2>
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
    <Layout title="FAQ">
      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="faq-grid">
          {faqItems.map((item) => (
            <article key={item.question} className="feature-card">
              <h2>{item.question}</h2>
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
    <Layout title="About Us">
      <section className="page-section about-grid">
        <div>
          <p className="eyebrow">About Us</p>
          <h1>What is Self Rep U?</h1>
          <p className="hero-text">
            If you're navigating Missouri family court without an attorney — whether by necessity or by choice — the system expects you to know the rules, both written and unwritten. Nobody tells you what they are until it may be too late. <br />
            <br />
            Self Rep U is a live, in-person education program for self-represented individuals in Missouri family law cases. We cover the vocabulary, the format, the procedural realities, and the common mistakes that derail cases before they ever reach a courtroom.<br />
            <br />
            This is not legal advice and we won’t teach you to be a lawyer. We won't review your case or tell you what to do in your specific situation. What we will do is help you understand how the process works — in plain English, taught by real experienced Missouri family law attorneys — before you walk in unprepared.  Empowering you to put your best foot forward.<br />
            <br />
            Self Rep U is for anyone facing divorce, custody, child support, or parenting plan cases in Missouri who cannot access or afford legal representation or has decided to go without legal representation.<br />
            <br />
            Classes are a 1-hour, structured presentation led by award winning, licensed Missouri attorneys experienced in family law matters. Topics vary by week, so please be sure to check our{" "}
            <NavLink to="/scheduling">class schedule</NavLink>.<br />
            <br />
            Not tied to a law firm. Not affiliated with Missouri courts. Completely independent.<br />
            <br />
            Sessions are held Friday evenings in St. Louis, Missouri. Seats are limited.
          </p>
        </div>
        <blockquote className="quote-card">
          <p className="quote-text">
            “Our goal is not to make you feel better about a difficult situation, but to empower you to navigate the legal system with confidence.”
          </p>
          <footer className="quote-meta">— Ryan L. Munro</footer>
        </blockquote>
      </section>
    </Layout>
  )
}

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const errorId = useId()

  function handleChange(field: keyof typeof formData) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match.")
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }

    setError(null)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Layout title="Registration complete">
        <section className="page-section">
          <div className="section-heading narrow">
            <p className="eyebrow">Registration</p>
            <h1>You're in, {formData.firstName}.</h1>
            <p className="hero-text">
              We've created your account. Head over to scheduling to get started.
            </p>
            <div className="hero-actions">
              <NavLink to="/scheduling" className="primary-button">
                Start scheduling
              </NavLink>
            </div>
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <Layout title="Register">
      <section className="page-section">
        <div className="section-heading narrow">
          <p className="eyebrow">Register</p>
          <h1>Create your Self Rep U account.</h1>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-field">
              <span>First name</span>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange("firstName")}
                autoComplete="given-name"
              />
            </label>
            <label className="form-field">
              <span>Last name</span>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange("lastName")}
                autoComplete="family-name"
              />
            </label>
          </div>

          <label className="form-field">
            <span>Email</span>
            <input
              type="email"
              required
              value={formData.email}
              onChange={handleChange("email")}
              autoComplete="email"
            />
          </label>

          <div className="form-row">
            <label className="form-field">
              <span>Password</span>
              <input
                type="password"
                required
                minLength={8}
                value={formData.password}
                onChange={handleChange("password")}
                autoComplete="new-password"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
              />
            </label>
            <label className="form-field">
              <span>Confirm password</span>
              <input
                type="password"
                required
                minLength={8}
                value={formData.confirmPassword}
                onChange={handleChange("confirmPassword")}
                autoComplete="new-password"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
              />
            </label>
          </div>

          {error && (
            <p className="form-error" role="alert" id={errorId}>
              {error}
            </p>
          )}

          <button type="submit" className="primary-button">
            Create account
          </button>
        </form>
      </section>
    </Layout>
  )
}

function SchedulingPage() {
  return (
    <Layout title="Scheduling">
      <section className="page-section">
        <div className="section-heading narrow">
          <p className="eyebrow">Scheduling</p>
          <h1>From filing windows to hearing day, keep everyone aligned.</h1>
        </div>
        <div className="timeline-grid">
          {schedulingSteps.map((item) => (
            <article key={item.step} className="timeline-card">
              <p className="timeline-step">{item.step}</p>
              <h2>{item.title}</h2>
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
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/scheduling" element={<SchedulingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
