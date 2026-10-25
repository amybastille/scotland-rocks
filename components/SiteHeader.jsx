"use client";

// The menu at the top of every page. It highlights the page you're on,
// shows how many stones you've found, and folds into a button on phones.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useCollection } from "@/lib/useCollection";

export const links = [
  { href: "/stones", label: "Stone guide", emoji: "📖" },
  { href: "/map", label: "Map", emoji: "🗺️" },
  { href: "/identify", label: "Identify", emoji: "🔍" },
  { href: "/code", label: "Collecting code", emoji: "🤲" },
  { href: "/about", label: "About", emoji: "👋" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { found, ready } = useCollection();
  const count = Object.keys(found).length;

  // Close the phone menu whenever you go to a new page
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`site-header ${open ? "menu-open" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="Stones of Scotland, home">
          <Logo id="header-logo" size={42} />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-menu"
        >
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="menu-toggle-label">{open ? "Close" : "Menu"}</span>
        </button>

        <nav id="main-menu" className="nav" aria-label="Main menu">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? "active" : ""}`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              <span className="nav-emoji" aria-hidden="true">{link.emoji}</span>
              {link.label}
            </Link>
          ))}
          <Link
            href="/collection"
            className={`nav-collection ${isActive("/collection") ? "active" : ""}`}
            aria-current={isActive("/collection") ? "page" : undefined}
          >
            🏆 My collection
            {ready && <span className="nav-count">{count}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
