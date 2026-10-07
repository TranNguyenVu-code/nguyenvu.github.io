# Dependencies

## Internal relationships

Entrypoint -> provider -> App -> registry/layout hooks -> template shells and sections -> shared content/utilities -> bundled assets and Markdown. Tests exercise these same modules in jsdom. All are in one package.

App depends on navigation data, journal parsing, browser preference utilities, and the Engineering/Business registry. Both template shells use the shared style selector and color mode. Every registry entry maps all SectionId values. Templates consume the same identity, project, experience, and skills data.

## External dependencies

Exact local version declarations are recorded in technology-stack.md and package.json. React renders UI; Chakra/Emotion provide UI styling and dialogs; next-themes supplies mode state; React Icons provides symbols; React Markdown renders writing; Tailwind/Vite/SWC compile assets; TypeScript checks contracts; Vitest/Testing Library/jsdom exercise behavior; ESLint/Prettier support quality checks. License metadata has not been independently audited in this stage.

## Runtime integrations

Browser history/local storage, mailto, Google Fonts, and outbound links. No API client, server router, database, or cloud SDK is required. The DOCX inputs can be extracted using the Python standard library without adding a runtime dependency.
