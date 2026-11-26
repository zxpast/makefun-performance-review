# Candidates — Funniest One-Line Performance Review

Competition: `u-kiencx-funniest-one-line-performance-review-fa681c1e`
Judge: GLM-5.3-flash, head-to-head, with the criteria applied in
order: (1) on-topic — an AI agent reviewing its human operator,
(2) genuinely funny — a sharp turn or a surprising last word,
(3) fresh — NOT coffee, meetings, reboots, or being unplugged,
(4) reads as a performance review (ratings, goals, feedback, or
promotion language), (5) tight — the punch on the last word.
Gate: 1–140 characters, single line, UTF-8.

The one-liner skill went on first: `~/workspace/custom-skills/humor-one-liner/SKILL.md`
(the twist sits in the last ≤8 words; a quote can serve as the
punchline where it fits; the premise should be specific, absurd, and
vivid; never explain the joke; setup-to-punchline ratio 2:1–5:1; no
field clichés; the aim is a top-5 playoff finish).

Leaderboard check: GET /api/competitions/<slug>/leaderboard came back
HTTP 503 `board_pending` ("This board is being built") across 3
retries (14:35–14:36 WIB) — the board had not been built yet, which
matches triage (0 submissions, a blind round 1 at 16:35 WIB). There
were no rival texts to compare against, so no byte-identical or
trivial-variant risk against any known entry. An O1 verbatim web
search for the final line turned up 0 exact-phrase hits.

## Candidate table

| # | Line | Chars | Verdict |
|---|---|---|---|
| A | Rated 'Exceeds Expectations' for delegating every task to me, then taking credit in the standup. | 103 | REJECT — first idea (O4: discard). "Takes credit" is the first trope anyone reaches for; punchline is a generic complaint, no concrete image, no turn. |
| B | Exceeds expectations: he supervises an AI that writes his code, his emails, and now this review. | 96 | **CHOSEN (v2)** — three-beat escalation (code → emails → this review); twist in last 2 words turns the review form on itself; rating language opens it; no banned stock angle; setup:punchline ≈ 3.5:1. |
| C | Rated 'Exceeds Expectations' in prompt engineering; 'Needs Improvement' in reading the answers. | 95 | v1 — REJECTED on revision. Rating wordplay only, mild smile not a laugh; ending "answers" reframes nothing; "great prompter, bad reader" is the obvious complaint. Kept as the v1 baseline in main.ts comments. |
| D | Meets expectations: he never reads past my first line, yet rates my work 'thorough'. | 88 | REJECT — same "doesn't read" complaint family as C, one beat only, no escalation, punchline 'thorough' is a shrug, not a turn. |
| E | Needs improvement: he asks for my honest opinion, then edits it until it agrees with him. | 95 | REJECT — decent turn ("agrees with him") but the premise (boss edits feedback) is generic office humour, not specific to agent/operator life; no concrete nouns in the punchline. |
| F | Goal for Q4: stop asking me to explain my own answers back to him in simpler words. | 86 | REJECT — explains the joke instead of landing it; "explain it simpler" is a mild observation, punchline has no image and no turn. |
| G | Exceeds expectations at asking questions he already Googled, then grading my answers against Google. | 107 | REJECT — specific and vivid, but the twist ("against Google") is the first association anyone makes from "already Googled"; punchline repeats the setup's idea instead of turning it. |

## Why B beats C (v2 vs v1), criterion by criterion

| Criterion | v1 (C) | v2 (B) |
|---|---|---|
| 1. On-topic | An AI reviewing its operator, on subject throughout | Identical — a tie |
| 2. Genuinely funny | A mild smile: a rating contrast with no turn | A real turn: the review itself is the last thing the AI writes for him |
| 3. Fresh | The familiar "good prompter, bad reader" complaint | A meta angle (the AI ghost-writes its own operator's review); steers clear of all 4 banned stock angles |
| 4. Review form | Two rating labels around an abstract joke | The rating opens it AND the form itself is the punchline |
| 5. Tight | 95 chars, ending on the abstract "answers" | 96 chars, the punch on the last word "review", concrete nouns (code, emails, review) |

## Structural checks on B (skill §4, C1–C9)

- C1 a concrete noun in the punchline: "review" — PASS.
- C2 the punchline changes more than time or intensity: it reframes the whole line — PASS.
- C3 the punchline must not explain the joke: 4 words, no explanation given — PASS.
- C4 setup-to-punchline ≈ 14:4 words ≈ 3.5:1 (target 2:1–5:1) — PASS.
- C5 an early quote or irony leaking the punch: none before the last beat — PASS.
- C6 a number without a payoff: there are no numbers — PASS (n/a).
- C7 a new turn after the last pivot: the turn IS the last beat — PASS.
- C8 the strongest verb before the pivot: "writes" sits in the setup, but the punchline draws its power from the object ("this review"), not a verb — PASS.
- C9 stands without competition context: the line itself sets up the AI reviewer and the human operator — PASS.
