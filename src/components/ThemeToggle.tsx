"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./Icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    // Cross-fade the whole page where the View Transitions API exists.
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      document.startViewTransition(() => setTheme(next));
    } else {
      setTheme(next);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
    >
      {/* Both icons render; CSS picks one, so there is no flash before hydration. */}
      <SunIcon className="hidden size-[18px] dark:block" />
      <MoonIcon className="size-[18px] dark:hidden" />
      <span className="sr-only">Toggle dark mode</span>
    </button>
  );
}
