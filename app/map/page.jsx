import MapExplorer from "@/components/MapExplorer";

export const metadata = {
  title: "Stone map",
  description: "A map of where to find rocks and gemstones around Scotland.",
};

export default function MapPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Stone map</span>
          <h1>Where to find them</h1>
          <p>
            Tap a pin to see what you can find there. Use the buttons to show
            one stone at a time.
          </p>
        </div>
        <MapExplorer />
      </div>
    </section>
  );
}
