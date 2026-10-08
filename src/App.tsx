const email = 'emoody110@gmail.com'
const linkedIn = 'https://www.linkedin.com/in/elizabethamoody/'

const projects = [
  {
    category: 'Cloud architecture',
    title: 'Enterprise-scale infrastructure.',
    description:
      'Helped launch a networking proof of concept for a global payments company, contributing architecture, technical specifications, and sessions with networking specialists.',
    tags: ['Oracle Cloud', 'Networking', 'Proofs of concept'],
  },
  {
    category: 'Document intelligence',
    title: 'Less friction. Better accuracy.',
    description:
      'Supported the final stages of a major U.S. bank\'s loan-document processing proof of concept, which brought extraction error rates from about 40% to 5-10%.',
    tags: ['Document AI', 'Financial services'],
  },
  {
    category: 'Applied AI',
    title: 'Connected agents, practical use cases.',
    description:
      'Collaborated on an OCI-based multiagent insurance claims demo, connecting specialized agents for intake, classification, document processing, routing, and summaries.',
    tags: ['Multiagent AI', 'Workflow automation'],
  },
]

const experience = [
  {
    title: 'Staff Cloud Engineer',
    detail: 'Financial Services Industry',
    start: '2024-09',
    end: '2026-04',
    dates: ['Sep 2024', 'Apr 2026'],
    description:
      'Promoted after two years to support complex enterprise financial services opportunities. Translated customer discovery into OCI architectures, infrastructure plans, and proofs of concept, while collaborating on AI tools for solution engineering.',
  },
  {
    title: 'Cloud Engineer',
    detail: 'Cloud solutions & technical presales',
    start: '2022-07',
    end: '2024-08',
    dates: ['Jul 2022', 'Aug 2024'],
    description:
      'Supported a high-volume portfolio of cloud opportunities through discovery, environment assessments, and technical demonstrations. Stayed involved after the sale with weekly migration sessions and shared Oracle Analytics Cloud expertise across teams.',
  },
  {
    title: 'Technical Enablement',
    detail: 'Brown Bag Series / Alongside engineering roles',
    start: '2022-11',
    end: '2026-04',
    dates: ['Nov 2022', 'Apr 2026'],
    description:
      'Led a biweekly, organization-wide learning series with solution architects, product managers, and Oracle partners. Curated practical technical content and brought the series into the organization\'s formal enablement program.',
  },
]

const skills = [
  {
    title: 'Cloud & architecture',
    items: 'Oracle Cloud Infrastructure, cloud migrations, networking, high-performance computing, market data',
  },
  {
    title: 'AI & analytics',
    items: 'Multiagent AI, OCI Document Understanding, Oracle Analytics Cloud',
  },
  {
    title: 'Solution engineering',
    items: 'Customer discovery, proofs of concept, bills of materials, technical demos, RFP collaboration',
  },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={diagonal ? 'M7 17 17 7M7 7h10v10' : 'M4 12h16m-6-6 6 6-6 6'} />
    </svg>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header container">
        <a className="wordmark" href="#home" aria-label="Liza Moody, home">
          liza moody<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Let&apos;s talk <Arrow diagonal /></a>
        </nav>
      </header>

      <main id="main" className="container">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Cloud &amp; solutions engineering</p>
            <h1 id="hero-title">Liza Moody<span>.</span></h1>
          {/*}  <p className="hero-headline">Technical depth.<br /><span>Business perspective.</span></p>
          */}
            <p className="hero-description">
              I turn complex requirements into practical cloud solutions, connecting
              the architecture, the people, and the business behind them.
            </p>
            <div className="hero-actions">
              <a className="button" href="#work">Explore my work <Arrow /></a>
              <a className="text-link" href={linkedIn} target="_blank" rel="noreferrer">
                LinkedIn <Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <aside className="hero-aside" aria-label="At a glance">
            <span className="aside-mark" aria-hidden="true">lm.</span>
            <dl>
              <div><dt>Based in</dt><dd>Austin, Texas</dd></div>
              <div><dt>Most recently</dt><dd>Staff Cloud Engineer<span>Oracle &middot; Financial Services</span></dd></div>
              <div><dt>My focus</dt><dd>Cloud architecture &amp; applied AI</dd></div>
              <div><dt>Education</dt><dd>University of Southern California<span>BS Computer Science & Business Administration</span></dd></div>
            </dl>
          </aside>
        </section>
{/*
        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Complex challenges. Practical solutions.</h2></div>
            <p>A few things I helped bring to life at Oracle.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-meta"><span>{project.category}</span><span>0{index + 1}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tags" aria-label="Technologies and focus areas">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>
*/}
        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div><p className="eyebrow">01 / Experience</p><h2 id="experience-title">Built on real-world experience.</h2></div>
            <p>Oracle <span className="separator">/</span> Austin, TX</p>
          </div>
          <div className="experience-list">
            {experience.map((role) => (
              <article className="experience-row" key={role.title}>
                <p className="date-range">
                  <time dateTime={role.start}>{role.dates[0]}</time>
                  <span aria-hidden="true"> &mdash; </span><span className="sr-only"> to </span>
                  <time dateTime={role.end}>{role.dates[1]}</time>
                </p>
                <div className="role-title"><h3>{role.title}</h3><p>{role.detail}</p></div>
                <p className="role-description">{role.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="about-copy">
            <p className="eyebrow">02 / A little about me</p>
            <h2 id="about-title">At the intersection of<br />business and technology.</h2>
            <p>
              My background combines computer science and business administration.
              That perspective shapes how I work: start with the problem, understand
              what matters, and design a solution that makes sense beyond the technical spec.
            </p>
            <p>
              I&apos;ve put that into practice across enterprise cloud architecture,
              financial services, and applied AI. I also enjoy making technical
              knowledge more accessible, whether through a customer demo or a
              cross-team learning session.
            </p>
            <div className="education">
              <span className="education-mark" aria-hidden="true">SC</span>
              <div><h3>University of Southern California</h3><p>BS, Computer Science and Business Administration</p></div>
            </div>
          </div>
          <div className="skills">
            <p className="eyebrow">What I work with</p>
            {skills.map((skill) => (
              <div className="skill-group" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">04 / Get in touch</p>
            <h2 id="contact-title">Good work starts<br />with a conversation.</h2>
            <p>Have an interesting opportunity or a problem worth solving? Let&apos;s connect.</p>
          </div>
          <div className="contact-links">
            <a className="button" href={`mailto:${email}`}>Say hello <Arrow diagonal /></a>
            <a className="email-link" href={`mailto:${email}`}>{email}</a>
            <a className="text-link" href={linkedIn} target="_blank" rel="noreferrer">
              Connect on LinkedIn <Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <p>&copy; {new Date().getFullYear()} Liza Moody</p>
        <a href="#home">Back to top <span aria-hidden="true">&uarr;</span></a>
      </footer>
    </>
  )
}
