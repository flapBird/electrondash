import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({ title: "Contact", path: "/contact" });

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-4">
        Contact Us
      </h1>
      <p className="text-text-dark/70 leading-relaxed mb-8">
        Have feedback, bug reports, or partnership inquiries? We&apos;d love to
        hear from you.
      </p>

      {/* Email contact — will be replaced with a form later */}
      <div className="bg-surface rounded-xl p-6 border border-gray-100">
        <p className="text-sm text-text-dark/60 mb-2">Email us at:</p>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="text-primary font-medium text-lg hover:underline"
        >
          {siteConfig.contact.email}
        </a>
      </div>

      <p className="mt-8 text-sm text-text-dark/40">
        PLACEHOLDER: Contact form coming soon. This page currently uses a simple
        mailto link. Replace with a backend form handler when ready.
      </p>
    </div>
  );
}
