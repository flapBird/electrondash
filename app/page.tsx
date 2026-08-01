import Image from "next/image";
import { buildFaqJsonLd, buildMetadata, buildVideoGameJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import Hero from "@/components/Hero";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";
import AdSlot from "@/components/AdSlot";
import HomepageCanonical from "@/components/HomepageCanonical";

export const metadata = buildMetadata({ path: "/", includeCanonical: false });

const faqs = [
  {
    question: "What is Electron Dash?",
    answer:
      "Electron Dash is a fast endless runner set inside a glowing space tunnel. Your runner moves forward automatically while you steer across the floor and walls, jump over gaps, avoid lasers, and collect extra lives.",
  },
  {
    question: "What are the controls for Electron Dash?",
    answer:
      "On desktop, use the Left and Right Arrow keys or A and D to move. Press Up, W, or Space to jump. On a phone or tablet, use the left, right, and up arrow buttons shown inside the game.",
  },
  {
    question: "Can you run on the walls?",
    answer:
      "Yes. Moving far enough to either side carries your runner onto the tunnel wall. Wall running is useful when the floor ahead has a large gap, but you still need to watch for lasers and missing sections.",
  },
  {
    question: "What do the red hearts do?",
    answer:
      "A red heart gives you another life. When a life is used, the runner is briefly protected, giving you a moment to recover and land on a safe part of the tunnel.",
  },
  {
    question: "Is Electron Dash free to play?",
    answer:
      "Yes. You can play Electron Dash here in a modern web browser without creating an account or downloading an app.",
  },
  {
    question: "Does Electron Dash work on mobile?",
    answer:
      "The game includes touch controls for supported mobile browsers. For the clearest view, rotate your device to landscape and use fullscreen mode after the game loads.",
  },
] as const;

const quickFacts = [
  {
    label: "Goal",
    value: "Run as far as possible",
    icon: "↗",
  },
  {
    label: "Watch for",
    value: "Gaps, lasers, falling tiles",
    icon: "⚡",
  },
  {
    label: "Collect",
    value: "Red hearts for extra lives",
    icon: "♥",
  },
];

export default function HomePage() {
  return (
    <>
      <HomepageCanonical href={`${siteConfig.domain}/`} />
      <SchemaMarkup jsonLd={buildVideoGameJsonLd()} />
      <SchemaMarkup jsonLd={buildFaqJsonLd(faqs)} />
      <Hero />

      <SidebarLayout>
        <article className="space-y-14 sm:space-y-16">
          <section aria-labelledby="about-game">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">
                  Quick overview
                </p>
                <h2
                  id="about-game"
                  className="font-heading text-3xl font-extrabold tracking-tight text-text-dark"
                >
                  What kind of game is Electron Dash?
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-[1.02rem] leading-8 text-slate-700">
              <p>
                Electron Dash is an endless runner built around quick decisions.
                An intergalactic runner moves forward through a round, neon-lit
                tunnel while you choose the safest route across the floor and
                side walls. The run ends when you miss a safe landing and have no
                lives left.
              </p>
              <p>
                The idea is easy to understand, but the tunnel rarely gives you
                much time to settle. Open spaces break up the path, light-blue
                tiles fall after you touch them, and laser beams force sudden
                changes of direction. Red hearts are worth taking a small risk
                for because each one adds another life.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-lg font-bold text-primary">
                    {fact.icon}
                  </span>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {fact.label}
                  </p>
                  <p className="mt-1 font-heading font-bold text-slate-900">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <figure>
            <Image
              src="/electrondash-desc-1.jpeg"
              alt="Electron Dash runner entering a blue grid-lined space tunnel"
              width={723}
              height={276}
              sizes="(max-width: 896px) 100vw, 896px"
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-lg shadow-slate-300/40"
            />
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              The tunnel can be crossed on the floor or along either wall.
            </figcaption>
          </figure>

          <section
            id="how-to-play"
            className="scroll-mt-24"
            aria-labelledby="how-to-play-title"
          >
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Getting started
            </p>
            <h2
              id="how-to-play-title"
              className="font-heading text-3xl font-extrabold tracking-tight text-text-dark"
            >
              How to play Electron Dash
            </h2>
            <p className="mt-4 max-w-3xl text-[1.02rem] leading-8 text-slate-700">
              You do not need to control the runner&apos;s speed. Your job is to
              read the tunnel ahead, move toward a safe surface, and jump at the
              right moment.
            </p>

            <ol className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Scan ahead",
                  text: "Look past your runner for gaps, lasers, and pale-blue tiles. A safe route may continue onto a wall.",
                },
                {
                  title: "Move early",
                  text: "Use left or right before an obstacle reaches you. Last-second direction changes are much harder to control.",
                },
                {
                  title: "Time the jump",
                  text: "Jump once you have a clear landing. Repeated jumps make it harder to adjust your position in the air.",
                },
              ].map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl bg-slate-900 p-6 text-slate-200"
                >
                  <span className="text-sm font-extrabold text-cyan-300">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section
            id="controls"
            className="scroll-mt-24 rounded-3xl border border-cyan-100 bg-cyan-50/70 p-6 sm:p-8"
            aria-labelledby="controls-title"
          >
            <h2
              id="controls-title"
              className="font-heading text-2xl font-extrabold text-text-dark"
            >
              Electron Dash controls
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="font-heading font-bold text-slate-900">
                  Desktop
                </p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex items-start justify-between gap-5">
                    <dt className="text-slate-600">Move left or right</dt>
                    <dd className="text-right font-bold text-slate-900">
                      ← → or A / D
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-5">
                    <dt className="text-slate-600">Jump</dt>
                    <dd className="text-right font-bold text-slate-900">
                      ↑, W, or Space
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="font-heading font-bold text-slate-900">
                  Phone or tablet
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Use the left and right arrow buttons to move. Tap the up arrow
                  to jump. Landscape orientation gives the game more room, and
                  fullscreen mode keeps the controls easier to see.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="tips-title">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Better runs
            </p>
            <h2
              id="tips-title"
              className="font-heading text-3xl font-extrabold tracking-tight text-text-dark"
            >
              Useful tips that make a difference
            </h2>
            <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {[
                {
                  title: "Use the walls",
                  text: "The floor is not always the safest line. Start moving sideways early and let the tunnel carry you onto a wall.",
                },
                {
                  title: "Treat blue tiles as temporary",
                  text: "Light-blue sections drop after you run over them. Keep moving and avoid planning your next landing on the same tile.",
                },
                {
                  title: "Do not chase every heart",
                  text: "Extra lives are valuable, but a heart placed behind a laser or wide gap may cost the life you were trying to gain.",
                },
                {
                  title: "Use the recovery window",
                  text: "After losing a life, the brief protection period is a chance to steer back toward a solid, central part of the tunnel.",
                },
              ].map((tip) => (
                <div key={tip.title} className="flex gap-4">
                  <span
                    className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.75)]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900">
                      {tip.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {tip.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <figure>
            <Image
              src="/electrondash-desc-2.png"
              alt="Electron Dash gameplay with an astronaut running beside an opening in the tunnel"
              width={1770}
              height={946}
              sizes="(max-width: 896px) 100vw, 896px"
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-lg shadow-slate-300/40"
            />
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              Watch the full width of the tunnel: openings can appear on the
              floor or either side.
            </figcaption>
          </figure>

          <section
            id="faq"
            className="scroll-mt-24"
            aria-labelledby="faq-title"
          >
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Common questions
            </p>
            <h2
              id="faq-title"
              className="font-heading text-3xl font-extrabold tracking-tight text-text-dark"
            >
              Electron Dash FAQ
            </h2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
              {faqs.map((item, index) => (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading font-bold text-slate-900">
                    {item.question}
                    <span
                      className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-slate-100 text-lg text-primary transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pt-3 text-sm leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {siteConfig.game.youtubeVideoId && (
            <section aria-labelledby="gameplay-video-title">
              <h2
                id="gameplay-video-title"
                className="font-heading text-3xl font-extrabold tracking-tight text-text-dark"
              >
                Watch an Electron Dash run
              </h2>
              <p className="mt-3 text-slate-600">
                A short gameplay video can help with wall movement and jump
                timing before your first run.
              </p>
              <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${siteConfig.game.youtubeVideoId}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Electron Dash gameplay video"
                />
              </div>
            </section>
          )}

          <aside className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600">
            <p>
              Gameplay details were checked against the current instructions on{" "}
              <a
                href="https://www.coolmathgames.com/0-electron-dash"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-cyan-300 underline-offset-4"
              >
                Coolmath Games
              </a>{" "}
              and{" "}
              <a
                href="https://www.mathplayground.com/pg_electron_dash.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-cyan-300 underline-offset-4"
              >
                Math Playground
              </a>
              . This is an independent guide and is not an official page for
              either publisher.
            </p>
          </aside>
        </article>

        <AdSlot type="banner" className="my-8" />
      </SidebarLayout>
    </>
  );
}
