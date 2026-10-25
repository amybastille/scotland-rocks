// One page for each stone, e.g. /stones/agate
// Next.js builds a page for every stone in data/stones.js automatically.

import Link from "next/link";
import { notFound } from "next/navigation";
import FoundButton from "@/components/FoundButton";
import StoneArt from "@/components/StoneArt";
import { getStone, habitats, stones } from "@/data/stones";

export function generateStaticParams() {
  return stones.map((stone) => ({ slug: stone.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const stone = getStone(slug);
  if (!stone) return {};
  return { title: stone.name, description: stone.summary };
}

export default async function StonePage({ params }) {
  const { slug } = await params;
  const stone = getStone(slug);
  if (!stone) notFound();

  const index = stones.indexOf(stone);
  const previous = stones[(index - 1 + stones.length) % stones.length];
  const next = stones[(index + 1) % stones.length];

  return (
    <div className="container">
      <Link href="/stones" className="back-link">
        ← All stones
      </Link>

      <div className="detail-hero">
        <div className="detail-art">
          <StoneArt stone={stone} />
        </div>
        <div>
          <div className="tags">
            <span className={`tag tag-${stone.rarity}`}>{stone.rarity}</span>
            <span className="tag">{stone.category}</span>
          </div>
          <h1>{stone.name}</h1>
          <p className="other">{stone.otherNames}</p>
          <p className="lead">{stone.summary}</p>

          <dl className="facts">
            <div className="fact">
              <dt>Hardness</dt>
              <dd>{stone.hardness} out of 10</dd>
            </div>
            <div className="fact">
              <dt>Lustre (shine)</dt>
              <dd>{stone.lustre}</dd>
            </div>
            <div className="fact">
              <dt>Colours</dt>
              <dd style={{ textTransform: "capitalize" }}>{stone.colours.join(", ")}</dd>
            </div>
            <div className="fact">
              <dt>Found on</dt>
              <dd>{stone.habitats.map((h) => habitats[h].label).join(", ")}</dd>
            </div>
          </dl>

          <FoundButton slug={stone.slug} name={stone.name} />
        </div>
      </div>

      <div className="detail-columns">
        <div className="panel">
          <h2>🔍 How to spot it</h2>
          <ul className="check-list">
            {stone.lookFor.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <h2>📍 Where to look</h2>
          <ul className="check-list">
            {stone.where.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="callout callout-fun">
        <strong>✨ Did you know?</strong>
        <p>{stone.funFact}</p>
      </div>

      {stone.note && (
        <div className="callout callout-note">
          <strong>⚠️ Before you collect</strong>
          <p>{stone.note}</p>
        </div>
      )}

      <nav className="detail-nav" aria-label="More stones">
        <Link href={`/stones/${previous.slug}`}>← {previous.name}</Link>
        <Link href={`/stones/${next.slug}`}>{next.name} →</Link>
      </nav>
    </div>
  );
}
