// src/content/parks.ts

export type Park = {
  id: number;
  name: string;
  slug: string;
  region: string;
  description: string;
  highlights: string[];
  bestSeason: string;
  image: string;
  rating: number; // חדש – ציון גולשים
};

export const parks: Park[] = [
  {
    id: 1,
    name: "Queen Elizabeth National Park",
    slug: "queen-elizabeth",
    region: "Western Uganda",
    description:
      "Queen Elizabeth National Park is Uganda’s most visited park, famous for its diverse ecosystems ranging from savannah and wetlands to dense forests. The park is home to elephants, hippos, buffaloes, leopards, and a wide variety of bird species. A highlight is the Kazinga Channel boat cruise, where visitors can see large concentrations of wildlife along the water. The park also features tree-climbing lions in the Ishasha sector and stunning views of the Rwenzori Mountains.",
    highlights: [
      "Kazinga Channel boat cruise",
      "Tree-climbing lions in Ishasha",
      "Rwenzori Mountain views",
      "Large populations of hippos and elephants",
    ],
    bestSeason: "December–February, June–August",
    image: "/images/parks/queen-elizabeth.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Murchison Falls National Park",
    slug: "murchison-falls",
    region: "North-West Uganda",
    description:
      "Murchison Falls is Uganda’s largest national park, known for the powerful waterfalls where the Nile River explodes through a narrow gorge. The park is home to giraffes, elephants, lions, crocodiles, and over 450 bird species. Safari game drives and boat trips on the Nile are the main highlights.",
    highlights: [
      "The powerful Murchison Falls",
      "Boat cruise on the Nile",
      "Rich wildlife including giraffes and lions",
    ],
    bestSeason: "December–February, June–September",
    image: "/images/parks/murchison-falls.jpg",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Bwindi Impenetrable National Park",
    slug: "bwindi",
    region: "South-West Uganda",
    description:
      "Bwindi Impenetrable National Park is a UNESCO World Heritage Site and home to more than half of the world’s remaining mountain gorillas. Dense tropical rainforest and misty hills make this a top destination for gorilla trekking and bird watching.",
    highlights: [
      "Mountain gorilla trekking",
      "UNESCO World Heritage Site",
      "Exceptional birdwatching",
    ],
    bestSeason: "June–August, December–February",
    image: "/images/parks/bwindi.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Kidepo Valley National Park",
    slug: "kidepo",
    region: "North-East Uganda",
    description:
      "Kidepo Valley is one of Africa’s most remote national parks, offering untouched wilderness and dramatic landscapes. Known for cheetahs, ostriches, and large buffalo herds, it’s a favorite for travelers seeking solitude and authentic safari experiences.",
    highlights: [
      "Remote, untouched wilderness",
      "Cheetahs and ostriches",
      "Large buffalo herds",
    ],
    bestSeason: "September–March",
    image: "/images/parks/kidepo.jpg",
    rating: 4.7,
  },
];