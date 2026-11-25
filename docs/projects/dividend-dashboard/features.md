# Features

## Main table

One row per holding. Click a column header to sort, click a row for full details.

Each row shows the symbol and name, current price and day change, the 52-week
range with a marker for where the price sits, core focus (fund category, or
sector/industry for stocks), payout frequency (inferred from the payment
history), expense ratio, trailing and forward yield, 12-month price and total
return, distribution type, top holdings, next ex-dividend date, and your
position size and income.

## Portfolio tiles

Market value, annual and monthly income, portfolio yield, yield on cost,
unrealized gain, weighted expense ratio and the next ex-dividend date.

## Income by month and the ex-dividend calendar

Projected income by month, plus a calendar of upcoming ex-dividend and pay
dates. Click any day to see every symbol on it, with amounts.

Yahoo announces at most one pay date per holding, so the calendar estimates the
rest as ex-date plus that holding's usual gap (shown as dashed green chips).

## Detail view

Click any row for a 1-year price chart, dividends per share by year, dividend
growth (1-year and 5-year CAGR), years of consecutive increases, payout
variability, recent payments, the full top 10 holdings, sector and asset-class
mix, fund description, 3- and 5-year annualized total return, beta and AUM.

## Warning flags

The dashboard calls out:

- very high yield
- a recent dividend cut
- price falling while yield is high (possible NAV decay)
- expense ratio over 0.75%
- erratic payouts

## Flagging holdings to watch

Tick **Flag** in Edit holdings for anything you're not adding to or are watching
cautiously. Its symbol is highlighted in amber everywhere: the main table, the
ex-dividend list and calendar, the overlap panels and the detail view. The
**All / Flagged / Not flagged** switch filters the table.

## Tabs

### Price & fund

Price and day change, the 52-week range with a marker for where the price
sits, 12-month price return and total return (dividends reinvested), core
focus, expense ratio and payout frequency.

### Dividends & income

Trailing (TTM) and forward yield, distribution type (marked *est.* when it's
guessed from the fund's category), the last payment with its amount and date,
and the next ex-dividend date (marked *est.* when it's projected rather than
announced). For your position: market value and shares, percent of your
portfolio with a small bar, income per year and per month, and yield on cost.
Symbols with no shares show as *watch*.

Money market funds (SPAXX, FDRXX and the like) are recognized automatically and
classed as interest, taxed as ordinary income. Yahoo keeps no payout history for
them, so their yield comes from Yahoo's current 7-day yield and is marked *7-day*.

### Strategy & overlap

Each holding's underlying exposure (Nasdaq-100, S&P 500 and so on) and options
strategy (selling calls, selling puts, ELNs, partial overwrite, index options);
overlap between holdings based on their top 10 holdings; exposure groups; a
look-through of your biggest underlying stocks across all funds; and a
plain-English glossary of the strategies.

### Holdings & performance

Quantity, average cost, current price, total cost, market value, unrealized
gain or loss ($ and %), portfolio weight, income and yield on cost, with totals.
**Holdings by size**, above the table, lists every position by market value and
share of the portfolio, largest first, with a stacked bar on top. Switch it
between **$**, **%** or **Both**.

### Monthly projections

Projected income for each holding over the next 12 months, with monthly totals
and a chart. Monthly and weekly payers count in every month; quarterly,
semi-annual and annual payers repeat the month of their latest payment.
**Annual projection by holding** splits the year's income into a stacked bar
and a list, in **%**, **$** or **Both**.

### Symbol comparison

Compare up to 10 tickers side by side, held or not, over 1M, 3M, 6M, YTD, 1Y,
3Y, 5Y, 10Y or Max, as total return (dividends reinvested) or price only. The
Key stats table covers returns, the part that came from dividends, annualized
return, yield, volatility, max drawdown and the period's low and high.

### Research

Look up any single symbol: price, headline numbers, the same chart and stats as
Symbol comparison, and everything from the detail view. **+ Compare** sends it
to the comparison tab. Badges for your holdings sit below the symbol box, so you
can look one up with a single click; the one you're viewing is highlighted.

### Planning

Try what-if allocations without touching your holdings. A plan has one or more
accounts (a new plan starts with Taxable brokerage, Traditional IRA and Roth
IRA; rename, add or remove them), each with a balance and a list of symbols.
Type any ticker, held or not (several at once, separated by commas), or add
your current holdings with one click.

For each symbol, set a weight % or a dollar amount. The row shows distribution
type, payout frequency, yield (forward or TTM, or type your own), expense ratio,
income per year and per month, and what you hold in it now. Each account checks
that its weights add up to 100%, and **Spread evenly** splits it equally.

To pin an exact dollar amount, type it in the row's Amount box and click its
lock (🔒). A locked amount stays put when the balance changes, and the button
becomes **Spread rest over unlocked**, which splits whatever the locked rows
leave of the balance equally over the others. Locks are saved with the scenario.
Expense ratio is for reference only: fund yields are already paid after fees,
so it isn't subtracted again.

The top of the tab totals the plan: amount invested, annual and monthly income,
blended yield, weighted expense ratio and the difference from your portfolio
now, with charts of income by month (plan vs. now), by distribution type and by
account. **Start from my holdings** loads what you own at today's weights, so
you can try a rebalance.

**Save** keeps the plan as a named scenario in `<holdings file name>-plans.json`
next to your holdings file, so it travels with it through a shared cloud folder.
**Save as new** makes a copy, and the **Saved scenarios** table compares them
all against your portfolio now.

### Summary

A one-page snapshot of the whole portfolio to print or share, stamped with
today's date. It shows metric cards (portfolio value, annual income, monthly
average, current yield, yield on cost, total gain or loss and holdings), the
next 12 months of projected income with the annual total, income by payout
frequency (weekly, monthly, quarterly and so on), allocation donuts by holding
and by core focus, **Holdings by size** and **Annual projection by holding**.
Flagged holdings are highlighted in those panels.

**Save as PNG** saves it as one image and **Download PDF** as a letter-size PDF,
both in the theme you're using, made in the browser with no add-ons and no
internet needed. **Hide $ amounts** swaps every dollar figure for $••• (the
percentages stay), so you can post it without showing your balances; the
exports follow it too.

## Using it on more than one computer

=== "Shared cloud folder"

    Put `holdings.csv` in a OneDrive, Dropbox, iCloud Drive or Google Drive
    folder, then create `holdings_path.txt` next to `server.py` on each computer
    containing that path:

    ```text
    C:\Users\YourName\OneDrive\Dividends\holdings.csv
    ```

    Both computers then read and save the same file. You can also use
    `--holdings PATH` or the `DIVIDEND_HOLDINGS` environment variable.

=== "Export and Import"

    1. On the computer with the latest holdings: **Export CSV → Holdings file**.
    2. Move the file to the other computer.
    3. There: **Import CSV**, check the preview, and choose **Replace** or **Merge**.

    Before an import saves, the current file is copied to `backups/` (the newest
    20 are kept).

## Live demo online

A read-only version runs on Render with a sample portfolio of 26 dividend ETFs
and stocks and two saved Planning scenarios:
[try it live](https://dividend-dashboard-demo-979i.onrender.com/){ target=_blank rel=noopener }. It uses demo data,
never real holdings, with live Yahoo Finance prices refreshed every few hours.
Editing, Import CSV, Stop and saving scenarios are hidden; everything else
works, including Research, Symbol comparison and what-if plans (which stay in
your own browser). The first visit after a quiet spell takes about a minute
while the free plan wakes up. To host your own copy, see
[Host it on Render](getting-started.md#host-it-on-render-optional).

## Other touches

- Auto / Light / Dark theme switch, remembered per browser.
- Export CSV of the dashboard table, the filtered rows, or your holdings file.
- Data cached for 15 minutes; **Refresh prices** forces a new pull, and it falls
  back to cached data if Yahoo is unreachable.
