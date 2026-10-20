// Site-wide settings that are not personal content.

export const siteUrl = "https://aldrinkabya.github.io";

export const sections = [
  { id: "about", label: "About" },
  { id: "news", label: "News" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "talks", label: "Talks" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
