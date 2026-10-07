# Browser Workflow Instructions — Student Analytics Portfolio

## Setup

```bash
npm run dev -- --host 127.0.0.1
```

Open the printed localhost URL in a browser. For production checks use npm run build then npm run preview. Stop the server with Ctrl+C when finished. Use an isolated browser profile or clear this site's saved preferences when checking first-visit defaults; preserve real user preferences outside the test profile.

## Browser matrix

Repeat content/overflow review in Engineering and Business, light and dark, at 320, 390, 768, and 1440px. Repeat layout/actions in single-page and section modes. Check 1024px Business specifically: contents rail is hidden and the menu button remains available.

1. Confirm student name, notebook visual, three project evidence cards, academic/internship dates, coursework, and community records. There must be no horizontal document overflow or old gallery/journal/video sections.
2. Use Portfolio style to change styles; confirm shared facts and preservation of route/layout/color. Reload to check saved choices.
3. Use section links and hero Explore my work. Single-page mode scrolls to the retained section; section mode renders only it at #/projects and focuses its heading. Back/forward should update the section tree.
4. Open each mobile drawer and select Leadership & Community. Navigation completes and drawer closes. Switch layouts via the mobile controls.
5. With keyboard Tab, the first skip link becomes visible. Enter focuses main and leaves the current route intact. Tab through visible controls: names and focus indicators must be useful.
6. Enable reduced motion in browser rendering settings. Confirm the preference is detected and unnecessary transitions/animations are suppressed.
7. Open #/gallery and #/journal/old-post, including after a retained route is loaded; confirm recovery to #/home. Direct #education should open the single-page view even when section mode was saved.
8. Inspect the Resume · DOCX link: student download filename, actual document destination, and successful asset response. Verified preview response was HTTP 200 and 12,292 bytes.
9. Contact: example address clearly marked, no clickable example destination, disabled fields/submit, GitHub/LinkedIn marked coming soon. No email draft opens from the placeholder form.

## Executed evidence and limits

Installed headless Chrome was used with a temporary profile and DevTools. Both styles/colors at all four widths showed nine sections, disabled contact, and no horizontal overflow: 16 combinations. Both styles at all four widths also passed keyboard skip focus, drawer/community navigation, section hero action, one project section, heading focus, reduced-motion emulation, and legacy recovery: 8 action combinations. A 1024px check confirmed Business's hidden rail and visible menu. Desktop introduction/projects and mobile introduction/contact screenshots were inspected.

Temporary Chrome scripts/screenshots are verification artifacts outside the application and are not a committed browser test dependency. The steps above reproduce the checks manually; no new npm E2E script is configured. These checks do not claim a full screen-reader audit, exhaustive cross-browser support, or measured performance score.
