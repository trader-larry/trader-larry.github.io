# Desktop Charts

A TradingView-style charting app that runs on your own computer and opens in
your web browser. Up to eight charts on one screen, volume profile and TPO,
anchored VWAP, drawing tools and a watchlist, with live market data from your
tastytrade account. Without an account it runs on demo data, so anyone can try it.

[:fontawesome-brands-github: View on GitHub](https://github.com/trader-larry/desktop-charts){ .md-button .md-button--primary }
[:material-rocket-launch: Get started](getting-started.md){ .md-button }

![Desktop Charts with four charts (SPY, /ES, NVDA and QQQ), each with a visible-range volume profile, and the watchlist on the right](../../assets/images/desktop-charts/overview.webp){ .screenshot }

## Why I built it

I wanted the charts I actually trade from, with volume profile, POC and value
area, several symbols side by side, and futures next to stocks, driven by the
data feed I already have through tastytrade. Web charting sites put the
features I use behind a subscription, and my broker's platform doesn't lay
charts out the way I like. This one runs locally, keeps my API keys on my own
machine, and only ever reads market data.

## At a glance

| | |
|---|---|
| **Runs on** | Windows, macOS, Linux (Node.js 18 or newer) |
| **Data** | tastytrade DXLink streaming (stocks, ETFs, futures, crypto), or built-in demo data |
| **Charts** | TradingView's open-source [Lightweight Charts™](https://www.tradingview.com/lightweight-charts/) library |
| **Privacy** | Runs at `http://localhost:8787`; your tastytrade keys stay in a local `config.json` and never reach the browser |
| **Account access** | Read-only charting: it never touches accounts, positions or orders |
| **Dependencies** | None to install beyond Node.js |
| **License** | MIT (Lightweight Charts is Apache 2.0) |

## Highlights

- **Multi-chart layouts:** 1, 2, 3, 4, 6 or 8 charts, each with its own symbol,
  timeframe and indicators, with optional symbol, interval, crosshair and date sync.
- **Volume profile and TPO:** visible range, session and fixed range profiles
  with POC, VAH and VAL, plus a TPO (Market Profile) with initial balance.
- **Anchored VWAP:** click any bar to anchor it, with optional bands.
- **Drawing tools:** trend lines, rays, horizontal lines, rectangles, fib
  retracements, text and a measure tool, saved per symbol.
- **Watchlist:** last, change, volume and pre-market / after-hours change for stocks.
- **Saved layouts:** keep a "Scalping" and a "Swing" setup and switch between them.

See the full [feature tour](features.md) or the [screenshots](screenshots.md).

!!! note
    This is a charting tool for information only, not investment advice. It is
    not affiliated with TradingView or tastytrade. Data can be delayed or wrong.
