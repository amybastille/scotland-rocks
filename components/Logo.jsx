// The website's logo: a faceted pastel gem with a little sparkle.
// "id" keeps the colours working when the logo appears twice on a page.

export function LogoMark({ id = "logo", size = 40 }) {
  const grad = `${id}-gem`;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className="logo-mark">
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c9b3f2" />
          <stop offset="55%" stopColor="#f6b6cf" />
          <stop offset="100%" stopColor="#a8dcc4" />
        </linearGradient>
      </defs>
      {/* the gem */}
      <path d="M9 18 L16 8 H32 L39 18 L24 42 Z" fill={`url(#${grad})`} stroke="#4a4870" strokeWidth="2" strokeLinejoin="round" />
      {/* facets */}
      <path d="M16 8 L19.5 18 L24 8 L28.5 18 L32 8" fill="#ffffff" opacity="0.45" />
      <path d="M9 18 H39 M19.5 18 L24 42 L28.5 18" fill="none" stroke="#4a4870" strokeWidth="1.5" strokeLinejoin="round" opacity="0.7" />
      <path d="M11 18 L22 36 L19.5 18 Z" fill="#ffffff" opacity="0.3" />
      {/* sparkle */}
      <path d="M41 4 L42.3 7.7 L46 9 L42.3 10.3 L41 14 L39.7 10.3 L36 9 L39.7 7.7 Z" fill="#f6b6cf" stroke="#4a4870" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

export default function Logo({ id, size }) {
  return (
    <span className="logo-lockup">
      <LogoMark id={id} size={size} />
      <span className="logo-words">
        <span className="logo-name">Stones</span>
        <span className="logo-sub">of Scotland</span>
      </span>
    </span>
  );
}
