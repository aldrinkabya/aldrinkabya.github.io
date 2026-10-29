import { talks } from "@/content/talks";
import { Section } from "./Section";
import { TalkRows } from "./Talks";

export function Schools() {
  return (
    <Section id="schools" title="Schools & Workshops">
      <TalkRows items={talks.filter((t) => t.kind === "school" || t.kind === "workshop")} />
    </Section>
  );
}
