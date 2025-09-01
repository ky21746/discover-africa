// src/data/categories.ts
export type Category = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  coverImage: string;
  tags: string[];
};

export const categories: Category[] = [
  {
    id: "1",
    name: "ספארי",
    slug: "safari",
    shortDescription:
      "ממורצ׳יסון והמפל ועד המלכה אליזבת וקידפו – כל הפארקים הגדולים והקלאסיים.",
    coverImage:
      "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    tags: ["פארקים לאומיים", "שייט", "נופים פתוחים"],
  },
  {
  id: "2",
  name: "גורילות ושימפנזים",
  slug: "gorillas-chimps",
  shortDescription:
    "מפגשי פרימטים מרגשים: גורילות בווינדי/מגהינגה ושימפנזים בקיבאלה/קיאמבורה.",
  coverImage:
    "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg",
  tags: ["גורילות", "שימפנזים", "יער טרופי"],
},
  {
    id: "3",
    name: "אגמים, מפלים ונהרות",
    slug: "water",
    shortDescription:
      "קזינגה, הנילוס הלבן, בוניוני ועוד – שייט, רפטינג ונופים רטובים.",
    coverImage:
      "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg",
    tags: ["שייט", "רפטינג", "נופים"],
  },
  {
    id: "4",
    name: "הרים וטרקים",
    slug: "mountains",
    shortDescription:
      "רוונזורי, סיפי והר אלגון – מסלולים מהירים ועד טרקים מאתגרים.",
    coverImage:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    tags: ["טרקים", "נופים", "אלפיני"],
  },

  {
    id: "6",
    name: "אקסטרים",
    slug: "extreme",
    shortDescription:
      "רפטינג רמה 5, בנג'י, אופנועים – לאמיצים ולחובבי אדרנלין.",
    coverImage:
      "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
    tags: ["אדרנלין", "אתגר"],
  },



];