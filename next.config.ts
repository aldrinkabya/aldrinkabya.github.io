import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages: no server, no API routes.
  output: "export",
  // next/image optimisation needs a server; images are resized by hand.
  images: { unoptimized: true },
  // GitHub Pages serves /foo/ as /foo/index.html.
  trailingSlash: true,
};

export default nextConfig;
