import type { NewsItem } from "./types";

// Newest first. The first `visibleNews` items show; the rest fold away.
export const visibleNews = 5;

export const news: NewsItem[] = [
  {
    date: "2026-10",
    text: [
      "Submitted our paper on bias-steering transfer to quantized language models to ACIIDS 2027.",
    ],
  },
  {
    date: "2026-05",
    text: [
      "Presented ",
      { text: "PRiSM", href: "#prism-lrec-2026" },
      " as a poster at LREC 2026 (virtual).",
    ],
  },
  {
    date: "2026-02",
    text: [
      "Our paper on training-free layer selection was accepted in ",
      { text: "Information Sciences", href: "#insci-2026" },
      ".",
    ],
  },
  {
    date: "2025-09",
    text: ["Joined CCDS, Independent University, Bangladesh, as a Research Assistant."],
  },
  {
    date: "2025-08",
    text: [
      "Graduated from IUB with a B.Sc. in Computer Science & Engineering, Magna Cum Laude.",
    ],
  },
  {
    date: "2024-07",
    text: ["Attended the 1st CCDS Summer School on Random Matrix Theory."],
  },
  {
    date: "2024-03",
    text: ["Presented my undergraduate thesis research at IUB's Three-Minute Thesis (3MT) competition."],
  },
];
