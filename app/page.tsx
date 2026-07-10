import { buildMetadata, buildVideoGameJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import Hero from "@/components/Hero";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";
import AdSlot from "@/components/AdSlot";

export const metadata = buildMetadata({ path: "/" });


export default function HomePage() {
  return (
    <>
      <SchemaMarkup jsonLd={buildVideoGameJsonLd()} />
      <Hero />
      <SidebarLayout>
        {/* Game content sections */}
        <article className="space-y-12">
          {/* ── Game Introduction ── */}
          <section>
           <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
             About the Game
           </h2>
           <p className="text-text-dark/70 leading-relaxed mb-4">
              Here's the deal: you're an electron trapped inside a cylindrical tunnel, and the 
              ground beneath you is falling apart — literally. Not slowly, either. You've got to 
              keep climbing upward, rotate left and right around the tube to find solid ledges, 
              and jump onto the next platform before the one you're standing on crumbles away.
           </p>
           <p className="text-text-dark/70 leading-relaxed">
              No story, no inventory, no upgrades — none of that. Just you, a neon-lit 3D tunnel, 
              and an endless upward climb that gets faster and meaner the longer you survive. 
              It's a free online reflex game that cuts straight to the chase: one bad jump and 
              you're done, but that's exactly what makes hitting a new high score feel so good.
           </p>
          </section>

          {/* ── Image: Gameplay screenshot ── */}
          <figure className="my-10">
            <img
              src="/electrondash-desc-1.jpeg"
              alt="Electron Dash gameplay showing the glowing electron dodging neon obstacles in a high-speed circuit-board course"
              className="w-full rounded-xl shadow-md"
            />
          </figure>

          {/* ── How to Play ── */}
          <section>
           <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
             How to Play
           </h2>
           <p className="text-text-dark/70 leading-relaxed mb-4">
              Your electron climbs upward on its own — you don't control the vertical movement. 
              What you do control is where you land. Use the left and right controls to rotate 
              around the tunnel and line yourself up with a solid platform, then jump onto it 
              before the one you're on gives way.
           </p>
           <p className="text-text-dark/70 leading-relaxed">
              As you climb higher, the platforms shrink and the speed ramps up. Miss a jump or 
              hesitate too long, and you'll fall into the void. The key is to stay calm, keep 
              scanning the full circle of the tube, and trust your timing. Panic-jumping is 
              the fastest way to lose.
           </p>
          </section>

          {/* ── Controls Quick Reference ── */}
          <section className="bg-surface rounded-xl p-6">
             <h3 className="font-heading font-bold text-lg text-text-dark mb-3">
               Controls
             </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="flex items-center gap-3">
                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold text-sm">
                   KB
                 </span>
                 <div>
                   <p className="font-semibold text-text-dark text-sm">Desktop</p>
                    <p className="text-text-dark/60 text-sm">&larr; &rarr; or A/D to rotate &middot; &uarr; or Space to jump</p>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10 text-secondary font-bold text-sm">
                   &#9758;
                 </span>
                 <div>
                   <p className="font-semibold text-text-dark text-sm">Mobile / Tablet</p>
                    <p className="text-text-dark/60 text-sm">Tap left/right to rotate &middot; tap to jump</p>
                 </div>
               </div>
            </div>
          </section>

          {/* ── Game Features ── */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
              Game Features
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-primary flex-shrink-0 mt-0.5">&raquo;</span>
                <div>
                  <strong className="text-text-dark">Neon Cyber Aesthetic</strong>
                  <span className="text-text-dark/70">
                    &nbsp;&mdash; A sleek, glowing circuit-board world with vibrant colors and 
                    smooth animations that make every run feel electric.
                  </span>
                </div>
              </li>
             <li className="flex gap-3">
               <span className="text-primary flex-shrink-0 mt-0.5">&raquo;</span>
               <div>
                  <strong className="text-text-dark">360&deg; Movement</strong>
                 <span className="text-text-dark/70">
                    &nbsp;&mdash; Rotate around the full circumference of the tube to find safe 
                    ledges. You're not stuck on a flat track — every angle is a possible path up.
                 </span>
               </div>
             </li>
             <li className="flex gap-3">
               <span className="text-primary flex-shrink-0 mt-0.5">&raquo;</span>
               <div>
                  <strong className="text-text-dark">Collapsing Floor</strong>
                 <span className="text-text-dark/70">
                    &nbsp;&mdash; Every platform crumbles after a few seconds. You can't stop and 
                    think — the ground disappears whether you're ready or not. That urgency is 
                    what keeps every round tense.
                 </span>
               </div>
             </li>
              <li className="flex gap-3">
                <span className="text-primary flex-shrink-0 mt-0.5">&raquo;</span>
                <div>
                  <strong className="text-text-dark">High Score Chasing</strong>
                  <span className="text-text-dark/70">
                    &nbsp;&mdash; Every run is a shot at beating your personal best. The game 
                    saves your top score locally, so there's always a target to aim for on your 
                    next go.
                  </span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary flex-shrink-0 mt-0.5">&raquo;</span>
                <div>
                  <strong className="text-text-dark">Free &amp; Browser-Based</strong>
                  <span className="text-text-dark/70">
                    &nbsp;&mdash; No download, no sign-up, no paywall. Open electrondash.site in 
                    any modern browser and start playing Electron Dash instantly.
                  </span>
                </div>
              </li>
            </ul>
          </section>

          {/* ── Image: Mobile play ── */}
          <figure className="my-10">
            <img
              src="/electrondash-desc-2.jpeg"
              alt="Electron Dash being played on a smartphone, showing the touch-friendly lane-switching interface"
              className="w-full rounded-xl shadow-md"
            />
          </figure>

          {/* ── FAQ ── */}
          <section>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
              FAQ
            </h2>
            <div className="space-y-6">
              <div>
               <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                 How do you play Electron Dash?
               </h3>
               <p className="text-text-dark/70 leading-relaxed">
                  You're inside a cylindrical tunnel, climbing upward automatically. Use the 
                  left/right controls to rotate around the tube, line up with a platform, and 
                  jump onto it before the floor crumbles beneath you. Miss the jump and you fall 
                  into the void — simple premise, but it gets hectic fast.
               </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                  Is Electron Dash free to play?
                </h3>
                <p className="text-text-dark/70 leading-relaxed">
                  Yep, completely free. No hidden costs, no subscriptions, no download required. 
                  Just open your browser and start playing.
                </p>
              </div>
              <div>
               <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                 Can I play Electron Dash on my phone?
               </h3>
               <p className="text-text-dark/70 leading-relaxed">
                  Yep, works great in a mobile browser. Tap the left or right side of the screen 
                  to rotate around the tube, and tap again to jump. The touch layout is simple 
                  enough that you can play one-handed.
               </p>
              </div>
              <div>
               <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                 What are the controls for Electron Dash?
               </h3>
               <p className="text-text-dark/70 leading-relaxed">
                  On desktop, use the left/right arrow keys (or A/D) to rotate around the tube, 
                  and the up arrow or spacebar to jump. On mobile, tap left or right 
                  to rotate, then tap the screen to jump. Two actions, that's everything.
               </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                  Is Electron Dash a two-player game?
                </h3>
                <p className="text-text-dark/70 leading-relaxed">
                  Nope, this one's a solo challenge. It's all about beating your own high score. 
                  That said, it's perfect for passing the phone back and forth to see who can 
                  last longer.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                  Does Electron Dash have levels or different game modes?
                </h3>
                <p className="text-text-dark/70 leading-relaxed">
                  No levels or modes &mdash; it's an endless runner, so every round is procedurally 
                  generated and different from the last. The only goal is to survive as long as 
                  you can and rack up the highest score possible.
                </p>
              </div>
              <div>
               <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                 Any tips for getting a high score in Electron Dash?
               </h3>
               <p className="text-text-dark/70 leading-relaxed">
                  Keep your eyes moving around the full circle of the tube. The next safe platform 
                  could be anywhere. Try to plan your next move while you're still on solid ground 
                  — once the floor starts crumbling, you're out of time. And seriously, don't 
                  spam the jump button. One precise jump beats five panicked ones.
               </p>
              </div>
              <div>
               <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                 What happens when you hit an obstacle?
               </h3>
               <p className="text-text-dark/70 leading-relaxed">
                  Miss a platform and you fall — that's game over. Your final height and score 
                  pop up, and you can restart immediately with one tap. No waiting, no penalties, 
                  just another shot at beating your record.
               </p>
              </div>
           </div>
         </section>

          {/* ── YouTube Gameplay Video ── */}
          {siteConfig.game.youtubeVideoId && (
            <section>
              <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
                Watch Gameplay
              </h2>
              <div className="aspect-video rounded-xl overflow-hidden shadow-md bg-gray-100">
                <iframe
                  src={`https://www.youtube.com/embed/${siteConfig.game.youtubeVideoId}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Electron Dash gameplay video"
                />
              </div>
            </section>
          )}
        </article>

        {/* Bottom banner ad */}
        <AdSlot type="banner" className="my-8" />
      </SidebarLayout>
    </>
  );
}
