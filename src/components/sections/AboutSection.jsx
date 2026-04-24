import { useEffect, useState, useRef } from "react";
import { Code2, Sparkles, Download, Zap } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

function useCountUp(target, duration = 1800, startCounting = false) {
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

    const match = value.match(/^([\d.]+)(.*)$/);
    const target = match ? parseFloat(match[1]) : 0;
    const suffix = match ? match[2] : "";
    const isDecimal = target % 1 !== 0;
    const intTarget = isDecimal ? Math.round(target * 10) : target;
    const rawCount = useCountUp(intTarget, 1800, started);
    const display = isDecimal ? (rawCount / 10).toFixed(1) : rawCount;

    useEffect(() => {
        const timer = setTimeout(() => setStarted(true), delayMs);
        return () => clearTimeout(timer);
    }, [delayMs]);

    return <span>{display}{suffix}</span>;
}
function FeatureCard({ icon: Icon, title, description, className = "" }) {
    return (
        <div
            className={`group relative rounded-2xl border border-white/8 bg-zinc-900/60 p-6 transition-all duration-300 hover:border-accent/60 hover:bg-zinc-900/80 ${className}`}
        >
    
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent/25">
                <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
        </div>
    );
}


export default function AboutSection() {

    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const stats = [
        { value: "45+", label: "Happy Clients", delayMs: 0 },
        { value: "2.5K+", label: "Code Commits", delayMs: 150 },
        { value: "500+", label: "GitHub Stars", delayMs: 300 },
    ];

    const cards = [
        {
            icon: Code2,
            title: "Expertise",
            description:
                "Specialized in building scalable web applications with modern technologies and best practices.",
            className: "lg:col-span-2",
        },
        {
            icon: Sparkles,
            title: "Clean Code",
            description:
                "Writing maintainable, well-documented code that scales.",
        },
        {
            icon: Download,
            title: "Performance",
            description:
                "Optimizing for speed and efficiency in every project.",
        },
    ];

    const highlights = [
        { value: "100%", label: "Client Satisfaction" },
        { value: "24/7", label: "Support Available" },
        { value: "Fast", label: "Delivery Time" },
    ];

    return (
        <section
            id="about-detail"
            ref={sectionRef}
            className="relative overflow-hidden border-b border-white/5 bg-black py-20 lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">

        
                    <div className="flex flex-col justify-center">

                
                        <ScrollReveal delayMs={0}>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
                                <Code2 className="h-3.5 w-3.5" />
                                Full-Stack Developer
                                <Sparkles className="h-3.5 w-3.5" />
                            </div>
                        </ScrollReveal>

            
                        <ScrollReveal delayMs={80}>
                            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[52px]">
                                Crafting Digital
                                <br />
                                Experiences That Matter
                            </h2>
                        </ScrollReveal>

                    
                        <ScrollReveal delayMs={160}>
                            <div className="mt-7 space-y-4 text-base leading-relaxed text-zinc-400">
                                <p>
                                    I'm a passionate full-stack developer with over 3 years of
                                    experience building scalable, performant web applications. I
                                    specialize in creating intuitive user interfaces that combine
                                    beautiful design with exceptional functionality.
                                </p>
                                <p>
                                    My expertise spans the entire frontend ecosystem, from React
                                    and Next.js to TypeScript and modern CSS frameworks. I'm
                                    committed to writing clean, maintainable code and staying
                                    current with the latest web technologies.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me contributing to
                                    open-source projects, writing technical articles, or
                                    exploring new design trends.
                                </p>
                            </div>
                        </ScrollReveal>

        
                        <ScrollReveal delayMs={240}>
                            <div className="mt-10 flex flex-wrap gap-y-6">
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className={`relative ${i !== 0 ? "pl-6 sm:pl-10" : ""} ${i !== stats.length - 1 ? "pr-6 sm:pr-10" : ""}`}
                                    >
                                        {i !== stats.length - 1 && (
                                            <span
                                                className="absolute right-0 w-px"
                                                style={{
                                                    height: 56,
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    background:
                                                        "linear-gradient(to bottom, transparent, #4ade80, transparent)",
                                                }}
                                            />
                                        )}
                                        <p className="text-3xl font-bold text-accent sm:text-4xl">
                                            {inView
                                                ? <StatNumber value={stat.value} delayMs={stat.delayMs} />
                                                : <span>0{stat.value.replace(/[\d.]/g, "")}</span>
                                            }
                                        </p>
                                        <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                
                    <div className="flex flex-col gap-4">

            
                        <ScrollReveal delayMs={100}>
                            <FeatureCard
                                icon={cards[0].icon}
                                title={cards[0].title}
                                description={cards[0].description}
                                className="w-full"
                            />
                        </ScrollReveal>

                    
                        <div className="grid grid-cols-2 gap-4">
                            <ScrollReveal delayMs={180}>
                                <FeatureCard
                                    icon={cards[1].icon}
                                    title={cards[1].title}
                                    description={cards[1].description}
                                    className="h-full"
                                />
                            </ScrollReveal>
                            <ScrollReveal delayMs={220}>
                                <FeatureCard
                                    icon={cards[2].icon}
                                    title={cards[2].title}
                                    description={cards[2].description}
                                    className="h-full"
                                />
                            </ScrollReveal>
                        </div>

                
                        <ScrollReveal delayMs={280}>
                            <div className="group flex items-center justify-around rounded-2xl border border-white/8 bg-zinc-900/60 px-6 py-5 transition-all duration-300 hover:border-accent/60 hover:bg-zinc-900/80">
                                {highlights.map((h, i) => (
                                    <div key={i} className="text-center">
                                        <p className="text-2xl font-bold text-accent sm:text-3xl">{h.value}</p>
                                        <p className="mt-1 text-xs text-zinc-400">{h.label}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </div>
        </section>
    );
}