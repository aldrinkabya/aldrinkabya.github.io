import { publications } from "@/content/publications";
import { research } from "@/content/research";
import { Section } from "./Section";

export function Research() {
  return (
    <Section id="research" title="Research">
      <ol className="grid gap-4">
        {research.map((theme, i) => {
          const papers = theme.paperIds
            .map((id) => publications.find((p) => p.id === id))
            .filter((p) => p !== undefined);
          return (
            <li
              key={theme.title}
              className="group relative grid gap-x-5 rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-card sm:grid-cols-[2.5rem_1fr] sm:p-6"
            >
              <span aria-hidden="true" className="mb-2 font-serif text-2xl leading-none text-accent sm:mb-0 sm:pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-xl font-medium tracking-tight">{theme.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{theme.summary}</p>
                {papers.length > 0 && (
                  <p className="mt-3 flex flex-wrap gap-2 text-sm">
                    {papers.map((p) => (
                      <a
                        key={p.id}
                        href={`#${p.id}`}
                        className="rounded-full bg-accent-soft px-2.5 py-0.5 font-medium text-accent transition-colors hover:underline"
                      >
                        {p.status === "published" ? p.venueShort : "Under review"}
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
