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

**Status:** Complete

**Purpose:** Create the base Next.js application without adding unnecessary features.

**Work**

- Initialize Next.js with TypeScript, the App Router, and Tailwind CSS.
- Use a clear project structure that supports pages, reusable components, content, and public assets.
- Start the local development server and confirm the untouched starter app loads.

**Verification**

- The app was scaffolded in a temporary directory and safely merged into the existing repository, preserving the roadmap and `source-material/` privacy boundary.
- `pnpm dev` starts the local starter app; the homepage returned `200 OK` during verification.
- The project uses webpack for `pnpm build`, because Turbopack's production-build path cannot start its internal helper process on this machine. The webpack production build passed.

**Done when**

- The starter application runs locally and a production build succeeds. **Complete.**

## 3.3 - Establish project conventions and dependencies

**Status:** Complete

**Purpose:** Make future edits predictable and keep the dependency footprint small.

**Work**

- Add only the required libraries: the UI primitives needed for accessible interaction and Motion for restrained animation.
- Configure formatting, linting, and TypeScript checks.
- Add a short project README covering local commands, structure, and the editing workflow.
- Record environment-variable conventions even if no secrets are currently needed.

**Implementation notes**

- `motion` is the only UI dependency added at this point, ready for small, purposeful animation. The site has no custom interactive widget yet, so it uses native semantic HTML rather than prematurely installing a component library or Radix package.
- Prettier (including its Tailwind plugin), strict TypeScript, and the Next.js Core Web Vitals + TypeScript ESLint configuration provide the formatting and static-checking baseline.
- `README.md` documents the one command path: `pnpm dev`, `pnpm format`, `pnpm check`, and `pnpm build`.
- `.env.example` and the README document the rule that `.env.local` holds real local values, and `NEXT_PUBLIC_` variables are build-time public values that can never hold secrets.

**Done when**

- The project has one documented command path for development, linting, checking, and building.

**Complete.**

## 3.4 - Create the design-token layer

**Status:** Complete

**Purpose:** Implement the approved technical-editorial direction at the foundation, not through one-off CSS.

**Work**

- Add the warm-neutral, ink, gray-divider, and deep-blue accent color tokens.
- Select and load the display/body sans-serif and metadata monospace fonts.
- Define a spacing scale, responsive container widths, type scale, rules/dividers, focus styles, and motion durations.
- Establish global accessibility defaults, including reduced-motion behavior and text-selection/readability rules.

**Implementation notes**

- `globals.css` now defines the warm-neutral canvas, near-black ink, soft rule, and deep-blue interactive accent as reusable CSS and Tailwind tokens.
- Geist is retained as the self-hosted display/body sans-serif; Geist Mono is reserved for labels and metadata. This provides an intentional typographic system without an additional font request or asset dependency.
- The token layer covers type, spacing, content widths, thin editorial rules, interaction timing, selection color, and keyboard focus.
- Global defaults respect `prefers-reduced-motion`, retain readable line length and wrapping, and avoid a dark-mode override that would conflict with the approved visual direction.
- The temporary homepage style sample tests the palette, hierarchy, metadata, links, dividers, and responsive grid before the reusable shell is built in 3.5.

**Done when**

- A small style sample demonstrates the intended palette, type hierarchy, links, metadata, and responsive spacing.

**Complete.**

## 3.5 - Build the reusable site shell

**Status:** Complete

**Purpose:** Create the recurring elements once so every page feels coherent.

**Work**

- Build the header with concise navigation and a résumé or LinkedIn path.
- Build the footer with email, LinkedIn, GitHub, and the relevant legal/minimal site information.
- Create core primitives: page container, section heading, editorial rule, text link, metadata row, and impact highlight.
- Ensure these components use semantic HTML and work with keyboard navigation.

**Implementation notes**

- `SiteShell` now owns the consistent header, footer, main-content landmark, and a visible-on-focus skip link.
- The header provides Home, About, and Writing navigation plus LinkedIn; the footer provides email, LinkedIn, GitHub, location, and minimal copyright information.
- `editorial.tsx` contains the reusable page container, section heading, editorial rule, text link, metadata row, and impact-highlight primitives.
- Small About and Writing holding pages make the primary navigation usable now. Stage 3.6 remains responsible for their structured content, article routes, and deliberate content placeholders.
- Desktop and mobile review confirmed the shell remains responsive without horizontal overflow. Keyboard verification confirmed the skip link moves focus to the main-content landmark and the About navigation resolves correctly.

**Done when**

- The shell renders consistently at desktop and mobile widths, with visible focus states and no placeholder visual styles leaking through.

**Complete.**

## 3.6 - Set up content and route scaffolding

**Status:** Complete

**Purpose:** Make content changes simple and separate from layout code.

**Work**

- Add routes for Home, About, Writing, and individual articles.
- Create local structured data for experience highlights, professional links, and site metadata.
- Configure Markdown/MDX for articles, or select an equally simple local-content approach.
- Add explicitly labeled placeholders for the headshot and first writing post; do not invent claims or publish generated articles as if they are final.

**Implementation notes**

- Home, About, Writing, and the static `/writing/[slug]` article route now render within the shared shell. Unknown article slugs return a 404.
- `src/content/site.ts`, `src/content/experience.ts`, and `src/content/writing.ts` separate identity, résumé-backed experience highlights, professional links, and writing metadata from the page components.
- A typed local-content approach was selected instead of MDX. A future post is published by replacing its `coming-soon` entry with a reviewed `published` entry, date, reading time, and paragraph body in `src/content/writing.ts`.
- The headshot space is visibly marked pending. The first writing route is visibly marked unpublished; no generated or unreviewed article copy is presented as final.
- Browser verification confirmed every planned route loads, the article placeholder and unknown-slug 404 behave as intended, and the mobile layout has no horizontal overflow.

**Done when**

- Every planned route exists and content can be updated in one obvious location.

**Complete.**

## 3.7 - Add baseline quality and discoverability

**Purpose:** Prevent common production issues before pages become complex.

**Work**

- Configure page-title and description defaults.
- Add a placeholder Open Graph image strategy, favicon, sitemap, and robots configuration.
- Check semantic heading order, skip navigation, image-alt behavior, and link labels.
- Add simple error and not-found handling appropriate for a small personal site.

**Done when**

- The app has sensible defaults for search/social previews and the important accessibility paths are intentional.

**Complete.** Root and page-level metadata, a generated Open Graph image and `JK` icon, `robots.txt`, and a sitemap route are in place. Set `SITE_URL` after selecting the production domain to produce absolute sitemap and social-image URLs. The shared skip link, semantic heading order, explicit link labels, custom 404, and recoverable error state have been checked intentionally.

## 3.8 - Verify the foundation locally

**Purpose:** Confirm that the next stage starts from a stable base.

**Work**

- Test navigation, responsive widths, keyboard behavior, and reduced motion.
- Run linting, type checks, and the production build.
- Review a local desktop and mobile rendering; fix structural issues before filling in the final content.
- Commit the foundation as a distinct Git checkpoint.

**Done when**

- The site shell and placeholder pages are stable locally, checks pass, and the repository has a recoverable foundation commit.

**Complete.** Navigation, skip navigation, desktop rendering, and the Writing route were checked locally. The responsive single-column rules and reduced-motion safeguard were reviewed; the in-app browser's mobile viewport override did not apply in this session and was reset. Formatting, linting, type checks, and the production build pass. The foundation is committed as the checkpoint below.

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
