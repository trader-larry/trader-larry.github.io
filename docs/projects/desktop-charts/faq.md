# FAQ

??? question "Do I need a tastytrade account?"
    No. Without one the app runs on generated demo data so you can try every
    feature. For live data you need a tastytrade account with API access
    (see [Connect tastytrade](getting-started.md#3-connect-tastytrade-optional)).

??? question "Can it place trades or see my account?"
    No. It only asks tastytrade for market data. It never reads balances or
    positions and never sends orders. When you create the OAuth application,
    the `read` scope is all it needs.

??? question "Where are my tastytrade keys stored? Are they sent anywhere?"
    In `config.json` in the app's folder. The local server uses them only to get
    short-lived data tokens from tastytrade; the browser never receives them.
    The server only listens on your own computer, so nothing is exposed to your
    network. The file is git-ignored and never included in downloads.

??? question "Do I need to install any npm packages?"
    No. The charting library is bundled in the download, and the server uses
    only Node.js's built-in modules. You don't need to run `npm install`.

??? question "`node` is not recognized"
    Node.js isn't installed, or the command window was opened before you
    installed it. Install the LTS version from [nodejs.org](https://nodejs.org){ target=_blank rel=noopener }
    and open a new window.

??? question "The browser doesn't open"
    Open [http://localhost:8787](http://localhost:8787){ target=_blank rel=noopener } yourself.

??? question "Why does it open in a window without tabs or an address bar?"
    The start scripts open the app in a Chrome or Edge app window, which
    remembers its size and position. To use a normal tab instead, set
    `APPWINDOW=0` near the top of `start-windows.bat` or `start-mac.command`.

??? question "Can I use it on two monitors?"
    Yes. Open the layout menu and choose **Windows → + New window**, then drag
    the new window to the other screen. Each window has its own charts and
    layout, and they share watchlists, drawings, alerts and settings. If nothing
    opens, allow pop-ups for `localhost` in your browser.

??? question "Do price alerts work when the app is closed?"
    No. Alerts are checked by the app while it's open; it can be minimized or in
    the background. Allow notifications when your browser asks, so a Windows or
    Mac notification appears even when the window isn't in front.

??? question "It says \"address already in use\""
    It's already running in another window. Close that one first, or set a
    different `"port"` in `config.json`.

??? question "The status bar still says Demo data"
    If the login failed, the status bar says "tastytrade login failed" with the
    reason, and Settings (gear icon) shows it after **Save and connect**. A refresh
    token that was revoked or a client secret pasted with extra characters are
    the usual causes. Create a new grant on tastytrade and paste it again.

??? question "Are the buy/sell colors in the volume profile real order flow?"
    No. They are estimated from where each bar closed within its range, because
    candle data doesn't include bid/ask volume. The chart labels them "≈ buy/sell
    from bars".

??? question "Where are my layouts, drawings, watchlists and alerts saved?"
    In your browser's local storage, so they stay with that browser on that
    computer. Clearing your browser data removes them.

??? question "Is this affiliated with TradingView?"
    No. The charts are drawn with TradingView's open-source Lightweight Charts™
    library (Apache 2.0), and the look is inspired by TradingView, but this is an
    independent project. It is not affiliated with tastytrade either.

??? question "Is this investment advice?"
    No. It's a charting tool for information only. Data can be delayed or wrong,
    so check anything important with your broker.
