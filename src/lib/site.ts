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
  { id: "schools", label: "Schools" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

/** The sections linked from the nav. News sits right under the hero, so it needs no link; Schools & Workshops is left out to keep the nav short. */
export const navSections = sections.filter((s) => s.id !== "news" && s.id !== "schools");
