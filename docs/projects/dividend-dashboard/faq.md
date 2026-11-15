# FAQ

??? question "Do I need an API key, account or paid data feed?"
    No. It uses free Yahoo Finance data and needs no sign-up.

??? question "Do I need to install any Python packages?"
    No. It uses only Python's standard library (Python 3.9 or newer). The only
    optional package is `yfinance`, for the `--yfinance` fallback.

??? question "Where are my holdings stored? Are they sent anywhere?"
    In `holdings.csv` in the dashboard's folder (or wherever `holdings_path.txt`
    points). The server only listens on your own computer at `127.0.0.1`, so
    your holdings never leave it. Keep a copy somewhere safe and don't include it
    if you share the dashboard.

??? question "`python` is not recognized"
    Python isn't installed or wasn't added to PATH. Reinstall it and tick
    **Add python.exe to PATH** on the first screen.

??? question "The browser doesn't open"
    Open <http://127.0.0.1:8765> yourself.

??? question "It says \"Address already in use\""
    It's already running in another window. Stop it first, or start it on another
    port with `python server.py --port 9000`.

??? question "No prices, or data shows as unavailable"
    Check your internet connection, then click **Refresh prices**. Yahoo
    occasionally blocks requests for a few minutes; in the meantime the dashboard
    falls back to its last cached data. If Yahoo's feed changes and the built-in
    client stops working, try `python server.py --yfinance`.

??? question "Why does the distribution type say *est.*?"
    Yahoo doesn't publish the tax character of distributions, so the dashboard
    guesses from the fund's category (covered-call funds are often return of
    capital, bond funds pay interest). Check the fund's 19a-1 notices or your
    1099-DIV, then set it in Edit holdings.

??? question "Why are some ex-dividend or pay dates marked as estimates?"
    Yahoo announces at most one upcoming date per holding, often none for ETFs.
    The rest are estimated from the payment cadence and the holding's usual gap
    between ex-date and pay date.

??? question "Can I use it on both my desktop and laptop?"
    Yes. Either share one holdings file through a cloud folder, or use Export CSV
    and Import CSV. See [Using it on more than one computer](features.md#using-it-on-more-than-one-computer).

??? question "Will updating overwrite my holdings?"
    No. Downloads ship `holdings.example.csv`, never `holdings.csv`.

??? question "Is this investment advice?"
    No. It's for information only. Data can be delayed, estimated or wrong, so
    check anything important with your broker or the fund's own website.
