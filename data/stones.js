// All the stones on the website live in this one list.
// To add a new stone, copy one of the entries below, paste it at the end,
// and change the details. The website builds its pages from this list.
//
// habitats: where you find it — "beach", "river", "highland" or "island"
// colours:  used by the "Identify a find" helper
// banded:   does it usually have stripes or layers?
// sparkly:  can you usually see crystals or glittery grains?
// art:      how its illustration is drawn (see components/StoneArt.jsx)

export const habitats = {
  beach: { label: "Beach", emoji: "🌊" },
  river: { label: "River & burn", emoji: "🏞️" },
  highland: { label: "Hills & mountains", emoji: "⛰️" },
  island: { label: "Islands", emoji: "🏝️" },
};

export const categories = ["Gemstones & minerals", "Rocks", "Precious metals"];

export const stones = [
  {
    slug: "agate",
    name: "Agate",
    otherNames: "Scottish pebble",
    category: "Gemstones & minerals",
    habitats: ["beach", "river"],
    rarity: "Uncommon",
    hardness: "6.5 – 7",
    lustre: "Waxy, glassy when polished",
    colours: ["orange", "red", "white", "grey", "brown"],
    banded: true,
    sparkly: false,
    summary:
      "Scotland's most famous collector's stone. Agates have beautiful rings and stripes that glow when light shines through them.",
    lookFor: [
      "A rough, pitted outer skin, often with a waxy look where it's chipped",
      "Fine curved bands or rings showing through broken edges",
      "Light glowing through thin edges when you hold it up to the sun",
    ],
    where: [
      "The Angus coast, including Lunan Bay and around Montrose",
      "Beaches and burns in Ayrshire",
      "Old volcanic areas across the Midland Valley",
    ],
    funFact:
      "Scottish agates formed inside gas bubbles in lava around 400 million years ago. Queen Victoria made 'Scottish pebble' jewellery fashionable all over Britain.",
    art: { shape: "pebble", light: "#f6dfb8", dark: "#b8642c", accent: "#fff4e0", pattern: "bands" },
  },
  {
    slug: "cairngorm",
    name: "Cairngorm",
    otherNames: "Smoky quartz",
    category: "Gemstones & minerals",
    habitats: ["highland"],
    rarity: "Rare",
    hardness: "7",
    lustre: "Glassy",
    colours: ["brown", "grey", "black"],
    banded: false,
    sparkly: true,
    summary:
      "A smoky brown to almost black quartz crystal named after the Cairngorm Mountains, and Scotland's national gemstone in all but name.",
    lookFor: [
      "Six-sided crystals with a pointed tip",
      "See-through brown or grey colour, like smoked glass",
      "Crystals sitting in pockets in granite",
    ],
    where: [
      "Granite in the Cairngorm Mountains",
      "Other granite areas of the Highlands",
    ],
    funFact:
      "Cairngorm stones are traditionally set into Highland dress, such as kilt pins, brooches and the handle of the sgian-dubh.",
    note:
      "Much of the Cairngorms is a National Park with protected sites. Check the park's guidance before collecting, and never dig into the hillside.",
    art: { shape: "crystal", light: "#c9b8a2", dark: "#3f3530", accent: "#efe6da", pattern: "none" },
  },
  {
    slug: "quartz",
    name: "Quartz",
    otherNames: "Rock crystal, milky quartz",
    category: "Gemstones & minerals",
    habitats: ["beach", "river", "highland", "island"],
    rarity: "Common",
    hardness: "7",
    lustre: "Glassy",
    colours: ["white", "clear"],
    banded: false,
    sparkly: true,
    summary:
      "The most common mineral you'll find. It's usually milky white but sometimes clear as glass, and a perfect first find for new collectors.",
    lookFor: [
      "Bright white pebbles that stand out on the beach",
      "Clear, six-sided crystals in cracks in rocks",
      "It's hard enough to scratch glass",
    ],
    where: [
      "Almost every beach, river and hillside in Scotland",
      "White veins running through darker rocks",
    ],
    funFact:
      "Rub two quartz pebbles together hard in the dark and they'll give off a faint orange glow. It's called triboluminescence.",
    art: { shape: "pebble", light: "#ffffff", dark: "#cfd4d2", accent: "#ffffff", pattern: "none" },
  },
  {
    slug: "jasper",
    name: "Jasper",
    otherNames: "Red jasper",
    category: "Gemstones & minerals",
    habitats: ["beach", "river"],
    rarity: "Common",
    hardness: "6.5 – 7",
    lustre: "Dull, shiny when wet or polished",
    colours: ["red", "brown", "yellow", "orange"],
    banded: false,
    sparkly: false,
    summary:
      "A solid, opaque stone, usually brick red, that looks stunning when wet. It's a close cousin of agate.",
    lookFor: [
      "Rich red, orange or brown pebbles that light can't shine through",
      "A smooth, even colour, sometimes with darker spots",
      "Pebbles that suddenly 'pop' with colour when the waves wash over them",
    ],
    where: [
      "Shingle beaches along the east and north-east coasts",
      "Gravel in rivers and burns",
    ],
    funFact:
      "Jasper and agate are made of the same stuff, a type of quartz called chalcedony. Jasper is the opaque version.",
    art: { shape: "pebble", light: "#e07a5a", dark: "#7c2318", accent: "#4a120c", pattern: "speckles" },
  },
  {
    slug: "serpentine",
    name: "Serpentine",
    otherNames: "Portsoy marble",
    category: "Gemstones & minerals",
    habitats: ["island", "beach"],
    rarity: "Uncommon",
    hardness: "3 – 5.5",
    lustre: "Waxy to silky",
    colours: ["green", "black"],
    banded: false,
    sparkly: false,
    summary:
      "A green, mottled stone with a soft, waxy feel. Its snakeskin patterns gave it its name.",
    lookFor: [
      "Green and dark green patches, a bit like snakeskin",
      "A smooth, slightly soapy or waxy feel",
      "It's softer than most pebbles, so a knife can scratch it",
    ],
    where: [
      "Unst and Fetlar in Shetland",
      "The coast around Portsoy in Aberdeenshire",
    ],
    funFact:
      "'Portsoy marble' isn't really marble at all, it's serpentine. It's said to have been used in the Palace of Versailles.",
    art: { shape: "pebble", light: "#a9cf9a", dark: "#2f5a35", accent: "#1f3d24", pattern: "streaks" },
  },
  {
    slug: "iona-marble",
    name: "Iona marble",
    otherNames: "Iona greenstone",
    category: "Rocks",
    habitats: ["island", "beach"],
    rarity: "Rare",
    hardness: "3 – 4",
    lustre: "Silky when polished",
    colours: ["white", "green"],
    banded: true,
    sparkly: false,
    summary:
      "A beautiful white marble with swirls of green, found only on the tiny island of Iona.",
    lookFor: [
      "White or cream pebbles with green streaks and swirls",
      "Pale green pebbles on the shore",
    ],
    where: [
      "Beaches on the Isle of Iona, especially near Columba's Bay",
    ],
    funFact:
      "Iona marble was quarried on the island for hundreds of years. The old quarry machinery is still there on the south-east coast.",
    note:
      "Iona is a small, much-loved island. If you collect, take just one small pebble as a keepsake.",
    art: { shape: "pebble", light: "#f7f6ee", dark: "#d8dccd", accent: "#5f9a6b", pattern: "streaks" },
  },
  {
    slug: "garnet",
    name: "Garnet",
    otherNames: "Almandine",
    category: "Gemstones & minerals",
    habitats: ["highland", "beach"],
    rarity: "Uncommon",
    hardness: "6.5 – 7.5",
    lustre: "Glassy",
    colours: ["red", "brown", "black"],
    banded: false,
    sparkly: true,
    summary:
      "Small, deep red crystals that look like tiny dice or footballs stuck in shiny, flaky rock.",
    lookFor: [
      "Rounded, many-sided crystals, often the size of a pea",
      "Dark red to brown colour",
      "Sparkly, flaky rock called mica schist around them",
    ],
    where: [
      "Mica schist rocks across the Highlands",
      "Some beaches, where garnet sand collects in dark red-purple streaks",
    ],
    funFact:
      "Garnet is so hard that it's crushed up and used as sandpaper and for cutting with water jets.",
    art: { shape: "gem", light: "#e0564f", dark: "#5e1019", accent: "#ffffff", pattern: "none" },
  },
  {
    slug: "gold",
    name: "Gold",
    otherNames: "Placer gold",
    category: "Precious metals",
    habitats: ["river"],
    rarity: "Rare",
    hardness: "2.5 – 3",
    lustre: "Metallic",
    colours: ["yellow"],
    banded: false,
    sparkly: true,
    summary:
      "Yes, you can find real gold in Scotland! Patient panners find tiny flakes in certain burns.",
    lookFor: [
      "Tiny bright yellow flakes that stay shiny in shade (fool's gold doesn't)",
      "Gold is very heavy, so it sinks to the bottom of your pan",
      "It's soft and bends rather than breaks",
    ],
    where: [
      "The Kildonan Burn in Sutherland, scene of an 1869 gold rush",
      "Burns around Wanlockhead and Leadhills in the Lowther Hills",
    ],
    funFact:
      "When the Crown of Scotland was remade in 1540, it used Scottish gold from Crawford Moor in the Lowther Hills.",
    note:
      "Gold in Scotland belongs to the Crown, and land belongs to someone. Only pan where it's allowed, and get permission first.",
    art: { shape: "nugget", light: "#ffe27a", dark: "#b8860b", accent: "#fff6c9", pattern: "none" },
  },
  {
    slug: "granite",
    name: "Granite",
    otherNames: "Aberdeen granite",
    category: "Rocks",
    habitats: ["highland", "beach", "river"],
    rarity: "Common",
    hardness: "6 – 7",
    lustre: "Sparkly, speckled",
    colours: ["pink", "grey", "white"],
    banded: false,
    sparkly: true,
    summary:
      "A speckled rock made of chunky crystals of pink or white feldspar, glassy quartz and black mica.",
    lookFor: [
      "A speckled 'salt and pepper' look, often with pink",
      "Crystals big enough to see with your eye",
      "Tiny flakes of mica that glint in the sun",
    ],
    where: [
      "Aberdeenshire, the Cairngorms and Arran",
      "Pebbles on many east coast beaches",
    ],
    funFact:
      "Aberdeen is called the 'Granite City' because so many of its buildings are made of granite that sparkles in the sun.",
    art: { shape: "pebble", light: "#e8c9c0", dark: "#9a7d78", accent: "#2b2b2b", pattern: "speckles" },
  },
  {
    slug: "basalt",
    name: "Basalt",
    otherNames: "Columnar basalt",
    category: "Rocks",
    habitats: ["island", "beach"],
    rarity: "Common",
    hardness: "About 6",
    lustre: "Dull",
    colours: ["black", "grey"],
    banded: false,
    sparkly: false,
    summary:
      "A dark volcanic rock made from cooled lava. In some places it forms amazing six-sided columns.",
    lookFor: [
      "Heavy, dark grey or black stones with a fine grain",
      "Small holes from old gas bubbles, sometimes filled with white minerals",
    ],
    where: [
      "Skye and Mull",
      "Staffa, home of Fingal's Cave (look, don't collect!)",
    ],
    funFact:
      "The columns at Fingal's Cave formed about 60 million years ago when a thick lava flow cooled and cracked into hexagons, like mud drying in the sun.",
    note:
      "Staffa is a protected nature reserve. Enjoy the columns, but leave every stone where it is.",
    art: { shape: "columns", light: "#6b7178", dark: "#22262b", accent: "#9aa1a8", pattern: "none" },
  },
  {
    slug: "old-red-sandstone",
    name: "Old Red Sandstone",
    otherNames: "Red sandstone",
    category: "Rocks",
    habitats: ["beach", "river"],
    rarity: "Common",
    hardness: "Varies",
    lustre: "Dull, gritty",
    colours: ["red", "orange", "brown"],
    banded: true,
    sparkly: false,
    summary:
      "Rusty red rock made from ancient desert sand and river mud, often with clear layers.",
    lookFor: [
      "Red, orange or pinkish rock that feels gritty like sandpaper",
      "Stripes or layers from the sand it formed from",
    ],
    where: [
      "Orkney, Caithness and Moray",
      "The cliffs around Arbroath",
    ],
    funFact:
      "The Old Red Sandstone of Orkney and Caithness is famous for fossil fish that swam in a huge lake around 380 million years ago.",
    art: { shape: "slab", light: "#e3906a", dark: "#8f3d22", accent: "#f2b48f", pattern: "layers" },
  },
  {
    slug: "lewisian-gneiss",
    name: "Lewisian gneiss",
    otherNames: "Pronounced 'nice'",
    category: "Rocks",
    habitats: ["island", "highland", "beach"],
    rarity: "Common",
    hardness: "6 – 7",
    lustre: "Sparkly, banded",
    colours: ["grey", "pink", "black", "white"],
    banded: true,
    sparkly: true,
    summary:
      "Stripy grey, pink and black rock that's among the oldest rocks in Europe, around 3 billion years old.",
    lookFor: [
      "Wavy, swirly stripes of light and dark minerals",
      "Sparkly crystals within the bands",
    ],
    where: [
      "The Outer Hebrides (Lewis and Harris)",
      "The north-west Highlands, around Scourie",
    ],
    funFact:
      "Some Lewisian gneiss is about two-thirds as old as the Earth itself. The rock is named after the Isle of Lewis.",
    art: { shape: "slab", light: "#d9d4d0", dark: "#6c6560", accent: "#2d2a28", pattern: "bands" },
  },
  {
    slug: "flint",
    name: "Flint",
    otherNames: "Chert",
    category: "Rocks",
    habitats: ["beach"],
    rarity: "Uncommon",
    hardness: "7",
    lustre: "Glassy to waxy",
    colours: ["grey", "black", "brown"],
    banded: false,
    sparkly: false,
    summary:
      "A hard, glassy stone that breaks with sharp, curved edges. People made tools from it in the Stone Age.",
    lookFor: [
      "Dark grey or black stone, often with a chalky white skin",
      "Curved, shell-like breaks with sharp edges",
    ],
    where: [
      "Beaches and old gravels in Aberdeenshire, especially Buchan",
    ],
    funFact:
      "Stone Age people in Scotland travelled to find good flint, and archaeologists still find their arrowheads and scrapers today.",
    art: { shape: "nugget", light: "#7d8088", dark: "#2a2c31", accent: "#f0eee6", pattern: "none" },
  },
];

export function getStone(slug) {
  return stones.find((stone) => stone.slug === slug);
}
