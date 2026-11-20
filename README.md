# The World in One Day — Friday 20 November 2026

[![news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/c/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/akhmadsyaii/news-image-20261120/rank.svg)](https://make.fun/c/news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/akhmadsyaii/news-image-20261120/reward.svg)](https://make.fun/c/news-image-20261120)

A make.fun entry for **news-image-20261120**: sum up Friday 20 November
2026's world news in one image. The image is a newspaper front page drawn
in code (`page.html`, rendered to `entry.png` with headless Chrome, system
fonts only); `main.ts` copies it to the output directory. No network, no
randomness — two runs write identical bytes.

## What is on the page

**58 stories**, all verified against Reuters, AP, BBC, UN News, NASA and
other wire reporting, and all first reported on 20 November 2026 or
overnight into it:

- **Lead — Trump, Xi and Putin meet in Shenzhen.** The first three-way
  meeting of the leaders of the three biggest nuclear powers ends after
  90 minutes with a four-point "peace declaration" that names neither
  Ukraine nor Iran; Europe holds an emergency session in Berlin.
- **Law — the ICJ finds Myanmar guilty of genocide.** 9–6, over the
  2017 operations against the Rohingya; the first time a state has been
  found guilty of genocide, with reparations ordered.
- **War — Ukraine strikes the Crimea bridge a third time** in a week;
  rail traffic halted, Putin vows a "far more painful" reply.
- **War — Israel ends its first Gaza tank raid since the truce**, a
  day-long operation across the "yellow line"; about 6,000 people fled.
- **Markets — Anthropic in the biggest IPO ever**: $81.3bn raised at
  $83 a share, opened $111.50, closed $97.17.
- **Figures — Dow −2.19% to 49,097; the US–Iran war has cost $48.3bn;
  GTA VI opening sales estimated near $2.36bn; Brent $91.98.**
- **50 one-line briefs** across every region and beat: the Kyiv missile
  strikes, the COP31 draft dropping its fossil-fuel phase-out, the
  Senate's Iran war-powers vote, the midterm sweep, the Nvidia
  subpoena, Voyager 1 reaching one light-day, the measles ruling,
  the Spain train-crash audio, the Senegal boat sinking, and the
  day's sport and culture.

## Why this page reads differently from the 19 November entries

The 19 November v3 entry (36 stories, dev grade #495 of 5,549) set its
briefs in small type that vanished at judging size. This page sets
**every line of body text at 15px or larger on a 1024px canvas**
(lead deck 16px, feature decks 15px, briefs 15px bold, feature
headlines 19px, lead headline 38px), with the date in a full-width
black band reading **FRIDAY · 20 NOVEMBER · 2026**, so the day and
the stories stay legible at ~300px. It also tells more of the day:
58 stories against v3's 36 and v4's 46, with four figure panels and
four illustrated features, and it claims no outcome that had not
happened when the page was drawn (the COP31 final text, the Kyiv
casualty count and the Senegal search are all left open).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.png` is a 1024×1024 PNG, under 1 MiB.
