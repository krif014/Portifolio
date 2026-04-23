import { ChevronDown, Star } from "lucide-react";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

export default function Hero() {
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  const stats = [
    { value: "3+", label: "Years\nExperience" },
    { value: "50+", label: "Projects\nCompleted" },
    { value: "15+", label: "Technologies\nUsed" },
    { value: "98%", label: "Client\nSatisfaction" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/5"
    >
      <RadialGradientBackground position="right" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

        
          <div>
            <div className="flex content-center text-[14px] items-center gap-2 rounded-full border border-accent/30 bg-accent/20 h-[40px] w-[490px] pl-[38px] py-1.5 text-xs font-medium text-white">
              <Star className="h-3.5 w-3.5 fill-white text-white" />
              FullStack Developer &amp; UI/UX Enthusiast | Based in Kigali, RW
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

          
            <div className="mt-10 flex items-start">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`relative ${i !== 0 ? "pl-8" : ""} ${i !== stats.length - 1 ? "pr-8" : ""}`}
                >
              
                  {i !== stats.length - 1 && (
                    <span
                      className="absolute right-0 w-px"
                      style={{
                        height: '100px',
                        top: '70%',
                        transform: 'translateY(-50%)',
                        background: 'linear-gradient(to bottom, transparent, #4ade80, #16a34a40, transparent)',
                      }}
                    />
                  )}
                  <p className="text-3xl font-bold text-accent-muted leading-none">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white mt-1 leading-snug whitespace-pre-line h-10">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
    
          <div className="flex justify-end max-w-xl lg:max-w-none">
            <div className="relative w-[460px] h-[570px]">

              <div className="absolute inset-0 rounded-[18px] overflow-hidden">
                <div
                  className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-spin-border"
                  style={{
                    background: `conic-gradient(
                      transparent 0deg,
                      transparent 158deg,
                      #4ade80 168deg,
                      #22c55e 175deg,
                      #4ade80 182deg,
                      transparent 192deg,
                      transparent 338deg,
                      #4ade80 348deg,
                      #22c55e 355deg,
                      #4ade80 362deg,
                      transparent 372deg
                    )`,
                  }}
                />
                <div className="absolute inset-[3px] rounded-[15px] bg-black" />
              </div>

              <img
                src="images/DEV.webp"
                alt=""
                className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] object-cover rounded-[15px] z-10"
              />

              <div className="absolute h-[45px] w-[220px] bottom-4 translate-x-1/2 z-20 flex items-center gap-5 rounded-full border border-white/10 bg-transparent px-4 py-2.5 text-green-400 backdrop-blur whitespace-nowrap">
                <SiReact className="h-6 w-6 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125 hover:text-[#00FF88] hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.9)] hover:brightness-125" />
                <SiNextdotjs className="h-6 w-6 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125 hover:text-[#00FF88] hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.9)] hover:brightness-125" />
                <SiNodedotjs className="h-6 w-6 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125 hover:text-[#00FF88] hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.9)] hover:brightness-125" />
                <SiTailwindcss className="h-6 w-6 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125 hover:text-[#00FF88] hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.9)] hover:brightness-125" />
                <SiMongodb className="h-6 w-6 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125 hover:text-[#00FF88] hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.9)] hover:brightness-125" />
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