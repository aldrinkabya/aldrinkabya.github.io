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
  tagline: "ML researcher working on efficient and fair language models",
  description:
    "ML researcher at CCDS, IUB, working on parameter-efficient fine-tuning, bias steering in quantized LLMs and vision-language alignment.",
  bio: [
    [
      "I am a Research Assistant at the ",
      { text: "Center for Computational & Data Sciences (CCDS)", href: "https://ccds.ai" },
      ", Independent University, Bangladesh (IUB), where I am supervised by ",
      { text: supervisors.ali.name, href: supervisors.ali.href },
      " and ",
      { text: supervisors.rahman.name, href: supervisors.rahman.href },
      ".",
    ],
    [
      "My research asks how to adapt language models cheaply and use them fairly: which layers are worth fine-tuning, chosen before training starts, and whether debiasing steering vectors still work once a model is quantized. I also work on vision-language alignment for land-cover segmentation in remote sensing.",
    ],
    [
      "I graduated from IUB in 2025 with a B.Sc. in Computer Science & Engineering (CGPA 3.88/4.00, top 1% in CSE).",
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
