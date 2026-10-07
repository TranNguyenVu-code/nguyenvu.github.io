import { certificates, skills, sectionContent } from "../data/portfolio";
import SectionShell from "./shared/SectionShell";
export default function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow={sectionContent.skills.eyebrow}
      title={sectionContent.skills.title}
      intro={sectionContent.skills.description}
      nextSectionId="community"
    >
      <div className="skills-grid">
        {skills.map((category) => (
          <article className="skill-group" key={category.category}>
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill.label}>{skill.label}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="learning-heading">
        <h3>Learning, with intention.</h3>
        <p>Coursework and certifications described in my resume.</p>
      </div>
      <div className="learning-grid">
        {certificates.map((course) => (
          <article className="learning-card" key={course.title}>
            <p className="eyebrow">
              {course.issuer} / {course.period}
            </p>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <span className="learning-kind">{course.kind}</span>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
