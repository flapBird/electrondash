import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site.config";

const navLinks = [
  { href: "/#how-to-play", label: "How to Play" },
  { href: "/#controls", label: "Controls" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-200">
            <Image
              src="/favicon.png"
              alt=""
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </span>
          <span className="font-heading font-bold text-lg text-text-dark group-hover:text-primary transition-colors">
            {siteConfig.siteName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-cyan-50 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#play"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary sm:hidden"
        >
          Play
        </Link>
      </div>
    </header>
  );
}
