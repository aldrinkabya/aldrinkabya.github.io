import { talks } from "@/content/talks";
import type { Talk } from "@/content/types";
import { Section } from "./Section";

const kindLabel: Record<Talk["kind"], string> = {
  poster: "Poster",
  talk: "Talk",
  school: "School",
  workshop: "Workshop",
};

export function Talks() {
  return (
    <Section id="talks" title="Talks & Schools">
      <ul className="divide-y divide-border">
        {talks.map((t) => (
          <li key={t.title} className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 py-2.5 sm:grid-cols-[7.5rem_1fr_auto]">
            <span className="col-span-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent sm:col-span-1">
              {kindLabel[t.kind]}
            </span>
            <span className="leading-relaxed">{t.title}</span>
            <span className="font-mono text-[0.8125rem] tabular-nums text-subtle">{t.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
