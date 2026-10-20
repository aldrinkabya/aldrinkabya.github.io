# aldrinkabya.github.io

Personal academic website of Aldrin Kabya Biswas: <https://aldrinkabya.github.io>

Next.js (static export) + Tailwind CSS, deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Editing content

All text lives in typed files under [`src/content/`](src/content/). Components only render them.

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, tagline, status pill, bio, links, photo |
| `news.ts` | Dated one-liners, newest first |
| `research.ts` | The three research themes and their papers |
| `publications.ts` | Papers, with DOI, BibTeX and thumbnail |
| `experience.ts` | Research positions |
| `education.ts`, `honors.ts` | Degree and honours |
| `talks.ts`, `projects.ts` | Talks, schools, projects |

Images go in `public/images/` (paper thumbnails: 600×400 WebP). The CV is `public/cv/Aldrin_Kabya_Biswas_CV.pdf`.

To add a photo, save an ~800px square WebP as `public/images/profile.webp` and set `photo: "/images/profile.webp"` in `profile.ts`.

## Running locally

Node 20.9 or later.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
npm run serve    # serve out/ at http://localhost:3000
```
