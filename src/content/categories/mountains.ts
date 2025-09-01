// src/content/categories/mountains.ts
import { Attraction } from "../../types";

export const mountains: Attraction[] = [
  {
    id: "mount-elgon",
    slug: "mount-elgon",
    name: "פארק לאומי הר אלגון",
    subtitle: "הר געש כבוי עם קלדרה עצומה ומפלי סיפי",
    category: "mountains",
    region: "מזרח אוגנדה, מחוז מבאלה",
    description: "אלגון הוא הר געש כבוי ענק, היושב בגבול אוגנדה–קניה. זהו ההר הרביעי בגובהו באפריקה, עם פסגה של 4,321 מ'.\n\nייחודו הוא קלדרה עצומה – מהגדולות בעולם – שניתן לטייל בה ברגל. הפארק משתרע על 1,279 קמ\"ר וכולל יערות גשם, מפלים ועמקים ירוקים. מפלי סיפי המפורסמים נמצאים במורדותיו, ומהווים יעד תיירותי בפני עצמו.",
    
    highlights: [
      "הר געש כבוי - הרביעי בגובהו באפריקה",
      "קלדרה עצומה מהגדולות בעולם",
      "מפלי סיפי המרהיבים",
      "טרקים נוחים יותר מרוונזורי",
      "קרבה לעיר מבאלה"
    ],
    
    duration: "3-6 ימים",
    difficulty: "בינונית-גבוהה",
    bestSeason: "דצמבר-פברואר, יוני-ספטמבר",
    permitCost: "100-200$ ליום",
    minAge: 12,
    
    wildlife: ["אנטילופות קטנות", "קופים", "פילים", "ציפורי הרים", "צמחייה אלפינית"],
    howToGetThere: ["30 דקות ממבאלה", "דרך מטעי קפה", "טרסות ירוקות"],
    whatToBring: ["ציוד טרקים", "ביגוד חם", "נעלי הליכה", "מצלמה"],
    healthSafety: ["מזג אוויר קריר בגבהים", "טרקים דורשים ציוד מתאים", "מדריכים מוסמכים"],
    accommodation: ["Sipi River Lodge (200-300$)", "Lacam Lodge (100-200$)", "Rose's Last Chance (50-80$)"],
    nearby: ["מבאלה (30 דקות)", "מפלי סיפי (45 דקות)", "גבול קניה"],
    whyUs: ["מדריכים מומחי הרים", "ציוד טרקים מקצועי", "קשרים עם קהילות מקומיות"],
    valueAdd: ["יעד נישה לתרמילאים", "שילוב טבע ותרבות", "גישה נוחה יחסית"],
    
    // Hero section customization - שליטה ספציפית בגובה התמונה
    heroHeight: {
      mobile: "55vh",    // גובה בינוני במובייל להר אלגון
      desktop: "65vh"    // גובה בינוני בדסקטופ להר אלגון
    },
    
    gallery: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FThe%20amazing%20Sipi%20falls%20in%20the%20Mount%20Elgon%20national%20park%20in%20Uganda.webp?alt=media&token=13642ed8-bd50-42a1-ac7e-d7ef3e39ed62",
        title: "מפלי סיפי המרהיבים",
        description: "מפלי סיפי היפים בפארק הלאומי הר אלגון"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FScenic%20view%20of%20Sipi%20Waterfall%20in%20Kapchorwa%2C%20Mount%20Elgon.webp?alt=media&token=6555b110-8541-4e11-baad-1f95a3a2d5ad",
        title: "נוף מרהיב של מפלי סיפי",
        description: "מבט מרהיב על מפלי סיפי בקפצ'ורווה"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FScenic%20view%20of%20Sipi%20Waterfall%20in%20Kapchorwa%2C%20Mount%20Elgon%2C%20Uganda.webp?alt=media&token=f6b5955a-b474-4ac5-8e5b-35f488f46473",
        title: "מפלי סיפי בקפצ'ורווה",
        description: "נוף מרהיב של מפלי סיפי בהר אלגון"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FMount%20Elgon%20National%20Park%2C%20Uganda.%20A%20rich%20biodiverse%20area%20of%20protected%20wildlife%20used%20by%20hikers%20and%20protected%20by%20rangers.webp?alt=media&token=b2932cee-e7fb-410b-95a9-8984b20097e8",
        title: "פארק לאומי הר אלגון",
        description: "אזור עשיר במגוון ביולוגי עם חיות בר מוגנות"
      }
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FMount%20Elgon%20national%20park%20in%20Uganda-hero.webp?alt=media&token=f311d9a8-eedc-497a-961d-01145b159634"
  },

  {
    id: "rwenzori-mountains",
    slug: "rwenzori-mountains",
    name: "פארק לאומי הרי הרוונזורי",
    subtitle: "הרי הירח - קרחונים על קו המשווה",
    category: "mountains",
    region: "מערב אוגנדה, על גבול קונגו",
    description: "הרי הרוונזורי – \"הרי הירח\" – הם יעד טרקים עולמי ברמה הגבוהה ביותר. הפארק משתרע על 998 קמ\"ר ומוכר כאתר מורשת עולמית של אונסק\"ו.\n\nזהו המקום היחיד באפריקה שבו רואים קרחונים של ממש על קו המשווה. מסלולי הטרקים חוצים חמישה אזורי צמחייה ייחודיים – מג'ונגל ועד נוף אלפיני קפוא. הפסגה הגבוהה ביותר, מרגריטה פיק, מתנשאת ל־5,109 מ'.",
    
    highlights: [
      "קרחונים על קו המשווה - ייחודי באפריקה",
      "חמישה אזורי צמחייה ייחודיים",
      "פסגה 5,109 מ' - השלישי באפריקה",
      "אתר מורשת עולמית של אונסק\"ו",
      "טרקים 6-12 ימים"
    ],
    
    duration: "7-10 ימים",
    difficulty: "קשה מאוד",
    bestSeason: "דצמבר-פברואר, יוני-אוגוסט",
    permitCost: "100-150$ ליום טרק",
    minAge: 16,
    
    wildlife: ["שימפנזים", "קופים", "פילים", "ציפורי הרים", "צמחייה אלפינית נדירה"],
    howToGetThere: ["שעה מקאססה", "דרך שדות תה", "כפרי רוונזורי"],
    whatToBring: ["ציוד הרים מקצועי", "ביגוד חם", "אוהל", "ציוד בישול"],
    healthSafety: ["מזג אוויר קיצוני", "גובה רב", "מדריכים וסבלים מוסמכים"],
    accommodation: ["Ruboni Community Camp (30-80$)", "Equator Snow Lodge (200-400$)", "מלונות בקאססה"],
    nearby: ["קאססה (שעה)", "Queen Elizabeth NP (שעה וחצי)", "אגמי מכתש"],
    whyUs: ["מדריכים מומחי הרים", "סבלים מקצועיים", "ציוד איכותי"],
    valueAdd: ["יעד נישה להרפתקנים", "חוויה ייחודית בעולם", "קהילות מקומיות אותנטיות"],
    
    // Hero section customization - שליטה ספציפית בגובה התמונה
    heroHeight: {
      mobile: "60vh",    // גובה גדול במובייל לנוף הרים מרהיב
      desktop: "70vh"    // גובה גדול בדסקטופ לנוף הרים מרהיב
    },
    
    gallery: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FSwamp%20in%20Rwenzori%20National%20Park.webp?alt=media&token=9456666b-7548-4045-a6f2-e199583c4ec8",
        title: "ביצה בהרי הרוונזורי",
        description: "ביצה ייחודית בפארק הלאומי הרי הרוונזורי"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FRwenzori%20National%20Park.webp?alt=media&token=9a156dd1-d815-4d6e-aef8-24bbc790d2f9",
        title: "פארק לאומי הרי הרוונזורי",
        description: "נוף מרהיב של הרי הרוונזורי"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FHighland%20landscape%20near%20Weismann%60s%20peak%20in%20Rwenzori%20mountains%2C%20Uganda.%20Little%20lakes%20among%20the%20mossy%20rocks%20at%20high%20altitudes.webp?alt=media&token=f2a1df50-adf9-41e1-99cb-8eb7dfae947e",
        title: "נוף הרים גבוה",
        description: "נוף הרים גבוה ליד פסגת וייסמן עם אגמים קטנים בין הסלעים"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FCommon%20Chimpanzee%20(%20Pan%20troglodytes%20schweinfurtii)%20relaxing%20in%20a%20tree%2C%20Kibale%20Forest%20National%20Park%2C%20Rwenzori%20Mountains%2C%20Uganda..webp?alt=media&token=45344aaa-35dc-45aa-ad2f-b4c590730db4",
        title: "שימפנזים בהרי הרוונזורי",
        description: "שימפנזה נח על עץ ביער קיבאלה בהרי הרוונזורי"
      }
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FHighland%20landscape%20near%20Weismann%60s%20peak%20in%20Rwenzori%20mountains%2C%20Uganda.%20Little%20lakes%20among%20the%20mossy%20rocks%20at%20high%20altitudes-hero.webp?alt=media&token=7333ef02-d1b2-4014-9596-df917bad950c"
  }
];