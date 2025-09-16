// src/data/parks.ts
export interface Park {
  slug: string;
  name: string;
  heroTitle: string;
  generalTitle: string;
  category: string;
  area: string;
  family: boolean;
  night_drive: boolean;
  boat: boolean;
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
  funFact?: string;
  importantInfo?: string[];
  infoGrid?: {
    seasons?: string[];
    access?: string[];
    gates?: string[];
    experiences?: string[];
    duration?: string[];
    didYouKnow?: string[];
  };
}

export const parks: Park[] = [
  // ===== Safari (National Parks) =====
  {
    slug: "queen-elizabeth",
    name: "פארק המלכה אליזבת",
    heroTitle: "פארק המלכה אליזבת",
    generalTitle: "פארק המלכה אליזבת",
    category: "safari",
    area: "מערב",
    family: true,
    night_drive: false,
    boat: true,
    season: "יוני–ספטמבר, דצמבר–פברואר",
    highlights: ["שייט בתעלת קזינגה", "אריות מטפסי עצים", "פילים ובאפלו"],
    combos: ["kazinga-channel", "ishasha"],
    summary: "ספארי קלאסי עם שייט ותצפיות מגוונות.",
    description: "פארק מגוון: סוואנה, יערות וגופי מים. תעלת קזינגה היא מוקד חיות מרכזי.",
    logistics: { drive_from_kla: "6–7 שעות", best_time: "בוקר/אחה״צ", duration_hours: 3 },
    gallery: ["https://example.com/qe1.jpg"],
    image: "https://example.com/qe-hero.jpg",
    tags: ["מערב", "פארק לאומי"],
    importantInfo: [
      "עונות השנה: אוגנדה נמצאת על קו המשווה ולכן אפשר לטייל בה כל השנה. ההבדל הוא בין עונה יבשה לעונה רטובה.",
      "יבשה (דצמבר–פברואר, יוני–אוגוסט): חיות מתרכזות סביב מקורות מים, הדרכים לרוב נוחות יותר, וראות בעלי החיים טובה יותר.",
      "רטובה (מרץ–מאי, ספטמבר–נובמבר): הנוף ירוק ושופע, שפע ציפורים נודדות, פחות עומס תיירים – אך חלק מהשבילים עשויים להיות בוציים ומאתגרים.",
      "נסיעה והגעה: כ-6-7 שעות נסיעה מקמפלה. כדאי יציאה מוקדמת בבוקר או לינה בדרך.",
      "שערי כניסה: קאטונגו (Katungo), אישאשה (Ishasha), קזונגו (Kazungu).",
      "חוויות ייחודיות: שייט בתעלת קזינגה - חובה להזמין מראש. סקטור אישאשה (אריות מטפסי עצים) - תיאום מראש.",
      "משך שהות מומלץ: 2-3 ימים לשילוב מלא של ספארי, שייט ופעילויות נוספות."
    ],
    infoGrid: {
      seasons: [
        "אין מגבלה לטייל כל השנה",
        "כל עונה מציעה ייחוד משלה:",
        "העונה היבשה (דצמבר–פברואר, יוני–אוגוסט): קל יותר לנוע בדרכים, בעלי החיים מתרכזים במקורות מים, ספארי נוח ונגיש",
        "העונה הרטובה (מרץ–מאי, ספטמבר–נובמבר): נופים ירוקים במיוחד, שמיים נקיים לצילום, פחות מטיילים באתרים"
      ],
      access: [
        "ברכב: כ־6–7 שעות מקמפלה דרך פורט פורטל או מסאקה",
        "בטיסה: טיסות פנימיות עם Bar Aviation מאנטבה או קאג'אנסי (כשעה טיסה)"
      ],
      gates: [
        "קבטורו – שער דרומי סמוך לקאטווה, קרוב לתעלת קזינגה ולאזור הציפורים",
        "אישאשה – שער דרומי נוסף, פופולרי בזכות האריות המטפסים על עצים",
        "קטונגורו – שער מרכזי ליד העיירה קטונגורו, מחבר בין צפון לדרום הפארק",
        "קיקורונגו – שער צפוני ליד כביש קאסה–פורט פורטל, גישה לחלק הצפוני"
      ],
      experiences: [
        "אריות מטפסי עצים – תופעה נדירה באזור איששה",
        "שייט בתעלת קזינגה – צפייה בהיפופוטמים, תנינים, פילים ועופות מים",
        "צפרות עשירה – מעל 600 מיני עופות ייחודיים",
        "שימפנזים בקיאמבורה – מסלול רגלי מודרך ביער השקע"
      ],
      duration: [
        "מינימום: יום אחד לספארי קצר או לשייט",
        "מומלץ: 2–3 לילות לשילוב ספארי, שייט ושימפנזים",
        "מורחב: 4–5 לילות לחוויה מלאה"
      ],
      didYouKnow: [
        "פארק המלכה אליזבת נקרא על שמה של המלכה אליזבת השנייה",
        "מאכלס את אוכלוסיית ההיפופוטמים הגדולה באפריקה",
        "הפארק הוכרז כשמורת טבע בשנת 1952",
        "משתרע על שטח של כ-1,978 קמ\"ר"
      ]
    }
  },
  {
    slug: "murchison-falls",
    name: "פארק לאומי מורצ׳יסון פולס (Murchison Falls National Park)",
    heroTitle: "הפארק הלאומי מפלי מורצ'יסון",
    generalTitle: "הפארק הגדול והוותיק באוגנדה – ביתם של ארבעה מתוך חמשת ה Big 5",
    category: "safari",
    area: "צפון-מערב",
    family: true,
    night_drive: false,
    boat: true,
    season: "כל השנה",
    highlights: [
      "מפלי מורצ׳יסון – המפלים החזקים ביותר על נהר הנילוס",
      "שייט בנהר הנילוס עם היפופוטמים ותנינים",
      "עדרי פילים, ג'ירפות ובופאלו",
      "טורפים: אריות, נמרים וצבועים",
      "צפרות נדירה – מעל 450 מיני עופות"
    ],
    combos: ["ziwa-rhino"],
    summary: "הפארק הגדול ביותר באוגנדה עם מפל עוצמתי שאין שני לו",
    description: "פארק מורצ'יסון פולס (Murchison Falls National Park) הוא הפארק הלאומי הגדול ביותר באוגנדה, המשתרע על פני יותר מ־3,800 קמ\"ר. הפארק מפורסם במפל מורצ'יסון הדרמטי, שבו נהר הנילוס נדחק דרך מעבר צר ברוחב שבעה מטרים בלבד, ויוצר מפל בעוצמה אדירה. סביב המפל מתפרשים מישורי סוואנה פתוחים, יערות וגדות נהר שמאכלסות שפע של בעלי חיים.\n\nבפארק חיים פילים, אריות, נמרים, ג'ירפות, בופאלו, היפופוטמים, תנינים ומאות מיני ציפורים. הוא מהווה יעד מרכזי לספארי באוגנדה ומשלב נסיעות שטח, שייט בנהר וצפייה מרהיבה בטורפים ואוכלי עשב.",
    logistics: { drive_from_kla: "5–6 שעות", best_time: "בוקר לספארי, אחה״צ לשייט", duration_hours: 3 },
    gallery: ["https://example.com/mf1.jpg"],
    image: "https://example.com/mf-hero.jpg",
    tags: ["צפון-מערב", "פארק לאומי"],
    importantInfo: [
      "הערה כללית: ניתן לטייל כל השנה. ההבדל הוא בין עונה יבשה לעונה רטובה.",
      "יבשה (דצמבר–פברואר, יוני–אוגוסט): חיות סביב מקורות מים, דרכים נוחות, ראות טובה.",
      "רטובה (מרץ–מאי, ספטמבר–נובמבר): נוף ירוק, צפרות מעולה, חלק מהדרכים מאתגרות.",
      "נסיעה והגעה: ~305 ק״מ מקמפלה, כ־4–5 שעות. טיסות פנימיות עם Bar Aviation.",
      "שערי כניסה: דרום - בוגונגו (Bugungu), קיצ'ומבניובו (Kichumbanyobo). צפון - טנגי (Tangi), וונקוואר (Wankwar), צ'ובה (Chobe).",
      "חוויות ייחודיות: מפלי מורצ'יסון – הנילוס נדחס למעבר של 8 מטר. שייט בסירה לבסיס המפלים או לדלתת הנילוס. ספארי ברכב וספארי לילה.",
      "משך שהות מומלץ: 2-3 ימים מספיקים לשילוב ספארי, שייט וטרק קצר. 3+ ימים למטיילים המעוניינים גם בצפרות או טרקינג שימפנזים ביער בודונגו."
    ],
    infoGrid: {
      seasons: [
        "אין מגבלה לטייל כל השנה",
        "כל עונה מציעה ייחוד משלה:",
        "העונה היבשה (דצמבר–פברואר, יוני–אוגוסט): קל יותר לנוע בדרכים, בעלי החיים מתרכזים במקורות מים, ספארי נוח ונגיש",
        "העונה הרטובה (מרץ–מאי, ספטמבר–נובמבר): נופים ירוקים במיוחד, שמיים נקיים לצילום, פחות מטיילים באתרים"
      ],
      access: [
        "ברכב: כ־5–6 שעות נסיעה מקמפלה",
        "בטיסה: טיסות פנימיות עם Bar Aviation מאנטבה לנקודות סמוכות"
      ],
      gates: [
        "פרא – שער מרכזי בדרום, מהווה נקודת גישה עיקרית למפלים ולסיורי ספארי",
        "קיצ'ומבנניובו – שער צפוני, מחבר את הכביש הוימה–מסינדי לאזורי הפארק",
        "טנגי – שער צפוני נוסף, גישה מהירה לסוואנות ולגדות הנילוס"
      ],
      experiences: [
        "מפל מורצ'יסון – מפל הנילוס הצר והעוצמתי ביותר",
        "שייט לראש המפל – חוויה ייחודית של צפייה במפל מלמטה",
        "מסלול קונגו – מסלול טבעי נדיר בחלק המערבי של הפארק"
      ],
      duration: [
        "מינימום: יומיים",
        "מומלץ: 3–4 לילות לשילוב ספארי ושייט",
        "מורחב: 5 לילות כולל מסלולי טרקים ופעילויות נוספות"
      ],
      didYouKnow: [
        "הפארק קרוי על שם החוקר הבריטי סר רודריק מורצ'יסון, נשיא החברה הגיאוגרפית המלכותית",
        "אף שבימינו מקומיים רבים מעדיפים את השם המסורתי \"Kabalega Falls\"",
        "הפארק משתרע על שטח של יותר מ-3,800 קמ\"ר",
        "מאכלס מעל 450 מיני עופות ייחודיים"
      ]
    }
  },
  {
    slug: "lake-mburo",
    name: "אגם מבורו",
    heroTitle: "אגם מבורו",
    generalTitle: "אגם מבורו",
    category: "safari",
    area: "מרכז-דרום",
    family: true,
    night_drive: true,
    boat: false,
    season: "כל השנה",
    highlights: ["זברות", "ספארי לילה", "שייט באגם"],
    combos: [],
    summary: "פארק קטן אך מגוון; מתאים מאוד למשפחות.",
    description: "זברות, אנטילופות וצפרות מעולה; קרוב יחסית לקמפלה.",
    logistics: { drive_from_kla: "3–4 שעות", best_time: "בוקר או ערב", duration_hours: 2.5 },
    gallery: ["https://example.com/lm1.jpg"],
    image: "https://example.com/lm-hero.jpg",
    tags: ["מרכז-דרום", "פארק לאומי"],
    importantInfo: [
      "עונות השנה: אוגנדה על קו המשווה ולכן ניתן לטייל כל השנה.",
      "יבשה (יוני–אוגוסט, דצמבר–פברואר): בעלי חיים מתרכזים סביב האגם, קל לתצפת.",
      "רטובה (מרץ–מאי, ספטמבר–נובמבר): הנוף ירוק ושופע, עונת לידות של חיות רבות.",
      "נסיעה והגעה: 228 ק״מ מקמפלה, נסיעה של 3.5–4 שעות בלבד.",
      "שערי כניסה: שער נשארה (Nshara Gate) ושער סנגה (Sanga Gate).",
      "חוויות ייחודיות: ספארי רגלי, רכיבה על סוסים, שייט על האגם, ספארי לילה.",
      "משך שהות מומלץ: 2–3 ימים."
    ]
  },
  {
    slug: "kidepo",
    name: "קידפו ואלי",
    heroTitle: "קידפו ואלי",
    generalTitle: "קידפו ואלי",
    category: "safari",
    area: "צפ׳-מז׳ אוגנדה",
    family: false,
    night_drive: false,
    boat: false,
    season: "עונה יבשה",
    highlights: ["נופים פתוחים", "פילים וג'ירפות", "טורפים", "מפגש שבטים"],
    combos: [],
    summary: "אחד האזורים הפראיים ביותר—מרוחק, דרמטי ומעט תיירים.",
    description: "סוואנות פתוחות והרים באופק, אוכלוסיות גדולות של חיות וסיכוי למפגש תרבותי עם שבטים מקומיים.",
    logistics: { drive_from_kla: "10–12 שעות", flight_option: "טיסה פנימית זמינה", duration_hours: 3 },
    gallery: ["https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    tags: ["צפון-מזרח", "מרוחק", "פראי", "פארק לאומי"],
    importantInfo: [
      "עונות השנה: אוגנדה נמצאת על קו המשווה ולכן ניתן לטייל בה כל השנה.",
      "יבשה (דצמבר–מרץ, יוני–ספטמבר): חיות מתרכזות סביב מקורות מים בעמק נארוס, תצפיות קלות וברורות יותר.",
      "רטובה (אפריל–מאי, אוקטובר–נובמבר): הנוף ירוק ועשיר, מתאים במיוחד לצילום נופים, אך בעלי החיים מפוזרים והשבילים עלולים להיות בוציים.",
      "נסיעה והגעה: כ-700 ק”מ מקמפלה – נסיעה יבשתית של 10–12 שעות. הדרך הנוחה ביותר: טיסה פנימית של כשעתיים מאנטבה למנחת אפוקה (Apoka) שבפארק.",
      "שערי כניסה: לוקומויט (Lokumoit), נטאבה (Nataba).",
      "חוויות ייחודיות: צפייה ביענים בטבע, אוכלוסייה גדולה של ג’ירפות, מפגש תרבותי עם שבט הקאראמוג’ונג ושבט האיק (Ik).",
      "משך שהות מומלץ: 2–3 ימים אם מגיעים בטיסה, 4+ ימים אם מגיעים בנסיעה יבשתית."
    ]
  },
  {
    slug: "semuliki",
    name: "סמוליקי פארק לאומי",
    heroTitle: "סמוליקי פארק לאומי",
    generalTitle: "סמוליקי פארק לאומי",
    category: "safari",
    area: "מע׳ אוגנדה",
    family: true,
    night_drive: false,
    boat: false,
    season: "כל השנה (יבשה עדיפה)",
    highlights: ["מעיינות חמים", "יער נמוך חם-לח", "צפרות מערב-אפריקאית"],
    combos: ["kibale-chimps", "queen-elizabeth"],
    summary: "מעיינות חמים וצפרות נדירה על התפר בין אקולוגיות.",
    description:
      "מפגש בין אקולוגיה קונגולזית למזרח-אפריקאית: יערות נמוכים חמים-לחים ונקודות עניין גיאותרמיות.",
    logistics: { drive_from_kla: "6–7 שעות", best_time: "עונות יבשות", duration_hours: 2 },
    gallery: ["https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg"],
    image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg",
    tags: ["מערב", "צפרות", "פארק לאומי"],
    importantInfo: [
      "עונה יבשה (דצמבר–פברואר, יוני–אוגוסט): מזג אוויר יבש, שבילים נוחים יותר וקלות גבוהה לצפייה בחיות.",
      "עונה רטובה (מרץ–מאי, ספטמבר–נובמבר): נוף ירוק ועשיר, שפע של ציפורים נודדות, אך השבילים עלולים להיות בוציים.",
      "נסיעה והגעה: כ־305 ק״מ מקמפלה, כ־4–5 שעות עד Fort Portal ועוד כשעה לשער הפארק.",
      "שערי כניסה: Kirumia Gate (טרקים ארוכים), Sempaya Gate (ליד המעיינות החמים), Ntandi Gate (ליד אגם אלברט).",
      "חוויות ייחודיות: Sempaya Hot Springs, צפרות (מעל 440 מינים), פרימטים, טרקים רגליים, מפגשים תרבותיים עם בני הבטווה (Batwa pygmies).",
      "משך שהות מומלץ: 1–2 ימים לביקור במעיינות החמים ובמסלול קצר, 2–3 ימים למי שרוצה לשלב טרקים ארוכים, חוויות תרבותיות וצפרות מעמיקה."
    ]
  },
  {
    slug: "ziwa-rhino-sanctuary",
    name: "Ziwa Rhino Sanctuary",
    category: "safari",
    area: "מרכז-צפ׳ אוגנדה",
    family: true,
    night_drive: false,
    boat: false,
    season: "כל השנה",
    highlights: ["קרנפים לבנים בהליכה מודרכת", "סיור ריינג'רים", "צפרות מעולה"],
    combos: ["murchison-falls-safari"],
    summary: "עצירת ביניים מעולה לצפייה מודרכת בקרנפים לבנים.",
    description: "סיור הליכה בטוח ומודרך, היכרות עם מאמצי השימור וצפרות נהדרת באזור.",
    logistics: { drive_from_kla: "3–3.5 שעות", best_time: "בוקר/אחה\"צ", duration_hours: 2 },
    gallery: ["https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg"],
    image: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg",
    tags: ["בדרך למורצ'יסון"]
  },
  {
    slug: "ishasha",
    name: "אישאשה",
    category: "safari",
    area: "מע׳ אוגנדה",
    family: true,
    night_drive: false,
    boat: false,
    season: "כל השנה",
    highlights: ["אריות מטפסי עצים", "נופי סוואנה", "צילום ייחודי"],
    combos: ["queen-elizabeth"],
    summary: "תת-אזור דרומי הידוע באריות המטפסים על עצים.",
    description: "סוואנות פתוחות עם סיכוי מצוין לצפייה באריות על ענפים ותצפיות שקיעה יפות.",
    logistics: { drive_from_kla: "7–8 שעות", best_time: "בוקר ואחה\"צ", duration_hours: 2.5 },
    gallery: ["https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    tags: ["דרום-מערב"]
  },

  // ===== Wildlife / Primates =====
  {
    slug: "bwindi-gorillas",
    name: "גורילות ביער בווינדי",
    heroTitle: "גורילות ביער בווינדי",
    generalTitle: "גורילות ביער בווינדי",
    category: "wildlife",
    area: "דרום-מערב",
    family: true,
    night_drive: false,
    boat: false,
    season: "יוני–ספטמבר, דצמבר–פברואר (יבשות); מרץ–מאי, אוק–נוב (גשומות)",
    highlights: ["גורילות ההרים (20+ משפחות מורגלות)", "יער גשם הררי עתיק", "צפרות אנדמית נדירה", "מסלולים מגוונים לפי סקטור"],
    combos: ["lake-bunyonyi", "queen-elizabeth"],
    summary: "מפגש אינטימי ומכבד עם גורילות ההרים בתוך יער גשם הררי—שעה תצפית ליד הלהקה, רישיון מוגבל שיש להזמין מראש.",
    description: "יער Bwindi (Bwindi Impenetrable Forest) שוכן בדרום־מערב אוגנדה, בגבול רואנדה וקונגו—יער גשם טרופי הררי מהעשירים באפריקה.",
    logistics: { drive_from_kla: "8–9 שעות", flight_option: "טיסה לקיסורו/קיהיה + העברה יבשתית", best_time: "בוקר מוקדם לטרק", duration_hours: 4 },
    gallery: ["https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg"],
    image: "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg",
    tags: ["דרום-מערב", "טרק", "פארק לאומי", "גורילות"],
    importantInfo: [
      "עונות השנה: אוגנדה על קו המשווה ולכן ניתן לטייל כל השנה.",
      "עונה יבשה (יוני–ספטמבר, דצמבר–פברואר): שבילים נוחים, ראות טובה, מומלץ במיוחד.",
      "עונה רטובה (מרץ–מאי, אוקטובר–נובמבר): שבילים חלקלקים, פחות תיירים.",
      "נסיעה והגעה: כ־9–10 שעות מקמפלה. נסיעה מקיגאלי (רואנדה) קצרה יותר – כ־4 שעות.",
      "שערי כניסה (מגזרים): בוהומה (Buhoma), רוהיג'ה (Ruhija), ראשאגה (Rushaga), נקורינגו (Nkuringo).",
      "חוויות ייחודיות: טרקינג גורילות, חוויית הסתגלות גורילות (Habituation), מפגש עם קהילות מקומיות (Batwa).",
      "משך שהות מומלץ: 2–3 ימים לטרקינג גורילות יחיד, 4+ ימים לשילוב טרקים נוספים ותרבות מקומית."
    ]
  },
  {
    slug: "mgahinga-gorillas",
    name: "גורילות מגהינגה",
    heroTitle: "גורילות מגהינגה",
    generalTitle: "גורילות מגהינגה",
    category: "wildlife",
    area: "דרום-מערב",
    family: true,
    night_drive: false,
    boat: false,
    season: "יוני–ספטמבר, דצמבר–פברואר",
    highlights: ["חלופה שקטה לבווינדי", "נופים וולקניים", "פחות תיירים"],
    combos: ["lake-bunyonyi"],
    summary: "חלופה שקטה לבווינדי על רקע פסגות וולקניות.",
    description: "פארק מגהינגה מציע טרק גורילות באווירה רגועה יותר, עם נופים וולקניים וזרימת מבקרים נמוכה.",
    logistics: { drive_from_kla: "8–9 שעות", best_time: "בוקר מוקדם", duration_hours: 4 },
    gallery: ["https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg"],
    image: "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg",
    tags: ["דרום-מערב", "וולקני", "שקט", "פארק לאומי"],
    importantInfo: [
      "עונות השנה: אוגנדה על קו המשווה ולכן ניתן לטייל כל השנה.",
      "עונה יבשה (יוני–ספטמבר, דצמבר–פברואר): שבילים נוחים יותר לטרקים, מומלץ במיוחד.",
      "עונה רטובה (מרץ–מאי, ספטמבר–נובמבר): שבילים חלקלקים יותר, פחות תיירים.",
      "נסיעה והגעה: כ־9–10 שעות מקמפלה. נסיעה מקיגאלי (רואנדה): כ־3–4 שעות בלבד.",
      "שערי כניסה: הפעילויות יוצאות ממרכז המבקרים הראשי של הפארק (Ntebeko Visitor Centre).",
      "חוויות ייחודיות: טרקינג גורילות, טרקינג קופים זהובים (Golden Monkeys), טיפוס הרי געש כבויים (Mt. Sabyinyo, Mt. Gahinga, Mt. Muhabura).",
      "משך שהות מומלץ: יום אחד לטרקינג יחיד, 2–3 ימים לשילוב של טרקינג פרימטים עם טיפוס הר געש."
    ]
  },
  {
    slug: "kibale-chimps",
    name: "שימפנזים בקיבאלה",
    category: "wildlife",
    area: "מערב",
    family: true,
    night_drive: false,
    boat: false,
    season: "כל השנה",
    highlights: ["מעקב אחר שימפנזים", "יער טרופי", "13 מיני פרימטים"],
    combos: ["crater-lakes"],
    summary: "סיור בוקר/צהריים ביער גשם עשיר; גיל 12+.",
    description: "קיבאלה נחשבת ל'בירת הפרימטים' של אוגנדה עם אוכלוסיית שימפנזים גדולה ומורגלת למפגשים מודרכים.",
    logistics: { drive_from_kla: "5–6 שעות", best_time: "בוקר מוקדם או אחה\"צ", duration_hours: 2.5 },
    gallery: ["https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg"],
    image: "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg",
    tags: ["מערב", "יער טרופי", "פארק לאומי"],
    importantInfo: [
      "עונות השנה: אוגנדה על קו המשווה ולכן ניתן לטייל כל השנה.",
      "עונה יבשה (דצמבר–מרץ, יוני–ספטמבר): מזג אוויר נוח, סיכוי גבוה לפגוש שימפנזים.",
      "עונה רטובה (אפריל–מאי, אוקטובר–נובמבר): פחות מבקרים, השימפנזים נשארים קרוב למקורות מזון – מה שמקל על איתורם.",
      "נסיעה והגעה: כ־5–6 שעות מקמפלה. אפשרות לטיסות פנימיות לשדה התעופה קאססה (Kasese) ומשם נסיעה קצרה.",
      "שערי כניסה: Kanyanchu Visitor Centre – נקודת המוצא העיקרית לטרקינג שימפנזים.",
      "חוויות ייחודיות: טרקינג שימפנזים (מסלול של 2–3 שעות), חוויית הסתגלות (יום שלם עם חוקרים), צפרות ובעלי חיים נוספים.",
      "משך שהות מומלץ: יום אחד לטרקינג רגיל, 2–3 ימים לשילוב חווית הסתגלות ופעילויות נוספות."
    ]
  },
  {
    slug: "kyambura-gorge",
    name: "שימפנזים בקיאמבורה",
    category: "wildlife",
    area: "דרום-מערב",
    family: true,
    night_drive: false,
    boat: false,
    season: "כל השנה",
    highlights: ["יער גשם תת־קרקעי", "טרק ייחודי", "קופים אדומים"],
    combos: ["queen-elizabeth"],
    summary: "טרק שימפנזים ייחודי בלב קניון, כחלק מטיול בפארק המלכה אליזבת.",
    description: "הנקיק נמצא בתוך פארק המלכה אליזבת׳, סמוך ל־Fig Tree Camp. לרוב משלבים את הביקור כאן כחלק מטיול ספארי רחב יותר בפארק.",
    logistics: { drive_from_kla: "7–8 שעות", best_time: "בוקר", duration_hours: 3 },
    gallery: ["https://example.com/kyambura1.jpg"],
    image: "https://example.com/kyambura-hero.jpg",
    tags: ["מערב", "טרק", "שימפנזים"],
    importantInfo: [
      "עונות השנה: אוגנדה על קו המשווה ולכן ניתן לטייל כל השנה.",
      "עונה יבשה (יוני–אוקטובר, דצמבר–מרץ): שבילים נוחים יותר, ראות טובה יחסית.",
      "עונה רטובה (אפריל–מאי, נובמבר): היער ירוק ושופע, השימפנזים נשארים קרוב למקורות המזון – מה שמקל על איתורם.",
      "נסיעה והגעה: הנקיק נמצא בתוך פארק המלכה אליזבת׳, לרוב משלבים את הביקור כאן כחלק מטיול ספארי רחב יותר בפארק.",
      "שערי כניסה: Fig Tree Camp – מרכז המבקרים הראשי, ממנו יוצאים כל הטרקים.",
      "חוויות ייחודיות: טרקינג שימפנזים ביער גשם תת־קרקעי, צפייה בשימפנזים לצד פרימטים נוספים.",
      "משך שהות מומלץ: חצי יום עד יום כדי לבצע טרקינג שימפנזים ולשלב אותו עם ספארי."
    ]
  },

  // ===== Mountains & Treks =====
  {
    slug: "mount-elgon",
    name: "פארק לאומי הר אלגון",
    category: "mountains",
    area: "מזרח",
    family: true,
    night_drive: false,
    boat: false,
    season: "דצמבר-פברואר, יוני-ספטמבר",
    highlights: ["הר געש כבוי", "קלדרה עצומה", "מפלי סיפי"],
    combos: ["sipi-falls"],
    summary: "הר געש כבוי עם קלדרה עצומה ומפלי סיפי.",
    description: "אלגון הוא הר געש כבוי ענק, היושב בגבול אוגנדה–קניה.",
    logistics: { drive_from_kla: "4–5 שעות", best_time: "עונה יבשה", duration_hours: 6 },
    gallery: ["https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FThe%20amazing%20Sipi%20falls%20in%20the%20Mount%20Elgon%20national%20park%20in%20Uganda.webp?alt=media&token=13642ed8-bd50-42a1-ac7e-d7ef3e39ed62"],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FMount%20Elgon%20national%20park%20in%20Uganda-hero.webp?alt=media&token=f311d9a8-eedc-497a-961d-01145b159634",
    tags: ["מזרח", "הרים", "פארק לאומי"],
    importantInfo: [
      "עונות השנה: אוגנדה על קו המשווה ולכן ניתן לטייל בה בכל ימות השנה.",
      "יבשה (יוני–אוגוסט, דצמבר–מרץ): שבילים נוחים, טרקים קלים יותר.",
      "רטובה (אפריל–מאי, ספטמבר–נובמבר): נוף ירוק ושופע, פחות מטיילים, אך שבילים חלקים יותר.",
      "נסיעה והגעה: כ־235 ק״מ מקמפלה, נסיעה של 5–6 שעות.",
      "שערי כניסה: Sipi Gate (מפלי סיפי), Budadiri Gate (טרק הסאסה).",
      "חוויות ייחודיות: טיפוס לפסגת Wagagai, טרקים בין מפלים, מערות מלח עתיקות, נופים מגוונים.",
      "משך שהות מומלץ: 2–3 ימים למסלולים קצרים, 4–5 ימים למסלול מלא סביב ההר."
    ]
  },
  {
    slug: "rwenzori-mountains",
    name: "פארק לאומי הרי הרוונזורי",
    category: "mountains",
    area: "מערב",
    family: false,
    night_drive: false,
    boat: false,
    season: "דצמבר-פברואר, יוני-אוגוסט",
    highlights: ["קרחונים על קו המשווה", "חמישה אזורי צמחייה", "פסגת מרגריטה"],
    combos: [],
    summary: "הרי הירח - קרחונים על קו המשווה.",
    description: "הרי הרוונזורי הם יעד טרקים עולמי ברמה הגבוהה ביותר.",
    logistics: { drive_from_kla: "6–7 שעות", best_time: "דצמ–פבר / יונ–אוג", duration_hours: 8 },
    gallery: ["https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FSwamp%20in%20Rwenzori%20National%20Park.webp?alt=media&token=9456666b-7548-4045-a6f2-e199583c4ec8"],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FHighland%20landscape%20near%20Weismann%60s%20peak%20in%20Rwenzori%20mountains%2C%20Uganda.%20Little%20lakes%20among%20the%20mossy%20rocks%20at%20high%20altitudes-hero.webp?alt=media&token=7333ef02-d1b2-4014-9596-df917bad950c",
    tags: ["מערב", "הרים", "פארק לאומי"],
    importantInfo: [
      "עונות השנה: ניתן לטייל כל השנה, אך תנאי מזג האוויר עלולים להשתנות בפתאומיות.",
      "יבשה (יוני–אוגוסט, דצמבר–פברואר): העונה הטובה ביותר לטרקים, נגישות גבוהה יותר.",
      "רטובה (מרץ–מאי, ספטמבר–נובמבר): שלג, ברד וגשם אפשריים – מתאימה למטיילים מנוסים המחפשים אתגר.",
      "נסיעה והגעה: ~375 ק״מ מקמפלה, 6–7 שעות נסיעה. אפשרות לטיסות פנימיות למנחת Kasese.",
      "שערי כניסה: Central Circuit, Kilembe Trail.",
      "חוויות ייחודיות: טיפוס לפסגת Margherita Peak, קרחוני עד נדירים באפריקה, מגוון אקולוגי וצפרות.",
      "משך שהות מומלץ: 2–4 ימים לטרקים קצרים, 7–12 ימים לטיפוס לפסגות הגבוהות."
    ]
  },
  
  // ===== Water / Activities =====
  {
    slug: "sipi-falls",
    name: "מפלי סיפי",
    heroTitle: "מפלי סיפי",
    generalTitle: "מפלי סיפי",
    category: "water",
    area: "מזרח",
    family: true,
    night_drive: false,
    boat: false,
    season: "כל השנה (עדיף יבש)",
    highlights: ["שלושה מפלים", "טרקים", "גלישת חבלים", "סיורי קפה"],
    combos: ["mount-elgon"],
    summary: "טרקים לשלושה מפלים מרהיבים באזור הר אלגון.",
    description: "מפלי סיפי הם סדרה של מפלים בקצה של הר אלגון, המציעים נופים עוצרי נשימה ופעילויות מגוונות.",
    logistics: { drive_from_kla: "5–6 שעות", best_time: "עונה יבשה", duration_hours: 4 },
    gallery: ["https://example.com/sipi1.jpg"],
    image: "https://example.com/sipi-hero.jpg",
    tags: ["מזרח", "מפלים", "טרקים"],
    importantInfo: [
      "עונות השנה: עונה יבשה (יוני–אוקטובר, דצמבר–פברואר) - שבילים נוחים ומתאימים לטרקים. עונה רטובה (מרץ–מאי, ספטמבר–נובמבר) - המפלים בשיא עוצמתם, אך השבילים חלקים ומאתגרים.",
      "נסיעה והגעה: כ־220 ק”מ מקמפלה, 5–6 שעות נסיעה. נקודת הגישה העיקרית: העיירה סיפי.",
      "שערי כניסה: אין שערי כניסה רשמיים, הביקור מתבצע דרך מרכזי מבקרים או לודג’ים מקומיים.",
      "חוויות ייחודיות: טרקים לשלושת המפלים, גלישה בחבלים מהמפל הגבוה, סיורי קפה מקומיים וטיולי יום באזור הר אלגון.",
      "משך שהות מומלץ: 1–2 ימים."
    ]
  },
  {
    slug: "white-nile-rafting",
    name: "ג'ינג'ה – מקור הנילוס",
    category: "water",
    area: "מז׳ אוגנדה",
    family: false,
    night_drive: false,
    boat: true,
    season: "כל השנה",
    highlights: ["רפטינג Class V", "מקור הנילוס", "בנג'י"],
    combos: ["source-of-nile"],
    summary: "אקשן מהמעלה הראשונה עם צוותים מנוסים.",
    description: "אחד מאתרי הרפטינג הטובים באפריקה—זרימות חזקות, הדרכה מקצועית ומגוון מסלולים.",
    logistics: { drive_from_kla: "2–3 שעות", best_time: "תלוי מז\"א", duration_hours: 4.5 },
    gallery: ["https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg"],
    image: "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg",
    tags: ["מזרח", "אקסטרים"],
    importantInfo: [
      "עונות השנה: ניתן לטייל בג’ינג’ה לאורך כל השנה.",
      "בעונה היבשה (דצמבר–פברואר, יוני–אוגוסט) – תנאים נוחים לפעילויות מים ורפטינג.",
      "בעונה הרטובה (מרץ–מאי, ספטמבר–נובמבר) – הזרימות בנילוס חזקות יותר, מה שמעצים חוויות כמו קיאקים ורפטינג, אך ייתכנו ימים גשומים.",
      "נסיעה והגעה: כ־80 ק”מ מקמפלה, כ־2–2.5 שעות נסיעה ברכב.",
      "שערי כניסה: אין “שערי פארק” – הכניסה היא ישירות לעיר ג’ינג’ה.",
      "חוויות ייחודיות: ביקור במעיין נקרו (Speke Monument) – נקודת הסימון ההיסטורית של מקור הנילוס. רפטינג וקיאקים במים לבנים, שייט רגוע בסירה על הנילוס, פעילויות אקסטרים כמו בנג’י מעל הנהר, Zipline ו־Quad Biking.",
      "משך שהות מומלץ: יום–יומיים."
    ]
  },
  {
    slug: "lake-victoria",
    name: "אגם ויקטוריה",
    category: "water",
    area: "מרכז",
    family: true,
    night_drive: false,
    boat: true,
    season: "כל השנה",
    highlights: ["שייט", "דיג", "חופים", "צפרות"],
    combos: [],
    summary: "האגם הגדול באפריקה. פעילויות מים ונופש.",
    description: "אגם ויקטוריה הוא אחד האגמים הגדולים בעולם ומציע מגוון רחב של פעילויות נופש ופנאי.",
    logistics: { drive_from_kla: "1–2 שעות", best_time: "כל היום", duration_hours: 2 },
    gallery: ["https://example.com/victoria1.jpg"],
    image: "https://example.com/victoria-hero.jpg",
    tags: ["מרכז", "מים", "נופש"],
    importantInfo: [
      "עונות השנה: בעונה היבשה (דצמבר–פברואר, יוני–אוגוסט) - מזג אוויר נעים לשייט, דיג וביקור באיים. בעונה הרטובה (מרץ–מאי, ספטמבר–נובמבר) - האגם מתמלא, הנופים ירוקים, אך ייתכנו גשמים וסופות מקומיות.",
      "נסיעה והגעה: האגם נגיש ממספר נקודות, הנסיעה מקמפלה לחוף אנטבה – כ־1 שעה.",
      "שערי כניסה: אין שערי כניסה רשמיים. הפעילות מתבצעת דרך נמלים מקומיים ומרכזי תיירות (כגון אנטבה וג’ינג’ה).",
      "חוויות ייחודיות: שייט לאיי סססה (Ssese Islands), דיג טילפיה ונילוס פרץ, ביקור בחופים וצפייה בציפורים.",
      "משך שהות מומלץ: 1–2 ימים לביקור קצר, 3–4 ימים אם משלבים טיול באיים או פעילות דיג מורחבת."
    ]
  },
  {
    slug: "lake-bunyonyi",
    name: "אגם בוניוני",
    category: "water",
    area: "דרום-מערב",
    family: true,
    night_drive: false,
    boat: true,
    season: "כל השנה",
    highlights: ["29 איים", "שייט רגוע", "נופים מרהיבים"],
    combos: ["bwindi-gorillas"],
    summary: "מקום מושלם למנוחה ושייט רגוע בין איים ציוריים.",
    description: "אגם ציורי בין גבעות ירוקות, אקלים נעים ומבחר לודג'ים לנופש ושקט.",
    logistics: { drive_from_kla: "6–7 שעות", best_time: "שקיעה", duration_hours: 2 },
    gallery: ["https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg"],
    image: "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg",
    tags: ["דרום-מערב", "מנוחה"],
    importantInfo: [
      "עונות השנה: בעונה היבשה (דצמבר–פברואר, יוני–אוגוסט) - מזג אוויר יציב ונוח לשייט, טרקים וסיורים. בעונה הרטובה (מרץ–מאי, ספטמבר–נובמבר) - הנוף ירוק ורענן במיוחד, מושלם לצילום, אך שבילי ההרים עלולים להיות חלקים.",
      "נסיעה והגעה: האגם נמצא בדרום־מערב אוגנדה. נסיעה מקמפלה נמשכת כ־7–8 שעות. ניתן להגיע גם בטיסה פנימית לקיסורו (Kisoro) ומשם נסיעה קצרה.",
      "שערי כניסה: אין שערים רשמיים.",
      "חוויות ייחודיות: שיט בקאנו מסורתי בין 29 האיים, לינה בבקתות על איים מבודדים, ביקור ב”אי העונשים” (Punishment Island), טיולי הליכה וצפרות, Zipline מעל האגם.",
      "משך שהות מומלץ: 2–3 ימים כדי ליהנות מהשקט ומהפעילויות. ניתן לשלב כחלק מהמסלול אל/מפארקי הגורילות (בווינדי/מגהינגה)."
    ]
  },

  // Existing parks from previous code, to ensure no data is lost
  {
    slug: "nile-cruise-murchison",
    name: "שייט לנילוס – מורצ'יסון",
    category: "water",
    area: "צפון-מערב",
    family: true,
    night_drive: false,
    boat: true,
    season: "כל השנה",
    highlights: ["שייט לבסיס המפלים", "היפופוטמים", "תנינים", "ציפורי מים"],
    combos: ["murchison-falls-safari"],
    summary: "הפלגה אל בסיס המפלים ותצפיות חיות משובחות.",
    description: "מסלול שייט לאורך הנילוס עד בסיס מפלי מורצ'יסון עם מפגשים קרובים להיפו ותנינים.",
    logistics: { drive_from_kla: "5–6 שעות", best_time: "אחה\"צ לשייט", duration_hours: 3 },
    gallery: ["https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg"],
    image: "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg",
    tags: ["צפון-מערב", "שייט"]
  }
];

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