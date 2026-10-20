import type { Education } from "./types";
import { supervisors } from "./profile";

export const education: Education = {
  degree: "B.Sc. in Computer Science & Engineering (CSE)",
  institution: "Independent University, Bangladesh (IUB)",
  institutionHref: "https://iub.ac.bd",
  place: "Dhaka, Bangladesh",
  start: 2020,
  end: 2025,
  cgpa: "3.88/4.00",
  cgpaNote: "top 1% in CSE; Magna Cum Laude",
  thesis: "Training-Free Layer Selection for Parameter-Efficient Fine-Tuning of Language Models",
  supervisors: [supervisors.ali, supervisors.rahman],
  coursework: [
    "Machine Learning",
    "Artificial Intelligence",
    "Linear Algebra",
    "Numerical Methods",
    "Ordinary Differential Equations",
  ],
};
