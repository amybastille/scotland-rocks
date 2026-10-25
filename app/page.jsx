// The home page (what people see at scotland-rocks.vercel.app)

import Link from "next/link";
import StoneArt from "@/components/StoneArt";
import StoneCard from "@/components/StoneCard";
import { getStone, stones } from "@/data/stones";

const heroStones = ["agate", "cairngorm", "gold", "serpentine", "garnet", "granite"].map(getStone);
const featured = ["iona-marble", "lewisian-gneiss", "basalt", "jasper"].map(getStone);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">A rock collector&apos;s guide</span>
            <h1>Discover the hidden treasures of Scotland</h1>
            <p className="lead">
              From glowing agates on Angus beaches to real gold in Highland
              burns, Scotland is one of the best places in the world to go
              rock hunting. Find out what to look for, where to look, and start
              your own collection.
            </p>
            <div className="hero-actions">
              <Link href="/stones" className="btn btn-primary">
                Explore the stones →
              </Link>
              <Link href="/identify" className="btn btn-ghost">
                Identify a find
              </Link>
            </div>
            <div className="stats">
              <div className="stat">
                <strong>{stones.length}</strong>
                <span>stones to discover</span>
              </div>
              <div className="stat">
                <strong>3 billion</strong>
                <span>years of history</span>
              </div>
              <div className="stat">
                <strong>18,000 km</strong>
                <span>of coastline, with the islands</span>
              </div>
            </div>
          </div>
          <div className="hero-stones" aria-hidden="true">
            {heroStones.map((stone) => (
              <StoneArt key={stone.slug} stone={stone} />
            ))}
          </div>
        </div>

        <svg className="hills" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,80 C180,30 320,90 520,50 C720,10 860,80 1060,40 C1240,8 1360,50 1440,36 L1440,120 L0,120 Z" fill="#cdb4f0" opacity="0.55" />
          <path d="M0,100 C220,60 400,110 640,78 C860,50 1040,104 1240,72 C1340,58 1400,70 1440,66 L1440,120 L0,120 Z" fill="#a8dcc4" opacity="0.7" />
          <path d="M0,112 C260,92 520,120 800,104 C1060,90 1260,116 1440,100 L1440,120 L0,120 Z" fill="#fdf8f3" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Get started</span>
            <h2>Everything you need for your next rock hunt</h2>
          </div>
          <div className="cards-3">
            <Link href="/stones" className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>Stone guide</h3>
              <p>Learn what each stone looks like, how to spot it, and where in Scotland to find it.</p>
            </Link>
            <Link href="/identify" className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Identify a find</h3>
              <p>Found something on the beach? Answer four quick questions and we&apos;ll suggest what it might be.</p>
            </Link>
            <Link href="/collection" className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>My collection</h3>
              <p>Tick off every stone you find, and work your way up from Pebble Spotter to Stone Master.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Featured finds</span>
            <h2>Stones with a story</h2>
            <p>Every stone in Scotland has a tale to tell. Here are a few of our favourites.</p>
          </div>
          <div className="stone-grid">
            {featured.map((stone) => (
              <StoneCard key={stone.slug} stone={stone} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="banner">
            <div>
              <h2>Collect with care</h2>
              <p>
                Some of Scotland&apos;s best rock spots are protected. Learn the
                simple rules that keep you safe and keep these places special
                for everyone.
              </p>
            </div>
            <Link href="/code" className="btn btn-primary">
              Read the collecting code
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
