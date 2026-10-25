// The frame around every page: fonts, the top menu and the footer.

import { Fraunces, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: {
    default: "Stones of Scotland · A rock collector's guide",
    template: "%s · Stones of Scotland",
  },
  description:
    "Find, identify and collect the rocks, gemstones and minerals of Scotland, from agates on the beach to gold in the burns.",
};

const links = [
  { href: "/stones", label: "Stone guide" },
  { href: "/map", label: "Map" },
  { href: "/identify", label: "Identify a find" },
  { href: "/collection", label: "My collection" },
  { href: "/code", label: "Collecting code" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="logo">
              <span className="logo-mark" aria-hidden="true">◆</span>
              Stones of Scotland
            </Link>
            <nav className="nav">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p className="footer-title">Stones of Scotland</p>
            <p>
              Made for curious collectors. Always follow the{" "}
              <Link href="/code">collecting code</Link>, and leave places as
              beautiful as you found them.
            </p>
            <p className="footer-small">
              Information is a friendly guide, not expert advice. Double-check
              local rules before you collect.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
