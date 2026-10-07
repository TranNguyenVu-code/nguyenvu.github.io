import { experience, sectionContent } from "../data/portfolio";
import SectionShell from "./shared/SectionShell";
export default function Experience() {
  return (
    <SectionShell
      id="experience"
      eyebrow={sectionContent.experience.eyebrow}
      title={sectionContent.experience.title}
      intro={sectionContent.experience.description}
      nextSectionId="projects"
    >
      {experience.map((entry) => (
        <article className="experience-card" key={entry.company}>
          <div className="experience-summary">
            <span className="eyebrow">SUMMER FIELDWORK</span>
            <h3>{entry.title}</h3>
            <p>{entry.company}</p>
            <span className="period">{entry.period}</span>
            <div className="workflow-strip mono">
              Collect
              <br />
              <span aria-hidden="true">↓</span>
              <br />
              Prepare
              <br />
              <span aria-hidden="true">↓</span>
              <br />
              Analyze
              <br />
              <span aria-hidden="true">↓</span>
              <br />
              Communicate
            </div>
          </div>
          <div className="experience-details">
            <ul className="detail-list">
              {entry.description.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <p className="reflection">
              Real-world analysis starts with understanding the question and the
              quality of the data.
            </p>
            <span className="mono reflection-label">
              MY INTERNSHIP TAKEAWAY
            </span>
          </div>
        </article>
      ))}
    </SectionShell>
  );
}
