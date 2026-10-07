# API Documentation

## External APIs

No REST endpoints, backend, authentication, or database. Outbound links and mailto are navigation integrations.

## Internal contracts

- `PortfolioApp({ initialTemplate? })`: resolves saved/default template, enabled sections, layout, and journal slug.
- `getPortfolioTemplate(id)`: returns Engineering or Business; unknown values fall back to Engineering.
- `PortfolioTemplate`: ID, option copy, shell, journal page, chapter labels, complete section map, and optional section visibility predicate.
- `PortfolioShellProps`: active section/template/layout, enabled navigation, href resolver, navigation callback, template/layout callbacks, children.
- `getInitialPortfolioTemplateId` / `persistPortfolioTemplateId`: guarded preference access; key `portfolio-template-id`.
- `usePortfolioLayout`: returns layout mode, active section/page, href resolver, navigation, and layout toggle.
- `parseSectionHash` / `resolveSectionId`: validate enabled destinations and provide home fallback.
- `createSectionHash` / `createAnchorHash`: create `#/projects` or `#projects` style links.
- Journal hashes: `#/journal/{slug}` resolve local Markdown posts separately from section routes.
- `buildMailtoUrl`: trims/encodes subject and body and opens an email client, without server delivery.

## Data models

`Portfolio` aggregates profile/hero, navigation/section copy, biography, education, experience, awards, projects, gallery, videos, writing, skills, and certificates. `SectionId` includes home, about, education, experience, awards, projects, gallery, journal, skills, contact. Navigation entries have an enabled flag. Template IDs are `engineering` and `business`.

Profile currently requires image, email, and resume fields. Education requires a logo and projects require an image. Missing student contact/image data will need honest optional rendering or a clearly abstract visual, rather than the previous owner's identity. The existing certificate model expects a document file; source-backed coursework without supplied certificate PDFs needs a suitable presentation.
