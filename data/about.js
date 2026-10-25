// The words on the About page. Change anything here to make it yours.
// photo: put a photo of yourself in the "public" folder (e.g. public/amy.jpg)
// and set photo to "/amy.jpg". Leave it as null to show the gem instead.

export const about = {
  name: "Amy",
  photo: null,
  tagline: "Lifelong rock collector from Bonnybridge, and the maker of this website.",

  story: [
    "Hi, I'm Amy, and I made Stones of Scotland.",
    "I'm 24 and I live in Bonnybridge, here in Scotland, with my dog Bonnie. I've always been into collecting rocks, ever since I was little.",
    "This website started life as one simple page about the rocks and gemstones you can collect in Scotland. Bit by bit it grew into a proper guide, with real photos, a map of where to look, a helper for identifying your finds and a collection to fill.",
    "I built it while learning how to make websites, one step at a time. My hope is that it helps more people slow down on a walk, pick up a pebble and wonder where it came from.",
  ],

  // The little fact cards at the top of the page
  facts: [
    { emoji: "🎂", label: "Age", value: "24" },
    { emoji: "🏡", label: "Home", value: "Bonnybridge, Scotland" },
    { emoji: "🐶", label: "Best pal", value: "Bonnie the dog" },
    { emoji: "🪨", label: "Collecting since", value: "I was little" },
  ],

  // Stones to show under "My favourites". Use the names from the web address,
  // e.g. /stones/ailsa-craig-granite becomes "ailsa-craig-granite".
  favourites: ["ailsa-craig-granite", "agate", "fossil-plants"],

  // How the website grew
  timeline: [
    { title: "One simple page", text: "A basic list of five Scottish stones." },
    { title: "A whole new look", text: "Rebuilt with a pastel theme, a stone guide, an identify helper and a collection tracker." },
    { title: "Real photos and a map", text: "Every stone got a real photo, and a map shows where to find them." },
    { title: "Closer to home", text: "New stones from Ayrshire and around Glasgow, including Ailsa Craig granite." },
  ],
};
