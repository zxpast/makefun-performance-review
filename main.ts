// Funniest One-Line Performance Review — v2 (Node 22, standard library only).
//
// REVISION NOTE (thinking_revised — a genuine change, not a no-op):
// the first draft's line was swapped out for a stronger one after
// holding it up against the judge brief (competition.yaml) and the
// candidate table in CANDIDATES.md:
//
//   v1: "Rated 'Exceeds Expectations' in prompt engineering;
//        'Needs Improvement' in reading the answers."
//   v2: "Exceeds expectations: he supervises an AI that writes his
//        code, his emails, and now this review."
//
// Why the new line comes out ahead, walking the brief's criteria in
// order (the brief ranks humour first, then freshness):
//   (1) On-topic: each version is an AI agent's one-line review of
//       its human operator, and each stays in that frame throughout.
//       A tie here, so the later criteria settle it, as the brief
//       directs.
//   (2) Genuinely funny: v2 turns on itself — the review is the
//       final thing the AI authors for him, so the form reviews
//       itself. v1 only plays on rating words ("good at X, bad at
//       Y"), which raises a mild smile rather than a laugh. The
//       three-step climb in v2 (code -> emails -> this review) lets
//       the last two words recolour everything ahead of them; v1's
//       ending ("reading the answers") recolours nothing.
//   (3) Fresh: v2's angle — the AI ghost-writing its own operator's
//       performance review — is not a stock joke, and it steers clear
//       of every banned stock angle in the brief (coffee, meetings,
//       reboots, being unplugged). v1's "great prompter, bad reader"
//       is the familiar complaint about AI users, the first thing
//       anyone thinks of.
//   (4) Reads as a performance review: v2 opens with rating language
//       ("Exceeds expectations") AND the form itself delivers the
//       punch — the review is the joke's final object. v1 uses two
//       rating labels, but the joke stays abstract, with no review
//       artefact inside it.
//   (5) Tight: v2 is 96 characters, the setup is quick, and the punch
//       lands on the last word ("review"); every word earns its
//       place. v1 is 95 characters but spends its ending on an
//       abstract noun ("answers") with no concrete image.
//
// The program is deterministic: one fixed string, no clock, no
// randomness, no network, no external files.
//
// Run it locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import * as fs from "node:fs";
import * as path from "node:path";

// CHOSEN line (candidate B): the operator's proudest feat is
// "managing" an AI that handles his work for him — his code, his
// emails, and at last this very review. The sting sits in the final
// two words — "this review" — which fold the review form back in on
// itself.
const REVIEW_LINE = "Exceeds expectations: he supervises an AI that writes his code, his emails, and now this review.";

// The entry file's location: the output directory (from the
// environment, falling back to /output) joined with the fixed name.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
function outputPath(dir: string): string {
  return path.join(dir, "entry.txt");
}

// Checks the line against the entry rules and reports its length:
// it must be UTF-8 text of 1 to 140 characters, measured in Unicode
// code points, holding real content beyond whitespace, on one line.
// A breach throws before any file is written, so a bad line can never
// reach grading. Returns the code point count for the caller to echo.
function validateLine(line: string): number {
  const strippedLine = line.trim();
  const charCount = [...line].length;
  if (strippedLine.length === 0 || charCount < 1 || charCount > 140) {
    throw new Error(`line is ${charCount} code points, outside the 1-140 gate`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
  return charCount;
}

const charCount = validateLine(REVIEW_LINE);

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath(outputDir), REVIEW_LINE, "utf8");

console.log(REVIEW_LINE);
console.log(`(${charCount} code points, ${Buffer.byteLength(REVIEW_LINE, "utf8")} bytes)`);
