# CLAUDE.md

Project guidance for Claude sessions working on this repo. Loaded into context automatically.

## What this is

**Engineering Excellence** — a long-form essay journal on software engineering practice. Static Astro site, hand-written essays, no marketing layer. The author is Robert (a senior engineering leader); the journal's pitch is *trust over output* — every essay carries a real first-hand stake, every claim is grounded in a source the reader can check, and nothing is generated as filler.

Published at **https://engineeringexcellence.dev**, served from a Vultr VPS. The VPS itself is reached via SSH at `fireandsmoke.life` — that hostname belongs to an unrelated cooking site sharing the same machine; don't confuse the two.

## Local development

```sh
npm run dev      # Astro dev server (hot reload)
npm run build    # production build → dist/
npm run preview  # serve dist/ locally for a final eye
```

## Deploy

The VPS runs a build script that clones the repo fresh, builds with Astro, and copies `dist/*` into `/var/www/ee/` (the live directory). Deploy after a push to `main` with one command:

```sh
ssh -i ~/.ssh/vultr root@fireandsmoke.life "sudo -u www-data /var/www/webhooks/doBuild.sh"
```

If you'd rather watch it run:

```sh
ssh -i ~/.ssh/vultr root@fireandsmoke.life
sudo -u www-data /var/www/webhooks/doBuild.sh
```

The script (`/var/www/webhooks/doBuild.sh`) **must** be run via `sudo -u www-data`. It uses `set -eo pipefail` and a post-build `dist/` sanity check, so a failed build will exit *before* wiping the live directory — production stays on the previous build instead of going empty. (This was added after a Node-version mismatch wiped the live site on 2026-06-14; the original script lacked both guards.)

**Build log:** `/var/build/engineeringexcellence.build.log` on the VPS. Tail it to debug failed builds — it captures the full nvm + npm + astro output.

**Node version:** the script installs Node 22 via nvm (required by Astro 6, which refuses to run on Node <22.12.0). If you bump the Astro major version and it requires something newer, the `nvm install 22` line is what to update.

**Build script source of truth:** [`infra/doBuild.sh`](infra/doBuild.sh) in this repo. The VPS copy at `/var/www/webhooks/doBuild.sh` must be kept in sync — see [`infra/README.md`](infra/README.md) for the `scp` sync command. If the VPS is ever rebuilt, re-deploy the script from this repo.

## Repo layout

```
src/
  content/blog/{leadership,best-practices,career,ai}/  essays (Markdown)
  pages/                                                Astro routes
  layouts/                                              page templates
  components/                                           UI primitives
public/                                                 static assets
reference/                                              source books (PDF + .txt) for citations
_bmad/                                                  BMad skill configs
_bmad-output/
  planning-artifacts/
    article-backlog.md                                  editorial backlog
    outlines/                                           argument skeletons per essay
    scene-library.md                                    unused lived scenes for future pieces
dist/                                                   build output (gitignored)
```

## Tech stack

- **Astro 6** (`astro.config.mjs`) — static-site generation, content collections
- **Tailwind 4** with `@tailwindcss/typography`
- **IBM Plex** family — Sans for chrome and list views, Serif for article body prose and book titles, Mono for code
- Content authored in Markdown with TypeScript-validated frontmatter

## Content conventions

Each essay is a Markdown file under `src/content/blog/{category}/{slug}.md`. The URL slug derives from the file path: `src/content/blog/career/capability-vs-belief.md` → `/blog/career/capability-vs-belief`.

Frontmatter shape (validated by the Astro content collection):

```yaml
---
title: "Article Title: Optional Subtitle"
description: "One-line hook for meta and feed previews."
pubDate: 2026-06-14
author: "Robert"
category: "career"                  # career | leadership | best-practices | ai
tags: ["tag-one", "tag-two"]
draft: true                          # false to publish
sources:
  - book: "Psycho-Cybernetics"
    author: "Maxwell Maltz"
---
```

`draft: true` posts are excluded from the production build (`src/pages/blog/[...slug].astro` filters them). Set `draft: false` and update `pubDate` when shipping.

## Editorial workflow

Two skills under `.claude/skills/` support the journal:

- **Sloane** (`content-planner`) — plans the backlog, pitches new pieces, builds argument outlines, pressure-tests theses, kills weak angles. Owns the planning artifacts (`article-backlog.md`, `outlines/`, `scene-library.md`). Invoke with `/content-planner` or "talk to Sloane."
- **Mercer** (`line-editor`) — the line-edit pass before publish: cut, tighten, fix rhythm, verify citations. Edits what's on the page; never authors content. Invoke with "talk to Mercer" or "line-edit this draft."

The canonical trust doctrine lives at `.claude/skills/content-planner/references/trust-doctrine.md`. Read it when judgement calls come up.

## House voice and design rules

These are the rules Sloane and Mercer hold the writing to. They apply to anything Claude drafts or proposes for the journal:

- **No punching down on other writers.** Hooks framed as "everyone else is wrong, here's the truth" read as preachy. The journal wins by being more right, not by sneering.
- **Sharp, never safe.** Hedged "could be argued" sentences that commit to nothing are equally killable. Honest beats either failure mode.
- **Confidentiality — category at most.** Never name the author's employer or characterise specific people identifiably. *"A major investment bank"* is fine; the bank's name is not. Same rule for direct reports, MDs, CIOs, etc.
- **Trust doctrine.** Every essay needs a first-hand scar — a real mistake, decision, or moment the author lived. Citations give rigor; lived experience gives trust. An essay built only on book citations is half-built.
- **Design — minimal horizontal rules.** Separate sections with whitespace and vertical rhythm, not `---` borders. Borders make the eye stick.
- **Design — typography split.** Plex Sans for chrome and list views; Plex Serif only inside article body prose and book titles.

## Shipping a new essay — checklist

1. Draft lives at `src/content/blog/{category}/{slug}.md` with `draft: true`.
2. Outline lives at `_bmad-output/planning-artifacts/outlines/{slug}.md` (linked from the backlog).
3. Mercer pass: line edit, citation check, voice & trust pass.
4. Flip `draft: false`, set `pubDate` to today.
5. Commit and push to `main`.
6. Run the deploy command (above).
7. Ask Sloane to move the backlog entry from `Proposed` to `Published`.
