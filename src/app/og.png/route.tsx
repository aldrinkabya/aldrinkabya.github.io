import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { research } from "@/content/research";
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
  const topics = research.map((r) => r.title).join(" · ");

  const [serif, sans, sansBold] = await Promise.all([
    googleFont("Newsreader", 500, profile.name + profile.monogram),
    googleFont("Geist", 400),
    googleFont("Geist", 600),
  ]);
  const fonts = [
    serif && { name: "Newsreader", data: serif, weight: 500 as const },
    sans && { name: "Geist", data: sans, weight: 400 as const },
    sansBold && { name: "Geist", data: sansBold, weight: 600 as const },
  ].filter((f) => f !== null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf8f5",
          padding: "64px 80px",
          fontFamily: "Geist",
          color: "#1c1b19",
          borderTop: "14px solid #1b5c8a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              width: 92,
              height: 92,
              borderRadius: 22,
              background: "#e8f0f6",
              border: "2px solid #d5e3ee",
              color: "#1b5c8a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Newsreader",
              fontSize: 38,
            }}
          >
            {profile.monogram}
          </div>
          <div style={{ fontSize: 26, color: "#716c64" }}>{new URL(siteUrl).host}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "Newsreader", fontSize: 96, lineHeight: 1.05, letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div style={{ marginTop: 16, fontSize: 36, color: "#5f5a52" }}>{profile.tagline}</div>
          <div style={{ marginTop: 22, fontSize: 26, fontWeight: 600, color: "#1b5c8a" }}>{topics}</div>
        </div>

        {profile.status && (
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "#e3f3ea",
                color: "#17663f",
                borderRadius: 999,
                padding: "12px 26px",
                fontSize: 26,
                fontWeight: 600,
              }}
            >
              <div style={{ width: 13, height: 13, borderRadius: 999, background: "#22a565" }} />
              {profile.status}
            </div>
          </div>
        )}
      </div>
    ),
    { width: 1200, height: 630, fonts },
  );
}
