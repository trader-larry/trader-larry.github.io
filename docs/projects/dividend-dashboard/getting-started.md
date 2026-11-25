# Getting started

A five-minute setup. You need Python 3.9 or newer and nothing else.

## 1. Install Python (one time)

=== "Windows"

    Download it from [python.org/downloads](https://www.python.org/downloads/).
    On the first installer screen, tick **Add python.exe to PATH**, then click
    **Install Now**.

=== "Mac"

    Download it from [python.org/downloads](https://www.python.org/downloads/)
    and run the installer.

=== "Linux"

    Python 3 is usually already installed.

Check it in a command prompt or Terminal:

```bash
python --version   # or python3 --version on a Mac; should be 3.9 or higher
```

## 2. Download and start the dashboard

1. Open the [GitHub repo](https://github.com/trader-larry/dividend-dashboard){ target=_blank rel=noopener },
   click the green **Code** button, then **Download ZIP**.
2. Unzip it (Windows: right-click → **Extract All**; Mac: double-click) and move
   the folder wherever you like.
3. Start it from inside that folder:

=== "Windows"

    Double-click `run_windows.bat`.

    If Windows says "Windows protected your PC", click **More info → Run anyway**.
    That appears for any downloaded script.

=== "Mac / Linux"

    ```bash
    ./run_mac_linux.sh
    ```

    If it says "permission denied", run this once first:

    ```bash
    chmod +x run_mac_linux.sh stop_mac_linux.sh
    ```

=== "By hand"

    ```bash
    python server.py
    ```

Your browser opens the dashboard at [http://127.0.0.1:8765](http://127.0.0.1:8765){ target=_blank rel=noopener }. Leave the command
window open while you use it.

!!! tip "Try it without internet"
    `python server.py --demo` fills the dashboard with synthetic numbers so you
    can look around offline.

## 3. Put in your own holdings

The first run fills in a few sample holdings (SCHD, JEPI, VYM, O and BND).
Replace them:

1. Click **Edit holdings** at the top of the page.
2. Enter each ticker, the number of shares and your average cost per share.
   Leave shares blank to just watch a symbol.
3. Click **Save**.

You can also **Import CSV** from your broker (it understands columns like Symbol,
Quantity and Cost basis) or edit `holdings.csv` in Excel.

### The holdings file

| Column | Meaning |
|---|---|
| `symbol` | Ticker, e.g. SCHD |
| `shares` | Leave blank to track as a watchlist item |
| `cost_basis` | Average cost per share (for yield on cost and gain) |
| `frequency` | Optional override: Weekly, Monthly, Quarterly, Semi-annual or Annual |
| `core_focus` | Optional override for the fund category or sector |
| `distribution_type` | Optional override, e.g. "Qualified", "Return of capital" |
| `strategy`, `exposure` | Optional overrides for the Strategy & overlap tab |
| `flagged` | `yes` to highlight the symbol everywhere |
| `notes` | Anything you like |

Example:

```csv title="holdings.csv"
symbol,shares,cost_basis,frequency,distribution_type,notes
SCHD,100,25.00,,,Core dividend growth
JEPI,50,55.00,,,Covered-call income
VYM,20,110.00,,,
O,40,58.00,,,Monthly REIT
BND,,,,,Watchlist only (no shares)
```

## 4. Stop it

Click **Stop** at the top right of the page and confirm, double-click
`stop_windows.bat` (Windows), run `./stop_mac_linux.sh` (Mac/Linux), or press
++ctrl+c++ in the command window.

## Command-line options

| Option | What it does |
|---|---|
| `--port 9000` | Use a different port (pass the same port to the stop script) |
| `--demo` | Synthetic data, works offline |
| `--no-browser` | Don't open the browser automatically |
| `--holdings PATH` | Use a holdings file somewhere else, e.g. a cloud folder |
| `--yfinance` | Use the `yfinance` library instead of the built-in client |

## Updating

Download the new version the same way and copy its files over your folder.
The download ships `holdings.example.csv`, not `holdings.csv`, so your holdings
are never overwritten.
