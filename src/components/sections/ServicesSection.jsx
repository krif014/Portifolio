import {
  Code2,
  GitBranch,
  LayoutTemplate,
  Palette,
  Smartphone,
  Wrench,
  Zap,
  ServerCog,
} from "lucide-react";
import { useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";

const largeServices = [
  {
    id: "frontend",
    icon: LayoutTemplate,
    title: "Frontend Development",
    description:
      "Building responsive and performant web applications using React, Next.js, and modern JavaScript frameworks with pixel-perfect designs.",
  },
  {
    id: "backend",
    icon: ServerCog,
    title: "Backend Development",
    description:
      "Developing scalable server-side applications and REST APIs using Node.js, Express, and databases like MongoDB and PostgreSQL.",
  },
];

const smallServices = [
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces with a focus on usability, accessibility, and modern design principles.",
  },
  {
    id: "components",
    icon: Code2,
    title: "Custom Components",
    description:
      "Developing reusable, scalable component libraries and design systems that maintain consistency across your entire application.",
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed and efficiency through code splitting, lazy loading, and best practices.",
  },
  {
    id: "consulting",
    icon: GitBranch,
    title: "Code Review & Consulting",
    description:
      "Providing expert code reviews, architecture consulting, and technical guidance to improve your codebase quality.",
  },
];

const cardGridStyle = {
  backgroundImage: `
    linear-gradient(rgba(74,222,128,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(74,222,128,0.06) 1px, transparent 1px)
  `,
  backgroundSize: "32px 32px",
};

function LargeCard({ service }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 cursor-pointer"
      style={{
        background: "rgba(15, 20, 15, 0.9)",
        border: hovered ? "1px solid rgba(74,222,128,0.5)" : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered ? "0 0 30px rgba(74,222,128,0.12)" : "none",
        ...cardGridStyle,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300"
        style={{
          background: hovered ? "rgba(74,222,128,0.25)" : "rgba(74,222,128,0.15)",
          border: "1px solid rgba(74,222,128,0.3)",
        }}
      >
        <Icon className="h-8 w-8 text-accent" />
      </div>

    
      <h3
        className="mt-6 text-2xl font-bold transition-colors duration-200"
        style={{ color: hovered ? "#4ade80" : "#ffffff" }}
      >
        {service.title}
      </h3>

     
      <p className="mt-3 text-base leading-relaxed text-zinc-400">
        {service.description}
      </p>
    </div>
  );
}

function SmallCard({ service }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 cursor-pointer"
      style={{
        background: "rgba(15, 20, 15, 0.9)",
        border: hovered ? "1px solid rgba(74,222,128,0.5)" : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered ? "0 0 24px rgba(74,222,128,0.1)" : "none",
        ...cardGridStyle,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
  
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300"
        style={{
          background: hovered ? "rgba(74,222,128,0.25)" : "rgba(74,222,128,0.15)",
          border: "1px solid rgba(74,222,128,0.3)",
        }}
      >
        <Icon className="h-6 w-6 text-accent" />
      </div>

      {/* Title */}
      <h3
        className="mt-5 text-lg font-bold transition-colors duration-200"
        style={{ color: hovered ? "#4ade80" : "#ffffff" }}
      >
        {service.title}
      </h3>

   
      <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-3">
        {service.description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-white/5 bg-black py-20 sm:py-28"
    >
   
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <Wrench className="h-3.5 w-3.5" />
              What I Offer
            </div>
            <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-[56px] leading-tight">
              Built for innovation. Designed for
              <br />
              results.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
              Comprehensive solutions to transform your ideas into exceptional digital experiences.
            </p>
          </div>
        </ScrollReveal>

      
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {largeServices.map((service, idx) => (
            <ScrollReveal key={service.id} delayMs={idx * 100}>
              <LargeCard service={service} />
            </ScrollReveal>
          ))}
        </div>

     
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {smallServices.map((service, idx) => (
            <ScrollReveal key={service.id} delayMs={200 + idx * 80}>
              <SmallCard service={service} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}