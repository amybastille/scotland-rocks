// The stone guide page, with search and filters

import StoneBrowser from "@/components/StoneBrowser";

export const metadata = {
  title: "Stone guide",
  description: "Every rock, gemstone and mineral you can collect in Scotland.",
};

export default function StonesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Stone guide</span>
          <h1>Rocks &amp; gemstones of Scotland</h1>
          <p>
            Search by name, or filter by where you&apos;re hunting. Tap any
            stone to learn how to spot it.
          </p>
        </div>
        <StoneBrowser />
      </div>
    </section>
  );
}
