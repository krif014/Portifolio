import { Code2, Globe, Heart, Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

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
          <div>
            <div className="flex items-center gap-2 text-accent">
              <Code2 className="h-7 w-7" strokeWidth={2.25} />
              <span className="text-2xl font-bold text-accent">Krif</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Crafting seamless digital experiences with modern web
              technologies.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:Krif@timetoprogram.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-surface px-4 py-3 transition hover:border-accent/40 hover:shadow-glow"
              >
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-sm text-white">Krif@timetoprogram.com</span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-surface px-4 py-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm text-white">San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map(([label, id]) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(id)}
                    className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                  >
                    <span className="text-zinc-600">•</span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

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
                { Icon: Globe, href: "#", label: "Website" },
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
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Krif Johnson. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Built with{" "}
              <Heart className="inline h-3.5 w-3.5 animate-pulse fill-accent text-accent" />{" "}
              using React &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
