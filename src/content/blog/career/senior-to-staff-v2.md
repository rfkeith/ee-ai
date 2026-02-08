---
title: "From Senior to Staff: What You Need to Change and What Your Org Needs to Provide"
description: "The senior-to-staff jump fails for two reasons and most advice only covers one. Here's what I wish someone had told me earlier."
pubDate: 2026-02-08
author: "Robert"
category: "career"
tags: ["career-growth", "staff-engineer", "promotion", "engineering-leadership", "organizational-design", "career-ladder"]
draft: true
sources:
  - book: "Unite the Tribes"
    author: "Christopher Duncan"
  - book: "Never Lead Alone"
    author: "Keith Ferrazzi"
---

Most "how to get to staff" articles give you one side of the story. Think bigger. Work across teams. Drive technical strategy. That's all true, but it's only half of it — and **half the story is worse than no story, because it lets you blame yourself for things that aren't your fault**.

Here's what I mean: getting to staff is a two-player game. You need to change how you work. *And* your company needs to actually have a real staff role with real work attached to it. If either side isn't holding up their end, you're stuck — and you'll drive yourself crazy trying to figure out why.

I've seen really talented engineers burn two, three years trying to "level up" at companies that didn't actually have a staff track. They had a title on a career ladder doc somewhere, sure. But nobody had ever been promoted into it. It was just there so recruiters could say "we have IC growth paths."

So this article covers both sides. What you need to do differently, and what your company needs to have in place. And if you're stuck in between — doing the work but not getting the title — I'll help you figure out which side is actually broken.

Before we get into it: a quick reality check. **Do you actually want to do staff-level work, or do you want staff-level comp?** Both are honest answers — the senior-to-staff jump is often $50-100K+ in total comp at bigger companies, and that's a perfectly rational motivator. But the day-to-day of the role is genuinely different from senior work, and not everyone enjoys it. If you mostly want the pay bump, that's fine — just be honest with yourself about it, because the behavioral shifts below only stick if you actually find the work satisfying.

---

## A Quick Note on Staff Archetypes

"Staff engineer" isn't one job. Will Larson and Tanya Reilly have both written about this — there are at least four common archetypes:

- **Tech Lead**: Sets technical direction deep within one team
- **Architect**: Drives cross-team technical vision and standards
- **Solver**: Parachutes into the gnarliest problems nobody else can crack
- **Right Hand**: Extends a VP or director's technical reach

The shifts I describe below skew toward the Architect and Tech Lead archetypes, because those are the most common paths at enterprise-scale companies. If you're on a Solver track — where the whole point is that *you personally* crack the problem that's been stumping everyone — some of this won't apply directly. Your version of "enabling others" might look more like "documenting what I learned so the next person doesn't start from zero." The principle (your impact needs to extend beyond the thing you personally touched) still holds; the daily work looks different.

---

## Part 1: What You Need to Change

Let's start with you, because it's the part you can actually do something about.

The big shift from senior to staff is this: **you go from being the person who solves problems to being the person who makes your whole team better at solving problems.** I know that sounds like something off a motivational poster, but it plays out in very specific, day-to-day ways.

Christopher Duncan talks about this in *Unite the Tribes*, his book on leadership in the tech industry. He draws a line between *knowing the work* and *doing the work*. You don't have to write every line of code to lead well — but you do need to understand the terrain well enough to make good calls. At the staff level, that's exactly where you live. You still need to be technically sharp, but **the point of your expertise shifts from writing the solution to helping other people find the right one**.

Here are four changes that actually matter. I've included something you can try this week for each one, because "think more strategically" is useless advice without a next step.

### Shift #1: Stop Solving, Start Shaping

When you're a senior engineer, you get a problem, you solve it. Maybe faster and better than anyone else on the team. That's literally what got you here.

At staff, the game changes. Your job is to make sure the *right* problems get solved, in the *right* order, by the *right* people. That's a different skill entirely.

**Here's what the shift actually looks like:**

- **Senior you**: A ticket comes in for a performance issue. You profile it, find the bottleneck, fix it, ship a PR. Done. Feels great.
- **Staff you**: You notice three different teams have hit similar performance issues in the past month. You write a short RFC connecting the dots, propose a common approach, and help the engineer on each team work through their version of the fix.

See what happened? Your output changed from a pull request to a doc, a few conversations, and *other people's* pull requests. **The best version of you at this level isn't the one writing code — it's the one making everyone around you faster and better at writing theirs.**

That's a real identity shift, by the way. If you've spent ten years being the person who fixes the tough thing, letting someone else fix it (slower than you could) feels wrong. It's not. It's the job.

> **Try this week**: Pull up your last month of work. Tag each thing as either "I did this myself" or "I helped someone else do this." If the balance is heavily tilted toward solo work, that's worth paying attention to — it might mean you're still operating at the senior level regardless of your ambitions. The right ratio varies depending on your archetype and your org, but if you can't point to *anything* in the "enabled others" column, that's a clear signal.

### Shift #2: Look Beyond Your Team

Keith Ferrazzi spent years studying what separates good teams from great ones, and wrote about it in *Never Lead Alone*. One thing that stuck with me: **on the best-performing teams he studied, people spent a significant chunk of their energy on problems outside their own group** — not because someone told them to, but because that's how the whole org gets better. (His research focused on executive and leadership teams, so the exact proportions won't map cleanly to IC roles — but the principle is the same. Staff engineers can't just live inside their team's sprint board.)

Your whole career, you've been rewarded for going deep on *your team's* stuff. Now suddenly you're supposed to care about what the platform team is doing, or weigh in on an architecture review for a service you've never touched. It feels like you're being spread too thin.

But those changes drive outcomes and that's where impact lives.

**What this actually looks like in practice:**

- Showing up to an architecture review for another team and asking the question nobody else thought to ask
- Writing a tech strategy doc that covers three teams and actually gets used
- Noticing that four teams are all building their own retry logic and saying "hey, maybe we should solve this once"
- Mentoring someone who doesn't report to your manager

> **Quick gut check — do you regularly:**
>
> - Go to cross-team meetings you're not required to attend?
> - Know the names and top challenges of engineers on at least three other teams?
> - Get pulled into decisions by people outside your reporting chain?
> - Have opinions about technical problems beyond your team's codebase?
>
> If fewer than two of those are true, your world is still the size of your team.

### Shift #3: Let Go of the "How" (as Your Default)

Duncan says something in *Unite the Tribes* that I think about a lot: **if your technical people and leaders are arguing about *how* to do something instead of *what* needs to be done, something has gone wrong.** Staff engineers need to spend more of their time at the "what" level — framing the problem, defining the constraints, setting the bar for success — and trusting capable senior engineers to figure out the how.

This one is painful if you got to senior because you're *really good* at the how. It feels like handing away the most fun part of the job. But here's what nobody tells you: watching a plan you shaped come together — three teams aligning, systems clicking into place, shipping something none of them could've built alone — that's a feeling no solo 2am bug fix ever gave you.

**What the shift sounds like in a real meeting:**

- **Senior you**: "We should use a write-behind cache with Redis here — the access pattern is read-heavy and we can tolerate 30 seconds of stale data."
- **Staff you**: "We need p99 latency under 50ms on this read path, and we can't spend more than $2K/month in extra infra. Here's the access pattern data. What approaches should we look at?"

You're not dumbing anything down. You're **giving the problem to the team with enough precision that they can own the answer** — instead of handing them your answer and asking them to implement it.

> **This doesn't mean you never go deep.** Staff engineers absolutely still drop into the how — for high-stakes architecture calls, novel problem domains, or when the team is genuinely stuck and needs someone to get in the weeds with them. The shift isn't "never touch the how again." It's that **"what" becomes your default mode, and you choose when to go deep instead of doing it reflexively**. A staff engineer who only ever says "here's the problem, you figure it out" will lose credibility fast, because the team will start wondering if you *can* still go deep.

Duncan tells this great story about a band director who only hired musicians who could outplay him. The point isn't that the director forgot how to play — it's that he didn't need to be the one playing the solo to lead the ensemble. Same deal at the staff level. You should absolutely still be able to sit down and write code, debug a gnarly issue, or whiteboard a system design. You just don't need to be the one doing it every time.

### Shift #4: Get Good With People (Yes, Really)

Look, I know. "People skills" sounds like something from a corporate training you zoned out of. But Duncan is blunt about this in *Unite the Tribes*: **people skills are not optional.** Ignoring how humans work in a technical org will hurt you worse than any technical debt.

Staff engineers who can't get buy-in from other teams, who can't navigate messy politics, who are always right but nobody wants to work with — they stall out. Every time. This isn't about being charming or extroverted. It's about being someone other teams actually *want* in the room.

In *Never Lead Alone*, Ferrazzi talks about how the best teams move away from everything flowing through one person and toward what he calls "co-elevation" — people genuinely investing in each other's success. One leader in the book describes his wake-up moment: he realized that as long as everything depended on him, his team could only grow as far as he could personally reach. **Same thing applies to you. If your impact stops at the edge of what you can personally touch, that's your ceiling.**

> **Something to try**: Find a cross-team project that's stuck. Don't volunteer to own it — offer to run a working session where the right people hash it out together. That's staff-level work right there: getting smart people unstuck without taking the problem away from them.

---

## Part 2: What Your Company Needs to Bring to the Table

Here's where most career advice conveniently stops. They've told you to think bigger and work across teams, and if it doesn't pan out, the implication is you didn't think big enough.

Sometimes that's fair. But a lot of the time, **the problem isn't you — it's that your company doesn't actually have a staff role. They have a title on a PDF.**

### Is Your Staff Track Real or Just on Paper?

Not "does the career ladder mention it" — does a staff role actually exist in practice? Here's how I'd check.

| What to look at | If it's real | If it's on paper only |
|--------|-----------------|-------------------|
| Current staff engineers | You can name 2+ and describe what they do | There's zero, or one person who got the title years ago |
| How you get promoted | Criteria are written down with actual examples | It's vague stuff like "demonstrates broad impact" |
| Where the work is | Specific cross-team projects exist | All real work lives inside team backlogs |
| Who decides what | Staff engineers own or strongly influence technical calls | Every decision goes through a manager or director |
| Time for it | There's protected time for cross-team stuff | You're expected to do staff work on top of your regular job |
| How you're judged | Measured on how you made others better | Measured on the same stuff as senior engineers |
| Support | Your director actively creates opportunities | "Just keep doing great work and it'll happen" |

This isn't a pass/fail test — real orgs are messier than two clean columns. But **the more rows that land on the right side, the more skeptical you should be about whether the track is real.** If you're seeing a pattern there, that's telling you something important.

### Five Things Your Company Needs to Actually Build

If you're an engineering leader reading this — and you say you want staff engineers — here's what you actually need to put in place:

**1. Real work that's scoped at the staff level.** Cross-team projects need to exist, be funded, and be prioritized. If every engineer is assigned 100% to a team backlog, then there is no staff-level work. You can't promote someone into a job that doesn't have any work attached to it.

**2. Decisions that don't all go through managers.** Staff engineers need to own — or at minimum, strongly shape — real technical calls. Specific categories of architecture, tooling, or standards decisions. If every choice still needs a director's blessing, you're signaling that only managers get to decide things. (A caveat: in regulated industries like finance or healthcare, architectural decisions often *must* go through formal review. That's fine. The question is whether your staff engineers have real weight in that review, or whether they're just writing docs that someone else approves without pushback.)

**3. Reviews that measure the right thing.** Senior engineers get judged on what they shipped. Staff engineers should get judged on **how many other teams shipped better because they got involved**. If your review rubric looks the same at both levels, you're measuring the wrong stuff.

**4. Someone actively making opportunities, not just watching.** In *Never Lead Alone*, Ferrazzi profiles a leader who realized his team's growth was permanently capped by his own bandwidth — because everything revolved around him. The same thing happens when directors wait for staff candidates to magically demonstrate org-wide scope from inside a team-shaped box. You have to go build the opportunities and point people at them.

**5. Air cover from getting pulled back into team work.** Your staff candidates are probably also your best senior engineers. Which means their team will constantly pull them back into execution, because they're great at it and there's always a deadline. **Someone has to protect their cross-team time, even when it hurts the team in the short run.** If you won't do that, you don't actually want staff engineers — you want senior engineers who also do extra stuff for free.

> **If you manage someone targeting staff, ask yourself each quarter:**
>
> - Have I found 1-2 cross-team projects they could lead?
> - Have I actually carved out 20-30% of their time for this work?
> - Have I introduced them to people on other teams who need their skills?
> - Could I explain, in a promotion doc, what "staff impact" looks like for *this specific person*?
> - Have I given them feedback about staff-level stuff this quarter (not just "you're a great engineer")?
> - Could I fight for their promotion with real examples in a calibration meeting?
>
> If you can't say yes to at least four, you're not sponsoring anyone. You're just hoping the problem solves itself.

---

## Part 3: When It's a You Thing

I want to be straight with you here, because everything I said above about broken orgs can turn into an excuse if you let it. Sometimes the org has the track, and you're the one who needs to change. Blaming the system is a lot more comfortable than doing that work.

**It might be a you thing if:**

- Other people have been promoted to staff recently — and you can see the criteria they met
- Your manager has given you clear, specific feedback and you haven't done much with it
- When there's a gnarly problem, your reflex is to grab it and solve it yourself
- You don't really know engineers on other teams, or they don't know you
- If someone asked you "what's the business impact of what you built last quarter?" you'd struggle to answer
- You tend to pick well-defined problems and avoid the messy, ambiguous ones
- People respect your code but don't come looking for your opinion

If a few of those landed — good news: **every single one is something you can change.** These are habits, not who you are. Bad news: changing them is genuinely uncomfortable, not just an intellectual exercise.

**Here's the biggest one**, at least in my experience: letting go of being The Person Who Solves Things. If you've built your whole identity around cracking the toughest technical problems, stepping back so someone else can solve one (slower than you could) feels wrong in your bones. But doing it yourself doesn't scale. Staff-level work means walking away from problems you could crush, because you crushing them isn't what the org needs anymore. That's not a career tactic. It's more like an identity renovation, and it takes way longer than a quarter.

> **The best exercise I know for this**: Ask three peers — not your boss, not your work friends, but people on other teams who've seen you operate — this question: *"If I were up for a staff promotion, what would be the strongest argument against it?"*
>
> **Choose carefully.** This only works if you pick people who will be honest *and* discreet. In some org cultures, openly signaling that you're targeting staff can come across as entitled, or it leaks to your manager before you're ready for that conversation. You need people who'll give you the real answer and keep it between you.
>
> Don't defend yourself. Just listen. If two out of three say the same thing, that's your development area. One conversation like this will teach you more than six months of reading articles about staff engineering (including this one).

---

## Part 4: When It's an Org Thing

Now the flip side. If you've honestly sat with Part 3 and it doesn't ring true, look at these signals.

**It's probably the org if:**

- Nobody has been promoted to staff in two years (or ever)
- The staff engineers who do exist were all hired from outside — nobody was promoted in
- Your manager can't give you a straight answer about what would actually get you to staff
- Cross-team work gets praised in conversation but punished in sprint planning ("we really need you on the team backlog right now")
- You write a staff-level proposal and your director presents it at the next leadership meeting as their own idea
- There's no real gap between "senior IC" and "director" — nothing in between where ICs make real decisions
- Every time you ask what it would take, the answer is "just keep doing great work"

If you're reading this list and going "yep, yep, yep" — that's important. And **the right response to a broken system is not to work harder within it.**

**You've got three moves:**

1. **Push from inside.** If you have a good relationship with your skip-level and the political capital to make it stick, you can advocate for building a real staff track. This lands better when you frame it as "we keep losing senior people because there's nowhere for them to go" rather than "I want a promotion."

2. **Run a time-boxed test.** Give it 6-12 months. Pick a specific piece of staff-level work, do it well, and see if it gets recognized at review time. If it doesn't, you have your answer — and you haven't lost years.

3. **Go somewhere that has what you need.** I know that sounds like giving up. It's not. It's recognizing that you can't will a role into existence if leadership doesn't believe in it. Some companies just don't support senior IC growth, and no amount of working harder will change that.

   If you go this route, don't jump blind. **Ask these questions before you accept an offer:**
   - "How many engineers were promoted from senior to staff in the last two years?"
   - "Can I talk to a current staff engineer about what their day-to-day looks like?"
   - "What percentage of a staff engineer's time is spent on cross-team vs. team-scoped work?"
   - "Who decides whether someone gets promoted to staff, and what does that process look like?"

   If they can't answer these clearly, you might be trading one paper track for another.

The worst outcome here isn't making the wrong choice. It's making no choice — spending three years chasing a promotion that doesn't really exist at your current company, when you could've either fixed the system or found a better one.

---

## How Staff Promotions Actually Work

This is the part nobody writes about because it's uncomfortable. The behavioral shifts and org diagnostics above are necessary but not sufficient. **Staff promotions at most large companies are a political process**, and understanding the mechanics matters as much as doing the work.

Here's what typically happens behind the scenes:

**The promo packet.** At most companies, getting to staff requires a written case — a document that tells the story of your impact. Your manager writes it, but here's the thing most people miss: **you need to be writing it *for* them.** Not literally ghostwriting the doc (though sometimes, yes, literally that). But feeding them the specific examples, the cross-team testimonials, the impact narratives — written in language that works in a calibration room. If you can't articulate your own staff-level impact in a few clear paragraphs, your manager definitely can't either. Don't wait to be asked. Draft your own bullet points. Frame your work the way you'd want it presented. Make it easy for your manager to advocate for you.

**Calibration.** Your packet goes into a room full of directors and VPs who are comparing candidates across teams. They're asking: "Is this person's impact actually at the staff level, or are they just a really good senior engineer?" Your manager needs to fight for you in that room — and here's where it gets political: **your manager's reputation in that room matters as much as your work does.** A well-respected director who says "this person is ready" carries weight. A manager who's new, or who's burned credibility on other things, or who's not particularly well-liked by the VP running the meeting — their advocacy lands differently, even if the words are the same. That's uncomfortable to say, but it's real.

This means you need to think about two things most engineers never consider:

1. **Does your manager actually have the standing to push a staff promotion through?** Not just the willingness — the organizational capital. If they're relatively junior, if they've recently joined, or if they're in a part of the org that's politically weak, their advocacy may not be enough. You might need your skip-level to be the one carrying the case.

2. **Have you coached your manager on how to present you?** This isn't manipulative — it's practical. Your manager is juggling a dozen things and probably hasn't rehearsed your pitch. Help them. Walk through the likely objections ("she's great but is the impact really org-wide?") and give them the specific answers. The best promo conversations I've seen happen when the engineer and their manager have essentially scripted the calibration talking points together beforehand.

**Visibility to the room.** The people deciding your promotion need to already know your name. If the first time your skip-level or their peers hear about you is when your manager reads from a packet, you're starting from behind. **Staff-level visibility means the decision-makers have already seen your work** — they've seen you present at an architecture review, they've read an RFC you wrote, someone on their team has told them "this person helped us solve X." The calibration conversation should be confirmation of something they already believe, not a cold pitch.

This is why the cross-team work from Part 1 matters beyond just "doing staff-level things." It's also how you become known to the people who hold promotion power. Every architecture review you attend, every cross-team problem you help solve — those are also opportunities for the right people to see you operate. That's not careerism. It's making sure good work doesn't happen in a vacuum.

**Timing.** Companies have promotion cycles — usually once or twice a year. If there's a hiring freeze, a reorg, or your skip-level just burned political capital on something else, your promotion might get deferred regardless of merit. This isn't fair, but it's real. The best thing you can do is know the cycle, know the timeline, and make sure your strongest work and your manager's strongest advocacy line up with the window.

**Time-in-level.** Most large companies won't even discuss staff promotion until you've been at senior for 18-24 months. Starting the behavioral shifts early is smart — it builds the track record you'll need — but don't expect the title to follow on the next cycle. This is a long game.

Understanding how the system works is what lets you navigate it effectively and use it to reach your goals.

> **The engineers who get promoted to staff aren't just the ones doing staff-level work. They're the ones doing it visibly, at the right time, with the right person fighting for them in the room.** That's not cynicism. That's how every large organization makes decisions.

---

## Where This Advice Falls Short

I want to be honest about the limits of everything I've said above.

**If your company has fewer than ~100 engineers**, there might not be enough going on across teams to need a separate staff role. That's not anyone's fault — it's just a size thing. A lot of smaller companies have people doing staff-level work with a senior title, and that's fine. Formalizing it might not make sense yet.

**If things are on fire**, forget all of this. When the company is fighting for survival, everyone drops back to shipping mode. Trying to do big-picture cross-team stuff during a crisis makes you look out of touch, not strategic. Read the room.

**You can't fake it.** Duncan puts it well in *Unite the Tribes*: ideas are easy, execution is tough. You can't just collect staff-looking artifacts — an RFC here, a working group there — without doing genuinely staff-level thinking behind them. People will see through it fast.

**Watch what your leadership funds, not what they say.** Some VPs honestly believe that career growth means becoming a manager. They'll say all the right things about IC tracks, but look at where the budget goes, who gets invited to the important meetings, and who actually gets to make decisions. **That tells you the real story.**

**Working across teams is slower.** And that's a real cost. You need to be able to show that your cross-team work produced better results, not just more meetings and more Slack threads. If you can't point to something concrete that got better because you were involved, you might be adding overhead, not value.

---

## What to Do This Week

**Right now:** Run the staff track diagnostic from Part 2 on your company. Be honest about which column you land in.

**This month:** Go through your last quarter and tag your work as "I did it" vs. "I helped someone else do it." Show the split to your manager and ask: *"Is this the right mix for someone trying to get to staff?"*

**This quarter:** If the diagnostic says your company has a real staff track, pick one shift from Part 1 and commit to it for 90 days. If it says the track isn't real, have an honest conversation with your skip-level about whether it ever will be — and think seriously about what that answer means for your plan.

**And do this too:** Run the peer test from Part 3 — carefully. Pick people who'll be honest and discreet. Ask for the strongest argument against your staff case. That one conversation is worth more than anything else in this article.
