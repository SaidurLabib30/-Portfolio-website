import Head from "next/head";
import { useEffect, useState } from "react";

const SECTIONS = [
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
];

export default function Home() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const initial = (window.location.hash || "").replace("#", "");
    if (SECTIONS.includes(initial)) {
      setActive(initial);
    }
  }, []);

  const showPanel = (target) => {
    setActive(target);
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (window.history.replaceState) {
      window.history.replaceState(null, "", "#" + target);
    }
  };

  return (
    <>
      <Head>
        <title>Saidur Rahman Labib — Full-Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-path">
            <span className="path-text">labib@portfolio:~</span>
          </div>
          <nav
            className="topbar-nav"
            id="switcher"
            role="tablist"
            aria-label="Portfolio sections"
          >
            <a href="#top" className="nav-pill">
              home
            </a>
            {SECTIONS.map((s) => (
              <button
                key={s}
                className={`switch-btn${active === s ? " active" : ""}`}
                data-target={s}
                onClick={() => showPanel(s)}
              >
                <span className="dot"></span>
                {s}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main>
        <section className="hero" id="top">
          <div className="hero-terminal">
            <div className="hero-terminal-text mono">
              <div className="line">
                <span className="prompt">$</span> whoami
              </div>
            </div>
            <h1 className="hero-name">Saidur Rahman Labib</h1>
            <div className="hero-role">Full-Stack Developer</div>
            <p className="hero-summary">
              CSE student who enjoys building efficient, user-friendly
              applications and working in collaborative teams. Currently
              sharpening frontend and backend skills on real production
              code, with a growing focus on quality and testing.
            </p>
            <div className="hero-links">
              <a href="mailto:saidurrahmanlabib035@gmail.com">Email</a>
              <a
                href="https://github.com/SaidurLabib30"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/saidur-rahman-labib-3915aa386"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="photo-frame">
            <div className="frame-top">
              <span>profile.png</span>
              <span>512×512</span>
            </div>
            <img src="/profile.png" alt="Portrait of Saidur Rahman Labib" />
          </div>
        </section>

        <section
          id="about"
          className={`panel${active === "about" ? " active" : ""}`}
        >
          <div className="filetag">
            <span className="dot"></span> about.md
          </div>
          <p className="about-text">
            Computer Science and Engineering student with a strong interest
            in software and web development. Skilled in problem-solving and
            eager to learn new technologies, with hands-on experience
            building full-stack applications and testing them for quality.
            Currently working as a Frontend Developer Intern at
            tripbooking.ai, based in Dhaka, Bangladesh, and pursuing a B.Sc.
            in CSE at American International University-Bangladesh.
          </p>
        </section>

        <section
          id="skills"
          className={`panel${active === "skills" ? " active" : ""}`}
        >
          <div className="filetag">
            <span className="dot amber"></span> skills.json
          </div>
          <div className="skills-grid">
            <div className="skill-card accent">
              <div className="skill-cat-head">
                <span className="skill-icon">&lt;/&gt;</span>Languages
              </div>
              <div className="skill-chips">
                <span className="chip">C++</span>
                <span className="chip">C#</span>
                <span className="chip">Java</span>
                <span className="chip">JavaScript</span>
                <span className="chip">PHP</span>
              </div>
            </div>
            <div className="skill-card amber">
              <div className="skill-cat-head">
                <span className="skill-icon">⚡</span>Frameworks
              </div>
              <div className="skill-chips">
                <span className="chip">React</span>
                <span className="chip">Next.js</span>
                <span className="chip">Express.js</span>
                <span className="chip">Nest.js</span>
              </div>
            </div>
            <div className="skill-card pink">
              <div className="skill-cat-head">
                <span className="skill-icon">◧</span>Web
              </div>
              <div className="skill-chips">
                <span className="chip">HTML5</span>
                <span className="chip">CSS3</span>
              </div>
            </div>
            <div className="skill-card accent">
              <div className="skill-cat-head">
                <span className="skill-icon">⛁</span>Databases
              </div>
              <div className="skill-chips">
                <span className="chip">MySQL</span>
                <span className="chip">pgAdmin</span>
              </div>
            </div>
            <div className="skill-card amber">
              <div className="skill-cat-head">
                <span className="skill-icon">⚙</span>Tools
              </div>
              <div className="skill-chips">
                <span className="chip">Linux</span>
                <span className="chip">Git</span>
                <span className="chip">GitHub</span>
              </div>
            </div>
            <div className="skill-card pink">
              <div className="skill-cat-head">
                <span className="skill-icon">✦</span>Exploring
              </div>
              <div className="skill-chips">
                <span className="chip">TypeScript</span>
                <span className="chip">Assembly Language</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className={`panel${active === "experience" ? " active" : ""}`}
        >
          <div className="filetag">
            <span className="dot pink"></span> experience.log
          </div>
          <div className="exp-card">
            <div className="exp-head">
              <span className="exp-role">Frontend Developer Intern</span>
              <span className="exp-time">Present</span>
            </div>
            <div className="exp-company">tripbooking.ai</div>
            <ul className="exp-list">
              <li>
                Contributed to the development and maintenance of the
                company&apos;s web portal and website.
              </li>
              <li>
                Updated and improved UI components using HTML, CSS, and
                JavaScript to enhance overall user experience.
              </li>
              <li>
                Integrated APIs using Nest.js to support smooth data flow
                between frontend and backend.
              </li>
              <li>
                Collaborated with the team to identify and fix bugs,
                optimize performance, and deliver new features on time.
              </li>
            </ul>
          </div>
        </section>

        <section
          id="projects"
          className={`panel${active === "projects" ? " active" : ""}`}
        >
          <div className="filetag">
            <span className="dot"></span> projects/
          </div>
          <div className="project-grid">
            <div className="project-card">
              <h3>Property Rental &amp; Management System</h3>
              <div className="stack-row">
                <span className="stack-pill">Next.js</span>
                <span className="stack-pill">React</span>
                <span className="stack-pill">CSS</span>
                <span className="stack-pill">Axios</span>
              </div>
              <ul>
                <li>Owner registration and login authentication</li>
                <li>Property listing with dynamic details pages</li>
                <li>Reusable components and a responsive UI</li>
                <li>RESTful API integration, deployed on Vercel</li>
              </ul>
              <a
                className="project-link"
                href="https://github.com/raihanafsan/ADVWEBTECH"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
            <div className="project-card">
              <h3>Portal Management System</h3>
              <div className="project-role">
                Role: Teacher Module Development
              </div>
              <div className="stack-row">
                <span className="stack-pill">HTML</span>
                <span className="stack-pill">CSS</span>
                <span className="stack-pill">JavaScript</span>
                <span className="stack-pill">PHP</span>
                <span className="stack-pill">MySQL</span>
              </div>
              <ul>
                <li>Teacher registration, login, and dashboard</li>
                <li>Session management and form validation</li>
                <li>Full CRUD operations with error handling</li>
                <li>Responsive UI across devices</li>
              </ul>
            </div>
            <div className="project-card">
              <h3>Restaurant Management System</h3>
              <div className="stack-row">
                <span className="stack-pill">HTML</span>
                <span className="stack-pill">CSS</span>
                <span className="stack-pill">JavaScript</span>
              </div>
              <ul>
                <li>Interactive restaurant management interface</li>
                <li>Responsive layouts for desktop and mobile screens</li>
                <li>JavaScript-powered interactions and user workflows</li>
              </ul>
              <a
                className="project-link"
                href="https://github.com/SaidurLabib30/Restaurant-Management"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="education"
          className={`panel${active === "education" ? " active" : ""}`}
        >
          <div className="filetag">
            <span className="dot amber"></span> education.md
          </div>
          <div className="edu-row">
            <div>
              <div className="edu-degree">
                B.Sc. in Computer Science &amp; Engineering
              </div>
              <div className="edu-school">
                American International University-Bangladesh (AIUB)
              </div>
            </div>
            <div className="edu-time">Feb 2022 — May 2026</div>
          </div>
          <div className="edu-row">
            <div>
              <div className="edu-degree">
                Higher Secondary Certificate (HSC)
              </div>
              <div className="edu-school">Sherpur Government College</div>
            </div>
            <div className="edu-time">2020</div>
          </div>
        </section>

        <section
          id="contact"
          className={`panel${active === "contact" ? " active" : ""}`}
        >
          <div className="filetag">
            <span className="dot pink"></span> contact.sh
          </div>
          <div className="contact-terminal">
            <div className="contact-line">
              <span className="prompt">$</span>
              <span className="cmd">echo</span>
              <a href="mailto:saidurrahmanlabib035@gmail.com">
                saidurrahmanlabib035@gmail.com
              </a>
            </div>
            <div className="contact-line">
              <span className="prompt">$</span>
              <span className="cmd">call</span>
              <a href="tel:+8801765593670">+880 1765-593670</a>
            </div>
            <div className="contact-line">
              <span className="prompt">$</span>
              <span className="cmd">open</span>
              <a
                href="https://github.com/SaidurLabib30"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/SaidurLabib30
              </a>
            </div>
            <div className="contact-line">
              <span className="prompt">$</span>
              <span className="cmd">open</span>
              <a
                href="https://www.linkedin.com/in/saidur-rahman-labib-3915aa386"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/saidur-rahman-labib
              </a>
            </div>
            <div className="contact-line">
              <span className="prompt">$</span>
              <span className="cmd">whereis</span>
              <span style={{ color: "var(--text)" }}>Dhaka, Bangladesh</span>
            </div>
          </div>
        </section>
      </main>

      <footer>built by Saidur Rahman Labib</footer>
    </>
  );
}
