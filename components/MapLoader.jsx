"use client";

// Maps only work inside a web browser, so this loads the map
// after the page has opened, with a placeholder while it loads.

import dynamic from "next/dynamic";

const StoneMap = dynamic(() => import("./StoneMap"), {
  ssr: false,
  loading: () => <div className="map-loading">Loading map…</div>,
});

export default function MapLoader(props) {
  return <StoneMap {...props} />;
}
