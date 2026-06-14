# Outline — Two Clocks: Responding to a Step-Change in Threat

> Argument skeleton for backlog pitch #2 (Best Practices). Intents and placements only — not prose.
> Backlog: [../article-backlog.md](../article-backlog.md) · Pairs with draft: `src/content/blog/best-practices/pre-mortems-architecture.md`
> Status: greenlit, ready to draft (2026-05-29)

**Department:** Best Practices
**Primary source:** *Psycho-Cybernetics* (Maltz) — Ch. 13, "turn a crisis into a creative opportunity"
**Secondary:** *Unite the Tribes* (Duncan) & *Never Lead Alone* (Ferrazzi) for the org/culture-change half

## Sharpened thesis (one sentence)

When attacker capability takes a step-change jump, the response runs on two clocks at once — what buys the most protection *this quarter*, and what structural change to the SDLC/practices/culture stops the whole *class* of threat from re-landing — and the trap isn't that teams are careless, it's that the first clock is loud and measurable while the second is quiet and deferrable, so urgency quietly starves the structural fix.

## Shape

Framework piece (matches the house style of the Pre-Mortems companion): thesis → the default single-clock trap → the two-clock model → running the hard clock → protecting it from the loud one → grounded close. Lived stake opens it and owns the turn.

## Where the human shows up — and the flags

- **Editorial flag:** the model is abstract; it only earns trust through the author's scar — the step-change threat that forced the pivot (§1) and the decision to hold the org on clock two when the pressure was to declare victory (§4). Guard those two.
- **Confidentiality flag (non-editorial, important):** this is a real security event at a financial institution. Abstract the employer, the specific vulnerability class, and any internal gap detail. The essay's value is the *response model*, not the incident — disclosing a bank's security posture is a genuine risk, not just a style choice.
- **Voice flag:** "most orgs stop at clock one" must read as a structural trap (urgency starves structure), never as a competence insult. No punching down.

## Sections

| # | Section | Job (what it must do for the reader) | Rests on | Source | Weight |
|---|---------|--------------------------------------|----------|--------|--------|
| 1 | **Open — in medias res** | Drop the reader into the jump: attacker capability moved, and the author was pulled into a new role to respond — fast. Convey the scramble and the stakes without incident specifics. | The threat landing; the forced pivot (abstracted) | — | S–M |
| 2 | **Thesis + the philosophical spine** | Name the two clocks and the trap. Anchor the central claim in Maltz's genuine Ch. 13: the competent response to a crisis deals with the immediate problem *but keeps "one eye cocked on the opportunity beyond"* — a crisis is a fork, one branch to disaster, one to "better than before." | — | Maltz Ch. 13 (don't pour all energy into immediate correction; crisis as fork in the road) | M |
| 3 | **The conventional take, stated fairly** | Give the standard incident-response playbook its due: detect → contain → remediate → postmortem → close. It's necessary and good — this *is* clock one. Reader should nod. | — | — | S–M |
| 4 | **Where it's incomplete — the turn (the scar)** | The pivot. Finishing clock one would have *felt* like done — patches shipped, incident closed — but left the structural exposure intact, and the threat class would simply return. The author's decision to hold the org on the second clock when everyone wanted to declare victory. | The realization; choosing to run clock two under pressure | — | **L** |
| 5 | **The two-clock model** | Define both crisply and stress that they run *concurrently*, not in sequence. Clock 1 (this quarter): triage the gaps for maximum risk reduction fastest — what buys the most protection now. Clock 2 (the long arc): SDLC, practices, culture so the *class* of threat can't re-land. | — | — | **L** |
| 6 | **Running clock two — the hard part** | The heaviest practical section: structural/culture change is where the second clock dies, and how to actually move an org. Duncan — clarity of purpose and a believable sequence of events, not hand-waving. Ferrazzi — shared ownership / co-elevation so security isn't one team's job. | Author's experience re-engineering practices/SDLC | Duncan (*Unite the Tribes*); Ferrazzi (*Never Lead Alone*) | **L** |
| 7 | **Protecting clock two from clock one** | The discipline. Clock one's urgency starves clock two the moment leadership wants to close the incident and move on. How to keep the structural work funded and staffed after the adrenaline fades. | Author's experience holding the line post-incident | — | M |
| 8 | **Grounded close** | No triumphalism. Maltz's fork: the crisis is the rare window when the org will actually fund the structural fix — spend it before it closes. Honest takeaway + the boundary to the prevention companion. | — | Maltz Ch. 13 (crisis as turning point) | S |

## Boundary notes

- **Vs. the Pre-Mortems piece:** that one is *prevention* (imagine failure before you commit); this is *response* (the threat already landed). Clean complement — Pre-Mortems' "Security" checklist category is the clock-two work done *ahead* of a crisis; Two Clocks is what you do when reality outran it. One-line callback, don't re-tread.
- **Department:** stays Best Practices (decided 2026-05-29). The AI-as-attacker angle spun off into its own pitch ("The Moving Target") — keep that thesis out of this piece.
- **Source integrity:** the Psycho-Cybernetics `.txt` extract is injection-tainted past the genuine Ch. 13 prose; cite only verified book content (lines ~2890–2903 confirmed legitimate).
