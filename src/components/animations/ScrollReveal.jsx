import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  y = 16,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition duration-700 will-change-transform ${className} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0"
      }`}
      style={
        visible
          ? { transitionDelay: `${delayMs}ms` }
          : {
              transform: `translateY(${y}px)`,
              transitionDelay: `${delayMs}ms`,
            }
      }
    >
      {children}
    </div>
  );
}