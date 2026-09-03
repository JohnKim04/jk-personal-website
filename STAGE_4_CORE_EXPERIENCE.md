# Stage 4: Core Experience

## Goal

Turn the Stage 3 routes and design system into a concise, credible first version of the site. By the end of this stage, a visitor can understand who John is, the kind of engineering work he has done, and how to get in touch—without encountering provisional copy, a fake portfolio, or an unpublished writing placeholder.

## Scope and guardrails

Stage 4 is content integration and first-pass responsive composition. It uses the existing Next.js routes, semantic components, local typed-content approach, and technical-editorial visual system. It does not add a CMS, database, analytics, contact-form service, authentication, project-detail routes, deployment configuration, or a custom domain.

- Publish only facts, metrics, names, links, images, and writing that John has reviewed for public use.
- Keep the original résumé, raw headshots, alternate photo exports, employer screenshots, customer information, internal tooling details, and secrets in `source-material/` or outside the repository. Never copy a private résumé wholesale into the website.
- Do not invent achievements, project evidence, quotations, dates, article claims, or personal narrative. A missing approved asset changes the layout; it does not justify a placeholder or generated substitute.
- Preserve the Stage 3 decision to keep v1 content in typed local files. Do not introduce MDX or a CMS for one article.
- Keep the site concise. Selected impact and the primary contact action remain on Home; About and Writing deepen the story rather than repeating the homepage.

## Recommended order

Complete the sections below in order. The content-approval gate comes first because the rest of Stage 4 should turn approved material into a coherent visitor journey, not create copy that later has to be unwound.

## 4.1 - Assemble and approve the public-content packet

**Purpose:** Establish a single approved source for the content that replaces every Stage 3 placeholder.

**Status:** Complete. The private résumé has been reviewed for factual alignment, the public education status reflects the confirmed June 2026 graduation, and the owner-directed About narrative and first Writing post are published.

### Defaults recorded for this pass

- No approved public headshot is present in the workspace. Stage 4 therefore uses the text-only hero unless John supplies a selected, web-ready image with permission to publish.
- No web-safe downloadable résumé is present. Stage 4 keeps LinkedIn as the résumé path and does not expose the private source PDF.
- Existing Company, role, technology, and outcome claims are retained only where supported by the reviewed résumé; final public wording remains subject to John’s approval.

**Work**

- Review the existing structured facts in `src/content/site.ts` and `src/content/experience.ts` against John’s current public résumé and preferences. Confirm current employer/role, location, education status, links, titles, wording, and every quantified outcome before reuse.
- Resolve stale time-sensitive facts. In particular, replace `Expected June 2026` with the accurate completed degree status or current expected date before treating the About page as final.
- Obtain and approve a compact content packet: a one-sentence homepage lede, a two-to-three-paragraph About narrative in John’s voice, three selected-impact descriptions, and the desired email/LinkedIn contact emphasis.
- Obtain one complete original writing post: title, description, publication date, reading time, and reviewed paragraph body. The author owns the point of view and factual claims; AI assistance, if used, is limited to research, outlining, editing, and fact checking.
- Decide whether a public headshot is available. If so, approve one web-ready derivative with the right to publish and a descriptive alt text. If not, explicitly choose the text-only hero variant.
- Decide separately whether a web-safe downloadable résumé is ready. It is optional for Stage 4; continue to use LinkedIn if it is not. Do not expose the source résumé because it contains private contact information.

**Done when**

- Every statement and asset needed for the visitor-facing pages is approved, and each unavailable item has an intentional no-placeholder fallback.

## 4.2 - Normalize the approved content in the existing local model

**Purpose:** Keep facts and copy editable without scattering them through page components.

**Status:** Complete for the current approved content model. The homepage lede and verified experience dates are centralized; Writing now exposes only published records, with the first post awaiting owner review.

**Work**

- Extend the existing site-content data only as needed to hold approved homepage and About copy. Page components should render that content rather than own long-form prose.
- Update the selected-impact and timeline entries from their approved source. Keep each highlight focused on the problem or outcome, omit confidential implementation detail, and retain only technology labels that are safe and useful to visitors.
- Replace the `coming-soon` writing record with one `published` record in `src/content/writing.ts`. Use a canonical ISO publication date (`YYYY-MM-DD`) and a human-readable reading-time label; the list and article route remain driven by the same record.
- Keep the first article as the current paragraph array unless the approved article genuinely needs richer structure. Add a small typed content extension only for required headings, lists, or links—do not add Markdown parsing or a general-purpose rich-text system.
- Filter the Writing index and homepage teaser to published posts. Unpublished drafts must have no public route, index listing, or generated metadata.

**Done when**

- The approved identity, experience, and published-post data each have one clear source of truth, and no page displays a `coming-soon`, `pending`, or deferred-content message.

## 4.3 - Complete the homepage visitor journey

**Purpose:** Make the first screen and scroll clearly answer who John is, why his work matters, and what action a visitor can take.

**Status:** In progress. The text-only hero, direct email action, verified impact highlights, and writing-publication hook are implemented. The section becomes complete after the approved first Writing post is added.

**Work**

- Replace the current generic hero lede with the approved, specific one-sentence introduction. Keep the existing role and location eyebrow only after verifying both remain current.
- Make the primary hero action a direct contact path (`mailto:`) and retain LinkedIn as the secondary professional path. Use clear action labels such as “Email John” rather than generic link text.
- If an approved headshot exists, add only the optimized public derivative with Next’s image tooling, explicit dimensions, and meaningful alt text. If no image is approved, remove the pending headshot panel and use a balanced text-only hero; never ship the current placeholder.
- Retain three selected-impact highlights as the homepage’s featured work. Present the approved outcomes in the existing editorial format; do not add confidential screenshots, fabricated case studies, or separate project pages in this stage.
- Replace the Writing teaser’s provisional heading, metadata, and link with the published post’s factual title, date/reading time, description, and an unambiguous link to the article.
- Keep the footer’s professional links accurate and ensure contact paths are consistent across the hero and footer.

**Done when**

- A first-time visitor can identify John’s focus, see credible evidence of impact, open one original post, and contact him from the homepage.

## 4.4 - Complete the About page

**Purpose:** Add the personal context that the concise homepage intentionally leaves out.

**Status:** Complete. The owner-approved first-person narrative, verified education, and selected experience timeline are rendered from shared content sources.

**Work**

- Replace the deferred narrative with the approved personal story in John’s own voice. It should connect background, interests, and current engineering direction without duplicating every homepage highlight.
- Retain education and the selected experience timeline, correcting current status, chronology, titles, and any date language during the factual review.
- Use the current heading hierarchy: one page-level `h1`, then section-level `h2` headings. Keep the page readable at the existing standard content width and avoid decorative content that does not add information.
- Link only to public professional destinations already approved in site content. A résumé download remains absent unless a separately approved web-safe PDF exists.

**Done when**

- The About page reads as a finished, accurate introduction rather than a résumé dump or a placeholder.

## 4.5 - Publish the first Writing entry

**Purpose:** Demonstrate the site’s point of view with one genuine, fully reviewed piece rather than a generic content feed.

**Status:** Complete. An owner-directed first-person article is published from the local typed-content source.

**Work**

- Render the approved post from the typed local record on `/writing/[slug]`; retain static generation and the existing article metadata path.
- Ensure the article page presents a title, date, reading time, lede, readable body, and an accessible return link to Writing. Add semantic sections only if the approved body needs them.
- Update the Writing index introduction so it describes the actual published collection, not a future promise. With one post, show one focused entry rather than an empty feed or artificial categories.
- Review title, description, canonical path, and social metadata generation for the published route. Unpublished content must receive no searchable page.
- Confirm the article’s outbound links, factual claims, and attribution are accurate before publication. Do not publish AI-generated opinions as John’s writing.

**Done when**

- The Writing index and its single article route are complete, accurate, and useful without exposing a draft or placeholder.

## 4.6 - Refine responsive composition and interaction

**Purpose:** Ensure real content fits the Stage 3 system and remains usable across the first-release device range.

**Status:** Complete for the approved text-only hero. Navigation and footer links have touch-friendly hit areas; phone-specific spacing preserves the content hierarchy without a menu or added dependencies.

**Work**

- Add only the CSS needed for the approved content states: a text-only or image hero, longer About prose, populated impact cards, and a real article. Reuse tokens, content widths, rules, typography, and existing editorial primitives before creating new abstractions.
- Keep the three-link primary navigation visible and keyboard-accessible at narrow widths; do not add a menu button unless the real content demonstrably requires one.
- Preserve visible focus styles, skip navigation, reduced-motion behavior, logical document headings, readable line length, and no-horizontal-overflow constraints.
- Avoid adding motion or dependencies in this stage unless a concrete interaction needs them. `motion` remains removable if Stage 5 does not justify it.
- Review the image-less hero and image-present hero separately if a headshot is optional, so either approved state has intentional spacing and hierarchy.

**Done when**

- Home, About, Writing, and the article route are readable and navigable at common phone, tablet, and desktop widths with no clipped content or layout placeholder.

## 4.7 - Verify content, quality, and the Stage 4 checkpoint

**Purpose:** Treat public content as release-critical and leave a stable baseline for visual refinement.

**Status:** Ready for PR review. The feature branch `codex/stage-4-core-experience` holds the verified checkpoint; complete the remaining real-device, text-zoom, and deliberate error-state checks before launch.

**Work**

- Perform a final line-by-line public-content review against approved sources, including employer names, role titles, education status, metrics, dates, contact links, image permission, and article claims.
- Review all paths: `/`, `/about`, `/writing`, the published post URL, a nonexistent post URL, the 404 page, and the recoverable error UI. Confirm no placeholder wording remains in visitor-facing routes.
- Test keyboard navigation, skip-link focus transfer, external-link behavior, mailto actions, mobile navigation, text zoom, and reduced-motion settings.
- Review at real phone width and common desktop width. Use a physical device or a reliable device emulator; the Stage 3 browser-session mobile override was not reliable enough for this sign-off.
- Run `pnpm check` and `pnpm build`, inspect the production output, and review the final Git diff for private files, raw assets, accidental environment files, or generated build output.
- Work on `codex/stage-4-core-experience` from the current `origin/main`. Create focused commits for content/data, route and layout updates, and the verification/documentation checkpoint as appropriate; open a PR into `main` and rebase-and-merge after review.

**Done when**

- The completed site runs locally, all public copy and assets are approved, quality checks pass, the working tree contains only intended changes, and the Stage 4 PR is ready for review.

## Decisions deferred until later

- A downloadable web-safe résumé and the final decision to surface it in navigation.
- Project detail pages, demos, screenshots, and portfolio case studies.
- Additional writing posts, categories, tags, search, or RSS.
- Motion treatments, major visual exploration, and final imagery beyond an approved headshot.
- Automated accessibility/performance auditing, analytics, contact-form infrastructure, Vercel configuration, domain selection, and production deployment.

## Stage 4 definition of done

- Home has approved introduction, selected impact, an original Writing teaser, and a direct contact action.
- About contains approved narrative, accurate education, and an accurate selected timeline.
- Writing contains one reviewed, published original post with complete index and article views.
- No visitor-facing placeholder, unpublished route, raw private asset, or unapproved claim remains.
- The real-content layouts work at phone and desktop widths with keyboard and reduced-motion paths intact.
- Formatting, linting, type checking, and the production build pass before the Stage 4 PR is opened.
