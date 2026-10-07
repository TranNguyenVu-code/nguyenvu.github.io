# Build Instructions — Student Analytics Portfolio

## Prerequisites

One existing React/TypeScript/Vite frontend unit. Run commands from the repository root. Verified environment: Node.js 24.0.0 and npm 11.3.0; installed TypeScript 5.9 and Vite 7.3.0. The locked Vite/jsdom engine ranges support Node 20.19+, Node 22.13+, or Node 24+ in their respective release lines. GitHub Actions currently uses Node 20. No secrets, backend, database, or new dependencies are required. Allow disk space for node_modules and dist; no measured RAM minimum is claimed.

## Build and preview

```bash
npm ci
npm run test
npm run lint
npm run build
npm run preview -- --host 127.0.0.1
```

The first command installs package-lock.json dependencies. Network access is needed for an uncached installation. Do not regenerate the lockfile to resolve an environment/network failure. Expected: all 71 current tests pass across 9 files, lint has no errors, and tsc/Vite exit successfully. Preview the URL printed by Vite and stop with Ctrl+C.

Artifacts: dist/index.html, dist/monogram.svg, compiled JS/CSS under dist/assets, and the supplied resume DOCX. Internship_Report remains a preserved source input and is not exposed as a downloadable public report. Removed old media/PDF credentials must not reappear in dist.

## GitHub Pages base path

VITE_BASE_PATH is optional; default is /. The existing deployment workflow derives it from the repository name. To reproduce the project-path check:

```bash
VITE_BASE_PATH=/student-portfolio/ npm run build
```

Inspect dist/index.html: script, stylesheet, and favicon paths must start with /student-portfolio/. The JS bundle must reference the resume beneath the same base path. Preview at that path if serving this build. Afterwards restore the root build with npm run build without VITE_BASE_PATH set. Hash routes such as #/projects remain static-host safe.

## Verified result and troubleshooting

Final root build succeeded. JS 701.32 kB / 202.75 kB gzip; CSS 34.31 kB / 7.58 kB gzip; resume 12.29 kB. Vite's warning about the JS chunk over 500 kB is non-blocking. No pre-change bundle measurement is claimed.

For a Node engine failure, select a compatible Node release. For missing packages, run npm ci with registry access. For compilation errors, use the first TypeScript diagnostic and correct the referenced source. For a blank hosted page or failed resume, check the configured base path and asset HTTP responses. Build-only success does not publish the site.
