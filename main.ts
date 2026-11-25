// Describe Your Ex in One Word — make.fun entry.
// This program writes exactly one word to /output/entry.txt: "Rehearsal".
// The joke is self-contained: the whole relationship was only a rehearsal
// for the real thing. Deterministic: same bytes on every run, no input,
// no network, no randomness.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = 'Rehearsal';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');
