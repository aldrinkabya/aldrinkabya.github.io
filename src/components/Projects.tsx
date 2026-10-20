import { projects } from "@/content/projects";
import { ArrowUpRightIcon } from "./Icons";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-4">
        {projects.map((p) => (
          <li key={p.title} className="overflow-hidden rounded-2xl border border-border bg-surface">
            {p.image && (
              // eslint-disable-next-line @next/next/no-img-element -- static export: pre-sized WebP
              <img
                src={p.image}
                alt={p.imageAlt ?? ""}
                width={1200}
                height={675}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full border-b border-border object-cover"
              />
            )}
            <div className="p-5 sm:p-6">
              <h3 className="font-serif text-xl font-medium tracking-tight">
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
                    {p.title}
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{p.summary}</p>
              {p.bullets && (
                <ul className="mt-3 space-y-1.5">
                  {p.bullets.map((b) => (
                    <li key={b} className="relative pl-4 leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:size-1 before:rounded-full before:bg-subtle">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Built with">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
