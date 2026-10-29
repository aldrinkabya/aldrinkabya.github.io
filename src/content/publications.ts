import type { Publication } from "./types";

// Author lists and titles follow the published versions.

export const publications: Publication[] = [
  {
    id: "insci-2026",
    title: "Training-Free Layer Selection for Partial Fine-Tuning of Language Models",
    authors: [
      { name: "Aldrin Kabya Biswas", me: true },
      { name: "Md Fahim" },
      { name: "Md Tahmid Hasan Fuad" },
      { name: "Akm Moshiur Rahman Mazumder" },
      { name: "Amin Ahsan Ali" },
      { name: "AKM Mahbubur Rahman" },
    ],
    venue: "Information Sciences",
    venueShort: "Information Sciences",
    highlight: "Q1",
    year: 2026,
    status: "published",
    doi: "10.1016/j.ins.2026.123204",
    thumbnail: "/images/papers/layer-selection-insci.webp",
    thumbnailAlt:
      "Heatmap of inter-layer cosine similarity for GPT-2 on the E2E NLG generation task, from the paper's Figure 3.",
    bibtex: `@article{biswas2026trainingfree,
  title     = {Training-Free Layer Selection for Partial Fine-Tuning of Language Models},
  author    = {Biswas, Aldrin Kabya and Fahim, Md and Fuad, Md Tahmid Hasan and Mazumder, Akm Moshiur Rahman and Ali, Amin Ahsan and Rahman, AKM Mahbubur},
  journal   = {Information Sciences},
  volume    = {740},
  pages     = {123204},
  year      = {2026},
  publisher = {Elsevier},
  doi       = {10.1016/j.ins.2026.123204}
}`,
  },
  {
    id: "prism-lrec-2026",
    title:
      "PRiSM: Partial Ranking via Inter-layer Semantic Measurement for Efficient Fine-tuning of Language Models",
    authors: [
      { name: "Aldrin Kabya Biswas", me: true },
      { name: "Md Fahim" },
      { name: "Md. Ashraful Amin" },
      { name: "Amin Ahsan Ali" },
      { name: "AKM Mahbubur Rahman" },
    ],
    venue: "Proceedings of the Fifteenth Language Resources and Evaluation Conference (LREC 2026)",
    venueShort: "LREC 2026",
    year: 2026,
    status: "published",
    doi: "10.63317/3eyz8rr5qun6",
    thumbnail: "/images/papers/prism-lrec.webp",
    thumbnailAlt:
      "PRiSM overview: a selection stage scores each layer of a frozen model, then a fine-tuning stage trains only the selected layers.",
    bibtex: `@inproceedings{biswas2026prism,
  title     = {{PRiSM}: Partial Ranking via Inter-layer Semantic Measurement for Efficient Fine-tuning of Language Models},
  author    = {Biswas, Aldrin Kabya and Fahim, Md and Amin, Md. Ashraful and Ali, Amin Ahsan and Rahman, AKM Mahbubur},
  booktitle = {Proceedings of the Fifteenth Language Resources and Evaluation Conference (LREC 2026)},
  pages     = {10313--10323},
  year      = {2026},
  address   = {Palma de Mallorca, Spain},
  publisher = {ELRA Language Resources Association},
  doi       = {10.63317/3eyz8rr5qun6}
}`,
  },
  {
    id: "bias-steering-quant",
    title:
      "Disentangling Debiasing from Abstention in Bias-Steering Transfer to Quantized Language Models",
    authors: [
      { name: "Aldrin Kabya Biswas", me: true },
      { name: "Md. Zakir Hossan" },
      { name: "Md. Ashraful Amin" },
      { name: "AKM Mahbubur Rahman" },
    ],
    venue: "Under review",
    venueShort: "Under review",
    year: 2026,
    status: "under-review",
    thumbnail: "/images/papers/bias-steering-quant.webp",
    thumbnailAlt:
      "Overview of the study: a steering vector is extracted on the FP16 model, the model is quantized to 8 down to 2 bits, the vector is added at one layer, and answers are evaluated on BBQ.",
    pdf: "/papers/Disentangling_Debiasing_from_Abstention_in_Bias_Steering_Transfer_to_Quantized_Language_Models.pdf",
  },
  {
    id: "mllm-lulc",
    title:
      "MLLM-Guided Vision-Language Alignment for Land Use Land Cover Segmentation in Remote Sensing",
    authors: [
      { name: "Armun Alam" },
      { name: "Farhan Mahmud" },
      { name: "Aldrin Kabya Biswas", me: true },
      { name: "AKM Mahbubur Rahman" },
    ],
    venue: "Under review",
    venueShort: "Under review",
    year: 2026,
    status: "under-review",
    // Drawn for the site, not taken from the paper, which has no public copy.
    thumbnail: "/images/papers/mllm-lulc.webp",
    thumbnailAlt:
      "Method sketch: a multimodal LLM draws class boxes on a satellite image, image patches take the class of their box, and CLIP image and text encoders are trained to align patches with class descriptions.",
  },
];

export const doiUrl = (doi: string) => `https://doi.org/${doi}`;
