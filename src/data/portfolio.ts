import type { Portfolio } from "../types/portfolio";
import { about } from "./about";
import { awards } from "./awards";
import { certificates } from "./certificates";
import { community } from "./community";
import { education } from "./education";
import { experience } from "./experience";
import { navigation, sectionIds } from "./navigation";
import { profile, hero } from "./profile";
import { projects } from "./projects";
import { sectionContent, subsectionContent } from "./sectionContent";
import { skills } from "./skills";

export const portfolio = {
  profile,
  hero,
  navigation,
  sectionContent,
  about,
  education,
  experience,
  projects,
  awards,
  skills,
  certificates,
  community,
} satisfies Portfolio;
export {
  profile,
  hero,
  navigation,
  sectionIds,
  sectionContent,
  subsectionContent,
  about,
  education,
  experience,
  projects,
  awards,
  skills,
  certificates,
  community,
};
