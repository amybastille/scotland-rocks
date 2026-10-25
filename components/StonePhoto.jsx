// Shows a real photo of a stone, with a credit to the photographer.
// Photos come from Wikimedia Commons and are free to use as long as we
// credit them. If a stone has no photo yet, its drawing is shown instead.

import StoneArt from "./StoneArt";
import { photos } from "@/data/photos";

export default function StonePhoto({ stone, variant = "card", showCredit = false }) {
  const photo = photos[stone.slug];

  if (!photo) {
    return <StoneArt stone={stone} />;
  }

  return (
    <>
      <div className={`photo photo-${variant}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo.src} alt={photo.alt} loading="lazy" />
      </div>
      {showCredit && (
        <p className="photo-credit">
          Photo: {photo.author},{" "}
          <a href={photo.page} target="_blank" rel="noreferrer">
            {photo.license}
          </a>
        </p>
      )}
    </>
  );
}
