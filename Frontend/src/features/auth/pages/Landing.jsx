import { Link } from "react-router";
import "../Landing.scss";

function Landing() {
  return (
    <div className="landing">
      <video className="background-video" autoPlay muted loop playsInline>
        <source src="/interview.mp4" type="video/mp4" />
      </video>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="nav-logo">
          <span>i</span>
        </div>

        <div className="nav-links">
          <a href="/login" className="nav-link">
            Dashboard
          </a>

          <a href="/login" className="nav-link">
            Resume Analysis
          </a>

          <a href="/register" className="nav-link">
            ATS Builder
          </a>
        </div>
        <Link to="/register">
          <button className="nav-btn">Get Started ↗</button>
        </Link>
      </nav>
      {/* Hero + Video Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Crack Your Next
            <span className="highlight"> Interview</span>
          </h1>

          <p>Upload Resume, Practice Interviews, and Receive AI Feedback.</p>

          <Link to="/login">
            <button className="button primary-button">Get Started</button>
          </Link>
        </div>
      </section>
      <div className="hero-tags">
  <span>AI Powered</span>
  <span>Resume Analysis</span>
  <span>ATS Score</span>
  <span>Mock Interviews</span>
  <span>Daily Roadmap</span>
</div>

<div className="hero-stats">
  <div className="stat-card">
    <h3>85%</h3>
    <p>Interview Readiness</p>
  </div>

  <div className="stat-card">
    <h3>5x</h3>
    <p>Faster Preparation</p>
  </div>
</div>
      {/* Second Video Section */}

      {/* Features Section */}
      <section className="cta">
        <h2>Ready to Land Your Dream Job?</h2>

        <p>Practice interviews with AI and improve your confidence.</p>

        <Link to="/register">
          <button className="button primary-button">Start For Free</button>
        </Link>
      </section>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>InterviewAI</h3>
            <p>
              AI-powered interview preparation platform helping candidates
              practice, improve, and succeed.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>

          <div className="footer-section">
            <h3>Features</h3>
            <p>Resume Analysis</p>
            <p>Mock Interviews</p>
            <p>AI Feedback</p>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>rayyan@example.com</p>
            <p>India</p>
          </div>
        </div>
        <p className="copyright">
          © 2026 InterviewAI | Built by Rayyan Chaman Ansari
        </p>
      </footer>
    </div>
  );
}

export default Landing;
