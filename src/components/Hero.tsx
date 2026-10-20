import { profile } from "@/content/profile";
import { linkIcons } from "./Icons";
import { RichText, isExternal } from "./RichText";

function Portrait() {
  // 224px is the most the 720px column allows with the name still on one line.
  const box = "size-36 shrink-0 rounded-2xl sm:size-48 md:size-56";
  if (profile.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- static export: images are pre-sized by hand
      <img
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        width={720}
        height={720}
        fetchPriority="high"
        className={`${box} border border-border object-cover shadow-card`}
      />
    );
  }
  // The monogram stands in for a photo on wider screens only: on a phone it
  // would push the name and bio below the fold.
  return (
    <div
      aria-hidden="true"
      className={`${box} hidden items-center justify-center border border-border bg-accent-soft font-serif text-4xl font-medium tracking-tight text-accent shadow-card sm:flex sm:text-5xl`}
    >
      {profile.monogram}
    </div>
  );
}

export function Hero() {
  return (
    <section id="about" aria-label="About" className="pb-10 pt-10 sm:pb-14 sm:pt-20">
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start">
        <div className="min-w-0 flex-1">
          {profile.status && (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ok/25 bg-ok-soft px-3 py-1 text-[0.8125rem] font-medium text-ok">
              <span className="size-2 rounded-full bg-ok-dot ring-4 ring-ok-dot/20" aria-hidden="true" />
              {profile.status}
            </p>
          )}

          <h1 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight sm:text-[3.25rem]">
            {profile.name}
          </h1>
          <p className="mt-3 text-balance text-lg text-muted sm:text-xl">{profile.tagline}</p>

          <div className="mt-6 space-y-4 text-pretty text-[1.0625rem] leading-relaxed">
            {profile.bio.map((para, i) => (
              <p key={i}>
                <RichText value={para} />
              </p>
            ))}
          </div>

          <ul className="mt-7 flex flex-wrap gap-2.5" aria-label="Links">
            {profile.links.map((link) => {
              const Icon = linkIcons[link.kind];
              const external = isExternal(link.href);
              return (
                <li key={link.kind}>
                  <a
                    href={link.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-medium text-fg shadow-sm transition-all hover:-translate-y-px hover:border-accent hover:text-accent motion-reduce:hover:translate-y-0"
                  >
                    <Icon className="size-4" />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-sm text-subtle">
            <span className="sr-only">Email: </span>
            {profile.email}
          </p>
        </div>

        <Portrait />
      </div>
    </section>
  );
}
