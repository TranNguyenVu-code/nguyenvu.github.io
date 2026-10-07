# Student Analytics Portfolio — Requirements

## Intent analysis

- User request: revamp the existing website using the Resume and Internship_Report documents in src/assets to represent a data analytics/data science student; create a distinctive theme while preserving core user experience; remove irrelevant old sections and their assets.
- Request type: enhancement and owner/content replacement.
- Scope: shared typed content, both presentation templates, navigation, styling, metadata, and asset cleanup.
- Complexity/depth: moderate; standard requirements analysis.
- Audience: university/admissions reviewers, internship recruiters, mentors, and peers.
- Sources: `src/assets/Resume - Trần Nguyên Vũ.docx` and `src/assets/Internship_Report_Tran_Nguyen_Vu.docx`. Source details are documented in ../reverse-engineering/student-source-review.md.

## Resolved user decisions

| Topic | Answer | Requirement |
| --- | --- | --- |
| Internship dates | A | Use 1 June–31 August 2026 from the company report. |
| Contact | X - put placeholder values first | Keep contact with visibly identifiable placeholder values; do not reuse the previous owner's channels. |
| Security Baseline | B | Disabled; full extension rules are not loaded. |
| Property-Based Testing | C | Disabled; full extension rules are not loaded. |

All answers are complete and consistent. The user's "approve and continue" authorizes generating this document from the completed answers; the document was subsequently approved in chat with "approve and continue".

## Functional requirements

### FR-01 — Student identity and positioning

Represent Trần Nguyên Vũ / Tran Nguyen Vu as a biology-specialized high-school student in Hanoi with interests in data science, applied mathematics, and sustainable development. Use English prose consistent with the sources. Describe internship and student accomplishments at their supported level; remove the former owner's identity, seniority, employers, qualifications, initials, external profiles, and personal story from visible content and metadata.

### FR-02 — Distinctive analytics design

Create an analytics field-notebook theme with warm ivory light surfaces, deep ink dark surfaces, teal accents, restrained chartreuse highlights, editorial headings, structured evidence cards, and subtle grid/data motifs. Give the default experience a cohesive redesign across sections, headers, controls, and project presentation. Use abstract or code-native graphics rather than the former owner's portrait or fabricated project screenshots. Label any explanatory sample chart as illustrative and avoid implying it contains real project results.

### FR-03 — Core experience

Preserve responsive desktop/mobile navigation, style selection between the existing two presentations, light/dark mode, single-page and section-view layouts, valid hash navigation, and saved display preferences. Both presentations must show the same student evidence. Keep the existing static React/Vite architecture and GitHub Pages compatibility.

### FR-04 — Relevant content structure

Provide Home, About, Education, Analytics Experience, Selected Projects, Achievements, Skills & Learning, Leadership & Community, and Contact. Choose readable section labels and remove stale navigation entries. Leadership/community must have a clear presentation rather than being lost during removal of old sections. The exact component boundaries and section implementation will be defined in the later plan.

### FR-05 — Education

Show HUS High School for Gifted Students, Vietnam National University; biology-specialized study, September 2024–May 2027. Show SAT 1410 and IELTS 7.0 where useful. Omit blank GPA fields and unsupported university degrees. Do not imply graduation before May 2027.

### FR-06 — Analytics internship

Show Eastern Sun Vietnam, Data Analytics Intern, 1 June–31 August 2026. Summarize supervised factory production data preparation, schema consistency and corrupted-record checks, EDA, Python/Excel analysis, Tableau dashboards, bilingual slides, and stakeholder reporting. The resume's two identified data quality issues may be cited; do not invent efficiency, revenue, or production impact figures.

### FR-07 — Selected project evidence

- Energy Demand Forecasting: time-series exploration of consumption patterns, a Streamlit application, methodology write-up, and relevance to energy planning and supply stress. No unsupported forecast accuracy or fake demo link.
- Disaster Tweet Classification: LightGBM with oversampling/embeddings, fine-tuned DistilBERT and Twitter-RoBERTa, resume-reported F1 0.84339 and rank 37 of 435 submissions. Identify it as competition evidence rather than production deployment.
- SIM-LSE Data Analytics Challenge: Tableau sales/profitability analysis, discounts above 20% contributing to weak profitability, a 12-slide executive deck, and five recommendations.

Present each project with its question, approach, tools, and supported outcome. Actual repositories, dashboards, notebooks, demos, or project screenshots are not supplied; do not create links purporting to be those artifacts.

### FR-08 — Achievements and skills/coursework

Show the VinUniversity 50% Talent Scholarship for Future Founders Bootcamp, valued at VND 25 million, and supported competition/leadership distinctions without duplication that overwhelms the page. Skills include Python, SQL, pandas, Excel, Tableau, Matplotlib, foundational scikit-learn, and relevant methods. Basic MySQL familiarity may be described as foundational. Present Google Data Analytics nine-course certificate and Kaggle Learn coursework using resume descriptions, with June–October 2026 periods. Do not show invented certificate scans or credential IDs. Include Vietnamese (native) and English (fluent).

### FR-09 — Leadership and community

Include basketball leadership (Top 4 of 16 teams), well-being event assistance in Singapore (150+ students; supporting 20 Vietnamese participants), student mentoring, and optional concise film-production experience. Frame these as communication, teamwork, and community engagement supported by the resume.

### FR-10 — Placeholder contact

Keep a contact area with visibly marked placeholder values such as `student.email@example.com`; personal social/profile fields may use plain placeholder text. Use a reserved example domain, not another person's real email or guessed profile. Keep contact controls inactive where destinations are placeholders, with readable text explaining that details are coming soon. No fake success state, nonworking social link, or form submitting to a placeholder recipient. Make later replacement with real student details straightforward in shared content configuration.

### FR-11 — Resume access and metadata

Replace the former owner's resume download with the supplied student resume. A valid DOCX download is acceptable; labels and filename must accurately describe its format. Update page title, description, favicon/brand mark, and accessible identity labels for the student. Retain the internship report as a source file; publicly linking that report is not required by this request.

### FR-12 — Remove irrelevant content and assets

Remove old gallery photos, journal entries, videos, university/professional experience, project covers, certificates, and owner-specific logos/documents that are not relevant to the student. Remove their visible sections and unused content/assets, rather than merely restyling obsolete claims. Confirm references before deletion, preserve both supplied DOCX files, and keep any shared UI assets needed by retained features. The append-only audit remains historical evidence and is not a content cleanup target. Shared capabilities are retained only when useful to the resulting experience; stale sections must not remain available through active routes.

## Non-functional requirements

- NFR-01 Accessibility: readable text and controls in both color modes, visible keyboard focus, semantic headings, useful alternative text, accessible mobile controls, and reduced-motion support. Target WCAG AA text contrast where applicable.
- NFR-02 Responsiveness: usable from a 320px viewport through desktop; no horizontal overflow from headings, navigation, cards, or placeholder contact values.
- NFR-03 Performance: keep the static delivery model; use lightweight visual assets/code-native graphics; avoid new runtime charting services or large libraries for decorative visuals.
- NFR-04 Maintainability: shared typed student data remains authoritative for both templates, with straightforward placeholder replacement and no duplicated inconsistent biography/project facts.
- NFR-05 Reliability: meaningful existing tests, TypeScript/Vite build, and ESLint pass after content/routing changes. Missing optional evidence does not create broken links or blank previews.
- NFR-06 Compatibility: static root/project GitHub Pages base paths and retained navigation/preferences remain supported; no backend or deployment changes are necessary.

## Acceptance criteria

1. Both presentations show the student's identity, high-school status, and supported source facts; no former-owner contact, portrait, project, employer, qualification, certificate, or writing is shown.
2. The internship uses 1 June–31 August 2026; blank GPA and unsupported outcome figures are omitted.
3. The three analytics projects communicate their methods and evidence, including the resume-reported F1/rank and Tableau findings accurately.
4. Coursework and leadership/community evidence appear without fake downloadable certificates or project links.
5. The default presentation visibly uses the new analytics design across all retained sections; light and dark modes are coherent and readable.
6. Desktop/mobile navigation, retained section hashes, style switching, layout switching, and saved preferences work; removed sections cannot expose stale owner evidence.
7. Contact uses recognizable placeholders; actions cannot send mail or navigate to guessed student profiles. Resume download resolves to the student's supplied file with an accurate format label.
8. Obsolete assets and their imports are removed; both DOCX sources remain; no build references point to deleted files.
9. At mobile and desktop sizes, content remains usable without horizontal overflow; keyboard focus and reduced motion are supported.
10. Applicable tests, lint, and production build pass; visual/interaction verification results and any tooling limits are recorded in construction documentation.

## Extension compliance

| Extension | Status | Rationale |
| --- | --- | --- |
| Security Baseline | N/A | User explicitly opted out (Question 3: B); enforcement skipped and full rules not loaded. |
| Property-Based Testing | N/A | User explicitly opted out (Question 4: C); enforcement skipped and full rules not loaded. |

Ordinary accessibility, valid-link behavior, and existing build/test checks remain part of this website's requirements independent of extension choices.

## Next-stage recommendation

Include a concise User Stories stage because this request changes navigation, project presentation, placeholder contact behavior, and multiple visitor interactions. Keep later planning/design proportional to one existing frontend application. Requirements approval is complete; implementation still awaits the later approved execution and code-generation plans.
