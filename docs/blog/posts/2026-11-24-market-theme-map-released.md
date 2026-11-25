---
date: 2026-11-24
authors:
  - larry
categories:
  - Market Theme Map
---

# Market Theme Map is on GitHub

I've published [Market Theme Map](../../projects/market-theme-map/index.md): a
heatmap of the stock market grouped by investment theme, that runs on your own
computer.

((more))

Sector maps hide the things I actually follow, like data center power, nuclear,
quantum computing or GLP-1 drugs, because those themes cut across sectors. This
app puts 25 themes on one screen, colors each by how its stocks moved, and lets
me click through to the stocks and what analysts think they're worth. It uses
Yahoo Finance's free data, so there's no account or API key, and it's pure
Python with nothing to install.

What's in this first release:

- 25 themes and about 180 stocks, all in one editable file
- Six lookbacks from 1 day to 1 year, counted in trading sessions
- Themes ranked by average move or by breadth, with the median beside the
  average so one big mover can't distort the picture
- Stock details with a price chart, the analysts' mean target and upside,
  consensus rating, P/E and market cap
  ([screenshots](../../projects/market-theme-map/screenshots.md))
- A demo mode that works offline, and a
  [getting-started guide](../../projects/market-theme-map/getting-started.md)
- An MIT license

[:fontawesome-brands-github: Get it on GitHub](https://github.com/trader-larry/market-theme-map){ .md-button target=_blank rel=noopener }
