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
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2FAfrican%20Bush%20Elephant%20-%20Loxodonta%20africana%2C%20iconic%20member%20of%20African%20big%20five%2C%20Queen%20Elizabeth%20National%20Park.webp?alt=media&token=3b4c82c9-b383-4bbc-94c1-85438ff412b5",
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
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FTourists%20overlook%20the%20massive%20waterfall%20of%20Murchison%20Falls%20on%20the%20Nile%20River%20in%20Uganda.webp?alt=media&token=bc3f5511-234b-4696-85c0-446e67dbea52",
    tags: ["שייט", "רפטינג", "נופים"],
  },
  {
    id: "4",
    name: "הרים וטרקים",
    slug: "mountains",
    shortDescription:
      "רוונזורי, סיפי והר אלגון – מסלולים מהירים ועד טרקים מאתגרים.",
    coverImage:
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Mount%20Elgon%20National%20Park%2FRwenzori%20Mountains%20National%20Park%2FHighland%20landscape%20near%20Weismann%60s%20peak%20in%20Rwenzori%20mountains%2C%20Uganda.%20Little%20lakes%20among%20the%20mossy%20rocks%20at%20high%20altitudes.webp?alt=media&token=e09d21a9-8060-4015-b4ab-8269d61269c8",
    tags: ["טרקים", "נופים", "אלפיני"],
  },

  {
    id: "6",
    name: "אקסטרים",
    slug: "extreme",
    shortDescription:
      "רפטינג רמה 5, בנג'י, אופנועים – לאמיצים ולחובבי אדרנלין.",
    coverImage:
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FExtreme%2FRZR%20safari%20%E2%80%93%20wild%20action.webp?alt=media&token=e38a49bb-d2fd-4d58-9f4c-198fc228a06c",
    tags: ["אדרנלין", "אתגר"],
  },



];  