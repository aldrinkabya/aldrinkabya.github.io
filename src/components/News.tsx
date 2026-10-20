import { news, visibleNews } from "@/content/news";
import type { NewsItem } from "@/content/types";
import { formatYearMonth, isoYearMonth } from "@/lib/format";
import { ChevronRightIcon } from "./Icons";
import { RichText } from "./RichText";
import { Section } from "./Section";

function Item({ item }: { item: NewsItem }) {
  return (
    <li className="grid grid-cols-[5.25rem_1fr] gap-3 py-2 sm:grid-cols-[6rem_1fr]">
      <time dateTime={isoYearMonth(item.date)} className="pt-px font-mono text-[0.8125rem] tabular-nums text-subtle">
        {formatYearMonth(item.date)}
      </time>
      <p className="leading-relaxed">
        <RichText value={item.text} />
      </p>
    </li>
  );
}

export function News() {
  const recent = news.slice(0, visibleNews);
  const older = news.slice(visibleNews);

  return (
    <Section id="news" title="News">
      <ul>
        {recent.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </ul>
      {older.length > 0 && (
        <details className="disclosure group mt-1">
          <summary className="inline-flex items-center gap-1 rounded-md py-1 text-sm font-medium text-accent">
            <ChevronRightIcon className="disclosure-chevron size-4 transition-transform" />
            <span className="group-open:hidden">Show {older.length} older</span>
            <span className="hidden group-open:inline">Hide older</span>
          </summary>
          <ul>
            {older.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </ul>
        </details>
      )}
    </Section>
  );
}
