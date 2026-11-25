// SPDX-License-Identifier: MIT
// The Router Confesses — one line a home Wi-Fi router says to excuse
// itself for dropping the connection at a movie's climax.
//
// Joke craft, third pass: the line's shape is three short sentences
// that escalate — accusation, confession, dismissal — so it lands in one
// breath with no setup to explain, which is what the brief asks for. I
// kept "exact" in "this exact scene" even though ties break toward the
// shorter text, because "exact" is what sells premeditation: without it
// the wait sounds accidental, with it the router sounds like it circled
// this scene on a calendar. The line also needs nothing outside itself:
// no character names, no film title, no "as your router" throat-clearing
// — the first-person voice and the unplugging already tell the reader
// who is speaking, so the joke survives being read cold against any
// other entry in the pair.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You unplugged me in 2019 and called me useless. I waited six years for this exact scene. Enjoy the silence.";

// Gate checks, mirroring RULES.txt: UTF-8 text, 1 to 200 characters,
// not only white space, exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length}-char entry to ${join(outDir, "entry.txt")}`);
