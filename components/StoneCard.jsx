import Link from "next/link";
import StonePhoto from "./StonePhoto";
import { habitats } from "@/data/stones";
import { photos } from "@/data/photos";

export default function StoneCard({ stone, found = false }) {
  return (
    <Link href={`/stones/${stone.slug}`} className="stone-card">
      {found && <span className="found-badge">✓ Found</span>}
      <div className={photos[stone.slug] ? "" : "stone-card-art"}>
        <StonePhoto stone={stone} variant="card" />
      </div>
      <div className="stone-card-body">
        <div className="tags">
          <span className={`tag tag-${stone.rarity}`}>{stone.rarity}</span>
          {stone.habitats.slice(0, 2).map((h) => (
            <span key={h} className="tag">
              {habitats[h].emoji} {habitats[h].label}
            </span>
          ))}
        </div>
        <h3>{stone.name}</h3>
        <p className="other">{stone.otherNames}</p>
        <p>{stone.summary}</p>
      </div>
    </Link>
  );
}
