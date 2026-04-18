import ScrollReveal from "./ScrollReveal";

export default function FadeIn({ children, className = "", delayMs = 0 }) {
  return (
    <ScrollReveal className={className} delayMs={delayMs} y={10}>
      {children}
    </ScrollReveal>
  );
}