export default function RadialGradientBackground({
  className = "",
  position = "center",
}) {
  const posClass =
    position === "right"
      ? "right-0 top-1/4 translate-x-1/3"
      : position === "left"
        ? "left-0 top-1/2 -translate-x-1/3"
        : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";

  return (
    <div
      className={`pointer-events-none absolute ${posClass} h-[min(90vw,640px)] w-[min(90vw,640px)] rounded-full bg-accent/20 blur-[100px] opacity-35 ${className}`}
      aria-hidden
    />
  );
}
