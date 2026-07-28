import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-lg">
            <p className="font-heading text-lg font-bold text-white">
              {siteConfig.siteName}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              A focused, independent guide for playing Electron Dash in the
              browser. Game names and assets belong to their respective owners.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-3"
            aria-label="Footer navigation"
          >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-xs leading-relaxed text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.siteName}. This site is not
            affiliated with Math Playground or Coolmath Games.
          </p>
        </div>
      </div>
    </footer>
  );
}
