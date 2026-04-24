import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, delayMs = 0, y = 24, once = false }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                } else if (!once) {
                    setVisible(false);
                }
            },
            { threshold: 0, rootMargin: "-50% 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [once]);

    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : `translateY(${y}px)`,
                transition: `opacity 0.6s ease ${delayMs}ms, transform 0.6s ease ${delayMs}ms`,
            }}
        >
            {children}
        </div>
    );
}