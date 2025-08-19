// src/data/categories.ts

export type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
};

export const categories: Category[] = [
  {
    id: 1,
    name: "גורילות ושימפנזים",
    description: "מסלולי מעקב אחרי גורילות ושימפנזים בפארקים המפורסמים ביותר של אוגנדה.",
    image: "/images/categories/primates.jpg",
    slug: "primates",
  },
  {
    id: 2,
    name: "ספארי",
    description: "מפגשים בלתי נשכחים עם האריות, הפילים, הנמרים, התאו והקרנפים – ה-Big 5 של אפריקה.",
    image: "/images/categories/safari.jpg",
    slug: "safari",
  },
  {
    id: 3,
    name: "הרים",
    description: "טרקים ואתגרים בהרי הרוונזורי, הגורילות, והרי געש פעילים במערב אוגנדה.",
    image: "/images/categories/mountains.jpg",
    slug: "mountains",
  },
  {
    id: 4,
    name: "אגמים, מפלים ונהרות",
    description: "חוויה עוצמתית של שייט, רפטינג, טיולי קיאקים ומפלים מהמרהיבים באפריקה.",
    image: "/images/categories/water.jpg",
    slug: "water",
  },
  {
    id: 5,
    name: "תרבות ומורשת",
    description: "מפגשים עם שבטים מקומיים, טקסים מסורתיים, מוזיקה, ריקוד והיסטוריה עשירה.",
    image: "/images/categories/culture.jpg",
    slug: "culture",
  },
  {
    id: 6,
    name: "אקסטרים והרפתקאות",
    description: "חוויות מלאות אדרנלין – רייזרים, אופנועי שטח, טיפוס מצוקים, צניחה ועוד.",
    image: "/images/categories/extreme.jpg",
    slug: "extreme",
  },
  {
    id: 7,
    name: "משפחות",
    description: "טיולים מותאמים לכל המשפחה – אטרקציות קלות, פעילויות לילדים ולכל הגילאים.",
    image: "/images/categories/family.jpg",
    slug: "family",
  },
  {
    id: 8,
    name: "יוקרה",
    description: "חוויות בסטנדרט הגבוה ביותר – לודג'ים פרטיים, ספארי באוויר, טיסות מסוק ואירוח פרימיום.",
    image: "/images/categories/luxury.jpg",
    slug: "luxury",
  },
  {
    id: 9,
    name: "ריטריטים",
    description: "סדנאות יוגה, מדיטציה ורגיעה במקומות קסומים בין טבע ירוק ונוף עוצר נשימה.",
    image: "/images/categories/retreats.jpg",
    slug: "retreats",
  },
];