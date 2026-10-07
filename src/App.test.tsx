import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import App, { PortfolioApp } from "./App";
import { Provider } from "./components/ui/provider";
import { navigation, profile, sectionContent } from "./data/portfolio";
import { selectedTemplateId } from "./data/template";
import { businessTemplate } from "./templates/business";
import { engineeringTemplate } from "./templates/engineering";
import type { PortfolioTemplate, PortfolioTemplateId } from "./templates/types";
import { PORTFOLIO_TEMPLATE_STORAGE_KEY } from "./utils/templateSelection";

const enabledNavigationItems = navigation.filter((item) => item.enabled);

type ActiveTemplateControls = {
  primaryAction: string;
  resume: string;
  layout: string;
  theme: string;
  menu?: string;
  projectLink: string;
};

const activeTemplateControls: ActiveTemplateControls = {
  engineering: {
    primaryAction: "hero-primary-action",
    resume: "hero-resume-download",
    layout: "navbar-layout-toggle",
    theme: "navbar-theme-toggle",
    menu: "navbar-menu-toggle",
    projectLink: "navbar-mobile-link-projects",
  },
  business: {
    primaryAction: "business-hero-primary-action",
    resume: "business-hero-resume-download",
    layout: "business-layout-toggle",
    theme: "business-theme-toggle",
    projectLink: "business-contents-link-projects",
  },
}[selectedTemplateId];

const renderPortfolio = () =>
  render(
    <Provider>
      <App />
    </Provider>,
  );

const renderTemplate = (template: PortfolioTemplate) =>
  render(
    <Provider>
      <PortfolioApp initialTemplate={template} />
    </Provider>,
  );

const templateSelectorPrefixes: Record<PortfolioTemplateId, string> = {
  engineering: "navbar",
  business: "business",
};

const selectPortfolioStyle = async (
  currentTemplateId: PortfolioTemplateId,
  nextTemplateId: PortfolioTemplateId,
) => {
  const prefix = templateSelectorPrefixes[currentTemplateId];

  fireEvent.click(screen.getByTestId(`${prefix}-style-selector-trigger`));
  fireEvent.click(
    await screen.findByTestId(
      `${prefix}-style-selector-option-${nextTemplateId}`,
    ),
  );
};

beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  window.localStorage.clear();
  window.history.pushState(null, "", "/");
});

afterEach(() => {
  cleanup();
});

describe("App smoke render", () => {
  it("renders core portfolio content from local data files", () => {
    renderPortfolio();

    expect(document.body.textContent).toContain(profile.name);
    expect(document.body.textContent).toContain(profile.role);
    expect(
      screen.getByTestId(activeTemplateControls.primaryAction),
    ).toBeInTheDocument();
    expect(screen.getByTestId(activeTemplateControls.resume)).toHaveAttribute(
      "download",
      profile.resume.fileName,
    );
    expect(
      screen.getAllByText(enabledNavigationItems[0].label).length,
    ).toBeGreaterThan(0);
  });

  it("renders the student scholarship with its source-backed value", () => {
    renderPortfolio();

    expect(document.body.textContent).toContain("Future Founders");
    expect(document.body.textContent).toContain("25 million");
  });

  it("renders student-editable descriptions below every non-home section heading", () => {
    renderPortfolio();

    for (const copy of Object.values(sectionContent)) {
      expect(screen.getByText(copy.description)).toBeInTheDocument();
    }
  });

  it("renders the layout switch control and all enabled sections in single-page mode", () => {
    renderPortfolio();

    expect(
      screen.getByTestId(activeTemplateControls.layout),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(activeTemplateControls.theme),
    ).toBeInTheDocument();
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "single",
    );
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      selectedTemplateId,
    );
    expect(
      screen.getByTestId(
        `${templateSelectorPrefixes[selectedTemplateId]}-style-selector-trigger`,
      ),
    ).toHaveAccessibleName("Portfolio style: Engineering");
    expect(document.getElementById("home")).toBeInTheDocument();
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
  });

  it("switches to multi-page mode and renders one selected page section", async () => {
    renderPortfolio();

    fireEvent.click(screen.getByTestId(activeTemplateControls.layout));

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "multi",
    );
    expect(document.getElementById("home")).toBeInTheDocument();
    expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    if (activeTemplateControls.menu) {
      fireEvent.click(screen.getByTestId(activeTemplateControls.menu));
    }
    fireEvent.click(
      await screen.findByTestId(activeTemplateControls.projectLink),
    );

    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
    expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    expect(window.location.hash).toBe("#/projects");
  });

  it("initializes multi-page mode from a direct GitHub Pages-safe section hash", async () => {
    window.history.pushState(null, "", "#/projects");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "multi",
    );
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
    expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    expect(window.location.hash).toBe("#/projects");
  });

  it("keeps a direct anchor hash in single-page mode", () => {
    window.history.pushState(null, "", "#about");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "single",
    );
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
  });

  it("resolves an invalid slash route to the first enabled section without rendering an alternate tree", () => {
    window.history.pushState(null, "", "#/missing");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "multi",
    );
    expect(
      document.getElementById(enabledNavigationItems[0].id),
    ).toBeInTheDocument();
    expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    expect(screen.queryByTestId("projects-section")).not.toBeInTheDocument();
  });

  it.each([
    [
      "engineering",
      engineeringTemplate,
      "navbar-layout-toggle",
      "navbar-theme-toggle",
      "navbar",
    ],
    [
      "business",
      businessTemplate,
      "business-layout-toggle",
      "business-theme-toggle",
      "business",
    ],
  ] as const)(
    "composes the %s template through the shared App boundary",
    async (
      templateId,
      template,
      layoutToggleId,
      themeToggleId,
      selectorPrefix,
    ) => {
      renderTemplate(template);

      expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
        "data-template-id",
        templateId,
      );
      expect(document.getElementById("home")).toBeInTheDocument();
      expect(screen.getByTestId("about-section")).toBeInTheDocument();
      expect(screen.getByTestId(layoutToggleId)).toBeInTheDocument();
      expect(screen.getByTestId(themeToggleId)).toBeInTheDocument();
      fireEvent.click(
        screen.getByTestId(`${selectorPrefix}-style-selector-trigger`),
      );
      for (const supportedTemplate of ["engineering", "business"] as const) {
        const option = await screen.findByTestId(
          `${selectorPrefix}-style-selector-option-${supportedTemplate}`,
        );

        expect(option).toHaveAttribute(
          "aria-checked",
          supportedTemplate === templateId ? "true" : "false",
        );
      }
      for (const copy of Object.values(sectionContent)) {
        expect(screen.getByText(copy.description)).toBeInTheDocument();
      }
    },
  );

  it("composes Business as an editorial casebook with sticky contents", () => {
    renderTemplate(businessTemplate);

    expect(
      document.querySelector(".business-casebook-header"),
    ).toBeInTheDocument();
    expect(
      document.querySelector(".business-casebook-rail"),
    ).toBeInTheDocument();
    expect(
      document.querySelector(".business-casebook-document"),
    ).toBeInTheDocument();
    expect(
      document.querySelector('nav[aria-label="Business showcase contents"]'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("business-contents-link-projects"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A structured record of work, study, and ongoing learning.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(sectionContent.projects.eyebrow),
    ).toBeInTheDocument();
    expect(screen.queryByText("Executive brief")).not.toBeInTheDocument();
    expect(screen.queryByText("Reviewed evidence")).not.toBeInTheDocument();
  });

  it.each([
    ["engineering", engineeringTemplate, "navbar-layout-toggle"],
    ["business", businessTemplate, "business-layout-toggle"],
  ] as const)(
    "keeps the %s template compatible with both layout modes",
    (_templateId, template, layoutToggleId) => {
      renderTemplate(template);

      expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
        "data-layout-mode",
        "single",
      );
      fireEvent.click(screen.getByTestId(layoutToggleId));
      expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
        "data-layout-mode",
        "multi",
      );
      expect(document.getElementById("home")).toBeInTheDocument();
      expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    },
  );

  it("keeps semantic portfolio-style selection without a visible check indicator", async () => {
    renderPortfolio();

    fireEvent.click(screen.getByTestId("navbar-style-selector-trigger"));
    const activeOption = await screen.findByTestId(
      "navbar-style-selector-option-engineering",
    );
    const selectorMenu = screen.getByTestId("navbar-style-selector-menu");

    expect(activeOption).toHaveAttribute("aria-checked", "true");
    expect(
      selectorMenu.querySelector('[data-part="item-indicator"]'),
    ).toBeNull();
  });

  it("switches immediately between both visible portfolio styles and persists the latest choice", async () => {
    renderPortfolio();

    await selectPortfolioStyle("engineering", "business");
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "business",
    );
    expect(window.localStorage.getItem(PORTFOLIO_TEMPLATE_STORAGE_KEY)).toBe(
      "business",
    );

    await selectPortfolioStyle("business", "engineering");
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "engineering",
    );
    expect(window.localStorage.getItem(PORTFOLIO_TEMPLATE_STORAGE_KEY)).toBe(
      "engineering",
    );
  });

  it("restores a valid saved style instead of the source default", () => {
    window.localStorage.setItem(PORTFOLIO_TEMPLATE_STORAGE_KEY, "business");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "business",
    );
    expect(
      screen.getByTestId("business-style-selector-trigger"),
    ).toHaveAccessibleName("Portfolio style: Business");
  });

  it("falls back to Engineering when a saved style is invalid", () => {
    window.localStorage.setItem(PORTFOLIO_TEMPLATE_STORAGE_KEY, "missing");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "engineering",
    );
  });

  it("falls back to Engineering when a saved style is the removed Neutral option", () => {
    window.localStorage.setItem(PORTFOLIO_TEMPLATE_STORAGE_KEY, "neutral");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "engineering",
    );
  });

  it("preserves a multi-page section route and layout while changing styles", async () => {
    window.history.pushState(null, "", "#/projects");

    renderPortfolio();
    await selectPortfolioStyle("engineering", "business");

    expect(window.location.hash).toBe("#/projects");
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "business",
    );
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "multi",
    );
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
  });

  it("preserves a visitor-selected layout mode while changing styles", async () => {
    renderPortfolio();

    fireEvent.click(screen.getByTestId("navbar-layout-toggle"));
    await selectPortfolioStyle("engineering", "business");

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "business",
    );
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "multi",
    );
  });

  it("preserves color mode while changing styles", async () => {
    renderPortfolio();

    fireEvent.click(await screen.findByTestId("navbar-theme-toggle"));
    await waitFor(() => expect(document.documentElement).toHaveClass("dark"));
    await selectPortfolioStyle("engineering", "business");

    expect(document.documentElement).toHaveClass("dark");
    expect(
      await screen.findByTestId("business-theme-toggle"),
    ).toBeInTheDocument();
  });
});

describe("student portfolio actions", () => {
  it.each(["#/journal/old-post", "#/gallery", "#/unknown", "#journal"])(
    "recovers retired route %s",
    (hash) => {
      window.history.pushState(null, "", hash);
      renderPortfolio();
      expect(window.location.hash).toBe(
        hash.startsWith("#/") ? "#/home" : "#home",
      );
      expect(document.getElementById("home")).toBeInTheDocument();
      expect(document.getElementById("journal")).toBeNull();
    },
  );
  it.each([
    [engineeringTemplate, "hero", "navbar"],
    [businessTemplate, "business-hero", "business"],
  ] as const)(
    "supports student actions in %s",
    (template, prefix, controls) => {
      renderTemplate(template);
      expect(document.body.textContent).toContain("Trần Nguyên Vũ");
      expect(screen.getByTestId(prefix + "-resume-download")).toHaveAttribute(
        "href",
        profile.resume.href,
      );
      expect(screen.getByTestId(prefix + "-resume-download")).toHaveAttribute(
        "download",
        "Tran-Nguyen-Vu-Resume.docx",
      );
      expect(screen.getByTestId("contact-submit")).toBeEnabled();
      expect(screen.getByTestId("contact-name-input")).toBeEnabled();
      expect(screen.getByTestId("contact-email-link")).toHaveAttribute(
        "href",
        "mailto:trannguyenvu0102@gmail.com",
      );
      expect(screen.getByTestId("contact-social-github")).toHaveAttribute(
        "href",
        "https://github.com/TranNguyenVu-code",
      );
      expect(
        screen.queryByTestId("contact-email-placeholder"),
      ).not.toBeInTheDocument();
      expect(document.querySelector('a[href*="example.com"]')).toBeNull();
      fireEvent.click(screen.getByTestId(controls + "-layout-toggle"));
      fireEvent.click(screen.getByTestId(prefix + "-primary-action"));
      expect(window.location.hash).toBe("#/projects");
      expect(screen.getByTestId("projects-section")).toBeInTheDocument();
      expect(screen.queryByTestId("home-section")).not.toBeInTheDocument();
    },
  );
  it("gives direct anchors priority over a saved section layout", () => {
    localStorage.setItem("portfolio-layout-mode", "multi");
    window.history.replaceState(null, "", "#education");
    renderPortfolio();
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "single",
    );
    expect(screen.getByTestId("education-section")).toBeInTheDocument();
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
  });
  it("keeps skip navigation within the current section route", () => {
    window.history.replaceState(null, "", "#/projects");
    renderPortfolio();
    fireEvent.click(screen.getByText("Skip to portfolio content"));
    expect(screen.getByTestId("portfolio-main")).toHaveFocus();
    expect(window.location.hash).toBe("#/projects");
  });
  it("focuses the heading when a section action opens a page", async () => {
    window.history.replaceState(null, "", "#/home");
    renderPortfolio();
    fireEvent.click(screen.getByTestId("hero-primary-action"));
    await waitFor(() =>
      expect(document.getElementById("projects-heading")).toHaveFocus(),
    );
    window.history.replaceState(null, "", "#/journal/removed");
    fireEvent(window, new PopStateEvent("popstate"));
    expect(window.location.hash).toBe("#/home");
  });
  it("updates sections when navigating browser history", () => {
    window.history.pushState(null, "", "#/community");
    renderPortfolio();
    expect(screen.getByTestId("community-section")).toBeInTheDocument();
    fireEvent(window, new PopStateEvent("popstate"));
    window.history.replaceState(null, "", "#/education");
    fireEvent(window, new PopStateEvent("popstate"));
    expect(screen.getByTestId("education-section")).toBeInTheDocument();
    expect(screen.queryByTestId("community-section")).not.toBeInTheDocument();
  });
});
