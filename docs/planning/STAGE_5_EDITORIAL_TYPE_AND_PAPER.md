# Stage 5 Direction 1: Editorial Type and Paper

## Decision

Adopt the **Editorial engineering** direction for the Stage 5 refinement pass.

The site will remain structurally simple and text-first. Its personality will come from a warm paper surface, an editorial serif for display and reading, and a compact monospace system for operational labels and metadata. The goal is a composed engineer’s notebook, not a magazine redesign or a nostalgic browser-default page.

## Intended visual language

### Typography roles

- **Editorial serif:** Use **Newsreader** for page titles, major section headings, ledes, summaries, Writing titles/descriptions, article body copy, and ordinary links. Its job is warmth and reading character across all normal reading text.
- **Technical mono:** Keep Geist Mono for dates, locations, technology labels, all-caps navigation, and small metadata. Its job is structure, not decoration.
- **Fallbacks:** Define sensible system serif, sans, and monospace fallbacks so content remains stable while fonts load. Do not use literal Times New Roman as the intended face; the reference is its editorial familiarity, not browser-default styling.

### Material and color

- Shift the primary background from stark near-white to a restrained warm-paper color. Begin with `#F4F0E8` as the working page background.
- Use a slightly lighter paper surface only when a grouped element needs separation; do not introduce cards merely to show a second color.
- Keep body text as softened ink rather than pure black, targeting a high-contrast near-black such as `#1D1B18` after contrast verification.
- Retain the existing muted rule color and deep-blue interactive accent, retuning them only if they lose contrast against the warmer paper.
- Do not add sepia washes, textured backgrounds, gradients, grain, or faux paper effects. The warmth should be perceptible without competing with content.

### Layout character

- Preserve the existing disciplined grid, thin rules, broad whitespace, direct email action, and intentionally text-only hero.
- Let headings receive the serif’s contrast and scale; avoid applying display styling to every label, card title, or navigation item.
- Keep the homepage fast to scan. The type shift should make the page more authored, not make a recruiter read more to understand it.
- Let long-form Writing benefit most from the new serif, with comfortable measure and line height. Article metadata remains compact and technical.

## Scope and guardrails

- This direction changes visual hierarchy and material, not factual content, the information architecture, or Stage 4’s owner-approved voice.
- No approved headshot or project imagery currently exists. The text-only hero is therefore the final baseline; do not invent, generate, or use stock imagery to compensate.
- Do not replace all type with a serif. Keep operational labels, all-caps navigation, technical metadata, and compact utility controls in Geist Mono so the site retains a clear functional contrast.
- Do not introduce a new visual direction, dark mode, cards-heavy layout, large illustrations, scroll effects, parallax, or entrance animation as part of this pass.
- Preserve semantic HTML, keyboard focus, skip navigation, touch target sizing, text zoom resilience, and `prefers-reduced-motion` support.
- Before modifying application font code, read the relevant Next.js 16 local documentation as required by `AGENTS.md`; follow its current font-loading guidance rather than relying on older Next.js conventions.

## Implementation sequence

## D1.1 - Capture and evaluate the current baseline

**Purpose:** Ensure the direction answers the observed problem—neutral type and stark surface—without disturbing parts of the site that already work.

**Status:** Complete on September 2, 2026. Temporary local screenshots were reviewed at 375 px, 768 px, and 1440 px; no screenshot artifacts are part of the repository or public bundle.

**Work**

- Capture Home, About, Writing index, article, and 404 at representative phone, tablet, and desktop widths before changes.
- Record the current type roles, body measure, heading scale, rule rhythm, link contrast, navigation density, and page-background color in one short implementation note or PR description.
- Compare Home and About specifically. Their shared “John Kim” treatment should stay visually consistent unless one page’s different placement strengthens its distinct reading purpose.
- Establish a small acceptance set: the first mobile screen communicates identity and email action; selected-impact text remains easy to scan; the article is more comfortable to read; metadata still looks operational rather than literary.

### Baseline findings

- All reviewed routes—Home, About, Writing, and the published article—use Geist for both body copy and page-level headings. The mono metadata system provides structure, but there is no contrasting editorial reading voice yet.
- The current background computes to `#F6F4EF`. It is subtly warm but close enough to off-white that the overall material impression remains stark beside the large near-black sans headings. The selected `#F4F0E8` candidate should be evaluated as a modestly deeper, warmer shift rather than a sepia redesign.
- At 1440 px, page-level headings render at 115.2 px; at 768 px, 61.44 px; and at 375 px, 52 px. The scale is clear and creates a useful foundation for a serif display role, but it must be retuned against the different Newsreader metrics rather than copied unchanged.
- No horizontal overflow was observed at 375 px, 768 px, or 1440 px on the four reviewed routes. This is a regression guard for the typography work.
- The 375 px header wraps into two intentional rows with a 129 px total height. New fonts must not create wrapping, target-size, or focus-state regressions in this compact navigation state.
- Home and About currently use the same large `John Kim` placement and scale. That repetition reads as deliberate at the baseline, so the refinement should preserve it exactly unless a clearly more distinct About composition is intentionally designed and reviewed.

### Acceptance criteria for the Direction 1 pass

- The first mobile screen still communicates John’s name, role framing, and direct email path without a longer header or clipped headline.
- The homepage remains quick to scan; a serif adds character to editorial moments without turning impact summaries, actions, or navigation into dense reading text.
- The article gains a noticeably calmer long-form reading rhythm, while dates, technology labels, and navigation retain their compact technical role.
- The warmer surface is visible across routes but body text, muted metadata, rules, links, focus states, and error UI retain accessible contrast.
- Home and About remain intentionally aligned in identity treatment, or any difference is large enough to communicate a different page purpose.

**Done when**

- The team has a visual baseline and concrete acceptance criteria for the new direction. **Complete.**

## D1.2 - Add the font with an explicit role system

**Purpose:** Introduce editorial character without creating a loading, performance, or consistency regression.

**Status:** Complete on September 2, 2026. Newsreader and Geist Mono are each loaded once in the root layout through `next/font/google`; Newsreader uses the Latin subset, variable weight, `swap` behavior, and a Georgia/Times New Roman/system-serif fallback chain. Next.js self-hosts the resulting font assets.

**Work**

- Verify Newsreader’s current availability, license, supported weights/styles, subset options, and compatibility with the project’s installed Next.js font tooling. If it cannot meet the project’s loading or licensing requirements, use **Source Serif 4** as the fallback candidate and document the reason.
- Load only the weights and styles actually used. Prefer regular body text and one deliberate display weight; do not request a broad font family “just in case.”
- Expose the serif, existing sans, and mono fonts as clearly named CSS variables from the application layout. Keep type role selection in global styles rather than repeating arbitrary `font-family` declarations across components.
- Apply the serif first to Writing article title, description, and body. Then test it on page and major section headings. Retain sans UI for navigation, actions, impact summaries, and footer.
- Tune font size, line height, letter spacing, and maximum reading width for the serif. Do not rely on the existing sans metrics; each font needs a deliberate reading setting.
- Test an unloaded/slow-font state through browser tooling if possible. The fallback stack must retain a stable hierarchy and avoid a disruptive layout shift.

### Implemented roles and review result

- `--font-newsreader` and `--font-geist-mono` are exposed from the root layout. `--font-editorial`, `--font-display`, and `--font-reading` resolve to Newsreader; `--font-metadata` resolves to Geist Mono.
- Page titles, major section headings, ledes, summaries, Writing list titles, selected-impact titles, and normal reading copy use the editorial role. Navigation, all-caps labels, technical metadata, and compact utility controls retain Geist Mono.
- The Writing article lede and paragraph body use Newsreader at a dedicated 17 px / 1.72 reading rhythm. The rest of the site uses the same editorial face at its existing role-specific sizes and line heights, so short supporting sentences no longer abruptly switch type systems.
- The root-layout font loader makes the serif available to all routes and lets Next generate self-hosted assets with its automatic fallback metrics. The explicit CSS serif repetition was intentionally avoided so the generated fallback chain stays the single source of truth.
- Local review confirmed the new display and article roles at 1440 px and the published article at 375 px. The article title remains two lines on phone, its 335 px reading column has no horizontal overflow, and the compact header remains unchanged.

**Done when**

- Each typographic role has one clear purpose, uses only necessary font files, and remains readable before and after the web font is available. **Complete.**

## D1.3 - Establish the warm-paper token set

**Purpose:** Replace the stark white surface with a calmer material feel while maintaining accessibility.

**Status:** Complete on September 2, 2026. The global palette now uses `#F4F0E8` paper, `#FBF7EF` reserved surface, `#1D1B18` ink, `#5F5B54` muted ink, and `#D6CFC3` rules. The existing deep-blue interactive palette remains accessible on the warmer paper.

**Work**

- Add named global tokens for page paper, any needed raised paper surface, ink, muted text, rules, selection, focus, and interactive accent. Avoid raw color literals inside component rules.
- Use `#F4F0E8` as the initial page-paper candidate and compare it with one nearby lighter alternative only if needed. Select the final value by viewing it next to the new serif in the actual page layouts.
- Recheck body text, muted metadata, link, hover, visited/focus, rule, selection, and error-state contrast against the selected paper. Preserve or improve current accessible contrast; “warmer” is never a reason to make metadata disappear.
- Ensure the warm background applies consistently to page, error, not-found, and generated image-adjacent UI where appropriate. The generated social image and application icon are separate assets; change them only if an intentional brand alignment is approved.
- Confirm browser and system form-control defaults do not reintroduce a stark white rectangle if any controls exist in the reviewed paths.

### Implemented tokens and verification result

- `--canvas` is now `#F4F0E8`, a modestly deeper and warmer shift from the Stage 4 `#F6F4EF` rather than a yellowed or textured effect. `--surface` is `#FBF7EF` and remains reserved for the few states that need an elevated paper color.
- Ink, muted text, and rules were warmed together so the system reads as one material: `#1D1B18`, `#5F5B54`, and `#D6CFC3` respectively. Selection now has a named token rather than a raw one-off color.
- The deep-blue link, hover, and focus colors remain `#1C4E80`, `#11385F`, and `#2D6BA4`. Against the new canvas, measured contrast is approximately 15.1:1 for ink, 5.9:1 for muted text, 7.5:1 for the primary accent, 10.5:1 for the hover accent, and 4.9:1 for the focus ring.
- The generated Open Graph image and application icon now use the same paper, ink, muted, and accent values as the site. No new image assets were added.
- Local review confirmed the final background color at desktop Home and phone Writing. Neither route has horizontal overflow, and the phone Writing page retains readable muted text and visible link treatment.

**Done when**

- The warmer palette feels intentional across all routes, with readable ink, clear interactive states, and no accidental white islands. **Complete.**

## D1.4 - Recompose headings and long-form reading

**Purpose:** Use the new material and type contrast to strengthen—not obscure—the existing content hierarchy.

**Status:** Complete on September 2, 2026. The shared Home/About identity treatment is retained, editorial headings use optical sizing with balanced wrapping where appropriate, and the Writing article has a dedicated compact title scale and 40 rem body measure.

**Work**

- Tune Home’s eyebrow, title, lede, section headings, impact titles, Writing preview, and contact area as a single reading sequence. The serif should identify major editorial moments; the sans should preserve quick scanning.
- Align the About title and opening narrative with the Home identity treatment. Use the same placement if the two pages are performing the same job; if About is intentionally more narrative, make the difference obvious through content width and prose treatment rather than a small accidental offset.
- Give the Writing index an editorial introduction and make the single post prominent without making it look like a promotional card.
- Tune article title width, description, date/reading-time metadata, body width, paragraph spacing, and return link for sustained reading. Keep the article compact enough for its current length.
- Review rules, whitespace, and section transitions after the type change. Serif display text has different visual weight, so existing spacing values may need small system-level adjustment.
- Do not rewrite approved copy just to fill a new composition. Change layout and type before changing content; propose any substantive editorial edit separately.

### Implemented composition and review result

- Newsreader now includes its optical-size axis and editorial headings explicitly use `font-optical-sizing: auto`. This gives display and reading text appropriate proportions at their distinct sizes without adding a second serif or new component styles.
- Page and section headings, Writing list titles, and selected-impact titles use balanced wrapping to avoid arbitrary short final lines. Home and About continue to share the same `John Kim` placement and display scale; their difference comes from the page purpose and supporting content, not a slight accidental shift.
- The article lede uses a more natural line-break strategy, while its body is capped at 40 rem (640 px at the reviewed desktop width), with its existing 17 px / 1.72 rhythm retained for sustained reading.
- Article titles have their own responsive maximum of 6.5 rem rather than inheriting the broader page-display maximum. This preserves a two-line desktop title inside the reading column and retains the intentional two-line title at 375 px.
- A first attempt to balance article-title wrapping produced an unnecessary three-line desktop title. It was rejected during local review; the final article title uses `text-wrap: pretty` at its dedicated scale instead.
- Following visual review, the Home and Writing-index ledes also use the editorial serif. They now read as a natural continuation of their headings, while all-caps navigation and metadata remain in Geist Mono for functional contrast.
- Desktop About and the Writing article were visually reviewed after the refinement. All core routes were then checked at 375 px; none overflow horizontally.

**Done when**

- Headings provide clear editorial hierarchy, article text is noticeably more comfortable to read, and no page feels like mixed template styles. **Complete.**

## D1.5 - Preserve restrained interaction feedback

**Purpose:** Keep the site responsive and alive without turning the visual refinement into an animation project.

**Status:** Complete on September 2, 2026. The unused `motion` dependency and its transitive packages were removed. The only remaining movement is 140 ms CSS feedback for links and the skip link, with the existing reduced-motion override preserved.

**Work**

- Retain quick CSS feedback for links and buttons only where it clarifies hover, focus, pressed, or active state.
- Re-evaluate contrast and underline behavior against the warm paper; links must remain identifiable without hover.
- Do not add `motion` merely because the design is being refined. If no concrete interaction requires it, remove the unused package under the Stage 5 cleanup task.
- Verify `prefers-reduced-motion: reduce` leaves every interaction complete and usable, with no hidden state dependent on a transition.

### Implemented decision and review result

- The dependency audit found no `motion` or `framer-motion` imports. `motion`, `framer-motion`, `motion-dom`, and `motion-utils` were removed from the lockfile; the project no longer carries an animation library without a concrete interaction need.
- The only retained timing token is `--motion-fast` (140 ms). It serves two useful feedback paths: link color/underline response and the skip link’s focus reveal. Unused standard and slow timing tokens were removed.
- No entrance animation, scrolling effect, autoplay, transform-based decoration, or state that depends on transition completion was introduced.
- The reduced-motion rule remains global: it disables smooth scrolling and reduces animation and transition duration to 0.01 ms. The local browser’s OS preference could not be programmatically enabled, so the active reduced-motion render remains a real-device/Stage 6 confirmation rather than an unverified claim.

**Done when**

- Interaction feedback is subtle, accessible, and useful; no decorative motion or unjustified animation dependency remains. **Complete for the Stage 5 implementation.**

## D1.6 - Validate the candidate and prepare review

**Purpose:** Confirm that the direction improves the real site rather than only looking attractive in a single screenshot.

**Status:** Complete for the local Stage 5 candidate review on September 2, 2026. The final type-and-paper system was checked at representative desktop, tablet, and phone widths, along with route, keyboard, link, and build verification. OS-controlled preferences remain explicit Stage 6 real-device checks.

**Work**

- Re-capture the 5.1 routes at phone, tablet, and desktop widths and compare directly with the baseline. Review first-screen hierarchy, line breaks, role contrast, page warmth, article comfort, link visibility, and consistency between Home and About.
- Test at 200% text zoom, reduced motion, keyboard navigation, skip-link focus transfer, external links, mailto links, no-horizontal-overflow behavior, and the 404/error states.
- Use a real phone or reliable device emulator for the final narrow-layout pass. Check that serif rendering, font loading, touch targets, and multi-line headings remain intentional.
- Run `pnpm format:check`, `pnpm check`, `pnpm build`, and `git diff --check`. Review the public asset list, staged diff, ignored files, and font/dependency changes before opening a PR.
- Document the final font family/weights, token values, deferred assets, and any rejected alternatives in the PR description or Stage 5 completion audit.

### Verification record

- Home, About, Writing, the published article, and the nonexistent Writing route were checked at 375 px, 768 px, and 1440 px. Each route rendered its expected page-level heading and had no horizontal overflow.
- Final visual review covered desktop Home, desktop About, desktop article reading, phone Writing, and phone article layouts. The chosen result keeps a serif-led editorial hierarchy, warm paper, compact metadata, and the text-only hero without introducing imagery or visual clutter.
- Keyboard activation of the skip link moved focus to `#main-content` and updated the location hash as intended. LinkedIn and GitHub links use `target="_blank"` with `rel="noreferrer"`; the direct email path remains present on Home.
- The 404 path renders the intended not-found page. The recoverable error component was statically reviewed, but intentionally causing a runtime error is deferred to the Stage 6 launch-quality pass so it can be tested in a controlled error scenario rather than by adding a shipping test hook.
- A controlled local browser does not expose reliable OS-level reduced-motion, high-contrast, or actual 200% text-zoom emulation. Narrow 375 px layouts, responsive type wrapping, `text-size-adjust: 100%`, and the reduced-motion CSS override were verified locally; confirm actual system preferences and 200% text zoom on a real device/browser in Stage 6 before launch.
- The final review must still run `pnpm format:check`, `pnpm check`, `pnpm build`, and `git diff --check` after this documentation update, then inspect the public asset and staged-file lists before opening the Stage 5 PR.

**Done when**

- The selected type-and-paper direction is verified across representative viewports and interaction modes, all quality gates pass, and the resulting Stage 5 change is ready for review. **Complete for local review, with the recorded Stage 6 device-preference checks remaining.**

## Definition of done

- Newsreader (or the documented fallback) is used for display and normal reading; Geist Mono retains a purposeful operational-label and metadata role.
- The paper background is perceptibly warmer than the Stage 4 surface without becoming sepia, textured, or low contrast.
- Home, About, Writing, and the article feel like one design system, including intentional repeated identity placement.
- The article has a comfortable serif reading experience; quick-scanning content remains clearly sans/mono-led where appropriate.
- No new placeholder imagery, private asset, unapproved claim, unnecessary motion, or browser-default Times New Roman treatment is introduced.
- Desktop, tablet, phone, and keyboard checks pass alongside formatting, lint/type checks, and the production build. Actual 200% text zoom and active system reduced-motion checks remain explicit Stage 6 real-device confirmations.
