import { profile } from "@/content/profile";
import { buildDate } from "@/lib/format";
import { linkIcons } from "./Icons";
import { isExternal } from "./RichText";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-serif text-lg font-medium">{profile.name}</p>
          <a href={`mailto:${profile.email}`} className="link text-sm">
            {profile.email}
          </a>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <ul className="flex gap-1" aria-label="Links">
            {profile.links.map((link) => {
              const Icon = linkIcons[link.kind];
              return (
                <li key={link.kind}>
                  <a
                    href={link.href}
                    {...(isExternal(link.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-accent"
                  >
                    <Icon className="size-[18px]" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text-xs text-subtle">Last updated {buildDate()}</p>
        </div>
      </div>
    </footer>
  );
}
