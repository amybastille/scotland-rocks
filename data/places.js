// The map pins. Each stone has a list of places where it can be found.
// lat and lng are map coordinates. You can find them by right-clicking a
// spot on Google Maps; the first number is lat and the second is lng.
// Pins show the general area, not an exact spot.

// The Ayrshire & Glasgow area: a box around the Firth of Clyde, Arran,
// Ayrshire, Renfrewshire and Glasgow. Used by the area filters.
export const clydeArea = {
  label: "Ayrshire & Glasgow",
  center: [55.65, -4.6],
  zoom: 9,
  box: { north: 56.1, south: 55.1, west: -5.45, east: -3.9 },
};

export function isInClydeArea(slug) {
  const { box } = clydeArea;
  return (places[slug] || []).some(
    (p) => p.lat <= box.north && p.lat >= box.south && p.lng >= box.west && p.lng <= box.east
  );
}

export const places = {
  agate: [
    { name: "Lunan Bay, Angus", lat: 56.65, lng: -2.5 },
    { name: "Scurdie Ness, Montrose", lat: 56.701, lng: -2.442 },
    { name: "Burn Anne, Galston, Ayrshire", lat: 55.6, lng: -4.38 },
  ],
  cairngorm: [
    { name: "Cairn Gorm, Cairngorm Mountains", lat: 57.1167, lng: -3.6436 },
  ],
  serpentine: [
    { name: "Keen of Hamar, Unst", lat: 60.808, lng: -0.795 },
    { name: "Fetlar, Shetland", lat: 60.61, lng: -0.87 },
    { name: "Portsoy, Aberdeenshire", lat: 57.684, lng: -2.69 },
  ],
  "iona-marble": [
    { name: "Columba's Bay, Iona", lat: 56.31, lng: -6.41 },
  ],
  gold: [
    { name: "Kildonan Burn, Sutherland", lat: 58.165, lng: -3.85 },
    { name: "Wanlockhead, Lowther Hills", lat: 55.397, lng: -3.781 },
    { name: "Leadhills, Lowther Hills", lat: 55.419, lng: -3.759 },
  ],
  granite: [
    { name: "Aberdeen, the Granite City", lat: 57.1497, lng: -2.0943 },
    { name: "Goatfell, Isle of Arran", lat: 55.626, lng: -5.192 },
  ],
  basalt: [
    { name: "Fingal's Cave, Staffa (look, don't collect)", lat: 56.4335, lng: -6.3359 },
    { name: "Isle of Skye", lat: 57.4, lng: -6.25 },
    { name: "Isle of Mull", lat: 56.45, lng: -5.95 },
    { name: "Campsie Fells, near Glasgow", lat: 56.02, lng: -4.2 },
  ],
  "old-red-sandstone": [
    { name: "Orkney", lat: 58.98, lng: -3.1 },
    { name: "Thurso, Caithness", lat: 58.594, lng: -3.522 },
    { name: "Moray coast", lat: 57.71, lng: -3.33 },
    { name: "Arbroath cliffs", lat: 56.563, lng: -2.565 },
  ],
  "lewisian-gneiss": [
    { name: "Isle of Lewis", lat: 58.2, lng: -6.6 },
    { name: "Isle of Harris", lat: 57.88, lng: -6.85 },
    { name: "Scourie, north-west Highlands", lat: 58.35, lng: -5.156 },
  ],
  flint: [
    { name: "Buchan, Aberdeenshire", lat: 57.5, lng: -1.95 },
  ],
  "ailsa-craig-granite": [
    { name: "Ailsa Craig (seabird reserve, admire from the shore)", lat: 55.2522, lng: -5.1167 },
    { name: "Girvan beach, South Ayrshire", lat: 55.243, lng: -4.858 },
    { name: "Turnberry beach, South Ayrshire", lat: 55.318, lng: -4.83 },
  ],
  "arran-pitchstone": [
    { name: "Corriegills, near Brodick, Arran", lat: 55.567, lng: -5.115 },
  ],
  baryte: [
    { name: "Old Muirshiel mine, near Lochwinnoch", lat: 55.845, lng: -4.76 },
  ],
  "fossil-plants": [
    { name: "Stevenston Beach, North Ayrshire", lat: 55.635, lng: -4.765 },
    { name: "Fossil Grove, Victoria Park, Glasgow (look, don't collect)", lat: 55.8735, lng: -4.3365 },
  ],
};
