// Shapes of the content files. Components render only from these.

/** A run of text, optionally a link. Used where prose needs inline links. */
export type Segment = string | { text: string; href: string };
export type RichText = Segment[];

/** "2026-02" or "2026": month precision where it is known. */
export type YearMonth = `${number}-${number}` | `${number}`;

export type LinkKind = "email" | "cv" | "scholar" | "github" | "orcid" | "linkedin";

export interface ProfileLink {
  kind: LinkKind;
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  /** The large name at the top of the page. Titles and metadata keep `name`. */
  displayName: string;
  /** One line under the name. */
  tagline: string;
  /** Search-result and link-preview text, about 150 characters. */
  description: string;
  /** The status pill. Remove the field to hide the pill. */
  status?: string;
  bio: RichText[];
  email: string;
  links: ProfileLink[];
  /** Path under public/, a square WebP (about 720px). Without one, the hero has no picture. */
  photo?: string;
  location: string;
  /** Current role, used in structured data. */
  jobTitle: string;
  affiliation: { name: string; href?: string };
  /** Research topics, used in metadata and structured data. */
  keywords: string[];
}

export interface NewsItem {
  date: YearMonth;
  text: RichText;
}

export interface ResearchTheme {
  title: string;
  summary: string;
  paperIds: string[];
}

export interface Author {
  name: string;
  /** Marks the site owner, shown in bold. */
  me?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: Author[];
  /** Full venue name, as in the CV. */
  venue: string;
  /** Short badge text, e.g. "LREC 2026". */
  venueShort: string;
  year: number;
  status: "published" | "under-review";
  doi?: string;
  /** A direct link to the paper, when it differs from the DOI. */
  pdf?: string;
  code?: string;
  poster?: string;
  /** Path under public/, 600x400 WebP. */
  thumbnail?: string;
  thumbnailAlt?: string;
  bibtex?: string;
  /** Extra badge, e.g. "Q1". */
  highlight?: string;
}

export interface Experience {
  role: string;
  org: string;
  orgHref?: string;
  place: string;
  start: YearMonth;
  /** Absent while the role is current. */
  end?: YearMonth;
}

export interface Education {
  degree: string;
  institution: string;
  institutionHref?: string;
  place: string;
  start: number;
  end: number;
  cgpa: string;
  cgpaNote: string;
  thesis: string;
  supervisors: { name: string; href?: string }[];
}

export interface Honor {
  title: string;
  detail: string;
  years: string;
}

export interface Talk {
  title: string;
  kind: "talk" | "poster" | "school" | "workshop";
  year: number;
}

export interface Project {
  title: string;
  summary: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  href?: string;
  tags: string[];
}

/** "2026-09-14". */
export type IsoDate = `${number}-${number}-${number}`;

export interface Presentation {
  /** The paper's own title. */
  title: string;
  /** The day it was presented. */
  date: IsoDate;
  /** Where it was presented, shown beside the date. */
  event: string;
  /** Path under public/ to the slides PDF. */
  slides: string;
  /** Path under public/, the title slide as 800x450 WebP. */
  thumbnail: string;
}
