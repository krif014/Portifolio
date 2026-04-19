import {
  Code2,
  LayoutTemplate,
  Palette,
  Smartphone,
  Stethoscope,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { services } from "../../data/services";
import ScrollReveal from "../animations/ScrollReveal";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const iconMap = {
  layout: LayoutTemplate,
  smartphone: Smartphone,
  palette: Palette,
  code: Code2,
  zap: Zap,
  stethoscope: Stethoscope,
};

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  const large = services.filter((s) => s.large);
  const small = services.filter((s) => !s.large);

  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-white/5 py-16 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <RadialGradientBackground position="right" className="opacity-15" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <Zap className="h-3.5 w-3.5" />
            What I Offer
          </div>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Services that help you ship faster
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            A bento-style set of offerings focused on impact, polish, and
            performance.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-6">
          {large.map((service, idx) => {
            const Icon = iconMap[service.icon] ?? LayoutTemplate;
            const isH = hovered === service.id;
            return (
              <ScrollReveal
                key={service.id}
                delayMs={idx * 80}
                className="lg:col-span-3"
              >
                <article
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() => setHovered(service.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(service.id)}
                  onBlur={() => setHovered(null)}
                  className={`group h-full rounded-2xl border bg-surface/90 p-8 text-left transition ${
                    isH
                      ? "border-accent shadow-glow-strong"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/35 bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={`mt-6 text-xl font-semibold transition ${
                      isH ? "text-accent" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}

          {small.map((service, idx) => {
            const Icon = iconMap[service.icon] ?? Code2;
            const isH = hovered === service.id;
            return (
              <ScrollReveal
                key={service.id}
                delayMs={160 + idx * 60}
                className="lg:col-span-3 xl:col-span-1"
              >
                <article
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() => setHovered(service.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(service.id)}
                  onBlur={() => setHovered(null)}
                  className={`group h-full rounded-2xl border bg-surface/90 p-6 text-left transition ${
                    isH
                      ? "border-accent shadow-glow"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/35 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className={`mt-5 text-base font-semibold transition ${
                      isH ? "text-accent" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-zinc-400">
                    {service.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
