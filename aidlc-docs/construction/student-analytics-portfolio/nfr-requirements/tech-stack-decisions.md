# Tech Stack Decisions — Student Analytics Portfolio

## Retained choices

| Area | Decision | Reason |
| --- | --- | --- |
| Frontend | Existing React 19 and TypeScript | Current template/content/state architecture already supports the revamp. |
| UI | Existing Chakra UI, Emotion, and React Icons | Reuse responsive primitives, accessible controls, and consistent icons. |
| Styling | Existing CSS/token boundaries; current Tailwind integration | Define the analytics design and modes without adding a theme framework. |
| Color preferences | Existing next-themes and controls | Preserve the existing color-mode behavior. |
| Routes/display preferences | Existing hash/layout/selection utilities | Compatible with static hosting; avoids a server/router migration. |
| Visuals | CSS or inline vector/typographic motifs | Lightweight, honest abstractions; no fabricated screenshot or decorative charting dependency. |
| Documents | Vite-bundled student DOCX resume | Accurate download format without a new document-rendering library. |
| Build | Existing Vite and TypeScript project build | Retain root/project base-path support. |
| Verification | Existing Vitest/Testing Library/jsdom, ESLint | Update relevant assertions and run the current verification commands. |
| Hosting | Existing GitHub Actions/Pages configuration | No infrastructure change or deployment is requested. |

No new runtime dependency, live data service, backend, auth system, CMS, or database is required. Unused dependencies may be assessed during obsolete-feature cleanup only when reference/build evidence supports removal; broad upgrades are outside scope.

## Trade-offs

Code-native visuals convey an analytics identity without suggesting unavailable screenshots or measured datasets. DOCX resume access is less preview-oriented than PDF but uses the supplied file accurately. Placeholder contact is intentionally descriptive until verified student destinations are configured. Current hash routing preserves static-host compatibility; section-action behavior must be verified in both layout modes.

## Extension compliance

Security Baseline and Property-Based Testing are disabled by explicit choices. Full rules remain unloaded and enforcement is skipped. Accessibility, reliability, and source-fidelity checks still follow approved requirements.
