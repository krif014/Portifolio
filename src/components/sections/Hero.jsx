import { ChevronDown, Code2, Star } from "lucide-react";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

function StatPill({ value, label, showDivider }) {
  return (
    <div className="relative flex flex-1 items-center justify-center px-4 py-3">
      {showDivider ? (
        <span
          className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-white/10 sm:block"
          aria-hidden
        />
      ) : null}
      <div className="text-center">
        <p className="text-lg font-bold text-accent sm:text-xl">{value}</p>
        <p className="mt-0.5 text-[11px] text-zinc-500 sm:text-xs">{label}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/5"
    >
      <RadialGradientBackground position="right" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex content-center text-[14px] items-center gap-2 rounded-full border border-accent/30 bg-accent/20 h-[40px]   w-[490px] pl-[38px] py-1.5 text-xs font-medium text-white">
              <Star className="h-3.5 w-3.5 fill-white text-white" />
              FullStack Developer &amp; UI/UX Enthusiast | Based in Kigali,RW 
            </div>

            <h1 className="mt-6 text-5xl leading-tight tracking-tight text-white sm:text-5xl lg:text-[58px]">
              Aspiring Developer
              <br />
              Portfolio
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-lg">
              Building modern, scalable web applications with React, JavaScript,
              and cutting-edge technologies. Transforming ideas into exceptional
              digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center rounded-[12px] bg-white px-7 py-3 text-sm font-semibold text-black shadow-glow transition hover:bg-zinc-100"
              >
                Get in Touch
              </button>
            </div>

            <div className="mt-10 flex w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur">
              <StatPill value="3+" label="Years Experience" showDivider />
              <StatPill value="50+" label="Projects Completed" showDivider />
              <StatPill value="15+" label="Technologies" showDivider />
              <StatPill value="98%" label="Client Satisfaction" />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px]">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/40 via-transparent to-emerald-900/30 blur-2xl" />

              <div className="relative h-full w-full rounded-[2rem] border border-white/10 bg-black/30 p-4 backdrop-blur">
                <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                  <img
                    src="images\developer-potrait.jpeg"
                    alt=""
                    className="h-full w-full object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-white/10" />
                    <div className="absolute -inset-4 animate-spin-slow rounded-[2rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(74,222,128,0.0),rgba(74,222,128,0.55),rgba(74,222,128,0.0))] blur-[1px]" />
                  </div>

                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/55 px-4 py-2.5 text-accent backdrop-blur">
                    {[
                      { Icon: SiReact, label: "React" },
                      { Icon: SiNextdotjs, label: "Next.js" },
                      { Icon: SiNodedotjs, label: "Node.js" },
                      { Icon: SiTailwindcss, label: "Tailwind" },
                      { Icon: SiMongodb, label: "MongoDB" },
                    ].map(({ Icon, label }) => (
                      <div
                        key={label}
                        className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-zinc-200 transition hover:scale-110 hover:border-accent/50 hover:text-accent"
                        aria-label={label}
                        title={label}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() =>
              document.getElementById("skills")?.scrollIntoView({
                behavior: reducedMotion ? "auto" : "smooth",
              })
            }
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-zinc-300 backdrop-blur transition hover:border-accent/50 hover:text-accent"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
