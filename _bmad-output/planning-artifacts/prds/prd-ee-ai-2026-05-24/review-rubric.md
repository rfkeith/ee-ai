# PRD Quality Review — prd-ee-ai-2026-05-24 (Pass 2)

## Overall verdict

This PRD is now in **adequate-to-strong** shape across every dimension. The walk-through has the texture of a real planning artifact: trade-offs are named with what was given up, deferrals carry triggers, and the v1.1 stack hangs together as one coherent box rather than a list of plausible-sounding components. The main risks left are not gaps but symptoms of the heavy revision history — non-monotonic FR numbering, a few load-bearing FRs whose acceptance criteria are still soft (FR-17 progress sync, FR-13 landing-page content), and a creeping mass of cross-references (v1.05 / v1.1 / v1.2 / v1.3) that downstream story creation will have to walk carefully.

## Decision-readiness — strong

The PRD makes decisions visible rather than averaging them away. §4.7 stack-additions names Better Auth, Drizzle, Neon, and `@astrojs/node` with the *reason* each was chosen and what was rejected (§9 Q14: "Clerk and Supabase Auth rejected because both are managed services that conflict with the control bias"). §6.3 sequences the roadmap with a forcing function ("If v1.1 has not shipped within 9 months of v1.1 architecture work starting, automatically trigger a re-decision pass with two specific options") — that is a real commitment, not a hedge. FR-21's pre-consent posture is enumerated as "non-negotiable" with four testable invariants and a Playwright verification clause. FR-16b explicitly names what is NOT in v1.1 (refund-triggered revocation, dispute handling, partial refunds) — that is decision-making, not dodging.

Open Questions §9 is now mostly a graveyard of RESOLVED entries with the chosen option and rejected alternatives — that's exactly the shape a decision-maker can act on. The remaining unresolved items are scoped to `[NEEDS INPUT — community component]` and `[NEEDS INPUT — certification]` inside §4.7, both with stated defaults ("none for v1.1, revisit at v1.2") so they don't block downstream work.

### Findings

- **low** Forcing function trigger is unmonitored (§6.3) — "If v1.1 has not shipped within 9 months of v1.1 architecture work starting, automatically trigger a re-decision pass" has no named owner of the clock. *Fix:* add a line naming where the start-date is recorded (decision log entry? calendar?) and what "automatically" means in practice — a one-line "I check this on the first of each month" beats the implication of automation.

## Substance over theater — adequate

Personas are tight: two, each with a clear role driving distinct FRs (§2.1.1 → §4.1–4.6 + FR-20–22; §2.1.2 → §4.7 only). The §2.1.2 scope marker ("This persona has no v1 surface ... Downstream BMad skills working on v1 should treat §2.1.1 as the sole load-bearing persona") explicitly disarms the "post-v1 persona functioning as v1 theater" failure mode. The §1 Vision now confronts its own thinness honestly: "v1 has no differentiator yet, and that's the honest framing. Every engineering blog claims to be the honest one; citing books in frontmatter is a small craft signal, not a moat." That paragraph is doing real work.

NFRs have been hardened from adjectives to thresholds — NFR-1 commits to Lighthouse ≥95 (median), floor 90; NFR-2 to WCAG 2.1 AA with axe-core enforcement; NFR-4 to <60s build with a 45s warning. NFR-6 venue is the VPS build script with "no override flag, no 'I'll push the dist this time' path" — that is a real commitment.

One mild concern: the JTBD blocks (§2.2.A, §2.2.B) are long and lyrical relative to how few decisions they drive in the FR list. Five clusters with three sub-bullets each, written in essay voice — much of it doesn't get cited anywhere downstream. That's persona-adjacent theater, but it's not pretending to be load-bearing, and the §10 Inferences Index does flag these as `[INFERRED]`. Acceptable but heavy.

### Findings

- **low** JTBD prose-to-decision ratio (§2.2.A, §2.2.B) — neither JTBD block is cited by any FR consequences. They establish framing but the framing-per-line ratio is low. *Fix:* if these stay long, add a one-line "JTBD clusters cited by:" pointer per cluster, or accept this as design rationale and label it as such.
- **low** FR-9 about-page acceptance is thin theater ("Page renders 200, contains the strings 'Engineering Excellence', 'leadership', 'senior engineers'") — that's three string-presence assertions for a page whose content shapes whether a stranger trusts the site. *Fix:* either acknowledge the page is intentionally testable-only at this level (link to the actual copy) or add one bound for what the page must say.

## Strategic coherence — strong

The PRD has a clear thesis stated openly in §1: this is a long-arc audience platform where the durable asset is the essay track and the course is leverage off it. That thesis drives feature prioritization (essays first → audience infra next → course at v1.1 as the first monetized product, not the central one) and the sequencing in §6.3 follows the thesis rather than fighting it. Success Metrics §8 lead with "Publishing cadence: 1–2 articles per month, sustained" — that's a thesis-validating metric, not an activity metric. The counter-metrics block ("Cadence without engagement-depth growth ... If any counter-metric fires for 3+ months, treat as a strategic signal — revisit Q1") closes the loop honestly.

The v1.05 separation from v1.1 is one of the cleaner structural moves in the doc — it decouples "things that need a bigger article corpus" from "the course build" so neither holds the other hostage. The note "Sequencing v1.05 separately from v1.1 means the course build is not held hostage to article-count milestones" makes the logic explicit.

### Findings

- **medium** v1.3 audience-building infra now reads as a kitchen-sink bucket (§6.3) — RSS, OG meta, GSC-driven SEO polish, "Smaller items, can slot in as time allows." That's a backlog inside a roadmap. *Fix:* either name what's in v1.3 with the same crispness used for v1.05/v1.1/v1.2, or rename it to "Backlog: post-v1.2 candidates" to signal it's not a milestone.

## Done-ness clarity — adequate

Most FRs carry testable consequences. FR-1, FR-2, FR-5, FR-6, FR-7 (esp. the hamburger acceptance criteria block — that block is excellent), FR-10, FR-21, and FR-25 have clean pass/fail criteria a story author can extract directly. FR-12's slug-collision lint is now spelled out enough to land as a build-time check.

The weak spots cluster around v1.1 (§4.7):

- **FR-13 Public course landing page.** Consequences: "Includes: value proposition, target outcome, syllabus summary, pricing, purchase CTA." That is a section list, not a done-ness criterion. A story author cannot tell whether "value proposition" means a hero block, a paragraph, or a three-up grid.
- **FR-14 Public syllabus.** "All lessons listed, with title and one-line description." Fine for IA — but no bound on whether the syllabus needs a "buy" CTA at the bottom, whether previewable lessons are differentiated visually, etc.
- **FR-17 Learner progress.** "Progress persisted per learner across sessions and devices (storage shape decided alongside §9 Q15)" — Q15 is now resolved (Postgres) so the storage parenthetical is stale, but more importantly, there is no acceptance criterion for what happens when a learner toggles complete on lesson 3, signs out, signs back in on another device, and finds — what? The state racing isn't decision-critical at this scale, but the FR should at least name that "last write wins" is the expected behavior (or whatever the author intends).
- **FR-18 Account management.** "Sign-up flow (likely triggered as part of FR-16 first-purchase) creates an account" — "likely" is a weasel word in an acceptance position. The sign-out acceptance is excellent; the sign-up acceptance is hand-waved.
- **§4.9 newsletter** is intentionally a placeholder, which is fine, but it sits in §6.3 v1.2 with the implication that someone could story-it. The `[OWNER DECISION]` callout helps; consider hardening the "downstream BMad workflows should not propose specifics" line.

### Findings

- **high** FR-13 acceptance is a section list, not consequences (§4.7) — "Includes: value proposition, target outcome, syllabus summary, pricing, purchase CTA" tells a story author nothing about what done looks like. *Fix:* add at least one bound per item (e.g., "value proposition: a single sentence under 25 words, visible above the fold on mobile; CTA button is the only action above the fold").
- **high** FR-17 progress acceptance has unresolved multi-device semantics (§4.7) — "Progress persisted per learner across sessions and devices" leaves the cross-device merge behavior undefined. *Fix:* add "Last write wins per (learner, lesson) pair; no merge UI." or whatever the author intends. Also clean up the stale "storage shape decided alongside §9 Q15" — Q15 is resolved.
- **medium** FR-18 sign-up acceptance is hedged with "likely" (§4.7) — "Sign-up flow (likely triggered as part of FR-16 first-purchase) creates an account". *Fix:* commit. "Sign-up is bundled into the first-purchase Stripe Checkout success flow; no standalone sign-up surface in v1.1" or "A standalone `/signup/` surface exists at v1.1 for X reason."
- **medium** FR-16a payment-confirmation timing is soft (§4.7) — "Redirect post-purchase lands on a success page that immediately confirms access (no 'your access will be granted in a few minutes' hand-wave)." This is a posture, not a testable bound. *Fix:* add "By the time the redirect lands, the entitlement row exists in the DB and the user's session reflects it — verifiable by hitting `/course/lesson/{first}` from the success page and getting the lesson body, not the paywall." Some of this is hinted at, but make it explicit.
- **low** FR-14 syllabus lacks bottom-of-page CTA criteria (§4.7) — no bound on whether syllabus drives back to `/course/` purchase. *Fix:* one line. Either "Syllabus page ends with a 'Buy the course' CTA" or "Syllabus is read-only; purchase CTA is on `/course/` only."

## Scope honesty — strong

§5 Non-Goals does real work and has been reconciled with v1.05 ("Updated 2026-05-26: Pagefind ships in v1.05"). §6.1.1 separates v1.05 from v1 with explicit triggers per feature ("v1.05 trigger: archive reaches ~15 articles"). §6.2 marks RSS as "DEFERRED pending author research" rather than silently dropping it.

The §6.1 v1 migration checklist is exactly the kind of artifact downstream story creation will use ("All 5 articles' frontmatter validates under the new Zod schema"). Open-questions count is low — most are RESOLVED with decisions inline. `[NEEDS INPUT]` remains on the two §4.7 sub-decisions (community, certification) with stated defaults, which is honest.

The PRD does over-correct in one place: the §4 prologue note about FR numbering is now ~9 lines explaining why FR IDs are non-monotonic and why renumbering is deferred. This is honest but symptomatic — see the downstream usability section.

### Findings

- **medium** Implicit assumption: no v1 traffic load to size against (§7, §8) — the PRD nowhere states an order-of-magnitude expectation for v1 traffic. NFR-1 perf budget targets a low-end laptop; NFR-6 gate doesn't load-test. That's defensible for v1, but FR-16b's "≤ 100 sales/month" appears for the first time in v1.1 without prior scaling assumptions. *Fix:* one line in §7 or §8 stating the assumed v1 audience size order (e.g., "Assumes <10K monthly uniques at v1, <50K by v1.1") so the absence of load testing is explicit-by-design, not unstated.

## Downstream usability — adequate

Glossary §3 is present and the terms (Article, Category, Tag, Source, Draft, Reader, Free track, Paid track, Course, Lesson, Learner) are used consistently across FRs. The §10 Inferences Index is a real downstream win — story authors can scan what was guessed from code vs. confirmed-by-author without grepping. §6.1 v1 migration checklist is also exactly what downstream needs.

The hard problem: FR numbering. The §4 prologue spells out that FR IDs are non-monotonic and §4.x section ordering is "§4.1, §4.2, §4.3, §4.4, §4.5, §4.6, §4.10 (v1.05), §4.9 (v1.2), §4.8 (v1), §4.7 (v1.1)" — and that "FR-19 is intentionally unused." A story author opening this doc will spend the first 5 minutes orienting themselves before they can extract anything. The PRD is honest about it ("the cost of touching every cross-reference in the doc and the decision log outweighs the benefit at this stage") — but the cost has been pushed onto every downstream reader instead. At a single one-time fix vs. N downstream-reading costs, this trade-off may be inverted.

Cross-references are dense. §6.3 mentions FR-7, FR-8, FR-23, FR-26, FR-27, FR-28, FR-29, §4.7, §4.9, §4.10 in the space of a few paragraphs, plus the v1.05/v1.1/v1.2/v1.3 milestone labels. The PRD assumes the reader has loaded all of this into working memory. For a chain-top PRD feeding architecture and story creation, this is borderline.

UJ→persona linkage is clean: UJ-1 names Lin (staff engineer at 5000-person company — anchored to §2.1.1), UJ-2 names Vik (engineering manager — §2.1.1), UJ-3 names Robert (author), UJ-4 names Maya (junior engineer — §2.1.2). Each UJ resolves to a defined or named figure.

### Findings

- **medium** FR ID disorder is a downstream tax (§4 prologue, throughout §4 and §6) — non-monotonic FR IDs (FR-1, FR-2, FR-25 in §4.1; then FR-28 / FR-27 in §4.1) plus the deliberately-unused FR-19 force every reader to load the §4 prologue's mental model. The prologue is honest, but the cost compounds across architecture, UX, and story extraction. *Fix:* either accept this and add a small "FR ID → section" map to the §3 glossary or near the §4 prologue (probably 15 lines), or pay the renumber cost once. Either beats "every downstream reader pays the orientation cost forever."
- **low** v1.05 / v1.1 / v1.2 / v1.3 milestone labels are dense in cross-references (§6.3 esp.) — no single table maps "what's where." *Fix:* a small table at the head of §6.3 — milestone | content | trigger | rough sequencing. Cheap, reduces working-memory load substantially.
- **low** §3 Glossary doesn't include "Entitlement" or "Paywall page" or "Session," all of which are load-bearing terms in §4.7 (§3, §4.7) — story authors working on FR-15/FR-16/FR-18 will have to infer. *Fix:* three additional glossary entries.

## Shape fit — strong

The PRD shape matches the product: a consumer-facing publishing site evolving into an audience-platform with a paid product. UJs and personas are present and load-bearing. The brownfield framing is explicit ("Reverse-engineered from existing codebase ... It is *not* the output of a real PRD discovery session") and existing-code references are accurate (component names, file paths, schema files all check out against the live codebase). The chain-top expectation (feeds architecture and story creation) is acknowledged in §0.

No over-formalization: rigor is calibrated to the stakes (moderate — $99–199 course at v1.1, not enterprise launch). NFR-6 is concrete but not over-engineered. FR-16a/16b correctly skips refund-revocation and dispute handling for v1.1 ("handle that one manually until a pattern justifies code") — that's stake-calibrated discipline.

No findings.

## Mechanical notes

- **Glossary drift:** No drift observed for the core nouns (Article, Category, Tag, Source, Draft, Reader, Course, Lesson, Learner). However, "Entitlement," "Paywall page," and "Session" are load-bearing in §4.7 without glossary entries.
- **ID continuity:** FR-19 is deliberately unused (documented). FR IDs are non-monotonic by design (documented). FR-16 is split into FR-16a and FR-16b — also documented. Cross-references resolve (spot-checked: FR-21 → FR-22 → §4.8 → §6.1; FR-23 → §4.10 → §6.1.1).
- **Inferences Index roundtrip:** §10 lists 14 entries. Spot-check against the inline markers: §1 Vision strategic-posture paragraphs and the final closing paragraph are present; §2.1.1, §2.1.2, §2.2.A, §2.2.B, §2.3, UJ-1 through UJ-4 are all listed. The index also catches NFR-3 and NFR-5 as INFERRED. Looks complete to spot-check accuracy.
- **UJ persona linkage:** All four UJs name a persona by exact label (Lin/Vik/Robert/Maya, with Lin and Vik anchored to §2.1.1 by role description, Maya to §2.1.2 explicitly). No floating UJs.
- **Required sections:** All present (Vision, Target User, Glossary, Features with FRs, Non-Goals, MVP Scope, NFRs, Success Metrics, Open Questions, Inferences Index).
- **Stale parenthetical:** FR-17 references "storage shape decided alongside §9 Q15" but Q15 is now RESOLVED — minor staleness, flagged above in Done-ness findings.
- **FR-15 stale reference:** "Auth via the chosen provider (§9 Q14). Entitlement checked from the chosen store (§9 Q15)" — both Qs are now resolved; the PRD reads cleaner if these references are updated to "Better Auth" and "Postgres entitlements table" directly. Low priority.
