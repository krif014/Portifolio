import { ExternalLink, TrendingUp } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="flex flex-col overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        background: "rgba(15, 17, 15, 0.95)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
    
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
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

     
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      
        <div className="absolute left-4 top-4">
          <span className="inline-flex rounded-full border border-white/20 bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.displayCategory}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 flex gap-2">
          <a
            href={project.demoUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-zinc-900/80 text-white backdrop-blur-sm transition-all duration-200 hover:border-accent hover:bg-accent hover:text-black"
          >
            <ExternalLink className="h-[15px] w-[15px]" />
          </a>
          <a
            href={project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-zinc-900/80 text-white backdrop-blur-sm transition-all duration-200 hover:border-white/35 hover:bg-white/10"
          >
            <SiGithub className="h-[15px] w-[15px]" />
          </a>
        </div>
      </div>


      <div className="flex flex-1 flex-col px-5 py-5">

     
        <h3
          className="text-xl font-bold leading-snug transition-colors duration-200"
          style={{ color: hovered ? "#4ade80" : "#ffffff" }}
        >
          {project.title}
        </h3>

   
        <p className="mt-2.5 text-sm leading-relaxed text-zinc-400 line-clamp-3">
          {project.description}
        </p>

       
        {Array.isArray(project.technologies) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((t) => (
              <span
                key={t}
                className="rounded-full border border-accent/50 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        )}


        {project.metric && (
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent">
            <TrendingUp className="h-4 w-4 shrink-0" />
            <span>{project.metric}</span>
          </div>
        )}
      </div>
    </article>
  );
}