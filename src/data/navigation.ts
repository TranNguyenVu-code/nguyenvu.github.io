import type { NavigationItem, SectionId } from "../types/portfolio";
export const sectionIds = [
  "home",
  "about",
  "education",
  "experience",
  "projects",
  "awards",
  "skills",
  "community",
  "contact",
] as const satisfies readonly SectionId[];
export const navigation = [
  {
    id: "home",
    label: "Home",
    enabled: true,
  },
  {
    id: "about",
    label: "About",
    enabled: true,
  },
  {
    id: "education",
    label: "Education",
    enabled: true,
  },
  {
    id: "experience",
    label: "Analytics Experience",
    enabled: true,
  },
  {
    id: "projects",
    label: "Selected Projects",
    enabled: true,
  },
  {
    id: "awards",
    label: "Achievements",
    enabled: true,
  },
  {
    id: "skills",
    label: "Skills & Learning",
    enabled: true,
  },
  {
    id: "community",
    label: "Leadership & Community",
    enabled: true,
  },
  {
    id: "contact",
    label: "Contact",
    enabled: true,
  },
] satisfies NavigationItem[];
