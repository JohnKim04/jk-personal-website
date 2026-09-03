# Stage 5: Visual Refinement

## Goal

Turn the completed Stage 4 content into a visually intentional release candidate: calm, technical-editorial, easy to scan, and recognizably John's rather than a default portfolio. This stage improves hierarchy and finish without expanding the first-release product scope.

## Starting point

- Home, About, Writing, and the published article are populated with reviewed content and share the Stage 3 design system.
- The approved homepage is intentionally text-only; no publishable headshot is available in the repository.
- The Writing section contains one real post, **Keep testing the tools you use**.
- `public/` contains only unused Next starter SVGs. No custom photo, project image, or résumé PDF is currently approved for publication.
- The unused `motion` package has been removed. Existing CSS provides the only retained short link and skip-link transitions plus a reduced-motion override.

## Scope and guardrails

Stage 5 is an editorial design pass. It may change public copy for clarity, content order, layout, CSS tokens, and small interaction feedback. It does not add a CMS, database, analytics, contact form, authentication, new project-detail routes, deployment configuration, or a custom domain.

- Preserve the Stage 4 factual and privacy boundary. Do not add a private résumé, raw headshot, employer screenshots, internal-tool details, customer information, secrets, or generated stand-in imagery.
- Do not manufacture visual evidence. If no approved headshot or project asset arrives, make the text-only and outcome-led design stronger rather than filling space with stock imagery, AI art, or a generic illustration.
- Maintain the technical-editorial direction: warm off-white, near-black type, restrained blue interaction color, rules before cards, ample whitespace, and clear editorial-serif/mono roles. Avoid gradients, glass, decorative dashboards, carousels, parallax, or attention-seeking effects.
- Preserve semantic landmarks, logical heading order, visible focus, keyboard paths, readable line length, touch-friendly controls, contrast, and `prefers-reduced-motion` behavior. Visual refinement may not trade away usability.
- Prefer a small number of system-level changes over per-page exceptions. A new component, CSS token, asset, or dependency needs a named visitor-facing purpose.
- Keep approved writing and personal voice intact. Editorial tightening is allowed; a substantive change to John’s point of view, a quantitative claim, or a biographical fact needs owner review.

## Recommended order

Complete the sections in order. The visual baseline and hierarchy decisions come before asset and motion work so that optional additions solve a real problem rather than become decoration.

## 5.1 - Establish a visual baseline and review criteria

**Purpose:** Make the refinement pass concrete and comparable instead of relying on vague impressions.

**Work**

- Capture baseline screenshots for `/`, `/about`, `/writing`, and `/writing/keep-testing-the-tools-you-use` at approximately 375 px, 768 px, and 1440 px widths. Include the 404 route in the functional review even if it is not a primary visual surface.
- Read each page in the order a recruiter or hiring manager would: first-screen positioning, proof of work, Writing signal, contact path, then deeper context. Record where type, spacing, rules, labels, or calls to action create unnecessary friction.
- Review Home and About together for repeated identity treatment. Their shared “John Kim” presentation should either use the same intentional placement or be differentiated enough that the change feels purposeful.
- Define a short page-by-page hierarchy target before changing CSS: what must be noticed first, second, and third; which details are supporting metadata; and which action is primary.
- Use the existing technical-editorial references only as a quality bar, not source material to reproduce. Keep screenshots and temporary review artifacts outside the public bundle unless they become approved project assets.

**Done when**

- There is a documented, page-specific list of refinements tied to hierarchy, readability, or interaction—not a generic “make it nicer” backlog.

## 5.2 - Tighten the editorial hierarchy and calls to action

**Purpose:** Make the content feel authored and immediately legible while retaining the direct, low-fluff voice established in Stage 4.

**Work**

- Review the homepage eyebrow, role framing, lede, section headings, selected-impact labels, Writing teaser, and contact labels as one reading sequence. Remove duplicated framing and make the strongest evidence easy to find without making claims louder than the evidence supports.
- Keep one unmistakable primary action on Home: direct email. LinkedIn and GitHub remain useful professional paths, but should not compete visually with contact unless the hierarchy review identifies a legitimate reason.
- Ensure the About intro adds context rather than feeling like a shifted copy of the Home hero. Reuse shared identity information deliberately; differentiate the page through narrative and chronology.
- Tune the Writing index and article introduction for the actual one-post collection. The reader should understand the post is a considered point of view, not a generic AI-content feed.
- Preserve concise labels that describe destinations or actions. Avoid marketing language, invented superlatives, vague “learn more” links, and first-person rewrites that change approved meaning.
- Make content changes in the existing typed files where possible, keeping page components responsible for composition rather than owning duplicate prose.

**Done when**

- Each primary page has a clear reading order, a single visible purpose, and contact/navigation language that is direct without sounding promotional.

## 5.3 - Resolve final-asset and cleanup decisions

**Purpose:** Finish the visual surface without publishing filler or carrying unused production artifacts.

**Work**

- Treat the text-only hero as the default final state. If John supplies an approved headshot, review its publishing permission, crop, dimensions, alt text, and mobile/desktop composition before adding one optimized derivative. Otherwise, do not create or use a substitute image.
- Consider project screenshots, demos, or external links only when they are public, permissioned, understandable without confidential context, and materially improve the selected-impact story. A concise outcome block remains preferable to weak visual evidence.
- Remove `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, and `public/window.svg` after confirming no route, metadata generator, CSS rule, or documentation references them.
- Audit installed dependencies. If Stage 5 uses only the existing CSS transitions, remove the unused `motion` package and update the lockfile. Retain it only if an approved, tested interaction below genuinely requires it.
- Keep the generated application icon and social image unless a replacement has been approved; they are intentional metadata assets, not starter files.
- Inspect `git status`, the staged diff, and the resulting public file list before every asset commit to make sure ignored source material stays excluded.

**Decision gate**

- No final imagery has to be added for Stage 5. The branch may proceed with a polished text-first experience if no approved asset is provided.

**Done when**

- Every public asset is intentional, licensed or owner-approved for publication, referenced by the site, and optimized appropriately; unused starter files and unjustified dependencies are gone.

## 5.4 - Tune the design system and page composition

**Purpose:** Increase perceived quality through consistency, proportion, and reading comfort rather than by adding decorative UI.

**Work**

- Review and, where justified, refine global CSS tokens for page widths, rhythm, rule color, accent/link treatment, type scale, metadata contrast, focus-ring visibility, and transition timing. Keep changes centralized and name tokens by purpose.
- Tune the header, primary navigation, hero, section lead-ins, impact rows, timelines, article metadata, article body, return links, and footer as one family. Align baselines, rule placement, and vertical spacing so repeated structures feel deliberate.
- Give long-form article content enough contrast, line height, and readable measure; distinguish article title, description, metadata, body, and navigation without making every element equally large or blue.
- Review narrow layouts first for wrapping, spacing, hit targets, and the relationship between header and page title. Then refine tablet and desktop density without creating a different visual language at each breakpoint.
- Keep component borders, radii, shadows, and hover states restrained. Prefer whitespace and rules to additional cards; any card-like surface must clarify grouping or interaction.
- Test text zoom at 200%, browser zoom, high-contrast conditions where available, and long/short text wrapping. Do not solve layout issues by clipping, fixed heights, or hiding meaningful content.

**Done when**

- The site has a coherent type and spacing rhythm across every route, with readable long-form content and no layout that depends on an ideal viewport or text length.

## 5.5 - Add or decline motion deliberately

**Purpose:** Ensure movement provides feedback or hierarchy instead of making a fast, readable site feel less mature.

**Work**

- Inventory existing CSS transitions and keep only feedback that is quick, discoverable, and useful—for example, link underline/color feedback or a small button-state change.
- Do not add entrance animations, scroll-triggered effects, autoplay, looping decoration, parallax, or animation that delays content from appearing.
- If a specific interaction would materially benefit from animation, document its trigger, duration, easing, interruption behavior, and static fallback before implementation. Use the simplest implementation that meets that requirement.
- Honor `prefers-reduced-motion: reduce` for every nonessential animated property, including any newly introduced transform, opacity, or smooth-scrolling behavior. Verify that the static state remains complete and usable.
- If no motion treatment clears this bar, remove `motion` as part of 5.3 and retain the small CSS feedback already present.

**Done when**

- Every remaining transition communicates interaction state or hierarchy, works without motion, and is disabled or reduced according to user preference.

## 5.6 - Iterate with screenshots and real-device checks

**Purpose:** Validate the intended design in actual rendering contexts, not just in source code.

**Work**

- Compare updated screenshots against the 5.1 baseline at phone, tablet, and desktop widths. Check first-screen clarity, whitespace, line breaks, alignment, rule rhythm, type hierarchy, CTA visibility, and whether the pages feel like one system.
- Use a real phone or reliable device emulator for Home, About, Writing, the article, and 404. Confirm no horizontal overflow, cropped focus rings, hover-only controls, accidental tiny targets, or awkward word wrapping.
- Test navigation, email, LinkedIn, GitHub, skip link, browser back behavior, and article return link with keyboard and touch. Verify external links retain their intended safe behavior.
- Test reduced-motion and 200% text zoom after the final visual pass. Exercise the recoverable error UI deliberately before Stage 6, or record it as an explicit Stage 6 launch-quality check if safely triggering it is impractical in the local preview.
- Keep implementation notes focused on observed problems and their resolution. Do not ship screenshot tooling, test images, or temporary visual-debug CSS.

**Done when**

- The selected release-candidate layout looks intentional and works without clipping or interaction regressions at representative desktop and mobile sizes.

## 5.7 - Verify, document, and prepare the refinement checkpoint

**Purpose:** Make the visual pass reviewable and leave `main` with a clean, reproducible release candidate.

**Work**

- Review every changed public line for factual accuracy, privacy, copy quality, semantics, asset references, and accessibility consequences. Confirm no temporary labels, test content, dead links, private files, or generated build output are included.
- Run `pnpm format:check`, `pnpm check`, and `pnpm build`. Resolve failures instead of documenting around them. Inspect the production route output, including the article and not-found route.
- Reconfirm metadata defaults, page titles/descriptions, icon, social image, `robots.ts`, and `sitemap.ts` still work after asset and copy changes. Domain-specific `SITE_URL` configuration remains a Stage 7 concern.
- Use a focused branch (recommended: `codex/stage-5-visual-refinement`) from the Stage 4 merge point. Keep commits reviewable—for example: editorial/design-system refinement; approved assets and cleanup; visual verification/documentation.
- Inspect `git diff --check`, the staged diff, ignored files, and `git status` before pushing. Open a PR into `main`; do not force-push or overwrite remote history. Rebase and merge only after review, then fast-forward local `main` and remove the merged branch.

**Done when**

- The Stage 5 PR contains only intended visual, copy, asset, and cleanup changes; all checks pass; and the branch is ready for the Stage 6 launch-quality pass.

## Decisions deferred until later

- A public downloadable résumé, unless John provides a sanitized web-safe version and explicitly wants it surfaced.
- Project-detail pages, a broader gallery, private employer screenshots, client work, or any generated/staged imagery.
- Additional Writing posts, categories, tags, search, RSS, or a CMS.
- Analytics, contact-form infrastructure, authentication, a database, Vercel configuration, domain selection, and production deployment.
- Major rebrands, a new visual direction, dark mode, custom illustrations, video, 3D, or a substantial interaction system.

## Stage 5 definition of done

- Every page has an intentional, consistent hierarchy at representative phone, tablet, and desktop widths.
- Home and About either share their repeated identity treatment exactly or visibly serve distinct layout purposes.
- The text-only hero remains polished unless an approved, optimized public asset is deliberately introduced.
- Headings, metadata, links, and calls to action are concise, specific, and consistent with John’s approved voice.
- The type, spacing, color, rule, and interaction system feels coherent without reliance on a component-library default or decorative effects.
- All public assets are approved, referenced, and safe to publish; unused starter assets and unjustified dependencies are removed.
- Keyboard, touch, focus, reduced-motion, text-zoom, and no-horizontal-overflow paths remain intact.
- `pnpm format:check`, `pnpm check`, `pnpm build`, and final diff/privacy reviews pass before the Stage 5 PR is opened.
