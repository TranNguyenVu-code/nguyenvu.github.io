import { Box } from "@chakra-ui/react";

import Navbar from "../../components/Navbar";
import type { PortfolioShellProps } from "../types";

function EngineeringShell({
  activeSection,
  activeTemplateId,
  layoutMode,
  navigationItems,
  getNavigationHref,
  onNavigate,
  onSelectTemplate,
  onToggleLayoutMode,
  children,
}: PortfolioShellProps) {
  return (
    <Box
      minH="100vh"
      w="100%"
      className="portfolio-template portfolio-template-engineering"
      data-template-id="engineering"
    >
      <a
        className="skip-link"
        href="#portfolio-main"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("portfolio-main")?.focus();
        }}
      >
        Skip to portfolio content
      </a>
      <Navbar
        activeSection={activeSection}
        activeTemplateId={activeTemplateId}
        getNavigationHref={getNavigationHref}
        layoutMode={layoutMode}
        navigationItems={[...navigationItems]}
        onNavigate={onNavigate}
        onSelectTemplate={onSelectTemplate}
        onToggleLayoutMode={onToggleLayoutMode}
      />
      <Box
        as="main"
        w="100%"
        p={0}
        m={0}
        id="portfolio-main"
        data-layout-mode={layoutMode}
        data-template-id="engineering"
        data-testid="portfolio-main"
        tabIndex={-1}
      >
        {children}
      </Box>
    </Box>
  );
}

export default EngineeringShell;
