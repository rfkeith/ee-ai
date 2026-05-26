---
title: Engineering Excellence — UX Design
status: reverse-engineered-draft
created: 2026-05-24
updated: 2026-05-24
source: Reverse-engineered from existing codebase (commit a542f8f)
related:
  - prds/prd-ee-ai-2026-05-24/prd.md
  - architecture-ee-ai-2026-05-24.md
---

# UX Design: Engineering Excellence

> **Reverse-Engineering Notes.** Captured by inspecting page templates, layouts,
> components, and styles on 2026-05-24. Sections marked `[VERIFIED]` are derived
> from observed code; `[INFERRED]` are reasonable derivations; `[NEEDS INPUT]`
> require author confirmation. Run `bmad-create-ux-design` with intent "Update"
> to revise this through the facilitated workflow.

## 1. UX Goals

[INFERRED — derived from layout density, typography choices, color restraint, and absence of decoration]

The site's UX optimizes for **reading time on long-form prose**, in this priority order:

1. **Readability of the article body** — generous line-height, comfortable measure (`max-w-3xl prose-lg`), high color contrast on body text.
2. **Wayfinding back to more articles** — persistent header nav with category links, footer that doesn't compete, no modals or interstitials.
3. **Visual restraint** — neutral grayscale with a single purple accent. Nothing competes with the prose.
4. **Speed of first paint** — static site, no client-side framework, minimal CSS.

Explicit non-goals: animation, hero imagery, social proof widgets, popups.

## 2. Information Architecture

[VERIFIED — pages directory + Header.astro nav]

```
/                                  Home (recent 6 articles)
├── /about/                        About
└── /blog/                         All articles
    ├── /blog/{slug}/              Article detail
    ├── /blog/category/leadership/    } Header nav surfaces
    ├── /blog/category/best-practices/  these four
    ├── /blog/category/career/
    └── /blog/category/ai/
└── /tags/{tag}/                   Tag index (linked from articles/cards, not nav)
```

**Navigation hierarchy:**

- **Primary nav (header):** Brand → Blog | Leadership | Best Practices | Career | AI | About
- **Secondary nav (CategoryNav component, shown on `/blog/` index):** All | Leadership | Best Practices | Career | AI — duplicates the header categories with active-state pill styling
- **Tertiary nav (within article):** Category chip (links to category index), tag chips (link to tag index)
- **Footer nav:** None — copyright only

**Surface duplication note:** Header nav and `CategoryNav` overlap. The header carries the four categories at all times; `CategoryNav` repeats them on the blog index with a different visual treatment (pills with All-included). This is intentional — pills are richer for the browse context, but worth a check that the duplication isn't visually noisy on mobile. `[NEEDS REVIEW]`

## 3. Page Inventory

[VERIFIED]

| Surface | Layout | Purpose | Key elements |
|---|---|---|---|
| Home `/` | `BaseLayout` | Landing + recent articles | Hero block (h1 + tagline), CategoryNav, 1/2/3-col card grid (6 cards), "View all" link |
| About `/about/` | `BaseLayout` | Static positioning copy | h1 + 2 short paragraphs in `max-w-3xl` |
| Blog index `/blog/` | `BaseLayout` | All published articles | CategoryNav, article list (likely card grid — to confirm) |
| Article detail `/blog/{slug}/` | `BlogPostLayout` | Long-form reading | Header (category chip, h1, description, byline+date+reading time, tags) + prose body |
| Category index `/blog/category/{cat}/` | `BaseLayout` | Articles within one category | CategoryNav with active state, article list |
| Tag index `/tags/{tag}/` | `BaseLayout` | Articles sharing a tag | (likely) article list — to confirm |

## 4. Component Inventory

[VERIFIED — `src/components/`]

| Component | Responsibility | Props | Used on |
|---|---|---|---|
| `Header` | Site brand + primary nav with active-route highlight | none (uses `Astro.url.pathname`) | All pages (via `BaseLayout`) |
| `Footer` | Copyright | none | All pages (via `BaseLayout`) |
| `CategoryNav` | Pill-style category selector with active state and "All" pill | `current?: string` | Home, blog index, category indexes |
| `BlogPostCard` | Article preview card with hover state | `title, description, pubDate, category, tags, url` | Home, blog/category lists |
| `TagList` | Up-to-3 hashtag chips linking to `/tags/{tag}/`; when `tags.length > 3`, append a non-interactive `+N more` chip (CONFIRMED 2026-05-24) | `tags: string[]` | `BlogPostCard`, article-detail header |

**Coverage gaps:**

- No `PageHeader` component — the hero block on `/` is hand-rolled in `index.astro`.
- No `EmptyState` component — empty-state copy on home is inline.
- No `Pagination` component — when article count exceeds the grid limit, no overflow handling exists (currently moot at 5 articles).
- No `Search` UI.

## 5. Design Tokens

[VERIFIED — observed Tailwind classes across components/layouts]

### 5.1 Color

| Token | Use | Tailwind class |
|---|---|---|
| Body text | Primary content | `text-gray-900` |
| Muted text | Descriptions, metadata, footer, tagline | `text-gray-500` |
| Accent (interactive) | Brand link hover, active nav, category chip, hover borders | `text-purple-800`, `bg-purple-800`, `border-purple-800` |
| Accent (deep, table headers in prose) | Article tables | `var(--color-purple-950)` (set in `global.css`) |
| Tag chip background | Tag-list pills | `bg-purple-50` paired with `text-purple-900` |
| Borders / dividers | Cards, navs, footers | `border-gray-200` |
| Alternating row stripe (prose tables) | Improves table scan | `var(--color-gray-100)` |

**Palette discipline:** Only one accent hue (purple). Greens, reds, etc. are absent. This is deliberate-feeling — the only thing that pops on the page is interaction.

### 5.2 Typography

| Surface | Class set |
|---|---|
| Page title (home hero) | `text-4xl font-bold` |
| Section title (home) | `text-xl font-bold` |
| Article title (detail) | `text-3xl font-bold leading-tight` |
| Article description (detail) | `text-lg text-gray-500` |
| Card title | `text-lg leading-snug` |
| Card description | `text-sm text-gray-500` |
| Body prose | `prose prose-lg prose-purple` (Tailwind Typography plugin) |
| Metadata (date, author, reading time) | `text-sm text-gray-500` |
| Category chip on article | `text-xs font-semibold uppercase tracking-wide text-purple-800` |
| Tag chips | `text-xs px-2 py-0.5 bg-purple-50 text-purple-900 rounded-sm` |

[INFERRED] No custom font is loaded — system font stack applies (Tailwind default). Article body uses `prose-lg` for slightly larger reading text.

### 5.3 Spacing & Layout

| Token | Class |
|---|---|
| Page container | `max-w-5xl mx-auto px-4 py-8` |
| Article container | `max-w-3xl mx-auto` (narrower for readability) |
| About container | `max-w-3xl mx-auto` |
| Hero vertical rhythm | `pt-12 pb-10 border-b border-gray-200 mb-8` |
| Card padding | `p-5` |
| Card grid | `grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` |

### 5.4 Shape

- **Borders:** 1px `border-gray-200`, accent on hover.
- **Radii:** `rounded-lg` on cards, `rounded-sm` on tag chips, `rounded-full` on category pills.
- **Shadows:** Used sparingly — only on prose-table containers (`global.css`) to lift them out of the surrounding text.

### 5.5 Interaction

| State | Treatment |
|---|---|
| Hover on card | `hover:border-purple-800` (border color shift) |
| Hover on link | `hover:text-purple-800` (text color shift) |
| Active nav (header) | `text-purple-800!` |
| Active nav (CategoryNav pill) | `bg-purple-800 text-white border-purple-800` |
| Tag chip hover | `hover:opacity-80` |

[NEEDS REVIEW] Active state in header relies on color alone — `text-purple-800!` vs `text-gray-500`. For WCAG 2.1 AA discriminability, a non-color cue (weight, underline, or icon) would harden this. Same applies to the category chip on article detail.

## 6. Responsive Behavior

[VERIFIED — observed responsive utility usage]

- **Container:** `max-w-5xl` capped; on small screens, `px-4` provides edge gutters.
- **Card grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` — phones get one column, tablets two, laptops/desktops three.
- **Header nav:** `flex-wrap gap-4` — links wrap onto a second line on narrow screens.
- **Tag chips:** `flex-wrap` — wrap as needed.
- **Article container:** `max-w-3xl` — independent of viewport.

**Gaps:**
- ~~No hamburger menu — header nav becomes a wrapped multi-line block on phones, which is functional but visually busy with 6 links + brand.~~ **Resolved 2026-05-24:** Hamburger added below ~640px. See PRD FR-7.
- No mobile-specific font-size adjustments observed (Tailwind defaults apply).
- No print stylesheet.

## 7. Key User Flows

[INFERRED — see PRD §2.4 for matching UJ IDs]

### UF-1. UJ-1: Search-arrival reader

1. Reader lands on `/blog/leadership/{slug}/` from a search engine.
2. **Article header** establishes credibility immediately: category chip, descriptive title, subtitle, author + date + reading time, tags.
3. Reader scans body — `prose-lg` measure and `text-gray-900` keep reading load low.
4. At end of article, no explicit "next article" CTA. Reader either:
   - Clicks "Engineering Excellence" in the header (→ home), or
   - Clicks the category chip (→ category index), or
   - Clicks a tag chip (→ tag index), or
   - Leaves.
5. **UX gap:** No in-article "related articles" or "next" affordance. `[NEEDS DECISION]` — is this intentional minimalism or a deferred feature?

### UF-2. UJ-2: Casual-browser reader

1. Reader lands on `/`.
2. Sees the hero (h1 "Engineering Excellence" + tagline) — orients quickly.
3. Sees CategoryNav pills and the recent-articles card grid.
4. Either picks an article from the grid, or filters by clicking a category pill / header link.
5. Lands on category index or article detail, repeats.

### UF-3. UJ-3: Author publishing

1. Author runs `npm run dev`.
2. Creates `src/content/blog/{category}/{slug}.md` with full frontmatter and body.
3. Hot reload shows the article live at `/blog/{slug}/`.
4. Sets `draft: false`, commits, pushes, host auto-deploys.
5. Article appears on home (if in the most-recent 6), on `/blog/`, on the matching category index, and on each tag index in its `tags` array.

## 8. Accessibility Posture

[INFERRED + VERIFIED]

**Solid:**
- Semantic HTML — `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`, `<time datetime>`.
- Real anchor tags for links (no JS-only navigation).
- Skip-to-main link could be added — currently absent.
- High contrast on body text (`text-gray-900` on white).

**Needs attention:**
- ~~**Active nav uses color alone** — see §5.5 NEEDS REVIEW. WCAG 1.4.1 (Use of Color).~~ **Resolved 2026-05-24:** `aria-current="page"` + `font-semibold` bump added in v1. See PRD FR-7.
- **No `<h1>` on category index pages** — to confirm; if missing, screen-reader users lose the page-title anchor.
- **`.text-gray-500` on a white background** is around 4.6:1 — passes AA for normal text, fails AAA. Acceptable but worth knowing.
- ~~**No `aria-current` on active nav** — could pair with the color cue.~~ **Resolved 2026-05-24:** see above.
- **No `lang` attribute on root** beyond `html lang="en"` (correct).
- ~~**Tags truncation** — `TagList` silently slices to 3 with no "+N more" indicator. Screen-reader users can't discover hidden tags.~~ **Resolved 2026-05-24:** `+N more` chip added in v1.

## 9. Open Questions

These need author input before downstream work (`bmad-create-epics-and-stories`):

1. ~~**End-of-article navigation.** Add "related articles" or "next"?~~ **RESOLVED 2026-05-24:** Yes — algorithmic related articles via tag overlap. See PRD FR-28. Series prev/next is separately handled by FR-27 when applicable. Visual: reuse `BlogPostCard` for consistency. Layout order at article footer: sources (FR-25) → related (FR-28) → series ribbon (FR-27, when applicable).
2. ~~**Mobile header nav.** Acceptable as wrapped flex, or worth a hamburger?~~ **RESOLVED 2026-05-24:** Hamburger below ~640px (Tailwind `sm`). See PRD FR-7 consequences. Implementation in `Header.astro` — small JS for toggle, brand stays visible, vertical menu on tap.
3. ~~**Active-state accessibility.** Add weight / underline / `aria-current` to nav active states?~~ **RESOLVED 2026-05-24:** `aria-current="page"` + `font-semibold` bump. Color retained but no longer sole cue. See PRD FR-7. Applies to Header.astro nav and CategoryNav active pills.
4. ~~**Tag overflow indicator.** Show "+N more" when `tags.length > 3`?~~ **RESOLVED 2026-05-24:** Yes. Non-interactive `+N more` chip styled like a tag. v1. See §4 Component Inventory.
5. ~~**Empty states.** When no articles match a tag/category, what does the user see? Currently unverified for category/tag pages.~~ **RESOLVED 2026-05-24:** Leave ad-hoc. (a) Category/tag pages cannot be empty — Astro `getStaticPaths` only generates paths with matching content. (b) Homepage zero-articles state already handled inline. (c) Search no-results handled by PRD FR-23. No shared `EmptyState` component for v1; revisit if v1.1+ introduces surfaces that need consistent empty treatment.
6. ~~**Search.** Add Pagefind or similar at some article-count threshold? If yes, what threshold?~~ **RESOLVED 2026-05-24:** Pagefind in v1 (see PRD §4.10 / FR-23). UI surface specifics (header icon vs input vs modal) still to be designed — capture in next UX doc revision.
7. ~~**Source citations rendering.** If the schema captures `sources`, where do they belong visually? Article header? End-of-article block?~~ **RESOLVED 2026-05-24:** End-of-article footer block. See PRD FR-25. Visual treatment: informational, muted (gray-500 / purple-800 accent), same restraint as the rest of the site. Detailed component design in next UX doc revision.
8. ~~**Reading-time computation.** Where does this come from? Compute from word count at build time?~~ **RESOLVED 2026-05-24:** Word count at build time via remark plugin. See PRD FR-2.
9. ~~**Visual evolution.** Any direction on growing the design system (illustration, code-block enhancements, callout components for the essay style)?~~ **DEFERRED 2026-05-24, scheduled as part of the §10 revision pass 2026-05-26:** Folded into the scheduled UX doc revision pass below. No longer a standalone open question — see §10.

## 10. Scheduled UX Revision Pass

[CONFIRMED 2026-05-26]

A focused revision of this UX doc is queued as a cross-cutting prerequisite to v1.1 build work (PRD §6.3). Multiple v1 and v1.1 design specifics were intentionally deferred during the open-questions walk-through — they accumulate here, in one named pass, rather than drifting forever as "to be specified later."

**Scope (consolidated):**

| Item | Source | What to design |
|---|---|---|
| Search modal | PRD FR-23 | Modal pattern, results list treatment, mobile full-screen variant, keyboard shortcuts (`/`, `cmd-K`), empty/no-results states |
| Series ribbon | PRD FR-27 | Visual treatment; placement confirmed as "beneath byline, above tag list" (revisit if better placement emerges) |
| Source-citation footer | PRD FR-25 | Visual treatment for the "Sources cited in this piece" block — muted, informational, not promotional |
| Related-articles footer | PRD FR-28 | Visual treatment; v1 default is to reuse `BlogPostCard` (confirm vs. design a denser variant) |
| `+N more` tag chip | TagList | Visual treatment for the non-interactive overflow indicator |
| Cookie consent banner | PRD FR-21 | Visual treatment; placement (bottom-of-viewport banner vs. modal); CMP choice if not hand-rolled |
| Course landing page | PRD FR-13 | Full page IA — hero, value prop, syllabus summary, pricing, purchase CTA |
| Course syllabus | PRD FR-14 | Lesson list IA — title, description, free-preview affordance for FR-15 preview lessons |
| Paywall page | PRD FR-15 | Layout — lesson title + description + value pitch + primary CTA + sign-in link |
| Signed-in vs signed-out chrome | PRD FR-18 | Header variations — account menu vs sign-in link; mobile behavior |
| Account-management UI | PRD FR-18 | `/account/` page — purchase history, password reset entry, sign-out |
| Lesson-reader experience | §4.7 NFR | Visual treatment distinct from essay-reader; reading width, progress mark UI (FR-17), navigation between lessons |
| Code-block theme | UX §9 Q9 | Shiki theme choice (or equivalent) for any future code-heavy article |
| Callout components | UX §9 Q9 | Component family — note / warning / quote / aside — for essay-style longform |
| Illustration / diagram direction | UX §9 Q9 | Direction, or explicit decision not to invest |
| Palette / typography evolution | UX §9 Q9 | Any direction beyond the current purple-on-grayscale system |

**Triggers (any one fires the pass):**

1. Any v1.1 priority (course, newsletter, audience infra) entering build planning.
2. An article in v1 needing a visual element not currently supported (code block with theme, callout box, illustration).
3. Three or more deferred-to-revision items accumulating without action (we are currently at ~10 — past the threshold; this is why the pass is named now).

**Out of scope for this pass** (defer to a future revision):

- A full design-system documentation overhaul (Figma library, design tokens file). Worth doing only if the site grows beyond solo authorship.
- Multi-theme support (light/dark toggle). Defer until a reader actually asks for it.
- Multi-brand or multi-product visual differentiation. Not needed at the current scale.

**Output of the pass:** an updated UX doc with §3 Page Inventory, §4 Component Inventory, §5 Design Tokens, §6 Responsive Behavior, and §7 User Flows extended to cover everything above. Decisions get captured in a new `.decision-log.md` entry tagged "UX revision pass 2026-MM-DD".
