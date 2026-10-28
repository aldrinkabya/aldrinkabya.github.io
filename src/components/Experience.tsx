import { experience } from "@/content/experience";
import { formatYearMonth, isoYearMonth } from "@/lib/format";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative ml-1.5 border-l border-border">
        {experience.map((job) => (
          <li key={job.role + job.start} className="relative pb-8 pl-6 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute -left-[5px] top-2 size-[9px] rounded-full ring-4 ring-bg ${
                job.end ? "bg-border" : "bg-accent"
              }`}
            />
            <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-serif text-xl font-medium tracking-tight">{job.role}</h3>
              <p className="font-mono text-[0.8125rem] tabular-nums text-subtle">
                <time dateTime={isoYearMonth(job.start)}>{formatYearMonth(job.start)}</time>
                {" – "}
                {job.end ? <time dateTime={isoYearMonth(job.end)}>{formatYearMonth(job.end)}</time> : "Present"}
              </p>
            </div>
            <p className="mt-0.5 text-[0.9375rem] text-muted">
              {job.orgHref ? (
                <a href={job.orgHref} target="_blank" rel="noopener noreferrer" className="link">
                  {job.org}
                </a>
              ) : (
                job.org
              )}
              <span className="text-subtle"> · {job.place}</span>
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
