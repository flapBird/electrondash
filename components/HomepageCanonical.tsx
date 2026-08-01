"use client";

import { useServerInsertedHTML } from "next/navigation";

interface HomepageCanonicalProps {
  href: string;
}

/**
 * Insert the homepage canonical into <head> without Next.js normalizing the
 * root URL to a slashless origin.
 */
export default function HomepageCanonical({
  href,
}: HomepageCanonicalProps) {
  let inserted = false;

  useServerInsertedHTML(() => {
    if (inserted) {
      return null;
    }

    inserted = true;
    return <link rel="canonical" href={href} />;
  });

  return null;
}
