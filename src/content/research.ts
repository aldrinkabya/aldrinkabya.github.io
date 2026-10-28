import type { ResearchTheme } from "./types";

export const research: ResearchTheme[] = [
  {
    title: "Bias steering in LLMs",
    summary:
      "Steering vectors can reduce social bias, but they are extracted from full-precision models while deployed models are quantized. I test whether debiasing vectors transfer to 8- to 2-bit models, and show that much of the measured bias reduction comes from the model abstaining more, not from less stereotyped answers.",
    paperIds: ["bias-steering-quant"],
  },
  {
    title: "Efficient fine-tuning",
    summary:
      "Which layers of a pre-trained language model are worth updating? We score every layer before training, from how similar its representations are to the other layers' in a single forward pass, then fine-tune only the selected ones. This approaches full fine-tuning accuracy while training a quarter of the parameters, for both classification and generation.",
    paperIds: ["insci-2026", "prism-lrec-2026"],
  },
  {
    title: "Vision-language alignment",
    summary:
      "Pixel-level labels for satellite imagery are scarce. A multimodal LLM annotates regions of unlabelled images, and those annotations align CLIP image patches with land-cover class descriptions, giving pretrained encoders that improve downstream land-use and land-cover segmentation.",
    paperIds: ["mllm-lulc"],
  },
];
