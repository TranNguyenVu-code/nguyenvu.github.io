import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { businessTemplate } from "./index";
import { projects } from "../../data/portfolio";
afterEach(cleanup);
describe("business student evidence", () => {
  it("presents every analytical project with question, approach, and supported result", () => {
    const Projects = businessTemplate.sectionComponents.projects;
    render(<Projects />);
    for (const project of projects) {
      expect(screen.getByText(project.question)).toBeInTheDocument();
      expect(screen.getByText(project.approach)).toBeInTheDocument();
      expect(screen.getByText(project.outcome)).toBeInTheDocument();
    }
    expect(screen.queryByRole("link")).toBeNull();
  });
  it("presents leadership as readable records without retired media", () => {
    const Community = businessTemplate.sectionComponents.community;
    render(<Community />);
    expect(screen.getByTestId("community-section")).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(4);
    expect(screen.queryByRole("img")).toBeNull();
  });
});
