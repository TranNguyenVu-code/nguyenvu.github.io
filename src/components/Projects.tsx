import { projects, sectionContent } from "../data/portfolio";
import SectionShell from "./shared/SectionShell";

export default function Projects({ business = false }: { business?: boolean }) {
  return (
    <SectionShell
      id="projects"
      {...{
        eyebrow: sectionContent.projects.eyebrow,
        title: sectionContent.projects.title,
        intro: sectionContent.projects.description,
      }}
      nextSectionId="awards"
    >
      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card project-${project.id}`}
            key={project.id}
            data-testid={`${business ? "business-" : ""}project-card-${project.id}`}
          >
            <div className="project-art" aria-hidden="true">
              <span className="mono">
                {index === 0
                  ? "FORECAST / EXPLORE"
                  : index === 1
                    ? "LANGUAGE / CLASSIFY"
                    : "COMMERCE / ANALYZE"}
              </span>
              {index === 0 ? (
                <svg viewBox="0 0 320 140" fill="none">
                  <path
                    className="art-grid"
                    d="M0 35h320M0 70h320M0 105h320M40 0v140M120 0v140M200 0v140M280 0v140"
                  />
                  <path
                    className="art-line"
                    d="M10 110l30-22 25 10 30-44 30 14 25-20 30 5 30-28"
                  />
                  <path
                    className="art-line art-dashed"
                    d="m210 25 30 13 30-20 40 12"
                  />
                  <circle cx="210" cy="25" r="5" className="art-node" />
                </svg>
              ) : index === 1 ? (
                <div className="word-cloud">
                  <span>signal</span>
                  <span>context</span>
                  <strong>meaning</strong>
                  <span>noise</span>
                  <span>language</span>
                </div>
              ) : (
                <div className="discount-art">
                  <span>price</span>
                  <strong>↘</strong>
                  <span>profit?</span>
                </div>
              )}
              <small>Conceptual illustration · not measured data</small>
            </div>
            <div className="project-body">
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-question">{project.question}</p>
              <dl>
                <dt>THE APPROACH</dt>
                <dd>{project.approach}</dd>
                <dt>WHAT I FOUND / BUILT</dt>
                <dd>{project.outcome}</dd>
              </dl>
              <div className="tags">
                {project.technologies.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              <p className="project-period mono">{project.period}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
