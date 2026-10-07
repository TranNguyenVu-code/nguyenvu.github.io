# Logical Components — Student Analytics Portfolio NFR Design

These are responsibilities within the existing application, not new services or packages.

| Existing boundary | Responsibility | NFR criteria |
| --- | --- | --- |
| src/types and src/data | Shared source-backed identity, evidence, section metadata, optional media, and placeholder status. | Q-06, Q-07 |
| App / usePortfolioLayout / scroll helpers | Enabled sections, layout-aware actions, stale-route recovery, active state. | Q-05, Q-08 |
| Template registry / selection utility | Retain Engineering/Business and guarded valid preference resolution. | Q-05 |
| EngineeringShell/Navbar and BusinessShell | Responsive navigation, mode controls, keyboard labels/focus, correct identity and inactive placeholder channels. | Q-01, Q-02, Q-05, Q-06 |
| Existing hero and section components | Student content/evidence cards, leadership/community within section boundaries, honest absent-media/evidence rendering, usable section actions. | Q-01, Q-02, Q-05, Q-06, Q-07 |
| Existing Contact and BusinessContact | Clearly marked placeholder contact, disabled actions and submit guards, easy shared-value replacement. | Q-01, Q-02, Q-06 |
| Existing ExternalAction and download usage | Valid student DOCX action, accurate format, no empty/fake evidence links. | Q-06, Q-08 |
| Existing CSS/token files and color provider | Ivory/ink/teal/chartreuse roles, readable focus/controls, reduced motion, font fallbacks, lightweight motifs. | Q-01, Q-02, Q-03, Q-04 |
| Existing test/build tooling | Updated meaningful expectations, lint/types/build, asset resolution, documented final verification. | Q-07, Q-08 |

## Responsibility flow

Student data/section contracts feed the retained template map and enabled navigation. App/layout state controls which sections are mounted. Existing shells and sections consume shared content and semantic styling. Contact actions consult configured placeholder status; resume actions use the bundled source document. Verification exercises content, routes, controls, styles, and built asset paths.

No queues, databases, caches, external APIs, circuit breakers, or cloud provisioning are needed. Unavailable storage falls back locally. Missing optional evidence falls back in rendering. These choices match the approved single-frontend scope.

## Change coordination

Update shared contracts and all consuming sections/maps together. Remove obsolete routes and imports before asset deletion. Preserve both presentations and source documents. The code-generation plan will identify exact edits and checkboxes; no application code is changed in this design stage.

## Extension compliance

Security Baseline N/A (disabled B); Property-Based Testing N/A (disabled C). Enforcement skipped; full rules remain unloaded.
