import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Globe,
  Layers,
  Palette,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import ProjectCard from "../ui/ProjectCard";

// ── Data ─────────────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform designed for fast, seamless shopping experiences. It connects customers with a wide range of quality products through an intuitive interface. Secure payments and efficient delivery ensure reliability and convenience.",
    image: "/images/projects/project3.png",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    metrics: "40% increase in conversion",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    title: "AI Chat Assistant",
    description:
      "An intelligent AI-powered chat assistant designed to provide instant responses and automate conversations. It enhances user engagement through natural language processing and contextual understanding.",
    image: "/images/projects/project1.png",
    category: "Web Apps",
    technologies: ["React", "Node.js", "OpenAI API", "Express"],
    metrics: "60% faster response time",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern developer portfolio showcasing projects, skills, and achievements. Designed with smooth animations and responsive layouts for all devices. Focused on clean UI/UX and professional presentation.",
    image: "/images/projects/project2.png",
    category: "UI Components",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    metrics: "Improved personal branding visibility",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Real-Time Chat App",
    description:
      "A real-time messaging application enabling instant communication between users. Supports live messaging, notifications, and secure authentication. Built for speed, scalability, and smooth user interaction.",
    image: "/images/projects/project4.png",
    category: "Full Stack",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    metrics: "Real-time latency under 100ms",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 5,
    title: "Task Management System",
    description:
      "A productivity platform for managing tasks, deadlines, and team collaboration. Helps users organize workflows efficiently with intuitive dashboards. Designed for both individuals and teams.",
    image: "/images/projects/project5.png",
    category: "Full Stack",
    technologies: ["React", "Node.js", "PostgreSQL"],
    metrics: "30% productivity improvement",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description:
      "A real-time weather application providing accurate forecasts and location-based updates. Displays temperature, humidity, and weather conditions in a clean UI. Designed for simplicity and speed.",
    image: "/images/projects/project6.png",
    category: "Web Apps",
    technologies: ["React", "Weather API", "Tailwind CSS"],
    metrics: "Real-time data accuracy 95%",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 7,
    title: "Admin Dashboard",
    description:
      "A powerful admin dashboard for managing users, analytics, and system data. Provides real-time insights with interactive charts and reports. Built for scalability and enterprise-level control.",
    image: "/images/projects/project7.png",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Chart.js", "MongoDB"],
    metrics: "Improved data monitoring efficiency",
    demoUrl: "",
    githubUrl: "",
  },
];

const filterTags = [
  { id: "all", label: "All", icon: Layers },
  { id: "Web Apps", label: "Web Apps", icon: Globe },
  { id: "UI Components", label: "UI Components", icon: Palette },
  { id: "Full Stack", label: "Full Stack", icon: Zap },
];

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(18, 18, 20, 0.85)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Category badge — top left */}
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Action buttons — bottom right */}
        <div className="absolute bottom-3 right-3 flex gap-2">
          <a
            href={project.demoUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:bg-accent hover:border-accent hover:text-black"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/30"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h3
          className="text-lg font-bold leading-snug transition-colors duration-200"
          style={{ color: hovered ? "#4ade80" : "#ffffff" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-accent/40 px-3 py-0.5 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
          <TrendingUp className="h-4 w-4 shrink-0" />
          <span>{project.metrics}</span>
        </div>
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(3);

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
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

  useEffect(() => { setPage(0); }, [filter]);

  const totalPages = Math.max(1, Math.ceil(visible.length / perView));
  const goTo = (p) => setPage(Math.min(Math.max(0, p), totalPages - 1));

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-white/5 bg-black py-20 sm:py-28"
    >
      <RadialGradientBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <Briefcase className="h-3.5 w-3.5" />
              My Work
            </div>
            <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-[56px]">
              Featured Projects
            </h2>
            <p className="mt-4 text-sm text-zinc-400 sm:text-base">
              Showcasing my best work and achievements
            </p>
          </div>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delayMs={80}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {filterTags.map(({ id, label, icon: Icon }) => {
              const active = filter === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setFilter(id)}
                  className="relative inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200"
                  style={{
                    borderColor: active ? "rgba(74,222,128,0.6)" : "rgba(255,255,255,0.12)",
                    background: active ? "rgba(74,222,128,0.12)" : "rgba(255,255,255,0.04)",
                    color: active ? "#4ade80" : "#a1a1aa",
                    boxShadow: active ? "0 0 16px rgba(74,222,128,0.25)" : "none",
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                  {/* Glow dot for active */}
                  {active && (
                    <span
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-accent"
                      style={{ boxShadow: "0 0 6px 2px rgba(74,222,128,0.6)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative mt-14">

          {/* Prev arrow */}
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            className="absolute -left-5 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-zinc-300 backdrop-blur transition enabled:hover:border-accent/50 enabled:hover:text-accent disabled:opacity-30 lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next arrow */}
          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page >= totalPages - 1}
            className="absolute -right-5 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-zinc-300 backdrop-blur transition enabled:hover:border-accent/50 enabled:hover:text-accent disabled:opacity-30 lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(calc(-${page * (100 / perView)}% - ${page * (24 / perView)}px))`,
              }}
            >
              {visible.map((project) => (
                <div
                  key={project.id}
                  className="shrink-0"
                  style={{ width: `calc(${100 / perView}% - ${(24 * (perView - 1)) / perView}px)` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === page ? 32 : 8,
                  height: 8,
                  background: i === page ? "#4ade80" : "#3f3f46",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}