export const filterTags = [
  { id: "all", label: "All", icon: "target" },
  { id: "web-apps", label: "Web Apps", icon: "globe" },
  { id: "ui-components", label: "UI Components", icon: "palette" },
  { id: "full-stack", label: "Full Stack", icon: "zap" },
];

export const projects = [
  {
    id: 1,
    title: "Aura Commerce",
    subtitle: "AURA COMMERCE",
    description:
      "A modern e-commerce platform with optimized checkout flow, secure payments, and an admin dashboard for inventory & orders.",
    category: "full-stack",
    displayCategory: "Full Stack",
    gradient: "from-violet-950/80 via-purple-900/40 to-indigo-950/80",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=760&fit=crop&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    metric: "40% increase in conversion",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Taskboard",
    subtitle: "Tashboard",
    description:
      "A collaborative task management dashboard with kanban boards, due dates, and activity tracking designed for teams.",
    category: "web-apps",
    displayCategory: "Web Apps",
    gradient: "from-slate-900 via-blue-950/70 to-slate-950",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=760&fit=crop&q=80",
    technologies: ["React", "Vite", "Tailwind CSS", "REST API"],
    metric: "500+ active users",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Aura Design System",
    subtitle: "AURA DESIGN SYSTEM",
    description:
      "A reusable UI component library with tokens, accessibility primitives, and documentation for consistent product design.",
    category: "ui-components",
    displayCategory: "UI Components",
    gradient: "from-fuchsia-950/60 via-purple-950/50 to-slate-950",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=760&fit=crop&q=80",
    technologies: ["React", "Storybook", "Tailwind CSS", "TypeScript"],
    metric: "2x faster UI delivery",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Realtime Chat",
    subtitle: "REALTIME MESSAGING",
    description:
      "A fast realtime chat app with typing indicators, presence, and secure authentication.",
    category: "full-stack",
    displayCategory: "Full Stack",
    gradient: "from-emerald-950/60 via-teal-950/60 to-slate-950",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=760&fit=crop&q=80",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    metric: "Latency under 100ms",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    subtitle: "INSIGHTS",
    description:
      "A dashboard for product metrics, cohorts, and performance reporting with interactive charts.",
    category: "web-apps",
    displayCategory: "Web Apps",
    gradient: "from-zinc-950 via-slate-950/70 to-indigo-950/40",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=760&fit=crop&q=80",
    technologies: ["React", "Charts", "Tailwind CSS", "API"],
    metric: "Improved monitoring efficiency",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export function projectMatchesFilter(project, filterId) {
  if (filterId === "all") return true;
  return project.category === filterId;
}
