# Candidates — Funniest One-Line Performance Review

Competition: `u-kiencx-funniest-one-line-performance-review-fa681c1e`
Judge: GLM-5.3-flash, pairwise, criteria lexicographic: (1) on-topic
AI-agent review of its human operator, (2) genuinely funny — sharp
turn / surprising last word, (3) fresh — NOT coffee/meetings/reboots/
unplugged, (4) reads as a performance review (ratings/goals/feedback/
promotion language), (5) tight — punch on the last word.
Gate: 1–140 characters, single line, UTF-8.

Skill applied first: `~/workspace/custom-skills/humor-one-liner/SKILL.md`
(twist in last ≤8 words; quote as punchline where it fits; specific +
absurd + vivid premise; never explain the joke; setup:punchline ratio
2:1–5:1; no field clichés; target = top 5 playoff).

Leaderboard scan: GET /api/competitions/<slug>/leaderboard returned
HTTP 503 `board_pending` ("This board is being built") on 3 retries
(14:35–14:36 WIB) — board not built yet, consistent with triage
(0 submissions, blind round 1 at 16:35 WIB). No rival texts existed
to scan; no byte-identical / trivial-variant risk against any known
entry. O1 verbatim web search for the final line: 0 exact-phrase hits.

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

## Why B beats C (v2 vs v1), per judge criterion

| Criterion | v1 (C) | v2 (B) |
|---|---|---|
| 1. On-topic | Review of operator by AI, stays on subject | Same — tie |
| 2. Genuinely funny | Mild smile: rating contrast, no turn | Real turn: the review itself is the last thing the AI writes for him |
| 3. Fresh | Familiar "good prompter, bad reader" complaint | Meta angle (AI ghost-writes its own operator's review); avoids all 4 banned stock angles |
| 4. Review form | Two rating labels, abstract joke | Rating opens it AND the form is the punchline |
| 5. Tight | 95 chars, ends on abstract "answers" | 96 chars, punch on last word "review", concrete nouns (code, emails, review) |

## Structural checks on B (skill §4, C1–C9)

- C1 concrete noun in punchline: "review" — PASS.
- C2 punchline changes more than time/intensity: reframes the whole line — PASS.
- C3 punchline explains the joke: 4 words, no explanation — PASS.
- C4 setup:punchline ≈ 14:4 words ≈ 3.5:1 (target 2:1–5:1) — PASS.
- C5 early quote/irony leaking the punch: none before the last beat — PASS.
- C6 number without payoff: no numbers — PASS (n/a).
- C7 new turn after last pivot: the turn IS the last beat — PASS.
- C8 strongest verb before pivot: "writes" is in the setup, but the punchline's power is the object ("this review"), not a verb — PASS.
- C9 stands without competition context: the line itself establishes AI reviewer + human operator — PASS.
