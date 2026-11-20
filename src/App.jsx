import './App.css'

const experiences = [
  { role: 'Incoming Intern', organisation: 'PSA', description: '[Placeholder: responsibilities and dates to be added.]' },
  { role: 'Software Engineering Intern', organisation: 'HTX', description: '[Placeholder: responsibilities and dates to be added.]' },
  { role: 'Teaching Assistant', organisation: 'NUS', description: '[Placeholder: responsibilities and dates to be added.]' },
]

const projects = [
  { name: 'Repnsets', description: '[Placeholder: project description to be added.]' },
  { name: 'VinBigData Chest X-ray Abnormalities Detection', description: '[Placeholder: project description to be added.]' },
  { name: 'This portfolio', description: '[Placeholder: implementation details to be added.]' },
]

const certifications = [
  { name: 'CompTIA Security+', description: '[Placeholder: certification code and date to be added.]' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="site-name" href="#introduction">Clinton</a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="intro section" id="introduction" aria-labelledby="intro-heading">
          <p className="eyebrow">Portfolio</p>
          <h1 id="intro-heading">Hi, I’m Clinton!</h1>
          <p className="intro-copy">I’m interested in cloud, infrastructure, DevOps, and building reliable systems.</p>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-heading">
          <p className="eyebrow">Background</p>
          <h2 id="experience-heading">Experience</h2>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-item" key={experience.organisation}>
                <h3>{experience.role} · {experience.organisation}</h3>
                <p>{experience.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-heading">Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="certifications" aria-labelledby="certifications-heading">
          <p className="eyebrow">Credentials</p>
          <h2 id="certifications-heading">Certifications</h2>
          <div className="project-grid">
            {certifications.map((certification) => (
              <article className="project-card" key={certification.name}>
                <h3>{certification.name}</h3>
                <p>{certification.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-heading">
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-heading">Contact</h2>
          <p>
            <a href="mailto:clinton.tay@u.nus.edu">clinton.tay@u.nus.edu</a>
            {' · '}
            <a href="https://github.com/ctrf03" target="_blank" rel="noreferrer">GitHub</a>
            {' · '}
            <a href="https://www.linkedin.com/in/clinton-tay" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </section>
      </main>

      <footer className="site-footer">© Clinton</footer>
    </div>
  )
}

export default App
