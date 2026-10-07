# Business Overview

The website presents one portfolio owner's education, experience, projects, accomplishments, media, skills, and contact options to reviewers, mentors, and potential collaborators. One static application package serves the entire experience.

## Business transactions

- Owner updates typed content and bundled assets, chooses the first-visit template, and publishes through GitHub Actions.
- Visitor reads the profile and evidence, downloads the resume, and follows external project and social links.
- Visitor switches between Engineering and Business, changes light/dark mode, and navigates using desktop or mobile controls.
- Visitor views all enabled sections continuously or opens individual sections through hashes.
- Visitor opens a local journal article, previews media or certificate PDFs, or prepares an email using the contact form.

## Business context

Portfolio owner -> typed content and assets -> static React website -> visitor.
GitHub Actions -> production build -> GitHub Pages -> visitor.
External destinations include social profiles, project repositories, WordPress, YouTube, and the visitor's mail client.

## Dictionary and component responsibilities

- Template: presentation of shared content; currently Engineering and Business.
- Section: a typed navigation destination, enabled by content configuration and optionally template visibility.
- Layout: a continuous page or a section view using hashes compatible with static hosting.
- Shell: header, mobile/desktop navigation, display controls, and main content container.
- App: owns selection, routes, and section rendering.
- Data: student-editable records, independent of presentation.
- Deployment: builds and uploads static files without an application server.

## Revamp relevance

The current identity and evidence belong to Nham Quoc Hung, while the requested replacement sources describe Tran Nguyen Vu. Old education, jobs, awards, photographs, certificates, videos, writing, project images, and social links must be reassessed rather than carried over as student achievements.
