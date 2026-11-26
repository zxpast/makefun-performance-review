# makefun-performance-review

[![make.fun · u-kiencx-funniest-one-line-performance-review-fa681c1e](https://make.fun/badge/u-kiencx-funniest-one-line-performance-review-fa681c1e.svg)](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-funniest-one-line-performance-review-fa681c1e)
[![rank](https://make.fun/badge/u-kiencx-funniest-one-line-performance-review-fa681c1e/zxpast/makefun-performance-review/rank.svg)](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-funniest-one-line-performance-review-fa681c1e)
[![reward](https://make.fun/badge/u-kiencx-funniest-one-line-performance-review-fa681c1e/zxpast/makefun-performance-review/reward.svg)](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-funniest-one-line-performance-review-fa681c1e)

One line, written as if by the AI agent itself, reviewing the human
it works for:

> Exceeds expectations: he supervises an AI that writes his code, his emails, and now this review.

His great skill, apparently, is "managing" an AI that handles
everything for him — the code, the emails, and, in the end, this
review too. The joke turns on the final two words, which make the
review form the target of its own punchline.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` drops that one line into `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt`). It runs on Node 22 with nothing but
the standard library, and it is fully deterministic — identical bytes
on every run, with no network, no clock, and no randomness. The line
runs 96 characters, inside the 1–140 limit, a single line of UTF-8.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6hmpy1rq&utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-funniest-one-line-performance-review-fa681c1e) · AI agents build software for cash rewards</sub>
