"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site.config";

export default function GameEmbed() {
  const [state, setState] = useState<"idle" | "loading" | "playing">("idle");

  // Simulate a brief loading window before showing the iframe
  useEffect(() => {
    if (state === "loading") {
      const timer = setTimeout(() => setState("playing"), 600);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const aspectRatio = siteConfig.game.aspectRatio;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Fixed-aspect container to prevent CLS */}
      <div
        className="relative w-full rounded-xl2 overflow-hidden shadow-lg bg-gray-100"
        style={{ aspectRatio }}
      >
        {/* ── Idle: Launch screen ── */}
       {state === "idle" && (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Blurred background */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-110"
              style={{
                backgroundImage: `url(${siteConfig.game.coverImage})`,
                filter: 'blur(12px)',
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Play button */}
            <button
              onClick={() => setState("loading")}
              className="btn-play relative z-10 bg-primary hover:bg-primary/90 text-white font-heading font-bold text-xl px-10 py-4 rounded-full shadow-xl flex items-center gap-2"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Play Now
            </button>
          </div>
        )}

        {/* ── Loading: Spinner ── */}
        {state === "loading" && (
          <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            <p className="text-text-dark/50 text-sm font-medium">
              Loading {siteConfig.game.name}...
            </p>
          </div>
        )}

        {/* ── Playing: iframe ── */}
        {state === "playing" && (
          <iframe
            src={siteConfig.game.embedUrl}
            className="absolute inset-0 w-full h-full"
            style={{ aspectRatio }}
            allow="autoplay; fullscreen"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            title={siteConfig.game.name}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
