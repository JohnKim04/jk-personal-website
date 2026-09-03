# Personal Website Project Plan

## Purpose

Create a distinctive, fast, and easy-to-maintain personal website that clearly explains who I am, shows how I think, and gives recruiters, founders, and potential collaborators an obvious way to get in touch.

This plan deliberately starts small. The first release should be an excellent public website, not a complex web application. A small Writing section will give the site an additional signal of curiosity, taste, and communication ability.

## Guiding principles

- Design from a specific visual direction, not a generic template.
- Build in small reviewable stages; approve the direction before expanding scope.
- Start with local content files rather than a database or CMS.
- Prefer fast, accessible, low-maintenance technology.
- Use a live preview before publishing to the final domain.

## Proposed first-release stack

- **Framework:** Next.js with TypeScript
- **Styling:** Tailwind CSS
- **Accessible interaction primitives:** shadcn/ui and/or Radix UI
- **Animation:** Motion, used sparingly
- **Content:** Markdown/MDX or local structured content files
- **Source control:** GitHub
- **Hosting:** Vercel

These are starting assumptions, not irreversible decisions. The stack is finalized during Stage 3.

---

## Stage 0 — Define the outcome

**Status:** Complete

**Goal:** Know what the site needs to accomplish before making visual or technical choices.

### Confirmed project brief

- **Primary audience:** Startup recruiters and recruiting agencies making candidate introductions; founders and hiring managers are also important readers. Potential collaborators are a secondary audience.
- **Target opportunities:** New-grad and junior software-engineering roles, including forward-deployed engineer roles. The search is focused on in-person roles in large cities, with San Francisco preferred.
- **Primary outcome:** Strengthen an application, referral packet, or recruiter introduction by quickly demonstrating technical ability, high agency, and ownership. The site is not primarily a lead-generation tool.
- **Secondary outcome:** Make it easy for an interested recruiter, founder, or hiring manager to contact the owner.
- **Desired impression:** High agency, high ownership, technical, and fast delivery.
- **Scope and reading experience:** Concise and immediately understandable. A reader should get the gist within a minute, then be able to selectively go deeper.
- **Launch priority:** As soon as practical. No custom domain has been purchased yet; the first hosted version can use a preview URL.

### First-release information architecture

- **Home:** A concise introduction, clear role direction, selected evidence of work/experience, a small Writing preview, and contact links.
- **About:** A slightly deeper personal and professional narrative, with résumé, LinkedIn, GitHub, and contact links as appropriate.
- **Writing:** A lightweight index and article layout, initially with one original, reviewed post. It should support the application story without becoming a high-volume blog.

There is no need for separate Work, Contact, CMS, login, or project-detail pages in the first release. If useful, selected work can appear as concise sections on the Home page and link outward to GitHub, a résumé, or a future case study.

**Deliverable:** A one-page project brief and an agreed first-release scope. **Complete.**

**Checkpoint:** No building until the primary visitor and primary call to action are clear. **Complete.**

## Stage 1 — Gather content and references

**Status:** Complete for the initial build

**Goal:** Collect the raw material that makes the site personal and credible.

### Content inventory

**Ready**

- **Identity and location:** John Kim; San Francisco.
- **Contact:** johnkim6144@gmail.com.
- **Professional links:** LinkedIn and GitHub are listed in the supplied résumé.
- **Education:** B.S. in Computer Science with a minor in Statistical Science, University of California, Santa Barbara; expected June 2026; 3.94 GPA.
- **Current experience:** Software Engineer at Coinbase in San Francisco. Relevant proof points include a cloud-cost anomaly-detection platform, an anomaly-resolution portal that reduced repetitive alert noise by 70%, telemetry validation controls, and an MCP for FinOps and internal AI clients.
- **Previous experience:** Software Engineering Intern at Shopify, including large-scale codebase refactoring, Checkout Web bug fixes, and a split-checkout frontend contribution associated with an 8% completion-rate increase.
- **Previous experience:** Software Engineering Intern at Coinbase, including an Investment Control Center, a Slack-to-MongoDB/S3 pipeline, LLM-based metadata extraction, and measurable review-workflow improvements.
- **Additional evidence:** 2430 Group internship and SwipeRank, an ACM first-place project built with Go, MongoDB, and React.

**Still needed or intentionally deferred**

- Headshot or decision to launch without one.
- A short personal/professional narrative in John's own voice for the About page.
- Two or three design-reference sites, with notes on what to borrow from each.
- Writing-topic shortlist and the first article draft or outline. Placeholder content is acceptable while the site shell is built.
- Optional project screenshots, demos, or links that can make the selected experience more concrete.

### Confirmed reference direction

**Technical editorial** is the chosen direction. It should feel like a strong engineer's clear point of view: type-led, calm, precise, and quickly scannable by a recruiter.

Reference sites to study for individual qualities, not to copy:

- **Richard Ekwonye:** large-scale typography, a warm-neutral/ink palette, strict grid, and generous whitespace.
- **Enjeck:** the useful combination of engineering work, writing, and personal projects in one coherent home.
- **Mahendra:** direct professional positioning and low-friction access to résumé, GitHub, LinkedIn, and email.

The implementation should avoid a template-like dashboard, glassmorphism, gradient glows, 3D/particle backgrounds, excessive rounded cards, and scroll effects that make a recruiter wait to understand the content.

**Gather:**

- Bio, résumé, contact details, social links, and headshot if desired.
- Project/case-study material: screenshots, roles, outcomes, links, and short descriptions.
- Brand assets: logo, colors, photography, illustrations, or existing writing.
- A short list of writing ideas, notes, links, or past material that could become posts.
- Two or three reference websites, with notes on exactly what is appealing about each.

**Deliverable:** A content inventory that identifies what is ready, missing, or needs rewriting. **Complete for the initial build; the résumé and core career evidence are captured, and deferred items are documented.**

**Checkpoint:** Confirm that each intended page has enough content to be useful. **Complete for the initial build.** The Home page can be planned now; the About and Writing pages will use intentional placeholders until their final copy and assets are ready.

## Stage 2 — Establish the design direction

**Status:** Complete

**Goal:** Turn references and content into a cohesive visual language rather than an AI-looking collage.

### Approved visual direction: technical editorial

The site should present John as an engineer who ships meaningful systems and can explain them clearly. It should feel composed and human, not like a startup landing page or a generic junior-developer portfolio.

**Visual system**

- **Palette:** Warm off-white background, near-black text, soft gray dividers, and one restrained deep-blue accent for interactive states and links. No gradients.
- **Typography:** A confident modern sans-serif for all reading and display text, with a monospace face reserved for metadata such as dates, locations, technologies, and small labels.
- **Layout:** A disciplined responsive grid, generous vertical space, sharp or subtly softened edges, and thin rules used to organize information instead of large decorative cards.
- **Imagery:** One optional, natural headshot. Work is represented primarily by concise outcomes, systems language, and optional screenshots rather than stock photography.
- **Motion:** Fast, understated transitions for hover, navigation, and section entry. No autoplay effects, parallax, or motion that delays reading.

**Voice**

- Direct and specific; leads with outcomes and ownership.
- Curious but not inflated; avoids empty terms such as "passionate," "results-driven," or "innovative."
- Uses short, readable sentences and lets concrete details do the credibility work.

### Homepage structure

1. **Header** - Name, simple navigation, and an immediate résumé or LinkedIn link.
2. **Intro** - Short statement of who John is, what he builds, and current location; employment availability is stated only once it is confirmed for public use.
3. **Selected impact** - Three concise, editorially formatted highlights drawn from Coinbase and Shopify. Each includes the context, John's ownership, and a concrete outcome where available.
4. **How I work** - A small section that translates the desired signals into evidence: high agency, ownership, technical depth, and fast delivery.
5. **Writing preview** - A single featured post or clearly labeled forthcoming article, with room to grow into a lightweight index.
6. **Contact and links** - Email, LinkedIn, GitHub, and résumé in a quiet footer rather than an attention-grabbing contact form.

### Supporting-page structure

- **About:** A concise narrative, education, selected timeline, technical interests, and the same professional links.
- **Writing:** A calm, readable list of posts. Individual articles prioritize width, type hierarchy, date, reading time, and source links where relevant.

### Responsive and accessibility requirements

- The homepage must communicate the essentials without scrolling horizontally or depending on hover.
- Links and navigation must work by keyboard, have visible focus states, and retain adequate contrast.
- Reduced-motion preferences disable nonessential animation.
- The first screen on mobile contains the name, role framing, and a direct path to selected impact or résumé.

### Content and asset decisions for the initial build

- Use real résumé evidence for selected-impact sections; do not invent project claims.
- Use a clean headshot placeholder or omit the image until one is supplied.
- Use a clearly labeled Writing placeholder until the first original post is ready.
- Use outward links for GitHub, LinkedIn, and résumé; no form backend is required initially.

**Work:**

- Identify the intended tone in a few words (for example: editorial, playful, precise, warm, technical, understated).
- Define typography, color, spacing, imagery, grid, and animation principles.
- Create a page map and rough section hierarchy.
- Choose one design direction after reviewing alternatives.
- Define how Writing appears in the navigation and how article pages should read: ideally editorial and calm rather than a generic blog template.

**Deliverable:** A short visual-direction document and homepage outline. **Complete.**

**Checkpoint:** Approve the direction before writing production UI code. **Complete.**

## Stage 3 — Create the technical foundation

**Status:** Complete and audited

**Detailed checklist:** [Stage 3: Technical Foundation](STAGE_3_TECHNICAL_FOUNDATION.md)

**Goal:** Set up a clean project that is easy to change and safe to deploy.

**Work:**

- Initialize the chosen framework and repository structure.
- Configure fonts, design tokens, global styles, formatting, and linting.
- Add the minimum component and animation libraries needed.
- Create reusable layout components: navigation, footer, buttons, content sections, and project cards.
- Document project conventions so future work stays consistent.

**Deliverable:** A working local site shell with reusable design foundations.

**Checkpoint:** The project builds locally with no errors and works at common desktop and mobile widths. **Complete for the foundation.**

### Stage 3 completion audit

The foundation is stable enough to begin the content and refinement work in Stage 4. It is captured in Git checkpoint `edb5658` (`Build Stage 3 site foundation`); the repository was clean immediately after that commit.

**Confirmed working**

- **Application and tooling:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, pnpm, ESLint, Prettier, and strict type checking are installed and documented. `pnpm check` and `pnpm build` pass. Production builds deliberately use webpack because Turbopack's production helper process is not available on this machine.
- **Visual foundation:** The warm off-white, ink, gray-rule, and deep-blue technical-editorial token system is implemented in one global style layer. Geist and Geist Mono are loaded locally through Next's font tooling; spacing, page-width, focus, selection, and reduced-motion defaults are centralized.
- **Structure and routes:** The shared header, footer, skip link, main landmark, editorial primitives, Home, About, Writing, individual-writing route, 404, and recoverable error page exist. Home, About, and Writing navigation has been checked locally.
- **Content boundary:** Identity, links, career highlights, and writing metadata live in typed content files rather than being repeated across page components. The résumé remains safely in Git-ignored `source-material/`; no raw résumé, headshot, employer screenshot, or secret is exposed through `public/`.
- **Baseline accessibility and discoverability:** The pages use a logical heading hierarchy, descriptive link labels, visible keyboard focus, skip navigation that sends focus to the main landmark, and a reduced-motion safeguard. Page metadata, a generated social image, a generated `JK` icon, `robots.txt`, and a sitemap route are present.

**Known non-blocking follow-ups**

- **Real mobile/device review:** Desktop rendering and no-horizontal-overflow behavior were checked. The in-app browser's temporary mobile-viewport override did not take effect during the final audit, so Stage 5 or Stage 7 should include a manual review on a real phone or a working device emulator before launch.
- **Final public content:** The headshot, personal narrative, one reviewed original article, and a web-safe downloadable résumé are intentionally still absent. They are the primary blockers to a content-complete launch, not technical defects.
- **Metadata after domain selection:** `SITE_URL` must be set in the deployment environment once the production domain is chosen. Until then, the sitemap intentionally contains no public URLs and local social-image URLs resolve to localhost.
- **Final accessibility/performance pass:** The basics are in place, but launch work should still include real-device keyboard/touch checks, automated or manual color-contrast review, image optimization after assets arrive, and production-browser testing. The recoverable error UI is implemented but has not been exercised by deliberately causing a runtime failure.
- **Small cleanup decision:** The default Next SVG files remain in `public/` but are unused. Remove them during a later cleanup if they continue to be unused. `motion` is installed for planned restrained interactions but is not currently imported; keep it only if Stage 5 introduces a specific, justified motion treatment.

**Decisions finalized in Stage 3**

- Use typed local content files instead of MDX or a CMS for the first release. A reviewed post is published by changing the structured entry in `src/content/writing.ts`.
- Use native semantic HTML for the current interaction surface. Do not add shadcn/ui or Radix unless a future interaction actually needs an accessible complex primitive.
- Keep analytics, contact-form infrastructure, authentication, a database, a CMS, and a custom domain outside the current scope.
- Keep the first release concise: selected impact and contact links stay on Home; About and Writing deepen the story only when approved content is ready.

**Recommended next sequence**

1. Stage 4: replace the narrative and writing placeholders with reviewed content, then confirm whether a web-safe résumé and headshot are ready.
2. Stage 5: refine the content hierarchy and add final imagery or project evidence; remove unused starter assets and any dependency not justified by the final interaction design.
3. Stage 6: run the launch-quality pass after final content and assets exist.
4. Stage 7: push to GitHub, create a Vercel preview, configure `SITE_URL`, and perform the real mobile review before buying or connecting a domain.

## Stage 4 — Build the core experience

**Detailed checklist:** [Stage 4: Core Experience](STAGE_4_CORE_EXPERIENCE.md)

**Goal:** Make the main visitor journey feel complete.

**Work:**

- Implement the homepage first: introduction, featured work, credibility, and primary contact action.
- Implement the agreed supporting pages: About and Writing. Keep selected work and contact links on the Home page for the concise first-release experience.
- Create a reusable article layout and a simple index page for published posts.
- Add real content rather than placeholder copy as early as possible.
- Make layouts responsive and ensure navigation works on mobile.

**Deliverable:** A complete first-pass website running locally.

**Checkpoint:** A visitor can understand who the site is for, what is offered, and how to take the next step.

### Writing section: first-release approach

The Writing section should be small and thoughtful. One strong, genuine post is more valuable than a feed full of generic AI commentary. Start with local Markdown/MDX files so that publishing a new article is simple and does not require a CMS.

Good early post types include:

- A well-reasoned perspective on how AI is changing a domain you know.
- A short build log explaining a project decision, experiment, or lesson.
- A concise point of view on a technical, business, or creative question you actually care about.

Each post should make a concrete point, use your own voice, and include a clear date, title, description, and reading time. AI can help research, outline, edit, and fact-check it, but the opinion and final claims should be yours.

## Stage 5 — Refine content and visual quality

**Detailed checklist:** [Stage 5: Visual Refinement](STAGE_5_VISUAL_REFINEMENT.md)

**Selected visual-direction plan:** [Direction 1: Editorial Type and Paper](STAGE_5_EDITORIAL_TYPE_AND_PAPER.md)

**Goal:** Turn a functional draft into a deliberate, memorable site.

**Work:**

- Rewrite headings and calls to action for clarity and personality.
- Replace generic imagery and placeholder assets with final assets.
- Tune spacing, type scale, color contrast, and component details.
- Add only motion that reinforces hierarchy or feedback; respect reduced-motion preferences.
- Review each screen at desktop and mobile sizes, iterating from screenshots.

**Deliverable:** A visually polished, content-complete release candidate.

**Checkpoint:** The design is consistent, readable, and recognizably specific to the owner—not a default component-library theme.

## Stage 6 — Quality, accessibility, and discoverability

**Goal:** Make the site trustworthy in real-world use.

**Work:**

- Verify keyboard navigation, focus states, semantic headings, image alt text, and color contrast.
- Check forms, links, loading states, and error states.
- Optimize image sizes and assess performance.
- Add page titles, descriptions, social-sharing images, sitemap, robots rules, and favicon.
- Run linting, type checks, and production builds; fix issues before deployment.

**Deliverable:** A verified production build and a launch checklist.

**Checkpoint:** All critical pages work on modern desktop and mobile browsers with no known blocking issues.

## Stage 7 — Create a hosted preview

**Goal:** Review the real site on the web without making it the official public destination.

**Work:**

- Push the project to GitHub.
- Connect the repository to Vercel.
- Create a preview deployment and inspect it on desktop and phone.
- Resolve deployment-specific configuration issues, such as environment variables or image settings.

**Deliverable:** A private/shareable preview URL.

**Checkpoint:** Approve the exact hosted version before connecting the final domain.

## Stage 8 — Launch

**Goal:** Publish the finished site with a stable custom domain.

**Work:**

- Purchase or configure the domain if needed.
- Connect DNS and configure the production domain in the hosting provider.
- Verify HTTPS, redirects, metadata, contact flow, and analytics (if used).
- Make the production deployment live.

**Deliverable:** A public website on its final URL.

**Checkpoint:** Test the live domain on desktop and mobile immediately after launch.

## Stage 9 — Maintain and evolve

**Goal:** Keep the site current without letting it become a maintenance burden.

**Ongoing work:**

- Make content edits through the repository; each change gets a preview before production.
- Add case studies or writing when there is meaningful material.
- Maintain a small running list of article ideas and publish only when a draft says something specific.
- Review dependencies and the contact form periodically.
- Use analytics only to answer real questions, not as a reason to add complexity.

**Future additions, only when justified:**

- CMS for frequent non-technical publishing.
- Newsletter or email automation.
- Database, authentication, or client portal.
- More advanced interactive or 3D work.

## Definition of done for the first release

- Site content is complete and accurate.
- The Writing section is live with at least one original, reviewed post when it supports the launch goal.
- The design works at desktop and mobile sizes.
- Navigation, links, and contact path work.
- Key accessibility and SEO basics are in place.
- The production build passes checks.
- The site is deployed on a custom domain with a recoverable GitHub history.
