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
import ScrollReveal from "../animations/ScrollReveal";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const skillGroups = [
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: Code2, experience: "3+ years", level: "Expert", progress: 92 },
      { name: "JavaScript", icon: Braces, experience: "4+ years", level: "Expert", progress: 95 },
      { name: "TypeScript", icon: SquareCode, experience: "2+ years", level: "Advanced", progress: 78 },
      { name: "Next.js", icon: LayoutTemplate, experience: "2+ years", level: "Advanced", progress: 75 },
      { name: "Tailwind CSS", icon: Zap, experience: "3+ years", level: "Expert", progress: 90 },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: ServerCog, experience: "2+ years", level: "Intermediate", progress: 65 },
      { name: "REST APIs", icon: Link2, experience: "3+ years", level: "Advanced", progress: 80 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", icon: GitBranch, experience: "4+ years", level: "Advanced", progress: 88 },
      { name: "Responsive Design", icon: MonitorSmartphone, experience: "3+ years", level: "Expert", progress: 92 },
      { name: "Figma", icon: PenTool, experience: "2+ years", level: "Intermediate", progress: 60 },
      { name: "Vite", icon: Zap, experience: "1+ years", level: "Advanced", progress: 75 },
    ],
  },
];

const levelConfig = {
  Intermediate: {
    badge: "border-emerald-400/70 bg-emerald-400/15 text-emerald-400",
    barFrom: "#166534",
    barTo: "#4ade80",
  },
  Expert : {
    badge: "border-green-500/70 bg-green-500/15 text-green-400",
    barFrom: "#14532d",
    barTo: "#22c55e",
  },
  Advanced : {
    badge: "border-teal-500/70 bg-teal-500/15 text-teal-400",
    barFrom: "#134e4a",
    barTo: "#2dd4bf",
  },
};

function SkillRow({ skill }) {
  const { icon: Icon, name, experience, level, progress } = skill;
  const cfg = levelConfig[level] ?? levelConfig.Expert;

  return (
    <div className="py-3.5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-base font-semibold text-white leading-tight">{name}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{experience}</p>
            </div>
            <span className={`shrink-0 rounded-full border px-3.5 py-1 text-xs font-bold ${cfg.badge}`}>
              {level}
            </span>
          </div>

          <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(to right, ${cfg.barFrom}, ${cfg.barTo})`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ group, delayMs }) {
  return (
    <ScrollReveal delayMs={delayMs}>
      <div
        className=" rounded-2xl p-6 transition-all duration-300"
        style={{
          background: "rgba(20, 83, 45, 0.15)",
          border: "1px solid rgba(74,222,128,0.12)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "rgba(20, 83, 45, 0.18)";
          e.currentTarget.style.borderColor = "rgba(74,222,128,0.19)";
        }}
       onMouseLeave={e => {
          e.currentTarget.style.background = "rgba(20, 83, 45, 0.15)";
          e.currentTarget.style.borderColor = "rgba(74,222,128,0.12)";
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span
            className="h-6 w-[3px] rounded-full shrink-0"
            style={{ background: "linear-gradient(to bottom, #4ade80, #16a34a)" }}
          />
          <h3 className="text-lg font-bold text-white">{group.title}</h3>
        </div>

        <div className="mb-1 h-px w-full bg-white/5" />

        <div className="divide-y divide-white/5">
          {group.skills.map(skill => (
            <SkillRow key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-white/5 bg-black py-20 sm:py-28"
    >
      <RadialGradientBackground position="left" className="opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              My Expertise
            </div>
            <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-[56px]">
              Skills &amp; Technologies
            </h2>
            <p className="mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <SkillCard key={group.id} group={group} delayMs={idx * 100} />
          ))}
        </div>

      </div>
    </section>
  );
}