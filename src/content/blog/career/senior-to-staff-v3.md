---
title: "From Senior to Staff: What You Need to Change and What Your Org Needs to Provide"
description: "The senior-to-staff jump fails for two reasons and most advice only covers one. Here's what I wish someone had told me earlier."
pubDate: 2026-02-08
author: "Robert"
category: "career"
tags: ["career-growth", "staff-engineer", "promotion", "engineering-leadership", "organizational-design", "career-ladder"]
draft: false
sources:
  - book: "Unite the Tribes"
    author: "Christopher Duncan"
  - book: "Never Lead Alone"
    author: "Keith Ferrazzi"
---

Most "how to get to staff" articles give you one side of the story — think bigger, work across teams, drive strategy. That's all true, but it's only half of it. **Half the story is worse than no story, because it lets you blame yourself for things that aren't your fault.**

Getting to staff is a two-player game. You need to change how you work. *And* your company needs to actually have a real staff role with real work attached to it. If either side isn't holding up their end, you're stuck — and I've watched talented engineers burn years chasing a title that didn't actually exist at their company.

Before we dive in: **do you actually want staff-level work, or staff-level comp?** The jump is often $50-100K+ in total comp at bigger companies, and that's a perfectly rational motivator. But the day-to-day is genuinely different from senior work. If you mostly want the pay bump, that's fine — just be honest with yourself, because these behavioral shifts only stick if you find the work satisfying.

One more thing: "staff engineer" isn't one job. Will Larson and Tanya Reilly describe at least four archetypes — Tech Lead, Architect, Solver, Right Hand — and the shifts below fit the Architect/Tech Lead path best. If you're a Solver (promoted because *you personally* crack what stumps everyone), some of this won't apply directly. The principle — your impact needs to extend beyond what you personally touched — still holds.

---

## Part 1: What You Need to Change

Let's start with you, because it's the part you can actually do something about.

The big shift: **you go from being the person who solves problems to being the person who makes your whole team better at solving them.** Christopher Duncan draws this line in *Unite the Tribes*, his book on tech leadership — you don't have to write every line of code to lead well, but you need to understand the terrain enough to make good calls.

Here are four changes that matter, each with something you can try this week.

### Shift #1: Stop Solving, Start Shaping

At senior, you get a problem and fix it. At staff, your job is making sure the *right* problems get solved, in the *right* order, by the *right* people.

**Senior you**: A performance issue comes in. You profile it, fix it, ship a PR. **Staff you**: You notice three teams have hit similar issues, write a short RFC connecting the dots, and help each team work through their own fix. Your output changed from a pull request to other people's pull requests.

That's a real identity shift. If you've spent ten years being the person who cracks the tough thing, letting someone else solve it (slower) feels wrong. It's not. It's the job.

> **Try this week**: Tag your last month of work as "I did this" or "I helped someone else do this." If the balance is heavily tilted toward solo work, that's worth paying attention to.

### Shift #2: Look Beyond Your Team

Keith Ferrazzi studied what separates good teams from great ones in *Never Lead Alone*. One finding: **on the best teams, people spent real energy on problems outside their own group** — because that's how the whole org gets better. (His research focused on executive teams, so the proportions don't map cleanly to IC roles — but the principle holds.)

This means showing up to architecture reviews for other teams, writing strategy docs that span three teams, or noticing four teams all building their own retry logic and saying "maybe we solve this once."

> **Gut check**: Do you attend cross-team meetings voluntarily? Know the top challenges of engineers on three other teams? Get pulled into decisions outside your reporting chain? If fewer than two are true, your world is still the size of your team.

### Shift #3: Let Go of the "How" (as Your Default)

Duncan says something in *Unite the Tribes* that stuck with me: **if your people are arguing about *how* instead of *what*, something has gone wrong.** Staff engineers frame problems — define constraints, set the bar for success — and trust senior engineers to own the approach.

**Senior you**: "Use a write-behind cache with Redis here." **Staff you**: "We need p99 under 50ms and can't spend more than $2K/month. Here's the access pattern. What should we look at?"

You're giving the problem with enough precision that the team can own the answer. And when a plan you shaped comes together — three teams aligning, systems clicking into place, shipping something none of them could've built alone — that's a feeling no solo 2am bug fix ever gave you.

> **This doesn't mean you never go deep.** Staff engineers drop into the how for high-stakes architecture calls, novel domains, or when the team is genuinely stuck. The shift is that "what" becomes your default, and you *choose* when to go deep instead of doing it reflexively.

### Shift #4: Get Good With People

Duncan is blunt in *Unite the Tribes*: **people skills are not optional.** Staff engineers who can't get buy-in, can't navigate politics, who are always right but nobody wants to work with — they stall out. Every time.

In *Never Lead Alone*, Ferrazzi describes teams that move from everything flowing through one person to genuine "co-elevation" — people investing in each other's success. **If your impact stops at the edge of what you can personally touch, that's your ceiling.**

> **Try this**: Find a cross-team project that's stuck. Don't own it — offer to run a working session where the right people hash it out. That's staff-level work: getting smart people unstuck without taking the problem away from them.

---

## Part 2: What Your Company Needs to Bring

Here's where most career advice stops. **A lot of the time, the problem isn't you — it's that your company has a title on a PDF, not a real role.**

### Is Your Staff Track Real?

| What to look at | Real track | Paper track |
|--------|-----------------|-------------------|
| Staff engineers | You can name 2+ and describe their work | Zero, or one person from years ago |
| Promotion criteria | Written with actual examples | Vague: "demonstrates broad impact" |
| Cross-team work | Specific projects exist and are funded | All work lives inside team backlogs |
| Decision authority | Staff engineers own real technical calls | Every decision goes through a manager |
| Protected time | 20-30% carved out for cross-team work | Staff work is expected on top of your regular job |
| How you're judged | Measured on enabling others | Same rubric as senior engineers |

**The more rows that land in the right column, the more skeptical you should be.** In regulated industries, decisions going through formal review is normal — the question is whether staff engineers have real weight in that review or are just writing docs someone else approves.

Two caveats: if your company is in crisis mode, shelve all of this — trying to do cross-team strategy during layoffs makes you look out of touch, not strategic. And always **watch what leadership funds, not what they say.** If the budget, the meeting invites, and the decision authority all flow to managers, the IC track isn't real no matter what the career ladder doc says.

### What Leaders Need to Build

If you manage people and say you want staff engineers, you need:

- **Real staff-scoped work** — cross-team projects that are funded and prioritized, not side quests
- **Decisions that don't all go through managers** — staff engineers need to own real technical calls
- **Reviews that measure enabling others** — not the same rubric as senior engineers
- **Active sponsorship** — creating opportunities and pointing people at them, not waiting for candidates to magically demonstrate org-wide scope from inside a team-shaped box
- **Air cover from team pull-back** — protecting cross-team time even when it hurts the team short-term

That last one matters most. Your staff candidates are probably your best senior engineers. Their team will constantly pull them back into execution. **If you won't protect their time, you don't actually want staff engineers — you want senior engineers who do extra stuff for free.**

---

## Is It You or the Org?

**It might be you if**: Others have been promoted recently and you see the criteria. Your manager has given specific feedback you haven't acted on. Your reflex is to grab gnarly problems and solve them yourself. Engineers on other teams don't know you. You pick well-defined problems and avoid ambiguous ones.

If those landed, every one is changeable. The toughest: letting go of being The Person Who Solves Things. Walking away from problems you could crush, because you crushing them isn't what the org needs anymore. It's not a career tactic — it's an identity renovation, and it takes longer than a quarter.

> **The best exercise**: Ask three peers on other teams — people who'll be honest *and* discreet — "If I were up for staff, what would be the strongest argument against it?" **Choose carefully.** In some cultures, signaling you're targeting staff can backfire. Don't defend yourself. Just listen. If two out of three say the same thing, that's your development area.

Now the flip side.

**It's probably the org if**: Nobody has been promoted to staff in two years. Existing staff engineers were all external hires. Your manager can't articulate what would get you there. Cross-team work gets praised in conversation but punished in sprint planning. You write a staff-level proposal and your director presents it at the next leadership meeting as their own idea.

**Three moves**: Push from inside (frame it as retention: "we keep losing senior people because there's nowhere for them to go"). Run a time-boxed test (6-12 months of visible staff-level work, see if it gets recognized). Or go somewhere that has what you need — but don't jump blind. Ask: "How many people were promoted to staff last year?" "Can I talk to a current staff engineer?" "What does the promotion process look like?" If they can't answer clearly, you might be trading one paper track for another.

---

## How Staff Promotions Actually Work

The behavioral shifts and org diagnostics are necessary but not sufficient. **Staff promotions are a political process**, and understanding the mechanics matters as much as doing the work.

**The promo packet.** You need a written case for your impact. Your manager writes it, but **you should be writing it for them** — feeding them specific examples, cross-team testimonials, and impact narratives in language that works in a calibration room. Don't wait to be asked.

**Calibration.** Your packet goes to a room of directors and VPs comparing candidates across teams. Your manager fights for you — and **their reputation in that room matters as much as your work.** A respected director's "this person is ready" carries weight. A new or politically weak manager's identical words land differently. Two things to consider: does your manager have the organizational capital to push this through? And have you helped them prepare — walked through likely objections, scripted the talking points together?

**Visibility.** The decision-makers should already know your name before calibration. Every architecture review you attend, every cross-team problem you help solve — those aren't just staff-level work, they're how you become known to people who hold promotion power.

**Timing and time-in-level.** Companies have promotion cycles. Freezes, reorgs, and bad timing can defer your case regardless of merit. Most large companies won't discuss staff until you've been senior for 18-24 months. Start the shifts early, but don't expect the title on the next cycle.

> **The engineers who get promoted to staff aren't just the ones doing staff-level work. They're the ones doing it visibly, at the right time, with the right person fighting for them in the room.** Understanding how the system works is what lets you navigate it effectively and use it to reach your goals.

---

## What to Do This Week

**Right now:** Run the staff track diagnostic on your company. Be honest about which column you land in.

**This month:** Tag your last quarter's work as "I did it" vs. "I helped someone else do it." Show the split to your manager and ask: *"Is this the right mix for someone targeting staff?"*

**This quarter:** If your company has a real track, pick one shift and commit to it for 90 days. If it doesn't, have an honest conversation with your skip-level about whether it ever will be — and think seriously about what that means for your plan.

**And do this too:** Ask three trusted peers the question from the diagnostic above. Don't defend yourself. Just listen. That conversation is worth more than anything else in this article.
