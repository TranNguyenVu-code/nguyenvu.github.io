import { useCallback, useEffect, useMemo, useState } from "react";

import "./App.css";
import { navigation } from "./data/portfolio";
import { selectedTemplateId } from "./data/template";
import { usePortfolioLayout } from "./hooks/usePortfolioLayout";
import { getPortfolioTemplate } from "./templates";
import type { PortfolioTemplate, PortfolioTemplateId } from "./templates/types";
import {
  getEnabledNavigationItems,
  getEnabledSectionIds,
  useActiveSection,
} from "./utils/scroll";
import {
  getInitialPortfolioTemplateId,
  persistPortfolioTemplateId,
} from "./utils/templateSelection";

type PortfolioAppProps = {
  initialTemplate?: PortfolioTemplate;
};

export function PortfolioApp({ initialTemplate }: PortfolioAppProps) {
  const [activeTemplateId, setActiveTemplateId] = useState<PortfolioTemplateId>(
    () =>
      getInitialPortfolioTemplateId(initialTemplate?.id ?? selectedTemplateId),
  );
  const template = getPortfolioTemplate(activeTemplateId);
  const enabledNavigationItems = useMemo(
    () => getEnabledNavigationItems(navigation, template.isSectionVisible),
    [template],
  );
  const enabledSectionIds = useMemo(
    () => getEnabledSectionIds(enabledNavigationItems),
    [enabledNavigationItems],
  );
  const sectionComponents = template.sectionComponents;
  const scrollActiveSection = useActiveSection(enabledSectionIds);
  const {
    layoutMode,
    activeSection,
    activePageSection,
    isMultiPageLayout,
    getNavigationHref,
    navigateToSection,
    toggleLayoutMode,
  } = usePortfolioLayout(enabledSectionIds, scrollActiveSection);

  useEffect(() => {
    if (!isMultiPageLayout) return;
    const frame = window.requestAnimationFrame(() => {
      const main = document.getElementById("portfolio-main");
      main?.scrollIntoView({ behavior: "instant", block: "start" });
      main
        ?.querySelector<HTMLElement>("[data-chapter-heading]")
        ?.focus({ preventScroll: true });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isMultiPageLayout, activePageSection]);

  const visibleSectionIds = isMultiPageLayout
    ? [activePageSection]
    : enabledSectionIds;
  const ShellComponent = template.ShellComponent;
  const selectTemplate = useCallback((templateId: PortfolioTemplateId) => {
    const resolvedTemplateId = getPortfolioTemplate(templateId).id;

    persistPortfolioTemplateId(resolvedTemplateId);
    setActiveTemplateId(resolvedTemplateId);
  }, []);
  const selectedContent = visibleSectionIds.map((sectionId) => {
    const SectionComponent = sectionComponents[sectionId];
    return <SectionComponent key={sectionId} />;
  });

  return (
    <ShellComponent
      activeSection={activeSection}
      activeTemplateId={activeTemplateId}
      getNavigationHref={getNavigationHref}
      layoutMode={layoutMode}
      navigationItems={enabledNavigationItems}
      onNavigate={navigateToSection}
      onSelectTemplate={selectTemplate}
      onToggleLayoutMode={toggleLayoutMode}
    >
      {selectedContent}
    </ShellComponent>
  );
}

function App() {
  return <PortfolioApp />;
}

export default App;
