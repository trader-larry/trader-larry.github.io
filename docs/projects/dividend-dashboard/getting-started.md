# Getting started

A five-minute setup. You need Python 3.9 or newer and nothing else.

## 1. Install Python (one time)

=== "Windows"

    Download it from [python.org/downloads](https://www.python.org/downloads/){ target=_blank rel=noopener }.
    On the first installer screen, tick **Add python.exe to PATH**, then click
    **Install Now**.

=== "Mac"

    Download it from [python.org/downloads](https://www.python.org/downloads/){ target=_blank rel=noopener }
    and run the installer.

=== "Linux"

    Python 3 is usually already installed.

Check it in a command prompt or Terminal:

```bash
python --version   # or python3 --version on a Mac; should be 3.9 or higher
```

## 2. Download and start the dashboard

1. Open the [latest release](https://github.com/trader-larry/dividend-dashboard/releases/latest){ target=_blank rel=noopener }
   and, under **Assets**, download `dividend-dashboard-vX.Y.Z.zip` (for example
   `dividend-dashboard-v1.0.0.zip`). You don't need git or a GitHub account.
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

## Host it on Render (optional)

You can put a public, read-only demo of the dashboard online, so people can try
it in their browser without installing anything, like
[my live demo](https://dividend-dashboard-demo-979i.onrender.com/){ target=_blank rel=noopener }. The repo includes a
`render.yaml` that sets it up on Render's free plan.

!!! warning "The demo shows sample data, not your holdings"
    The online demo always uses the sample portfolio in `demo/demo-holdings.csv`
    and the sample scenarios in `demo/demo-scenarios.json`. Your own
    `holdings.csv` is never uploaded: it's left out of git, so it isn't in the
    repo. Edit holdings, Import CSV and Stop are hidden, and Planning can't save
    scenarios. To track your real holdings, run it on your own computer.

1. Sign up at [render.com](https://render.com){ target=_blank rel=noopener } with your GitHub account.
2. **Fork** the [repo](https://github.com/trader-larry/dividend-dashboard){ target=_blank rel=noopener } on
   GitHub, so you have your own copy for Render to use.
3. In Render, click **New**, then **Blueprint**, and pick your copy. Give Render
   access to it if asked.
4. Render finds `render.yaml` and shows one web service,
   **dividend-dashboard-demo**, on the Free plan. Click **Apply**.
5. The first deploy takes a minute or two, and Render shows your link,
   something like `https://dividend-dashboard-demo-xxxx.onrender.com`.

To change the sample portfolio, edit the two files in `demo/` in your copy and push.

!!! note "Things to know"
    - **The free plan sleeps** after 15 minutes without visitors, so the first
      visit after a break takes about a minute, plus a few seconds to load prices.
    - **Prices are cached for 6 hours** and refreshed in the background, so
      visitors share the same data instead of each one going to Yahoo. Change
      it with `DEMO_CACHE_HOURS` on the service's **Environment** tab.
    - **Yahoo sometimes blocks cloud servers.** Holdings then fall back to
      sample numbers, so the page never comes up empty. Set `DEMO_DATA` to
      `synthetic` for a demo made entirely of made-up numbers.
    - **Missing fund details:** Yahoo often holds back expense ratios, top
      holdings and sectors from Render. Run `python server.py --save-demo-snapshot`
      on your own computer, then commit and push `demo/fund-snapshot.json`.
    - **Updates deploy themselves:** each push to your copy's `main` branch
      redeploys it.
    - **Try it on your computer first:** `python server.py --public-demo`.

## Command-line options

| Option | What it does |
|---|---|
| `--port 9000` | Use a different port (pass the same port to the stop script) |
| `--demo` | Synthetic data, works offline |
| `--no-browser` | Don't open the browser automatically |
| `--holdings PATH` | Use a holdings file somewhere else, e.g. a cloud folder |
| `--yfinance` | Use the `yfinance` library instead of the built-in client |
| `--public-demo` | Read-only demo with the sample portfolio in `demo/`, for hosting online |
| `--save-demo-snapshot` | Save fund details for the demo portfolio to `demo/fund-snapshot.json` |
| `--no-update-check` | Don't check GitHub for a newer version |

## Updating

When a new version is out, the dashboard shows a banner at the top with a download link. Download the newest zip
from the [latest release](https://github.com/trader-larry/dividend-dashboard/releases/latest){ target=_blank rel=noopener } and unzip it over your folder.
Your `holdings.csv` is never in the zip, so your holdings are kept.

!!! info "About the update check"
    A downloaded copy checks GitHub once every 12 hours for a newer release. It
    only reads the public release number; nothing about you is sent, and it never
    downloads or installs anything by itself. Turn it off with
    `python server.py --no-update-check` (or set `DIVIDEND_NO_UPDATE_CHECK=1`). Copies made with
    `git clone` don't check: use `git pull` instead.
