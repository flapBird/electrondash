import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({ title: "About", path: "/about" });

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-4">
        About {siteConfig.siteName}
      </h1>
      <div className="space-y-4 text-text-dark/80 leading-relaxed">
        <p>
          PLACEHOLDER: Write a unique About page for this game site (200-400 words).
          Explain what the site offers, who it&apos;s for, and what makes this game special.
          Do NOT copy-paste the same About text across multiple game sites — search
          engines penalize template content. Tailor the introduction, the game
          description, and the tone to the specific game genre and audience.
        </p>
        <p>
          PLACEHOLDER: Mention that all games on this site can be played for free
          directly in the browser, with no downloads or registration required. This
          kind of phrasing helps with long-tail search visibility.
        </p>
        <p>
          PLACEHOLDER: If the game developer has an official site or credits page,
          link to it here as a good-faith attribution gesture.
        </p>
      </div>
    </div>
  );
}
