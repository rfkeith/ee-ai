# Article Backlog — Engineering Excellence

> Maintained by Sloane (the `content-planner` agent). Each entry is a thesis, not a topic.
> Every entry needs a **lived stake** — the author's first-hand hook (a real mistake, decision, or scar).
> Books give rigor; lived experience gives trust. An entry that's all citation and no scar is half-built.
> Status: `proposed` → `in-progress` → `published`, or `parked` (with a reason, never deleted).
> Cadence target: 1–2 essays/month. Departments: Leadership · Best Practices · Career · AI.
> Raw scene material that hasn't yet found an essay: [scene-library.md](scene-library.md).

_Last reconciled: 2026-06-14_

## Now (in progress / next up)

| # | Title | Department | Premise (one line) | Lived stake / angle | Sources | Status |
|---|-------|------------|--------------------|---------------------|---------|--------|
| 1 | Pre-Mortems for Architecture Decisions: A Practical Stress Testing Framework | Best Practices | Imagine the architecture decision has already failed, then work backward — a structured enterprise stress test, not a vague brainstorm. | _Needs author's angle — which architecture decision of yours went sideways, and would a pre-mortem have caught it?_ | Never Lead Alone (Ferrazzi); Unite the Tribes (Duncan) | in-progress (`draft: true`) |
| 2 | What AI Actually Threatens and What It Doesn't: An Honest Assessment for Engineers | AI | An activity-by-activity breakdown of what AI replaces today, what it can't, and which skills gain or lose value — past both the hype and the doom. | _Needs author's angle — where has AI actually changed your own work, and where did you expect it to and it didn't?_ | Unite the Tribes (Duncan); Never Lead Alone (Ferrazzi) | in-progress (`draft: true`) |

## Proposed

_First slate added 2026-05-28 — four pitches mined from Psycho-Cybernetics (the previously uncited source) and tied to threads the existing corpus already opened. #1–#3 carry real lived stakes; #4 is scar-pending._

_Argument skeletons live in `outlines/` and are linked from each entry once written._

### Leadership

| Title | Premise (one line) | Lived stake / angle | Candidate sources | Status |
|-------|--------------------|---------------------|-------------------|--------|
| | | | | |

### Best Practices

| Title | Premise (one line) | Lived stake / angle | Candidate sources | Status |
|-------|--------------------|---------------------|-------------------|--------|
| Two Clocks: Responding to a Step-Change in Threat | When attacker capability jumps, the response runs on two clocks at once — what buys the most protection *this quarter*, and what structural SDLC/culture change stops a recurrence. Most orgs do the first and call it done. | Author's own: a recent advance in vulnerability exploitation forced a pivot into a new role leading exactly this — triage the gaps for fastest protection, then re-engineer practices/culture/SDLC so it can't recur. | Psycho-Cybernetics (Maltz) — Ch. 13 (crisis into creative opportunity); Unite the Tribes (Duncan) & Never Lead Alone (Ferrazzi) for the culture/SDLC change | greenlit — real scar; stays in Best Practices (decided 2026-05-29), pairs with Pre-Mortems. Distinct from the held "mental rehearsal" pitch below; AI-as-attacker angle spun off to "The Moving Target." **Outline:** [outlines/two-clocks.md](outlines/two-clocks.md) |
| Rehearse the Outage: Mental Simulation as an On-Call Skill | Maltz's synthetic-experience finding — the nervous system can't tell vivid rehearsal from the real thing — as the case for rehearsing incident response *before* it happens. | _needs author's angle — no lived "froze / held steady" incident moment yet_ | Psycho-Cybernetics (Maltz) — Ch. 3 | held — scar-less, not abandoned. Revisit if a real incident-rehearsal moment surfaces |

### Career

| Title | Premise (one line) | Lived stake / angle | Candidate sources | Status |
|-------|--------------------|---------------------|-------------------|--------|
| Scar Tissue: Performing While You're Still Short of the Title | A repeatedly-missed promotion is an emotional scar, not just a setback; left unprocessed it quietly shrinks how you show up — Maltz's move is to relive the wins, not the near-misses. | Author's own, *ongoing*: has missed Managing Director multiple times at a major investment bank; still on the journey, closer than ever — no tidy resolution yet. | Psycho-Cybernetics (Maltz) — Foreword (Furey's "always number two" story is this exact scar), Ch. 9 (failure mechanism), Ch. 10 (emotional scars) | proposed — greenlit. Author confirmed comfortable being publicly vulnerable here (aligns with trust doctrine; the unresolved ending is the point — no "but I made it" bow). Pairs with Self-Image Ceiling as a two-beat bank-leadership arc — sequence apart, don't publish back-to-back |

### AI

| Title | Premise (one line) | Lived stake / angle | Candidate sources | Status |
|-------|--------------------|---------------------|-------------------|--------|
| The Inpert Advantage: What Gains Value When AI Knows Everything | As AI flattens access to expert knowledge, the edge shifts from knowing the rules to asking the question insiders are too embedded to ask — Maltz's "inpert." | _needs author's angle — author still thinking; needs a real moment where a naive question cracked an expert deadlock_ | Psycho-Cybernetics (Maltz) — Preface ("inpert"); cross with the AI Threat Assessment draft | proposed — promising thesis, scar pending; send to pressure-test before writing |
| The Moving Target: Security Posture When AI Accelerates the Attacker | Point-in-time security is dead — AI makes attacker capability a moving target, so the durable posture optimises for *speed of re-assessment and recovery*, not a one-time "secure" state. Your threat model has a half-life. | Shares the security-pivot experience behind Two Clocks, but at a higher altitude — the moment of realising the *landscape* shifted, not just one vuln. **FLAG:** needs a distinct angle from #2 or it reads as leftovers. | Cross with the AI Threat Assessment draft; Psycho-Cybernetics (Maltz) — Ch. 13 (crisis → opportunity) | proposed — spun off from Two Clocks (Robert's idea, 2026-05-28). Thesis still soft ("think about change" is a topic — sharpened claim above). Send to pressure-test. Boundaries: vs. AI Threat draft (that's AI-as-worker, this is AI-as-attacker); vs. #2 (that's response framework, this is posture) |

## Published

| Title | Department | Published | Sources |
|-------|------------|-----------|---------|
| Shielding vs. Exposure: When to Protect Your Team and When to Let Them See the Mess | Leadership | 2026-02-07 | Unite the Tribes (Duncan); Never Lead Alone (Ferrazzi) |
| From Senior to Staff: What You Need to Change and What Your Org Needs to Provide | Career | 2026-02-08 | Unite the Tribes (Duncan); Never Lead Alone (Ferrazzi) |
| Capability vs. Belief: The Con Your Brain Runs on Your Own Competence | Career | 2026-06-14 | Psycho-Cybernetics (Maltz) |

## Parked

| Title | Why parked | Date |
|-------|------------|------|
| From Senior to Staff (v2 draft) | Superseded by the published v3 of the same essay; kept in repo as an AI-drafting variant, not a separate piece. | 2026-05-28 |

## Source library

| Book | Author | Cited in |
|------|--------|----------|
| Unite the Tribes | Christopher Duncan | Shielding vs. Exposure; From Senior to Staff; Pre-Mortems (draft); AI Threat Assessment (draft) |
| Never Lead Alone | Keith Ferrazzi | Shielding vs. Exposure; From Senior to Staff; Pre-Mortems (draft); AI Threat Assessment (draft) |
| Psycho-Cybernetics | Maxwell Maltz | Capability vs. Belief; Scar Tissue (proposed); Two Clocks (proposed); The Inpert Advantage (proposed); The Moving Target (proposed) |
| An Elegant Puzzle | Will Larson | _newly added 2026-06-14; uncited so far — staff-track / engineering-management territory_ |
