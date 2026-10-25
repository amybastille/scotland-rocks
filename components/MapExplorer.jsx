"use client";

// The map page: pick a stone to show only its pins

import Link from "next/link";
import { useState } from "react";
import MapLoader from "./MapLoader";
import { places } from "@/data/places";
import { stones } from "@/data/stones";

const mapped = stones.filter((stone) => places[stone.slug]);
const everywhere = stones.filter((stone) => !places[stone.slug]);

export default function MapExplorer() {
  const [selected, setSelected] = useState("all");
  const shown = selected === "all" ? mapped : mapped.filter((s) => s.slug === selected);

  return (
    <>
      <div className="filters">
        <div className="filter-row">
          <span className="filter-label">Show</span>
          <button className={`chip ${selected === "all" ? "active" : ""}`} onClick={() => setSelected("all")}>
            All stones
          </button>
          {mapped.map((stone) => (
            <button
              key={stone.slug}
              className={`chip ${selected === stone.slug ? "active" : ""}`}
              onClick={() => setSelected(stone.slug)}
            >
              <span className="chip-dot" style={{ background: stone.art.light, borderColor: stone.art.dark }} />
              {stone.name}
            </button>
          ))}
        </div>
      </div>

      <MapLoader stones={shown} />

      <p className="map-note">
        Pins show the general area to explore, not an exact spot. Always check
        the <Link href="/code">collecting code</Link> before you go.
      </p>

      <div className="panel" style={{ marginTop: 24 }}>
        <h3>Found almost everywhere</h3>
        <p style={{ margin: "0 0 12px", color: "var(--muted)" }}>
          These stones turn up all over Scotland, so keep your eyes open wherever you are.
        </p>
        <div className="tags">
          {everywhere.map((stone) => (
            <Link key={stone.slug} href={`/stones/${stone.slug}`} className="tag">
              {stone.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
