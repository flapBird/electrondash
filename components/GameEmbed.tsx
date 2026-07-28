"use client";

import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site.config";

export default function GameEmbed() {
  const [state, setState] = useState<
    "idle" | "loading" | "playing" | "error"
  >("idle");
  const [refreshKey, setRefreshKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state !== "loading") return;

    const timer = window.setTimeout(() => setState("error"), 15000);
    return () => window.clearTimeout(timer);
  }, [state]);

  const aspectRatio = siteConfig.game.aspectRatio;

  const startGame = () => {
    setState("loading");
    setRefreshKey((key) => key + 1);
  };

  const handleReload = () => {
    startGame();
  };

  const handleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;

    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void el.requestFullscreen().catch(() => {
        // Some mobile browsers do not expose the Fullscreen API.
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl rounded-[1.4rem] border border-cyan-300/45 bg-slate-950 p-1.5 shadow-[0_0_0_1px_rgba(8,145,178,0.18),0_24px_70px_rgba(2,6,23,0.72),0_0_42px_rgba(34,211,238,0.12)] sm:rounded-[2rem] sm:p-2.5">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-[1rem] border border-white/20 bg-black sm:rounded-[1.4rem]"
        style={{ aspectRatio }}
      >
        {(state === "loading" || state === "playing") && (
          <iframe
            key={refreshKey}
            src={siteConfig.game.embedUrl}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            referrerPolicy="strict-origin-when-cross-origin"
            title={`${siteConfig.game.name} game`}
            onLoad={() => setState("playing")}
          />
        )}

        {state !== "playing" && (
          <>
            <div
              className="absolute inset-0 scale-105 bg-cover bg-center"
              style={{
                backgroundImage: `url(${siteConfig.game.coverImage})`,
              }}
            />
            <div className="absolute inset-0 bg-slate-950/60" />
          </>
        )}

        {state === "idle" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <button
              onClick={startGame}
              className="btn-play relative z-10 flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-3 font-heading text-base font-bold text-slate-950 shadow-xl shadow-cyan-950/40 hover:bg-cyan-300 sm:px-10 sm:py-4 sm:text-xl"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Start Electron Dash
            </button>
            <span className="relative z-10 hidden text-sm text-white/70 sm:block">
              The game opens inside this page
            </span>
          </div>
        )}

        {state === "loading" && (
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4"
            role="status"
            aria-live="polite"
          >
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-cyan-300 sm:h-12 sm:w-12" />
            <p className="text-sm font-medium text-white/80">
              Loading {siteConfig.game.name}...
            </p>
          </div>
        )}

        {state === "error" && (
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 px-6 text-center"
            role="alert"
          >
            <p className="font-heading text-lg font-bold text-white">
              The game took too long to load
            </p>
            <p className="max-w-sm text-sm text-white/70">
              Check your connection and try again. Some privacy extensions may
              also block third-party games.
            </p>
            <button
              onClick={startGame}
              className="mt-1 rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-900 hover:bg-cyan-100"
            >
              Try again
            </button>
          </div>
        )}

        {state === "playing" && (
          <div
            className="absolute bottom-2 right-2 z-30 flex items-center gap-1.5 sm:bottom-3 sm:right-3 sm:gap-2"
            aria-label="Game controls"
            role="group"
          >
            <button
              onClick={handleReload}
              className="game-tool-button"
              aria-label="Reload game"
              title="Reload game"
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
            </button>

            <button
              onClick={handleFullscreen}
              className="game-tool-button"
              aria-label="Enter fullscreen"
              title="Enter fullscreen"
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                <path d="M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
