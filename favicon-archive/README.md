# Favicon and preview-card archive

Earlier favicon sets and link-preview cards, kept so one can be restored. Nothing here is served.

The favicon in use is the user's face (since 2026-11-03), and the preview card is the photo alone, `public/og.jpg` (800x800), linked from `layout.tsx`. The photo favicons on 2026-11-03 first cut off the chin and were redone the same day; that first crop is not kept.

## galaxy/ (favicon in use until 2026-11-03)

Purple and orange spiral galaxy on a black rounded square. To restore it:

- copy `favicon.ico`, `apple-icon.png` and `icon1.png` into `src/app/`
- copy `icon-192.png` and `icon-512.png` into `public/icons/`

## halftone/ (favicon in use until 2026-10-31)

White radial halftone on a black rounded square. To restore it:

- copy `icon.svg`, `favicon.ico`, `apple-icon.png` and `icon1.png` into `src/app/`
- copy `icon-192.png` and `icon-512.png` into `public/icons/`

## Restoring a generated card

Both cards below were drawn at build time by a route at `src/app/og.png/route.tsx`, saved here as `route.tsx.txt` so TypeScript and ESLint skip it. `og.png` in each folder is the card as it was served. To restore one:

- copy its `route.tsx.txt` to `src/app/og.png/route.tsx` (and its `photo.jpg`, if it has one, into the same folder)
- in `src/app/layout.tsx`, set `ogImage` back to `{ url: "/og.png", width: 1200, height: 630, alt: `${profile.name}: ${profile.tagline}` }` and the twitter `card` to `"summary_large_image"`
- delete `public/og.jpg`

## og-photo-name-card/ (preview card in use on 2026-11-03)

The photo on the left, the site host, name and tagline on the right.

## og-text-card/ (preview card in use until 2026-11-03)

Name, tagline and research topics on the site's background, with no photo.
