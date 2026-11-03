import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";

// The link-preview card, rendered once at build time to out/og.png.
// A route handler rather than opengraph-image.tsx: the export of that file
// has no extension, and GitHub Pages would serve it with the wrong type.
// Linked from the metadata in layout.tsx.
export const dynamic = "force-static";

/** A TTF of a Google font (optionally subset to `text`), or null when offline. */
async function googleFont(family: string, weight: number, text?: string) {
  try {
    const subset = text ? `&text=${encodeURIComponent(text)}` : "";
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}${subset}`)).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export async function GET() {
  // 504x630 crop of the original photo, beside this file. Not under public/,
  // so it is read here and never served on its own.
  const photo = await readFile(join(process.cwd(), "src/app/og.png/photo.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  const [serif, sans] = await Promise.all([googleFont("Newsreader", 500, profile.name), googleFont("Geist", 400)]);
  const fonts = [
    serif && { name: "Newsreader", data: serif, weight: 500 as const },
    sans && { name: "Geist", data: sans, weight: 400 as const },
  ].filter((f) => f !== null);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#faf8f5" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by Satori, not the browser */}
        <img src={photoSrc} width={504} height={630} alt="" />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 64px",
            fontFamily: "Geist",
            color: "#1c1b19",
            borderTop: "14px solid #1b5c8a",
          }}
        >
          <div style={{ display: "flex", fontSize: 24, color: "#716c64" }}>{new URL(siteUrl).host}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Newsreader", fontSize: 76, lineHeight: 1.05, letterSpacing: -1.5 }}>
              {profile.name}
            </div>
            <div style={{ marginTop: 22, fontSize: 28, lineHeight: 1.35, color: "#5f5a52" }}>{profile.tagline}</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts },
  );
}
