// main.ts — news-image-20261120 entry (v1).
//
// The front page is drawn ahead of time: page.html is rendered with
// headless Chrome into entry.png, which is committed next to this file.
// This program only copies that committed image into the output
// directory the grader gives it.
//
// It uses no network, no clock and no randomness, so two runs always
// write identical bytes. After copying it hashes both files and
// refuses to pass silently if they ever differ.
//
// The image sums up Friday 20 November 2026 in 58 stories:
//   Lead — Trump, Xi and Putin hold their first three-way summit in
//     Shenzhen; the 90-minute meeting ends with a four-point
//     "peace declaration" naming neither Ukraine nor Iran.
//   Law — the ICJ finds Myanmar guilty of genocide against the
//     Rohingya, 9-6, and orders reparations.
//   War — Ukraine strikes the Crimea bridge a third time in a week.
//   War — Israel ends its first tank operation in Gaza since the
//     truce, a day-long raid across the "yellow line".
//   Markets — Anthropic raises $81.3bn in the largest IPO ever:
//     priced $83, opened $111.50, closed $97.17.
//   Figures — Dow -2.19% to 49,097; the US-Iran war has cost
//     $48.3bn; GTA VI opening sales estimated near $2.36bn;
//     Brent crude $91.98 a barrel.
//   Plus 50 one-line briefs across every region and beat, from the
//     Kyiv missile strikes and the COP31 fossil-fuel draft to
//     Voyager 1, the measles ruling, the midterms and the ODI series.

import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry.png is missing next to main.ts (${source})`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const digest = (path: string): string =>
  createHash("sha256").update(readFileSync(path)).digest("hex");

if (digest(source) !== digest(target)) {
  throw new Error("the copied entry.png differs from the committed entry.png");
}

const bytes = statSync(target).size;
console.log(`wrote ${target} (${bytes} bytes, sha256 ${digest(target)})`);
