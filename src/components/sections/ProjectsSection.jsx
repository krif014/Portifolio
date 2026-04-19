import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Globe,
  Palette,
  Target,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { filterTags, projectMatchesFilter, projects } from "../../data/projects";
import ScrollReveal from "../animations/ScrollReveal";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import ProjectCard from "../ui/ProjectCard";

const filterIcons = {
  target: Target,
  globe: Globe,
  palette: Palette,
  zap: Zap,
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(3);

  const visible = useMemo(
    () => projects.filter((p) => projectMatchesFilter(p, filter)),
    [filter]
  );

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    calc();
    window.addEventListener("resize", calc, { passive: true });
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    setPage(0);
  }, [filter]);

  const totalPages = Math.max(1, Math.ceil(visible.length / perView));

  const goTo = (p) => {
    const next = Math.min(Math.max(0, p), totalPages - 1);
    setPage(next);
  };

  const prev = () => goTo(page - 1);
  const next = () => goTo(page + 1);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-white/5 py-16 sm:py-24"
    >
      <RadialGradientBackground />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/50 px-4 py-1.5 text-xs font-semibold text-accent">
            <Briefcase className="h-3.5 w-3.5" />
            My Work
          </div>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Showcasing my best work and achievements
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 flex flex-wrap justify-center gap-3" delayMs={80}>
          {filterTags.map(({ id, label, icon }) => {
            const Icon = filterIcons[icon] ?? Target;
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "border-accent/60 bg-emerald-950/50 text-white shadow-glow"
                    : "border-white/15 bg-surface text-zinc-400 hover:border-white/25 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            );
          })}
        </ScrollReveal>

        <div className="relative mt-12">
          <button
            type="button"
            onClick={prev}
            disabled={page === 0}
            className="absolute -left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-surface/80 text-zinc-200 backdrop-blur transition enabled:hover:border-accent/50 enabled:hover:text-accent disabled:opacity-40 lg:flex"
            aria-label="Previous projects"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={next}
            disabled={page >= totalPages - 1}
            className="absolute -right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-surface/80 text-zinc-200 backdrop-blur transition enabled:hover:border-accent/50 enabled:hover:text-accent disabled:opacity-40 lg:flex"
            aria-label="Next projects"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden">
            <div
              className="grid gap-8 transition-transform duration-500"
              style={{
                gridTemplateColumns: `repeat(${visible.length}, minmax(0, 1fr))`,
                transform: `translateX(-${(100 / perView) * page}%)`,
              }}
            >
              {visible.map((project) => (
                <div
                  key={project.id}
                  className="w-[calc(100%/1)]"
                  style={{ width: `${100 / perView}%` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === page
                    ? "w-8 bg-white"
                    : "w-2 bg-zinc-600 hover:bg-zinc-500"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
