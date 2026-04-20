import { useEffect, useMemo, useState } from "react";
import { Code2, Menu, X } from "lucide-react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
    });
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled
          ? "border-b border-white/10 bg-black/60 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollTo("about")}
          className="flex items-center gap-2 text-accent transition hover:opacity-90"
        >
          <Code2 className="h-6 w-6 shrink-0" strokeWidth={2.25} />
          <span className="text-lg font-bold tracking-tight text-accent">
            Krif
          </span>
        </button>

        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className={`relative text-sm font-medium transition ${
                active === id
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {label}
              {active === id ? (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/80" />
              ) : null}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-glow transition hover:bg-zinc-100 md:inline-flex"
          >
            Hire Me
          </button>
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-zinc-300 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <div
          className={`fixed right-0 top-0 z-50 h-dvh w-[84%] max-w-sm border-l border-white/10 bg-black/85 backdrop-blur-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-2 text-accent">
              <Code2 className="h-5 w-5" />
              <span className="text-base font-bold">Krif</span>
            </div>
            <button
              type="button"
              className="rounded-lg p-2 text-zinc-200"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 py-3">
            <div className="flex flex-col gap-1">
              {LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                    active === id
                      ? "bg-white/10 text-white"
                      : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="mt-4 w-full rounded-full bg-white py-3 text-sm font-semibold text-black"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
