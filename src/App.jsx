import { useEffect, useMemo, useState } from "react";
import {
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Menu,
  Rocket,
  X,
} from "lucide-react";
import {
  certifications,
  expertise,
  profile,
  projects,
  skillGroups,
  stats,
} from "./data/portfolio";

const navItems = ["About", "Skills", "Projects", "Experience"];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Thiyagarajan A home">
        <span>Portfolio</span>
      </a>
      <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <button className="icon-button menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-heading reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy reveal">
        <span className="hero-kicker">AI/ML Engineer and Full Stack AI Developer</span>
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="cta-row">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn secondary" href="./Thiyagarajan_A_Resume.txt" download>
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
      <figure className="hero-image reveal">
        <img src="./thiyagarajan.jpeg" alt="Thiyagarajan A" />
      </figure>
      <div className="stats-grid reveal">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Professional Summary">
      <div className="about-panel reveal">
        <article className="about-summary">
          <span className="summary-label">AI/ML Engineer</span>
          <p>
            Artificial Intelligence and Machine Learning graduate with expertise in Deep Learning,
            Computer Vision, FastAPI, TensorFlow, PyTorch, PostgreSQL, and Full Stack Development.
          </p>
          <p>
            Passionate about developing production-ready AI solutions that solve real-world problems
            through machine learning, automation, and intelligent web applications.
          </p>
        </article>
        <div className="focus-list">
          {[
            ["Model Development", "CNNs, prediction workflows"],
            ["Backend APIs", "FastAPI and REST systems"],
            ["Computer Vision", "OpenCV image pipelines"],
            ["Automation", "Scalable digital workflows"],
          ].map(([title, detail]) => (
            <span key={title}>
              <strong>{title}</strong>
              <small>{detail}</small>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  const icons = [Code2, Rocket, Layers3, Database, BriefcaseBusiness];
  return (
    <Section id="skills" eyebrow="Skills" title="Technical Skills">
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] || Code2;
          return (
            <article className="skill-card reveal" key={group.title}>
              <div className="card-title">
                <Icon size={20} />
                <h3>{group.title}</h3>
              </div>
              <div className="chip-list">
                {group.skills.map((skill) => (
                  <span className="chip" key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = useMemo(() => ["All", ...new Set(projects.map((project) => project.category))], []);
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <Section id="projects" eyebrow="Projects" title="Selected Technical Work">
      <div className="filter-bar reveal" aria-label="Project filters">
        {categories.map((category) => (
          <button key={category} className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card reveal" key={project.title}>
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <div className="tech-stack">
              {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <div className="project-actions">
              <a className="btn compact" href={project.liveUrl} target="_blank" rel="noreferrer">
                Live App
              </a>
              <a className="btn compact secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience, Achievement, Education">
      <div className="timeline">
        <article className="timeline-item reveal">
          <span className="timeline-icon"><BriefcaseBusiness size={18} /></span>
          <div>
            <span className="muted">National Small Industries Corporation (NSIC) | Arjun Vision Tech</span>
            <h3>Mobile Application Development Intern</h3>
            <ul>
              <li>Developed Android application modules</li>
              <li>Optimized UI responsiveness</li>
              <li>Collaborated in Agile development environment</li>
              <li>Application testing and debugging</li>
            </ul>
          </div>
        </article>
        <article className="timeline-item reveal">
          <span className="timeline-icon"><Award size={18} /></span>
          <div>
            <span className="muted">IIT Madras Shaastra Techathon 2024</span>
            <h3>First Prize Winner</h3>
            <p>Secured first place among 100+ participating teams by developing an innovative technology solution and presenting it before industry experts.</p>
          </div>
        </article>
        <article className="timeline-item reveal">
          <span className="timeline-icon"><GraduationCap size={18} /></span>
          <div>
            <span className="muted">2022 - 2026</span>
            <h3>Saveetha Engineering College</h3>
            <p>Bachelor of Technology, Artificial Intelligence and Machine Learning</p>
            <strong>CGPA: 8.10</strong>
          </div>
        </article>
        <article className="timeline-item reveal">
          <span className="timeline-icon"><GraduationCap size={18} /></span>
          <div>
            <span className="muted">2021 - 2022</span>
            <h3>TMHNU Matric Hr. Sec. School</h3>
            <p>Higher Secondary Certificate | Tamil Nadu</p>
            <strong>89.66%</strong>
          </div>
        </article>
        <article className="timeline-item reveal">
          <span className="timeline-icon"><GraduationCap size={18} /></span>
          <div>
            <span className="muted">2019 - 2020</span>
            <h3>TMHNU Matric Hr. Sec. School</h3>
            <p>Secondary School Education | Tamil Nadu</p>
            <strong>93.4%</strong>
          </div>
        </article>
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Learning" title="Certifications">
      <div className="cert-grid">
        {certifications.map((certification) => (
          <a
            className="cert-card reveal"
            key={certification.name}
            href={certification.url}
            target="_blank"
            rel="noreferrer"
          >
            <Award size={18} />
            <span>{certification.name}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Expertise() {
  return (
    <Section id="expertise" eyebrow="Expertise" title="Technical Proficiency">
      <div className="expertise-grid">
        {expertise.map((item) => (
          <article className="progress-card reveal" key={item.label}>
            <div>
              <span>{item.label}</span>
              <strong>{item.value}%</strong>
            </div>
            <div className="progress-track" aria-label={`${item.label} ${item.value}%`}>
              <span style={{ width: `${item.value}%` }} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Expertise />
      </main>
      <footer className="footer">Building the Future with Artificial Intelligence</footer>
    </>
  );
}
