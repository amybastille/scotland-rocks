// The About page. The words come from data/about.js.

import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import StoneCard from "@/components/StoneCard";
import { about } from "@/data/about";
import { getStone } from "@/data/stones";

export const metadata = {
  title: "About Amy",
  description: "Meet Amy, the maker of Stones of Scotland.",
};

export default function AboutPage() {
  const favourites = about.favourites.map(getStone).filter(Boolean);

  return (
    <>
      <section className="about-hero">
        <div className="container about-hero-inner">
          <div className="about-avatar">
            {about.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={about.photo} alt={about.name} />
            ) : (
              <LogoMark id="about-avatar" size={120} />
            )}
          </div>
          <div>
            <span className="eyebrow">About</span>
            <h1>Meet {about.name}</h1>
            <p className="lead">{about.tagline}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-story">
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="hero-actions">
              <Link href="/stones" className="btn btn-primary">
                Explore the stones →
              </Link>
              <Link href="/map" className="btn btn-ghost">
                Open the map
              </Link>
            </div>
          </div>

          <aside className="panel timeline">
            <h2>How this site grew</h2>
            <ol>
              {about.timeline.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.text}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      {favourites.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">My favourites</span>
              <h2>Stones I love</h2>
            </div>
            <div className="stone-grid">
              {favourites.map((stone) => (
                <StoneCard key={stone.slug} stone={stone} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
