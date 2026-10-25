// Draws a picture of a stone using shapes and colours from data/stones.js.
// shape:   pebble, nugget, crystal, gem, slab or columns
// pattern: bands, speckles, streaks, layers or none

const CX = 100;
const CY = 84;

const outlines = {
  pebble:
    "M40,90 C32,54 70,32 104,36 C142,40 168,64 160,98 C152,130 104,138 72,128 C52,122 44,108 40,90 Z",
  nugget:
    "M52,98 C44,76 58,58 76,60 C82,42 108,40 118,54 C136,48 156,64 150,84 C162,100 146,122 124,118 C110,134 80,130 72,118 C58,120 48,110 52,98 Z",
  crystal: "M100,14 L128,42 L128,126 L100,150 L72,126 L72,42 Z",
  gem: "M100,24 L146,54 L146,108 L100,138 L54,108 L54,54 Z",
  slab: "M52,46 L148,46 Q166,46 166,64 L166,108 Q166,126 148,126 L52,126 Q34,126 34,108 L34,64 Q34,46 52,46 Z",
};

// A simple repeatable "random" number maker, so each stone always
// gets the same speckles on every page load.
function seeded(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 10000) / 10000;
  };
}

function Pattern({ type, outline, art, slug }) {
  if (type === "bands") {
    return [0.82, 0.64, 0.46, 0.28].map((scale, i) => (
      <path
        key={scale}
        d={outline}
        fill="none"
        stroke={i % 2 === 0 ? art.accent : art.dark}
        strokeWidth={6 / scale}
        opacity={0.7}
        transform={`translate(${CX} ${CY}) scale(${scale}) translate(${-CX} ${-CY})`}
      />
    ));
  }

  if (type === "speckles") {
    const random = seeded(slug);
    const colours = [art.accent, art.dark, "#ffffff"];
    return Array.from({ length: 70 }, (_, i) => (
      <circle
        key={i}
        cx={30 + random() * 140}
        cy={30 + random() * 110}
        r={1.2 + random() * 3}
        fill={colours[i % 3]}
        opacity={0.75}
      />
    ));
  }

  if (type === "streaks") {
    return [56, 76, 98, 118].map((y, i) => (
      <path
        key={y}
        d={`M20,${y} C60,${y - 18} 100,${y + 16} 180,${y - 8}`}
        fill="none"
        stroke={art.accent}
        strokeWidth={2 + (i % 2) * 4}
        strokeLinecap="round"
        opacity={0.55}
      />
    ));
  }

  if (type === "layers") {
    return [58, 70, 82, 94, 106, 118].map((y, i) => (
      <path
        key={y}
        d={`M20,${y} Q100,${y + (i % 2 ? 6 : -6)} 180,${y}`}
        fill="none"
        stroke={i % 2 ? art.dark : art.accent}
        strokeWidth={5}
        opacity={0.55}
      />
    ));
  }

  return null;
}

function Columns({ art, gradId }) {
  const tops = [52, 30, 62, 42];
  return tops.map((top, i) => {
    const x = 38 + i * 32;
    return (
      <g key={i}>
        <rect x={x} y={top + 8} width={30} height={142 - top - 8} fill={`url(#${gradId})`} stroke={art.dark} strokeWidth="2" />
        <polygon
          points={`${x},${top + 8} ${x + 7},${top} ${x + 23},${top} ${x + 30},${top + 8} ${x + 23},${top + 16} ${x + 7},${top + 16}`}
          fill={art.accent}
          stroke={art.dark}
          strokeWidth="2"
        />
      </g>
    );
  });
}

export default function StoneArt({ stone, className = "" }) {
  const { art, slug, name } = stone;
  const gradId = `grad-${slug}`;
  const clipId = `clip-${slug}`;
  const outline = outlines[art.shape];
  const faceted = art.shape === "crystal" || art.shape === "gem";

  return (
    <svg
      viewBox="0 0 200 160"
      className={`stone-art ${className}`}
      role="img"
      aria-label={`Illustration of ${name}`}
    >
      <defs>
        <radialGradient id={gradId} cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor={art.light} />
          <stop offset="100%" stopColor={art.dark} />
        </radialGradient>
        {outline && (
          <clipPath id={clipId}>
            <path d={outline} />
          </clipPath>
        )}
      </defs>

      <ellipse cx="100" cy="150" rx="62" ry="6" fill="#000" opacity="0.1" />

      {art.shape === "columns" ? (
        <Columns art={art} gradId={gradId} />
      ) : (
        <>
          <path d={outline} fill={`url(#${gradId})`} />
          <g clipPath={`url(#${clipId})`}>
            <Pattern type={art.pattern} outline={outline} art={art} slug={slug} />
          </g>
          {faceted && art.shape === "crystal" && (
            <>
              <path d="M100,14 L128,42 L100,58 L72,42 Z" fill="#fff" opacity="0.3" />
              <path d="M100,58 L100,150" stroke={art.dark} strokeWidth="1.5" opacity="0.5" />
            </>
          )}
          {faceted && art.shape === "gem" && (
            <>
              <path d="M100,24 L146,54 L100,74 L54,54 Z" fill="#fff" opacity="0.28" />
              <path d="M100,74 L100,138 M54,54 L100,74 L146,54" stroke={art.dark} strokeWidth="1.5" fill="none" opacity="0.5" />
            </>
          )}
          {!faceted && <ellipse cx="78" cy="60" rx="18" ry="8" fill="#fff" opacity="0.35" />}
          <path d={outline} fill="none" stroke={art.dark} strokeWidth="2.5" />
        </>
      )}
    </svg>
  );
}
