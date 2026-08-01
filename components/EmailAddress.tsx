interface EmailAddressProps {
  email: string;
  className?: string;
}

/**
 * Render an email address in separate text nodes so Cloudflare's email
 * obfuscation does not replace it with a /cdn-cgi/l/email-protection link.
 *
 * Do not add a mailto: href here: it would expose the full address in the
 * HTML and allow Cloudflare to rewrite it despite the split visible text.
 */
export default function EmailAddress({
  email,
  className,
}: EmailAddressProps) {
  const [localPart, domain] = email.split("@");

  return (
    <span className={className}>
      {localPart}
      <span>@</span>
      {domain}
    </span>
  );
}
