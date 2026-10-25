"use client";

// The interactive map. Each pin is coloured to match its stone.
// Tap a pin to see the place and a link to the stone's page.

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Link from "next/link";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { places } from "@/data/places";

function pinFor(stone) {
  return L.divIcon({
    className: "map-pin",
    html: `<span style="background:${stone.art.light};border-color:${stone.art.dark}"></span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -12],
  });
}

export default function StoneMap({ stones, height = 560, zoom = 6, center = [57.4, -4.6] }) {
  const pins = stones.flatMap((stone) =>
    (places[stone.slug] || []).map((place) => ({ stone, place }))
  );

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      className="stone-map"
      style={{ height }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pins.map(({ stone, place }) => (
        <Marker key={`${stone.slug}-${place.name}`} position={[place.lat, place.lng]} icon={pinFor(stone)}>
          <Popup>
            <strong className="popup-title">{stone.name}</strong>
            <span className="popup-place">{place.name}</span>
            <Link href={`/stones/${stone.slug}`}>About {stone.name} →</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
