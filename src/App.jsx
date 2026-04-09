import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimateSkills(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <h1 className="logo">Arwa Doola</h1>
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Arwa Doola</h1>
            <p className="hero-subtitle">Business Graduate | Human Resources</p>
            <p className="hero-description">
              HR Professional with 2 years of hands-on experience in full-cycle recruitment, HRIS management, and employee engagement. Passionate about strategic people operations and AI-augmented HR processes.
            </p>
            <div className="hero-contact">
              <a href="tel:+6588115399">📱 +65 8811 5399</a>
              <a href="mailto:arwadoolawork@gmail.com">📧 arwadoolawork@gmail.com</a>
              <a href="https://linkedin.com/in/arwamd/" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
            </div>
          </div>
        </div>
      </header>

      <main className="container main-content">
        {/* About Section */}
        <section className="section about-section">
          <h2 className="section-title">About Me</h2>
          <div className="about-card">
            <p>
              HR Professional with 2 years of hands-on experience in full-cycle recruitment (30+ hires), HRIS management (Workday, BIPO, Lark), and employee engagement across engineering, finance, and logistics sectors. Proven ability to streamline HR processes and support staff in fast-paced environments.
            </p>
            <p>
              Completed certifications in Compensation & Benefits, ESG & Sustainability Reporting, Advanced Excel, and Digital Marketing. Solid academic foundation in Employment Law, Training & Development, Negotiation and Employer Branding, complemented by business core knowledge across strategy, operations, and marketing.
            </p>
            <p>
              Enthusiastic about the shift from transactional HR to strategic, AI-augmented people operations where intelligent agents handle the routine so HR can focus on high-impact problem solving, workforce planning, and meaningful human decisions.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section experience-section">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="job-title">People & Organisation, Executive</h3>
                  <span className="job-date">Aug 2025 — Current</span>
                </div>
                <h4 className="company">MiAO Worlds Pte Ltd, Singapore</h4>
                <p className="company-desc">Gaming startup formed in 2023, headquartered in Singapore and Shanghai.</p>
                <ul className="job-duties">
                  <li>End-to-end recruitment for senior roles (Game Tools Engineer, AI Engineer, etc.). Support employee lifecycle, performance evaluations & policy guidance. Incorporate AI in HR workflows and processes.</li>
                  <li>Lead monthly employee engagement initiatives. Drive employer branding on social media.</li>
                  <li>Handle full administration of payroll & taxation, talent management and office management duties, including liaising with vendors for company taxes and other corporate secretariat duties.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="job-title">HR Executive, Business Partnering</h3>
                  <span className="job-date">June 2025 — Aug 2025</span>
                </div>
                <h4 className="company">Seatrium, Singapore</h4>
                <ul className="job-duties">
                  <li>Support ~900 engineering staff in day-to-day HR operations, including employee queries, policy guidance, secondee management, offboarding, exit interviews, and clearance processes.</li>
                  <li>Manage end-to-end recruitment (~30 requisitions/month) from sourcing to onboarding, including Workday setup, job postings, interviews, work pass applications, salary negotiation, and contract generation.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="job-title">People & Culture, Intern</h3>
                  <span className="job-date">May 2024 — Feb 2025</span>
                </div>
                <h4 className="company">UniCredit Bank GmbH, Singapore</h4>
                <ul className="job-duties">
                  <li>Supported end-to-end recruitment, onboarding, and offboarding processes, including job postings, CV screening, interview coordination, contract and resignation letter preparation, work pass issuance, background checks, exit interviews and staff movement reporting.</li>
                  <li>Provide end-to-end support for registration of external training courses for employees. Ensure compliance of mandatory CPD hours for Traders Desk.</li>
                  <li>Monitor staff mandatory block leave to ensure compliance (10 Days MORO Reporting).</li>
                  <li>Assisted in payroll and benefits administration and organised employee engagement events such as wellness programs and training sessions.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="job-title">People & Organisation, Intern</h3>
                  <span className="job-date">Feb 2025 — Apr 2025</span>
                </div>
                <h4 className="company">DB Schenker, Singapore</h4>
                <ul className="job-duties">
                  <li>Streamlined internal HR process documentation for compliance, drafted HR policies, supported daily HR operations including contract and letter generation, and maintained employee records using BIPO HRIS.</li>
                  <li>Coordinated virtual employee engagement events with external vendors, including townhalls, biweekly social gatherings, and festival luncheons.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section skills-section" ref={skillsRef}>
          <h2 className="section-title">Key Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>People Operations & HR</h3>
              <div className="skills-list">
                {['Onboarding & Offboarding', 'Recruitment Support', 'Payroll Administration', 'Employment Law', 'Data Reporting & Analysis', 'Event Planning'].map((skill, idx) => (
                  <div key={idx} className={`skill-item ${animateSkills ? 'animate' : ''}`}>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Digital Tools & Software</h3>
              <div className="skills-list">
                {['Microsoft Office', 'Google Suite', 'Canva', 'Workday', 'Claude', 'BIPO', 'AI Recruitment', 'Lark'].map((skill, idx) => (
                  <div key={idx} className={`skill-item ${animateSkills ? 'animate' : ''}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section education-section">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <div className="edu-header">
              <h3>Bachelor of Business Administration</h3>
              <span className="edu-date">2025</span>
            </div>
            <h4 className="university">Singapore Management University</h4>
            <p className="specialisation"><strong>Specialisation:</strong> Organisational Behaviour and Human Resources</p>

            <details className="edu-details">
              <summary>View Relevant Coursework & Modules</summary>
              <div className="details-content">
                <p><strong>Relevant Coursework:</strong> Employment Law, Compensation & Benefits, Training & Development, Negotiation, Management of People at Work, Mindfulness, Employer Branding</p>
                <p><strong>Business Core Modules:</strong> Statistics, Spreadsheet Modelling, Marketing, Strategy, Operations, Financial Accounting, Management Accounting</p>
              </div>
            </details>

            <div className="education-card secondary">
              <div className="edu-header">
                <h3>Diploma with Merit</h3>
                <span className="edu-date">Completed</span>
              </div>
              <h4 className="university">Aviation Management & Services | Temasek Polytechnic</h4>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section projects-section">
          <h2 className="section-title">Project Experience</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3 className="project-title">Business Growth - Maybelline Philippines</h3>
              <span className="project-date">Aug 2024 — Nov 2024</span>
              <p className="project-client">L'Oréal – Maybelline Philippines</p>
              <ul className="project-points">
                <li>Conducted market research on the competitive landscape for Maybelline in the Philippines, analyzing consumer trends, competitor offerings, and brand positioning.</li>
                <li>Brainstormed innovative approaches to provide actionable recommendations for enhancing Maybelline's presence in the local beauty market.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3 className="project-title">Employer Branding for HR</h3>
              <span className="project-date">Jan 2024 — May 2024</span>
              <p className="project-client">PT KAI Indonesia</p>
              <ul className="project-points">
                <li>Analysed the company's current recruitment strategies and perception among potential candidates to pinpoint areas for improvement.</li>
                <li>Proposed targeted branding initiatives and recruitment solutions to enhance PT Kai's attractiveness as an employer among the Gen Z and millennial target group.</li>
              </ul>
            </div>

            <div className="project-card highlight">
              <h3 className="project-title">🏆 Zalora Product Challenge</h3>
              <span className="project-date">October 2024 — Finalist</span>
              <p className="project-client">User-Centric Product Development</p>
              <ul className="project-points">
                <li>Developed user-centric solutions to enhance app experience and delivered a comprehensive presentation to industry experts.</li>
                <li>Showcased problem solving, analytical, and presentation skills through actionable recommendations.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="section certs-section">
          <h2 className="section-title">Certifications & Specializations</h2>
          <div className="certs-grid">
            {[
              'Compensation & Benefits',
              'ESG & Sustainability Reporting',
              'Advanced Excel',
              'Digital Marketing'
            ].map((cert, idx) => (
              <div key={idx} className="cert-badge">
                <span className="cert-icon">✓</span>
                <span className="cert-name">{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact-section">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-grid">
            <a href="tel:+6588115399" className="contact-card">
              <span className="contact-icon">📱</span>
              <span className="contact-label">Phone</span>
              <span className="contact-value">+65 8811 5399</span>
            </a>
            <a href="mailto:arwadoolawork@gmail.com" className="contact-card">
              <span className="contact-icon">📧</span>
              <span className="contact-label">Email</span>
              <span className="contact-value">arwadoolawork@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/arwamd/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon">💼</span>
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/arwamd/</span>
            </a>
            <div className="contact-card">
              <span className="contact-icon">🌍</span>
              <span className="contact-label">Location</span>
              <span className="contact-value">Singapore</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Arwa Doola. All rights reserved. Made with ❤️ and React.</p>
        </div>
      </footer>
    </div>
  );
}
