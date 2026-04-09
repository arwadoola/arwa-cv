import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-left">
            <a href="#home" className="logo-text">Arwa</a>
            <div className="nav-links">
              <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
              <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a>
              <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
              <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
            </div>
          </div>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="profile-image">💃</div>
          <h1 className="hero-title">Arwa Doola</h1>
          <p className="hero-subtitle">HR Professional & People Operations Expert</p>
          <p className="hero-description">
            Building strategic people operations with 2+ years of hands-on experience in recruitment, HRIS, and employee engagement.
          </p>
          <div className="hero-cta">
            <a href="mailto:arwadoolawork@gmail.com" className="cta-button primary">Get in Touch</a>
            <a href="https://linkedin.com/in/arwamd/" target="_blank" rel="noopener noreferrer" className="cta-button secondary">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">📊</div>
            <h3>HR Operations</h3>
            <p>Full-cycle recruitment, HRIS management (Workday, BIPO, Lark), and payroll administration across fast-paced environments.</p>
          </div>
          <div className="about-card">
            <div className="card-icon">🎓</div>
            <h3>Certifications</h3>
            <p>Compensation & Benefits, ESG & Sustainability Reporting, Advanced Excel, and Digital Marketing.</p>
          </div>
          <div className="about-card">
            <div className="card-icon">🤖</div>
            <h3>AI-Driven HR</h3>
            <p>Enthusiastic about strategic, AI-augmented people operations where intelligent agents handle routine tasks.</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="section-header">
          <h2>Experience</h2>
          <div className="section-line"></div>
        </div>

        <div className="experience-item">
          <div className="exp-left">
            <div className="company-badge">MiAO</div>
            <div className="exp-dates">Aug 2025 — Now</div>
          </div>
          <div className="exp-right">
            <h3>People & Organisation, Executive</h3>
            <p className="company-name">MiAO Worlds Pte Ltd, Singapore</p>
            <p className="company-type">Gaming startup • Singapore & Shanghai</p>
            <ul className="exp-bullets">
              <li>End-to-end recruitment for senior roles (Game Tools Engineer, AI Engineer)</li>
              <li>Lead monthly employee engagement initiatives and employer branding</li>
              <li>Full payroll, taxation, and office management administration</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="exp-left">
            <div className="company-badge">Seatrium</div>
            <div className="exp-dates">Jun 2025 — Aug 2025</div>
          </div>
          <div className="exp-right">
            <h3>HR Executive, Business Partnering</h3>
            <p className="company-name">Seatrium, Singapore</p>
            <ul className="exp-bullets">
              <li>Supported ~900 engineering staff in HR operations and policy guidance</li>
              <li>Managed end-to-end recruitment (~30 requisitions/month)</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="exp-left">
            <div className="company-badge">UniCredit</div>
            <div className="exp-dates">May 2024 — Feb 2025</div>
          </div>
          <div className="exp-right">
            <h3>People & Culture, Intern</h3>
            <p className="company-name">UniCredit Bank GmbH, Singapore</p>
            <ul className="exp-bullets">
              <li>End-to-end recruitment, onboarding, and offboarding processes</li>
              <li>Training & development support and compliance management</li>
              <li>Organized employee engagement events and wellness programs</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="exp-left">
            <div className="company-badge">DB</div>
            <div className="exp-dates">Feb 2025 — Apr 2025</div>
          </div>
          <div className="exp-right">
            <h3>People & Organisation, Intern</h3>
            <p className="company-name">DB Schenker, Singapore</p>
            <ul className="exp-bullets">
              <li>Streamlined HR process documentation and policy drafting</li>
              <li>Coordinated virtual employee engagement events</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-header">
          <h2>Skills & Tools</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-categories">
          <div className="skill-category">
            <h3 className="category-title">👥 People Operations</h3>
            <div className="skill-badges">
              {['Recruitment', 'Onboarding', 'Payroll', 'Employment Law', 'HRIS', 'Policy'].map((skill, i) => (
                <span key={i} className="badge">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">💻 Tools & Software</h3>
            <div className="skill-badges">
              {['Workday', 'BIPO', 'Lark', 'Google Suite', 'Canva', 'Claude', 'Advanced Excel'].map((skill, i) => (
                <span key={i} className="badge">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">📚 Knowledge</h3>
            <div className="skill-badges">
              {['Comp & Benefits', 'ESG Reporting', 'Employer Branding', 'Training & Dev', 'Negotiation'].map((skill, i) => (
                <span key={i} className="badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-header">
          <h2>Project Experience</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          <div className="project-card highlight">
            <div className="project-badge">🏆 Finalist</div>
            <h3>Zalora Product Challenge</h3>
            <p className="project-date">October 2024</p>
            <p className="project-desc">Developed user-centric solutions to enhance app experience. Presented to industry experts showcasing problem-solving and analytical skills.</p>
          </div>

          <div className="project-card">
            <div className="project-badge">Project</div>
            <h3>Employer Branding for HR</h3>
            <p className="project-date">Jan 2024 — May 2024</p>
            <p className="project-client">PT KAI Indonesia</p>
            <p className="project-desc">Analyzed recruitment strategies and proposed targeted branding initiatives to enhance employer attractiveness among Gen Z & millennials.</p>
          </div>

          <div className="project-card">
            <div className="project-badge">Project</div>
            <h3>Business Growth - Maybelline</h3>
            <p className="project-date">Aug 2024 — Nov 2024</p>
            <p className="project-client">L'Oréal – Maybelline Philippines</p>
            <p className="project-desc">Conducted competitive landscape analysis and market research to provide actionable recommendations for Maybelline's presence in the Philippines.</p>
          </div>
        </div>
      </section>

      {/* Education & Awards */}
      <section className="section education-section">
        <div className="education-grid">
          <div className="education-item">
            <div className="edu-icon">🎓</div>
            <h3>Bachelor of Business Administration</h3>
            <p className="edu-school">Singapore Management University, 2025</p>
            <p className="edu-spec">Specialization: Organizational Behaviour & HR</p>
          </div>

          <div className="education-item">
            <div className="edu-icon">📜</div>
            <h3>Diploma with Merit</h3>
            <p className="edu-school">Temasek Polytechnic</p>
            <p className="edu-spec">Aviation Management & Services</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h2>Let's Connect</h2>
          <div className="footer-links">
            <a href="mailto:arwadoolawork@gmail.com" className="footer-link">Email</a>
            <a href="https://linkedin.com/in/arwamd/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="tel:+6588115399" className="footer-link">+65 8811 5399</a>
          </div>
          <p className="footer-note">Crafted with passion • Based in Singapore 🇸🇬</p>
        </div>
      </footer>
    </div>
  );
}
