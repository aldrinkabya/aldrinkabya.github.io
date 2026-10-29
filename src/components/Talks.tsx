import { presentations } from "@/content/presentations";
import { talks } from "@/content/talks";
import type { Talk } from "@/content/types";
import { formatDate } from "@/lib/format";
import { Section } from "./Section";

export const kindLabel: Record<Talk["kind"], string> = {
  poster: "Poster",
  talk: "Talk",
  school: "School",
  workshop: "Workshop",
};

export function TalkRows({ items }: { items: Talk[] }) {
  return (
    <ul className="divide-y divide-border">
      {items.map((t) => (
        <li key={t.title} className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 py-2.5 sm:grid-cols-[7.5rem_1fr_auto]">
          <span className="col-span-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent sm:col-span-1">
            {kindLabel[t.kind]}
          </span>
          <span className="leading-relaxed">{t.title}</span>
          <span className="font-mono text-[0.8125rem] tabular-nums text-subtle">{t.year}</span>
        </li>
      ))}
    </ul>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-subtle">{children}</h3>;
}

/** My own talks and posters, then papers by others that I presented at lab meetings. */
export function Talks() {
  const own = talks.filter((t) => t.kind === "talk" || t.kind === "poster");
  return (
    <Section id="talks" title="Talks & Presentations">
      <TalkRows items={own} />
      <div className="mt-8">
        <GroupLabel>Paper presentations</GroupLabel>
        <ul className="grid gap-4">
          {presentations.map((p) => (
            <li key={p.slides}>
              <a
                href={p.slides}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[8rem_1fr] items-center gap-4 rounded-2xl border border-border bg-surface p-3 transition-all duration-200 hover:shadow-card motion-safe:hover:-translate-y-0.5 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:p-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- static export: pre-sized WebP */}
                <img
                  src={p.thumbnail}
                  alt=""
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full rounded-lg border border-border bg-white object-cover"
                />
                <div className="min-w-0">
                  <time dateTime={p.date} className="font-mono text-[0.8125rem] tabular-nums text-subtle">
                    {formatDate(p.date)}
                  </time>
                  <p className="mt-1 font-serif text-[1rem] font-medium leading-snug tracking-tight group-hover:text-accent sm:text-[1.1875rem]">
                    {p.title}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
