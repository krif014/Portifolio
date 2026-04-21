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
          ? "border-b border-white/10 bg-black/60 backdrop-blur-xl "
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto h-[80px] flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
  type="button"
  onClick={() => scrollTo("about")}
  className="flex items-center gap-2 group transition-all duration-200 ease-in-out transform hover:scale-[1.09] "
>
  {/* ICON */}
  <Code2 className="h-8 w-8 text-white " />

  {/* TEXT */}
  <span
    className="text-[29px] font-bold tracking-tight
    bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(74,222,128,1)_50%)]
    bg-clip-text text-transparent"
  >
    Krif
  </span>
</button>

        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map(({ id, label }) => (
           <button
  key={id}
  type="button"
  onClick={() => scrollTo(id)}
  className={`relative group text-base font-medium transition-colors duration-200 ${
    active === id
      ? "text-white"
      : "text-zinc-400 hover:text-white"
  }`}
>
  {label}

  <span
    className={`absolute -bottom-1 left-0 h-px w-full origin-left transform transition-transform duration-300 ease-out
      ${active === id ? "scale-x-100 bg-white" : "scale-x-0 bg-white group-hover:scale-x-100"}`}
  />
</button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="hidden transition-1 duration-100 ease-in-out rounded-[12px] bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-glow transition hover:bg-accent md:inline-flex"
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

      <div className="md:hidden">
  {/* Overlay */}
  <div
    className={`fixed inset-0 top-[80px] z-40 bg-black/60 backdrop-blur-sm transition ${
      open ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
    onClick={() => setOpen(false)}
  />

  {/* Dropdown */}
  <div
    className={`fixed left-0 top-[80px] z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-xl transition-all duration-300 ${
      open ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
    }`}
  >
    <div className="px-4 py-4">
      <div className="flex flex-col gap-1">
        {LINKS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
              active === id
                ? "bg-white/10 text-white"
                : "text-zinc-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <button
        onClick={() => scrollTo("contact")}
        className="mt-4 w-full rounded-[12px] bg-white py-3 text-sm font-semibold text-black transition hover:bg-accent"
      >
        Hire Me
      </button>
    </div>
  </div>
</div>
    </header>
  );
}
