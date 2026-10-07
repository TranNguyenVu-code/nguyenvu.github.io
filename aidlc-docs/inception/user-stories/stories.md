# Student Analytics Portfolio — User Stories

## Approved approach

Eight concise stories follow the visitor journey and shared maintenance needs. The approved plan allowed splitting topics to improve independence: resume access and placeholder contact are separate stories. Personas are defined in personas.md. These stories describe observable outcomes, not an implementation schedule.

## Story summary

| ID | Outcome | Personas |
| --- | --- | --- |
| SA-US-01 | Recognize the student and analytical interests | P-01, P-02, P-03 |
| SA-US-02 | Evaluate internship and project evidence | P-01, P-02 |
| SA-US-03 | Understand learning and community contribution | P-01, P-02 |
| SA-US-04 | Navigate relevant sections on any supported layout | P-01, P-02 |
| SA-US-05 | Choose comfortable presentation and color mode | P-01, P-02, P-03 |
| SA-US-06 | Download the student’s resume | P-01, P-03 |
| SA-US-07 | Recognize placeholder contact information | P-01, P-02, P-03 |
| SA-US-08 | Maintain one coherent student portfolio | P-03 |

## SA-US-01 — Recognize the student and analytical interests

As an admissions or internship reviewer, I want to recognize the student and academic direction immediately, so that I can assess the profile at the appropriate student level.

Personas: P-01, P-02, P-03. Requirements: FR-01, FR-02, FR-05, FR-11; NFR-01, NFR-02.

Acceptance criteria:

- The introduction identifies Trần Nguyên Vũ / Tran Nguyen Vu, Hanoi, high-school status, and interests in analytics/data science, applied mathematics, and sustainability.
- Education states biology-specialized study at HUS High School for Gifted Students, Vietnam National University, September 2024–May 2027; SAT 1410 and IELTS 7.0 are accurate where shown; blank GPA is absent.
- Page title, description, brand mark, and accessible identity labels identify the student; no previous-owner portrait or professional identity appears.
- The analytics field-notebook presentation uses cohesive ivory/ink surfaces and teal/chartreuse accents; abstract visuals do not imply actual project measurements.

## SA-US-02 — Evaluate internship and project evidence

As a reviewer, I want to understand the question, methods, tools, and supported outcome of the analytics work, so that I can judge practical experience without relying on unsupported claims.

Personas: P-01, P-02. Requirements: FR-06, FR-07; NFR-01, NFR-04.

Acceptance criteria:

- Eastern Sun Vietnam is presented as a supervised Data Analytics Internship, 1 June–31 August 2026; production data preparation, quality issues, analysis, dashboards, and stakeholder reporting are described at the source-supported level.
- Energy Demand Forecasting describes time-series exploration, Streamlit, and energy-planning motivation without an invented accuracy figure.
- Disaster Tweet Classification describes the model progression and resume-reported F1 0.84339 and rank 37 of 435 submissions.
- SIM-LSE describes Tableau analysis, the discount-above-20% finding, a 12-slide deck, and five recommendations without inventing financial impact.
- No project card implies an unavailable repository, live demo, notebook, dashboard, or screenshot; any sample data graphic is clearly illustrative.

## SA-US-03 — Understand learning and community contribution

As a mentor or reviewer, I want to see coursework, skills, achievements, and community involvement, so that I can understand the breadth of the student’s development.

Personas: P-01, P-02. Requirements: FR-04, FR-08, FR-09; NFR-01, NFR-04.

Acceptance criteria:

- Skills and learning reflect Python, SQL, pandas, Excel, Tableau, Matplotlib, foundational scikit-learn/MySQL, and the source-supported analytics methods.
- Google Data Analytics and Kaggle Learn coursework uses the resume descriptions and June–October 2026 periods; no nonexistent certificate scan or credential ID appears.
- The VinUniversity scholarship is accurately described as 50%, valued at VND 25 million.
- Leadership/community includes basketball Top 4 of 16, Singapore well-being event assistance with 150+ students and support for 20 Vietnamese participants, and student mentoring; film work may be concise supporting context.
- Vietnamese native and English fluent appear where relevant; achievements are not duplicated so heavily that they obscure the main story.

## SA-US-04 — Navigate relevant sections on any supported layout

As a portfolio visitor, I want to move to the section I need on desktop or mobile, so that I can review the student’s work efficiently.

Personas: P-01, P-02. Requirements: FR-03, FR-04, FR-12; NFR-01, NFR-02, NFR-06.

Acceptance criteria:

- Navigation exposes the retained introduction, education, analytics experience, projects, achievements, learning, leadership/community, and contact content with readable labels.
- Given single-page mode, when I select a retained section, then the matching section becomes reachable and its hash identifies it.
- Given section-view mode, when I use navigation or a hero section action, then the intended section renders rather than relying on scrolling to an absent element.
- Given a mobile menu, when I choose a section, then the menu closes and navigation completes; keyboard controls have useful labels and visible focus.
- Legacy gallery/journal/video evidence is unavailable through retained navigation and stale routes; unknown or retired section hashes recover to a valid view.
- At widths from 320px through desktop, the navigation and content remain usable without horizontal overflow.

## SA-US-05 — Choose comfortable presentation and color mode

As a portfolio visitor, I want to choose a style, color mode, and layout with coherent behavior, so that I can review the same student evidence comfortably.

Personas: P-01, P-02, P-03. Requirements: FR-02, FR-03; NFR-01, NFR-02, NFR-03, NFR-06.

Acceptance criteria:

- Engineering and Business remain selectable and present the same student data; the default experience consistently uses the new analytics design.
- Given a retained section is active, when I switch styles, then the selected presentation preserves relevant section/layout context.
- Given display preferences are saved, when I revisit, then valid saved preferences are restored; invalid or unavailable storage does not prevent rendering.
- Light/dark mode text and controls remain readable; keyboard focus is visible and meaningful.
- Reduced-motion preference suppresses unnecessary decorative movement; lightweight visual motifs do not require a live data service.

## SA-US-06 — Download the student’s resume

As a reviewer, I want to download the supplied student resume, so that I can retain the source document for further review.

Personas: P-01, P-03. Requirements: FR-11; NFR-05, NFR-06.

Acceptance criteria:

- The resume action resolves to Resume - Trần Nguyên Vũ.docx, with an accurate DOCX label and student filename.
- The downloaded file is the student’s document rather than the previous owner’s resume.
- Resume access works across both presentations and retained layouts, including built output with the configured GitHub Pages base path.

## SA-US-07 — Recognize placeholder contact information

As a portfolio visitor, I want to recognize that contact values are placeholders, so that I do not mistake an example address or profile for a verified student channel.

Personas: P-01, P-02, P-03. Requirements: FR-10; NFR-01, NFR-02, NFR-05.

Acceptance criteria:

- The contact area visibly marks values such as student.email@example.com as placeholders and explains that real details are coming soon.
- Given email/profile values are placeholders, when I inspect their controls, then no active action sends mail or navigates to a guessed personal profile.
- No form submits to a placeholder recipient or shows a false success state; inactive controls communicate their state accessibly.
- Long placeholder values wrap within mobile contact surfaces; the previous owner’s contact data is absent.

## SA-US-08 — Maintain one coherent student portfolio

As the student portfolio owner, I want to update shared content and replace placeholders without retaining obsolete evidence, so that both presentations remain consistent and reliable.

Personas: P-03. Requirements: FR-01, FR-10, FR-12; NFR-03, NFR-04, NFR-05, NFR-06.

Acceptance criteria:

- Student identity, dates, project outcomes, and placeholder status have a shared authoritative configuration consumed by both presentations.
- Placeholder channels can be replaced with verified details in that configuration; their interaction state follows whether a real usable destination is configured.
- Old owner-specific media, certificate PDFs, project covers, writing, personal logos, and resume assets are removed after references are resolved; both supplied DOCX files remain.
- Relevant shared controls continue to work, with no deleted-asset import or unavailable evidence preview.
- Applicable existing tests, lint, and TypeScript/Vite production build pass after changes; construction documentation records visual/interaction verification and tooling limits.
- The resulting site retains static hosting and root/project GitHub Pages path compatibility without requiring a new backend.

## Coverage verification

| Requirements | Stories |
| --- | --- |
| FR-01 | SA-US-01, SA-US-08 |
| FR-02 | SA-US-01, SA-US-05 |
| FR-03 | SA-US-04, SA-US-05 |
| FR-04 | SA-US-03, SA-US-04 |
| FR-05 | SA-US-01 |
| FR-06, FR-07 | SA-US-02 |
| FR-08, FR-09 | SA-US-03 |
| FR-10 | SA-US-07, SA-US-08 |
| FR-11 | SA-US-01, SA-US-06 |
| FR-12 | SA-US-04, SA-US-08 |
| NFR-01 | SA-US-01 through SA-US-05, SA-US-07 |
| NFR-02 | SA-US-01, SA-US-04, SA-US-05, SA-US-07 |
| NFR-03 | SA-US-05, SA-US-08 |
| NFR-04 | SA-US-02, SA-US-03, SA-US-08 |
| NFR-05 | SA-US-06, SA-US-07, SA-US-08 |
| NFR-06 | SA-US-04, SA-US-05, SA-US-06, SA-US-08 |

## INVEST verification

- Independent: each story has its own observable outcome; common content/theme foundations are shared rather than cyclic story dependencies. Resume and contact were split to keep their outcomes independent.
- Negotiable: stories define user outcomes and evidence boundaries without prescribing component layouts or exact implementation steps.
- Valuable: each supports reviewer understanding, comfortable navigation, honest evidence, or owner maintenance.
- Estimable: scope is bounded to approved requirements within one existing frontend; unsupported integrations and artifacts are excluded.
- Small: each story addresses one coherent goal, with source-backed content checks kept in the relevant reading task.
- Testable: criteria specify visible text/data, route/control behavior, download targets, disabled actions, responsive checks, or existing verification commands.

All eight stories are implemented. Implementation and validation evidence is recorded in aidlc-docs/construction/student-analytics-portfolio/code/code-generation-summary.md. Code Generation review remains pending.

## Extension compliance

Security Baseline: N/A, user opted out (B). Property-Based Testing: N/A, user opted out (C). Full extension rules remain unloaded and enforcement is skipped.
