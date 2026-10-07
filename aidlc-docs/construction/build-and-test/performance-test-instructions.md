# Performance Test Instructions — Student Analytics Portfolio

## Applicable scope

This static portfolio has no API, database, runtime server, or approved requests-per-second/concurrent-user target. Load/stress/scalability tests are N/A. Performance verification here records static delivery size and responsive usability, without inventing response-time thresholds or a Lighthouse score.

```bash
npm run build
```

Read Vite's output for minified and gzip sizes and inspect dist. The verified root build produced JS 701.32 kB (202.75 kB gzip), CSS 34.31 kB (7.58 kB gzip), and a 12.29 kB resume. dist was approximately 748 KiB. Vite transformation/bundling took 3.21 seconds in that run; this excludes the preceding TypeScript phase and is not a benchmark objective.

No pre-change build was measured, so do not infer a percentage improvement from historic workflows. The over-500-kB JS warning remains non-blocking. Existing runtime/UI dependencies are retained; no code-splitting change is required by this approved revamp.

For later performance work, preview the production bundle and record mobile Lighthouse/Web Vitals on a controlled machine/network before and after changes. That measurement is optional and was not executed or assigned a pass/fail score here. Source-backed visuals use inline SVG/CSS rather than additional raster/charting libraries. Google font fallbacks permit local rendering when the network is unavailable.
