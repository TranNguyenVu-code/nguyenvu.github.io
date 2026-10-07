# Code Generation Plan — Student Analytics Portfolio

## Unit context and readiness

- Unit: student-analytics-portfolio; one existing frontend package.
- Workspace: `/Users/nhamhhung/nguyenvu.github.io`.
- Application code: existing src/, public/, and index.html under the workspace root.
- Documentation: aidlc-docs only. This file is the single source of truth for Code Generation.
- Inputs: approved requirements, eight stories, three personas, execution plan, and NFR requirements/design artifacts.
- NFR Design approved in chat: "approve".
- Unit/Functional/Application/Infrastructure Design were explicitly skipped in the approved adaptive plan; existing component boundaries and approved stories provide the needed context.
- Dependencies: no other unit, backend, API, database, migration, or infrastructure resource.
- Interfaces: shared portfolio/section types, two-template registry, navigation/layout utilities, color preferences, and existing UI primitives.

## Planned resulting experience

Engineering remains the initial/default style with a distinctive analytics field-notebook redesign. Business remains selectable, with the same student facts and matching color family in its existing editorial layout. Retain light/dark mode, single-page/section layouts, responsive menus, and saved preferences.

Use nine sections: home, about, education, experience, projects, awards, skills, community, contact. Visible labels emphasize Analytics Experience, Selected Projects, Achievements, Skills & Learning, and Leadership & Community. Replace the old gallery boundary with a text/evidence-based community presentation. Remove journal/video/gallery content and old certificate previews. Use abstract inline/vector/typographic motifs rather than the previous owner's images.

## Part 1 progress

- [x] Load current requirements/story/NFR context and confirm readiness.
- [x] Inspect existing source structure, section/registry/routing contracts, and applicable tests.
- [x] Define exact edits, removals, sequential steps, story mappings, and verification.
- [x] Validate the plan content and update state/audit.
- [x] Receive explicit approval of this complete plan — user: "approve and continue".

## Part 2 — numbered execution steps

### Step 1 — Capture the implementation baseline

- [x] Recheck working-tree changes, preserve both supplied DOCX inputs, and inspect current source/test/build availability. Record a current build/bundle baseline when feasible; do not treat historic results as current verification.

Paths: package.json, package-lock.json, src/assets/Resume - Trần Nguyên Vũ.docx, src/assets/Internship_Report_Tran_Nguyen_Vu.docx, existing src/ and public/ inventory.
Stories: SA-US-08. Output: baseline notes in the code summary; no unrelated resets or commits.

### Step 2 — Replace shared content and update existing contracts

- [x] Update student identity, biography, academic/internship evidence, three analytics projects, scholarship, coursework, skills, language proficiency, and contact placeholders. Use the company-report internship dates. Adapt existing data types for absent images/logo/evidence files, supported project outcomes, and explicit placeholder status. Add community records using the existing ExperienceEntry shape. Keep both DOCX files intact.

Modify: src/types/portfolio.ts; src/data/profile.ts, about.ts, education.ts, experience.ts, projects.ts, awards.ts, skills.ts, certificates.ts, sectionContent.ts, navigation.ts, portfolio.ts.
Create: src/data/community.ts (existing resume-style record contract).
Remove obsolete content-model dependencies as their consumers are retired in Step 3/8. Course/certificate records use truthful descriptive cards with optional file metadata; no fabricated PDF exists.
Stories: SA-US-01, SA-US-02, SA-US-03, SA-US-07, SA-US-08.

### Step 3 — Coordinate section maps, routes, and navigation actions

- [x] Update the canonical sections and both registry maps. Remove journal-detail rendering from App/registry and make retired/unknown hashes recover to valid retained content. Connect hero/next-section actions to existing layout-aware navigation behavior. Preserve style/layout persistence, active navigation, mobile behavior, and back/forward where applicable. Honor reduced motion in scroll behavior.

Modify: src/App.tsx, src/templates/types.ts, src/templates/engineering/index.ts, src/templates/business/index.ts, src/hooks/usePortfolioLayout.ts, src/utils/scroll.ts, src/components/shared/SectionShell.tsx, src/templates/options.ts as needed for analytics-oriented descriptions.
Retain template IDs engineering/business, existing registry fallback, and src/data/template.ts Engineering default. Shared selection utilities remain unless a concrete integration fix is needed within this step.
Stories: SA-US-04, SA-US-05, SA-US-08.

### Step 4 — Redesign introduction and project evidence

- [x] Rework existing heroes into the analytics introduction with clear student identity, source-backed metrics, meaningful project/resume actions, and abstract inline/vector visuals. Redesign project cards to show question, approach, tools, and supported result. Remove old portrait/screenshots/author project links; do not show empty or fake project actions.

Modify: src/components/Hero.tsx, src/components/Projects.tsx, src/templates/business/BusinessHero.tsx, src/templates/business/BusinessProjects.tsx; src/components/shared/ExternalAction.tsx only if needed for the retained download/link contract.
Stories: SA-US-01, SA-US-02, SA-US-05, SA-US-06.

### Step 5 — Adapt the retained sections and community boundary

- [x] Update About, Education, Experience, Awards, and Skills in both styles for source-backed student content. Replace mandatory logo/photo rendering with honest text/abstract fallbacks. Replace the existing Gallery presentation boundary with Community resume-style cards using shared community data. Show learning descriptions without fake certificate preview controls; update all next-section references.

Modify: src/components/About.tsx, Education.tsx, Experience.tsx, Awards.tsx, Skills.tsx; src/templates/business/BusinessAbout.tsx, BusinessEducation.tsx, BusinessExperience.tsx, BusinessAwards.tsx, BusinessSkills.tsx, BusinessSectionHeading.tsx, BusinessDetailList.tsx as needed.
Adapt/rename: src/components/Gallery.tsx -> src/components/Community.tsx; src/templates/business/BusinessGallery.tsx -> src/templates/business/BusinessCommunity.tsx. These adapt existing section boundaries rather than introduce a separate service/component architecture.
Stories: SA-US-01, SA-US-02, SA-US-03, SA-US-04, SA-US-08.

### Step 6 — Make placeholder contact and student branding consistent

- [x] Update both contact sections and every shell/hero channel action to recognize placeholder status. Show example contact text with an explanation; keep placeholder destinations inactive and guard form submission. Real configured destinations can later enable their existing actions. Replace hardcoded former-owner initials/portrait/links. Wire the supplied resume with an accurate DOCX label, student filename, and accessible name. Update title/description/favicon.

Modify: src/components/Contact.tsx, Navbar.tsx; src/templates/business/BusinessContact.tsx, BusinessShell.tsx; src/templates/engineering/EngineeringShell.tsx if needed for landmarks/skip navigation; src/utils/contact.ts; index.html.
Create: public/monogram.svg (simple student/vector mark; validate XML before writing).
Stories: SA-US-01, SA-US-06, SA-US-07, SA-US-08.

### Step 7 — Apply the analytics design across both modes

- [x] Restyle page/surface/text/accent/action/focus tokens and existing section/component styling to the approved ivory/ink/teal/chartreuse design. Establish editorial typography, readable grids/evidence cards, restrained motifs, and consistent controls. Use light/dark semantic pairs, responsive text wrapping, visible keyboard focus, and reduced-motion rules. Remove stale blue/old-theme styling where it conflicts with the resulting experience.

Modify: src/index.css, src/App.css, src/templates/business/business.css; responsive inline styling in the components listed in Steps 4–6 as necessary for the same design.
No new raster-generation or charting dependency. Candidate palette may be refined for actual rendered contrast while retaining the approved roles. Decorative vector/CSS motifs are clearly conceptual.
Stories: SA-US-01, SA-US-03, SA-US-04, SA-US-05, SA-US-07.

### Step 8 — Remove obsolete source content and assets

- [x] Resolve remaining references, then delete old author-specific media/docs/project covers/logos, journal/video data, retired presentation components, and unused feature utilities. Preserve both supplied DOCX files and all retained shared capabilities. Keep append-only audit history intact. Do not change unrelated dependencies or deployment configuration.

Delete after reference checks: src/data/gallery.ts, blog.ts, videos.ts, journalPosts.ts; src/content/journal/first-local-journal.md; src/components/Journal.tsx, JournalPostPage.tsx; src/templates/business/BusinessJournal.tsx, BusinessJournalPostPage.tsx; src/utils/journal.ts, media.ts where no retained usage exists; old Gallery files after their adaptation/rename; public/vite.svg.
Remove obsolete journal-related types/registry properties and dead CSS selectors within already listed files. No obsolete content remains reachable through a direct legacy hash.
Asset deletion inventory (subject to reference validation):

- src/assets/certificates/aiximpact-certificate.pdf
- src/assets/certificates/aiximpact-final-presentation.pdf
- src/assets/certificates/aws-cloud-practitioner.pdf
- src/assets/certificates/certified-kubernetes-application-developer.pdf
- src/assets/certificates/coursera-mmpg2mrcsjrt.pdf
- src/assets/certificates/database-system-focus-area.pdf
- src/assets/certificates/nus-top-student-for-big-data-systems.pdf
- src/assets/certificates/university.pdf
- src/assets/documents/resume.pdf
- src/assets/nus.png
- src/assets/nus.svg
- src/assets/photo_1.jpg
- src/assets/photo_2.jpg
- src/assets/photo_3.jpg
- src/assets/photo_4.HEIC
- src/assets/photo_4.jpg
- src/assets/photo_5.jpg
- src/assets/photo_6.jpg
- src/assets/photo_7.jpg
- src/assets/photo_8.jpg
- src/assets/profile.jpeg
- src/assets/projects/coursework_and_certificates.png
- src/assets/projects/java_resume_application.png
- src/assets/projects/program_analyzer.png
- src/assets/react.svg
- src/assets/sa.png
- src/assets/ut.png
- src/assets/zhonghua.jpg

Stories: SA-US-04, SA-US-08.

### Step 9 — Update meaningful verification for the new behavior

- [x] Update existing tests for student facts, canonical sections, registry completeness, retired-route fallback, layout-aware actions, contact placeholders/submit guards, resume download, and theme contrast. Preserve useful style/layout/persistence coverage. Replace old-author and deleted-feature expectations rather than weakening assertions.

Modify: src/App.test.tsx; src/test/data/portfolio.test.ts, navigation.test.ts; src/templates/templateRegistry.test.ts, business/businessTemplate.test.tsx; src/hooks/usePortfolioLayout.test.ts; src/themeAccessibility.test.ts.
Retain src/utils/templateSelection.test.ts unless an integration change requires it. Delete src/templates/journalPostPages.test.tsx when the removed journal detail feature has been replaced with retired-route coverage in App tests.
A focused additional src/utils/contact.test.ts or scroll.test.ts may be created only when needed to verify real placeholder/navigation branches not meaningfully covered by existing tests.
Stories: SA-US-01 through SA-US-08. No snapshot mirroring or tests solely asserting the implementation's syntax.

### Step 10 — Verify and correct the integrated implementation

- [x] Run applicable tests, ESLint, and TypeScript/Vite production build. Check final token contrast pairs, root/project base-path assets, obsolete references, and actual bundle output. Use available browser tooling to review 320px/390px/768px/1440px, both styles/layouts/color modes, keyboard navigation, reduced motion, resume actions, and inactive contact. Fix failures within approved step scope; document tooling limits. Avoid broad/repeated reruns unless edits/failures justify them.

Commands: npm run test, npm run lint, npm run build; VITE_BASE_PATH project-style build/asset inspection as needed. Use temporary tooling artifacts outside application source or under the appropriate permitted temporary root.
Stories: SA-US-04, SA-US-05, SA-US-06, SA-US-07, SA-US-08.

### Step 11 — Document implementation and present the review gate

- [x] Create the Markdown code-generation-summary.md with final changes, removed/retained assets, evidence mapping, verification results, material limits, and bundle comparison where measured. Mark implemented unit stories and all completed plan steps immediately. Update state and append the audit. Present the standardized Request Changes / Continue to Next Stage review before Build and Test.

Create: aidlc-docs/construction/student-analytics-portfolio/code/code-generation-summary.md and its two-option review-questions.md. Build/test instruction files will be generated in the following mandatory Build and Test stage; no deployment is performed here.
Stories: SA-US-01 through SA-US-08.

## Unit story progress

- [x] SA-US-01 — student identity and academic direction.
- [x] SA-US-02 — internship/project evidence.
- [x] SA-US-03 — learning/community contribution.
- [x] SA-US-04 — relevant sections and navigation/layouts.
- [x] SA-US-05 — presentation/color preferences.
- [x] SA-US-06 — supplied resume access.
- [x] SA-US-07 — explicit inactive contact placeholders.
- [x] SA-US-08 — shared content, cleanup, and reliable maintenance.

## Out-of-scope generation layers

Backend business logic, API/repository layers, database migrations, new infrastructure/deployment artifacts, dependency upgrades, and unsolicited README redesign are N/A. Existing static deployment remains authoritative. Application edits stay in the workspace root; only Markdown workflow artifacts belong under aidlc-docs.

## Content and approval controls

Validate syntax before creating new files: TypeScript/JSX structures, SVG XML, CSS blocks, and Markdown content. Validate generated diagrams if used and provide text alternatives. Keep stable data-testid names for retained controls; rename them only when their purpose changes, such as gallery to community. No application code/assets change until the complete numbered plan is approved.

## Extension compliance

Security Baseline N/A (disabled B); Property-Based Testing N/A (disabled C). Full rules not loaded; enforcement skipped. Approved accessibility/correctness/build checks remain required.
