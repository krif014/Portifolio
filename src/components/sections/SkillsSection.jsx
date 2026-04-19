import {
  Braces,
  Code2,
  GitBranch,
  LayoutTemplate,
  Link2,
  MonitorSmartphone,
  PenTool,
  ServerCog,
  Sparkles,
  SquareCode,
  Zap,
} from "lucide-react";
import { skillGroups } from "../../data/skillGroups";
import ScrollReveal from "../animations/ScrollReveal";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const iconByName = {
  "React.js": Code2,
  JavaScript: Braces,
  TypeScript: SquareCode,
  "Next.js": LayoutTemplate,
  "Node.js": ServerCog,
  "REST APIs": Link2,
  "Git & GitHub": GitBranch,
  "Responsive Design": MonitorSmartphone,
  Figma: PenTool,
  Vite: Zap,
};

function SkillRow({ skill }) {
  const Icon = iconByName[skill.name] ?? Code2;
  return (
    <div className="py-4">
      <div className="flex flex-wrap items-start gap-3 sm:items-center">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/35 text-accent">
          <Icon className="h-4 w-4" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="font-medium text-white">{skill.name}</p>
              <p className="text-xs text-zinc-500">{skill.experience}</p>
            </div>
            <span className="rounded-full border border-accent/50 px-3 py-0.5 text-xs font-medium text-accent">
              {skill.level}
            </span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-800 to-accent"
              style={{ width: `${skill.progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-white/5 py-16 sm:py-24"
    >
      <RadialGradientBackground position="left" className="opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            My Expertise
          </div>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            A comprehensive overview of my technical skills and proficiency
            levels
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <ScrollReveal
              key={group.id}
              delayMs={idx * 80}
              className="rounded-2xl border border-white/10 bg-surface/90 p-6 shadow-glow"
            >
              <div className="flex items-center gap-2">
                <span className="h-6 w-0.5 rounded-full bg-accent" />
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
              </div>
              <div className="mt-2 divide-y divide-white/5">
                {group.skills.map((skill) => (
                  <SkillRow key={skill.name} skill={skill} />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
