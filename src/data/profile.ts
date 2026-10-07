import resumeDocument from "../assets/Resume - Trần Nguyên Vũ.docx?url";
import type { HeroSection, Profile } from "../types/portfolio";

export const profile: Profile = {
  name: "Trần Nguyên Vũ",
  slug: "tran-nguyen-vu",
  role: "Student · Data Analytics & Data Science",
  location: "Hanoi, Vietnam",
  email: "trannguyenvu0102@gmail.com",
  contactPlaceholder: false,
  resume: {
    label: "Resume · DOCX",
    href: resumeDocument,
    fileName: "Tran-Nguyen-Vu-Resume.docx",
    ariaLabel: "Download Trần Nguyên Vũ resume (DOCX)",
  },
  summary:
    "I’m a biology-specialized high-school student exploring how mathematics and data can help us understand the world — and make it better.",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/TranNguyenVu-code",
      ariaLabel: "Visit Trần Nguyên Vũ’s GitHub profile",
    },
  ],
} satisfies Profile;

export const hero = {
  eyebrow: "A STUDENT’S ANALYTICAL NOTEBOOK",
  statusBadges: ["HUS · CLASS OF 2027", "HANOI, VIETNAM"],
  headline: "Curiosity,\nmeet data.",
  highlightedPhrase: "data",
  intro:
    "From factory production records to disaster tweets and energy demand, I’m learning to turn complex questions into useful insights.",
  stats: [
    { value: "0.84339", label: "Disaster tweets · F1" },
    { value: "37 / 435", label: "Kaggle · submission rank" },
    { value: "2027", label: "Expected graduation" },
  ],
  primaryAction: {
    label: "Explore my work",
    sectionId: "projects",
    ariaLabel: "Explore selected analytics projects",
  },
  secondaryAction: {
    label: "My story",
    sectionId: "about",
    ariaLabel: "Read about Trần Nguyên Vũ",
  },
  stackHighlights: ["Python", "SQL", "Tableau", "Applied Mathematics"],
} satisfies HeroSection;
