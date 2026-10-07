import { about, profile, sectionContent } from "../data/portfolio";
import SectionShell from "./shared/SectionShell";
export default function About() {
  return (
    <SectionShell
      id="about"
      eyebrow={sectionContent.about.eyebrow}
      title={sectionContent.about.title}
      intro={sectionContent.about.description}
      nextSectionId="education"
    >
      <div className="about-grid">
        <div className="about-mark">
          <span className="mono">A WORK IN PROGRESS</span>
          <strong aria-hidden="true">
            VŨ<span>✳</span>
          </strong>
          <p>{profile.role}</p>
          <span className="mono">{profile.location}</span>
        </div>
        <div className="prose">
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <div className="about-metrics">
            {about.metrics.map((m) => (
              <div key={m.label}>
                <span className="mono">{m.label}</span>
                <strong>{m.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
