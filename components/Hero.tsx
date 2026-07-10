import { siteConfig } from "@/lib/site.config";
import GameEmbed from "./GameEmbed";

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-12 pb-4 sm:pt-16 sm:pb-6 px-4">
      {/* Floating blob decorations */}
      <div className="blob-decoration blob-decoration--1" />
      <div className="blob-decoration blob-decoration--2" />
      <div className="blob-decoration blob-decoration--3" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Game embed (idle launch screen visible immediately) */}
        <GameEmbed />
      </div>
    </section>
  );
}
