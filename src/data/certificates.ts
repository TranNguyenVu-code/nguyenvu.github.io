import type { CertificateEntry } from "../types/portfolio";

export const certificates: CertificateEntry[] = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    kind: "Nine-course professional certificate",
    period: "Jun – Oct 2026",
    description:
      "Completed coursework covering data preparation, cleaning, analysis, visualization, and communication. Practiced spreadsheets, SQL, Tableau, R, and the end-to-end analytics workflow.",
    logoKey: "google",
    logoLabel: "Google coursework",
    ariaLabel: "Google Data Analytics coursework",
  },
  {
    title: "Kaggle Learn",
    issuer: "Kaggle",
    kind: "Hands-on technical coursework",
    period: "Jun – Oct 2026",
    description:
      "Data Cleaning, Data Visualization, Machine Learning, Feature Engineering, Ensemble Methods, and Model Explainability. Practiced preprocessing, validation, and interpretation.",
    logoKey: "kaggle",
    logoLabel: "Kaggle coursework",
    ariaLabel: "Kaggle Learn coursework",
  },
] satisfies CertificateEntry[];
