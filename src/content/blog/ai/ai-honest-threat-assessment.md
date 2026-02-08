---
title: "What AI Actually Threatens and What It Doesn't: An Honest Assessment for Engineers"
description: "A blunt, activity-by-activity breakdown of what AI can replace today, what it can't, and which engineering skills become more or less valuable at every career level"
pubDate: 2026-02-07
author: "Robert"
category: "ai"
tags: ["ai", "career", "software-engineering", "code-generation", "copilot", "threat-assessment", "skill-development"]
draft: true
sources:
  - book: "Unite the Tribes"
    author: "Christopher Duncan"
  - book: "Never Lead Alone"
    author: "Keith Ferrazzi"
---

Let's skip the part where I tell you AI is just a tool, you have nothing to worry about, and the real problem is your mindset. That framing is condescending, and it is also wrong.

Some of your concerns about AI are legitimate. Certain engineering activities are being automated right now. Skill requirements are shifting. The way organizations measure engineering value is changing underneath us. Pretending otherwise does not help anyone.

But the doomer narrative -- that senior engineers will be obsolete by 2027 -- is equally wrong. It misunderstands what most engineering work actually involves.

This article is an honest threat assessment. Activity by activity, level by level, with specifics you can use to audit your own position this week.

## The Change Problem Nobody Wants to Talk About

Christopher Duncan nails something in *Unite the Tribes* that applies directly here: "The plain and simple truth of the matter is that people don't like change, no matter how often you tell them that it's for the better." He is right. But the typical response from AI evangelists -- dismissing resistance as fear or laziness -- misses the point entirely.

Some engineers resist AI adoption because they have watched three decades of "this changes everything" hype cycles. Some resist because they have legitimate questions about code quality, security, and liability that nobody has answered yet. And some resist because they have correctly identified that their current workflow is about to get disrupted in ways that are not entirely positive for them personally.

All three of those reactions are rational. Treating them as a self-image problem to be coached away is the fastest way to lose credibility with your team.

Keith Ferrazzi frames AI as "more than a tool -- it is a collaborator, a new member of the team that demands a reengineering of how we work." That reengineering is real, and it has winners and losers. Let's be specific about who is where.

## The Threat Assessment: Activity by Activity

Forget broad claims about "AI replacing developers." Engineering is not one activity. It is dozens of activities with radically different automation profiles. Here is where things actually stand.

### Activities AI Does Well Today (High Automation Risk)

These are areas where current AI tools (Copilot, Cursor, Claude, ChatGPT with code interpreter) already perform at or near the level of a competent mid-level engineer:

- **Boilerplate code generation.** CRUD endpoints, data transfer objects, serialization logic, standard API clients. If the pattern exists in thousands of public repos, AI writes it faster than you do.
- **Unit test generation for straightforward functions.** Given a pure function with clear inputs and outputs, AI generates reasonable test cases including edge cases. Not perfect, but a solid first draft.
- **Code translation between common languages.** Python to TypeScript, Java to Kotlin, SQL dialect migrations. Mechanical translation where the semantics map cleanly.
- **Regex and query construction.** Describing what you want in plain language and getting a working regex or SQL query back. This used to be a valued micro-skill. It is now commodity.
- **Documentation generation for existing code.** JSDoc, docstrings, README sections that describe what code does. The "what" documentation, not the "why."
- **Standard configuration files.** Webpack configs, Docker Compose files, CI/CD pipeline YAML, Terraform for common infrastructure patterns.
- **Simple bug identification.** Null pointer issues, off-by-one errors, missing error handling in straightforward code paths.

If a significant portion of your day involves these activities and nothing else, you have a legitimate problem. Not a self-image problem. An economic one.

### Activities AI Does Poorly Today (Low Automation Risk)

These are areas where AI consistently fails or produces output that requires so much review and correction that it provides no net time savings:

- **Architectural decisions across system boundaries.** AI cannot reason about your organization's deployment constraints, team topology, or the trade-off between consistency and availability that matters for your specific domain. It does not know that your payment service team ships on Tuesdays or that the EU cluster has different latency requirements.
- **Ambiguous requirements negotiation.** When the product manager says "we need it to be faster" and means three different things depending on which stakeholder they just talked to, AI cannot navigate that conversation.
- **Debugging production systems under pressure.** Correlating a spike in p99 latency with a config change that rolled out two hours ago, a dependency that silently changed its retry behavior, and a load pattern that only occurs on the second Tuesday of the month. This requires institutional knowledge AI does not have.
- **Organizational context and politics.** Knowing that proposing a microservice split will fail because the VP of Platform has staked their promotion on the monolith migration, and the right move is to frame it as "extending the monolith's API boundary."
- **Cross-team coordination on shared abstractions.** Designing an event schema that works for three teams with conflicting needs, then getting buy-in from all three.
- **Codebase-specific judgment.** Understanding that yes, this function looks like it should be refactored, but it was written this way intentionally because of a race condition that took two weeks to diagnose in 2023, and the comment explaining it got deleted in a formatting PR.

### The Genuinely Uncertain Middle (Watch Carefully)

These activities are where the ground is shifting fastest. AI is inconsistent here today but improving quarter over quarter:

- **Code review for non-trivial logic.** AI catches style issues and simple bugs reliably. It catches subtle logic errors sometimes. The gap is closing.
- **Integration test design.** AI can generate individual test cases but struggles with designing a coherent test strategy that covers meaningful interaction paths without combinatorial explosion.
- **Refactoring large code sections.** AI handles method extraction and simple restructuring. It fails at refactoring that requires understanding the broader system's invariants.
- **Incident response runbook creation.** AI can draft runbooks from existing documentation. It cannot yet infer the undocumented tribal knowledge that makes runbooks actually useful at 3 AM.
- **Technical design documents.** AI produces reasonable first drafts of design docs for well-understood problem types. It produces convincing-looking garbage for novel problems.

## Why "Just Become a Prompt Engineer" Is Bad Advice

You have heard this. Maybe from a manager, maybe from LinkedIn, maybe from a conference speaker who has never shipped production code. The advice is: stop worrying about AI replacing you and instead learn to use it better. Become a prompt engineer.

Here is why this is a trap.

**Prompt engineering is a transitional skill with a shrinking half-life.** Every model improvement reduces the amount of prompt crafting required to get good output. The techniques that worked with GPT-3.5 are unnecessary with current models. The elaborate chain-of-thought scaffolding people built in 2024 is increasingly handled by the models themselves. Building your career strategy around a skill that the tool vendors are actively trying to eliminate is not a plan.

**It also confuses the input with the value.** The value was never in typing code. It was in knowing what code to type and why. Prompt engineering optimizes the input mechanism. It does not develop the judgment, context, or systems thinking that determines whether the output is correct, maintainable, and aligned with business goals.

**The real skill is evaluation, not generation.** As Ferrazzi puts it, AI gives you "an army of thousands of multiskilled associates on hand ready to execute at speed and scale." The bottleneck was never generating options. It was always knowing which option is right for this situation, this team, this set of constraints. That evaluation skill becomes more valuable as generation gets cheaper, not less.

Better advice: become excellent at the activities in the "AI does poorly" list above. Those are the activities where human judgment remains the bottleneck, and they are also the activities that correlate with seniority and compensation.

## What Actually Differentiates You at Each Level

Here is a concrete breakdown of what becomes more and less valuable at each engineering level. Use this as a self-audit.

### Junior Engineers (0-2 years)

**Decreasing in value:**
- Speed at writing standard implementations from scratch
- Memorization of syntax and API surfaces
- Ability to set up standard project scaffolding

**Increasing in value:**
- Reading and understanding existing codebases (AI generates code; humans still navigate legacy systems)
- Evaluating AI-generated code for correctness, security, and style fit
- Asking precise questions -- of humans and of AI tools
- Debugging skills, especially when AI-generated code fails in non-obvious ways

**Action this week:** Take a task you would normally implement from scratch. Generate it with AI instead. Then spend twice as long reviewing the output as you would have spent writing it. Document every issue you find. That review muscle is your new core skill.

### Mid-Level Engineers (3-6 years)

**Decreasing in value:**
- Being the fastest implementer on the team
- Deep knowledge of a single framework's API surface
- Writing standard design documents for well-understood problems

**Increasing in value:**
- System-level debugging across service boundaries
- Translating ambiguous business requirements into technical specifications
- Mentoring juniors on evaluating AI output (not just writing code)
- Identifying when AI-generated solutions introduce subtle architectural debt

**Action this week:** Pick your last three technical decisions that involved trade-offs. For each one, write down the context that informed your choice -- the stuff AI would not know. If you cannot articulate it, that is a signal you are operating on intuition that needs to become explicit knowledge.

### Senior and Staff Engineers (7+ years)

**Decreasing in value:**
- Being the team's most productive individual coder
- Deep expertise in a single technology stack as an end in itself
- Writing reference implementations that juniors copy

**Increasing in value:**
- Cross-system architectural judgment
- Technical strategy that accounts for organizational dynamics (Duncan's point: "you're in the change business," not the technology business)
- Using AI to amplify scope -- doing meaningful design and review work across more teams and codebases
- Evaluating build-vs-buy decisions where "build" now includes "generate with AI"

**Action this week:** Identify one architectural decision on your roadmap. Use AI to generate three competing design approaches. Then write the evaluation criteria -- the constraints, trade-offs, and organizational factors that determine which approach is right. Notice how much of your value lives in the criteria, not the designs.

### Principal and Distinguished Engineers

**Decreasing in value:**
- Being the only person who can solve a particular class of problem (AI raises the floor)
- Technical authority based purely on implementation speed or depth

**Increasing in value:**
- Setting technical direction across an organization
- Building engineering culture that effectively integrates AI tooling without cargo-culting
- Identifying which problems are worth solving (Ferrazzi's "risk and opportunity scanning," but at the technical strategy level)
- Making judgment calls under genuine uncertainty where the data is ambiguous and the stakes are high

## A Weekly Self-Audit Checklist

Run this assessment against your last work week. Be honest.

| Question | Signal |
|----------|--------|
| What percentage of my time was spent on activities in the "AI does well" list? | If above 60%, your current role is at risk of compression |
| Did I make any decisions this week that required organizational context AI does not have? | If not, you may be under-leveled for your title |
| Could I articulate *why* I chose approach A over approach B, in terms a new team member would understand? | If not, your tacit knowledge is not yet defensible expertise |
| Did I evaluate any AI-generated output this week and find a non-obvious problem? | If yes, that is a skill worth developing further |
| Did I influence a technical decision across team boundaries? | If not and you are senior+, your scope may be too narrow |

## When This Doesn't Work

This framework has failure modes. Here are the ones I know about.

**It assumes AI capability growth is roughly linear.** If a breakthrough produces AI that genuinely reasons about complex systems with organizational context, the "AI does poorly" list shrinks dramatically. I do not think this is likely in the next 2-3 years based on current trajectories, but I also would not bet my mortgage on it. Hedging by developing multiple skill categories is rational.

**It underweights industry-specific variation.** If you work in a highly regulated domain (medical devices, avionics, financial compliance), AI adoption will be slower and the "genuinely uncertain" category will stay uncertain longer. If you work at an AI-native startup, the timeline accelerates and the "at risk" list is already larger than what I have described.

**It assumes you have the organizational latitude to shift your work.** Not everyone can choose to spend less time on boilerplate and more time on architecture. If your organization values output volume over judgment quality, and your manager measures productivity by lines of code or tickets closed, this framework collides with your performance review. That is a real constraint, not a mindset problem.

**The "increasing in value" skills are harder to demonstrate in interviews.** The industry's hiring practices still over-index on implementation skills that AI handles well. You can develop excellent architectural judgment and still bomb a leetcode screen. This is a systemic problem that will take years to correct.

**Team dynamics matter.** Duncan warns that "people skills are at best ignored and at worst derided as 'soft skills'" in engineering culture. But the engineers who will thrive alongside AI are precisely the ones who can coordinate across teams, negotiate technical trade-offs with non-technical stakeholders, and build consensus around ambiguous decisions. If your organization punishes these activities as "not real engineering work," the problem is your organization, not this framework.

## The Reframe That Actually Helps

Stop asking "will AI replace me?" It is the wrong question, and it leads to either paralysis or false comfort.

The better question: **"Which of my current skills become more valuable as AI gets better at generation, and which become less valuable?"**

Then look at how you spend your time. If you are spending most of your week on activities AI does well, you need to shift -- not because AI will fire you next quarter, but because the economic value of that work is declining and will continue to decline. If you are spending most of your week on judgment-heavy, context-dependent, cross-boundary work, your position is strong and getting stronger.

Duncan's core insight applies: you are not in the technology business. You are in the change business. The engineers who navigate this transition well will not be the ones who became the best prompt engineers. They will be the ones who understood what was actually changing, assessed their position honestly, and moved deliberately toward the work that humans still do best.

That starts with an honest assessment. Not a comforting one.
