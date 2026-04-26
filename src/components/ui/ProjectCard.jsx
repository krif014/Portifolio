import { ExternalLink, TrendingUp } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        background: "rgba(15, 15, 18, 0.9)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered ? "0 0 30px rgba(74,222,128,0.08)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image area ── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500"
            style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
            loading="lazy"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${project.gradient}`} />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Category badge — top left */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.displayCategory}
          </span>
        </div>

        {/* Action icon buttons — bottom right */}
        <div className="absolute bottom-3 right-3 flex gap-2">
          <a
            href={project.demoUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/60 text-white backdrop-blur-sm transition-all duration-200 hover:border-accent hover:bg-accent hover:text-black"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/60 text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10"
          >
            <SiGithub className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* ── Content area ── */}
      <div className="flex flex-1 flex-col p-5">

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

        {/* Tech tags — green bordered */}
        {Array.isArray(project.technologies) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((t) => (
              <span
                key={t}
                className="rounded-full border border-accent/50 px-3 py-0.5 text-xs font-medium text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Metrics */}
        {project.metric && (
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent">
            <TrendingUp className="h-4 w-4 shrink-0" />
            <span>{project.metric}</span>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-5 flex items-center gap-3">
          <a
            href={project.demoUrl || "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-accent/50 hover:text-accent"
          >
            <ExternalLink className="h-4 w-4" />
            View Demo
          </a>
          <a
            href={project.githubUrl || "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-accent/50 hover:text-accent"
          >
            <SiGithub className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}