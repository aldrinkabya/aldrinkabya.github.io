"use client";

import { useEffect, useRef, useState } from "react";
import { navSections, sections, type SectionId } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";
import { CloseIcon, FileIcon, MenuIcon } from "./Icons";

/** Highlights the section the reader is in: the last one whose top has passed the upper third. */
function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>("about");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.33;
      let current: SectionId = sections[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id as SectionId;
      }
      // At the very bottom, the last section wins even if it is short.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return active;
}

export function Nav({ name, cvHref }: { name: string; cvHref: string }) {
  const active = useActiveSection();
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => menuRef.current?.removeAttribute("open");

  const linkClass = (id: SectionId) =>
    `relative rounded-md px-2.5 py-1.5 text-sm transition-colors ${
      active === id ? "text-fg" : "text-muted hover:text-fg"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/95">
      <nav aria-label="Sections" className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4 sm:px-6">
        <a href="#about" className="mr-auto font-serif text-lg font-medium tracking-tight text-fg">
          {name}
        </a>

        <ul className="hidden items-center lg:flex">
          {navSections.slice(1).map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={linkClass(s.id)} aria-current={active === s.id ? "true" : undefined}>
                {s.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-2.5 -bottom-[11px] h-0.5 rounded-full bg-accent transition-opacity duration-200 ${
                    active === s.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={cvHref}
          className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
        >
          <FileIcon className="size-4" />
          CV
        </a>
        <ThemeToggle />

        {/* Mobile menu: a <details> element, so it also opens without JS. */}
        <details ref={menuRef} className="group relative lg:hidden">
          <summary className="inline-flex size-9 cursor-pointer list-none items-center justify-center rounded-full text-muted hover:bg-surface-2 hover:text-fg [&::-webkit-details-marker]:hidden">
            <MenuIcon className="size-5 group-open:hidden" />
            <CloseIcon className="hidden size-5 group-open:block" />
            <span className="sr-only">Sections menu</span>
          </summary>
          <ul className="absolute right-0 top-11 w-52 rounded-xl border border-border bg-surface p-1.5 shadow-card">
            {navSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={closeMenu}
                  aria-current={active === s.id ? "true" : undefined}
                  className={`block rounded-lg px-3 py-2 text-sm ${
                    active === s.id ? "bg-accent-soft text-accent" : "text-fg hover:bg-surface-2"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
