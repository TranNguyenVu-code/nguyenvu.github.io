import Hero from "../../components/Hero";
import About from "../../components/About";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Awards from "../../components/Awards";
import Skills from "../../components/Skills";
import Community from "../../components/Community";
import Contact from "../../components/Contact";
import EngineeringShell from "./EngineeringShell";
import { portfolioTemplateOptions } from "../options";
import type { PortfolioTemplate } from "../types";

export const engineeringChapterLabels = {
  home: "Home",
  about: "About",
  education: "Education",
  experience: "Analytics Experience",
  projects: "Selected Projects",
  awards: "Achievements",
  skills: "Skills & Learning",
  community: "Leadership & Community",
  contact: "Contact",
} satisfies PortfolioTemplate["chapterLabels"];
export const engineeringTemplate = {
  ...portfolioTemplateOptions.engineering,
  ShellComponent: EngineeringShell,
  chapterLabels: engineeringChapterLabels,
  sectionComponents: {
    home: Hero,
    about: About,
    education: Education,
    experience: Experience,
    projects: Projects,
    awards: Awards,
    skills: Skills,
    community: Community,
    contact: Contact,
  },
} satisfies PortfolioTemplate;
