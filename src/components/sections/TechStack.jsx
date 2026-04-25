import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import ScrollReveal from "../animations/ScrollReveal";

const items = [
  { label: "React.js", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Tailwind CSS", Icon: SiTailwindcss },
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "MongoDB", Icon: SiMongodb },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-16 sm:py-20">
      <RadialGradientBackground className="opacity-25" />

    
      <div
        className="pointer-events-none absolute"
        style={{
          width: 560,
          height: 560,
          right: -280,
          top: -280,
          borderRadius: "50%",
          border: "110px solid rgba(20, 60, 20, 0.01)",
          background: "transparent",
          opacity: 0.5,
        }}
      />

      <div className="relative  z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Tech Stack &amp; Expertise
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Technologies I work with to build amazing products
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          delayMs={80}
        >
          {items.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-surface/80 px-4 py-6 text-center transition hover:scale-[1.02] hover:border-accent/30 hover:shadow-glow"
            >
              <Icon className="h-10 w-10 text-accent-muted " aria-hidden />
              <p className="mt-3 text-xs font-medium text-white sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}