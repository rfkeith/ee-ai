---
name: verify-citations
description: Read the cited source books and confirm the draft represents them accurately. Flag any claim a source doesn't support, misquotes, or overstates.
---

# Verify Citations

Confirm that every source the draft leans on actually says what the draft claims it says. This is trust-critical: a single fabricated or overstated citation in a journal whose whole pitch is "grounded in books you can check" spends trust the rest of the corpus has to rebuild.

## What to check

For each source in the draft's frontmatter (`sources: [{book, author}]`) and each in-text reference to a book or author:

- **The book exists in the library.** Match it against `{project-root}/reference/` (PDFs and extracted `.txt`). A citation to a book not in reference/ is a flag — the author may have it elsewhere, but say so.
- **The claim is supported.** Read enough of the actual source to confirm it says what the draft attributes to it. Don't assume from the title or from general knowledge.
- **Quotes are accurate.** Any direct quotation matches the source's wording. Paraphrases don't put words in the author's mouth.
- **The strength matches.** The draft doesn't overstate ("proves," "shows") what the source merely suggests, and doesn't cite a source that actually complicates or contradicts the draft's point without acknowledging it.

## The hard boundary

Verify against the real text; never vouch for a citation you didn't check. If a source isn't in reference/ and you can't confirm it, say "unverified — confirm this yourself," rather than passing it. Don't invent a supporting passage to rescue a claim.

## What success looks like

A per-citation verdict: supported (with the gist of where), overstated (with the gap), unsupported or contradicted (flag for rewrite), or unverified (source not available to check). The author finishes confident that every book the essay leans on will hold up if a skeptical reader actually opens it.
