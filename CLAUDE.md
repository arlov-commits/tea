# Working in this repo

## Commit to `main`

Work goes on `main` and is pushed there, unless the user says otherwise in that
session. Don't open a pull request unless asked.

## Verify everything

This chart is a source of truth. Every value on it is one of:

- **Looked up**: from a source you actually read, named in the row's Basis
  column (or the tab's source list), with a working link.
- **From the package**: marked `BOX` (the Jesse's Teahouse box; photos in
  `sources/`) or `LABEL` (that product's own package), read off the user's
  photo. Keep package photos in `sources/` so later audits can re-read them.
- **Derived**: worked out from looked-up values (interpolation, unit
  conversion, a ratio scaled to the flask), and labelled as derived with the
  working shown.

No guesses, no "if I remember correctly", no unlabelled general knowledge. If
a fact can be looked up, look it up before writing it, in chat as well as on
the page. If no source gives a value, impute one by the method in `AUDIT.md` (Rule 3)
and wrap it in `<span class="imp">`, which styles it as Claude-imputed; say
how it was imputed in the Basis column or legend. Never leave a plain value
that no source backs.

When sources disagree, don't pick by feel. `AUDIT.md` holds the two fixed
rules (the tea's own package, then a source for that tea, then a type-level
source at the closest leaf-to-water ratio, never one more than 1.5× off) and
a ledger of every value with the quote behind it. Change a value only when a
quote changes or a better-ranked source turns up, and update the ledger in the
same commit.

## What the project is

- `index.html` is the whole app: markup, CSS and vanilla ES5 in one file, no
  build step. Three tabs: Pressed, Loose leaf, Guide.
- Every `table[data-pick]` lets a row be highlighted and un-highlighted by
  pressing it; marks persist per table in localStorage, keyed by the row's
  title cell text.
- The tables are the data. On phones (≤720px) each `table[data-cards]` is
  rebuilt as cards by script, so edit the table, never the cards.
- `table[data-merge]` rows are split at load so each tea owns its values, then
  `mergeTables()` re-merges identical neighbouring cells down each column,
  within a tea type, for the current mode and vessel; it runs on every filter
  change. Rowspans written in the HTML are only a starting point. An imputed
  value never merges with a sourced one, because their markup differs.
- It is an installable PWA. `manifest.webmanifest` and `sw.js` ship with it; a
  file added to the app must also go in `FILES` in `sw.js`. Bump `VERSION`
  there when the icons or cached files change.

## The shell

Same construction as the Bodhi Precepts and Academic Planner apps:

- `.shell` is one viewport tall (`100dvh`); only `.pane#scroll` scrolls. The
  document does not scroll, so anything that scrolls programmatically drives
  `#scroll`.
- The tab bar is the last child of that column, in ordinary flow. **No
  `position:fixed` in the chrome**: a fixed bar sits against the layout
  viewport, which Android Chrome keeps at the taller URL-bar-hidden height.
- `.frame` needs `min-height:0`, or the column overflows and pushes the bar
  off screen.
- One set of tabs is drawn twice: a bottom bar on phones, and from 820px up a
  menu bar across the top, like an ordinary website. The top bar is the
  column's first child, also in flow, so it stays put while the pane scrolls.
  The media query alone decides which shows.

## Verify before committing

Serve the repo root (`python3 -m http.server`) and check with Playwright
(Chromium is preinstalled) at a desktop and a phone viewport, in both colour
schemes, watching for page errors. This sandbox's fallback Chinese font lacks
vertical metrics, so the vertical type labels overlap in screenshots here;
that is the sandbox, not the page.
