# Unit Test Instructions — Student Analytics Portfolio

## Commands

```bash
npm run test
```

Current expected inventory: 9 files, 71 tests, zero failures. Verification evidence comprises the successful full 68-test run followed by the updated 31-test App run after three navigation/focus cases were added; the other 40 tests were unchanged. All 71 current cases passed across those applicable runs. Coverage collection is not configured, so no coverage percentage is asserted. Results are printed to the terminal; no permanent report file is configured.

Run the unit-oriented group separately when investigating changes:

```bash
npx vitest run src/utils/templateSelection.test.ts src/utils/contact.test.ts src/hooks/usePortfolioLayout.test.ts src/test/data/navigation.test.ts src/test/data/portfolio.test.ts src/templates/templateRegistry.test.ts src/themeAccessibility.test.ts
```

These 7 files contain 38 current tests. They cover saved preference validation/storage failure, email/profile placeholder rejection and mail draft encoding, layout/hash helpers, retained section completeness, student facts, DOCX SHA-256 preservation, template registry alignment, and light/dark text/action/focus contrast. The remaining 33 rendered cases are described in integration-test-instructions.md.

## Failure handling

Use the failing assertion and stack trace to locate the source. Correct unintended behavior; adjust assertions only for an intentional requirement change. Rerun the affected file, then broaden checks only when changes or unresolved concerns warrant it. Preserve both supplied DOCX inputs; never substitute altered documents to satisfy their hash assertions. Browser responsiveness and native focus behavior also require the documented browser checks.
