"use client";

import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site.config";

export default function GameEmbed() {
  const [state, setState] = useState<"idle" | "loading" | "playing">("idle");
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load persisted like / favorite state
  useEffect(() => {
    setLiked(localStorage.getItem("ed_liked") === "true");
    setDisliked(localStorage.getItem("ed_disliked") === "true");
  }, []);

  // Simulate a brief loading window before showing the iframe
  useEffect(() => {
    if (state === "loading") {
      const timer = setTimeout(() => setState("playing"), 600);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const aspectRatio = siteConfig.game.aspectRatio;

  const handleLike = () => {
    const next = !liked;
    setLiked(next);
    localStorage.setItem("ed_liked", String(next));
  };

  const handleDislike = () => {
    const next = !disliked;
    setDisliked(next);
    localStorage.setItem("ed_disliked", String(next));
  };

  const handleReload = () => {
    setRefreshKey((k) => k + 1);
  };

  const handleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Fixed-aspect container to prevent CLS */}
      <div
        ref={containerRef}
        className="relative w-full rounded-xl2 overflow-hidden shadow-lg bg-gray-100"
        style={{ aspectRatio }}
      >
        {/* ── Background + overlay — shown from idle through loading ── */}
        {state !== "playing" && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center scale-110"
              style={{
                backgroundImage: `url(${siteConfig.game.coverImage})`,
                filter: "blur(12px)",
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45" />
          </>
        )}

        {/* ── Idle: Play button ── */}
        {state === "idle" && (
          <div className="absolute inset-0 flex items-center justify-center">
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

        {/* ── Loading: Spinner on top of background ── */}
        {state === "loading" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            <p className="text-white/70 text-sm font-medium">
              Loading {siteConfig.game.name}...
            </p>
          </div>
        )}

        {/* ── Playing: iframe ── */}
        {state === "playing" && (
          <>
            <iframe
              key={refreshKey}
              src={siteConfig.game.embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              title={siteConfig.game.name}
              loading="lazy"
            />
          </>
        )}

        {/* Bottom-right action toolbar — always visible */}
        <div className="absolute bottom-3 right-3 z-30 flex items-center gap-2">
          {/* Like */}
          <button
            onClick={handleLike}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
            title="Like"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill={liked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
              <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
          </button>

          {/* Dislike */}
          <button
            onClick={handleDislike}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
            title="Dislike"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill={disliked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z" />
              <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
            </svg>
          </button>

          {/* Reload */}
          <button
            onClick={handleReload}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
            title="Reload"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
          </button>

          {/* Fullscreen */}
          <button
            onClick={handleFullscreen}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
            title="Fullscreen"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3" />
              <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
              <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
              <path d="M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
