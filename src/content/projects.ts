import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Land-use and land-cover WebGIS for Bangladesh",
    summary:
      "A full-stack web platform for exploring nationwide land-use and land-cover maps of Bangladesh. I built the tile server, map interface and analysis tools; the maps themselves come from separate segmentation models.",
    bullets: [
      "2019 and 2023 land-cover and brickfield maps served as Cloud-Optimized GeoTIFF tiles.",
      "Pixel-level change detection between years, with swipe comparison.",
      "Area statistics for any region the user draws.",
    ],
    tags: ["FastAPI", "TiTiler", "GDAL", "Rasterio", "Next.js", "MapLibre GL JS"],
  },
];
