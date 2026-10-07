/// <reference types="node" />
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { portfolio, sectionIds } from "../../data/portfolio";
import type { ContentSectionId } from "../../types/portfolio";
import { createHash } from "node:crypto";

const readme = readFileSync(resolve(process.cwd(), "README.md"), "utf8");

const expectNonEmpty = (value: string, message: string) => {
  expect(value.trim(), message).not.toHaveLength(0);
};

describe("src/data/portfolio.ts", () => {
  it("keeps the README usable for a first-time contributor", () => {
    const requiredInstructions = [
      "Create your GitHub account",
      "Use this template",
      "Create a new repository",
      "<username>.github.io",
      "Settings > Collaborators",
      "Add people",
      "write access",
      "Settings > Pages",
      "Visit site",
      "About",
      "Website",
      "Visual Studio Code",
      "Terminal > New Terminal",
      "git --version",
      "node --version",
      "npm --version",
      'git config --global user.name "Your Name"',
      'git config --global user.email "you@example.com"',
      "git config --get user.name",
      "git clone",
      "origin",
      "npm install",
      "npm ci",
      "npm run dev",
      "npm test",
      "npm run lint",
      "npm run build",
      "git status",
      "git add .",
      "git diff --staged",
      "git commit -m",
      "git branch -M main",
      "git push -u origin main",
      "GitHub Actions",
      "Deploy to GitHub Pages",
      "Run workflow",
      "Settings > Pages",
      "DEPLOYMENT.md",
    ];

    requiredInstructions.forEach((instruction) => {
      expect(readme).toContain(instruction);
    });

    const journeyOrder = [
      "Create your GitHub account",
      "Use this template",
      "Settings > Collaborators",
      "Settings > Pages",
      "Install Git, Node.js, and Visual Studio Code",
      "Tell Git who you are",
      "Clone and open your repository",
      "Install and preview locally",
      "Customize and check your work",
      "Commit and push your changes",
      "Watch the deployment",
      "Verify the updated live site",
    ];
    let previousIndex = -1;
    journeyOrder.forEach((step) => {
      const currentIndex = readme.indexOf(step);
      expect(
        currentIndex,
        `${step} must appear in the student journey`,
      ).toBeGreaterThan(previousIndex);
      previousIndex = currentIndex;
    });

    expect(readme).toMatch(/node_modules.*dist|dist.*node_modules/s);
    expect(readme).toMatch(/secret|\.env/i);
    expect(readme).not.toMatch(/git push[^\n]*upstream/);
  });

  it("keeps student-editable copy complete for every non-home section", () => {
    const contentSectionIds = sectionIds.filter(
      (sectionId): sectionId is ContentSectionId => sectionId !== "home",
    );

    expect(Object.keys(portfolio.sectionContent)).toHaveLength(
      contentSectionIds.length,
    );

    for (const sectionId of contentSectionIds) {
      const copy = portfolio.sectionContent[sectionId];

      expectNonEmpty(
        copy.eyebrow,
        `src/data/sectionContent.ts ${sectionId}.eyebrow is required`,
      );
      expectNonEmpty(
        copy.title,
        `src/data/sectionContent.ts ${sectionId}.title is required`,
      );
      expectNonEmpty(
        copy.description,
        `src/data/sectionContent.ts ${sectionId}.description is required`,
      );
    }
  });

  it("uses the supplied student evidence and preserves input files", () => {
    expect(portfolio.profile.name).toBe("Trần Nguyên Vũ");
    expect(portfolio.profile.contactPlaceholder).toBe(false);
    expect(portfolio.profile.email).toBe("trannguyenvu0102@gmail.com");
    expect(portfolio.education[0].period).toContain("2027");
    expect(portfolio.experience[0].period).toContain("Aug 2026");
    expect(portfolio.projects).toHaveLength(3);
    const nlp = portfolio.projects.find((p) => p.id === "disaster-tweets");
    expect(nlp?.outcome).toContain("0.84339");
    expect(nlp?.outcome).toContain("435");
    for (const project of portfolio.projects) {
      expectNonEmpty(project.question, project.id);
      expectNonEmpty(project.approach, project.id);
      expectNonEmpty(project.outcome, project.id);
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.actions).toEqual([]);
    }
    expect(portfolio.community).toHaveLength(4);
    expect(portfolio.certificates.every((c) => !c.file)).toBe(true);
    expect(
      createHash("sha256")
        .update(
          readFileSync(resolve("src/assets/Resume - Trần Nguyên Vũ.docx")),
        )
        .digest("hex"),
    ).toBe("b032f8d8fad4c4d9300b17da6353f66f6ea21433cc139931bda12c6f1264dd98");
    expect(
      createHash("sha256")
        .update(
          readFileSync(
            resolve("src/assets/Internship_Report_Tran_Nguyen_Vu.docx"),
          ),
        )
        .digest("hex"),
    ).toBe("15cca5f1220273a47d2e46e25849d8cb335d313c97eafb78267c4750ee36f819");
  });
});
