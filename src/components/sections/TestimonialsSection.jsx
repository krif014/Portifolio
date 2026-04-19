import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "../../data/testimonials";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-accent" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-lg leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[index];

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  useEffect(() => {
    const id = setInterval(next, 8000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative overflow-hidden border-b border-white/5 py-16 sm:py-24">
      <RadialGradientBackground className="opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            <Quote className="h-3.5 w-3.5" />
            Testimonials
          </div>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Trusted by forward-thinking teams
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Empowering clients with design-driven, high-quality solutions built
            for success.
          </p>
        </div>

        <div className="relative mt-14 flex items-stretch gap-4 lg:gap-8">
          <button
            type="button"
            onClick={prev}
            className="hidden h-12 w-12 shrink-0 self-center rounded-full border border-white/10 bg-surface text-zinc-300 transition hover:border-accent/50 hover:text-white md:flex md:items-center md:justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="grid flex-1 gap-8 overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-6 sm:p-8 lg:grid-cols-2 lg:p-10">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={t.image}
                alt=""
                className="h-full min-h-[280px] w-full object-cover grayscale transition duration-500 hover:grayscale-0 lg:min-h-[360px]"
              />
              {t.badge ? (
                <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-black/65 px-4 py-3 backdrop-blur-md">
                  <p className="text-2xl font-bold text-accent">{t.badge.value}</p>
                  <p className="text-xs font-medium text-white">{t.badge.label}</p>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col justify-center">
              <Quote
                className="h-10 w-10 text-accent opacity-90 sm:h-12 sm:w-12"
                strokeWidth={1.25}
              />
              <blockquote className="mt-4 text-lg leading-relaxed text-white sm:text-xl">
                {t.quote}
              </blockquote>
              <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-zinc-400">
                    {t.role}, {t.company}
                  </p>
                </div>
                <Stars count={t.rating} />
              </div>

              <div className="mt-8 flex justify-center gap-2 md:hidden">
                <button
                  type="button"
                  onClick={prev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface text-zinc-300"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface text-zinc-300"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            className="hidden h-12 w-12 shrink-0 self-center rounded-full border border-white/10 bg-surface text-zinc-300 transition hover:border-accent/50 hover:text-white md:flex md:items-center md:justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-white"
                  : "w-2 bg-zinc-600 hover:bg-zinc-500"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
