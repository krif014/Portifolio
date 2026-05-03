import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Globe,
  Layers,
  Palette,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "FULL STACK APP",
    displayCategory: "Full Stack",
    description:
      "A modern e-commerce platform designed for fast, seamless shopping experiences. Secure payments and efficient delivery ensure reliability and convenience.",
    image: "/images/projects/project3.png",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    metric: "40% increase in conversion",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    title: "AI Chat Assistant",
    subtitle: "WEB APP",
    displayCategory: "Web Apps",
    description:
      "An intelligent AI-powered chat assistant providing instant responses and automating conversations through natural language processing.",
    image: "/images/projects/project1.png",
    category: "Web Apps",
    technologies: ["React", "Node.js", "OpenAI API", "Express"],
    metric: "60% faster response time",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Portfolio Website",
    subtitle: "UI COMPONENTS",
    displayCategory: "UI Components",
    description:
      "A modern developer portfolio showcasing projects, skills, and achievements with smooth animations and responsive layouts.",
    image: "/images/projects/project2.png",
    category: "UI Components",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    metric: "2K+ GitHub stars",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Admin Dashboard",
    subtitle: "FULL STACK APP",
    displayCategory: "Full Stack",
    description:
      "A powerful admin dashboard for managing users, analytics, and system data with real-time insights and interactive charts.",
    image: "/images/projects/project7.png",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Chart.js", "MongoDB"],
    metric: "1K+ npm downloads",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 5,
    title: "Task Management System",
    subtitle: "FULL STACK APP",
    displayCategory: "Full Stack",
    description:
      "A productivity platform for managing tasks, deadlines, and team collaboration with intuitive dashboards.",
    image: "/images/projects/project5.png",
    category: "Full Stack",
    technologies: ["React", "Node.js", "PostgreSQL"],
    metric: "500+ active users",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 6,
    title: "Weather Forecast App",
    subtitle: "WEB APP",
    displayCategory: "Web Apps",
    description:
      "A real-time weather application providing accurate forecasts and location-based updates with a clean, minimal UI.",
    image: "/images/projects/project6.png",
    category: "Web Apps",
    technologies: ["React", "Weather API", "Tailwind CSS"],
    metric: "95% accuracy rate",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 7,
    title: "Real-Time Chat App",
    subtitle: "FULL STACK APP",
    displayCategory: "Full Stack",
    description:
      "A real-time messaging application with live messaging, notifications, and secure authentication built for speed and scalability.",
    image: "/images/projects/project4.png",
    category: "Full Stack",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    metric: "10K+ data points/day",
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

const GAP = 24;

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(3);
  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const visible = useMemo(
    () => filter === "all" ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );

 
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const containerW = trackRef.current.offsetWidth;
      const w = window.innerWidth;
      const pv = w < 640 ? 1 : w < 1024 ? 2 : 3;
      setPerView(pv);
   
      setCardWidth((containerW - GAP * (pv - 1)) / pv);
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => { setPage(0); }, [filter]);

  const totalPages = Math.max(1, visible.length - perView + 1);
  const goTo = (p) => setPage(Math.min(Math.max(0, p), totalPages - 1));

  const slideAmount = cardWidth + GAP;

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-white/5 bg-black py-20 sm:py-28"
    >
      <RadialGradientBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

     
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
                    boxShadow: active ? "0 0 18px rgba(74,222,128,0.3)" : "none",
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                  {active && (
                    <span
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-accent"
                      style={{ boxShadow: "0 0 6px 2px rgba(74,222,128,0.7)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

       
        <div className="relative mt-14">

          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            className="absolute -left-6 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-zinc-300 backdrop-blur transition enabled:hover:border-accent/50 enabled:hover:text-accent disabled:opacity-30 lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

   
          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page >= totalPages - 1}
            className="absolute -right-6 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-zinc-300 backdrop-blur transition enabled:hover:border-accent/50 enabled:hover:text-accent disabled:opacity-30 lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

     
          <div className="overflow-hidden" ref={trackRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: GAP,
         
                transform: `translateX(-${page * slideAmount}px)`,
              }}
            >
              {visible.map((project) => (
                <div
                  key={project.id}
                  className="shrink-0"
                  style={{ width: cardWidth > 0 ? cardWidth : `calc(${100 / perView}% - ${GAP * (perView - 1) / perView}px)` }}
                >
                  <ScrollReveal delayMs={i % perView * 100}>
                  <ProjectCard project={project} />
                  </ScrollReveal>
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