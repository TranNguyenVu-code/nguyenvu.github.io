import type { SectionContent } from "../types/portfolio";

export const sectionContent = {
  about: {
    eyebrow: "THE PERSON BEHIND THE ANALYSIS",
    title: "Science is my starting point.",
    description:
      "Biology taught me to ask questions. Mathematics and data are helping me find new ways to answer them.",
  },
  education: {
    eyebrow: "ACADEMIC FOUNDATIONS",
    title: "Learning to think deeply.",
    description:
      "A biology-specialized education, with a growing interest in the mathematical foundations of data science.",
  },
  experience: {
    eyebrow: "FROM CLASSROOM TO FACTORY DATA",
    title: "Real data. Real questions.",
    description:
      "A summer with a manufacturing BI team taught me what useful analysis looks like beyond the classroom.",
  },
  projects: {
    eyebrow: "SELECTED EXPLORATIONS",
    title: "Three questions. Many possibilities.",
    description:
      "Forecasting energy needs, finding signal in language, and understanding the economics of a discount.",
  },
  awards: {
    eyebrow: "A MOMENT OF RECOGNITION",
    title: "Ideas worth pursuing.",
    description:
      "An opportunity to connect analytical curiosity with entrepreneurship and broader access to education.",
  },
  skills: {
    eyebrow: "THE LEARNING TOOLKIT",
    title: "Tools, methods, and momentum.",
    description:
      "Practical analytics tools and the coursework behind my growing technical foundation.",
  },
  community: {
    eyebrow: "BEYOND THE NOTEBOOK",
    title: "Data is only part of the story.",
    description:
      "Leading a team, helping others learn, and creating together have shaped how I communicate and collaborate.",
  },
  contact: {
    eyebrow: "LET’S KEEP IN TOUCH",
    title: "The next conversation.",
    description:
      "I’m interested in learning opportunities at the intersection of mathematics, data, and real-world impact.",
  },
} satisfies SectionContent;

export const subsectionContent = {
  skills: {
    certificatesEyebrow: "CONTINUOUS LEARNING",
    certificatesTitle: "Coursework & Certifications",
    certificatesDescription:
      "Learning described in my resume; credential documents are not yet available.",
  },
  contact: { channelsTitle: "CONTACT DETAILS" },
} as const;
