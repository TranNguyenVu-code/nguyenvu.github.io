# Integration Test Instructions — Student Analytics Portfolio

## Scope and execution

This is one static frontend unit; integration means App, shared data, registry, presentation shells, and navigation interacting in React. There are no cross-service endpoints, credentials, database fixtures, or backend startup requirements.

```bash
npx vitest run src/App.test.tsx src/templates/business/businessTemplate.test.tsx
```

Current inventory: App 31 cases and Business 2 cases, totaling 33. These passed in the applicable verified runs. Tests use jsdom, the UI provider, temporary test storage, and DOM cleanup. Inspect terminal output; no external services require cleanup.

## Scenarios and expected outcomes

| Interaction | Expected result |
| --- | --- |
| Shared content to both template maps | Student identity, retained sections, project questions/approaches/outcomes, and community records appear |
| App to style selector/storage | Both styles selectable; latest choice persists; invalid or inaccessible storage falls back safely |
| Style switch to layout/color/route | Existing section route, chosen layout, and color context survive the switch |
| Shell or hero action to section layout | Intended section renders alone with a GitHub Pages-safe hash |
| Direct/retired hashes to routing | Retained deep links work; old gallery/journal and unknown routes resolve to home |
| Saved section layout to direct anchor | Explicit anchor takes priority and opens single-page mode |
| Section navigation to focus | Heading receives focus; skip link focuses main without replacing route |
| Browser history to section tree | Popstate updates the rendered retained section |
| Resume data to hero action | Both styles use the actual DOCX URL, accessible label, and student download filename |
| Placeholder contact to form | Example address is plain text, fields/button disabled, and submission guard leaves location unchanged |

Manual browser checks in e2e-test-instructions.md supplement jsdom for actual sizes, CSS, drawers, keyboard input, asset responses, and reduced-motion emulation.
