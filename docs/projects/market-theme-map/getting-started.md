# Getting started

A five-minute setup. You need Python 3.10 or newer and nothing else: no
account, no API key and no packages to install.

## 1. Install Python (one time)

=== "Windows"

    Download Python from [python.org](https://www.python.org/downloads/){ target=_blank rel=noopener } and
    run the installer. On the first screen, tick **Add python.exe to PATH**.

=== "Mac"

    Download Python from [python.org](https://www.python.org/downloads/){ target=_blank rel=noopener } and
    run the installer.

=== "Linux"

    Most distributions already have Python 3.10 or newer. If not, install it
    from your package manager.

Check it in a command prompt or Terminal:

```bash
python --version   # should be 3.10 or higher (on Mac and Linux: python3)
```

## 2. Download and start the app

1. Open the [latest release](https://github.com/trader-larry/market-theme-map/releases/latest){ target=_blank rel=noopener }
   and, under **Assets**, download `market-theme-map-vX.Y.Z.zip` (for example
   `market-theme-map-v1.0.0.zip`). You don't need git or a GitHub account.
2. Unzip it (Windows: right-click → **Extract All**; Mac: double-click) and move
   the folder wherever you like.
3. Start it from inside that folder:

=== "Windows"

    Double-click `run.bat`.

    If Windows says "Windows protected your PC", click **More info → Run anyway**.
    That appears for any downloaded script.

=== "Mac and Linux"

    Open Terminal in the folder and run:

    ```bash
    python3 app.py
    ```

The first load downloads 14 months of prices for every stock, which takes 10 to
30 seconds. Your browser then opens [http://localhost:8050](http://localhost:8050){ target=_blank rel=noopener }. Leave the command
window open while you use it.

!!! tip "Try it offline"
    Start it with `--demo` (`python app.py --demo`, or `run.bat --demo` from a
    command prompt) to use made-up prices. It works without internet, and the
    status line says **DEMO DATA**.

## 3. Read the map

- Pick a **Period** (1D to 1Y) and a **Rank by** order at the top.
- Each tile shows the theme's average move in large type, its median, and how
  many of its stocks are up, with a bar for that share.
- Click a tile to list its stocks, then click a stock for its chart and the
  analysts' view.
- The **?** button explains the numbers. It opens by itself the first time.

## 4. Change the themes

Open `themes.json` in any text editor. Each line is a theme name followed by
its Yahoo Finance symbols:

```json
"My Theme": ["AAPL", "MSFT", "BRK-B"]
```

Use Yahoo's symbol format, for example `BRK-B`, `RY.TO` for Toronto or `^GSPC`
for an index. A stock can be in more than one theme. Save the file and press
**↻** in the app.

!!! warning "Keep the commas and quotes"
    Every theme line except the last ends with a comma, and every symbol is in
    double quotes. If the app shows an error after an edit, a missing comma or
    quote is the usual cause.

## 5. Stop it

Close the command window, or press ++ctrl+c++ in it (on Windows, answer **Y** if
it asks "Terminate batch job").

## Host it on Render (optional)

You can also put the app online, so it opens on your phone or any computer.
The repo includes a `render.yaml` that sets it up on Render's free plan.

1. Sign up at [render.com](https://render.com){ target=_blank rel=noopener } with your GitHub account.
2. **Fork** the [repo](https://github.com/trader-larry/market-theme-map){ target=_blank rel=noopener } on
   GitHub, so you have your own copy for Render to use.
3. In Render, click **New**, then **Blueprint**, and pick your copy. Give Render
   access to it if asked.
4. Render asks for `APP_PASSWORD`. Type a password to keep the page private,
   or leave it empty to make it public.
5. Click **Apply**. The first deploy takes a few minutes, and Render shows your
   link, something like `https://market-theme-map-xxxx.onrender.com`.

With a password set, your browser asks for a username and password: type
anything as the username and your password below it. You can change the
password later under the service's **Environment** tab.

!!! note "Things to know"
    - **The free plan sleeps** after 15 minutes without visitors, so the first
      visit after a break takes about a minute.
    - **Yahoo sometimes blocks cloud servers.** If prices fail online but work
      at home, that's the likely cause. The app keeps retrying every minute.
    - **Updates deploy themselves:** each push to your copy's `main` branch
      redeploys it.
    - Times show in New York time, set by `TZ` in `render.yaml`.

## Options

| Option | What it does |
|---|---|
| `--demo` | Use made-up prices, so it works offline |
| `--port 8051` | Run on a different port |
| `--no-browser` | Don't open a browser tab |
| `--host 0.0.0.0` | Listen on every network address, not just this computer |
| `--no-update-check` | Don't check GitHub for a newer version |

When the `PORT` environment variable is set, as it is on Render, the app
listens on `0.0.0.0` at that port and doesn't open a browser. Set
`APP_PASSWORD` to ask visitors for a password.

## Updating

When a new version is out, the map shows a banner at the top with a download link. Download the newest zip
from the [latest release](https://github.com/trader-larry/market-theme-map/releases/latest){ target=_blank rel=noopener } and unzip it over your folder.
If you've changed `themes.json`, keep a copy of yours first and put it back afterwards, because the zip includes the default file.

!!! info "About the update check"
    A downloaded copy checks GitHub once every 12 hours for a newer release. It
    only reads the public release number; nothing about you is sent, and it never
    downloads or installs anything by itself. Turn it off with
    `python app.py --no-update-check` (or set `THEMEMAP_NO_UPDATE_CHECK=1`). Copies made with
    `git clone` don't check: use `git pull` instead.
