import type { SectionId } from "@/lib/site";

export function Section({
  id,
  title,
  children,
  aside,
}: {
  id: SectionId;
  title: string;
  children: React.ReactNode;
  /** Small text on the right of the heading. */
  aside?: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-8 sm:py-11">
      <div data-reveal="">
        <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-border pb-3">
          <h2 id={`${id}-heading`} className="font-serif text-[1.75rem] font-medium leading-tight tracking-tight">
            {title}
          </h2>
          {aside && <div className="text-sm text-subtle">{aside}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}
