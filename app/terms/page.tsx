import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import LegalPage from "@/components/LegalPage";

export const metadata = buildMetadata({ title: "Terms & Conditions", path: "/terms" });

export default function TermsPage() {
  return (
    <LegalPage title="Terms &amp; Conditions">
      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">1. Acceptance of Terms</h2>
        <p>By accessing and using <strong>{siteConfig.siteName}</strong> (<strong>{siteConfig.domain}</strong>), you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use this site.</p>
      </section>
      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">2. Use of the Site</h2>
        <p>{siteConfig.siteName} provides free browser-based games for entertainment purposes only. You agree to use the site lawfully and not to engage in any activity that disrupts or interferes with the site&apos;s operation.</p>
      </section>
      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">3. Intellectual Property</h2>
        <p>Games embedded on this site are the property of their respective developers and publishers. {siteConfig.siteName} does not claim ownership of any third-party game content. All game trademarks, logos, and assets belong to their respective owners. {siteConfig.game.sourceAttribution}.</p>
        <p className="mt-3">The website design, text, and original content of {siteConfig.siteName} are protected by copyright. Unauthorized reproduction is prohibited.</p>
      </section>
      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">4. Third-Party Content</h2>
        <p>This site contains embedded content from third-party providers. We are not responsible for the content, functionality, or availability of third-party games. Use of third-party content is subject to the respective provider&apos;s terms.</p>
      </section>
      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">5. Disclaimer of Warranties</h2>
        <p>{siteConfig.siteName} is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee uninterrupted service, error-free operation, or that embedded games will be available at all times.</p>
      </section>
      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">6. Limitation of Liability</h2>
        <p>{siteConfig.siteName} and its operators shall not be liable for any damages arising from the use or inability to use this site, including but not limited to direct, indirect, incidental, or consequential damages.</p>
      </section>
      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">7. Changes to Terms</h2>
        <p>We reserve the right to update these Terms at any time. Changes take effect upon posting. Your continued use of the site after changes constitutes acceptance of the revised Terms.</p>
      </section>
      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">8. Contact</h2>
        <p>For questions about these Terms, contact us at{" "}<a href={`mailto:${siteConfig.contact.email}`} className="text-primary underline">{siteConfig.contact.email}</a>.</p>
      </section>
    </LegalPage>
  );
}
