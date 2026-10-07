import type { SkillCategory } from "../types/portfolio";

export const skills = [
  {
    category: "Analysis & programming",
    skills: [
      {
        label: "Python",
        logoKey: "python",
        logoLabel: "Python",
      },
      {
        label: "SQL",
        logoKey: "postgresql",
        logoLabel: "SQL",
      },
      {
        label: "pandas",
        logoKey: "python",
        logoLabel: "pandas",
      },
      {
        label: "Microsoft Excel",
        logoKey: "excel",
        logoLabel: "Microsoft Excel",
      },
      {
        label: "MySQL · foundational",
        logoKey: "mysql",
        logoLabel: "MySQL · foundational",
      },
    ],
  },
  {
    category: "Visualization & communication",
    skills: [
      {
        label: "Tableau",
        logoKey: "tableau",
        logoLabel: "Tableau",
      },
      {
        label: "Matplotlib",
        logoKey: "python",
        logoLabel: "Matplotlib",
      },
      {
        label: "Google Colab",
        logoKey: "jupyter",
        logoLabel: "Google Colab",
      },
      {
        label: "Bilingual presentations",
        logoKey: "language",
        logoLabel: "Bilingual presentations",
      },
      {
        label: "Analytical reporting",
        logoKey: "report",
        logoLabel: "Analytical reporting",
      },
    ],
  },
  {
    category: "Methods I’m learning",
    skills: [
      {
        label: "Exploratory data analysis",
        logoKey: "analysis",
        logoLabel: "Exploratory data analysis",
      },
      {
        label: "Data cleaning",
        logoKey: "data",
        logoLabel: "Data cleaning",
      },
      {
        label: "Time-series forecasting",
        logoKey: "forecast",
        logoLabel: "Time-series forecasting",
      },
      {
        label: "Machine learning",
        logoKey: "scikitlearn",
        logoLabel: "Machine learning",
      },
      {
        label: "Model validation & interpretation",
        logoKey: "model",
        logoLabel: "Model validation & interpretation",
      },
    ],
  },
] satisfies SkillCategory[];
