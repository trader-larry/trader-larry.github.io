# Larry's Projects (personal site)

Articles, guides and progress notes for my GitHub projects. Pages are Markdown
files in `docs/`, settings are in `mkdocs.yml`, and the site is built with
[Zensical](https://zensical.org) (the successor to Material for MkDocs) and
hosted free on GitHub Pages.

## Layout

```
mkdocs.yml                     site settings, theme and menu (nav)
docs/index.md                  home page
docs/about.md                  about page
docs/projects/index.md         list of projects
docs/projects/<app>/           one folder per app: index, getting-started, features, screenshots, faq
docs/blog/posts/               blog posts (one Markdown file each)
docs/blog/.authors.yml         blog author info
docs/assets/images/<app>/      screenshots (WebP keeps them small)
docs/stylesheets/extra.css     your own CSS tweaks
.github/workflows/deploy.yml   builds and publishes the site on every push to main
```

## Preview on your computer

One-time setup (from this folder):

```bash
python -m venv .venv
# Windows:      .venv\Scripts\activate
# Mac / Linux:  source .venv/bin/activate
pip install -r requirements.txt
```

Then, each time:

```bash
zensical serve
```

Open http://localhost:8000. The page reloads when you save a file. Press Ctrl+C to stop.

(`mkdocs serve` also works if you `pip install mkdocs-material` instead, since both
read the same `mkdocs.yml`. Material for MkDocs reaches end of life on May 5, 2027,
so Zensical is the one to stay on.)

## Writing

- **New blog post:** add a file to `docs/blog/posts/`, e.g.
  `2026-12-01-overlap-tab.md`, starting with:

  ```yaml
  ---
  date: 2026-12-01
  authors: [larry]
  categories: [Dividend Dashboard]
  ---
  ```

  Then a `# Title`, an intro paragraph, `<!-- more -->` (everything above it shows
  on the blog index), and the rest of the post.
- **New project:** copy `docs/projects/dividend-dashboard/`, rewrite the pages,
  put screenshots in `docs/assets/images/<app>/`, then add it to `nav:` in
  `mkdocs.yml` and add a card to `docs/projects/index.md` and `docs/index.md`.
- **Images:** `![Alt text](../../assets/images/<app>/file.webp){ .screenshot }`.
  To convert a PNG to WebP: `python -c "from PIL import Image; Image.open('in.png').save('out.webp', quality=82)"`
  (needs `pip install pillow`).
- Handy extras already turned on: `!!! note` / `!!! tip` boxes, `??? question`
  collapsible FAQ entries, `=== "Windows"` tabs, and copy buttons on code blocks.
  See https://zensical.org/docs/ for more.

## Publish on GitHub Pages (one time)

1. Create a GitHub repo for the site and push this folder to its `main` branch.
   Naming the repo `trader-larry.github.io` gives you a working address even
   before the custom domain is set up.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push (or run the workflow from the **Actions** tab). After a minute the site
   is live at `https://trader-larry.github.io/` (or `.../<repo-name>/`).

## Point your Namecheap domain at it

Replace `yourdomain.com` below with your domain. These steps leave your email
records (MX, TXT) alone.

1. **Tell GitHub the domain (recommended first step):** in your GitHub account,
   **Settings → Pages → Add a domain**, enter `yourdomain.com`, and add the TXT
   record it shows you in Namecheap (step 2). This verification stops anyone else
   from claiming your domain on GitHub Pages.
2. **Namecheap → Domain List → Manage → Advanced DNS.** Delete Namecheap's default
   parking records for `@` and `www` (a "URL Redirect" or a CNAME to
   `parkingpage.namecheap.com`), then add:

   | Type | Host | Value |
   |---|---|---|
   | A Record | `@` | `185.199.108.153` |
   | A Record | `@` | `185.199.109.153` |
   | A Record | `@` | `185.199.110.153` |
   | A Record | `@` | `185.199.111.153` |
   | CNAME Record | `www` | `trader-larry.github.io.` |

   Optional IPv6 (AAAA, host `@`): `2606:50c0:8000::153`, `2606:50c0:8001::153`,
   `2606:50c0:8002::153`, `2606:50c0:8003::153`.
3. **In the site repo:** **Settings → Pages → Custom domain**, enter
   `www.yourdomain.com` and save. GitHub checks the DNS (can take up to an hour,
   occasionally a day). The bare `yourdomain.com` will redirect to `www`.
4. When the check passes, tick **Enforce HTTPS**.
5. In `mkdocs.yml`, set `site_url: https://www.yourdomain.com/` and push.

GitHub's own guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
