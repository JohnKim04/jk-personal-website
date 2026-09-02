# Stage 3: Technical Foundation

## Goal

Create a clean, local development foundation for the personal website. By the end of this stage, the site will have its visual system, reusable shell, placeholder routes, and quality checks in place—but it will not yet be content-complete or deployed.

## Recommended order

Complete these pieces in sequence. Each has a small, verifiable outcome so the project never becomes hard to reason about.

## 3.1 - Protect source material and confirm the baseline

**Status:** Complete

**Purpose:** Keep private source files from accidentally becoming public and understand the current repository state.

### Confirmed asset policy

- `source-material/` is Git-ignored. It holds private inputs, including the original résumé, and is never published directly.
- The original résumé remains source-only because it includes a phone number. The first release links to LinkedIn; a downloadable résumé is added only after creating and approving a web-safe PDF.
- A headshot is public only after John supplies and approves a final web-ready image. Raw photos and alternate exports remain source-only.
- Project screenshots, demos, and third-party assets are public only after confirming they contain no confidential employer or customer information.

**Work**

- Confirm the working directory and Git status.
- Add an appropriate `.gitignore` before creating the application.
- Keep `source-material/` private by default; it currently contains the résumé, which includes personal contact information.
- Decide which eventual public assets belong in the app (for example, a web-safe résumé PDF and a headshot) and which should remain source-only.

**Done when**

- The repository is clean and source-only materials will not be included in a future public push by accident. **Complete.**

## 3.2 - Initialize the application

**Purpose:** Create the base Next.js application without adding unnecessary features.

**Work**

- Initialize Next.js with TypeScript, the App Router, and Tailwind CSS.
- Use a clear project structure that supports pages, reusable components, content, and public assets.
- Start the local development server and confirm the untouched starter app loads.

**Done when**

- The starter application runs locally and a production build succeeds.

## 3.3 - Establish project conventions and dependencies

**Purpose:** Make future edits predictable and keep the dependency footprint small.

**Work**

- Add only the required libraries: the UI primitives needed for accessible interaction and Motion for restrained animation.
- Configure formatting, linting, and TypeScript checks.
- Add a short project README covering local commands, structure, and the editing workflow.
- Record environment-variable conventions even if no secrets are currently needed.

**Done when**

- The project has one documented command path for development, linting, checking, and building.

## 3.4 - Create the design-token layer

**Purpose:** Implement the approved technical-editorial direction at the foundation, not through one-off CSS.

**Work**

- Add the warm-neutral, ink, gray-divider, and deep-blue accent color tokens.
- Select and load the display/body sans-serif and metadata monospace fonts.
- Define a spacing scale, responsive container widths, type scale, rules/dividers, focus styles, and motion durations.
- Establish global accessibility defaults, including reduced-motion behavior and text-selection/readability rules.

**Done when**

- A small style sample demonstrates the intended palette, type hierarchy, links, metadata, and responsive spacing.

## 3.5 - Build the reusable site shell

**Purpose:** Create the recurring elements once so every page feels coherent.

**Work**

- Build the header with concise navigation and a résumé or LinkedIn path.
- Build the footer with email, LinkedIn, GitHub, and the relevant legal/minimal site information.
- Create core primitives: page container, section heading, editorial rule, text link, metadata row, and impact highlight.
- Ensure these components use semantic HTML and work with keyboard navigation.

**Done when**

- The shell renders consistently at desktop and mobile widths, with visible focus states and no placeholder visual styles leaking through.

## 3.6 - Set up content and route scaffolding

**Purpose:** Make content changes simple and separate from layout code.

**Work**

- Add routes for Home, About, Writing, and individual articles.
- Create local structured data for experience highlights, professional links, and site metadata.
- Configure Markdown/MDX for articles, or select an equally simple local-content approach.
- Add explicitly labeled placeholders for the headshot and first writing post; do not invent claims or publish generated articles as if they are final.

**Done when**

- Every planned route exists and content can be updated in one obvious location.

## 3.7 - Add baseline quality and discoverability

**Purpose:** Prevent common production issues before pages become complex.

**Work**

- Configure page-title and description defaults.
- Add a placeholder Open Graph image strategy, favicon, sitemap, and robots configuration.
- Check semantic heading order, skip navigation, image-alt behavior, and link labels.
- Add simple error and not-found handling appropriate for a small personal site.

**Done when**

- The app has sensible defaults for search/social previews and the important accessibility paths are intentional.

## 3.8 - Verify the foundation locally

**Purpose:** Confirm that the next stage starts from a stable base.

**Work**

- Test navigation, responsive widths, keyboard behavior, and reduced motion.
- Run linting, type checks, and the production build.
- Review a local desktop and mobile rendering; fix structural issues before filling in the final content.
- Commit the foundation as a distinct Git checkpoint.

**Done when**

- The site shell and placeholder pages are stable locally, checks pass, and the repository has a recoverable foundation commit.

## Decisions deferred until later

- Final headshot and public résumé export.
- Final Writing topics and article copy.
- Screenshots or demos for selected projects.
- Analytics, a contact-form backend, CMS, authentication, database, and custom domain.
- Vercel connection and production deployment (Stage 7).

## Stage 3 definition of done

- Next.js, TypeScript, and Tailwind are installed and documented.
- The technical-editorial token system and fonts are working.
- Home, About, and Writing routes exist with a responsive reusable shell.
- Content is stored separately from presentation where practical.
- Accessibility, metadata, and reduced-motion basics are in place.
- Linting, type checks, and a production build pass locally.
- `source-material/` is protected from accidental publication.
