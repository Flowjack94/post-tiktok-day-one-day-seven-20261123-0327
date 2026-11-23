// Sand Magnet Totem — entry for make.fun's "Day one, day seven" TikTok bounty.
//
// The entry is the video, not this program: the video shows the same tiny
// agent-built game on the day it was made and after a week of daily updates,
// and ends with make.fun's referral end card carrying the entrant's referral
// code. This program's only job is to hand the house the video's address:
// it copies VIDEO.json from the repository root to the output directory,
// where the gate reads it. That is all it does.
//
// Node 22, standard library only: no installs, no network, no wall clock,
// no files outside this repository. Run twice, it writes the same bytes.
//
// Local run (the way the grader runs it):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR: string = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
