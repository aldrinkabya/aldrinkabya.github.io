import { presentations } from "@/content/presentations";
import { Section } from "./Section";

export function Presentations() {
  return (
    <Section id="presentations" title="Paper Presentations">
      <ul className="grid gap-4 sm:grid-cols-3">
        {presentations.map((p) => (
          <li key={p.slides}>
            <a
              href={p.slides}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:shadow-card motion-safe:hover:-translate-y-0.5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- static export: pre-sized WebP */}
              <img
                src={p.thumbnail}
                alt=""
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full border-b border-border bg-white object-cover"
              />
              <p className="p-4 font-serif text-[1.0625rem] font-medium leading-snug tracking-tight group-hover:text-accent">
                {p.title}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
