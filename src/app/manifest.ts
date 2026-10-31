import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";

export const dynamic = "force-static";

// Icons rendered from icon.svg, for "Add to home screen" on Android.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.name,
    short_name: "Aldrin",
    description: profile.description,
    start_url: "/",
    display: "browser",
    background_color: "#faf8f5",
    theme_color: "#faf8f5",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
