// src/data/parks.ts
export interface Park {
  slug: string;
  name: string;
  category: string;
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
    duration_hours?: number; // ✅ הוסף שדה חדש
  };
  gallery: string[];
  image: string;
  tags: string[];
}

export const parks: Park[] = [
  // ====== 10 הפארקים הלאומיים (כולם עם תג "פארק לאומי") ======
  
  // 1. בווינדי
  {
    slug: "bwindi-gorillas",
    name: "גורילות ביער בווינדי",
    category: "wildlife",
    area: "דרום-מערב",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$$$",
    season: "יוני–ספטמבר, דצמבר–פברואר",
    highlights: ["מפגש עם גורילות הרים", "יער טרופי עתיק", "מגוון ביולוגי עצום"],
    combos: ["lake-bunyonyi"],
    summary: "טרק מודרך בקבוצות קטנות; רישיון מוגבל, צפייה עד שעה.",
    description: "יער בווינדי הבלתי חדיר הוא אתר מורשת עולמית של אונסק\"ו ובית לכמחצית מגורילות ההרים בעולם.",
    logistics: { drive_from_kla: "8-9 שעות", best_time: "בוקר מוקדם לטרק" },
    gallery: ["https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg"],
    image: "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg",
    tags: ["דרום-מערב", "למשפחות", "טרק", "פארק לאומי"]
  },

  // 2. מגהינגה
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
    summary: "חלופה שקטה בדרום-מערב; נופים וולקניים.",
    description: "פארק מגהינגה הוא חלופה מצוינת ושקטה יותר לטרק גורילות, על רקע פסגות וולקניות.",
    logistics: { drive_from_kla: "8-9 שעות", best_time: "בוקר מוקדם" },
    gallery: ["https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg"],
    image: "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg",
    tags: ["דרום-מערב", "וולקני", "שקט", "פארק לאומי"]
  },

  // 3. קיבלה
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
    description: "קיבאלה נחשבת ל'בירת הפרימטים' של אוגנדה עם אוכלוסיית שימפנזים גדולה.",
    logistics: { drive_from_kla: "5-6 שעות", best_time: "בוקר מוקדם או אחה\"צ" },
    gallery: ["https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg"],
    image: "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg",
    tags: ["מערב", "יער טרופי", "פארק לאומי"]
  },

  // 4. קווין אליזבת
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
    highlights: ["שייט בתעלת קזינגה", "אישאשה – אריות מטפסי עצים", "תצפיות עופות", "פילים ובאפלו"],
    combos: ["kazinga-channel", "ishasha"],
    summary: "ספארי קלאסי + שייט בתעלת קזינגה; אזור אישאשה – אריות מטפסי עצים.",
    description: "פארק מגוון במיוחד: סוואנה, יערות וגופי מים. התעלה קזינגה היא מוקד חיות מרשים.",
    logistics: { drive_from_kla: "6–7 שעות", best_time: "בוקר מוקדם/אחה\"צ מאוחר" },
    gallery: ["https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    tags: ["מערב", "שייט", "למשפחות", "פארק לאומי"]
  },

  // 5. מורצ'יסון פולס
  {
    slug: "murchison-falls",
    name: "מורצ'יסון ומפלי הנילוס",
    category: "safari",
    area: "צפון-מערב",
    family: true,
    night_drive: false,
    boat: true,
    cost_est: "$$",
    season: "כל השנה (טוב יותר בעונה היבשה)",
    highlights: ["Top of the Falls", "שייט על הנילוס", "עדרים גדולים", "מפלים עוצמתיים"],
    combos: ["nile-boat", "ziwa-rhino"],
    summary: "ספארי, הפלגה בנילוס ו-Top of the Falls.",
    description: "הפארק הגדול באוגנדה—מפגש של סוואנה ונילוס. ספארי עשיר ועוצמת מפלי מורצ'יסון.",
    logistics: { drive_from_kla: "5–6 שעות", best_time: "בוקר לספארי, אחה\"צ לשייט" },
    gallery: ["https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    tags: ["צפון-מערב", "שייט", "למשפחות", "פארק לאומי"]
  },

  // 6. קידפו ואלי
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
    highlights: ["נופים פתוחים", "פילים וג'ירפות", "טורפים", "שבטים מקומיים"],
    combos: [],
    summary: "מרוחק ופראי עם נופים פתוחים ועדרים גדולים.",
    description: "אחד הפארקים הפראיים ביותר באוגנדה — סוואנות פתוחות, הרים בקו האופק ומעט תיירים.",
    logistics: { drive_from_kla: "10-12 שעות", flight_option: "טיסה פנימית מקצרת משמעותית" },
    gallery: ["https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    tags: ["צפון-מזרח", "מרוחק", "פראי", "פארק לאומי"]
  },

  // 7. אגם מבורו
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
    highlights: ["סיורי לילה", "ספארי רגלי", "זברות ואנטילופות", "אגמים"],
    combos: [],
    summary: "נגיש למשפחות; סיורי לילה/רגלי.",
    description: "הפארק הקטן באוגנדה אך מגוון במיוחד—זברות, אנטילופות וצפרות נהדרת.",
    logistics: { drive_from_kla: "3–4 שעות", best_time: "בוקר לספארי, ערב לסיורי לילה" },
    gallery: ["https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    tags: ["מרכז-דרום", "סיורי לילה", "למשפחות", "פארק לאומי"]
  },

  // 8. סמוליקי
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
    highlights: ["מעיינות חמים", "יער דלגריה", "צפרות מערב-אפריקאית"],
    combos: ["kibale-chimps", "queen-elizabeth"],
    summary: "יער נמוך חם-לח, מעיינות חמים וצפרות ייחודית.",
    description: "סמוליקי משמר מפגש בין אקולוגיה קונגולזית למזרח-אפריקאית: יער נמוך חם-לח ומעיינות חמים.",
    logistics: { drive_from_kla: "6–7 שעות", best_time: "עונות יבשות לתצפיות מיטביות" },
    gallery: ["https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg"],
    image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg",
    tags: ["מערב", "צפרות", "פארק לאומי"]
  },

  // 9. רוונזורי
  {
    slug: "rwenzori-mountains",
    name: "הרי רוונזורי",
    category: "mountains",
    area: "מערב",
    family: false,
    night_drive: false,
    boat: false,
    cost_est: "$$",
    season: "עונה יבשה",
    highlights: ["הרי הירח", "צמחייה אלפינית", "נופים מרהיבים", "קרחונים"],
    combos: [],
    summary: "פארק לאומי הררי עם פסגות מושלגות על קו המשווה.",
    description: "רכס רוונזורי—פארק לאומי הררי עם צמחייה אלפינית ייחודית ופסגות מושלגות.",
    logistics: { drive_from_kla: "6-7 שעות", best_time: "דצמ-פבר / יונ-אוגוסט" },
    gallery: ["https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"],
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    tags: ["מערב", "הרים", "פארק לאומי"]
  },

  // 10. הר אלגון
  {
    slug: "mount-elgon",
    name: "הר אלגון",
    category: "mountains",
    area: "מזרח",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$",
    season: "כל השנה",
    highlights: ["מערות מלח", "נופים געשיים", "מסלולים מגוונים", "קלדרה ענקית"],
    combos: ["sipi-falls"],
    summary: "פארק לאומי על הר געש כבוי עם הקלדרה הגדולה בעולם.",
    description: "הר געש כבוי עם רשת מסלולים מגוונת—מטיולי יום ועד פסגות. בית למראה ייחודי של 'מערות המלח'.",
    logistics: { drive_from_kla: "4-5 שעות", best_time: "עונה יבשה" },
    gallery: ["https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"],
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    tags: ["מזרח", "פארק לאומי"]
  },

  // ====== חוויות נוספות לפרימטים (wildlife) ======
  {
    slug: "kyambura-gorge",
    name: "ערוץ קיאמבורה - שימפנזים",
    category: "wildlife",
    area: "מערב (בתוך קווין אליזבת)",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$$",
    season: "כל השנה",
    highlights: ["שימפנזים בקניון", "יער גשם בסוואנה", "נוף דרמטי"],
    combos: ["queen-elizabeth"],
    summary: "טרק שימפנזים בקניון דרמטי בתוך פארק קווין אליזבת.",
    description: "ערוץ קיאמבורה, המכונה 'העמק של הקופים', הוא קניון עם יער גשם טרופי בלב הסוואנה.",
    logistics: { drive_from_kla: "6-7 שעות", best_time: "בוקר מוקדם" },
    gallery: ["https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg"],
    image: "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg",
    tags: ["מערב", "שימפנזים"]
  },

  {
    slug: "budongo-forest",
    name: "יער בודונגו - שימפנזים",
    category: "wildlife",
    area: "צפון-מערב",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$",
    season: "כל השנה",
    highlights: ["מעל 600 שימפנזים", "עצי מהגוני ענקיים", "יער טבעי"],
    combos: ["murchison-falls"],
    summary: "יער טבעי גדול עם אוכלוסיית שימפנזים ענקית.",
    description: "יער בודונגו הוא שמורת יער עצומה עם אוכלוסיית שימפנזים גדולה וצמחי מרפא מסורתיים.",
    logistics: { drive_from_kla: "4-5 שעות", best_time: "בוקר" },
    gallery: ["https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg"],
    image: "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg",
    tags: ["צפון-מערב", "שימפנזים"]
  },

  {
    slug: "ngamba-island",
    name: "אי נגמבה - מקלט שימפנזים",
    category: "wildlife",
    area: "אגם ויקטוריה",
    family: true,
    night_drive: false,
    boat: true,
    cost_est: "$$",
    season: "כל השנה",
    highlights: ["שימפנזים יתומים", "האכלה", "פרויקט שימור"],
    combos: [],
    summary: "מקלט לשימפנזים יתומים באגם ויקטוריה.",
    description: "אי נגמבה הוא מקלט מיוחד לשימפנזים שניצלו מסחר בלתי חוקי.",
    logistics: { drive_from_kla: "45 דקות + שיט", best_time: "בוקר להאכלה" },
    gallery: ["https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg"],
    image: "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg",
    tags: ["אגם ויקטוריה", "שימור"]
  },

  // ====== תתי-אזורים וחוויות משלימות ======
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
    summary: "תצפיות מרוכזות של היפופוטמים וציפורים.",
    description: "הפלגה בתעלה בין אגמי ג'ורג' ואדוארד — מוקד חיים אדיר בתוך קווינס.",
    logistics: { drive_from_kla: "6–7 שעות", best_time: "אחה\"צ מאוחר לתאורה טובה" },
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
    highlights: ["אריות מטפסי עצים", "תופעה נדירה", "נופי סוואנה"],
    combos: ["queen-elizabeth"],
    summary: "תת-אזור דרומי בקווינס — אריות מטפסי עצים.",
    description: "החלק הדרומי של קווינס, מפורסם בתצפיות אריות על עצים ובסוואנות פתוחות.",
    logistics: { drive_from_kla: "7–8 שעות", best_time: "בוקר ואחה\"צ" },
    gallery: ["https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    tags: ["דרום-מערב"]
  },

  // ====== Mountains נוספים ======
  {
    slug: "sipi-falls",
    name: "מפלי סיפי",
    category: "mountains",
    area: "מזרח",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$",
    season: "כל השנה",
    highlights: ["3 מפלים מדורגים", "מטעי קפה", "נופי הר אלגון"],
    combos: ["mount-elgon"],
    summary: "הליכות מול מפלים ונקודות תצפית; קפה מקומי.",
    description: "שבילי הליכה סביב שלושת מפלי סיפי למרגלות הר אלגון—יעד נוח למשפחות.",
    logistics: { drive_from_kla: "4-5 שעות", best_time: "בוקר לטיול, אחה\"צ לקפה" },
    gallery: ["https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"],
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    tags: ["מזרח"]
  },

  // ====== Water ======
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
    summary: "הפלגה אל בסיס המפלים ותצפיות חיות.",
    description: "שייט אל בסיס מפלי מורצ'יסון עם מפגשים קרובים להיפו, תנינים וציפורי מים.",
    logistics: { drive_from_kla: "5–6 שעות", best_time: "אחה\"צ לשייט" },
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
    highlights: ["רפטינג ברמה 5", "מקור הנילוס", "בנג'י ג'אמפינג"],
    combos: ["source-of-nile"],
    summary: "רמות קושי שונות; צוותים מוסמכים.",
    description: "רפטינג מהטובים באפריקה—זרימות חזקות, צוותים מנוסים ואקשן מהמעלה הראשונה.",
    logistics: { drive_from_kla: "2-3 שעות", best_time: "תלוי מז\"א" },
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
    summary: "שייט רגוע, נופש ונוף הררי.",
    description: "אגם ציורי בין גבעות ירוקות, מושלם למנוחה ושייט רגוע בין האיים.",
    logistics: { drive_from_kla: "6-7 שעות", best_time: "שקיעה" },
    gallery: ["https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg"],
    image: "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg",
    tags: ["דרום-מערב", "מנוחה"]
  },

  // ====== Culture ======
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
    summary: "סיור קולינרי ומוזיקה בעיר הבירה.",
    description: "טעמים, צבעים ומוזיקה בקצב קמפלה—סיור שווקים ואוכל רחוב.",
    logistics: { drive_from_kla: "במרכז העיר", best_time: "בוקר לשווקים, ערב למוזיקה" },
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
    summary: "אתרים היסטוריים ומסורות מקומיות.",
    description: "ממלכת בגנדה—אתרי מורשת ומסורות חיות, כולל ארמון הקבאקה וקברי קסובי.",
    logistics: { drive_from_kla: "1-2 שעות", best_time: "כל היום" },
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
    summary: "חקלאות הרים, אומנויות יד וביקורי בית.",
    description: "היכרות אמיתית עם חיי הכפר במערב—חקלאות, מלאכות יד ובישול ביתי.",
    logistics: { drive_from_kla: "6-8 שעות", best_time: "כל היום" },
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
    summary: "ערב תרבות מקומי חי.",
    description: "מופע מרהיב של ריקודים ומוזיקה מסורתיים מכל רחבי אוגנדה.",
    logistics: { drive_from_kla: "30 דקות", best_time: "ערב (שבת)" },
    gallery: ["https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg"],
    image: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg",
    tags: ["מרכז", "מוזיקה"]
  },

  // ====== Ziwa ======
  {
    slug: "ziwa-rhino-sanctuary",
    name: "Ziwa Rhino Sanctuary",
    category: "safari",
    area: "מרכז-צפון (בדרך למורצ'יסון)",
    family: true,
    night_drive: false,
    boat: false,
    cost_est: "$",
    season: "כל השנה",
    highlights: ["קרנפים לבנים בהליכה מודרכת", "סיור ריינג'רים", "צפרות מעולה"],
    combos: ["murchison-falls"],
    summary: "שמורת הקרנפים של אוגנדה — סיורי הליכה מודרכים ובטוחים.",
    description: "עצירה מומלצת בדרך למורצ'יסון לצפייה מודרכת בקרנפים לבנים ולצפרות מצוינת.",
    logistics: { drive_from_kla: "3–3.5 שעות", best_time: "בוקר/אחה\"צ" },
    gallery: ["https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg"],
    image: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg",
    tags: ["בדרך למורצ'יסון"]
  }
];

// מחזיר קטגוריה:
// - אם הקטגוריה היא 'safari' נציג את 10 הפארקים הלאומיים (ע"י תג "פארק לאומי")
// - אחרת: לפי השדה category
export const getCategoryParks = (category: string): Park[] => {
  if (category === "safari") {
    return parks.filter((p) => 
      p.category === "safari" || 
      (p.tags?.includes("פארק לאומי") && p.category !== "wildlife")
    );
  }
  return parks.filter((p) => p.category === category);
};

export const getParkBySlug = (slug: string): Park | undefined =>
  parks.find((park) => park.slug === slug);

export const getRelatedParks = (currentPark: Park, limit: number = 3): Park[] =>
  parks
    .filter(
      (park) => park.slug !== currentPark.slug && park.category === currentPark.category
    )
    .slice(0, limit);