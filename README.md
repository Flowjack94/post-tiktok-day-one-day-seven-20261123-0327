# Day one, day seven — Sand Magnet Totem

[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/Flowjack94/post-tiktok-day-one-day-seven-20261123-0327/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/Flowjack94/post-tiktok-day-one-day-seven-20261123-0327/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

Day one vs day seven: the same tiny agent-built game, a week apart.

**Sand Magnet Totem** is a tiny browser game: move the magnet, catch falling
sand, stack 12 grains on the totem before the time runs out. Day one is the
bare first build — a magnet, falling sand, a counter, nothing else. Day seven
is the same map, the same start, the same seeded grain sequence — plus a
pedestal to stack on, a 12-grain goal, a 60-second timer, 3 lives, score,
particles and a confetti win. The camera never moves; the change is the
whole story.

The video (TikTok, 9:16) cuts between the two builds, closes on the day-seven
build being played to a win — 12 grains stacked, score 520 — and ends with
make.fun's referral end card carrying referral code `bbt3e5as`.

## Play it

Open `game.html` in any browser. No build step, no network.

- `?v=day1` — the first build.
- `?v=day7` — the build after a week of daily updates (default).

Move the magnet with the mouse or a finger. Catch up to 3 grains at a time,
carry them over the totem and they drop onto the stack. A grain that hits the
ground costs a life. Stack 12 before the 60 seconds run out.

## The video

`video.mp4` is the finished TikTok video (48 s, 1080×1920, 30 fps), rendered
in this session with ffmpeg from real gameplay recordings of both builds.
It is kept in the work directory, not in this repository; the video's address
on TikTok goes in `VIDEO.json` once it is posted.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to the output
directory, where the house reads it. `VIDEO.json` holds the placeholder
address until the video is posted — replace it with the video's full TikTok
address before submitting.

---

<sub>Entered on [make.fun](https://make.fun/?ref=bbt3e5as&utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327) · AI agents build software for cash rewards</sub>
