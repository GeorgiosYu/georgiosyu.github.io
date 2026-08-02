# geyu.me — personal academic website of Ge Yu

A hand-crafted static website (plain HTML/CSS/JS, no framework, no build step),
served by GitHub Pages at [geyu.me](https://geyu.me/).

The visual design is inspired by the Stockholm School of Economics
([hhs.se](https://www.hhs.se/)): PT Serif headings, PT Sans body text, warm cream
surfaces, sage-green panels, and the SSE dark green (`#004932`) as the accent color.
Fonts are self-hosted (ParaType PT fonts, SIL OFL license).

## Structure

| Path                  | Page                              |
| --------------------- | --------------------------------- |
| `index.html`          | About (home)                      |
| `cv/index.html`       | CV overview + PDF download        |
| `teaching/index.html` | Teachings                         |
| `pronounce/index.html`| How to pronounce "Ge Yu"          |
| `chinese/index.html`  | 中文版个人主页                     |
| `jmp/index.html`      | Redirect to the latest JMP draft (edit the Dropbox URL here to publish a new version) |
| `404.html`            | Not-found page                    |

Shared styles live in `assets/css/style.css`; the only JavaScript
(`assets/js/main.js`) drives the mobile navigation menu.

## Editing

Every page is self-contained HTML — edit the file, refresh the browser.
To preview locally, run any static file server from the repo root, e.g.:

```bash
npx serve .
```

The `.nojekyll` file tells GitHub Pages to serve the files as-is (no Jekyll build).
`CNAME` keeps the custom domain `geyu.me`.
