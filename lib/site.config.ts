/**
 * Site configuration — the single source of truth for the entire game site.
 * When creating a new game site, only edit this file and replace images in /public.
 */
export const siteConfig = {
  /** Display name shown in header, footer, and browser title. */
  siteName: "Electron Dash",

  /** Canonical domain, no trailing slash. Used for sitemap, OG URLs, etc. */
  domain: "https://electrondash.site",

  seo: {
    /** Homepage <title>. Used as-is on the homepage. */
    title: "Play Electron Dash Online Free | Electron Dash",

    /**
     * Homepage meta description, keep under 160 characters.
     * Describe what the game is and that it's free to play online.
     */
    description:
      "Play Electron Dash online for free. Run through a space tunnel, jump over gaps, dodge lasers, and collect extra lives — no download required.",

    /** Comma-separated keywords for the homepage. */
    keywords: ["electron dash", "electron dash game", "play electron dash online", "electron dash controls", "free endless runner", "space tunnel game"],

    /** Social sharing image, 1200x630px. Replace /public/og-image.png. */
    ogImage: "/og-image.png",

    /** Twitter/X handle, can be left empty. */
    twitterHandle: "",
  },

  game: {
    /** Name of the game, shown in Hero, JSON-LD, etc. */
    name: "Electron Dash",

    /** Genre(s) for JSON-LD VideoGame.genre. e.g. ["Sports", "Basketball"]. */
    genre: ["Arcade", "Action", "Endless Runner"],

    /** iframe embed URL — must be manually replaced with the real embeddable URL. */
    embedUrl: "https://onegamez.github.io/electro-dash",

    /** Aspect ratio of the embedded game, used to prevent CLS. */
    aspectRatio: "16 / 9",

    /** Cover image shown on the idle/launch screen. Replace /public/cover.jpg. */
    coverImage: "/electrondash-cover.png",

    /** Age rating for the game. */
    ageRating: "Everyone",

    /** Attribution displayed below the game and in the footer. */
    sourceAttribution:
      "Electron Dash is also available on Coolmath Games and Math Playground",

    /** YouTube video ID for the gameplay trailer / walkthrough. Leave empty to hide the video section. */
    youtubeVideoId: "gpKUKoEQZOE",
  },

  theme: {
    /**
     * Bright & playful color palette.
     * Adjust per-game to match its visual style, but keep the overall bright tone.
     */
    primary: "#0e7490",
    secondary: "#6366f1",
    background: "#f0f6fc",
    surface: "#e2ecf5",
    textDark: "#0f172a",
    fontHeading: "'Nunito', sans-serif",
    fontBody: "'Quicksand', sans-serif",
  },

  contact: {
    /** Contact email shown on /contact and in legal pages. */
    email: "contact@electrondash.site",
  },

  legal: {
    /** Last updated date for Privacy / Terms pages. */
    lastUpdated: "2026-07-10",
  },

  ads: {
    /**
     * AdSense client ID — read from NEXT_PUBLIC_ADSENSE_CLIENT_ID env var.
     * When set, the AdSense head script is injected on every page.
     */
    clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "",

    /**
     * Whether ad placement slots are rendered on the page.
     * Keep false until you're ready to show real ads and have set clientId.
     */
    enabled: false,
  },

  analytics: {
    /** Google Analytics 4 measurement ID — read from NEXT_PUBLIC_GA_ID env var. Leave empty to skip GA. */
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
    /** Google Search Console verification code. Leave empty to skip. */
    gscVerification: "",
  },
};

export type SiteConfig = typeof siteConfig;
