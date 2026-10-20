"use client";

import { useId, useState } from "react";
import { CopyButton } from "./CopyButton";
import { ArrowUpRightIcon, QuoteIcon } from "./Icons";

export interface PaperLink {
  label: string;
  href: string;
}

const button =
  "inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2.5 py-1 text-[0.8125rem] font-medium text-fg transition-colors hover:border-accent hover:text-accent";

/** The link buttons under a paper, with an inline BibTeX panel. */
export function PaperLinks({ links, bibtex }: { links: PaperLink[]; bibtex?: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="mt-3">
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={button}>
            {l.label}
            <ArrowUpRightIcon className="size-3.5 opacity-60" />
          </a>
        ))}
        {bibtex && (
          <button
            type="button"
            className={`${button} ${open ? "border-accent text-accent" : ""}`}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((o) => !o)}
          >
            <QuoteIcon className="size-3.5 opacity-60" />
            BibTeX
          </button>
        )}
      </div>

      {bibtex && (
        <div
          id={panelId}
          inert={!open}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="relative mt-3 rounded-lg border border-border bg-surface-2">
              <div className="absolute right-2 top-2">
                <CopyButton text={bibtex} />
              </div>
              <pre className="overflow-x-auto p-3 pr-20 font-mono text-xs leading-relaxed text-fg">
                <code>{bibtex}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
