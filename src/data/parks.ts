// src/data/parks.ts
export interface Park {
  slug: string;
  name: string;
  category: string;   // safari | wildlife | mountains | water | culture ...
  area: string;
  family: boolean;
  night_drive: boolean;
  boat: boolean;
  cost_est: string;
  season: string;
  highlights: string[];
  combos: string[];
  summary: string;
  description: string;
  logistics: {
    drive_from_kla?: string;
    flight_option?: string;
    best_time?: string;
    duration_hours?: number;
  };
  // === שדות אופציונליים לתצוגה מתקדמת בעמוד הפארק ===
  license_cost?: string;
  difficulty?: string;
  min_age?: number;
  seasonality?: Record<string, number>;
  rating_avg?: number;
  rating_count?: number;
  reviews?: Array<{
    id: string;
    author: string;
    country?: string;
    rating: number;
    date: string;
    text: string;
    travelerType?: "משפחות" | "זוגות" | "בודדים" | "קבוצה";
  }>;
  nearby_ids?: string[];

  gallery: string[];
  image: string;
  tags: string[];
}

export const parks: Park[] = [
  // ===== Wildlife / Primates =====
  {
  slug: "bwindi-gorillas",
  name: "גורילות ביער בווינדי",
  category: "wildlife",
  area: "דרום-מערב",
  family: true,
  night_drive: false,
  boat: false,
  cost_est: "$$$",
  season: "יוני–ספטמבר, דצמבר–פברואר (יבשות); מרץ–מאי, אוק–נוב (גשומות)",
  highlights: [
    "גורילות ההרים (20+ משפחות מורגלות)",
    "יער גשם הררי עתיק",
    "צפרות אנדמית נדירה",
    "מסלולים מגוונים לפי סקטור"
  ],
  combos: ["lake-bunyonyi", "queen-elizabeth"],
  summary: "מפגש אינטימי ומכבד עם גורילות ההרים בתוך יער גשם הררי—שעה תצפית ליד הלהקה, רישיון מוגבל שיש להזמין מראש.",
  description: [
    "היכן נמצא הפארק?\nיער Bwindi (Bwindi Impenetrable Forest) שוכן בדרום־מערב אוגנדה, בגבול רואנדה וקונגו—יער גשם טרופי הררי מהעשירים באפריקה.",
    "מה הופך את Bwindi ליעד ייחודי?\nבפארק אחת האוכלוסיות הגדולות בעולם של גורילות ההרים (בסכנת הכחדה). כ־20 משפחות הורגלו לנוכחות אדם ומאפשרות Gorilla Trekking מודרך.",
    "חוויית הטרק\nיציאה מוקדמת עם ריינג'רים; 2–8 שעות הליכה (לרוב 3–5) בתוואי יער הררי ובוצי לעיתים. בהגעה—שעה שלמה לצפייה: גורים משחקים, סילברבקים ואינטראקציות טבעיות.",
    "מה עוד תראו?\nקופים נוספים (קולובוס שחור־לבן, לעתים שימפנזים), מאות מיני ציפורים אנדמיים, פרפרים וצמחייה עשירה.",
    "פרופיל סקטורים\n• בוהומה (Buhoma): קל–בינוני, שבילים נוחים, תשתית לודג'ים עשירה. \n• רוהיג'ה (Ruhija): בינוני–קשה, הררי וקריר, צפרות מעולה. \n• ראשאגה (Rushaga): טווח קושי רחב, הכי הרבה משפחות; יש חוויית הרגלה עד 4 שעות. \n• נקורינגו (Nkuringo): קשה–מאוד; מדרונות תלולים ונופים עוצרי נשימה.",
    "עונות מומלצות\nיבשות: יון–ספט, דצמ–פבר (שבילים נוחים, עומס גבוה). גשומות: מרץ–מאי, אוק–נוב (קשה ובוצי אך ירוק ושקט).",
    "לינה\nמבחר לודג'ים סביב Buhoma, Ruhija, Rushaga, Nkuringo—מפרימיום ועד כפרי.",
    "טיפים חשובים\nרישיון ≈ $700 לאדם (להזמין חודשים מראש); לציית לריינג'רים, 7 מ' מרחק, בלי אוכל; ציוד: ביגוד עמיד למים, נעלי הליכה, כפפות דקות, מקל הליכה וציוד צילום."
  ].join("\n\n"),
  logistics: {
    drive_from_kla: "8–9 שעות",
    flight_option: "טיסה לקיסורו/קיהיה + העברה יבשתית",
    best_time: "בוקר מוקדם לטרק",
    duration_hours: 4
  },
  // אופציונלי: דירוג/ביקורות/עונתיות
  // rating_avg: 4.9,
  // rating_count: 128,
  // seasonality: { "ינו":3,"פבר":3,"מרץ":2,"אפר":2,"מאי":2,"יוני":4,"יולי":5,"אוג":5,"ספט":4,"אוק":2,"נוב":2,"דצמ":4 },

  gallery: [
    "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg",
    "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg"
  ],
  image: "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg",
  tags: ["דרום-מערב", "טרק", "פארק לאומי", "גורילות"]
},
  {
    slug: "mgahinga-gorillas",
    name: "גורילות בפארק מגהינגה",
    category: "wildlife",
    area: "דרום-מערב",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$$$",
    season: "יוני–ספטמבר, דצמבר–פברואר",
    highlights: ["חלופה שקטה לבווינדי", "נופים וולקניים", "פחות תיירים"],
    combos: ["lake-bunyonyi"],
    summary: "חלופה שקטה לבווינדי על רקע פסגות וולקניות.",
    description:
      "פארק מגהינגה מציע טרק גורילות באווירה רגועה יותר, עם נופים וולקניים וזרימת מבקרים נמוכה.",
    logistics: { drive_from_kla: "8–9 שעות", best_time: "בוקר מוקדם", duration_hours: 4 },
    gallery: [
      "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg"
    ],
    image: "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg",
    tags: ["דרום-מערב", "וולקני", "שקט", "פארק לאומי"]
  },
  {
    slug: "kibale-chimps",
    name: "שימפנזים בקיבאלה",
    category: "wildlife",
    area: "מערב",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$$",
    season: "כל השנה",
    highlights: ["מעקב אחר שימפנזים", "יער טרופי", "13 מיני פרימטים"],
    combos: ["crater-lakes"],
    summary: "סיור בוקר/צהריים ביער גשם עשיר; גיל 12+.",
    description:
      "קיבאלה נחשבת ל'בירת הפרימטים' של אוגנדה עם אוכלוסיית שימפנזים גדולה ומורגלת למפגשים מודרכים.",
    logistics: { drive_from_kla: "5–6 שעות", best_time: "בוקר מוקדם או אחה\"צ", duration_hours: 2.5 },
    gallery: [
      "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg"
    ],
    image: "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg",
    tags: ["מערב", "יער טרופי", "פארק לאומי"]
  },

  // ===== Safari (National Parks) =====
  {
    slug: "queen-elizabeth",
    name: "פארק המלכה אליזבת",
    category: "safari",
    area: "מערב",
    family: true,
    night_drive: false,
    boat: true,
    cost_est: "$$",
    season: "יוני–ספטמבר, דצמבר–פברואר",
    highlights: ["שייט בתעלת קזינגה", "אישאשה – אריות מטפסי עצים", "צפרות", "פילים ובאפלו"],
    combos: ["kazinga-channel", "ishasha"],
    summary: "ספארי קלאסי עם שייט בתעלת קזינגה ותצפיות מגוונות.",
    description:
      "פארק מגוון: סוואנה, יערות וגופי מים. תעלת קזינגה היא מוקד חיות מרכזי, ואישאשה ידועה באריות המטפסים על עצים.",
    logistics: { drive_from_kla: "6–7 שעות", best_time: "בוקר/אחה\"צ", duration_hours: 3 },
    gallery: ["https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95"],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95",
    tags: ["מערב", "שייט", "למשפחות", "פארק לאומי"]
  },
  {
    slug: "murchison-falls",
    name: "מורצ'יסון ומפלי הנילוס",
    category: "safari",
    area: "צפון-מערב",
    family: true,
    night_drive: false,
    boat: true,
    cost_est: "$$",
    season: "כל השנה (עדיף יבש)",
    highlights: ["Top of the Falls", "שייט בנילוס", "עדרים גדולים", "מפלים עוצמתיים"],
    combos: ["nile-boat", "ziwa-rhino"],
    summary: "ספארי עשיר + הפלגה לנילוס ו-Top of the Falls.",
    description:
      "הפארק הגדול במדינה—מפגש של סוואנה ונילוס, מגוון חיות ודרמה נופית סביב המפלים.",
    logistics: { drive_from_kla: "5–6 שעות", best_time: "בוקר לספארי, אחה\"צ לשייט", duration_hours: 3 },
    gallery: ["https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    tags: ["צפון-מערב", "שייט", "למשפחות", "פארק לאומי"]
  },
  {
    slug: "kidepo",
    name: "קידפו ואלי",
    category: "safari",
    area: "צפון-מזרח מרוחק",
    family: false,
    night_drive: false,
    boat: false,
    cost_est: "$$$",
    season: "עונה יבשה",
    highlights: ["נופים פתוחים", "פילים וג'ירפות", "טורפים", "מפגש שבטים"],
    combos: [],
    summary: "אחד האזורים הפראיים ביותר—מרוחק, דרמטי ומעט תיירים.",
    description:
      "סוואנות פתוחות והרים באופק, אוכלוסיות גדולות של חיות וסיכוי למפגש תרבותי עם שבטים מקומיים.",
    logistics: { drive_from_kla: "10–12 שעות", flight_option: "טיסה פנימית זמינה", duration_hours: 3 },
    gallery: ["https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    tags: ["צפון-מזרח", "מרוחק", "פראי", "פארק לאומי"]
  },
  {
    slug: "lake-mburo",
    name: "אגם מבורו",
    category: "safari",
    area: "מרכז-דרום",
    family: true,
    night_drive: true,
    boat: false,
    cost_est: "$",
    season: "כל השנה",
    highlights: ["סיורי לילה", "ספארי רגלי", "זברות ואנטילופות"],
    combos: [],
    summary: "פארק קטן אך מגוון; ספארי רגלי ולילה ייחודיים.",
    description:
      "זברות, אנטילופות וצפרות מעולה; נגיש מאוד ומושלם למשפחות או ליומיים קלים.",
    logistics: { drive_from_kla: "3–4 שעות", best_time: "בוקר לספארי, ערב ללילה", duration_hours: 2.5 },
    gallery: ["https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    tags: ["מרכז-דרום", "סיורי לילה", "למשפחות", "פארק לאומי"]
  },
  {
    slug: "semuliki",
    name: "סמוליקי פארק לאומי",
    category: "safari",
    area: "מערב (עמק אלברטין)",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$$",
    season: "כל השנה (יבשה עדיפה)",
    highlights: ["מעיינות חמים", "יער נמוך חם-לח", "צפרות מערב-אפריקאית"],
    combos: ["kibale-chimps", "queen-elizabeth"],
    summary: "מעיינות חמים וצפרות נדירה על התפר בין אקולוגיות.",
    description:
      "מפגש בין אקולוגיה קונגולזית למזרח-אפריקאית: יערות נמוכים חמים-לחים ונקודות עניין גיאותרמיות.",
    logistics: { drive_from_kla: "6–7 שעות", best_time: "עונות יבשות", duration_hours: 2 },
    gallery: ["https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg"],
    image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg",
    tags: ["מערב", "צפרות", "פארק לאומי"]
  },

  // ===== Mountains =====
  {
    slug: "mount-elgon",
    name: "פארק לאומי הר אלגון",
    category: "mountains",
    area: "מזרח",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$$",
    season: "דצמבר-פברואר, יוני-ספטמבר",
    highlights: [
      "הר געש כבוי - הרביעי בגובהו באפריקה",
      "קלדרה עצומה מהגדולות בעולם",
      "מפלי סיפי המרהיבים",
      "טרקים נוחים יותר מרוונזורי",
      "קרבה לעיר מבאלה"
    ],
    combos: ["sipi-falls"],
    summary: "הר געש כבוי עם קלדרה עצומה ומפלי סיפי",
    description: "אלגון הוא הר געש כבוי ענק, היושב בגבול אוגנדה–קניה.\n\nזהו ההר הרביעי בגובהו באפריקה, עם פסגה של 4,321 מ'.\n\nייחודו הוא קלדרה עצומה – מהגדולות בעולם – שניתן לטייל בה ברגל.\n\nהפארק משתרע על 1,279 קמ\"ר וכולל יערות גשם, מפלים ועמקים ירוקים.\n\nמפלי סיפי המפורסמים נמצאים במורדותיו, ומהווים יעד תיירותי בפני עצמו.\n\nזהו יעד מתאים יותר למטיילי הליכה, ולא לאוהבי ספארי רכוב.\n\nבמהלך טרקים ניתן לפגוש אנטילופות קטנות, קופים ולעיתים פילים.\n\nהמסלולים נחשבים נוחים יותר מרוונזורי אך עדיין דורשים כושר טוב.\n\nהקרבה לעיר מבאלה מקלה על הגישה והופכת אותו ליעד נוח יחסית.\n\nהשילוב בין טבע דרמטי, תרבות מקומית ונוף הרי געש הופך את אלגון ליעד ייחודי.\n\nמיקום: מזרח אוגנדה, מחוז מבאלה, על גבול קניה.\n\nפופולריות / מבקרים: יעד נישה; פופולרי בקרב תרמילאים ומקומיים.\n\nטווח מחירים: 100–200 דולר ליום; חבילות טרקים 600–1,200 דולר (4–6 ימים).\n\nמשך ביקור ממוצע: 3–6 ימים.\n\nרמת קושי: בינונית–גבוהה.\n\nפעילויות עיקריות: טרקים לפסגה, סיורי מפלים, טיפוס בסלע, סיורים תרבותיים.\n\nדירוגים: ~4.5/5 (TripAdvisor).\n\nמלונות ולודג'ים: Sipi River Lodge (~200–300$), Lacam Lodge (~100–200$), Rose's Last Chance (~50–80$).\n\nמה רואים בדרך: נופי סוואנה ומטעי קפה, טרסות ירוקות, מפלי סיפי המרהיבים.\n\nאתרים קרובים (עד 3 שעות): Mbale (30 דק׳), מפלי סיפי (45 דק׳), גבול קניה.\n\nחשוב לדעת: מזג אוויר קריר בגבהים, טרקים דורשים ציוד מתאים.\n\nחוויות נוספות: טעימות קפה מקומי, מפגשים עם קהילות סביי.",
    logistics: { drive_from_kla: "4–5 שעות", best_time: "עונה יבשה", duration_hours: 6 },
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FThe%20amazing%20Sipi%20falls%20in%20the%20Mount%20Elgon%20national%20park%20in%20Uganda.webp?alt=media&token=13642ed8-bd50-42a1-ac7e-d7ef3e39ed62",
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FScenic%20view%20of%20Sipi%20Waterfall%20in%20Kapchorwa%2C%20Mount%20Elgon.webp?alt=media&token=6555b110-8541-4e11-baad-1f95a3a2d5ad",
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FScenic%20view%20of%20Sipi%20Waterfall%20in%20Kapchorwa%2C%20Mount%20Elgon%2C%20Uganda.webp?alt=media&token=f6b5955a-b474-4ac5-8e5b-35f488f46473",
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FMount%20Elgon%20National%20Park%2C%20Uganda.%20A%20rich%20biodiverse%20area%20of%20protected%20wildlife%20used%20by%20hikers%20and%20protected%20by%20rangers.webp?alt=media&token=b2932cee-e7fb-410b-95a9-8984b20097e8"
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FMount%20Elgon%20national%20park%20in%20Uganda-hero.webp?alt=media&token=f311d9a8-eedc-497a-961d-01145b159634",
    tags: ["מזרח", "הרים", "פארק לאומי"]
  },

  {
    slug: "rwenzori-mountains",
    name: "פארק לאומי הרי הרוונזורי",
    category: "mountains",
    area: "מערב",
    family: false,
    night_drive: false,
    boat: false,
    cost_est: "$$$",
    season: "דצמבר-פברואר, יוני-אוגוסט",
    highlights: [
      "קרחונים על קו המשווה - ייחודי באפריקה",
      "חמישה אזורי צמחייה ייחודיים",
      "פסגה 5,109 מ' - השלישי באפריקה",
      "אתר מורשת עולמית של אונסק\"ו",
      "טרקים 6-12 ימים"
    ],
    combos: [],
    summary: "הרי הירח - קרחונים על קו המשווה",
    description: "הרי הרוונזורי – \"הרי הירח\" – הם יעד טרקים עולמי ברמה הגבוהה ביותר.\n\nהפארק משתרע על 998 קמ\"ר ומוכר כאתר מורשת עולמית של אונסק\"ו.\n\nזהו המקום היחיד באפריקה שבו רואים קרחונים של ממש על קו המשווה.\n\nמסלולי הטרקים חוצים חמישה אזורי צמחייה ייחודיים – מג'ונגל ועד נוף אלפיני קפוא.\n\nהפסגה הגבוהה ביותר, מרגריטה פיק, מתנשאת ל־5,109 מ' – ההר השלישי בגובהו ביבשת.\n\nהטרקים אורכים בין 6 ל־12 ימים ודורשים כושר גופני גבוה.\n\nבמהלך המסע פוגשים חיות יער כמו שימפנזים, קופים ופילים בגבהים נמוכים.\n\nהנופים משתנים בכל יום – קרקסים קרחוניים, אגמים אלפיניים, ועמקים עמוקים.\n\nהחוויה מתאימה למטיילי עומק ולא לחובבי ספארי קלאסי.\n\nהטרק מנוהל היטב על ידי חברות מקומיות המפעילות מדריכים וסבלים מוסמכים.\n\nמיקום: מערב אוגנדה, על גבול קונגו.\n\nפופולריות / מבקרים: יעד נישה להרפתקנים; מספר מבקרים קטן.\n\nטווח מחירים: 100–150 דולר ליום טרק (לוגיסטיקה בלבד); חבילות מלאות ~2,000–3,500 דולר.\n\nמשך ביקור ממוצע: 7–10 ימים.\n\nרמת קושי: קשה מאוד – נדרש כושר גבוה וציוד הרים.\n\nפעילויות עיקריות: טרקים מרובי ימים, טיפוס לפסגות, צפייה בצמחייה אלפינית נדירה.\n\nדירוגים: ~4.6/5 (TripAdvisor).\n\nמלונות ולודג'ים: Ruboni Community Camp (~30–80$), Equator Snow Lodge (~200–400$), מלונות בקאססה.\n\nמה רואים בדרך: אגמי מכתש, מפלים, שדות תה, כפרי רוונזורי.\n\nאתרים קרובים (עד 3 שעות): Kasese (שעה), Queen Elizabeth NP (שעה וחצי).\n\nחשוב לדעת: מזג אוויר קיצוני; טרקים אפשריים בעיקר בעונות היבשות.\n\nחוויות נוספות: מפגשים עם קהילות מקומיות, חוות תרבותיות.",
    logistics: { drive_from_kla: "6–7 שעות", best_time: "דצמ–פבר / יונ–אוג", duration_hours: 8 },
    
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FSwamp%20in%20Rwenzori%20National%20Park.webp?alt=media&token=9456666b-7548-4045-a6f2-e199583c4ec8",
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FRwenzori%20National%20Park.webp?alt=media&token=9a156dd1-d815-4d6e-aef8-24bbc790d2f9",
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FHighland%20landscape%20near%20Weismann%60s%20peak%20in%20Rwenzori%20mountains%2C%20Uganda.%20Little%20lakes%20among%20the%20mossy%20rocks%20at%20high%20altitudes.webp?alt=media&token=f2a1df50-adf9-41e1-99cb-8eb7dfae947e",
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FCommon%20Chimpanzee%20(%20Pan%20troglodytes%20schweinfurtii)%20relaxing%20in%20a%20tree%2C%20Kibale%20Forest%20National%20Park%2C%20Rwenzori%20Mountains%2C%20Uganda..webp?alt=media&token=45344aaa-35dc-45aa-ad2f-b4c590730db4"
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FHighland%20landscape%20near%20Weismann%60s%20peak%20in%20Rwenzori%20mountains%2C%20Uganda.%20Little%20lakes%20among%20the%20mossy%20rocks%20at%20high%20altitudes-hero.webp?alt=media&token=7333ef02-d1b2-4014-9596-df917bad950c",
    tags: ["מערב", "הרים", "פארק לאומי"]
  },



  // ===== Water / Activities =====
  {
    slug: "nile-cruise-murchison",
    name: "שייט לנילוס – מורצ'יסון",
    category: "water",
    area: "צפון-מערב",
    family: true,
    night_drive: false,
    boat: true,
    cost_est: "$$",
    season: "כל השנה",
    highlights: ["שייט לבסיס המפלים", "היפופוטמים", "תנינים", "ציפורי מים"],
    combos: ["murchison-falls"],
    summary: "הפלגה אל בסיס המפלים ותצפיות חיות משובחות.",
    description:
      "מסלול שייט לאורך הנילוס עד בסיס מפלי מורצ'יסון עם מפגשים קרובים להיפו ותנינים.",
    logistics: { drive_from_kla: "5–6 שעות", best_time: "אחה\"צ לשייט", duration_hours: 3 },
    gallery: ["https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg"],
    image: "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg",
    tags: ["צפון-מערב", "שייט"]
  },
  {
    slug: "white-nile-rafting",
    name: "רפטינג בג'ינג'ה (נילוס לבן)",
    category: "water",
    area: "מזרח (ג'ינג'ה)",
    family: false,
    night_drive: false,
    boat: true,
    cost_est: "$$",
    season: "כל השנה",
    highlights: ["רפטינג Class V", "מקור הנילוס", "בנג'י"],
    combos: ["source-of-nile"],
    summary: "אקשן מהמעלה הראשונה עם צוותים מנוסים.",
    description:
      "אחד מאתרי הרפטינג הטובים באפריקה—זרימות חזקות, הדרכה מקצועית ומגוון מסלולים.",
    logistics: { drive_from_kla: "2–3 שעות", best_time: "תלוי מז\"א", duration_hours: 4.5 },
    gallery: ["https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg"],
    image: "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg",
    tags: ["מזרח", "אקסטרים"]
  },
  {
    slug: "lake-bunyonyi",
    name: "אגם בוניוני",
    category: "water",
    area: "דרום-מערב",
    family: true,
    night_drive: false,
    boat: true,
    cost_est: "$",
    season: "כל השנה",
    highlights: ["29 איים", "שייט רגוע", "נופים מרהיבים"],
    combos: ["bwindi-gorillas"],
    summary: "מקום מושלם למנוחה ושייט רגוע בין איים ציוריים.",
    description:
      "אגם ציורי בין גבעות ירוקות, אקלים נעים ומבחר לודג'ים לנופש ושקט.",
    logistics: { drive_from_kla: "6–7 שעות", best_time: "שקיעה", duration_hours: 2 },
    gallery: ["https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg"],
    image: "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg",
    tags: ["דרום-מערב", "מנוחה"]
  },

  // ===== Culture =====
  {
    slug: "kampala-food-markets",
    name: "קמפלה – אוכל ושווקים",
    category: "culture",
    area: "מרכז",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$",
    season: "כל השנה",
    highlights: ["שווקים מקומיים", "אוכל רחוב", "מוזיקה חיה", "אומנות"],
    combos: [],
    summary: "סיור צבעוני של טעמים, צלילים ואמנות בעיר הבירה.",
    description:
      "חוויית אוכל רחוב ושווקים תוססים, מוזיקה חיה ואמנות מקומית בקצב קמפלה.",
    logistics: { drive_from_kla: "במרכז העיר", best_time: "בוקר לשווקים, ערב למוזיקה", duration_hours: 3 },
    gallery: ["https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg"],
    image: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg",
    tags: ["מרכז", "אוכל", "מוזיקה"]
  },
  {
    slug: "buganda-heritage",
    name: "מורשת בגנדה",
    category: "culture",
    area: "מרכז",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$",
    season: "כל השנה",
    highlights: ["ארמון הקבאקה", "קברי קסובי", "מסורות מקומיות"],
    combos: [],
    summary: "אתרי מורשת מרכזיים של ממלכת בגנדה.",
    description:
      "ביקור בארמון הקבאקה, בקברי קסובי ובאתרי מסורת פעילים הממחישים תרבות חיה.",
    logistics: { drive_from_kla: "1–2 שעות", best_time: "כל היום", duration_hours: 2.5 },
    gallery: ["https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg"],
    image: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg",
    tags: ["מרכז", "מסורת"]
  },
  {
    slug: "community-experiences-west",
    name: "מפגשי קהילה במערב",
    category: "culture",
    area: "מערב",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$",
    season: "כל השנה",
    highlights: ["חקלאות הרים", "אומנויות יד", "ביקורי בית", "בישול מקומי"],
    combos: ["bwindi-gorillas", "queen-elizabeth"],
    summary: "היכרות אמיתית עם חיי הכפר והאירוח המקומי.",
    description:
      "ביקורים בבתי תושבים, סדנאות אומנות ומעקב אחרי עבודת השדה—חוויה אותנטית מחברת.",
    logistics: { drive_from_kla: "6–8 שעות", best_time: "כל היום", duration_hours: 3 },
    gallery: ["https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg"],
    image: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg",
    tags: ["מערב", "קהילה", "אותנטי"]
  },
  {
    slug: "ndere-center",
    name: "מופעי ריקוד ומוזיקה",
    category: "culture",
    area: "מרכז",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$",
    season: "כל השנה",
    highlights: ["ריקודים מסורתיים", "מוזיקה חיה", "תלבושות צבעוניות", "סיפורים"],
    combos: [],
    summary: "מופע מרהיב עם להקה מקומית וסיפורי תרבות.",
    description:
      "שילוב של ריקוד, תלבושות, נגינה ושירה מרחבי אוגנדה לערב תרבות חי ותוסס.",
    logistics: { drive_from_kla: "≈30 דקות", best_time: "ערב (לעיתים שבת)", duration_hours: 2 },
    gallery: ["https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg"],
    image: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg",
    tags: ["מרכז", "מוזיקה"]
  },

  // ===== Sub-areas / Complements =====
  {
    slug: "kazinga-channel",
    name: "שייט תעלת קזינגה",
    category: "safari",
    area: "מערב",
    family: true,
    night_drive: false,
    boat: true,
    cost_est: "$",
    season: "כל השנה",
    highlights: ["היפופוטמים", "תנינים", "ציפורי מים", "פילים שותים"],
    combos: ["queen-elizabeth"],
    summary: "תצפיות מרוכזות של חיות מים וציפורים.",
    description:
      "הפלגה בין אגמי ג'ורג' ואדוארד—אחת מחוויות הצפרות והצילום הטובות באזור.",
    logistics: { drive_from_kla: "6–7 שעות", best_time: "אחה\"צ מאוחר לתאורה טובה", duration_hours: 2.5 },
    gallery: ["https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    tags: ["מערב"]
  },
  {
    slug: "ishasha",
    name: "אישאשה",
    category: "safari",
    area: "דרום פארק המלכה אליזבת",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$$",
    season: "כל השנה",
    highlights: ["אריות מטפסי עצים", "נופי סוואנה", "צילום ייחודי"],
    combos: ["queen-elizabeth"],
    summary: "תת-אזור דרומי הידוע באריות המטפסים על עצים.",
    description:
      "סוואנות פתוחות עם סיכוי מצוין לצפייה באריות על ענפים ותצפיות שקיעה יפות.",
    logistics: { drive_from_kla: "7–8 שעות", best_time: "בוקר ואחה\"צ", duration_hours: 2.5 },
    gallery: ["https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    tags: ["דרום-מערב"]
  },

  // ===== En route =====
  {
    slug: "ziwa-rhino-sanctuary",
    name: "Ziwa Rhino Sanctuary",
    category: "safari",
    area: "מרכז-צפון (בדרך למורצ'יסון)",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$$",
    season: "כל השנה",
    highlights: ["קרנפים לבנים בהליכה מודרכת", "סיור ריינג'רים", "צפרות מעולה"],
    combos: ["murchison-falls"],
    summary: "עצירת ביניים מעולה לצפייה מודרכת בקרנפים לבנים.",
    description:
      "סיור הליכה בטוח ומודרך, היכרות עם מאמצי השימור וצפרות נהדרת באזור.",
    logistics: { drive_from_kla: "3–3.5 שעות", best_time: "בוקר/אחה\"צ", duration_hours: 2 },
    gallery: ["https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg"],
    image: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg",
    tags: ["בדרך למורצ'יסון"]
  }
];

// קטגוריה: בספארי נציג רק פארקים לאומיים (ע"י תג "פארק לאומי") ולא פריטי wildlife,
// בשאר הקטגוריות—לפי השדה category.
export const getCategoryParks = (category: string): Park[] => {
  if (category === "safari") {
    return parks.filter(
      (p) => p.category === "safari" || (p.tags?.includes("פארק לאומי") && p.category !== "wildlife")
    );
  }
  return parks.filter((p) => p.category === category);
};

export const getParkBySlug = (slug: string): Park | undefined =>
  parks.find((park) => park.slug === slug);

export const getRelatedParks = (currentPark: Park, limit: number = 3): Park[] =>
  parks
    .filter((park) => park.slug !== currentPark.slug && park.category === currentPark.category)
    .slice(0, limit);