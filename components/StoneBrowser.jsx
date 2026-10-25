"use client";

// The search box and filter buttons on the stone guide page

import { useState } from "react";
import StoneCard from "./StoneCard";
import { categories, habitats, stones } from "@/data/stones";
import { useCollection } from "@/lib/useCollection";

const rarities = ["Common", "Uncommon", "Rare"];

export default function StoneBrowser() {
  const [search, setSearch] = useState("");
  const [habitat, setHabitat] = useState("all");
  const [category, setCategory] = useState("all");
  const [rarity, setRarity] = useState("all");
  const { found } = useCollection();

  const query = search.trim().toLowerCase();
  const results = stones.filter((stone) => {
    const matchesSearch =
      !query ||
      stone.name.toLowerCase().includes(query) ||
      stone.otherNames.toLowerCase().includes(query) ||
      stone.colours.some((colour) => colour.includes(query)) ||
      stone.where.some((place) => place.toLowerCase().includes(query));
    const matchesHabitat = habitat === "all" || stone.habitats.includes(habitat);
    const matchesCategory = category === "all" || stone.category === category;
    const matchesRarity = rarity === "all" || stone.rarity === rarity;
    return matchesSearch && matchesHabitat && matchesCategory && matchesRarity;
  });

  function clearAll() {
    setSearch("");
    setHabitat("all");
    setCategory("all");
    setRarity("all");
  }

  return (
    <>
      <div className="filters">
        <input
          className="search"
          type="search"
          placeholder="Search by name, colour or place, e.g. 'green' or 'Shetland'"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search stones"
        />

        <div className="filter-row">
          <span className="filter-label">Where</span>
          <button className={`chip ${habitat === "all" ? "active" : ""}`} onClick={() => setHabitat("all")}>
            Anywhere
          </button>
          {Object.entries(habitats).map(([key, h]) => (
            <button key={key} className={`chip ${habitat === key ? "active" : ""}`} onClick={() => setHabitat(key)}>
              {h.emoji} {h.label}
            </button>
          ))}
        </div>

        <div className="filter-row">
          <span className="filter-label">Type</span>
          <button className={`chip ${category === "all" ? "active" : ""}`} onClick={() => setCategory("all")}>
            All
          </button>
          {categories.map((c) => (
            <button key={c} className={`chip ${category === c ? "active" : ""}`} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="filter-row">
          <span className="filter-label">Rarity</span>
          <button className={`chip ${rarity === "all" ? "active" : ""}`} onClick={() => setRarity("all")}>
            Any
          </button>
          {rarities.map((r) => (
            <button key={r} className={`chip ${rarity === r ? "active" : ""}`} onClick={() => setRarity(r)}>
              {r}
            </button>
          ))}
        </div>
      </div>

      <p className="results-count">
        Showing {results.length} of {stones.length} stones
      </p>

      {results.length > 0 ? (
        <div className="stone-grid">
          {results.map((stone) => (
            <StoneCard key={stone.slug} stone={stone} found={Boolean(found[stone.slug])} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>No stones match those filters.</p>
          <button className="btn btn-ghost" onClick={clearAll}>
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
