# NFR Design Patterns — Student Analytics Portfolio

Unit: student-analytics-portfolio. Scope: current two-template frontend, one shared student dataset, existing static hosting.

## Semantic theme tokens — Q-01, Q-04

Use shared semantic color roles for page, surface, primary/supporting text, teal accent, chartreuse highlight, primary action, border, and focus. Keep template-specific layouts but make both palettes consistent with the analytics identity. Replace hardcoded old blue surfaces where they undermine the new palette.

Candidate palette: warm ivory `#f5f3ea`, light ink `#152b2b`, supporting `#4c625c`, light teal `#0f655d`; dark page `#101b1b`, dark text `#edf2e8`, dark supporting `#abbeb5`, dark teal `#87d9c0`; highlight `#d7ed83` with ink text. Use chartreuse for small highlighted surfaces/graphics rather than low-contrast text on ivory.

Candidate opaque color checks, calculated locally before this document was written:

| Role | Foreground | Background | Contrast |
| --- | --- | --- | --- |
| Light primary text | `#152b2b` | `#f5f3ea` | 13.38:1 |
| Light supporting text | `#4c625c` | `#f5f3ea` | 5.89:1 |
| Light teal text | `#0f655d` | `#f5f3ea` | 6.21:1 |
| Light primary button | `#ffffff` | `#0f655d` | 6.91:1 |
| Dark primary text | `#edf2e8` | `#101b1b` | 15.46:1 |
| Dark supporting text | `#abbeb5` | `#101b1b` | 9.01:1 |
| Dark teal text | `#87d9c0` | `#101b1b` | 10.64:1 |
| Chartreuse surface text | `#152b2b` | `#d7ed83` | 11.56:1 |

These ratios verify the proposed opaque pairs only. Final rendered surfaces, nested controls, hover/focus states, and any transparency must be checked after implementation. Preserve semantic headings and useful labels; decorative motifs must be hidden from assistive technology unless they convey labeled information.

## Responsive composition — Q-02

Use the existing responsive shells and section containers. Favor fluid grids, minmax(0, 1fr), min-width: 0, wrapping text, and bounded line lengths. Stack evidence and contact surfaces on narrow screens. Keep navigation controls reachable and avoid fitting large headings with hidden overflow. Reuse existing fonts with system fallbacks; hierarchy, spacing, grids, and evidence cards create the distinctive visual identity without adding a font service.

Verification sizes: 320px, 390px, 768px, 1440px. Check both template layouts, long placeholder values, project tools/results, and navigation labels. Do not rely on body overflow-x hiding to conceal oversized components.

## Reduced-motion and keyboard patterns — Q-01, Q-03

Retain and extend existing prefers-reduced-motion rules to suppress decorative reveal/floating/pulse effects and smooth scrolling when reduction is requested. Use native links/buttons for navigation actions where feasible. Visible focus uses a contrasting token/ring without depending on hover. Mobile drawer actions close the drawer after navigation and remain keyboard-operable.

## Shared navigation and guarded state — Q-05, Q-08

Keep App and usePortfolioLayout responsible for enabled destinations, layout, and navigation. Both shells and section actions must use the same layout-aware navigation behavior rather than scrolling to unmounted sections in multi-page mode. Coordinate section contracts, maps, next-section links, and active-state logic when old sections are removed or replaced with community content.

Remove retired journal/media evidence from reachable paths. Unknown/retired hashes must resolve to a valid retained view; a direct legacy journal URL cannot render obsolete writing. Keep existing guarded storage reads/writes and registered-ID validation so blocked/corrupt preference storage cannot prevent rendering or style changes.

## Honest optional evidence and contact — Q-06, Q-07

Make optional image/logo/evidence fields render a suitable text/abstract fallback rather than a broken img/object. Coursework appears as source-backed learning text without fabricated PDF previews. Project cards show the supported question, approach, tools, and outcome without a fake external action.

Shared contact configuration explicitly distinguishes placeholder values from usable destinations. Render placeholder email/profile values as labeled text or inactive controls. Guard submission as well as disabled UI so a placeholder cannot launch mail or show a success message. When a real value is later configured, enable only valid configured actions; reserved example destinations remain placeholders. Both contact variants and any shell/hero channel links follow this same state.

Resume actions remain active and use Vite's bundled DOCX URL, an accurate format label, and a student filename. Keep the internship report as an input without adding an unrequested public download.

## Lightweight graphics and cleanup — Q-04, Q-07

Use CSS grids, typographic marks, and inline vector motifs inside existing presentation components. These are conceptual graphics; label illustrative charts and avoid fabricated measured axes or screenshots. No new charting/runtime service is needed.

Resolve obsolete imports/data/section mappings before deleting old owner assets. Preserve the supplied DOCX files. Remove retired writing/media/certificate dependencies only when their code references are no longer needed. Compare actual build artifact sizes during code generation and investigate avoidable growth; do not use historical bundle sizes as a current baseline.

## Verification and compatibility — Q-08

Update meaningful existing tests for the student, retained/retired routes, mode selection, placeholder actions, resume destination, and shared data. Run lint and TypeScript/Vite build. Check final color pairs and responsive/keyboard/motion behavior with browser tooling when available. Verify bundled asset paths for root and a project-style Vite base using current configuration. Record remaining visual/tooling limits explicitly. Static hosting and existing CI remain the deployment design.

## Extension compliance

Security Baseline: N/A, disabled by answer B. Property-Based Testing: N/A, disabled by answer C. Full rules not loaded; enforcement skipped.
