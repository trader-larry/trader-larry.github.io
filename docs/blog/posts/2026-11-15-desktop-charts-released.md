---
date: 2026-11-15
authors:
  - larry
categories:
  - Desktop Charts
---

# Desktop Charts is on GitHub

I've published [Desktop Charts](../../projects/desktop-charts/index.md): a
TradingView-style charting app that runs on your own computer, with live data
from tastytrade.

((more))

I wanted volume profile, several symbols side by side and futures next to
stocks, without another charting subscription. The app runs locally on Node.js,
keeps my tastytrade keys on my own machine, and only ever reads market data.
Without an account it runs on demo data, so anyone can try it.

What's in this first release:

- Layouts of 1 to 8 charts with symbol, interval, crosshair and date sync
- Volume profile (visible range, session, fixed range) and TPO with POC and value area
- Anchored VWAP, moving averages, Bollinger Bands, RSI, MACD and ATR
- Drawing tools, a watchlist with extended-hours change, and saved layouts
  ([screenshots](../../projects/desktop-charts/screenshots.md))
- A [getting-started guide](../../projects/desktop-charts/getting-started.md),
  including how to connect tastytrade
- An MIT license

[:fontawesome-brands-github: Get it on GitHub](https://github.com/trader-larry/desktop-charts){ .md-button }
