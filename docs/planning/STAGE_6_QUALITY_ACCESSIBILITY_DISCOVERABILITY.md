# Stage 6: Quality, Accessibility, and Discoverability

## Goal

Turn the Stage 5 release candidate into a trustworthy production build. This stage verifies that the site is understandable and operable for real visitors, remains fast on ordinary devices and connections, and exposes complete, accurate metadata to browsers, sharing surfaces, and search engines.

It is a verification-and-remediation stage, not an opportunity to expand the product. A defect found here should be fixed at its smallest useful boundary, then re-tested through the affected visitor path.

## Starting point

- The public surface is intentionally small: Home, About, Writing, one or more published article routes, a not-found page, and a recoverable error boundary.
- Site copy and career claims live in typed local content files. Public assets, if any, are approved, safe to publish, and live in `public/`.
- The shared layout already provides a skip link, visible focus treatment, `lang="en"`, a semantic `main` landmark, generated app icon, generated Open Graph image, root metadata, `robots.ts`, and `sitemap.ts`.
- `SITE_URL` is optional for local work and preview deployments. It becomes required when validating the final production origin because it determines absolute metadata URLs, the sitemap contents, and the sitemap reference in `robots.txt`.
- The repository's required baseline commands are `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, `pnpm check`, `pnpm build`, and, after a build, `pnpm start`.

## Scope and guardrails

Stage 6 may correct public markup, styles, metadata, content modelling, configuration documentation, and asset delivery when a check identifies a concrete defect. It does not add a CMS, analytics, a contact-form service, authentication, a database, project-detail pages, a custom domain purchase, or a production deployment.

- Preserve Stage 4 and Stage 5 factual, privacy, and asset-approval decisions. Do not solve a discoverability issue by publishing a private résumé, unapproved photo, internal screenshot, or confidential project detail.
- Use semantic HTML and native controls before introducing a new dependency. Add automated tooling only when it gives a repeatable check that the existing commands cannot provide; document why it is needed and keep it narrowly scoped.
- Treat accessibility and performance as release requirements, not optional polish. Do not trade keyboard access, readable contrast, text reflow, or a stable layout for an aesthetic effect.
- Do not index incomplete, draft, private, or intentionally unavailable content. A route that should not be public must be absent from internal links, sitemap entries, and generated metadata.
- A preview deployment may use its provider URL for visual and functional testing, but it is not the canonical public origin. Do not set `SITE_URL` to a temporary preview URL as a substitute for the final domain decision.
- Keep fixes reviewable and localized. A new issue discovered during a test does not authorize unrelated visual redesign or content expansion.

## Entry criteria

Begin the full Stage 6 pass only after Stage 5 has a content-complete release candidate.

- All intended public copy, writing, external destinations, and assets have owner approval.
- The application installs reproducibly from `pnpm-lock.yaml` and the Stage 5 checks pass locally.
- A reliable desktop browser and either a physical phone or dependable device emulator are available for the final interaction pass.
- The reviewer has a final-domain decision or records the limited preview-only outcome and leaves canonical-origin validation for Stage 7/8. A production launch cannot pass without the final origin.

## Recommended order

Perform the following sections in order. Start with the release inventory and production build so later browser, assistive-technology, and metadata checks apply to the exact artifact intended for deployment.

## 6.1 - Freeze the release inventory and configuration contract

**Purpose:** Establish exactly what is being evaluated and eliminate configuration ambiguity before testing.

**Status:** Complete locally. The working-tree candidate was reviewed on 2026-09-02 with Node `v24.20.0`, pnpm `11.24.0`, and base commit `f208f4f`. The final production domain remains intentionally undecided, so final-origin validation is deferred to the hosted preview/launch handoff.

**Work**

- Record the candidate commit, Node/pnpm versions, review date, supported browser/device contexts, all intended public routes, and any approved public assets. Do not include private source material in the record.
- Confirm the route inventory at minimum includes `/`, `/about`, `/writing`, every published `/writing/[slug]` route, one deliberately nonexistent path, and the recoverable error state. Add a route only if the application actually exposes it.
- Inspect `src/content/writing.ts` and its route generation so that published posts, not drafts, determine article paths and metadata. Confirm every published post has a stable slug, title, description, ISO date, reading-time label, and reviewed body.
- Review `.env.example`, `README.md`, `src/lib/site-url.ts`, and metadata consumers together. Document the one canonical production value: `SITE_URL=https://final-domain.example`, without a path, credentials, query string, or trailing route. Keep it server-only; it is not a secret and does not need a `NEXT_PUBLIC_` prefix.
- Test missing, valid, and malformed `SITE_URL` values in a controlled local build. Metadata generation must not crash or silently advertise a malformed canonical origin. If validation is inconsistent across `metadataBase`, sitemap, and robots generation, consolidate it behind a validated helper and document the behavior.
- Confirm deployment-only assumptions—Node version, build command, output mode, image runtime requirements, and environment variable names—are represented in repository documentation or will be recorded as a Stage 7 handoff. Do not add host-specific configuration that has not been selected.

**Result**

- The route inventory is `/`, `/about`, `/writing`, `/writing/keep-testing-the-tools-you-use`, an unknown path, an unknown article slug, and the local recoverable error boundary.
- `SITE_URL` now accepts only a final HTTPS origin without credentials, a path other than `/`, a query string, or a fragment. The shared metadata-base helper uses that same validation, so malformed or preview-only values cannot make `metadataBase` disagree with sitemap and robots output.
- The documented production command is `pnpm build` (webpack), with `pnpm start` serving the artifact. There is no hosting-specific configuration before Stage 7.

**Done when**

- There is a small, accurate release inventory and one documented rule for the production origin, with no disagreement between application metadata and deployment configuration.

## 6.2 - Run the reproducible production preflight

**Purpose:** Prove that a clean production artifact can be generated before investing in manual review.

**Status:** Complete locally. `pnpm check` passed after formatting the checklist, and the production build passed with `SITE_URL` unset, with `SITE_URL=https://example.com`, and with `SITE_URL=not-a-url` on 2026-09-02. The built app reached ready state through `pnpm exec next start --port 3001`; the repository's default `pnpm start` could not bind because an existing local Node process already occupied port 3000.

**Work**

- From the project root, run the checks in this order:

  ```bash
  pnpm format:check
  pnpm lint
  pnpm typecheck
  pnpm build
  ```

  `pnpm check` may replace the first three commands when a compact record is sufficient, but run the individual command that fails while diagnosing it.

- Resolve formatting, lint, type, build, and static-generation errors. Do not waive a warning or leave a known production error merely because the dev server renders the affected page.
- Start the completed artifact with `pnpm start` and test it separately from `pnpm dev`. The production server is the reference for route rendering, generated metadata, headers, assets, and error behavior.
- Inspect the build output for unexpected routes, failed static generation, unintentional client-side bloat warnings, missing generated metadata assets, or environment-dependent failures. Confirm all intended article slugs are present and unpublished entries are absent.
- Re-run the complete preflight after every remediation that touches routes, global CSS, metadata, assets, or configuration. Keep a concise record of the command result and commit tested.

**Result**

- Formatting, ESLint, and strict TypeScript checks pass through `pnpm check`.
- All three origin configurations generated the same successful static route inventory: Home, About, Writing, the published Writing slug, not-found, icon, social image, robots, and sitemap.
- The documented `pnpm start` command remains valid. Its port-3000 collision is an environment condition, not an application failure; no existing process was interrupted. The completed artifact was independently confirmed able to start on port 3001.

**Done when**

- Formatting, linting, strict type checking, and the webpack production build pass from the locked dependency set, and the production server renders the intended route inventory.

## 6.3 - Verify functional journeys and resilient failure states

**Purpose:** Confirm that the site's core purpose—quickly understanding John’s work and making contact—does not break in normal or recoverable failure conditions.

**Status:** Complete locally on 2026-09-02.

**Work**

- Exercise the primary journey on Home: load the page from a fresh session, understand the role framing and selected impact, open the featured Writing entry, use the direct email action, and return through normal browser navigation.
- Exercise the supporting journeys: open About from the primary navigation; open Writing; open each article; use the article return link; and reach the footer contact and professional links from every route.
- Verify every internal link resolves on the production server and every external URL, including `mailto:`, LinkedIn, and GitHub, targets the approved destination. External links that open a new tab must retain safe `rel` behavior; labels must make the destination clear without relying on an icon alone.
- Load a nonexistent route and a nonexistent article slug. Confirm that the not-found experience uses an appropriate status, explains the situation plainly, and gives a working route back into the site.
- Deliberately exercise the root recoverable error boundary in a safe local-only manner. Verify the error is reported to the console during development, the visitor sees a plain recovery action, `reset()` returns to a usable state when the condition clears, and the Home link works if retrying does not.
- Refresh direct links to Home, About, Writing, and an article. Verify browser back/forward navigation, deep-link loading, and hard reloads do not lose the route or leave an incomplete shell.
- Check that JavaScript failure or slow loading does not hide critical identity, navigation, contact links, or article text. The first-release experience should remain useful without nonessential enhancement.

**Result**

- The Home-to-article-to-Writing journey and the not-found return-home journey completed successfully in the local browser. Home, About, Writing, the published article, an unknown route, and an unknown article slug each rendered their expected primary heading and shared site shell.
- Internal links resolved to their expected local routes. The email action retained the approved `mailto:` destination, and external LinkedIn/GitHub links had descriptive labels plus `target="_blank"` and `rel="noreferrer"`; they were inspected without opening third-party destinations.
- A temporary local render error displayed the recoverable error boundary with both `Try again` and `Return home`. After the temporary error was removed, `Try again` restored the Home page. No test-only route or failure code remains.

**Done when**

- Every intended visitor journey and all expected 404/recovery paths behave clearly on the production server, with no broken, ambiguous, or privacy-inappropriate destination.

## 6.4 - Perform the accessibility acceptance pass

**Purpose:** Verify that the release works for keyboard, touch, zoom, and assistive-technology users—not merely that it has good source-level intentions.

**Status:** Complete for the local browser acceptance pass on 2026-09-02. Real-device and cross-browser confirmation remains part of the later Stage 6.7 sign-off.

**Work**

- Test each public route using keyboard only. Start from the browser chrome, use Tab and Shift+Tab, activate links with Enter, and operate buttons with Enter and Space where applicable. The visible focus indicator must remain apparent against the warm paper background and must never be clipped or obscured.
- On every route, activate the skip link and confirm focus moves to the primary `main` content. Confirm no keyboard trap, duplicate hidden focus stop, hover-only control, or unexpected focus order exists in the header, content, footer, not-found, or error UI.
- Inspect semantic structure using browser accessibility tools. Require one descriptive `h1` per page, sensible `h2` progression, native links for navigation, native buttons for actions, landmarks for header/main/footer, valid list structure for grouped content, and no clickable noninteractive elements.
- Review all imagery and generated visual metadata. Informative images need concise, context-specific alt text; decorative images need empty alt text or a CSS implementation; text represented only inside an image must also exist as HTML text. Do not use filename-like or redundant alt text such as “image of John Kim.”
- Check text and interactive color contrast at normal and hover/focus states. Meet WCAG 2.2 AA minimums: 4.5:1 for normal text, 3:1 for large text, 3:1 for meaningful graphical/UI indicators, and 3:1 for focus indicators against adjacent colors. Do not rely on color alone to communicate state.
- Test at 200% browser zoom and approximately 320 CSS-pixel width. Confirm text reflows without horizontal scrolling, overlap, clipping, fixed-height truncation, lost content, or a two-dimensional scroll requirement. Test a longer-than-usual title and link label if the content model permits it.
- Test narrow-width touch use on a real phone or reliable emulator. Navigation, email, return links, and footer links must be reachable, visually separated, and comfortably tappable; hover feedback cannot be their only affordance.
- Enable `prefers-reduced-motion: reduce` and verify the complete static experience: no unexpected smooth scrolling, delayed content, or essential information that only appears after a transition.
- Use a screen reader smoke test (VoiceOver on macOS/iOS, or an equivalent available reader) for Home and one article. Confirm the page title, language, heading outline, link names, metadata, and error/404 text form a sensible spoken sequence. Fix obvious announcement or naming defects; record any assistive-technology limitation that cannot be reproduced.

**Result**

- Keyboard testing confirmed visible focus, no horizontal movement, and skip-link transfer to `main#main-content`; subsequent keyboard movement reached the next meaningful Home action. The semantic accessibility tree exposed one header, main, footer, correctly named primary/professional navigation landmarks, an English document language, named links, and a logical Home heading outline of `h1 → h2 → h3`.
- At a 320 px viewport, Home, About, Writing, the article, and 404 had no horizontal overflow or offscreen interactive control. Header and footer controls measured 44 px high; the remaining content links are standard inline-reading links and preserve visible focus.
- The configured text and interactive colors exceed the relevant AA contrast thresholds against the canvas: ink 15.12:1, muted text 5.94:1, accent 7.54:1, accent hover 10.53:1, and focus ring 4.93:1. No image lacked an explicit alt decision, and the reduced-motion CSS safeguard is present.
- Browser accessibility-tree checks for Home and the article confirmed sensible titles, language, headings, landmarks, link names, dates, and article metadata. A full VoiceOver-on-device pass is intentionally retained for the Stage 6.7 representative-device checkpoint.

**Done when**

- Keyboard, focus, semantic, contrast, reflow, touch, reduced-motion, and screen-reader smoke tests pass on the release candidate, with no known critical barrier to the core reading or contact journey.

## 6.5 - Audit performance and asset delivery

**Purpose:** Keep the fast, text-first site responsive on ordinary mobile hardware and networks.

**Status:** Complete for the local production-build and resource audit on 2026-09-03. A scored Lighthouse audit is deferred to Stage 7 because this machine has no locally installed Chrome binary for Lighthouse to launch.

**Work**

- Run Lighthouse or an equivalent browser audit against the production server for Home, About, Writing, and one article at desktop and simulated mobile conditions. Treat the report as diagnostic evidence rather than a score-chasing target; investigate every meaningful opportunity or regression.
- Set a pragmatic initial performance budget: no avoidable render-blocking third-party scripts; no unoptimized large raster asset; no automatic video; no unnecessary client component or UI library; and no material layout shift caused by late dimensions, fonts, or inserted content. The text-first baseline should be especially light.
- Inspect actual network requests and transferred resource sizes. Confirm local fonts use the expected Next font behavior, generated icon and Open Graph routes return successfully, and no unused starter asset, source material, development-only request, or unexpected external tracker is shipped.
- If an approved raster image exists, verify its intrinsic dimensions, responsive rendering, compression, explicit display dimensions, alt decision, and appropriate use of Next image optimization. Choose the smallest asset that preserves intended quality; never ship raw camera or screenshot exports.
- Measure loading behavior with cache disabled and a throttled mobile profile. Check first content, primary navigation, first interaction, and article text; look for font flashes, layout shifts, blocked input, and long main-thread tasks.
- Make only evidence-backed improvements. Examples include removing an unused asset or dependency, reducing an image, correcting dimensions, deferring noncritical code, or simplifying an unnecessary client boundary. Re-run the affected functional and accessibility checks after each change.

**Result**

- The webpack production build is fully static for every public page, generated icon/social-image route, and the article-specific social image. The article image now uses `generateStaticParams`, avoiding a request-time image-generation route for published posts.
- The public site has no `public/` asset directory, raster content image, automatic video, third-party script, analytics package, tracker, or UI/animation dependency. The only client component is the 856-byte recoverable error UI; all public pages otherwise render through server components.
- The initial HTML preloads only the two locally hosted Next font assets it uses. The generated icon, Home social image, and article social image are valid PNG responses; their built payloads are approximately 0.9 KB, 45 KB, and 54 KB respectively. No raw photo or employer screenshot is shipped.
- Production static output totals roughly 1.24 MB before HTTP compression, including Next's shared framework/runtime, fonts, CSS, and cached route assets. Page-specific client entry chunks are 199 bytes, while the substantial shared framework assets are normal Next runtime output rather than app-added dependencies.
- A temporary production server was created solely for this audit and stopped automatically. Lighthouse 13.4.1 was fetched with `pnpm dlx` without changing project dependencies, but it could not run because no Chrome installation is available to its launcher. Re-run Lighthouse against the Stage 7 hosted preview; this is a test-environment limitation, not a known application regression.

**Done when**

- The production artifact has no avoidable heavyweight resource or layout instability, key text and navigation appear promptly under mobile simulation, and audit findings have either been resolved or explicitly assessed as non-blocking.

## 6.6 - Validate metadata, sharing, and crawler output

**Purpose:** Make each intended public URL identifiable and shareable while keeping the canonical URL and indexing rules accurate.

**Status:** Complete against a production build configured with the test origin `https://example.com` on 2026-09-03. Replace that test value with the approved final domain during Stage 7/8 deployment configuration.

**Work**

- Review root, About, Writing, and article metadata in the production response—not just TypeScript source. Each route needs a specific title and accurate description that reflects its page. The root title template must not produce duplicated names or empty title fragments.
- Validate `metadataBase` and all canonical/absolute URLs with a valid final `SITE_URL`. Test that the production origin, not `localhost`, a preview URL, or a malformed string, is used in rendered metadata and generated routes.
- Inspect Open Graph and Twitter metadata for Home and at least one article. Confirm title, description, site name, type, card choice, and image URL are correct; then open the generated `/opengraph-image` and `/icon` endpoints to check successful rendering, legible text, correct content type, and a sensible crop.
- Review page-specific article metadata. Each published post must expose its own title and description; use article-specific Open Graph type, publication date, canonical URL, and social image treatment if the current metadata model supports them. Add only the metadata needed for accurate representation, not speculative keywords.
- Request `/robots.txt` and `/sitemap.xml` from the production server. `robots.txt` should allow normal crawling of intended public routes and advertise the sitemap only when a valid production origin is configured. The sitemap must contain the Home, About, Writing index, and every published article with absolute canonical URLs—never drafts, 404 pages, error routes, previews, localhost URLs, or malformed entries.
- The current sitemap structure should be explicitly checked against the published Writing collection. If article URLs are absent, update it to derive entries from the same published-post source as the index so new approved posts cannot be accidentally omitted.
- Confirm canonical-origin and crawler decisions after any domain redirect plan is finalized in Stage 7/8. If the hosted preview must not be indexed, use the host’s documented preview protection/noindex behavior rather than committing a production-wide blocking rule.
- Do not add keyword-meta tags, fabricated structured data, alternate-language tags, or search-console verification placeholders without a clear current need. Schema markup is deferred unless it can be kept accurate and has a visitor/search purpose.

**Result**

- Home, About, Writing, and the published article now each emit an absolute canonical URL derived from `SITE_URL`. Their titles and descriptions are distinct; About and Writing also have page-specific Open Graph/Twitter titles, descriptions, URLs, and the existing generated social image.
- The article emits Open Graph `article` metadata with its publication date, canonical URL, page-specific title/description, and a static generated social image that displays the actual post title and description. The generated article image is included in both Open Graph and Twitter metadata.
- `sitemap.ts` now derives article URLs from `writingPosts`, the same typed source used by route generation and the Writing index. The validated sitemap contains exactly Home, About, Writing, and `/writing/keep-testing-the-tools-you-use`, with absolute URLs and the article publication date as `lastmod`.
- `robots.txt` allows the intended public site and points at the configured absolute sitemap. Neither crawler output includes localhost, preview, draft, error, or not-found URLs. Unknown article slugs receive `noindex, nofollow` metadata.
- Generated HTML and metadata-route output were inspected after the final build, including the icon and both social image routes. No keyword tags, speculative schema, alternate-language tags, or search-console placeholders were introduced.

**Done when**

- Every public route exposes correct, distinct metadata; generated social assets render; and `robots.txt` plus `sitemap.xml` accurately describe exactly the indexable production surface.

## 6.7 - Cross-browser and device sign-off

**Purpose:** Catch rendering and interaction defects that a single development browser does not reveal.

**Status:** Complete for the browser surfaces available locally on 2026-09-03. Final hosted-preview retests remain required for a standalone Chrome/Chromium, Firefox, and physical-phone matrix because those local applications/devices are unavailable on this machine.

**Work**

- Test the production artifact in the current stable Chrome/Chromium, Safari, and Firefox on desktop. Verify route rendering, type fallback, navigation, focus styles, link states, rules, layout widths, mailto behavior, and generated metadata endpoints.
- Test Home, About, Writing, one article, 404, and the main contact path on a real iPhone/Safari or an equivalent representative mobile browser. If Android Chrome is available, perform a concise additional pass there.
- At each target, check the first viewport, narrow/wide orientation behavior, normal and increased text size, 200% zoom where supported, no-horizontal-overflow, footer reachability, and browser back navigation.
- Record browser and device versions, the tested routes, any observed issue, severity, resolution, and the retest result. Screenshots are useful evidence but must remain outside the public bundle unless specifically approved as public assets.
- Critical defects—broken contact/navigation paths, inaccessible keyboard flow, unreadable or overlapping content, a crash, lost route, incorrect canonical origin, or unintentional indexing—block the checkpoint. Resolve high-impact visual or performance regressions before proceeding unless the owner explicitly accepts the risk.

**Result**

- The Codex in-app browser rendered Home and the article correctly at its default desktop size, with the expected title, primary navigation, heading, footer, and no horizontal overflow. A 390 × 844 representative mobile viewport rendered the article and footer without horizontal overflow.
- Safari rendered Home and the full article on `localhost:3000` with correct page titles, the complete heading/content order, primary and footer navigation, Writing metadata, and return link. No layout or navigation defect was observed in either available browser surface.
- Firefox is not installed on this machine, and Lighthouse confirmed there is no standalone Chrome installation. No physical phone is connected. Test those browser/device contexts against the Stage 7 hosted preview before launch; this is a coverage limitation, not a known product defect.

**Done when**

- The intended routes and core visitor path are signed off on representative modern desktop and mobile browsers, with no known launch-blocking issue.

## 6.8 - Produce the launch-quality record and handoff

**Purpose:** Leave a concise, reproducible decision record for the hosted-preview and launch stages.

**Status:** Complete locally on branch `codex/stage-6-quality-accessibility-discoverability`; remote push and PR creation are pending owner authorization and GitHub re-authentication.

**Work**

- Create or update a short release-checklist record in the Stage 6 PR description, release notes, or a deliberately maintained planning document. Include tested commit, date, commands run, route matrix, browser/device matrix, accessibility results, performance findings, metadata/robots/sitemap results, defects fixed, and explicitly accepted non-blockers.
- Recheck public content and Git boundaries: run `git diff --check`, inspect `git status`, review staged and unstaged changes, and verify `public/` contains only intentional public files. Confirm ignored private material, local environment files, reports, screenshots, and build output are not included.
- Re-run `pnpm check` and `pnpm build` from the final candidate commit. If code or content changed after the cross-browser pass, re-run the affected browser, accessibility, and metadata checks rather than assuming they remain valid.
- Work on a focused branch (recommended: `codex/stage-6-quality-accessibility-discoverability`) from the approved Stage 5 merge point. Use clear commits such as `Fix Stage 6 accessibility findings`, `Complete sitemap metadata coverage`, and `Document Stage 6 sign-off`.
- Open a reviewable PR into `main`. Do not force-push or overwrite remote history. The handoff to Stage 7 should state the final `SITE_URL` decision, any host-specific preview configuration still required, and any accepted non-blocker.

**Result**

- The complete Stage 6 change set was reviewed for private-file exposure, formatting, type safety, linting, production-build correctness, generated route output, and whitespace errors. `source-material/`, `.env.local`, and `.next/` remain ignored; no private résumé, local configuration, temporary report, or generated build file is staged.
- The final local verification commands are `pnpm check`, `SITE_URL=https://example.com pnpm build`, and `git diff --check`. The production build includes Home, About, Writing, the published article, icon, social-image routes, robots, and sitemap with no build error.
- Stage 7 handoff: select the final HTTPS domain and set it as `SITE_URL` only in the hosting production environment; inspect the preview in standalone Chrome/Chromium, Firefox, and on a physical phone; rerun Lighthouse against that preview; and keep preview indexing under the host's preview/noindex controls rather than changing production crawler rules.
- No accepted product defect blocks the local release candidate. The only remaining limitations are the unavailable local standalone Chrome/Firefox/physical-device coverage and Lighthouse browser binary, all explicitly assigned to the hosted-preview pass.
- The local commit is ready for review. The current GitHub CLI token for `JohnKim04` is invalid, and the remote push requires explicit confirmation that the configured GitHub remote is authorized for this repository. Re-authenticate with `gh auth login -h github.com`, then push this branch and open the PR without force-pushing or overwriting remote history.
- The verified local candidate is the branch's `Complete Stage 6 quality checks` commit. Its working tree is clean after the final check/build run.

**Done when**

- A clean, production-buildable candidate and its evidence-backed launch-quality record are ready for the hosted-preview stage.

## Exit checklist

- [x] Intended public content and assets are approved; draft/private material remains excluded.
- [x] The exact route inventory, candidate commit, supported browsers/devices, and production-origin rule are recorded.
- [x] `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass; the completed artifact has started successfully on a non-conflicting local port.
- [x] Home, About, Writing, every published article, 404, and recoverable error behavior have been tested locally, including production-build output and a local error-boundary recovery exercise.
- [x] All internal, external, email, navigation, footer, and return links have clear, verified destinations.
- [x] Keyboard order, skip link, focus visibility, landmarks, heading hierarchy, link/button semantics, alt decisions, contrast, reflow, touch use, and reduced motion pass in the local acceptance checks.
- [ ] A full VoiceOver-on-device screen-reader smoke test remains for the hosted-preview device pass. The local browser accessibility-tree smoke test is complete.
- [x] Performance/network inspection finds no avoidable heavy assets, layout shifts, trackers, or unused public resources; static mobile reflow is acceptable. Lighthouse scoring remains a hosted-preview follow-up because no local Chrome binary is installed.
- [ ] Page titles, descriptions, canonical origin, Open Graph/Twitter metadata, icon, generated social image, `robots.txt`, and `sitemap.xml` are correct for the test origin; revalidate them with the final production origin after Stage 7/8 domain configuration.
- [x] The sitemap includes all and only intended indexable pages, including every published article.
- [ ] Safari and the in-app browser pass, with a reliable mobile viewport check. Standalone Chrome/Chromium, Firefox, and a physical-phone pass remain for the hosted preview.
- [x] Git diff/privacy review is clean, final checks have been re-run after the last change, and the launch-quality record names every accepted non-blocker.

## Decisions deferred until later

- Search Console, analytics, consent management, and performance monitoring. Add them only after a live domain and a concrete question justify them.
- Structured data beyond accurate standard page metadata, a feed, search, tags, categories, or a CMS.
- Automated end-to-end, visual-regression, or full accessibility test suites. They may be valuable once the site changes often enough to justify their maintenance cost.
- A contact form, newsletter, authentication, database, and any external service integration.
- Buying a domain, configuring Vercel, choosing preview access controls, connecting DNS, redirect policy, and public production deployment; those remain Stage 7 and Stage 8 work.

## Stage 6 definition of done

- [x] The exact release candidate builds and runs in production mode with all required local checks passing.
- [ ] A first-time visitor can read the site, navigate it, open Writing, and contact John using keyboard, touch, zoomed text, reduced motion, and the complete representative desktop/mobile browser matrix. The hosted-preview Chrome/Firefox/physical-device checks remain.
- [ ] The intended public route inventory has correct functional behavior, resilient 404/error handling, metadata, social previews, crawler rules, and a complete sitemap at the **final production origin**. The implementation and test-origin output are complete; final-domain validation remains.
- [x] No critical accessibility, privacy, performance, content, routing, or discoverability defect is known at the local checkpoint.
- [x] The Stage 6 quality record makes the hosted-preview and final-launch steps reproducible, including the remaining final-domain configuration decision.
