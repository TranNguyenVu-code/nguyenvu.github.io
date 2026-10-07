# Code Structure

## Build system

npm scripts: `dev` (Vite), `test` (Vitest), `lint` (ESLint), `build` (TypeScript project build and Vite), and `preview` (built site). Strict TypeScript uses app/node project configurations. Vite configures React SWC, Tailwind, aliases, jsdom, and `VITE_BASE_PATH`.

## Module hierarchy

`main.tsx` -> UI provider -> App -> template registry and layout hook -> shells/sections -> typed data -> Markdown/assets.
Text hierarchy is used as a parsing-safe diagram alternative.

## Patterns

- Registry/strategy: two presentation choices share one portfolio model.
- Typed content: `satisfies` checks content against `src/types/portfolio.ts`.
- Hash navigation: static-host-compatible continuous or section layouts.
- Shared actions/UI: resume, external links, color mode, and selection primitives.
- Browser persistence: guarded reads/writes retain preferences when storage works and fall back safely when unavailable.

## Existing files inventory

- `src/App.css` — content, types, entrypoint, or styling
- `src/App.test.tsx` — automated verification
- `src/App.tsx` — content, types, entrypoint, or styling
- `src/assets/Internship_Report_Tran_Nguyen_Vu.docx` — bundled source document
- `src/assets/Resume - Trần Nguyên Vũ.docx` — bundled source document
- `src/assets/certificates/aiximpact-certificate.pdf` — bundled media/document
- `src/assets/certificates/aiximpact-final-presentation.pdf` — bundled media/document
- `src/assets/certificates/aws-cloud-practitioner.pdf` — bundled media/document
- `src/assets/certificates/certified-kubernetes-application-developer.pdf` — bundled media/document
- `src/assets/certificates/coursera-mmpg2mrcsjrt.pdf` — bundled media/document
- `src/assets/certificates/database-system-focus-area.pdf` — bundled media/document
- `src/assets/certificates/nus-top-student-for-big-data-systems.pdf` — bundled media/document
- `src/assets/certificates/university.pdf` — bundled media/document
- `src/assets/documents/resume.pdf` — bundled media/document
- `src/assets/nus.png` — bundled media/document
- `src/assets/nus.svg` — bundled media/document
- `src/assets/photo_1.jpg` — bundled media/document
- `src/assets/photo_2.jpg` — bundled media/document
- `src/assets/photo_3.jpg` — bundled media/document
- `src/assets/photo_4.HEIC` — bundled media/document
- `src/assets/photo_4.jpg` — bundled media/document
- `src/assets/photo_5.jpg` — bundled media/document
- `src/assets/photo_6.jpg` — bundled media/document
- `src/assets/photo_7.jpg` — bundled media/document
- `src/assets/photo_8.jpg` — bundled media/document
- `src/assets/profile.jpeg` — bundled media/document
- `src/assets/projects/coursework_and_certificates.png` — bundled media/document
- `src/assets/projects/java_resume_application.png` — bundled media/document
- `src/assets/projects/program_analyzer.png` — bundled media/document
- `src/assets/react.svg` — bundled media/document
- `src/assets/sa.png` — bundled media/document
- `src/assets/ut.png` — bundled media/document
- `src/assets/zhonghua.jpg` — bundled media/document
- `src/components/About.tsx` — shared UI or section presentation
- `src/components/Awards.tsx` — shared UI or section presentation
- `src/components/Contact.tsx` — shared UI or section presentation
- `src/components/Education.tsx` — shared UI or section presentation
- `src/components/Experience.tsx` — shared UI or section presentation
- `src/components/Gallery.tsx` — shared UI or section presentation
- `src/components/Hero.tsx` — shared UI or section presentation
- `src/components/Journal.tsx` — shared UI or section presentation
- `src/components/JournalPostPage.tsx` — shared UI or section presentation
- `src/components/Navbar.tsx` — shared UI or section presentation
- `src/components/Projects.tsx` — shared UI or section presentation
- `src/components/Skills.tsx` — shared UI or section presentation
- `src/components/shared/ContentCard.tsx` — shared UI or section presentation
- `src/components/shared/ExternalAction.tsx` — shared UI or section presentation
- `src/components/shared/LogoMark.tsx` — shared UI or section presentation
- `src/components/shared/PortfolioStyleSelector.tsx` — shared UI or section presentation
- `src/components/shared/SectionShell.tsx` — shared UI or section presentation
- `src/components/ui/color-mode-utils.ts` — shared UI or section presentation
- `src/components/ui/color-mode.tsx` — shared UI or section presentation
- `src/components/ui/provider.tsx` — shared UI or section presentation
- `src/components/ui/toaster-instance.ts` — shared UI or section presentation
- `src/components/ui/toaster.tsx` — shared UI or section presentation
- `src/components/ui/tooltip.tsx` — shared UI or section presentation
- `src/content/journal/first-local-journal.md` — content, types, entrypoint, or styling
- `src/data/about.ts` — portfolio content/configuration
- `src/data/awards.ts` — portfolio content/configuration
- `src/data/blog.ts` — portfolio content/configuration
- `src/data/certificates.ts` — portfolio content/configuration
- `src/data/education.ts` — portfolio content/configuration
- `src/data/experience.ts` — portfolio content/configuration
- `src/data/gallery.ts` — portfolio content/configuration
- `src/data/journalPosts.ts` — portfolio content/configuration
- `src/data/navigation.ts` — portfolio content/configuration
- `src/data/portfolio.ts` — portfolio content/configuration
- `src/data/profile.ts` — portfolio content/configuration
- `src/data/projects.ts` — portfolio content/configuration
- `src/data/sectionContent.ts` — portfolio content/configuration
- `src/data/skills.ts` — portfolio content/configuration
- `src/data/template.ts` — portfolio content/configuration
- `src/data/videos.ts` — portfolio content/configuration
- `src/hooks/usePortfolioLayout.test.ts` — automated verification
- `src/hooks/usePortfolioLayout.ts` — navigation/state behavior
- `src/index.css` — content, types, entrypoint, or styling
- `src/main.tsx` — content, types, entrypoint, or styling
- `src/templates/business/BusinessAbout.tsx` — template presentation/registry
- `src/templates/business/BusinessAwards.tsx` — template presentation/registry
- `src/templates/business/BusinessContact.tsx` — template presentation/registry
- `src/templates/business/BusinessDetailList.tsx` — template presentation/registry
- `src/templates/business/BusinessEducation.tsx` — template presentation/registry
- `src/templates/business/BusinessExperience.tsx` — template presentation/registry
- `src/templates/business/BusinessGallery.tsx` — template presentation/registry
- `src/templates/business/BusinessHero.tsx` — template presentation/registry
- `src/templates/business/BusinessJournal.tsx` — template presentation/registry
- `src/templates/business/BusinessJournalPostPage.tsx` — template presentation/registry
- `src/templates/business/BusinessProjects.tsx` — template presentation/registry
- `src/templates/business/BusinessSectionHeading.tsx` — template presentation/registry
- `src/templates/business/BusinessShell.tsx` — template presentation/registry
- `src/templates/business/BusinessSkills.tsx` — template presentation/registry
- `src/templates/business/business.css` — template presentation/registry
- `src/templates/business/businessTemplate.test.tsx` — automated verification
- `src/templates/business/index.ts` — template presentation/registry
- `src/templates/engineering/EngineeringShell.tsx` — template presentation/registry
- `src/templates/engineering/index.ts` — template presentation/registry
- `src/templates/index.ts` — template presentation/registry
- `src/templates/journalPostPages.test.tsx` — automated verification
- `src/templates/options.ts` — template presentation/registry
- `src/templates/templateRegistry.test.ts` — automated verification
- `src/templates/types.ts` — template presentation/registry
- `src/test/data/navigation.test.ts` — automated verification
- `src/test/data/portfolio.test.ts` — automated verification
- `src/test/setup.ts` — automated verification
- `src/themeAccessibility.test.ts` — automated verification
- `src/types/portfolio.ts` — content, types, entrypoint, or styling
- `src/utils/animation.ts` — utility behavior
- `src/utils/contact.ts` — utility behavior
- `src/utils/journal.ts` — utility behavior
- `src/utils/media.ts` — utility behavior
- `src/utils/scroll.ts` — utility behavior
- `src/utils/templateSelection.test.ts` — automated verification
- `src/utils/templateSelection.ts` — utility behavior

## Critical dependencies

React 19 renders stateful components; Chakra 3 supplies UI primitives and dialogs; next-themes supplies color mode; React Markdown renders local writing; Vite 7 builds the static artifact. Exact declared ranges are recorded in technology-stack.md.
