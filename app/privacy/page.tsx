import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import LegalPage from "@/components/LegalPage";

export const metadata = buildMetadata({ title: "Privacy Policy", path: "/privacy" });

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          1. Information We Collect
        </h2>
        <p>
          When you visit <strong>{siteConfig.siteName}</strong> (
          <strong>{siteConfig.domain}</strong>), we may collect certain
          information automatically, including your IP address, browser type,
          operating system, referring URLs, and pages visited. This data is
          collected via standard web server logs and analytics tools.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          2. Cookies
        </h2>
        <p>
          Our site may use cookies and similar tracking technologies to
          enhance your browsing experience, analyze site traffic, and serve
          personalized advertisements where applicable. You can configure
          your browser to refuse cookies or alert you when cookies are being
          sent.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          3. Third-Party Services
        </h2>
        <p>
          We may use third-party services such as Google Analytics and Google
          AdSense. These services may collect data according to their own
          privacy policies. We encourage you to review Google&apos;s Privacy
          Policy at{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            policies.google.com/privacy
          </a>
          .
        </p>
        <p className="mt-3">
          Embedded games on {siteConfig.siteName} are hosted by third-party
          providers. We do not control the data collection practices of
          these third-party game hosts.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          4. Advertising
        </h2>
        <p>
          This site may display advertisements served by Google AdSense or
          other advertising partners. These partners may use cookies to serve
          ads based on your prior visits to this website or other websites.
          You can opt out of personalized advertising by visiting{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Google Ads Settings
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          5. Children&apos;s Privacy
        </h2>
        <p>
          {siteConfig.siteName} does not knowingly collect personal
          information from children under the age of 13. If you believe a
          child has provided us with personal data, please contact us
          immediately.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          6. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will
          be posted on this page with an updated &quot;Last updated&quot; date.
          Continued use of the site after changes constitutes acceptance.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          7. Contact
        </h2>
        <p>
          For questions about this Privacy Policy, contact us at{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-primary underline"
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
