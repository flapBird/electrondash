import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import EmailAddress from "@/components/EmailAddress";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Electron Dash about game loading problems, incorrect gameplay information, accessibility feedback, or rights-related requests.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">
        Get in touch
      </p>
      <h1 className="mb-5 font-heading text-4xl font-extrabold tracking-tight text-text-dark sm:text-5xl">
        Contact Us
      </h1>
      <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-700">
        Send us a message if the game does not load, a control has changed, or
        something in the guide is inaccurate. Accessibility feedback and
        rights-related requests are also welcome.
      </p>

      <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50 p-6">
        <p className="mb-2 text-sm font-semibold text-slate-600">Email</p>
        <EmailAddress
          email={siteConfig.contact.email}
          className="break-all font-heading text-lg font-bold text-primary underline decoration-cyan-300 underline-offset-4"
        />
        <p className="mt-4 text-sm leading-6 text-slate-600">
          For a game issue, include your device, browser, and a short description
          of what happened. Please do not send passwords or other sensitive
          information.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="font-heading font-bold text-slate-900">
            Game or guide feedback
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Tell us which control, obstacle, or page section needs attention.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="font-heading font-bold text-slate-900">
            Copyright requests
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Identify the work, the relevant URL, and the basis for your request.
          </p>
        </div>
      </div>
    </div>
  );
}
