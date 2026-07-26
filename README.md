# Electrondash

[**electrondash.site**](https://electrondash.site/) — a single-page game site for *Electron Dash*, built with Next.js.

## About

Electrondash is a dedicated game website centered around a single game: Electron Dash. It embeds the game via iframe and provides supporting content — how to play, controls, features, FAQs, and a gameplay video — all in one clean page.

The project was originally scaffolded from a generic game-site template and customized to fit the specific game.

## Game

**Electron Dash** is a reflex-based endless runner. You control an electron climbing upward through a cylindrical 3D tunnel. The platform beneath you crumbles after a few seconds, so you have to rotate left and right around the tube, find the next solid ledge, and jump — all while the speed keeps climbing. No levels, no power-ups, just you and the void.

- [Play the game](https://electrondash.site/)
- Controls: arrow keys (or A/D) to rotate, Up/Space to jump
- Touch: tap left/right to rotate, tap to jump

## Tech stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Nunito (headings) + Quicksand (body), served via next/font
- **Deployment**: Static export, ready for Vercel or any static host

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

The output is fully static and can be deployed to any static host or Vercel.

## License

MIT
