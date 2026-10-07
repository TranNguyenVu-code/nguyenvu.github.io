import { awards, sectionContent } from "../data/portfolio";
import SectionShell from "./shared/SectionShell";
export default function Awards() {
  return (
    <SectionShell
      id="awards"
      eyebrow={sectionContent.awards.eyebrow}
      title={sectionContent.awards.title}
      intro={sectionContent.awards.description}
      nextSectionId="skills"
    >
      {awards.map((award) => (
        <article className="award-card" key={award.title}>
          <div className="award-mark">
            <strong>{award.logoText}</strong>
            <span>Talent Scholarship</span>
          </div>
          <div>
            <p className="eyebrow">
              {award.tag} / {award.year}
            </p>
            <h3>{award.title}</h3>
            <p className="institution">{award.organization}</p>
            <p>{award.description}</p>
          </div>
        </article>
      ))}
    </SectionShell>
  );
}
