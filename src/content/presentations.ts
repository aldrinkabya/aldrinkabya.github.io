import type { Presentation } from "./types";

// Papers by others, presented at CCDS lab meetings. Newest paper first.
export const presentations: Presentation[] = [
  {
    title: "Manifold Steering Reveals the Shared Geometry of Neural Network Representation and Behavior",
    slides: "/slides/Manifold_Steering_Slides.pdf",
    thumbnail: "/images/slides/manifold-steering.webp",
  },
  {
    title: "Causal Differentiating Concepts: Interpreting LM Behavior via Causal Representation Learning",
    slides: "/slides/Causal_Differentiating_Concepts_Slides.pdf",
    thumbnail: "/images/slides/causal-differentiating-concepts.webp",
  },
  {
    title: "LeJEPA: Provable and Scalable Self-Supervised Learning Without the Heuristics",
    slides: "/slides/LeJEPA_Slides.pdf",
    thumbnail: "/images/slides/lejepa.webp",
  },
];
