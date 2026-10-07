import type { PortfolioTemplateId } from "./types";

type PortfolioTemplateOption = {
  id: PortfolioTemplateId;
  label: string;
  description: string;
};

export const portfolioTemplateOptions = {
  engineering: {
    id: "engineering",
    label: "Engineering",
    description:
      "An analytical notebook of student projects, questions, and learning.",
  },
  business: {
    id: "business",
    label: "Business",
    description:
      "An editorial casebook of analytics experience and student evidence.",
  },
} satisfies Record<PortfolioTemplateId, PortfolioTemplateOption>;

export const selectablePortfolioTemplateIds = [
  "engineering",
  "business",
] as const satisfies readonly PortfolioTemplateId[];

export const portfolioTemplateOptionList = selectablePortfolioTemplateIds.map(
  (templateId) => portfolioTemplateOptions[templateId],
);
