# Adversarial Review (Re-validation) — prd.md

## Verdict

The three first-pass criticals are genuinely closed at the spec level — FR-21 now reads like something an engineer could actually verify, the v1.1 roadmap is sequenced instead of fantasy-parallel, and v1.05 is a real escape valve for v1 sprawl. That's real progress. But the fix cycle has done what fix cycles do: it has redistributed the risk rather than reduced it. The PRD grew ~50% (from ~600 to 928 lines) while ostensibly *removing* scope, the v1.1 stack has hardened into a stack the solo author has never operated (Better Auth + Drizzle + Postgres + `@astrojs/node` + Stripe + systemd, all in one Node process on one VPS), and several "committed" thresholds (Lighthouse ≥95, WCAG 2.1 AA, 60s build budget, ~15-article v1.05 trigger) have been promoted from hopes to build-blocking gates without any baseline measurement to prove they're achievable. The PRD is now most likely to fail in three places: (1) v1.05 sliding into permanent deferral because its trigger is corpus-size and the author publishes 1–2/month; (2) the v1.1 stack collapsing under its own first-time-operator surface area in the first quarter post-launch; (3) NFR-1/NFR-2 blocking a real deploy in the first week and getting silently relaxed (which destroys the gate's credibility for everything else). The doc is materially better than at first pass, but it is now over-specified relative to the author's demonstrated operating posture, and the over-specification is itself a risk.

## Findings

### [Critical] v1.05 has a corpus-size trigger that cadence will never naturally cross within v1.1's lifetime (§6.1.1, §6.3)

§6.1.1 says:

> FR-23 Pagefind search. Cut from v1 because 5 articles do not need search. v1.05 trigger: archive reaches ~15 articles
> FR-28 related articles. ... v1.05 trigger: archive reaches ~15 articles

§8 commits to 1–2 articles/month. Starting from 5, the ~15-article threshold lands at month 5 to month 10. §6.3 schedules v1.1 (course) immediately after v1.05 and frames v1.05 as "one focused work block — likely a single week." But the same author is also the only person who can write articles. While the author is heads-down on v1.1 architecture and build (months 1–9), cadence will *decrease*, not increase, pushing the v1.05 trigger out further. Once v1.1 ships, v1.2 newsletter is already queued. **v1.05 will be perpetually 2–3 articles short of triggering, and there is no time-boxed fallback.** The "one focused week" framing makes this worse, not better — a single week is exactly the size of work that loses to every other priority.

Failure mode: v1.05 becomes the graveyard the first-pass review warned the deferral list could become. The four features (search, series, related, near-duplicate checks) sit at the bottom of a stack ranked under course, newsletter, and audience infra forever.

Harden: add a **time-based OR-trigger**. "v1.05 ships when (corpus ≥ 15 articles) OR (12 months after v1 ships), whichever first." Without an OR-trigger, "v1.05" is just a politer word for "out of scope."

### [Critical] The 9-month forcing function has no named owner and no automatic mechanism (§6.3)

§6.3 says:

> If v1.1 has not shipped within 9 months of v1.1 architecture work starting, automatically trigger a re-decision pass with two specific options on the table

"Automatically" is doing all the work here, and there is nothing in the PRD that makes it automatic. There is no calendar entry, no doc-level due date, no person-who-is-not-the-author who will notice. The same solo author who is 9 months into a slipping course build is also the only person who would (a) notice the 9-month mark, (b) interrupt their own work, (c) honestly evaluate which option, (d) write off ~9 months of sunk cost. That is exactly the discipline this contingency exists to compensate for.

Compare to NFR-6's hard-gate: "the script runs `astro build`, then `npx playwright test`, then rsyncs `dist/`" — *that* is automatic. The forcing function isn't.

Failure mode: 9 months becomes 14 becomes 18, the re-decision never happens, the course never ships, the newsletter never ships, and the PRD's roadmap quietly stops being load-bearing. The author tells themselves they're "close" every month.

Harden: pick one. (a) Pre-commit to the third-party fallback by writing the contingency code-path *now* (scaffold a Lemon Squeezy account so the switch is two days, not two months). (b) Set a hard calendar date in the PRD (e.g., "2026-12-01: re-decision day") and make the forcing function date-anchored rather than relative-to-start. (c) Externalize the trigger — agree with one accountability partner who pings on the date. Without one of these, "automatic" is a hope.

### [High] NFR-1 (Lighthouse ≥95) and NFR-2 (WCAG 2.1 AA) are build-blocking with zero baseline (§7, §6.1)

§7 NFR-1:

> Lighthouse Performance ≥ 95 on `/blog/{slug}/` (median across the 5 published articles ...). Enforcement: the NFR-6 pre-deploy gate fails if the median dips below 90.

§7 NFR-2:

> WCAG 2.1 AA on all v1 surfaces ... Initial baseline established via an axe-core / Playwright a11y test in the NFR-6 smoke gate (zero violations of `wcag2a` and `wcag2aa` rule sets).

Neither has been measured. The current site is a Tailwind+Astro static blog — *probably* close to 95, *probably* close to WCAG AA, but "probably" is not a build-blocking gate. The first time the author wires up Lighthouse CI and it returns 88 because of a font-loading flash or a CLS issue from prose-purple line-height, the deploy stops. The first time axe-core flags a `wcag2aa` violation (color contrast on `text-gray-500`, missing form label on the cookie banner, missing `lang` somewhere in `BaseLayout`), the deploy stops. The author then has two options: fix it in minutes (best case) or **disable the gate** ("just this once"), which destroys NFR-6's credibility for everything else gated on it — including the cookie-consent verification that was the first-pass critical fix.

Failure mode: the first NFR-1/NFR-2 false-fail erodes the gate as a hard discipline, and the cookie-consent hard-gate inherits the erosion.

Harden: **measure first, commit second**. Run Lighthouse and axe-core against the current 5 articles, record the numbers, then set the gate at the measured baseline OR the committed target, whichever is more lenient. Specifically, NFR-1 should read "≥ measured-baseline OR ≥ 90, whichever is lower for v1; ratchet up over time." The committed 95 target lives in §8 as a goal, not in §7 as a gate.

### [High] FR-21 hard-gate spec assumes server-rendered consent check; FR-1–9 essay pages are statically generated (§4.8, §4.7)

This is the over-correction the prompt hinted at. FR-21 says:

> Server-side: each page render checks for the `ee-consent` cookie. If `accept`, the GA4 snippet is rendered into the page; if `reject` or absent, it is not.

But §4.7 explicitly says:

> Astro hybrid render mode. Essay pages (FR-1–FR-9) remain statically generated; course-related routes ... opt into SSR via `export const prerender = false`.

A statically-generated essay page has *no per-request render*. The HTML is built once and served identically to every visitor regardless of cookies. The "server-side" consent check in FR-21 either (a) doesn't apply to the 99% of pages that are essay pages, in which case FR-21's first mechanism bullet is wrong, or (b) forces essay pages out of static generation, in which case the "essays stay static" decision in §4.7 is wrong, or (c) requires that the GA4 snippet be conditionally injected client-side after a cookie check, in which case FR-21's "GA4 script tag is not in the document at all" promise is technically still true but the implementation is meaningfully different from what FR-21 describes.

The honest implementation for static pages is: ship the page with **no GA4 tag at all**, run a tiny inline script on every page that reads `ee-consent`, and *if and only if* `accept`, inject the GA4 tag client-side at runtime. That's a coherent design — but it isn't what FR-21 says. FR-21 conflates the SSR-route mechanism (correct for `/course/lesson/*`) with the static-route mechanism (impossible by definition).

Failure mode: the first Playwright test ("clean cookie jar load asserts no GA-domain requests") passes trivially because the static HTML has no GA tag, ever — for *any* visitor, not just pre-consent. The second test (`ee-consent=accept` preset, GA loads) only passes if client-side injection actually happens. The test suite is technically satisfied but doesn't prove what FR-21 claims it proves.

Harden: split FR-21 into two mechanisms. (a) Static essay pages: GA4 tag is never in the served HTML; a small inline `<script>` reads `ee-consent` and injects GA4 if and only if `accept`. (b) SSR routes (v1.1+): server-side check renders or omits the snippet at render time. Both share the same Playwright test suite. Without this split, the FR has a quiet contradiction with §4.7.

### [High] v1.1 stack is six new-to-author dependencies stitched together with no operational NFR (§4.7, decision log 2026-05-26)

The decision log honestly enumerates the risks but doesn't capture them in the PRD. The v1.1 stack adds, in one release:

- Better Auth (~2024 — log says "Lucia announced sunset in 2024; Better Auth is the spiritual successor" — a polite way of saying "newish, churn risk")
- Drizzle ORM
- Managed Postgres (Neon default)
- `@astrojs/node` SSR adapter
- Stripe Checkout + webhook handler
- systemd (implied — "the build script ... extends to also build and restart the Node SSR process")
- Astro hybrid render mode (new posture for an author who has only shipped fully-static)

The decision log lists four risks (Node uptime, DB hard-dependency, Better Auth churn, single-VPS bus factor) but **no FR or NFR in the PRD captures them**. There is no NFR for "course route uptime," no SLO, no incident-response posture, no migration story for if Better Auth deprecates a primitive between pin and unpin. The FR-16a/16b split is good operational thinking, but it only covers Stripe-side failures, not the Node-process-down failure (in which case learners see a 502, not a paywall).

Failure mode: when (not if) Better Auth ships a breaking change in a minor version, or Neon throttles the free tier, or the SSR process leaks memory and OOMs at 3am, there is no documented response and no documented degraded mode. The course goes down. The author finds out from a customer email.

Harden: add an NFR-8 covering v1.1 operational posture — uptime target (be honest: 99% is fine, 99.9% would be a lie), restart-on-crash via systemd, a health-check route, what happens to essay traffic if the SSR process is down (it should keep working — but that depends on whether the reverse proxy routes static pages through the Node process or around it; this is not specified anywhere in the PRD).

### [High] v1.1 architecture pass is supposed to design shared infra for v1.2 newsletter, but v1.2 specifics are deliberately undefined (§4.9, §6.3)

§4.9 says:

> Designed during the v1.1 architecture pass so course and newsletter share infrastructure (database, transactional email, account flows). Building the same infra twice is the failure mode this sequencing prevents.

But §4.9 also says:

> FRs to be added when the author begins detailed design. Anticipated surface area (use as a checklist when scoping, not as a commitment): ...

You cannot design shared infra for an undefined target. "Shared transactional email" between a Stripe-webhook receipt sender and a 1000-subscriber bulk newsletter is a different architecture from a single SMTP relay — bulk needs DKIM/DMARC/SPF tuning, IP warming, bounce handling, complaint feedback loops; transactional needs none of that. "Shared account flows" between course-buyers (who pay) and newsletter-subscribers (who don't) opens questions the PRD doesn't address: is a subscriber a "user"? Same DB table? Same auth session model? Same email-verification flow? Better Auth has opinions; "anticipated surface area as a checklist not a commitment" doesn't.

Failure mode: v1.1 architecture is built optimized for the course alone (because that's the only concrete spec), and v1.2 newsletter discovers in month 10 that the shared infra is the wrong shape. Either (a) v1.2 builds its own infra anyway (the "two infras" failure mode the PRD claims to prevent), or (b) v1.1 gets retrofitted, doubling its cost.

Harden: make a single v1.2 commitment *now*, even if it's reversible. Two candidates: "v1.2 uses the same Better Auth user table; subscribers are users with no entitlements" or "v1.2 has its own subscribers table and shares only the SMTP relay." Either decision is enough to inform v1.1 architecture; the absence of either decision means v1.1 will guess.

### [High] Scope grew during a fix pass that claimed to cut scope (§4, §6.1)

Line-count check: PRD grew from ~600 to 928 lines. v1.05 deferred 4 FRs; the YOLO/criticals/lows passes added or hardened:

- FR-29 engagement instrumentation (new in v1 — GSC + engaged-time event + scroll/outbound clicks)
- FR-25 source-citations footer (added during open-questions walk)
- FR-2 reading-time wiring (was layout-ready, now active)
- FR-21 cookie consent hand-roll + two Playwright tests
- FR-16a/16b split (v1.1, but the spec doubled)
- FR-18 sign-out spec
- FR-7 hamburger nav with full a11y acceptance criteria
- §4.6 FR-12 slug-collision lint promoted to v1
- §6.1 v1 migration checklist (5 items)
- NFR-1 / NFR-2 / NFR-4 promoted from hedged to build-blocking
- §8 counter-metrics paragraph
- §10 Inferences Index

v1 lost 4 FRs (Pagefind, series schema, series ribbon, related articles). v1 gained: FR-29, FR-25 (active now), FR-2 (active now), the entire FR-21 hand-rolled implementation, three committed NFRs that were previously hedged, the slug-collision lint, a migration checklist, and the v1.05 milestone itself with all its tracking overhead. **The net change to v1 surface area is positive, not negative**, even after the "deferral."

Failure mode: the author thinks v1 got smaller. It got broader. The deferred items had concrete cost (write the algorithm, write the integration); the items added in their place have *distributed* cost (every page needs a consent check; every deploy needs a Lighthouse+axe pass; every article needs reading-time computation; every build needs slug-collision-lint). Distributed cost is harder to budget than concentrated cost.

Harden: do a real v1 work-estimate. List every FR and NFR in v1 with a person-hours estimate. If the total exceeds 80 hours (two solid weeks for a solo author with a day job), cut more — and cut the right things (the engagement instrumentation, the migration checklist, NFR-1/NFR-2 hard gates) rather than the easy things.

### [Medium] FR-7 hamburger menu spec ships before any other interactive component has the same discipline (§4.3)

FR-7 now has 9 acceptance criteria for the mobile hamburger, including focus trap, focus restore, click-outside, Escape key, aria-expanded/aria-controls, focus-on-open, wrap-tabbing, real `<button>` element. This is a correct spec. It is also more spec than any other interactive surface in v1. The FR-21 cookie banner inherits some of these requirements implicitly (it's interactive, on every page, and inside the WCAG 2.1 AA commitment) but does not enumerate them. The FR-23 search modal (deferred) will need them. The v1.1 paywall page, account UI, login form will all need them.

This is a one-off spec spike rather than a shared discipline. NFR-2 commits to WCAG 2.1 AA across all v1 surfaces but doesn't enumerate the acceptance criteria that satisfy it; FR-7 picks one component to over-specify.

Harden: either (a) extract the 9 criteria into an NFR ("interactive components must satisfy: ..."), or (b) trim FR-7 down to "the menu satisfies NFR-2" and trust the gate.

### [Medium] FR-16b admin reconcile route has no auth-on-the-author spec (§4.7)

FR-16b describes:

> an authenticated admin route (`/admin/reconcile-stripe`, gated by environment variable allowlist for the author's email)

The auth provider is Better Auth. The route is SSR. The "environment variable allowlist for the author's email" is doing the gating — but the author's email is fetched from where? The Better Auth session? A static env var compared against the logged-in user's email? What happens if the author logs out, or never logs in (they're the author, not a learner — do they have an account at all)? Is there a separate "admin" account, and is it the same identity as the author's "learner" account if they ever buy a preview lesson with their own card to test the flow?

Failure mode: the simplest implementation (env var ALLOWED_ADMIN_EMAIL = robert@..., check against `session.user.email` after Better Auth login) is fine — but it's not specified anywhere, and if the author implements it as `req.headers['x-admin-email']` (a real mistake people make), the route is wide-open. Or, if the author never logs in to their own course as a learner, the route is unreachable.

Harden: spell out the admin auth model in two lines. "Author has a Better Auth account marked `is_admin=true`. `/admin/*` routes check session + admin flag." Done.

### [Medium] FR-15 noindex on lesson AND paywall pages may break the paywall's marketing function (§4.7)

FR-15:

> SEO posture: Lesson pages AND paywall pages set `<meta name="robots" content="noindex, nofollow">`. Google must not index gated content ...

Reasonable for lesson bodies. But the *paywall* page is half marketing — it has the lesson title (visible), description, value pitch, and a "Buy the course" CTA. If a curious reader shares a deep-link to `/course/lesson/01-reading-real-codebases` and that link shows the paywall (per FR-15), it's a marketing surface. If that marketing surface is `noindex, nofollow`, Google won't index, won't show in featured snippets, and won't pass any link equity back to `/course/`.

This isn't wrong per se — it's a deliberate choice to keep gated URLs out of search — but the PRD doesn't articulate the tradeoff. There's an alternative: paywall pages are *indexed* (with marketing content), lesson bodies are noindexed (because they only render for authenticated learners, so Googlebot would see the paywall anyway).

Harden: add one sentence acknowledging the tradeoff. Or revisit — the safer option may not be the right one when the course needs SEO.

### [Medium] §10 Inferences Index is incomplete and gives false comfort (§10)

The index lists 14 rows. The PRD has more than 14 `[INFERRED]` and `[CONFIRMED]` markers. Spot-check:

- §4.7 entire section has `[CONFIRMED — author affirmed 2026-05-24]` — not in index.
- §4.8 has `[CONFIRMED 2026-05-24]` — not in index.
- §4.6 has `[CONFIRMED — author affirmed 2026-05-24]` — not in index.
- Many `[CONFIRMED YYYY-MM-DD]` markers from validation updates (FR-7 a11y, FR-18 sign-out, FR-26 near-duplicate, FR-28 near-duplicate, FR-29, FR-21 hardening) are absent.

The index claims to be a rollup; it's actually a selective rollup of §1 / §2 / §7 high-level inferences. The post-walk-through additions (which have the *lowest* confidence — they were added during fix passes) are largely missing.

Failure mode: downstream BMad skills are told to "pay extra attention to rows marked Medium or lower" — but the rows that should be Medium (the YOLO-pass additions like FR-29 metric scope, FR-21 mechanism details, FR-16a/16b webhook behavior) are not in the table. The index gives false comfort.

Harden: regenerate the index by grep, not by re-reading. Every `[INFERRED]` or `[CONFIRMED]` marker in the doc gets a row.

### [Medium] "FR-19 intentionally unused" + non-sequential §4 ordering is documented technical debt (§4 prologue)

§4 prologue says:

> The actual file-order of §4 subsections is: §4.1, §4.2, §4.3, §4.4, §4.5, §4.6, §4.10 (v1.05), §4.9 (v1.2), §4.8 (v1), §4.7 (v1.1). FR-19 is intentionally unused. ... Renumbering for sequential order is deferred — the cost of touching every cross-reference outweighs the benefit at this stage.

This is honest. It's also the kind of explicit-debt note that never gets repaid. Every downstream tool that consumes this PRD has to handle the irregularity. Every reader-facing artifact (epics, stories) inherits the FR-number gaps and section-order skew. The renumber cost is real (30–60 minutes of careful find-replace). The non-renumber cost is paid every time someone reads the doc.

Harden: renumber once now, or accept this as a permanent property of the PRD.

### [Medium] NFR-6 gate venue is "the VPS build script" — no FR specifies what invokes it (§7)

NFR-6:

> Venue: the VPS build script itself. The script runs `astro build`, then `npx playwright test`, then rsyncs `dist/` to the web root — and aborts before rsync if either step exits non-zero.

What invokes the script? A git hook? A CI service polling the repo? Manual `ssh ... && ./deploy.sh`? The PRD doesn't say. The build-time gates (NFR-1, NFR-2, NFR-4, FR-21 Playwright tests, slug-collision lint) all depend on the script actually running. If the author can `git push` and have the site update via some other path (e.g., a webhook-triggered rebuild that *doesn't* call the gated script), all the discipline NFR-6 commits to evaporates.

Harden: one bullet specifying the trigger ("git push to main on the VPS-side bare repo invokes a post-receive hook that runs `./deploy.sh`"). Without this, the gate is a hope dressed up as a venue.

### [Medium] v1.1 "course-related expansions" silently modify v1 surfaces (§6.3, FR-7, FR-8)

§6.3 v1.1 block:

> Course-related v1.1 expansions of existing v1 features: FR-7 header nav gets a `/course/` link; FR-8 footer gets the course mention block.

FR-7 in §4.3:

> v1.1 expansion (per §4.7 funnel): Adds a `/course/` link to the nav.

So FR-7 (a v1 feature with NFR-2 a11y commitment) is silently expanded in v1.1. Adding a nav item is small. But it also expands the hamburger menu (5 items instead of 4), affects active-state highlighting (`/course/` needs an `aria-current` rule), and may push tab order over a focus-trap boundary on mobile. None of this is in FR-7's acceptance criteria.

Similarly FR-8's v1.1 expansion adds "a brief course callout block ... must read as informational ('There's a course') not promotional." This is a copywriting note, not a spec. What does the block contain? Title + one line? Link? Image? Does it appear on `/course/` itself (recursive)?

Harden: don't leave v1.1 surface modifications as one-line addenda inside v1 FRs. Either expand FR-7 and FR-8 with v1.1 acceptance criteria, or create FR-7.1 and FR-8.1 as v1.1 FRs that supersede the v1 version.

### [Low] §5 Non-Goals still has live strikethroughs (§5, §6.2)

§5 contains:

> ~~No source-citation rendering on articles in v1.~~ **Reversed 2026-05-24:** source rendering added in v1 — see FR-25.

Two more strikethroughs in §6.2. This is fine for a working document but bad for downstream tool consumption — strikethroughs are not semantic. If a story-generator skill reads §5 to extract non-goals, it'll see "No source-citation rendering" as a non-goal even though the doc text overrides it.

Harden: delete the struck lines; keep the reversal note in the decision log only.

### [Low] §4.7 stacks four "sensible defaults" without flagging them (§4.7)

> $99–$199 one-time payment. Final price within the band TBD at launch readiness.
> Lifetime access — sensible default ...
> 30-day refund window — sensible default ...
> 1–2 free preview lessons — tentative default ...

Four soft commits in a row. Lifetime access is the one that prevents future re-monetization; 30-day refund is the one that determines support load. All four are sitting there with no Q in §9 anchoring them.

Harden: add a Q17 to §9 — "Pricing-model lock-in: confirm lifetime + 30-day + preview-count before v1.1 architecture starts."

## Patterns

The fixes reveal three blind spots the author should know about:

**1. The author conflates spec-completeness with shippability.** Every fix in this cycle added more spec. FR-21 went from "we'll figure out consent" to a 30-line testable hard-gate. FR-7 mobile nav went from "responsive" to 9 acceptance criteria. FR-16a webhook went from "Stripe handles it" to signature-verification + idempotency + retry posture + reconciliation route. This is *good engineering thinking* but it has consumed the same psychological budget the v1 cuts were supposed to free up. A solo author cannot ship a course product against a PRD with the operational discipline of a small SaaS company. The PRD has been hardened against the wrong threat — it has hardened against ambiguity, but the bigger threat is execution surface area, and the hardening has *increased* execution surface area.

**2. Hard gates are being created faster than baselines are being measured.** NFR-1, NFR-2, NFR-4 are all newly build-blocking. None of them has a measured baseline. FR-21 has two Playwright tests but the test infra itself doesn't exist yet — Playwright is in NFR-6 but the project has no `playwright.config.ts` and no test files. The slug-collision lint is committed but unimplemented. v1 now contains ~5 invariants that will *first run on the deploy*, and the first failure is highly likely to come from a gate-implementation bug, not a real product issue. The remedy isn't "fewer gates"; it's "measure the baseline before committing the gate" and "wire the gate before committing the threshold."

**3. Sequencing is correctly identified as the discipline, but the sequence is unenforced.** The §6.3 sequencing (course → newsletter → audience) is the right call. The 9-month forcing function is the right *concept*. But both rely on the author noticing slip and acting on it. The first-pass critical #2 was "three coordinate priorities for a solo author"; the fix is "sequence them" — but the same solo author is also the only person who enforces the sequence. The PRD now has 4–5 places (v1.05 trigger, 9-month forcing function, NFR-6 gate venue, UX revision pass trigger) where the failure mode is "author doesn't notice/act" and no remediation. The PRD is good at telling the author what *should* happen; it's silent on what makes any of it actually happen.

The net of this re-review: the PRD is materially better than first pass. The criticals are addressed at the spec level. But the author has solved spec problems by adding more spec, and several of the new gates (NFR-1/2/4 thresholds, 9-month forcing function, v1.05 trigger, FR-21 server-render mechanism on static pages) will fail first-contact with reality. The right next step is not another fix pass — it is a *measurement* pass: actually run Lighthouse, actually run axe-core, actually write the cookie-consent Playwright test, actually estimate the v1 work in hours. Then revisit the gates with real data.
