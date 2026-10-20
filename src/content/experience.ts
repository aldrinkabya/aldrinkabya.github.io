import type { Experience } from "./types";

// Bullets are the CV's, word for word. Change them in both places.

const ccds = {
  org: "Center for Computational & Data Sciences (CCDS), IUB",
  orgHref: "https://ccds.ai",
  place: "Dhaka, Bangladesh",
};

export const experience: Experience[] = [
  {
    role: "Research Assistant",
    ...ccds,
    start: "2025-09",
    bullets: [
      "Generalized a training-free layer selection method for partial fine-tuning to generation tasks; ranking layers by representation similarity in one forward pass, it outperformed existing selection methods on most benchmarks while updating a quarter of the parameters (Information Sciences, 2026).",
      "Investigated whether debiasing steering vectors from full-precision LLMs transfer to quantized models, showing that much of the bias reduction stems from increased abstention rather than less stereotyped answers.",
      "Built a full-stack WebGIS platform for nationwide land-use and land-cover maps of Bangladesh, with pixel-level change detection between 2019 and 2023 and area statistics for user-defined regions.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    ...ccds,
    start: "2024-01",
    end: "2025-08",
    bullets: [
      "Developed and evaluated a layer selection approach that scores layers before training by the cosine similarity of their [CLS] representations, approaching full fine-tuning accuracy on BERT, RoBERTa and DeBERTa (LREC 2026).",
    ],
  },
];
