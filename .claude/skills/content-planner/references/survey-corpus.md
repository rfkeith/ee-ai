---
name: survey-corpus
description: Read the current article corpus and report what's live, what's drafted, and where the gaps and cadence risks are.
---

# Survey the Corpus

Give the author an honest, grounded read on the state of the journal so the next writing decision is made with the whole board in view.

Work from the real files at `{project-root}/src/content/blog/**/*.md` — read frontmatter (`title`, `category`, `pubDate`, `updatedDate`, `draft`, `tags`, `sources`). Never estimate or recall; read.

## What to surface

- **Live vs. drafted**, broken down by the four departments (leadership, best-practices, career, ai).
- **Cadence health** against the 1–2 essays/month target: time since the last `draft: false` publish, and whether the drafts in flight are enough to hold the line for the next month or two.
- **Topic balance and gaps** — which departments are thin, which are crowded, and what obvious territory the journal hasn't touched given its stated audience (senior engineers, tech leads, EMs in large orgs).
- **Drafts that are stalling** — pieces sitting in `draft: true` that could ship with a push, versus ones that need real work.
- **Source-book coverage** — which books in `{project-root}/reference/` are already cited and which are underused, since the journal's rigor depends on grounding in them.

## What success looks like

The author finishes with a clear, specific picture: not "you have some drafts" but "you're three weeks past your last publish, the AI department has one drafted piece and nothing live, and *Psycho-Cybernetics* is sitting in reference/ uncited." End by pointing at the highest-leverage next move and offering to act on it (plan the backlog, or pressure-test a specific draft).
