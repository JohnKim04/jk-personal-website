# John Kim — Personal Website

A concise, technical-editorial portfolio and writing site for John Kim.

## Stack

- Next.js App Router with React and TypeScript
- Tailwind CSS for styling
- Motion for small, purposeful animations
- Native semantic HTML for the site shell and standard interactions. A focused accessible UI primitive (such as a Radix package) is added only when a future interaction needs one.

## Local development

Install dependencies once:

```bash
pnpm install
```

Then use these commands from the project root:

| Command          | Purpose                                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev`       | Start the local site at `http://localhost:3000`.                                                                                        |
| `pnpm lint`      | Run Next.js and TypeScript-aware ESLint rules.                                                                                          |
| `pnpm typecheck` | Run the TypeScript compiler without generating files.                                                                                   |
| `pnpm format`    | Format project files with Prettier.                                                                                                     |
| `pnpm check`     | Check formatting, linting, and types in that order.                                                                                     |
| `pnpm build`     | Make a production build. This project uses webpack because Turbopack production builds cannot start its helper process on this machine. |
| `pnpm start`     | Serve a completed production build locally.                                                                                             |

Before committing a meaningful change, run `pnpm check` and `pnpm build`.

## Project structure

```text
src/app/            App Router pages, layouts, and global styles
public/             Reviewed public assets only
source-material/    Private inputs such as the original resume (Git-ignored)
docs/planning/      Product roadmap and stage checklists
```

Future reusable UI belongs in `src/components/`; structured site and writing data belongs in `src/content/`. Keep facts and copy separate from page layout wherever practical.

The primary roadmap is [docs/planning/PROJECT_PLAN.md](docs/planning/PROJECT_PLAN.md). Stage-specific plans live alongside it.

## Content workflow

The initial site uses a typed local-content approach rather than a CMS or MDX dependency:

- `src/content/site.ts` — identity, education, and professional links
- `src/content/experience.ts` — résumé-backed impact highlights and timeline entries
- `src/content/writing.ts` — writing index metadata and eventual local article paragraphs

To publish a post, replace its `coming-soon` entry in `src/content/writing.ts` with a `published` entry that has a date, reading time, and a `body` array. The list and `/writing/[slug]` article route use that file automatically. Keep drafts and generated notes out of the published body until John has reviewed and approved them.

## Editing workflow

1. Make a focused change.
2. Run `pnpm format` if files need formatting.
3. Run `pnpm check` and `pnpm build`.
4. Review the affected page locally at desktop and mobile widths.

Do not put unreviewed resumes, raw headshots, employer screenshots, or secrets in `public/`. `source-material/` is intentionally private.

## Environment variables

There are no environment variables today. If one is needed later, add its name and a non-secret example to `.env.example`, then keep the actual value in a root-level `.env.local` file. `.env*` files are ignored by Git.

Only variables prefixed `NEXT_PUBLIC_` can be used in browser code, and Next.js embeds their values in the client bundle at build time. They must never contain a secret. Keep keys, tokens, private URLs, and other sensitive values server-only and unprefixed.

Once the site has its final domain, set `SITE_URL=https://your-domain.com` in the deployment environment. It must be the HTTPS origin only—no path, query string, hash, or credentials. It enables absolute production URLs in metadata, the sitemap, and the sitemap reference from `robots.txt`; it is intentionally optional for local and preview deployments. Invalid or preview-only values fall back to the local metadata base and do not populate the sitemap or `robots.txt` sitemap reference.
