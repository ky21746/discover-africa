// src/content/categories/gorillas-chimps.ts
import { Attraction } from "../../types";

export const gorillasChimps: Attraction[] = [
  {
    id: "gorillas-bwindi",
    slug: "gorillas-bwindi",
    name: "גורילות ביער בווינדי – חוויה של פעם בחיים",
    category: "gorillas-chimps",
    region: "דרום־מערב אוגנדה, גבול עם רואנדה וקונגו",
    description:
      "**בְּוִוינְדִי, אוגנדה: מסע אל ממלכת הגורילות**\n\nדמיינו שאתם פוסעים אל תוך עולם קדום, שבו האוויר צלול, הירוק אינסופי, והשקט מופר רק על ידי קולות הג'ונגל. זהו הפארק הלאומי בְּוִוינְדִי – אתר מורשת עולמית של אונסק\"ו, וחשוב מכל, הבית של כמעט מחצית מאוכלוסיית גורילות ההרים שנותרה בעולם.\n\nהמסע אל בְּוִוינְדִי הוא לא עוד ספארי. זהו טרק הרפתקני אל לב אחד היערות המסתוריים והעשירים באפריקה. כאן, בין עצים עתיקים ושרכים ענקיים, תחוו את אחד המפגשים המרגשים והעוצמתיים ביותר שהטבע יכול להציע: פנים אל פנים עם משפחת גורילות בסביבתה הטבעית.\n\nלצפות בענקים העדינים האלה משחקים, אוכלים ומתקשרים זה עם זה ממרחק נגיעה – זו חוויה שחורגת מעבר לטיול רגיל. זהו רגע נדיר של חיבור טהור לעולם הטבע, זיכרון שיישאר חקוק בלבכם לנצח.\n\n**הצטרפו אלינו למסע בלתי נשכח אל ממלכת הגורילות. בְּוִוינְדִי מחכה לכם.**",
    highlights: [
      "טרק 3–6 שעות בממוצע",
      "דרגת קושי בינונית–גבוהה",
      "מפגש שעה עם גורילות ההרים",
      "יערות גשם בני אלפי שנים",
    ],
    duration: "3–6 שעות",
    difficulty: "בינונית–גבוהה",
    bestSeason: "יוני–אוגוסט, דצמבר–פברואר",
    permitCost: "≈ 800$ לאדם (2024)",
    minAge: 15,
    wildlife: [
      "שימפנזים וקופים נדירים",
      "אנטילופות ויענים יעריים",
      "מאות מיני ציפורים כולל Shoebill",
      "פרחים וצמחים אנדמיים",
    ],
    howToGetThere: [
      "טיסה פנימית מאנטבה ל־Kisoro או Kihihi (כשעה)",
      "ברכב – 8–9 שעות מקמפלה או 4–5 שעות מקיגאלי",
    ],
    whatToBring: [
      "נעלי הליכה גבוהות",
      "מעיל גשם",
      "כפפות דקות לאחיזה בצמחייה",
      "דוחה יתושים",
      "מים ונשנוש",
    ],
    healthSafety: [
      "חיסון Yellow Fever חובה",
      "טיפול מונע למלריה מומלץ",
      "שמירה על מרחק 7 מטר מהגורילות",
    ],
    accommodation: [
      "Sanctuary Gorilla Forest Camp – יוקרתי בלב היער",
      "Buhoma Lodge – נוף ישיר ליער",
      "Guesthouses פשוטים בכפרים Buhoma ו־Ruhija",
    ],
    nearby: [
      "אגם בוניוני (Lake Bunyonyi) – מושלם למנוחה אחרי הטרק",
      "פארק המלכה אליזבת – ספארי עם אריות מטפסי עצים",
      "קהילת הבטווה (Batwa) – סיור תרבותי מקומי",
    ],
    whyUs: [
      "סיוע בהשגת רישיון גורילות (8 מטיילים בלבד ליום)",
      "מדריכים מנוסים, גם בעברית",
      "תיאום מלא של טיסות פנים, לינה והעברות",
    ],
    valueAdd: [
      "מידע ברור לישראלים: כשרות, בטיחות רפואית, התאמה למשפחות",
      "שקיפות מלאה: עלויות רישיון וחוקים ידועים מראש",
      "אפשרות לשלב עם ספארי, רפטינג או רייזרים",
    ],
    gallery: [
      "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg",
      "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg",
      "https://images.pexels.com/photos/1670737/pexels-photo-1670737.jpeg",
      "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg",
      "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg",
    ],
    image: "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg",
  },
  // אטרקציה נוספת (דוגמה), ניתן להשאיר או להסיר
  {
    id: "chimps-kibale",
    slug: "chimps-kibale",
    name: "שימפנזים ביער קיבאלה",
    category: "gorillas-chimps",
    region: "מערב אוגנדה",
    description:
      "מפגש מודרך עם שימפנזים ב־Kibale National Park. צפייה בקופי־על בסביבתם הטבעית במסלולי בוקר/צהריים.",
    highlights: ["סיור מודרך", "צפייה פעילה", "יער גשם טרופי"],
    duration: "2–4 שעות",
    difficulty: "בינונית",
    bestSeason: "כל השנה (עדיפות ליבשות)",
    permitCost: "≈ 250$ לאדם",
    minAge: 12,
    gallery: [
      "https://images.pexels.com/photos/257006/pexels-photo-257006.jpeg",
      "https://images.pexels.com/photos/2817398/pexels-photo-2817398.jpeg",
    ],
    image: "https://images.pexels.com/photos/257006/pexels-photo-257006.jpeg",
  },
];