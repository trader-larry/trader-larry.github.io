# Features

## Charts and timeframes

Candles on a dark, TradingView-style chart with 1m, 2m, 5m, 15m, 30m, 1h, daily
and weekly timeframes. The legend shows open, high, low, close and change for
the bar under the crosshair. **Alt+R** (or the corners icon) resets the view.

## Multi-chart layouts

The layout button (grid icon, top right) splits the screen into 1, 2, 3, 4, 6 or
8 charts. Each chart keeps its own symbol, timeframe, chart type and indicators.

- Click a chart to make it active (blue outline). The top bar, drawing tools and
  watchlist act on the active chart.
- Click a chart's title to change its symbol.
- ++tab++ / ++shift+tab++ cycles through charts, and ++alt+enter++ (or the arrows
  icon in a chart's legend) maximizes one chart and restores the layout.
- **Sync** options in the layout menu: symbol, interval, crosshair (on by
  default) and date range.

## Volume profile and TPO

| Tool | What it shows |
|---|---|
| **Volume Profile, Visible Range** | Volume at each price for the bars on screen (on by default) |
| **Session Volume Profile** | One profile per trading session |
| **Fixed Range** | A profile for a range you pick with the range tool in the left toolbar |
| **TPO (Market Profile)** | Letters per 30-minute period (blocks when zoomed out), with initial balance |

Each profile marks the point of control (POC) and the value area high and low
(VAH, VAL), with labels on the price axis.

!!! note "Buy/sell split is an estimate"
    The buy and sell colors in a profile are estimated from where each bar closed
    within its range. They are not true bid/ask order flow, which candle data
    doesn't include. The chart labels this "≈ buy/sell from bars".

## Indicators

Open **Indicators** (or press ++slash++) and star the ones you use to keep them in
Favorites. Hover a legend row to hide, edit or remove an indicator.

- Moving averages (simple and exponential)
- Bollinger Bands
- VWAP (session) and Anchored VWAP
- Key levels: previous session high, low and close, and today's open
- RSI, MACD and Average True Range in their own panes
- Volume

**Anchored VWAP:** pick the anchor tool in the left toolbar, then click a bar.
Bands and the anchor time are in its settings.

## Drawing tools

Trend line, ray, horizontal line and ray, vertical line, rectangle, circle, fib
retracement, text and a measure tool. Click a drawing to select it, drag to move
it, and press ++delete++ to remove it. The magnet snaps to open, high, low and
close. ++ctrl+z++ and ++ctrl+y++ undo and redo.

Drawings are saved per symbol. Horizontal lines and rays show on every chart of
that symbol; select a drawing and use **This chart / All charts** to change that.

## Watchlist

Click **+** to add symbols, and the ⋮ menu to choose columns: Last, Change,
Change %, Volume and **Ext**, the pre-market or after-hours change for stocks
(hover it for the price). Click a symbol to load it in the active chart.

## Extended hours

The **RTH / ETH** button in the status bar switches stock charts between regular
hours only and extended hours. Pre-market and after-hours bars are shaded on
intraday stock charts (you can turn the shading off in Settings).

## Saved layouts

The layout name button at the top right saves the whole screen: every chart's
symbol, timeframe and indicators. **Save layout** (++ctrl+s++), **Save as new
layout**, **Rename**, and a list of saved layouts to switch between. A dot after
the name means unsaved changes.

## Other touches

- **Save image:** the camera icon saves the active chart as a PNG.
- **Watermark:** a large, faint symbol, timeframe and description behind each
  chart (Settings → Display).
- **Time zone:** status bar button or Settings.
- Everything (layout, watchlist, drawings, settings) is remembered in your
  browser for next time.
