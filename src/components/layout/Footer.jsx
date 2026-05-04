import { Code2, Heart, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import ScrollReveal from "../animations/ScrollReveal";

const quickLinks = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Services", "services"],
  ["Contact", "contact"],
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">

          <ScrollReveal delayMs={0} y={24}>
            <div>
              <div className="flex items-center gap-2">
                <Code2 className="h-7 w-7 text-white" strokeWidth={2.25} />
                <span className="text-2xl font-bold tracking-tight bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(74,222,128,1)_50%)] bg-clip-text text-transparent">
                  Krif
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
                Crafting seamless digital experiences with modern web technologies.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="mailto:krif014@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-surface px-4 py-3 transition hover:border-accent/40 hover:shadow-glow"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-sm text-white">krif014@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 rounded-xl border cursor-pointer hover:border-accent/40 hover:shadow-glow border-white/10 bg-surface px-4 py-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-sm text-white">Kigali, RW</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100} y={24}>
            <div>
              <h3 className="text-sm font-semibold text-white">Quick Links</h3>
              <ul className="mt-5 space-y-3  text-zinc-400 transition">
                {quickLinks.map(([label, id]) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(id)}
                      className="flex items-center gap-2 text-sm  hover:text-accent hover:scale-110 hover:translate-x-1 transition"
                    >
                      • {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={200} y={24}>
            <div>
              <h3 className="text-sm font-semibold text-white">Connect With Me</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Let&apos;s connect and create something amazing together.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { Icon: SiGithub, href: "#", label: "GitHub" },
                  { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
                  { Icon: FaXTwitter, href: "#", label: "X" },
                  { Icon: FaInstagram, href: "#", label: "Website" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-surface text-zinc-200 transition hover:scale-[1.04] hover:border-accent/50 hover:text-accent"
                  >
                    <span
                      className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 20%, rgba(74,222,128,0.18), transparent 55%)",
                      }}
                      aria-hidden
                    />
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

        <ScrollReveal delayMs={300} y={16}>
          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row">
              <p>© {new Date().getFullYear()} Krif. All rights reserved.</p>
              <p className="flex items-center gap-1.5">
                Built with{" "}
                <Heart className="inline h-3.5 w-3.5 animate-pulse fill-accent text-accent" />{" "}
                using React &amp; Tailwind CSS
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
}
