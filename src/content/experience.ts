import type { Experience } from "./types";

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
  },
  {
    role: "Undergraduate Researcher",
    ...ccds,
    start: "2024-01",
    end: "2025-08",
  },
];
