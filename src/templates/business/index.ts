import "./business.css";
import BusinessHero from "../../templates/business/BusinessHero";
import BusinessAbout from "../../templates/business/BusinessAbout";
import BusinessEducation from "../../templates/business/BusinessEducation";
import BusinessExperience from "../../templates/business/BusinessExperience";
import BusinessProjects from "../../templates/business/BusinessProjects";
import BusinessAwards from "../../templates/business/BusinessAwards";
import BusinessSkills from "../../templates/business/BusinessSkills";
import BusinessCommunity from "../../templates/business/BusinessCommunity";
import BusinessContact from "../../templates/business/BusinessContact";
import BusinessShell from "./BusinessShell";
import { portfolioTemplateOptions } from "../options";
import type { PortfolioTemplate } from "../types";

export const businessChapterLabels = {
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
export const businessTemplate = {
  ...portfolioTemplateOptions.business,
  ShellComponent: BusinessShell,
  chapterLabels: businessChapterLabels,
  sectionComponents: {
    home: BusinessHero,
    about: BusinessAbout,
    education: BusinessEducation,
    experience: BusinessExperience,
    projects: BusinessProjects,
    awards: BusinessAwards,
    skills: BusinessSkills,
    community: BusinessCommunity,
    contact: BusinessContact,
  },
} satisfies PortfolioTemplate;
