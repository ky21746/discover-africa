// src/content/categories/retreats.ts

export type RetreatItem = {
  id: number;
  name: string;
  slug: string;
  region?: string;
  highlights?: string[];
  bestSeason?: string;
  image?: string;
};

export const retreats: RetreatItem[] = [
  {
    id: 1,
    name: "ריטריט יוגה בהרי רוונזורי",
    slug: "yoga-rwenzori",
    region: "מערב (ריונזורי)",
    highlights: [
      "סדנאות יוגה יומיות",
      "מדיטציה ונשימות",
      "הליכות טבע קלות בין פסגות ירוקות"
    ],
    bestSeason: "דצמבר–פברואר, יוני–אוגוסט",
    image: "/images/retreats/yoga-rwenzori.jpg"
  },
  {
    id: 2,
    name: "התחדשות על אגם בוניוני",
    slug: "renewal-lake-bunyonyi",
    region: "דרום־מערב (Lake Bunyonyi)",
    highlights: [
      "שייט רגוע בין האיים",
      "סדנאות התפתחות אישית",
      "תזונה נקייה ונוף עוצר נשימה"
    ],
    bestSeason: "כל השנה (שקיעות מושלמות)",
    image: "/images/retreats/bunyonyi-retreat.jpg"
  },
  {
    id: 3,
    name: "ריטריט שתיקה ומדיטציה",
    slug: "silent-meditation",
    region: "מרכז אוגנדה",
    highlights: [
      "ימי שתיקה מודרכים",
      "מדיטציות עומק",
      "האטה והתכנסות פנימה"
    ],
    bestSeason: "כל השנה",
    image: "/images/retreats/silent-retreat.jpg"
  },
  {
    id: 4,
    name: "סדנת נשימה וקול בטבע",
    slug: "breath-voice-nature",
    region: "אזור קיבאלה / מכתשי הגעש",
    highlights: [
      "נשימות פרנאיאמה",
      "עבודה קולית קבוצתית",
      "טבילה ביערות ובאגמים וולקניים"
    ],
    bestSeason: "יוני–ספטמבר, דצמבר–פברואר",
    image: "/images/retreats/breath-voice.jpg"
  },
  {
    id: 5,
    name: "Mindful Trek בהר אלגון",
    slug: "mindful-elgon",
    region: "מזרח (הר אלגון)",
    highlights: [
      "הליכות קשובות",
      "יוגה עדינה בשטח",
      "לינה לייט־אדוונצ'ר בכפרים"
    ],
    bestSeason: "עונה יבשה",
    image: "/images/retreats/mindful-elgon.jpg"
  },
  {
    id: 6,
    name: "Wellness & Spa – ויקטוריה",
    slug: "wellness-victoria",
    region: "חופי אגם ויקטוריה",
    highlights: [
      "טיפולי ספא מקומיים",
      "סאונה עשבי מרפא",
      "תפריט בריאות וצמחוני"
    ],
    bestSeason: "כל השנה",
    image: "/images/retreats/wellness-victoria.jpg"
  }
];