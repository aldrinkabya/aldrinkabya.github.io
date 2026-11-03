# Favicon and preview-card archive

Earlier favicon sets and link-preview cards, kept so one can be restored. Nothing here is served.

## galaxy/ (favicon in use until 2026-11-03)

Purple and orange spiral galaxy on a black rounded square. To restore it:

- copy `favicon.ico`, `apple-icon.png` and `icon1.png` into `src/app/`
- copy `icon-192.png` and `icon-512.png` into `public/icons/`

## halftone/ (favicon in use until 2026-10-31)

White radial halftone on a black rounded square. To restore it:

- copy `icon.svg`, `favicon.ico`, `apple-icon.png` and `icon1.png` into `src/app/`
- copy `icon-192.png` and `icon-512.png` into `public/icons/`

## og-text-card/ (preview card in use until 2026-11-03)

Name, tagline and research topics on the site's background, with no photo. `og.png` is the card as it was served. To restore it:

- copy `route.tsx.txt` over `src/app/og.png/route.tsx`
- delete `src/app/og.png/photo.jpg`, which only the photo card reads
