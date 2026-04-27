import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CTO",
    company: "TechStart Inc",
    image: "/images/testmonials/person1.png",
    badge: { value: "3×", label: "Faster Delivery" },
    quote: '"Outstanding work on our React application. Krif delivered a high-performance, scalable solution that exceeded our expectations. The attention to detail and code quality was exceptional."',
    rating: 5,
  },
  {
    id: 6,
    name: "James Anderson",
    role: "Full Stack Developer",
    company: "DevCore",
    image: "/images/testmonials/person6.png",
    badge: { value: "2×", label: "Speed Improvement" },
    quote: '"Excellent collaboration and technical expertise throughout the entire development process. Krif designed a clean and scalable architecture that made the application easier to maintain."',
    rating: 5,
  },
  {
    id: 7,
    name: "Emily Johnson",
    role: "UI/UX Designer",
    company: "PixelCraft",
    image: "/images/testmonials/person7.png",
    badge: { value: "100%", label: "Design Accuracy" },
    quote: '"Krif has an incredible eye for detail and a strong understanding of modern UI/UX principles. The final product looked visually stunning while maintaining excellent performance across all devices."',
    rating: 5,
  },
  {
    id: 8,
    name: "David Wilson",
    role: "Tech Lead",
    company: "InnovateX",
    image: "images/dev3.jpg",
    badge: { value: "40%", label: "Cost Reduction" },
    quote: '"Reliable, highly skilled, and extremely efficient under pressure. Krif delivered robust and scalable solutions even within tight deadlines while maintaining excellent code quality throughout."',
    rating: 5,
  },
  {
    id: 5,
    name: "Sophia Williams",
    role: "CEO",
    company: "NextGen Solutions",
    image: "/images/testmonials/person5.png",
    badge: { value: "5★", label: "Top Rated" },
    quote: '"Krif delivered exactly what our company needed and exceeded expectations in multiple areas. The application performance, scalability, and overall user experience improved significantly."',
    rating: 5,
  },

  {
    id: 4,
    name: "Michael Brown",
    role: "Software Engineer",
    company: "CloudNet",
    image: "/images/testmonials/person4.png",
    badge: { value: "50+", label: "Projects Delivered" },
    quote: '"Krif consistently delivered clean, maintainable, and scalable code throughout the project. The problem-solving ability and technical understanding were outstanding. Collaboration was smooth."',
    rating: 5,
  },
  {
    id: 3,
    name: "Rachel Smith",
    role: "Startup Founder",
    company: "BrightLabs",
    image: "images/dev4.jpg",
    badge: { value: "100%", label: "On-Time Delivery" },
    quote: '"Working with Krif was an amazing experience from start to finish. The UI/UX quality, responsiveness, and smooth animations brought our vision to life perfectly. Every component felt polished."',
    rating: 5,
  },
  {
    id: 2,
    name: "Daniel Carter",
    role: "Product Manager",
    company: "Nova Systems",
    image: "images/dev22.jpeg",
    badge: { value: "98%", label: "Client Satisfaction" },
    quote: '"Krif is a highly professional developer with exceptional technical skills. The project was delivered on time with excellent performance optimization and clean code structure. Truly outstanding."',
    rating: 5,
  },
 
];

function Stars({ count }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-xl leading-none text-accent">★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[index];

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const id = setInterval(next, 8000);
    return () => clearInterval(id);
  }, [next]);

  const dotsCount = Math.ceil(total / 2);
  const dotIndex = Math.floor(index / 2);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-b border-white/5 bg-black py-20 sm:py-28"
    >
      <RadialGradientBackground className="opacity-20" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

       
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <Quote className="h-3.5 w-3.5" />
              Testimonials
            </div>
            <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-[52px] leading-tight">
              Trusted by forward-
              <br />
              thinking teams
            </h2>
            <p className="mt-4 text-sm text-zinc-400 sm:text-base">
              Empowering clients with design-driven, high-quality solutions built for
              <br />
              success.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-16">

    
          <button
            type="button"
            onClick={prev}
            className="absolute -left-6 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-zinc-300 backdrop-blur transition hover:border-accent/50 hover:text-accent lg:-left-16 lg:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute -right-6 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-zinc-300 backdrop-blur transition hover:border-accent/50 hover:text-accent lg:-right-16 lg:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

  
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">

            <ScrollReveal key={`img-${index}`} delayMs={0}>
              <div className="relative w-full overflow-hidden rounded-2xl lg:mx-0 lg:w-[260px] lg:flex-shrink-0 group">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full grayscale transition-all duration-700 group-hover:grayscale-0"
                  style={{
                    height: 340,
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
                
                {t.badge && (
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/60 px-4 py-3 backdrop-blur-sm border border-white/10">
                    <p className="text-2xl font-bold text-accent leading-none">{t.badge.value}</p>
                    <p className="mt-1 text-sm font-medium text-white">{t.badge.label}</p>
                  </div>
                )}

      
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-zinc-300 backdrop-blur-sm transition hover:border-accent/50 hover:text-accent lg:hidden"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-zinc-300 backdrop-blur-sm transition hover:border-accent/50 hover:text-accent lg:hidden"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal key={`quote-${index}`} delayMs={100}>
              <div className="flex flex-1 flex-col">
                <Quote className="h-9 w-9 text-[#4ade80]" strokeWidth={1.5} />
                <blockquote className="mt-5 text-lg font-medium leading-relaxed text-white sm:text-xl">
                  {t.quote}
                </blockquote>
                <div className="mt-8 flex items-end  justify-between gap-4">
                  <div>
                    <p className="text-base font-bold text-white">{t.name}</p>
                    <p className="mt-0.5 text-sm text-zinc-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <Stars count={t.rating} className="text-[#4ade80]" />
                </div>

      
                <div className="mt-8 flex justify-center gap-3 lg:hidden">
                  <button
                    type="button"
                    onClick={prev}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-zinc-300"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-zinc-300"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

 
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: dotsCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i * 2)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === dotIndex ? 32 : 8,
                  height: 8,
                  background: i === dotIndex ? "#4ade80" : "#3f3f46",
                }}
                aria-label={`Go to testimonial group ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}