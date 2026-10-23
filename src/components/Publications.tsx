import { doiUrl, publications } from "@/content/publications";
import type { Author, Publication } from "@/content/types";
import { PaperLinks, type PaperLink } from "./PaperLinks";
import { Section } from "./Section";

function Authors({ authors }: { authors: Author[] }) {
  return (
    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">
      {authors.map((a, i) => (
        <span key={a.name}>
          {a.me ? <strong className="font-semibold text-fg">{a.name}</strong> : a.name}
          {i < authors.length - 2 ? ", " : i === authors.length - 2 ? ", and " : ""}
        </span>
      ))}
    </p>
  );
}

function linksFor(p: Publication): PaperLink[] {
  const links: PaperLink[] = [];
  if (p.pdf) links.push({ label: "PDF", href: p.pdf });
  if (p.doi) links.push({ label: p.pdf ? "DOI" : "Paper", href: doiUrl(p.doi) });
  if (p.code) links.push({ label: "Code", href: p.code });
  if (p.poster) links.push({ label: "Poster", href: p.poster });
  return links;
}

function PublishedCard({ p }: { p: Publication }) {
  return (
    <li
      id={p.id}
      className="grid scroll-mt-20 gap-4 rounded-2xl border border-border bg-surface p-4 transition-all duration-200 hover:shadow-card motion-safe:hover:-translate-y-0.5 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:p-5"
    >
      {p.thumbnail && (
        // eslint-disable-next-line @next/next/no-img-element -- static export: thumbnails are pre-sized WebP
        <img
          src={p.thumbnail}
          alt={p.thumbnailAlt ?? ""}
          width={600}
          height={400}
          loading="lazy"
          decoding="async"
          className="aspect-[3/2] w-full rounded-lg border border-border bg-white object-contain"
        />
      )}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
            {p.venueShort}
          </span>
          {p.highlight && (
            <span className="rounded-full border border-accent/30 px-2 py-0.5 text-xs font-semibold text-accent">
              {p.highlight}
            </span>
          )}
          {!p.venueShort.includes(String(p.year)) && (
            <span className="text-xs font-medium text-subtle">{p.year}</span>
          )}
        </div>
        <h4 className="mt-2.5 font-serif text-[1.1875rem] font-medium leading-snug tracking-tight">
          {p.doi ? (
            <a href={doiUrl(p.doi)} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              {p.title}
            </a>
          ) : (
            p.title
          )}
        </h4>
        <Authors authors={p.authors} />
        {p.venue !== p.venueShort && <p className="mt-1 text-sm italic text-subtle">{p.venue}</p>}
        <PaperLinks links={linksFor(p)} bibtex={p.bibtex} />
      </div>
    </li>
  );
}

function UnderReviewItem({ p }: { p: Publication }) {
  const links = linksFor(p);
  return (
    <li id={p.id} className="scroll-mt-20 border-l-2 border-border py-1 pl-4">
      <h4 className="font-medium leading-snug">{p.title}</h4>
      <Authors authors={p.authors} />
      <p className="mt-1 text-sm text-subtle">{p.venue}</p>
      {links.length > 0 && <PaperLinks links={links} />}
    </li>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-subtle">{children}</h3>;
}

export function Publications() {
  const published = publications.filter((p) => p.status === "published");
  const review = publications.filter((p) => p.status === "under-review");

  return (
    <Section id="publications" title="Publications">
      <div className="lg:-mx-6">
        <GroupLabel>Journal and conference papers</GroupLabel>
        <ul className="grid gap-4">
          {published.map((p) => (
            <PublishedCard key={p.id} p={p} />
          ))}
        </ul>
      </div>

      {review.length > 0 && (
        <div className="mt-10">
          <GroupLabel>Under review</GroupLabel>
          <ul className="grid gap-5">
            {review.map((p) => (
              <UnderReviewItem key={p.id} p={p} />
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
