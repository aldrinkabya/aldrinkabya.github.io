import type { RichText as RichTextValue } from "@/content/types";

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

/** Renders text runs from the content files, with links where given. */
export function RichText({ value }: { value: RichTextValue }) {
  return (
    <>
      {value.map((seg, i) =>
        typeof seg === "string" ? (
          seg
        ) : (
          <a
            key={i}
            href={seg.href}
            className="link"
            {...(isExternal(seg.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {seg.text}
          </a>
        ),
      )}
    </>
  );
}
