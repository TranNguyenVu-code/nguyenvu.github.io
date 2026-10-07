import { community, sectionContent } from "../data/portfolio";
import SectionShell from "./shared/SectionShell";
export default function Community() {
  return (
    <SectionShell
      id="community"
      eyebrow={sectionContent.community.eyebrow}
      title={sectionContent.community.title}
      intro={sectionContent.community.description}
      nextSectionId="contact"
    >
      <div className="community-grid">
        {community.map((entry) => (
          <article className="community-card" key={entry.title}>
            <p className="eyebrow">{entry.period}</p>
            <h3>{entry.title}</h3>
            <p className="institution">{entry.company}</p>
            <ul className="detail-list">
              {entry.description.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
