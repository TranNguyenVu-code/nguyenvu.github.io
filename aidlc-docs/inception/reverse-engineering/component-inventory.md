# Component Inventory

## Packages

- One application package, `my-portfolio`.
- One deployment workflow under `.github/workflows`; no separate infrastructure package.
- Shared modules within the application: data, types, hooks, utilities, components, UI primitives, Markdown content, and assets.
- Tests live within the application; no separate test package.

## User-facing components

App; EngineeringShell with Navbar; BusinessShell with contents rail and mobile drawer; PortfolioStyleSelector; color/layout controls; Hero, About, Education, Experience, Awards, Projects, Gallery, Journal, JournalPostPage, Skills, Contact; corresponding Business sections; certificate/media previews and external actions.

## Revamp candidates

Update both presentations to consume the student identity. Preserve the existing two-choice runtime capability unless requirements specify otherwise. Restyle a default presentation into a distinctive analytics portfolio. Replace outdated section content and navigation. Remove irrelevant gallery/writing/video/certificate evidence and unused assets after reference checks. Add leadership/community content using a boundary chosen in the design/plan stage.

## Counts

One application, zero infrastructure packages, zero separately published shared packages, zero standalone test packages. File inventory is in code-structure.md.
