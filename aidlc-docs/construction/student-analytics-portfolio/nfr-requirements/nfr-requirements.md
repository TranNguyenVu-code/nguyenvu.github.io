# NFR Requirements — Student Analytics Portfolio

Unit: student-analytics-portfolio. Depth: minimal. Source: approved NFR-01–NFR-06 and SA-US-01–SA-US-08. This document sets verification expectations; no implementation result is claimed.

## Quality criteria

| ID | Requirement | Acceptance and verification |
| --- | --- | --- |
| Q-01 | Accessible theme and controls | Check both styles in light/dark modes. Normal text contrast at least 4.5:1 and large text at least 3:1 where applicable. Required focus/control indicators distinguish their surroundings; labels, landmarks, heading order, and keyboard navigation are meaningful. Numeric contrast checks must use actual final foreground/background colors. |
| Q-02 | Responsive content | Check representative 320px, 390px, 768px, and 1440px viewports, with long placeholder/contact and heading text. No meaningful content or controls are clipped or require page-wide horizontal scrolling. Mobile navigation remains reachable and closes after a section selection. |
| Q-03 | Reduced motion | Honor prefers-reduced-motion for reveal, floating, pulse, scrolling, and decorative effects; no information depends on animation or color alone. |
| Q-04 | Lightweight delivery | Keep static assets and the current runtime stack. Use code-native/abstract graphics rather than large image or chart packages for decoration. Record production bundle output before/after when feasible; investigate avoidable growth. No invented response-time or load SLA is required. |
| Q-05 | Reliable navigation and preferences | Both template styles, both layout modes, and color modes remain usable. Section actions work in section view; retired/unknown routes cannot reveal old evidence and recover to a valid state. Valid saved preferences restore; invalid/unavailable storage does not block rendering. |
| Q-06 | Honest optional evidence and contact | Missing images, project URLs, certificate scans, or real contact destinations create neither broken previews nor active fake actions. Placeholder values are visible and inactive; resume access points to the supplied student DOCX with accurate format labels. |
| Q-07 | Maintainable source fidelity | One shared typed data/configuration source supplies student facts and placeholder status to both presentations. Preserve the supplied DOCX files. Remove obsolete evidence/assets only after imports/routes are resolved. Student facts remain traceable to the source review. |
| Q-08 | Build and hosting compatibility | Applicable tests, ESLint, and strict TypeScript/Vite production build pass. Verify student assets/resume under root and a project-style base path using the existing configuration. Keep deployment architecture intact; no publishing is part of this unit. |

These concrete checks refine the already approved expectations rather than add features. Viewports are representative verification sizes, not new device-specific designs. Reduced-motion and contrast are implemented through existing CSS/control boundaries in the next stage.

## Scalability and availability

Static GitHub Pages delivery remains the deployment model. There is no application server, session service, database, throughput target, or new scaling/failover resource to design. External font availability must not prevent content readability; use local/system fallbacks. Resume and student evidence are bundled rather than fetched from a new service.

## Security and privacy boundaries

The user disabled Security Baseline and Property-Based Testing. No full extension rules apply. Ordinary approved behavior still excludes invented personal destinations, reuse of the former owner's details, secret credentials, server form submission, and fake success messages. The internship report is retained as a source file; a public report download is not required.

## Verification scope

Automated checks cover meaningful changed contracts/behavior: shared data/navigation, retired-route handling, layout/style selection, placeholder action states, and download targets. Existing tests should be updated when their assertions still describe obsolete content; do not claim historical tests validate the new website.

Visual/interaction review checks all retained presentations and modes at desktop/mobile sizes, keyboard focus, and reduced motion. If browser tooling is unavailable, record the unverified visual aspects and use feasible runtime/static checks. Performance-load testing is N/A for this presentation-only change without a backend or a new throughput requirement; production asset/build inspection remains required.

## Extension compliance

| Extension | Status | Rationale |
| --- | --- | --- |
| Security Baseline | N/A | User opted out with B; enforcement skipped and full rules not loaded. |
| Property-Based Testing | N/A | User opted out with C; enforcement skipped and full rules not loaded. |
