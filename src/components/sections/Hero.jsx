import { useEffect, useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import ScrollReveal from "../animations/ScrollReveal";

function useCountUp(target, duration = 1500, startCounting = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [startCounting, target, duration]);
  return count;
}

function StatNumber({ value, delayMs = 0 }) {
  const [started, setStarted] = useState(false);
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const count = useCountUp(target, 1500, started);
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);
  return <span>{count}{suffix}</span>;
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

  const stats = [
    { value: "3+", label: "Years\nExperience" },
    { value: "50+", label: "Projects\nCompleted" },
    { value: "15+", label: "Technologies\nUsed" },
    { value: "98%", label: "Client\nSatisfaction" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-visible border-b border-white/5 bg-black"
    >
      {/* ── Background blobs ──
          These use overflow-visible + negative top so they bleed UP
          into the navbar (which is sticky + transparent/blur, so the
          blobs show right through it). */}

      {/* Leaf blob — organic shape, rises 80px above the section */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-[520px] w-[440px] opacity-90"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #1a4d1a 0%, #0d2e0d 60%, transparent 100%)",
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
        }}
      />

      {/* Crescent arc — pushed further up so the arc rim crosses the navbar */}
      <div
        className="pointer-events-none absolute -left-48 -top-64 h-[960px] w-[960px] rounded-full opacity-55"
        style={{
          border: "120px solid rgba(20, 60, 20, 0.55)",
          background: "transparent",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          <div>
            <ScrollReveal delayMs={0}>
              <div className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/20 h-[40px] w-full max-w-[490px] pl-4 sm:pl-[38px] pr-4 py-1.5 text-xs font-medium text-white">
                <Star className="h-3.5 w-3.5 shrink-0 fill-white text-white" />
                <span className="truncate">FullStack Developer &amp; UI/UX Enthusiast | Based in Kigali, RW</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <h1 className="mt-6 text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-[58px]">
                Aspiring Developer
                <br />
                Portfolio
              </h1>
            </ScrollReveal>

            <ScrollReveal delayMs={200}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                Building modern, scalable web applications with React, JavaScript,
                and cutting-edge technologies. Transforming ideas into exceptional
                digital experiences.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={300}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center rounded-[12px] bg-white px-7 py-3 text-sm font-semibold text-black shadow-glow transition hover:bg-zinc-100"
                >
                  Get in Touch
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={400}>
              <div className="mt-10 flex flex-wrap items-start gap-y-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`relative ${i !== 0 ? "pl-2 sm:pl-8" : ""} ${i !== stats.length - 1 ? "pr-5 sm:pr-8" : ""}`}
                  >
                    {i !== stats.length - 1 && (
                      <span
                        className="absolute right-0 w-px"
                        style={{
                          height: "100px",
                          top: "70%",
                          transform: "translateY(-50%)",
                          background:
                            "linear-gradient(to bottom, transparent, #4ade80, #16a34a40, transparent)",
                        }}
                      />
                    )}
                    <p className="text-2xl font-bold text-accent-muted leading-none sm:text-3xl">
                      <StatNumber value={stat.value} delayMs={400 + i * 100} />
                    </p>
                    <p className="text-sm text-white mt-1 leading-snug whitespace-pre-line h-10">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delayMs={200} y={32}>
            <div className="flex justify-center lg:justify-end max-w-xl lg:max-w-none">
              <div
                className="relative w-full max-w-[460px] lg:w-[460px] lg:h-[570px]"
                style={{ aspectRatio: "460/570" }}
              >
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
                  alt="Developer"
                  className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] object-cover rounded-[15px] z-10"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-5 rounded-full border border-white/10 bg-transparent px-4 py-2.5 text-green-400 backdrop-blur whitespace-nowrap">
                  <SiReact className="h-6 w-6 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125 hover:text-[#00FF88] hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.9)] hover:brightness-125" />
                  <SiNextdotjs className="h-6 w-6 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125 hover:text-[#00FF88] hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.9)] hover:brightness-125" />
                  <SiNodedotjs className="h-6 w-6 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125 hover:text-[#00FF88] hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.9)] hover:brightness-125" />
                  <SiTailwindcss className="h-6 w-6 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125 hover:text-[#00FF88] hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.9)] hover:brightness-125" />
                  <SiMongodb className="h-6 w-6 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125 hover:text-[#00FF88] hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.9)] hover:brightness-125" />
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        <ScrollReveal delayMs={500}>
          <div className="mt-1 flex justify-center">
            <button
              type="button"
              onClick={() =>
                document.getElementById("skills")?.scrollIntoView({
                  behavior: reducedMotion ? "auto" : "smooth",
                })
              }
              className="text-accent"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-8 w-8 animate-bounce" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}