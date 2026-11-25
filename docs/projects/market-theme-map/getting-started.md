# Getting started

A five-minute setup. You need Python 3.10 or newer and nothing else: no
account, no API key and no packages to install.

## 1. Install Python (one time)

=== "Windows"

    Download Python from [python.org](https://www.python.org/downloads/) and
    run the installer. On the first screen, tick **Add python.exe to PATH**.

=== "Mac"

    Download Python from [python.org](https://www.python.org/downloads/) and
    run the installer.

=== "Linux"

    Most distributions already have Python 3.10 or newer. If not, install it
    from your package manager.

Check it in a command prompt or Terminal:

```bash
python --version   # should be 3.10 or higher (on Mac and Linux: python3)
```

## 2. Download and start the app

1. Open the [GitHub repo](https://github.com/trader-larry/market-theme-map),
   click the green **Code** button, then **Download ZIP**.
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
30 seconds. Your browser then opens <http://localhost:8050>. Leave the command
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

## Options

| Option | What it does |
|---|---|
| `--demo` | Use made-up prices, so it works offline |
| `--port 8051` | Run on a different port |
| `--no-browser` | Don't open a browser tab |

## Updating

Download the new version the same way and copy its files over your folder. If
you've changed `themes.json`, keep a copy of yours first and put it back
afterwards, because the download includes the default file.
