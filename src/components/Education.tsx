import { education } from "@/content/education";
import { honors } from "@/content/honors";
import { Section } from "./Section";

export function Education() {
  const e = education;
  return (
    <Section id="education" title="Education & Honors">
      <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
        <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="font-serif text-xl font-medium tracking-tight">
            {e.institutionHref ? (
              <a href={e.institutionHref} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                {e.institution}
              </a>
            ) : (
              e.institution
            )}
          </h3>
          <p className="font-mono text-[0.8125rem] tabular-nums text-subtle">
            {e.start} – {e.end}
          </p>
        </div>
        <p className="mt-0.5 text-[0.9375rem] text-muted">
          {e.degree} <span className="text-subtle">· {e.place}</span>
        </p>

        <dl className="mt-4 grid gap-x-6 gap-y-2.5 text-[0.9375rem] sm:grid-cols-[7.5rem_1fr]">
          <dt className="text-subtle">CGPA</dt>
          <dd>
            <strong className="font-semibold">{e.cgpa}</strong> <span className="text-muted">({e.cgpaNote})</span>
          </dd>
          <dt className="text-subtle">Thesis</dt>
          <dd className="italic">{e.thesis}</dd>
          <dt className="text-subtle">Supervisors</dt>
          <dd>
            {e.supervisors.map((s, i) => (
              <span key={s.name}>
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link">
                    {s.name}
                  </a>
                ) : (
                  s.name
                )}
                {i < e.supervisors.length - 1 && ", "}
              </span>
            ))}
          </dd>
        </dl>
      </div>

      <h3 className="mb-3 mt-8 text-xs font-semibold uppercase tracking-[0.12em] text-subtle">Honors & awards</h3>
      <ul className="divide-y divide-border">
        {honors.map((h) => (
          <li key={h.title} className="flex flex-col gap-x-4 py-2.5 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="leading-relaxed">
              <span className="font-medium">{h.title}</span>
              <span className="text-muted">, {h.detail}</span>
            </p>
            <p className="shrink-0 font-mono text-[0.8125rem] tabular-nums text-subtle">{h.years}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
