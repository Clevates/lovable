import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crist Sotognon — Développeur Web créatif" },
      {
        name: "description",
        content:
          "Portfolio de Crist Sotognon, développeur web créatif spécialisé en expériences modernes et interactives.",
      },
      { property: "og:title", content: "Crist Sotognon — Développeur Web créatif" },
      {
        property: "og:description",
        content:
          "Développeur web créatif spécialisé en expériences modernes et interactives.",
      },
    ],
  }),
  component: Index,
});

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as
      | "light"
      | "dark"
      | null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: "light" | "dark" = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

function Index() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-background px-4 py-16 text-foreground transition-colors duration-500 sm:px-6 sm:py-20 lg:px-8">
      {/* Ambient gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500"
        style={{
          background: isDark
            ? "radial-gradient(60% 50% at 50% 0%, oklch(0.45 0.15 264 / 0.55) 0%, transparent 70%), radial-gradient(40% 40% at 80% 100%, oklch(0.4 0.14 200 / 0.5) 0%, transparent 70%), radial-gradient(40% 40% at 10% 90%, oklch(0.4 0.14 320 / 0.45) 0%, transparent 70%)"
            : "radial-gradient(60% 50% at 50% 0%, oklch(0.92 0.06 264 / 0.6) 0%, transparent 70%), radial-gradient(40% 40% at 80% 100%, oklch(0.9 0.08 200 / 0.5) 0%, transparent 70%), radial-gradient(40% 40% at 10% 90%, oklch(0.9 0.07 320 / 0.45) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.7 0.02 264) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.7 0.02 264) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      {/* Theme toggle */}
      <button
        type="button"
        onClick={toggle}
        aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
        title={isDark ? "Mode clair" : "Mode sombre"}
        className="group absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/60 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:right-6 sm:top-6"
      >
        <Sun
          className={`absolute h-5 w-5 transition-all duration-500 ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`absolute h-5 w-5 transition-all duration-500 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </button>

      <section className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <span
          className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground backdrop-blur-md animate-fade-in sm:px-4 sm:text-xs"
          style={{ animationDelay: "0ms", animationFillMode: "both" }}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70" />
          <span className="truncate">Disponible pour de nouveaux projets</span>
        </span>

        <h1
          className="animate-fade-in text-balance text-center font-mono font-semibold tracking-tight text-foreground text-[clamp(2.5rem,8vw,5.25rem)] leading-[1.05]"
          style={{ animationDelay: "120ms", animationFillMode: "both", letterSpacing: "-0.04em" }}
        >
          Crist Sotognon
        </h1>

        <p
          className="mt-5 max-w-[42ch] text-balance text-center font-serif font-medium leading-relaxed text-muted-foreground animate-fade-in text-[clamp(1rem,2.2vw,1.25rem)] sm:mt-6 sm:max-w-xl"
          style={{ animationDelay: "260ms", animationFillMode: "both" }}
        >
          Développeur Web créatif spécialisé en expériences modernes et
          interactives.
        </p>

        <div
          className="mt-8 flex w-full justify-center animate-fade-in sm:mt-10"
          style={{ animationDelay: "400ms", animationFillMode: "both" }}
        >
          <a
            href="#projets"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-lg shadow-foreground/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-foreground/20 sm:px-7 sm:py-3.5 sm:text-base"
          >
            Voir mes projets
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  );
}
