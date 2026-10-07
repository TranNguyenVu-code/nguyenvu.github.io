import { education, sectionContent } from "../data/portfolio";
import SectionShell from "./shared/SectionShell";
export default function Education() {
  return (
    <SectionShell
      id="education"
      eyebrow={sectionContent.education.eyebrow}
      title={sectionContent.education.title}
      intro={sectionContent.education.description}
      nextSectionId="experience"
    >
      {education.map((entry) => (
        <article className="education-card" key={entry.institution}>
          <div className="education-mark" aria-hidden="true">
            HUS<span>SCIENCE / 2027</span>
          </div>
          <div>
            <p className="eyebrow">{entry.period}</p>
            <h3>{entry.degree}</h3>
            <p className="institution">{entry.institution}</p>
            <p>{entry.specialization}</p>
            <ul className="detail-list">
              {entry.description.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </SectionShell>
  );
}
