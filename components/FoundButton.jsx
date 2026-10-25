"use client";

// The "I found one!" button on each stone's page

import { useCollection } from "@/lib/useCollection";

export default function FoundButton({ slug, name }) {
  const { found, toggle, ready } = useCollection();
  const isFound = Boolean(found[slug]);

  if (!ready) {
    return <button className="btn btn-ghost" disabled>Loading…</button>;
  }

  return (
    <button className={`btn ${isFound ? "btn-found" : "btn-primary"}`} onClick={() => toggle(slug)}>
      {isFound ? `✓ In your collection (found ${found[slug]})` : `I found ${name}!`}
    </button>
  );
}
