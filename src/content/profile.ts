import type { Profile } from "./types";

export const supervisors = {
  ali: {
    name: "Amin Ahsan Ali",
    href: "https://scholar.google.com/citations?user=OqlqQTwAAAAJ",
  },
  rahman: {
    name: "AKM Mahbubur Rahman",
    href: "https://scholar.google.com/citations?user=qc0_e18AAAAJ",
  },
};

export const profile: Profile = {
  name: "Aldrin Kabya Biswas",
  displayName: "Aldrin Kabya",
  tagline: "ML researcher working on fair and efficient language models",
  description:
    "ML researcher at CCDS, IUB, working on bias steering in quantized LLMs, parameter-efficient fine-tuning and vision-language alignment.",
  bio: [
    [
      "I am a Research Assistant at the ",
      { text: "Center for Computational & Data Sciences (CCDS)", href: "https://ccds.ai" },
      ", Independent University, Bangladesh (IUB), where I work with Prof. ",
      { text: supervisors.ali.name, href: supervisors.ali.href },
      " and Prof. ",
      { text: supervisors.rahman.name, href: supervisors.rahman.href },
      ".",
    ],
    [
      "I work on making language models fairer and more efficient. I am interested in understanding how these models behave internally and how to make them reliable and fair in real-world use. I have also worked on vision-language models for remote sensing.",
    ],
    [
      "I graduated from Independent University, Bangladesh in 2025 with a B.Sc. in Computer Science & Engineering.",
    ],
  ],
  email: "aldrin.kabya04@gmail.com",
  links: [
    { kind: "email", label: "Email", href: "mailto:aldrin.kabya04@gmail.com" },
    { kind: "cv", label: "CV", href: "/cv/Aldrin_Kabya_Biswas_CV.pdf" },
    {
      kind: "scholar",
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=LeY2KOgAAAAJ",
    },
    { kind: "github", label: "GitHub", href: "https://github.com/aldrinkabya" },
  ],
  photo: "/images/profile.webp",
  monogram: "AKB",
  location: "Dhaka, Bangladesh",
  jobTitle: "Research Assistant",
  affiliation: {
    name: "Center for Computational & Data Sciences, Independent University, Bangladesh",
    href: "https://ccds.ai",
  },
  keywords: [
    "parameter-efficient fine-tuning",
    "layer selection",
    "activation steering",
    "social bias in LLMs",
    "quantization",
    "vision-language alignment",
  ],
};
