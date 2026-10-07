import { hero, profile } from "../data/portfolio";
import { navigateToSection } from "../utils/scroll";

export default function Hero({ business = false }: { business?: boolean }) {
  const prefix = business ? "business-hero" : "hero";
  return (
    <section
      id="home"
      className="analytics-hero"
      aria-labelledby="hero-heading"
      data-testid="home-section"
    >
      <div className="hero-intro">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" /> {hero.eyebrow}
        </p>
        <p className="hero-name">
          Hello, I’m <strong>{profile.name}.</strong>
        </p>
        <h1 id="hero-heading" tabIndex={-1} data-chapter-heading>
          Curiosity,
          <br />
          meet <em>data.</em>
          <span className="headline-period" aria-hidden="true">
            *
          </span>
        </h1>
        <p className="hero-copy">{hero.intro}</p>
        <div className="hero-actions">
          <button
            className="action primary"
            onClick={() => navigateToSection(hero.primaryAction.sectionId)}
            aria-label={hero.primaryAction.ariaLabel}
            data-testid={`${prefix}-primary-action`}
          >
            {hero.primaryAction.label} <span aria-hidden="true">↗</span>
          </button>
          <a
            className="action secondary"
            href={profile.resume.href}
            download={profile.resume.fileName}
            aria-label={profile.resume.ariaLabel}
            data-testid={`${prefix}-resume-download`}
          >
            {profile.resume.label} <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-tools">
          <span className="mono">CURRENT TOOLKIT</span>
          {hero.stackHighlights.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
      <aside className="notebook-cover" aria-label="My analytical interests">
        <div className="notebook-top">
          <span className="mono">FIELD NOTES / VŨ</span>
          <span className="notebook-dot" aria-hidden="true" />
        </div>
        <div className="orbital-visual" aria-hidden="true">
          <svg viewBox="0 0 400 310" fill="none">
            <circle className="orbit" cx="200" cy="155" r="112" />
            <ellipse
              className="orbit"
              cx="200"
              cy="155"
              rx="160"
              ry="62"
              transform="rotate(-30 200 155)"
            />
            <ellipse
              className="orbit"
              cx="200"
              cy="155"
              rx="160"
              ry="62"
              transform="rotate(30 200 155)"
            />
            <path className="orbit" d="M200 14v282M39 155h322" />
            <circle className="orbital-node" cx="100" cy="98" r="9" />
            <circle className="orbital-node" cx="300" cy="212" r="6" />
            <circle className="orbital-node small" cx="240" cy="58" r="5" />
            <circle className="orbital-core" cx="200" cy="155" r="50" />
            <text x="200" y="165" textAnchor="middle">
              f(x)
            </text>
          </svg>
          <span className="orbit-label label-science">NATURAL SCIENCE</span>
          <span className="orbit-label label-math">MATHEMATICS</span>
          <span className="orbit-label label-data">DATA SCIENCE</span>
        </div>
        <div className="notebook-statement">
          <span className="mono">WORKING HYPOTHESIS</span>
          <p>
            Better questions.
            <br />
            <strong>More useful insights.</strong>
          </p>
        </div>
        <div className="notebook-bottom">
          <span>Observe → Explore → Explain</span>
          <span aria-hidden="true">✳</span>
        </div>
      </aside>
      <div className="hero-evidence">
        {hero.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
        <p className="evidence-note">
          Small steps.
          <br />
          <strong>A growing perspective.</strong>
        </p>
      </div>
      <button
        className="hero-story"
        onClick={() => navigateToSection("about")}
        data-testid={`${prefix}-secondary-action`}
      >
        Start with my story <span aria-hidden="true">↓</span>
      </button>
    </section>
  );
}
