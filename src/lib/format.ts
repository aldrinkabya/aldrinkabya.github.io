import type { YearMonth } from "@/content/types";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-02" -> "Feb 2026", "2025" -> "2025". */
export function formatYearMonth(date: YearMonth): string {
  const [year, month] = date.split("-");
  return month ? `${months[Number(month) - 1]} ${year}` : year;
}

/** Machine-readable value for <time dateTime>. */
export function isoYearMonth(date: YearMonth): string {
  const [year, month] = date.split("-");
  return month ? `${year}-${month.padStart(2, "0")}` : year;
}

/** Build date, e.g. "October 2026". Fixed at build time in a static export. */
export function buildDate(): string {
  return new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}
