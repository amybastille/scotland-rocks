"use client";

// The "My collection" checklist, with ranks to earn

import Link from "next/link";
import StoneArt from "./StoneArt";
import { stones } from "@/data/stones";
import { rankFor, ranks, useCollection } from "@/lib/useCollection";

export default function Collection() {
  const { found, toggle, ready } = useCollection();
  const count = stones.filter((stone) => found[stone.slug]).length;
  const rank = rankFor(count);
  const nextRank = ranks.find((r) => r.min > count);
  const percent = Math.round((count / stones.length) * 100);

  return (
    <>
      <div className="rank-card">
        <div className="rank-emoji" aria-hidden="true">{rank.emoji}</div>
        <div>
          <h2>{ready ? rank.title : "Loading…"}</h2>
          <p>
            You&apos;ve found {count} of {stones.length} stones.{" "}
            {nextRank
              ? `Find ${nextRank.min - count} more to become a ${nextRank.title}!`
              : "You've found them all. Amazing!"}
          </p>
          <div className="progress" aria-label={`${percent}% complete`}>
            <span style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>

      <div className="collect-grid">
        {stones.map((stone) => {
          const isFound = Boolean(found[stone.slug]);
          return (
            <button
              key={stone.slug}
              className={`collect-item ${isFound ? "found" : ""}`}
              onClick={() => toggle(stone.slug)}
              aria-pressed={isFound}
            >
              <span className="collect-check" aria-hidden="true">{isFound ? "✓" : ""}</span>
              <StoneArt stone={stone} />
              <strong>{stone.name}</strong>
              <small>{isFound ? `Found ${found[stone.slug]}` : "Not found yet"}</small>
            </button>
          );
        })}
      </div>

      <div className="ranks-list">
        {ranks.map((r) => (
          <span key={r.title} className={count >= r.min ? "earned" : ""}>
            {r.emoji} {r.title}
          </span>
        ))}
      </div>

      <p style={{ marginTop: 28, color: "var(--muted)" }}>
        Not sure what you&apos;ve found? Try the <Link href="/identify">identify helper</Link>.
      </p>
    </>
  );
}
