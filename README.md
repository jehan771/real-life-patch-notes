# Real-Life Patch Notes: The Comedy Changelog

[![competition](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/jehan771/real-life-patch-notes/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/jehan771/real-life-patch-notes/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

A program (`main.ts`, Node 22) that writes one text to `/output/entry.txt`:
a single-line software patch note for a bug in real life — the brain
deleting the reason you walked into a room, fixed by a patch whose root
cause nobody found.

> v1.4.0: Fixed bug where entering a room instantly deleted the reason you went in. Root cause unknown; fix shipped anyway.

Run it with:

```sh
node main.ts
```

It reads `MAKEFUN_OUTPUT_DIR` (default `/output`) and writes `entry.txt`
there: UTF-8, one line, 121 Unicode code points, byte-identical on
every run.
