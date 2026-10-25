// The footer at the bottom of every page

import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/stones", label: "Stone guide" },
      { href: "/map", label: "Stone map" },
      { href: "/identify", label: "Identify a find" },
    ],
  },
  {
    title: "Collect",
    links: [
      { href: "/collection", label: "My collection" },
      { href: "/code", label: "Collecting code" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "About Amy" },
      { href: "/stones/ailsa-craig-granite", label: "Ailsa Craig granite" },
    ],
  },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <svg className="footer-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,0 L0,0 Z" fill="var(--sand)" />
      </svg>

      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo" aria-label="Stones of Scotland, home">
            <Logo id="footer-logo" size={48} />
          </Link>
          <p>
            A friendly guide to finding, identifying and collecting the rocks
            and gemstones of Scotland.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="footer-column">
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <p>
          © {year} Amy · Stones of Scotland · Made with 💜 in Scotland
        </p>
        <p className="footer-small">
          Information is a friendly guide, not expert advice. Double-check local
          rules before you collect. Stone photos from Wikimedia Commons, credited
          on each stone&apos;s page. Maps © OpenStreetMap contributors.
        </p>
      </div>
    </footer>
  );
}
