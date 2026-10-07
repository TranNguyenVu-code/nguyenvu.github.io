import type { ReactNode } from "react";
import type { SectionId } from "../../types/portfolio";
import { navigateToSection } from "../../utils/scroll";

type SectionShellProps = {
  id: SectionId;
  eyebrow: string;
  title: string;
  intro: string;
  nextSectionId?: SectionId;
  children: ReactNode;
};
export default function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  nextSectionId,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className="portfolio-section"
      data-testid={`${id}-section`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="section-inner">
        <header className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-heading`} tabIndex={-1} data-chapter-heading>
            {title}
          </h2>
          <p className="section-intro">{intro}</p>
        </header>
        {children}
        {nextSectionId && (
          <button
            className="section-next"
            onClick={() => navigateToSection(nextSectionId)}
            aria-label={`Continue to ${nextSectionId}`}
            data-testid={`${id}-next-section`}
          >
            Continue exploring <span aria-hidden="true">↗</span>
          </button>
        )}
      </div>
    </section>
  );
}
