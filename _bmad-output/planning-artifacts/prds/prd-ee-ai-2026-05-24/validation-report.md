# Validation Report (Pass 2) — Engineering Excellence

- **PRD:** `_bmad-output/planning-artifacts/prds/prd-ee-ai-2026-05-24/prd.md`
- **Rubric:** `/Users/rfk/.claude/skills/bmad-prd/assets/prd-validation-checklist.md`
- **Run at:** 2026-05-26
- **Grade:** Fair (improvement from Pass 1: Poor)

## Improvement vs. Pass 1

All 3 first-pass criticals closed at the spec level. 8 high + 11 medium + 8 low findings all addressed during the YOLO + critical-fix passes. 4 spawned architectural sub-questions resolved. Rubric verdicts improved across all 7 dimensions (no thin/broken; 5 strong, 2 adequate). PRD grew from ~600 to 928 lines.

## Overall verdict

The PRD is now in adequate-to-strong shape across every rubric dimension. The walk-through has the texture of a real planning artifact: trade-offs are named with what was given up, deferrals carry triggers, and the v1.1 stack hangs together as one coherent box. Decisions are visible rather than averaged away.

The adversarial reviewer found that the fix cycle has done what fix cycles do: redistributed risk rather than reduced it. Two new critical findings flag a meta-pattern — the PRD's discipline mechanisms (v1.05 article-count trigger, 9-month forcing function) depend on the same author who needs the discipline. The strict grade formula would say Poor (any critical → Poor). The honest grade is **Fair**: these criticals are about enforcement of fixes, not about defects in spec.

Patterns surfaced: (1) author conflates spec-completeness with shippability; (2) hard gates created faster than baselines measured; (3) sequencing identified but unenforced. The right next step is not another fix pass — it is a **measurement** pass.

## Dimension verdicts

- Decision-readiness — strong
- Substance over theater — adequate
- Strategic coherence — strong
- Done-ness clarity — adequate
- Scope honesty — strong
- Downstream usability — adequate
- Shape fit — strong

## Findings by severity

### Critical (2)

**[Adversarial]** — v1.05 corpus-size trigger will never naturally fire (§6.1.1, §6.3)
At 1-2 articles/month from 5 articles, ~15 lands at month 5-10. But while the author is heads-down on v1.1 (months 1-9), cadence will decrease. v1.05 becomes the graveyard the first-pass review warned about.
Fix: Add a time-based OR-trigger. "v1.05 ships when (corpus ≥ 15) OR (12 months after v1 ships), whichever first."

**[Adversarial]** — 9-month forcing function has no automatic mechanism (§6.3)
"Automatically" is doing all the work; nothing makes it automatic. The same solo author 9 months into a slipping build is the only person who would notice and act.
Fix: Pick one — (a) pre-commit fallback (scaffold Lemon Squeezy now), (b) hard calendar date in PRD, (c) externalize trigger to an accountability partner.

### High (7)

**[Done-ness]** — FR-13 landing-page acceptance is section list not consequences (§4.7)
"Includes: value proposition, target outcome, syllabus summary, pricing, purchase CTA" tells a story author nothing about done.
Fix: At least one bound per item (length, position, mobile visibility).

**[Done-ness]** — FR-17 multi-device progress merge undefined (§4.7)
"Progress persisted across devices" doesn't say what happens when learner toggles complete, signs out, signs in on another device.
Fix: "Last write wins per (learner, lesson) pair; no merge UI." Update stale Q15 reference too.

**[Adversarial]** — NFR-1/NFR-2 build-blocking with zero baseline (§7)
Lighthouse ≥95 and WCAG 2.1 AA never measured. First false-fail forces "disable just this once" — destroys NFR-6's credibility for the cookie-consent verification.
Fix: Measure first, commit second. NFR-1 reads "≥ measured-baseline OR ≥ 90, whichever lower for v1; ratchet up." 95 lives in §8 as goal.

**[Adversarial]** — FR-21 hard-gate spec contradicts static essay pages (§4.8 vs §4.7)
FR-21 says "Server-side: each page render checks the ee-consent cookie." But §4.7 says essay pages stay statically generated. A static page has no per-request render.
Fix: Split FR-21. (a) Static essay pages: no GA4 in served HTML; inline script reads cookie + client-side injects. (b) SSR routes: server-side check at render time. Both share Playwright tests.

**[Adversarial]** — v1.1 stack is six new-to-author deps with no operational NFR (§4.7)
Better Auth + Drizzle + Postgres + @astrojs/node + Stripe + systemd + hybrid render. Decision log lists risks but no FR/NFR in the PRD captures them.
Fix: Add NFR-8 — uptime target (be honest), restart-on-crash, health-check route, behavior if SSR process is down.

**[Adversarial]** — v1.1 supposed to design shared infra for undefined v1.2 (§4.9, §6.3)
"Anticipated surface area as a checklist not a commitment" — you cannot design shared infra for an undefined target.
Fix: Single v1.2 commitment now: "v1.2 uses Better Auth user table; subscribers are users with no entitlements" OR "v1.2 has own subscribers table; shares SMTP only."

**[Adversarial]** — Scope grew during a fix pass that claimed to cut scope (§4, §6.1)
v1 lost 4 FRs; gained FR-29 + FR-25 active + FR-2 active + FR-21 hand-rolled + 3 NFRs hard-gated + slug-collision lint + migration checklist. Net positive surface area.
Fix: Real v1 work-estimate. If >80h, cut more — the right things (engagement instrumentation, migration checklist, NFR-1/2 gates) not the easy ones.

### Medium (12)

**[Strategic coherence]** — v1.3 reads as kitchen-sink bucket (§6.3)
**[Done-ness]** — FR-18 sign-up hedged with "likely" (§4.7)
**[Done-ness]** — FR-16a payment-confirmation timing soft (§4.7)
**[Scope honesty]** — No traffic load assumption stated (§7, §8)
**[Downstream]** — FR ID disorder is a downstream tax (§4 prologue)
**[Adversarial]** — FR-7 hamburger spec is one-off discipline spike (§4.3)
**[Adversarial]** — FR-16b admin reconcile route has no auth-on-author spec (§4.7)
**[Adversarial]** — FR-15 noindex on paywall may break marketing function (§4.7)
**[Adversarial]** — §10 Inferences Index is incomplete (§10)
**[Adversarial]** — FR-19 unused + §4 ordering is documented technical debt (§4 prologue)
**[Adversarial]** — NFR-6 venue exists but invocation doesn't (§7)
**[Adversarial]** — v1.1 silently modifies v1 surfaces (FR-7, FR-8) (§6.3)

### Low (8)

**[Decision-readiness]** — Forcing function trigger unmonitored (§6.3)
**[Substance over theater]** — JTBD prose-to-decision ratio (§2.2.A, §2.2.B)
**[Substance over theater]** — FR-9 about-page acceptance is thin theater (§4.4)
**[Done-ness]** — FR-14 syllabus lacks bottom-of-page CTA criteria (§4.7)
**[Downstream]** — v1.05/v1.1/v1.2/v1.3 milestone labels dense without a map (§6.3)
**[Downstream]** — §3 Glossary missing Entitlement / Paywall page / Session (§3, §4.7)
**[Adversarial]** — §5 Non-Goals still has live strikethroughs (§5, §6.2)
**[Adversarial]** — §4.7 stacks four "sensible defaults" without flagging (§4.7)

## Mechanical notes

- No glossary drift on core nouns. New load-bearing terms missing entries.
- FR-19 deliberately unused (documented). FR IDs non-monotonic (documented).
- §10 Inferences Index incomplete — see Medium finding.
- All UJs name personas correctly.
- Stale Q15 references in FR-15 and FR-17.

## Reviewer files

- `review-rubric.md`
- `review-adversarial-general.md`
