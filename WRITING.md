# How to add posts and pages

A quick reference for updating traderlarry.com. Every change you push to the
`main` branch republishes the site in about a minute. You can watch it happen in
the repo's **Actions** tab (green check = live).

There are two ways to work. Use whichever is easier that day.

| | Edit on github.com | Edit on your computer |
|---|---|---|
| Setup | None | One time (below) |
| Preview before publishing | No (use `draft: true`) | Yes, live preview |
| Adding many images | Fine for a few | Easiest |

---

## Write a new blog post

### 1. Create the file

Posts live in `docs/blog/posts/`. Name each file with the date and a short
title, all lowercase with dashes:

```
docs/blog/posts/2026-12-01-my-first-options-trade.md
```

### 2. Paste this at the top

Copy it from [`templates/blog-post.md`](templates/blog-post.md), or from here:

```markdown
---
date: 2026-12-01
authors:
  - larry
categories:
  - Trading
draft: true
---

# Your post title here

One or two sentences that sum up the post. This part shows on the blog's front page.

<!-- more -->

The rest of the post...
```

- **date:** the publish date. Posts are sorted by it, newest first.
- **categories:** any name you like, e.g. `Trading`, `Options`, `Dividend Dashboard`.
  A new name automatically gets its own category page. You can list more than one.
- **draft: true:** keeps the post off the live site. Delete that line when it's ready.
- **`<!-- more -->`:** everything above it is the teaser on the blog's front page.

### 3. Add pictures (optional)

1. Put images in `docs/assets/images/blog/`. Start the file name with the post's
   date so they stay grouped, e.g. `2026-12-01-spy-chart.webp`.
2. In the post, write:

   ```markdown
   ![SPY daily chart with my entry and exit marked](../../assets/images/blog/2026-12-01-spy-chart.webp){ .screenshot }
   ```

   The text in `[ ]` describes the picture for screen readers and search engines.
   `{ .screenshot }` adds a thin border and rounded corners.

WebP files are about half the size of PNG. To convert one (needs `pip install pillow` once):

```bash
python -c "from PIL import Image; Image.open('chart.png').save('chart.webp', quality=82)"
```

PNG and JPG work too. Try to keep each image under about 500 KB.

### 4. Publish

Remove `draft: true` (if you used it), then commit and push (see below).

---

## Option A: edit on github.com (nothing to install)

1. Open https://github.com/trader-larry/trader-larry.github.io
2. Go into `docs/blog/posts/`.
3. Click **Add file → Create new file**, type the file name (e.g.
   `2026-12-01-my-first-options-trade.md`), and paste in your post.
4. Click **Commit changes…**, then **Commit changes** again.

**To add images:** go into `docs/assets/images/blog/`, click **Add file → Upload files**,
drag them in, and click **Commit changes**.

**To fix a typo later:** open the file on GitHub, click the pencil icon, edit, commit.

---

## Option B: edit on your computer (with live preview)

### One-time setup

You need Python (you have it) and Git (https://git-scm.com/downloads).

```bash
git clone https://github.com/trader-larry/trader-larry.github.io
cd trader-larry.github.io
python -m venv .venv
.venv\Scripts\activate            # Windows
# source .venv/bin/activate       # Mac / Linux
pip install -r requirements.txt
```

### Each time you write

```bash
cd trader-larry.github.io
.venv\Scripts\activate            # Windows (Mac/Linux: source .venv/bin/activate)
git pull                          # get any changes you made on github.com
zensical serve
```

Open http://localhost:8000. The page refreshes every time you save a file, and
**drafts are shown here** so you can check them before publishing. Press Ctrl+C to stop.

### Publish

```bash
git add .
git commit -m "Post: my first options trade"
git push
```

If you prefer buttons to commands, [GitHub Desktop](https://desktop.github.com)
or VS Code's Source Control panel do the same three steps.

---

## Add a new app to Projects

1. Copy the folder `docs/projects/dividend-dashboard/` and rename the copy,
   e.g. `docs/projects/my-new-app/`.
2. Rewrite the five pages (`index.md`, `getting-started.md`, `features.md`,
   `screenshots.md`, `faq.md`). Delete any you don't need.
3. Put its screenshots in `docs/assets/images/my-new-app/`.
4. Add it to the menu in `mkdocs.yml`, under `Projects:`, copying the Dividend
   Dashboard block:

   ```yaml
         - My New App:
             - projects/my-new-app/index.md
             - Getting started: projects/my-new-app/getting-started.md
             - FAQ: projects/my-new-app/faq.md
   ```

   Indentation matters in this file: use spaces, not tabs, and line up with the
   entries above.
5. Add a card for it in `docs/projects/index.md` (and on the home page,
   `docs/index.md`) by copying the Dividend Dashboard card.

## Add a top menu tab later (e.g. "Trading")

The simplest version is a tab that opens a category's page. In `mkdocs.yml`, under
`nav:`, add this line where you want the tab (the category name in lowercase, spaces as dashes):

```yaml
  - Trading: /blog/category/trading/
```

Ask Claude if you want a fuller Trading section with its own landing page.

---

## Formatting cheat sheet

| You type | You get |
|---|---|
| `## Heading` | Section heading (shows in "On this page") |
| `**bold**`, `*italic*` | **bold**, *italic* |
| `[text](https://...)` | A link |
| `- item` | Bullet list |
| `1. item` | Numbered list |
| `` `SPY` `` | Inline code style |
| `!!! note` then an indented line | Blue note box (also `tip`, `warning`, `danger`) |
| `??? question "Q?"` then an indented answer | Click-to-expand FAQ entry |
| A table with `\|` columns | A table (see the template) |

Full reference: https://zensical.org/docs/

## If something goes wrong

- **Site didn't update:** open the repo's **Actions** tab. A red X means the build
  failed. Click it to see the error, usually a typo in `mkdocs.yml` or the post's
  `---` header (check spacing and that it starts and ends with `---`).
- **Post doesn't appear:** check for `draft: true` near the top.
- **Image doesn't show:** check the file name matches exactly (it's case-sensitive)
  and the path starts with `../../assets/images/`.
