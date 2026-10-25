// The collecting code: how to collect safely and responsibly

export const metadata = {
  title: "Collecting code",
  description: "How to collect rocks and minerals in Scotland safely and responsibly.",
};

const rules = [
  {
    emoji: "🤲",
    title: "Take only a little",
    text: "Pick up a few small pieces from loose stones on the ground or beach. Leave plenty for others, and for nature.",
  },
  {
    emoji: "🚫",
    title: "Never hammer or dig",
    text: "Don't break rocks out of cliffs, outcrops or walls. Loose pebbles are the best and most responsible finds.",
  },
  {
    emoji: "🛡️",
    title: "Check for protected sites",
    text: "Some places are Sites of Special Scientific Interest (SSSIs) or nature reserves, and collecting there can be against the law. If in doubt, leave it.",
  },
  {
    emoji: "🏡",
    title: "Ask the landowner",
    text: "Scotland's Outdoor Access Code lets you explore most land responsibly, but collecting on private land and panning for gold need permission.",
  },
  {
    emoji: "🌊",
    title: "Know your tides",
    text: "Check tide times before you go, so you don't get cut off on a beach or below cliffs. Keep away from cliff edges and falling rocks.",
  },
  {
    emoji: "🐦",
    title: "Respect wildlife",
    text: "Give nesting birds and seals plenty of space, close gates behind you, and take all your litter home.",
  },
];

const kit = [
  "A small bag or pot for your finds",
  "A water bottle, to wet stones and see their colours",
  "A magnifying glass (a hand lens)",
  "Tide times for the beach",
  "Sturdy shoes and a waterproof",
  "A notebook to record where you found things",
];

export default function CodePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Collecting code</span>
          <h1>Collect with care</h1>
          <p>
            A few simple rules keep you safe and keep Scotland&apos;s wild places
            beautiful for the next collector.
          </p>
        </div>

        <div className="code-list">
          {rules.map((rule) => (
            <div key={rule.title} className="code-item">
              <div className="code-emoji">{rule.emoji}</div>
              <h3>{rule.title}</h3>
              <p>{rule.text}</p>
            </div>
          ))}
        </div>

        <div className="panel" style={{ marginTop: 40 }}>
          <h2>🎒 What to take on a rock hunt</h2>
          <ul className="kit-list">
            {kit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
