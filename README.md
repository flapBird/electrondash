# Electrondash

[**electrondash.site**](https://electrondash.site/) — a single-page game site for *Electron Dash*, built with Next.js.

## About

Electrondash is a dedicated game website centered around a single game: Electron Dash. It embeds the game via iframe and provides supporting content — how to play, controls, features, FAQs, and a gameplay video — all in one clean page.

The project was originally scaffolded from a generic game-site template and customized to fit the specific game.

## Game

**Electron Dash** is a reflex-based endless runner set inside a neon space tunnel. The runner moves forward automatically while you steer across the floor and walls, jump over gaps, avoid lasers and falling tiles, and collect red hearts for extra lives.

- [Play the game](https://electrondash.site/)
- Controls: Left/Right or A/D to move, Up/W/Space to jump
- Touch: use the on-screen left, right, and up arrow controls

## Tech stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Nunito (headings) + Quicksand (body), served via next/font
- **Deployment**: Prerendered Next.js routes, ready for Vercel or a compatible Next.js host

## Project structure

```
app/
  layout.tsx         # Root layout with fonts, GA, AdSense scripts
  page.tsx           # Homepage: game embed + intro, how-to, features, FAQ, video
  globals.css        # Global styles, hero gradient, blob animations
  about/page.tsx     # About page
  contact/page.tsx   # Contact page
  privacy/page.tsx   # Privacy Policy
  terms/page.tsx     # Terms & Conditions
  robots.ts          # robots.txt
  sitemap.ts         # sitemap.xml

components/
  Header.tsx         # Sticky header with logo + site name
  Hero.tsx           # Game embed section with gradient background
  GameEmbed.tsx      # iframe wrapper with idle/loading/playing states, action toolbar
  Footer.tsx         # Site footer with nav links
  SidebarLayout.tsx  # Content layout container with optional ad sidebars
  AdSlot.tsx         # Ad placement placeholder
  SchemaMarkup.tsx   # JSON-LD script tag helper
  LegalPage.tsx      # Reusable template for privacy/terms pages

lib/
  site.config.ts     # Centralized site config (reads env vars for GA, AdSense)
  seo.ts             # Metadata builder + VideoGame JSON-LD builder
```

## Configuration

All site content lives in `lib/site.config.ts` — game name, embed URL, theme colors, contact info, etc.

Sensitive values (Google Analytics ID, AdSense client ID) are read from environment variables:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
```

See `.env.example` for the reference.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
```

The current routes are prerendered and can be deployed to Vercel or another
compatible Next.js host. To generate a standalone static export for a basic file
host, add `output: "export"` to `next.config.js` and verify the embed behavior in
that environment.

## License

MIT
