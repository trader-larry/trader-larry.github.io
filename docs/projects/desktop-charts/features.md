# Features

## Charts and timeframes

Candles on a dark, TradingView-style chart with 1m, 2m, 5m, 15m, 30m, 1h, daily
and weekly timeframes. The chart type button next to the timeframes switches a
chart between candles, bars, line and area. The legend shows open, high, low,
close and change for the bar under the crosshair.

Each chart remembers its zoom and scroll for every timeframe, so it reopens
showing the same span you left it on. **Alt+R** (or the corners icon) puts it
back to the default view.

Intraday charts load about ten days of 1-minute history (more for the longer
timeframes), so a 1m chart still has several sessions on a Monday morning.

## Multi-chart layouts

The layout button (grid icon, top right) splits the screen into 1, 2, 3, 4, 6,
8, 12 (6 × 2) or 24 (12 × 2) charts. Each chart keeps its own symbol, timeframe,
chart type and indicators.

- Click a chart to make it active (blue outline). The top bar, drawing tools and
  watchlist act on the active chart.
- Click a chart's title to change its symbol.
- ++tab++ / ++shift+tab++ cycles through charts, and ++alt+enter++ (or the arrows
  icon in a chart's legend) maximizes one chart and restores the layout.
- **Sync** options in the layout menu: symbol, interval, crosshair (on by
  default) and date range. Date-range sync lines charts up by their left edge,
  and when the active chart is at the latest bar, every chart ends at its latest
  bar.

## Extra windows

Open the layout menu, then **Windows → + New window** for another app window,
for example on a second monitor. Each window has its own charts, layout and
choice of watchlist (pick it from the watchlist's name). Watchlists, drawings,
alerts, saved layouts and settings are shared and stay in sync between open
windows, and only one window fires each alert.

Extra windows reopen with the main window at their last size and position, and
closing the main window closes the others. Rename or delete them from the same
menu. The first time, allow pop-ups for `localhost` when your browser asks.

![Three Desktop Charts windows: twelve 1-minute charts, four SCHD charts on different timeframes, and a GOOGL daily chart](../../assets/images/desktop-charts/11-three-windows.webp){ .screenshot loading=lazy }

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
- SPX Levels (XSP): the day's posted SPX levels
- RSI, MACD and Average True Range in their own panes
- Volume

**Anchored VWAP:** pick the anchor tool in the left toolbar, then click a bar.
Bands and the anchor time are in its settings.

**Defaults:** the **Defaults** menu in an indicator's settings has **Apply to
all charts** (use these settings for that indicator on every chart), **Save as
default** (use them whenever you add it from now on) and **Reset to default**.

### SPX Levels (XSP)

Type the day's posted SPX levels into the indicator's settings: call trigger
and stop, put trigger and stop, and three levels up (UT1 to UT3) and down (DT1
to DT3). Leave a level at 0 to hide it. On an XSP chart the levels are divided
by 10 automatically, and on SPX they draw as posted (or pick XSP or SPX
yourself). The lines cover the latest session only. Use **Defaults → Apply to
all charts** to update every chart at once.

![SPX 5-minute chart with the SPX Levels indicator: green UT1 to UT3 lines above, orange call and put triggers, grey dashed stops, and red DT1 to DT3 lines below](../../assets/images/desktop-charts/12-spx-levels.webp){ .screenshot loading=lazy }

## Drawing tools

The toolbar on the left scrolls without a scrollbar: when the window is too
short to show every tool, small up and down arrows appear at its ends.

Trend line, ray, horizontal line and ray, vertical line, rectangle, circle, fib
retracement, text and a measure tool. Click a drawing to select it, drag to move
it, and press ++delete++ to remove it. The magnet snaps to open, high, low and
close. ++ctrl+z++ and ++ctrl+y++ undo and redo.

Drawings are saved per symbol. Horizontal lines and rays show on every chart of
that symbol; select a drawing and use **This chart / All charts** to change that.

## Price alerts

Set an alert in whichever way is handiest:

- Right-click a chart and choose **Add alert**.
- Press ++alt+a++ to set one at the price under the cursor.
- Click **Add alert** on a horizontal line's toolbar.
- Click the bell button, then **+ Create**.

Each alert is **crossing**, **crossing up** or **crossing down** a price, and
fires **only once** or **every time** (at most once a minute), with an optional
message. Alerts show as orange lines with a small arrow on the chart, and you
can drag a line to move its alert.

When an alert fires you get a chime, a pop-up in the app, a Windows or Mac
notification and an entry in the bell menu's **Log**. The bell menu lists every
alert, where you can edit, stop, restart or delete them, and turn the sound off.

!!! note "Alerts need the app open"
    Alerts are checked while the app is running (it can be in the background).
    For stocks outside regular hours they use the pre-market or after-hours price.

## Watchlist

Click **+** to add symbols, and the ⋮ menu to choose columns: Last, Change,
Change %, Volume and **Ext**, the pre-market or after-hours change for stocks
(hover it for the price). Click a symbol to load it in the active chart.

**Sort it:** click a column heading to sort by it (numbers high to low first,
Symbol A to Z), click again to flip the order, and a third time to go back to
the list's own order. Only the view is sorted, so your saved order doesn't
change. Number columns re-sort as prices move, and the choice is remembered.

**Several watchlists:** click the watchlist's name to create a new list, make a
copy, rename it, switch between lists, or delete one (× on hover). For example,
keep a "Futures" list next to an "Earnings week" list.

**Hide it for more room:** click **»** in the watchlist header, or the list
button at the top right. The list button or the tab at the right edge of the
charts brings it back. Each window remembers whether its watchlist is shown.

## Extended hours

The **RTH / ETH** button in the status bar switches stock charts between regular
hours only and extended hours. Pre-market and after-hours bars are shaded on
intraday stock charts (you can turn the shading off in Settings).

## Saved layouts

The layout name button at the top right saves the whole screen: every chart's
symbol, timeframe and indicators. **Save layout** (++ctrl+s++), **Save as new
layout**, **Rename**, and a list of saved layouts to switch between. A dot after
the name means unsaved changes.

## Display settings

**Settings → Display** has the chart **background colour** and the **chart
padding**: space above and below the candles (in %) and to the right of the
last bar (in bars). Each has a **Default** button to put it back. The right
padding is kept when you switch timeframes.

**Use the chart background for the whole app** (on by default) gives the
toolbars, watchlist and status bar the chart's colour, with panels and borders
shaded to match. It applies to dark colours; with a light chart background the
rest of the app keeps its default dark look so the text stays readable.

## Other touches

- **Save image:** the camera icon saves the active chart as a PNG.
- **Watermark:** a large, faint ticker with the company name below it, behind
  each chart (Settings → Display).
- **Time zone:** status bar button or Settings.
- Everything (layout, watchlist, drawings, settings) is remembered in your
  browser for next time.
