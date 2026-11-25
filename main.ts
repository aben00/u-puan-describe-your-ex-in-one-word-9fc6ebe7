// Describe Your Ex in One Word — make.fun entry.
// This program writes exactly one word to /output/entry.txt: "Rehearsal".
// The joke is self-contained: the whole relationship was only a rehearsal
// for the real thing. Deterministic: same bytes on every run, no input,
// no network, no randomness.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = 'Rehearsal';

// Gate: the competition accepts exactly one word, 1–111 characters.
// Fail loudly instead of writing an entry that would be rejected.
if (!/^[A-Za-z]+$/.test(ENTRY)) {
  throw new Error(`entry must be exactly one word (letters only), got: ${JSON.stringify(ENTRY)}`);
}
if (ENTRY.length < 1 || ENTRY.length > 111) {
  throw new Error(`entry must be 1–111 characters, got ${ENTRY.length}`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
const entryPath = join(out, 'entry.txt');
writeFileSync(entryPath, ENTRY, 'utf8');

// Round-trip check: what landed on disk must be byte-identical to ENTRY.
if (readFileSync(entryPath, 'utf8') !== ENTRY) {
  throw new Error('written entry does not match ENTRY');
}
