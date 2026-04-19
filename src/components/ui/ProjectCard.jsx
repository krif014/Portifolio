import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function ProjectCard({ project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/90 transition hover:border-accent/35 hover:shadow-glow-strong">
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${project.gradient}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-3">
          <span className="inline-flex rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-zinc-300 backdrop-blur">
            {project.displayCategory}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <div className="rounded-xl border border-white/10 bg-black/55 p-4 backdrop-blur-md">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
              {project.subtitle}
            </p>
            <p className="mt-1 text-base font-semibold text-white">
              {project.title}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        {Array.isArray(project.technologies) ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {project.metric ? (
          <div className="mt-4 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
            <p className="text-xs font-medium text-zinc-400">Impact</p>
            <p className="mt-1 text-sm font-semibold text-white">
              {project.metric}
            </p>
          </div>
        ) : null}

        <div className="mt-5 flex items-center gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-accent/50 hover:text-accent"
          >
            <ExternalLink className="h-4 w-4" />
            View Demo
          </a>
          <a
            href={project.githubUrl}
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
