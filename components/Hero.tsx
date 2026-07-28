import { siteConfig } from "@/lib/site.config";
import GameEmbed from "./GameEmbed";

export default function Hero() {
  return (
    <section
      id="play"
      className="hero-gradient relative scroll-mt-16 overflow-hidden px-4 pb-10 pt-10 sm:pb-14 sm:pt-14"
    >
      <div className="blob-decoration blob-decoration--1" />
      <div className="blob-decoration blob-decoration--2" />
      <div className="blob-decoration blob-decoration--3" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <h1 className="sr-only">Play {siteConfig.game.name} Online</h1>

        <GameEmbed />

        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-400">
          Desktop: use the arrow keys or WASD. Press Up, W, or Space to jump.
          On mobile, use the on-screen arrow controls.
        </p>
      </div>
    </section>
  );
}
