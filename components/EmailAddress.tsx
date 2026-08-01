interface EmailAddressProps {
  email: string;
  className?: string;
}

/**
 * Render an email address in separate text nodes so Cloudflare's email
 * obfuscation does not replace it with a /cdn-cgi/l/email-protection link.
 */
export default function EmailAddress({
  email,
  className,
}: EmailAddressProps) {
  const [localPart, domain] = email.split("@");

  return (
    <a href={`mailto:${email}`} className={className}>
      {localPart}
      <span>@</span>
      {domain}
    </a>
  );
}
