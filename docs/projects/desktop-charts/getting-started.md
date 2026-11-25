# Getting started

A five-minute setup. You need Node.js 18 or newer and nothing else. A tastytrade
account is optional: without one the app runs on demo data.

## 1. Install Node.js (one time)

=== "Windows"

    Download the **LTS** version from [nodejs.org](https://nodejs.org) and run
    the installer with the default options.

=== "Mac"

    Download the **LTS** version from [nodejs.org](https://nodejs.org) and run
    the installer.

=== "Linux"

    Install Node.js 18 or newer from your package manager or
    [nodejs.org](https://nodejs.org).

Check it in a command prompt or Terminal:

```bash
node --version   # should be v18 or higher
```

## 2. Download and start the app

1. Open the [GitHub repo](https://github.com/trader-larry/desktop-charts){ target=_blank rel=noopener },
   click the green **Code** button, then **Download ZIP**.
2. Unzip it (Windows: right-click → **Extract All**; Mac: double-click) and move
   the folder wherever you like.
3. Start it from inside that folder:

=== "Windows"

    Double-click `start-windows.bat`.

    If Windows says "Windows protected your PC", click **More info → Run anyway**.
    That appears for any downloaded script.

=== "Mac"

    Double-click `start-mac.command`. The first time, macOS may block it:
    right-click it, choose **Open**, then **Open** again.

=== "By hand"

    ```bash
    node server.js
    ```

The charts open at [http://localhost:8787](http://localhost:8787){ target=_blank rel=noopener } in their own Chrome or Edge app
window (no tabs or address bar), which remembers its size and position. If
neither browser is installed, your default browser opens instead. Leave the
command window open while you chart.

!!! tip "Prefer a normal browser tab?"
    Open the start script in a text editor and set `APPWINDOW=0` near the top.

### Optional: install it as an app

Open [http://localhost:8787](http://localhost:8787){ target=_blank rel=noopener } in a normal Chrome or Edge tab, then choose
**Install** from the browser menu. You get a Start-menu shortcut and dark title
bars, and from then on `start-windows.bat` opens the installed app instead of a
separate window.

!!! tip "Try it without an account"
    Until you add tastytrade keys, the app runs on generated demo data. To force
    demo data even when keys are set, start it with `node server.js --demo`.

## 3. Connect tastytrade (optional)

tastytrade's API uses OAuth, so you need a **client secret** and a **refresh
token** from a personal OAuth application:

1. On tastytrade.com go to **My Profile → API → OAuth Applications**. Create an
   application if you don't have one, tick the `read` scope, and save the
   **client secret**.
2. In that application choose **Manage → Create Grant** and copy the **refresh token**.
3. In the chart app click the gear icon (top right), paste both, and press
   **Save and connect**.

The status bar at the bottom turns green and says "tastytrade · DXLink" when
data is live.

!!! warning "Keep your keys private"
    The two values are saved in `config.json` in the app's folder. That file is
    git-ignored and only ever sent to tastytrade itself; the browser never sees
    it. Don't share it, and don't include it if you pass the folder to someone.
    You can also copy `config.example.json` to `config.json` and fill it in by hand.

## 4. Symbols

| Type | How to type it | Examples |
|---|---|---|
| Stocks and ETFs | The ticker | `AAPL`, `SPY` |
| Futures, front month | A slash before the root | `/ES`, `/NQ`, `/CL`, `/GC` |
| Futures, specific contract | Root, month code and year | `/ESZ6` |
| Crypto | Coin / USD | `BTC/USD` |

Click the symbol at the top left of a chart, or just start typing on the chart.

## 5. Stop it

Close the command window, or press ++ctrl+c++ in it (on Windows, answer **Y** if
it asks "Terminate batch job"). The command window shows the same reminder when
it starts.

## Options

| Option | What it does |
|---|---|
| `--demo` | Use demo data even if tastytrade keys are set |
| `APPWINDOW=0` | In the start script: open a normal browser tab instead of an app window |
| `PORT=9000` | Environment variable to use a different port (or set `"port"` in `config.json`) |

## Updating

Download the new version the same way and copy its files over your folder.
Downloads never include `config.json`, so your keys are kept. Your layouts,
drawings, watchlists and alerts are stored in your browser and stay as they are.
