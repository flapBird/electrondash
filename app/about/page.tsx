import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn why Electron Dash exists, how our independent gameplay guide is maintained, and what to expect when playing the game on this site.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">
        About this site
      </p>
      <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-text-dark sm:text-5xl">
        About {siteConfig.siteName}
      </h1>
      <div className="space-y-5 text-[1.02rem] leading-8 text-slate-700">
        <p>
          {siteConfig.siteName} is a small, independent site made for one
          purpose: helping people get into Electron Dash without digging
          through menus, downloads, or a long tutorial. The game loads in the
          browser, and the guide below it explains the controls, obstacles, and
          a few habits that make early runs less frustrating.
        </p>
        <p>
          We keep the site focused on the game itself. There are no accounts to
          create and no app to install. On desktop, Electron Dash works with a
          keyboard. Supported mobile browsers use the game&apos;s on-screen
          controls, with landscape mode recommended for a clearer view of the
          tunnel.
        </p>
        <p>
          The written guide is based on hands-on checks and the published
          instructions from established game portals. We revise it when the
          controls or game behavior change, rather than padding the page with
          generic tips. If you notice something that no longer matches the
          current game, please send us a note through the{" "}
          <a
            href="/contact"
            className="font-semibold text-primary underline decoration-cyan-300 underline-offset-4"
          >
            contact page
          </a>
          .
        </p>
        <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5 text-sm leading-7 text-slate-600">
          <strong className="text-slate-900">Independent site notice:</strong>{" "}
          {siteConfig.siteName} is not affiliated with Coolmath Games or Math
          Playground. Electron Dash, its name, and its game assets belong to
          their respective owners.
        </div>
      </div>
    </div>
  );
}
