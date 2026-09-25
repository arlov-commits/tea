# Working in this repo

## Commit to `main`

Work goes on `main` and is pushed there, unless the user says otherwise in that
session. Don't open a pull request unless asked.

## Verify everything

This chart is a source of truth. Every value on it is one of:

- **Looked up**: from a source you actually read, named in the row's Basis
  column (or the tab's source list), with a working link.
- **From the package**: marked `BOX` (the Jesse's Teahouse box) or `LABEL`
  (that product's own package), read off the user's photo.
- **Derived**: worked out from looked-up values (interpolation, unit
  conversion, a ratio scaled to the flask), and labelled as derived with the
  working shown.

No guesses, no "if I remember correctly", no unlabelled general knowledge. If
a fact can be looked up, look it up before writing it, in chat as well as on
the page. If no source gives a value, write "Not in sources" rather than
filling the cell.

## What the project is

- `index.html` is the whole app: markup, CSS and vanilla ES5 in one file, no
  build step. Three tabs: Pressed, Loose leaf, Guide.
- The tables are the data. On phones (≤720px) each `table[data-cards]` is
  rebuilt as cards by script, so edit the table, never the cards.
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
- One set of tabs is drawn twice: a bottom bar on phones, a side rail from
  820px up. The media query alone decides which shows.

## Verify before committing

Serve the repo root (`python3 -m http.server`) and check with Playwright
(Chromium is preinstalled) at a desktop and a phone viewport, in both colour
schemes, watching for page errors. This sandbox's fallback Chinese font lacks
vertical metrics, so the vertical type labels overlap in screenshots here;
that is the sandbox, not the page.
