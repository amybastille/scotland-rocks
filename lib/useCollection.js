"use client";

// Remembers which stones a visitor has found. It's saved in their own
// browser, so each person gets their own collection (no account needed).

import { useEffect, useState } from "react";
import { stones } from "@/data/stones";

const STORAGE_KEY = "scotland-rocks-collection";

function load() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

export function useCollection() {
  // found looks like { agate: "2026-10-25", quartz: "2026-10-20" }
  const [found, setFound] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setFound(load());
    setReady(true);

    // Keep every open tab and page in sync
    const sync = () => setFound(load());
    window.addEventListener("collection-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("collection-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function toggle(slug) {
    const next = { ...load() };
    if (next[slug]) {
      delete next[slug];
    } else {
      next[slug] = new Date().toISOString().slice(0, 10);
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Private browsing can block saving; the tick still shows for now
    }
    setFound(next);
    window.dispatchEvent(new Event("collection-changed"));
  }

  return { found, toggle, ready };
}

export const ranks = [
  { min: 0, title: "Pebble Spotter", emoji: "👀" },
  { min: 1, title: "Beachcomber", emoji: "🐚" },
  { min: 4, title: "Rockhound", emoji: "🐕" },
  { min: 10, title: "Geologist", emoji: "🔬" },
  { min: stones.length, title: "Scottish Stone Master", emoji: "👑" },
];

export function rankFor(count) {
  return [...ranks].reverse().find((rank) => count >= rank.min);
}
