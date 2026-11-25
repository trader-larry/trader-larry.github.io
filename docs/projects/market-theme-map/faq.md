# FAQ

??? question "Do I need an account or an API key?"
    No. It uses Yahoo Finance's free, public data, so there's nothing to sign
    up for. To try it without internet, start it with `--demo`.

??? question "Is the data real time?"
    No. Yahoo's free prices can be delayed, and the app refreshes every 5
    minutes. It's meant for a
    picture of the market, not for timing trades.

??? question "Do I need to install any packages?"
    No. The app uses only Python's standard library, so you don't need to run
    `pip install`. That's also why Windows 11's Smart App Control doesn't block it.

??? question "`python` is not recognized"
    Python isn't installed, or **Add python.exe to PATH** wasn't ticked when it
    was. Run the installer again, tick that box, and open a new command window.
    `run.bat` also tries the `py` launcher, which the Windows installer adds.

??? question "The browser doesn't open"
    Open <http://localhost:8050> yourself. The first load takes 10 to 30
    seconds while it downloads prices.

??? question "It says the port is busy"
    It's already running in another window. Close that one first, or start it
    with `--port 8051`.

??? question "A stock shows \"no data\""
    Yahoo didn't return prices for that symbol. Check it's written the way
    Yahoo writes it (for example `BRK-B`, not `BRK.B`), and that it still
    trades. The theme's figures leave it out.

??? question "How are the theme figures calculated?"
    Each stock counts equally. The average is the mean of the stocks' moves,
    the median is the middle one, and breadth is how many are up. Stocks
    without data are left out of all three.

??? question "What does \"fair value\" mean here?"
    It's the mean of the analysts' 12-month price targets that Yahoo reports,
    not a valuation of my own. Upside is how far that target is above today's
    price. Targets are opinions and can be out of date.

??? question "Can other people on my network see it?"
    No. The server only listens on your own computer (`127.0.0.1`).

??? question "Can I use other markets, like Canadian stocks or indexes?"
    Yes, anything Yahoo has a daily chart for. Use Yahoo's symbol, such as
    `RY.TO` for Toronto or `^GSPC` for the S&P 500, in `themes.json`.

??? question "Is this affiliated with Yahoo?"
    No. It reads Yahoo Finance's public but unofficial endpoints, which can
    change without notice. It's meant for personal use, so check Yahoo's terms
    before using it for anything else.

??? question "Is this investment advice?"
    No. It's a market overview for information only. Data can be delayed or
    wrong, so check anything important with your broker.
