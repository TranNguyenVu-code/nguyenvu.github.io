import type { ProjectEntry } from "../types/portfolio";

export const projects = [
  {
    id: "energy-forecasting",
    title: "Energy Demand Forecasting",
    description:
      "Exploring how historical energy consumption can support planning for periods of supply stress.",
    question:
      "How can past consumption patterns help us prepare for future energy demand?",
    approach:
      "Time-series analysis, model development, and an interactive Streamlit application, accompanied by a methodology write-up.",
    outcome:
      "A forecasting exploration and interactive application connecting analytical methods to energy planning, extreme weather, and the risks of shortages.",
    period: "Jun – Sep 2026",
    category: "TIME SERIES · SUSTAINABILITY",
    logoKey: "python",
    logoLabel: "Python",
    technologies: ["Python", "Time-series analysis", "Streamlit"],
    actions: [],
  },
  {
    id: "disaster-tweets",
    title: "Finding Signal in Disaster Tweets",
    description:
      "Classifying genuine disaster-related tweets in Kaggle’s NLP with Disaster Tweets competition.",
    question:
      "Can a model distinguish a real disaster report from everyday language?",
    approach:
      "Iterated from LightGBM with RandomOverSampler and sentence embeddings to fine-tuned DistilBERT and Twitter-RoBERTa.",
    outcome:
      "F1 score of 0.84339; ranked 37th out of 435 submissions, as reported in my resume.",
    period: "Jul – Sep 2026",
    category: "NATURAL LANGUAGE PROCESSING",
    logoKey: "scikitlearn",
    logoLabel: "Machine learning",
    technologies: [
      "LightGBM",
      "Sentence embeddings",
      "DistilBERT",
      "Twitter-RoBERTa",
    ],
    actions: [],
  },
  {
    id: "commerce-analytics",
    title: "The Cost of a Discount",
    description:
      "A Tableau-led investigation of e-commerce profitability for the SIM-LSE Data Analytics Challenge.",
    question: "When does a sales discount stop being good business?",
    approach:
      "Analyzed profit margins across time, geography, customer segments, discounts, and product categories.",
    outcome:
      "Identified discounts above 20% as a major contributor to weak profitability. Co-developed a 12-slide executive pitch with five pricing and segmentation recommendations.",
    period: "Jun – Jul 2026",
    category: "BUSINESS INTELLIGENCE",
    logoKey: "tableau",
    logoLabel: "Tableau",
    technologies: ["Tableau", "Profitability analysis", "Data storytelling"],
    actions: [],
  },
] satisfies ProjectEntry[];
