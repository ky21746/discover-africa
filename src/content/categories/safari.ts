// src/content/categories/safari.ts
import { Attraction } from "../../types";

export const safari: Attraction[] = [
  {
    id: "queen-elizabeth",
    slug: "queen-elizabeth",
    name: "פארק המלכה אליזבת הלאומי",
    subtitle: "אריות מטפסי עצים ייחודיים בעולם\nשייט קסום בתעלת קזינגה",
    category: "safari",
    region: "מערב אוגנדה",
    description: "פארק המלכה אליזבת (Queen Elizabeth National Park) הוא אחד מיעדי הספארי המובילים באוגנדה, ונחשב לפארק העשיר והמגוון ביותר במדינה. הפארק משתרע על פני כ־1,978 קמ\"ר בלב עמק הריפט, ומציע שילוב ייחודי של סוואנות פתוחות, אגמים וולקניים, תעלות מים רחבות ויערות ירוקים.\n\nבפארק חיים יותר מ־95 מיני יונקים ו־610 מיני עופות, מה שהופך אותו לגן עדן עבור חובבי טבע וצפרות. המבקרים נהנים ממפגשים עם אריות מטפסי עצים – תופעה נדירה בעולם החי, שייט מרהיב בתעלת קזינגה לצד מאות היפופוטמים ותנינים, ספארי בעדרי פילים ובופאלו, וכן מפגש ייחודי עם שימפנזים בקניון קיאמבורה.\n\nהפארק מתאים גם למשפחות שמחפשות חווית טבע נוחה ונגישה וגם להרפתקנים שמבקשים לגלות את פניה הפראיות של אפריקה.\n\n---\n\nמה תגלו בדרך\n- אריות מטפסי עצים – אחד מסימני ההיכר של הפארק\n- שייט בתעלת קזינגה – צפייה מקרוב באוכלוסיית ההיפופוטמים הגדולה ביותר באפריקה ותנינים עצומים\n- עדרי פילים, בופאלו ואנטילופות קוב אוגנדיות בשטחי הסוואנה\n- נמרים והיינות הנצפים לעיתים במסלולי הספארי\n- שימפנזים וקופים בקניון קיאמבורה וביער מרמגמבו\n- מכתשי לבה ונופים געשיים עוצרי נשימה בעמק הריפט\n- חוויית צפרות מהעשירות בעולם – מעל 600 מינים, כולל עיט הדגים האפריקאי וחסידות נדירות",
    
    highlights: [
      "אריות מטפסי עצים – אחד מסימני ההיכר של הפארק",
      "שייט בתעלת קזינגה – צפייה מקרוב באוכלוסיית ההיפופוטמים הגדולה ביותר באפריקה ותנינים עצומים",
      "עדרי פילים, בופאלו ואנטילופות קוב אוגנדיות בשטחי הסוואנה",
      "נמרים והיינות הנצפים לעיתים במסלולי הספארי",
      "שימפנזים וקופים בקניון קיאמבורה וביער מרמגמבו",
      "מכתשי לבה ונופים געשיים עוצרי נשימה בעמק הריפט",
      "חוויית צפרות מהעשירות בעולם – מעל 600 מינים, כולל עיט הדגים האפריקאי וחסידות נדירות"
    ],
    
    duration: "3-5 ימים",
    difficulty: "קל עד בינוני",
    bestSeason: "דצמבר-פברואר, יוני-ספטמבר",
    permitCost: "",
    minAge: 0,
    
    wildlife: ["אריות מטפסי עצים", "פילים", "באפלו", "נמרים", "ג'ירפות", "היפופוטמים", "תניני נילוס", "600+ מיני ציפורים"],
    howToGetThere: [
      "6 שעות נסיעה מקמפלה דרך פורט פורטל",
      "הנסיעה עוברת באגמים קטנים ושדות תה",
      "ניתן לצפות בעדרי אנקולה (בקר מקומי עם קרניים ענקיות)",
      "אפשרות טיסה פנימית לקאססה"
    ],
    whatToBring: ["משקפת איכותית", "מצלמה עם זום", "דוחה יתושים", "כובע"],
    healthSafety: ["אזהרות מסע עקב קרבה לגבול DRC", "חיסונים סטנדרטיים"],
    accommodation: ["Mweya Safari Lodge", "Katara Lodge", "Ihamba Lakeside"],
    nearby: [
      "Kibale Forest National Park (לצפייה בשימפנזים) - עד 3 שעות",
      "Rwenzori Mountains National Park (לטיפוס וטרקים) - עד 3 שעות",
      "כפרי דייגים מסורתיים סביב אגם ג'ורג'",
      "סיורי תרבות עם קהילות מקומיות"
    ],
    whyUs: ["מדריכים מקומיים מומחים", "רכבי ספארי עם גג פתוח", "קשרים עם לודג׳ים טובים"],
    valueAdd: [
      "אחד משני הפארקים המבוקרים ביותר במדינה",
      "שילוב ספארי יבשתי ושייט מים",
      "גישה נוחה מקמפלה (6 שעות נסיעה)",
      "דירוג 4.4/5 ב-TripAdvisor",
      "לודג'ים מדורגים 4.5/5 עם נוף מרהיב לשקיעות"
    ],
    
    // Hero section customization - שליטה ספציפית בגובה התמונה
    heroHeight: {
      mobile: "35vh",    // גובה קטן יותר במובייל לתמונה של אריות על עצים
      desktop: "45vh"    // גובה גדול יותר בדסקטופ לחוויית צפייה מרשימה
    },
    
    funFact: "הפארק נקרא על שם המלכה אליזבת השנייה שביקרה בו ב-1954, והוא אחד משני הפארקים הלאומיים היחידים בעולם עם אריות מטפסי עצים! למרות הפופולריות, הפארק מתמודד עם אתגרי ביטחון בשל קרבתו לגבול עם קונגו, ולכן מומלץ לבקר בו רק בליווי מדריכים מוסמכים.",
    
    importantInfo: [
      "🛣️ **שערי כניסה**",
      "• קאטונגו - קרוב לעיירות וללודג'ים נוחים",
      "• איששה - מאפשר המשך ישיר לבווינדי ולגורילות", 
      "• קזונגו - צמוד לשייט בתעלת קזינגה",
      "",
      "🚗 **נסיעה והגעה**",
      "• הנסיעה מקמפלה אורכת **6–7 שעות**",
      "• כדאי יציאה מוקדמת בבוקר",
      "• אפשרות לינה ביניים בדרך",
      "",
      "🗺️ **המשך ליעדים נוספים**",
      "• בווינדי (גורילות) - תכנון שער יציאה",
      "• קיבאלה (שימפנזים) - חיסכון שעות נסיעה",
      "• מורצ'יסון (מפלים) - תכנון מסלול",
      "",
      "🌦️ **עונות השנה**",
      "• עונה יבשה - חיות סביב מקורות מים",
      "• עונה רטובה - נוף ירוק, דרכים קשות",
      "",
      "🦁 **חוויות ייחודיות**",
      "• שייט בתעלת קזינגה - תיאום מראש",
      "• סקטור איששה (אריות מטפסי עצים) - תיאום מראש",
      "",
      "⏱️ **משך שהות מומלץ**",
      "• יום אחד - טעימה בלבד",
      "• **2–3 ימים** - שילוב מלא (ספארי, שייט, קיאמבורה)"
    ],
    
    gallery: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95",
        title: "אריות מטפסי עצים",
        description: "תופעה נדירה וייחודית בסקטור איששה"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2FNile%20Crocodile.webp?alt=media&token=942a6227-2624-4265-8dd8-a230029a51b4",
        title: "תנין הנילוס",
        description: "טורף ענק בתעלת קזינגה"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2FAfrican%20fish%20eagle.webp?alt=media&token=fe7df4c0-48cb-4d87-bb45-005af4303736",
        title: "עיט דגים אפריקאי",
        description: "הציפור הלאומית של אוגנדה"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2FAfrican%20Bush%20Elephant%20-%20Loxodonta%20africana%2C%20iconic%20member%20of%20African%20big%20five%2C%20Queen%20Elizabeth%20National%20Park.webp?alt=media&token=3b4c82c9-b383-4bbc-94c1-85438ff412b5",
        title: "פיל אפריקאי",
        description: "חבר ב-Big Five - ענק עדין"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2FA%20baby%20and%20a%20sub-adult%20hippo%20playing%20in%20Kazinga%20channel%20at%20Queen%20Elizabeth%20National%20Park%20Uganda.webp?alt=media&token=ece139af-488b-4f61-a1c6-4ef5d408505c",
        title: "היפופוטמים צעירים",
        description: "משחקים בתעלת קזינגה"
      }
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95",
    
    // Info Grid data for AttractionInfoGrid component
    infoGrid: {
      seasons: [
        "הפארק פתוח כל השנה – לכל תקופה יתרונות משלה",
        "עונות יבשות (דצמבר–פברואר, יוני–אוגוסט): בעלי החיים מתרכזים סביב מקורות מים, הדרכים נוחות יותר והצפייה קלה",
        "עונות גשומות (מרץ–מאי, ספטמבר–נובמבר): נופים ירוקים ועשירים, צפרות מצוינת, אך הדרכים חלקלקות"
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
        "פארק המלכה אליזבת נקרא על שמה",
        "מאכלס את אוכלוסיית ההיפופוטמים הגדולה באפריקה"
      ]
    },
    coordinates: {
      lat: -0.25,
      lng: 30.0
    }
  },

  {
    id: "murchison-falls-safari",
    slug: "murchison-falls",
    name: "פארק לאומי מורצ'יסון פולס",
    subtitle: "המפל החזק ביותר באפריקה\n4 מ-Big Five בנוף וולקני",
    category: "safari",
    region: "צפ׳-מע׳ אוגנדה",
    description: "פארק לאומי מורצ'יסון – הפארק הגדול באוגנדה והמפל העוצמתי ביותר באפריקה\n\nMurchison Falls National Park (פארק לאומי מורצ'יסון) הוא אחד מיעדי הספארי המרשימים ביותר באוגנדה ובמזרח אפריקה. הפארק משלב טבע פראי, נופים דרמטיים וחוויות ייחודיות שהופכות אותו ליעד חובה עבור כל מי שמחפש ספארי באוגנדה אמיתי.\n\nבלב הפארק נמצא פלא טבע יוצא דופן – מפלי מורצ'יסון. כאן נדחס נהר הנילוס דרך מעבר צר ונופל מגובה רב, יוצר את המפלים החזקים ביותר באפריקה. המחזה הזה מעניק למבקרים תחושת עוצמה נדירה וחיבור ישיר לכוחו הגולמי של הטבע.\n\nמה תגלו בדרך\n- פילים אפריקאיים אדירים\n- ג'ירפות רוטשילד נדירות\n- תאו אפריקאי ואנטילופות מגוונות\n- אריות ונמרים בסוואנות הפתוחות\n- קופי שימפנזה ביער Budongo\n- אלפי היפופוטמים ותניני נילוס ענקיים לאורך הנהר\n- מעל 450 מיני ציפורים, כולל השובל החרטומאי האגדי\n\n*השילוב הזה של חיות בר נדירות עם מפלים עוצמתיים ונופים מגוונים הופך את Murchison Falls National Park ליעד אידיאלי עבור חובבי צילום, טבע והרפתקאות – מסע שישאיר זיכרונות עוצמתיים לכל החיים.*",
    
    highlights: [
      "המפל החזק בעולם - הנילוס נדחס ב-7 מטר",
      "4 מתוך ה-Big Five",
      "שייט קסום על הנילוס",
      "ג'ירפות רוטשילד נדירות",
      "ציפור השוהביל המיוחדת"
    ],
    
    duration: "2-4 ימים",
    difficulty: "קל-בינוני",
    bestSeason: "דצמבר-פברואר, יוני-ספטמבר",
    permitCost: "",
    minAge: 0,
    
    wildlife: ["פילים אפריקאיים", "ג'ירפות רוטשילד נדירות", "אריות ונמרים", "תאו אפריקאי ומגוון אנטילופות", "קופי שימפנזה ביער Budongo", "אלפי היפופוטמים", "תניני נילוס ענקיים", "ציפור השוהביל האגדית", "+450 מיני ציפורים"],
    howToGetThere: ["5-6 שעות נסיעה מקמפלה", "עצירה בשמורת זיווה לקרנפים", "טיסה פנימית אפשרית"],
    whatToBring: ["משקפת איכותית", "מצלמה עם זום", "דוחה יתושים חזק", "כובע"],
    healthSafety: ["חיסון Yellow Fever חובה", "כדורי מניעה למלריה", "מדריכים מקצועיים"],
    accommodation: ["Paraa Safari Lodge", "Chobe Safari Lodge", "Nile Safari Lodge"],
    nearby: ["Budongo Forest - שימפנזים", "Ziwa Rhino Sanctuary", "כפרי לואו"],
    whyUs: ["מדריכים מומחים לחיות נדירות", "רכבי ספארי 4X4", "שייט פרטי בשעות זהב"],
    valueAdd: ["הפארק המבוקר ביותר - 25% מהמבקרים", "שילוב ספארי ושייט נהרות", "אחד מאתרי הדגל של אוגנדה"],
    
    // Hero section customization - שליטה ספציפית בגובה התמונה
    heroHeight: {
      mobile: "35vh",    // גובה קטן יותר במובייל לתמונה של אריות על עצים
      desktop: "45vh"    // גובה גדול יותר בדסקטופ לחוויית צפייה מרשימה
    },
    
    funFact: "מפלי מורצ'יסון הם המפל העוצמתי ביותר בעולם - הנילוס נדחס מ-50 מטר רוחב ל-7 מטר בלבד, יוצר כוח אדיר של 300 קוב מים בשנייה!",
    
    importantInfo: [
      "🛣️ **שערי כניסה**",
      "• פראה (Paraa) - שער ראשי עם לודג'ים יוקרתיים",
      "• קיצומבוניו (Kichumbanyobo) - שער צפוני נוח",
      "• טנגי (Tangi) - שער דרומי עם גישה למפלים",
      "",
      "🚗 **נסיעה והגעה**",
      "• הנסיעה מקמפלה אורכת **5-6 שעות**",
      "• דרך זיווה ריינו סנקטוארי (עצירה מומלצת)",
      "• טיסה פנימית לקאסנגה אפשרית",
      "",
      "🌦️ **עונות השנה**",
      "• יבשה (דצמבר-פברואר, יוני-ספטמבר): חיות סביב מקורות מים, דרכים נוחות",
      "• רטובה (מרץ-מאי, אוקטובר-נובמבר): נוף ירוק, מפלים מלאים, דרכים קשות",
      "",
      "🦁 **חוויות ייחודיות**",
      "• שייט על הנילוס - תיאום מראש",
      "• טיפוס למפלים - חוויה מאתגרת",
      "• ספארי לילה - חיות פעילות",
      "",
      "⏱️ **משך שהות מומלץ**",
      "• יום אחד - טעימה בלבד",
      "• **2-3 ימים** - חוויה מלאה (ספארי, שייט, מפלים)"
    ],
    
    gallery: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FMurchison%20Falls.webp?alt=media&token=f1eca0ab-4803-4ae5-bdce-74f08f66fe47",
        title: "המפל העוצמתי",
        description: "הנילוס נדחס דרך נקיק צר ויוצר מפל אדיר"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FMurchison%20Falls%20Boat.webp?alt=media&token=4349ce69-2820-4c42-b81b-42bb0a560a9d",
        title: "שייט על הנילוס",
        description: "הפלגה קסומה על נהר הנילוס עם מאות היפופוטמים"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FRothschilds%20giraffes%20savannah%20in%20Murchison%20Falls%20National%20Park.webp?alt=media&token=31d21554-8558-4465-ab1e-ad557b55b096",
        title: "ג'ירפות רוטשילד",
        description: "ג'ירפות נדירות בסבנה הפתוחה"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FLeopard%20in%20a%20tree%20in%20Murchison%20Falls%20National%20Park%2C%20Uganda.webp?alt=media&token=611ef1e3-2f2d-405e-bd4a-2ffcb03e1d70",
        title: "נמר על עץ",
        description: "נמר מטפס על עץ - אחד מ-Big Five"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FTourists%20overlook%20the%20massive%20waterfall%20of%20Murchison%20Falls%20on%20the%20Nile%20River%20in%20Uganda.webp?alt=media&token=bc3f5511-234b-4696-85c0-446e67dbea52",
        title: "תצפית על המפל",
        description: "מבט מרהיב על המפל העוצמתי"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FA%20group%20of%20Puku%20antelope%20in%20Murchison%20Falls%20National%20Park%20Uganda%20Africa.webp?alt=media&token=6763a71e-a7c5-4e5d-9579-662e66502a3d",
        title: "עדר אנטילופות פוקו",
        description: "אנטילופות פוקו בסבנה הפתוחה"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FCloseup%20of%20a%20raven%20perched%20on%20an%20African%20Buffalo%20in%20the%20Murchison%20Falls%20National%20Park%2C%20Uganda.webp?alt=media&token=1101dfc6-c8fc-4c12-a1eb-0bcc9859b4e1",
        title: "עורב על באפלו",
        description: "עורב יושב על באפלו אפריקאי"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FWildlife%20of%20Murchison%20Falls%20National%20Park.webp?alt=media&token=1666a99d-6a97-44fc-baa0-d33900346449",
        title: "חיות הבר",
        description: "מגוון חיות הבר של הפארק"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2Ftypical%20dirt%20road%20for%20safari%20in%20Murchison%20Falls%20national%20park%20in%20Uganda%20at%20sunset.webp?alt=media&token=b4f173a4-8a7a-4080-a25e-01581aea99aa",
        title: "דרך ספארי בשקיעה",
        description: "דרך עפר טיפוסית לספארי בשעת שקיעה"
      }
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2Fmurchison-falls-hero.webp?alt=media&token=56ccea2c-c574-46a6-ac3a-a0ecc2fbc3a5",
    
    // Info Grid data for AttractionInfoGrid component
    infoGrid: {
      seasons: [
        "אין מגבלה לטייל כל השנה",
        "העונה היבשה (דצמבר–פברואר, יוני–אוגוסט): קל יותר לנוע בדרכים, בעלי החיים מתרכזים במקורות מים, ספארי נוח ונגיש",
        "העונה הרטובה (מרץ–מאי, ספטמבר–נובמבר): נופים ירוקים במיוחד, שמיים נקיים לצילום, פחות מטיילים באתרים"
      ],
      access: [
        "ברכב: כ־5–6 שעות מקמפלה דרך מסינדי",
        "בטיסה: טיסות פנימיות עם Bar Aviation מאנטבה אל מנחת Pakuba"
      ],
      gates: [
        "פרא – שער מרכזי בדרום, מהווה נקודת גישה עיקרית למפלים ולסיורי ספארי",
        "קיצ'ומבנניובו – שער צפוני, מחבר את הכביש הוימה–מסינדי לאזורי הפארק",
        "טנגי – שער צפוני נוסף, גישה מהירה לסוואנות ולגדות הנילוס"
      ],
      experiences: [
        "מפלי מורצ'יסון – המפלים החזקים בעולם",
        "שייט על הנילוס – תצפית על היפופוטמים ותנינים",
        "ספארי יבשתי – 4 מתוך ה-Big Five",
        "ג'ירפות רוטשילד נדירות – אוכלוסייה ייחודית"
      ],
      duration: [
        "מינימום: 2 ימים לספארי בסיסי ושייט",
        "מומלץ: 3–4 לילות לחוויה מלאה עם לינה",
        "מורחב: 5–6 לילות לשילוב עם אטרקציות נוספות"
      ],
      didYouKnow: [
        "פארק מורצ'יסון הוא הפארק הגדול באוגנדה",
        "מפלי מורצ'יסון הם המפלים החזקים בעולם - 300 מטרים של מים נופלים דרך צוואר בקבוק צר",
        "הפארק מאכלס את אוכלוסיית הג'ירפות רוטשילד הנדירה"
      ]
    }
  },

  {
    id: "lake-mburo-safari",
    slug: "lake-mburo",
    name: "פארק לאומי אגם מבורו",
    subtitle: "הפארק היחיד עם זברות באוגנדה\nספארי רכיבה על סוסים ואופניים",
    category: "safari",
    region: "דר׳-מע׳ אוגנדה",
    description: "פארק אגם מבורו (Lake Mburo National Park) הוא הפארק הלאומי הקטן ביותר באוגנדה, אך בו בזמן אחד מהמרתקים שבהם – בזכות המגוון יוצא הדופן של נופים וחיות בר. הפארק משתרע על פני כ־370 קמ\"ר בלבד, אך בתוכו משתלבים זה בזה 13 אגמים קסומים המחוברים ביניהם בתעלות מים, ביצות ירוקות, שטחי סוואנה פתוחים ויערות משוכות נדירים. שילוב ייחודי זה יוצר בית גידול עשיר במיוחד למאות מינים של בעלי חיים וציפורים, ומעניק למבקרים תחושה של \"אוגנדה בזעיר אנפין\".\n\nבפארק חיים עדרים מרהיבים של זברות, אימפלות, אילנדים, תאו אפריקאי, ג'ירפות שהושבו לאזור בשנים האחרונות, וכמובן ההיפופוטמים ותניני היאור באגמים. ייחודו של מבורו הוא גם בכך שהוא אחד המקומות היחידים באוגנדה שבהם ניתן ליהנות מספארי רכיבה על סוסים או על אופניים – חוויה נדירה שמחברת את המבקר אל הטבע בצורה בלתי אמצעית ושונה מכל מה שמכירים.\n\nבזכות המגוון האקולוגי, הפארק מהווה גן עדן לחובבי ציפורים – עם מעל 315 מינים שונים, בהם דגים־נשר אפריקאי, החסידה הענקית שבל, ועוד עשרות מינים ייחודיים לבתי גידול לחים. כל אלו הופכים את אגם מבורו ליעד חובה עבור מי שמבקש לגלות את אוגנדה האותנטית, עם חוויות ספארי אינטימיות, נופים ציוריים ושלווה שאין כמותה.\n\n---\n\nמה תגלו בדרך\n- עדרי זברות ואימפלות מרהיבים – הפארק היחיד באוגנדה עם אוכלוסייה גדולה של זברות\n- ספארי רכיבה על סוסים – חוויה ייחודית באוגנדה המאפשרת קרבה אמיתית לחיות הבר\n- ספארי אופניים – סיורי שטח באופניים בתוך הסוואנה הפתוחה\n- שייט באגם מבורו – תצפית בהיפופוטמים, תנינים וציפורי מים נדירות\n- צפרות עשירה – מעל 315 מינים, כולל שבל, דג־נשר אפריקאי וחסידות נדירות\n- סיורי לילה – הזדמנות נדירה לפגוש חיות פעילות לילה כמו לילות, ג'נטות וצבועים\n- ג'ירפות שהושבו לאזור – אוכלוסייה חדשה שהוחזרה לטבע בשנים האחרונות",
    
    highlights: [
      "הפארק היחיד עם זברות ואימפלות באוגנדה",
      "ספארי רכיבה על סוסים – חוויה ייחודית באוגנדה",
      "ספארי אופניים בתוך הסוואנה הפתוחה",
      "שייט באגם מבורו עם היפופוטמים ותנינים",
      "צפרות עשירה – מעל 315 מינים שונים"
    ],
    
    duration: "1-3 ימים",
    difficulty: "קל",
    bestSeason: "כל השנה",
    permitCost: "",
    minAge: 0,
    
    wildlife: ["זברות", "אימפלות", "היפופוטמים", "תנינים", "אנטילופות", "ציפורי מים", "אנקולה עם קרניים ענקיות"],
    howToGetThere: ["4 שעות נסיעה מקמפלה", "דרך סוואנות ירוקות", "שווקים כפריים"],
    whatToBring: ["נעלי הליכה", "ביגוד לרכיבה", "כובע", "דוחה יתושים"],
    healthSafety: ["ללא אריות - בטוח להליכה", "יתושים ליד האגם", "חיסונים סטנדרטיים"],
    accommodation: ["Mihingo Lodge", "Rwakobo Rock", "Eagle's Nest"],
    nearby: ["העיר אמבררה", "מקלט סלעי בהרי אנקולה", "חוות תרבותיות"],
    whyUs: ["רכיבה על סוסים בספארי", "גישה אינטימית לחיות", "מדריכים לסיורי הליכה"],
    valueAdd: ["Top 5 פארקים באוגנדה", "אידיאלי למשפחות", "נקודת כניסה מושלמת לספארי"],
    
    // Hero section customization - שליטה ספציפית בגובה התמונה
    heroHeight: {
      mobile: "35vh",    // גובה קטן יותר במובייל לתמונה של אריות על עצים
      desktop: "45vh"    // גובה גדול יותר בדסקטופ לחוויית צפייה מרשימה
    },
    
    funFact: "אגם מבורו הוא הפארק הלאומי הקטן ביותר באוגנדה (370 קמ\"ר) אבל הוא היחיד שמכיל זברות ללא רעמה - תת-מין ייחודי שנמצא רק כאן!",
    
    importantInfo: [
      "🛣️ **שערי כניסה**",
      "• נשארה (Nshara) - שער ראשי עם גישה נוחה",
      "• סנגה (Sanga) - שער דרומי עם לודג'ים",
      "• רוואקאבו (Rwakobo) - שער מערבי עם נוף מרהיב",
      "",
      "🚗 **נסיעה והגעה**",
      "• הנסיעה מקמפלה אורכת **4 שעות**",
      "• דרך סוואנות ירוקות ושדות תה",
      "• עצירה בעיר אמבררה מומלצת",
      "",
      "🌦️ **עונות השנה**",
      "• יבשה (דצמבר-פברואר, יוני-ספטמבר): חיות סביב האגם, דרכים נוחות",
      "• רטובה (מרץ-מאי, אוקטובר-נובמבר): נוף ירוק, דרכים חלקלקות",
      "",
      "🦓 **חוויות ייחודיות**",
      "• רכיבה על סוסים בספארי - ייחודי באוגנדה",
      "• שייט באגם - צפייה בהיפופוטמים",
      "• סיורי הליכה - ללא אריות, בטוח",
      "",
      "⏱️ **משך שהות מומלץ**",
      "• יום אחד - טעימה מהירה",
      "• **1-2 ימים** - חוויה מלאה (ספארי, רכיבה, שייט)"
    ],
    
    gallery: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Lake%20Mburo%20National%20Park%2Fmaneless%20zebra.webp?alt=media&token=0c16e1ee-a6af-4bbf-a4cf-ab69dbff264a",
        title: "זברה ללא רעמה",
        description: "זברה ייחודית ללא רעמה באגם מבורו"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Lake%20Mburo%20National%20Park%2Fhippopotamus%20in%20lake%20mburo%20uganda.webp?alt=media&token=98a07d23-4af2-4063-997a-a3003f3fb2bc",
        title: "היפופוטם באגם מבורו",
        description: "היפופוטם מרגיע במי האגם"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Lake%20Mburo%20National%20Park%2FZebra%20Lake%20Mburo%20National%20Park%2C%20Uganda.webp?alt=media&token=f2f0ee63-c2a5-435e-85a0-138b896382fa",
        title: "זברה באגם מבורו",
        description: "זברה יפה בסבנה הפתוחה"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Lake%20Mburo%20National%20Park%2FAfrican%20buffalo%20in%20mud%20Lake%20Mburo%20National%20ParkUganda.webp?alt=media&token=68f35c42-c56a-4893-aa52-2e1a35d1104a",
        title: "באפלו אפריקאי בבוץ",
        description: "באפלו מתקרר בבוץ של האגם"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Lake%20Mburo%20National%20Park%2FAfrica%20sunset.%20Plains%20zebra%2C%20Equus%20quagga%2C%20in%20the%20grassy%20nature%20habitat%20with%20evening%20light%20in%20Lake%20Mburo%20NP%20in%20Uganda.webp?alt=media&token=4917da8b-e39b-4eb0-8794-1921a64dcfd2",
        title: "זברה בשקיעה",
        description: "זברה בשקיעה אפריקאית מרהיבה"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Lake%20Mburo%20National%20Park%2FA%20herd%20of%20impala%20Lake%20Mburo%20National%20Park%20Uganda.webp?alt=media&token=0b1f6496-ce6c-42c7-aa0d-8c7c4ea18118",
        title: "עדר אימפלות",
        description: "עדר אימפלות יפות בסבנה"
      }
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Lake%20Mburo%20National%20Park%2FAfrica%20sunset.%20Plains%20zebra%2C%20Equus%20quagga%2C%20in%20the%20grassy%20nature%20habitat%20with%20evening%20light%20in%20Lake%20Mburo%20NP%20in%20Uganda-Hero.webp?alt=media&token=decce22e-f118-41a1-b80c-657770874411",
    
    // Info Grid data for AttractionInfoGrid component
    infoGrid: {
      seasons: [
        "הפארק פתוח כל השנה ואין מגבלה לביקור",
        "עונה יבשה (דצמבר–פברואר, יוני–אוגוסט): הדרכים נגישות יותר, בעלי החיים מתרכזים במקורות מים, ספארי נוח ונעים",
        "עונה רטובה (מרץ–מאי, ספטמבר–נובמבר): הנופים ירוקים במיוחד, הצמחייה מתחדשת, מצוין לצילום ולצפרות"
      ],
      access: [
        "מרחק של כ־240 ק\"מ מקמפלה, נסיעה של 4–5 שעות",
        "הכניסה הראשית נמצאת בעיירה Sanga, על כביש קמפלה–מבארארה",
        "ניתן להגיע גם דרך הכניסה בצפון־מערב (Nshara Gate)"
      ],
      gates: [
        "Sanga Gate – השער הראשי, קרוב לעיירה סנגה",
        "Nshara Gate – שער נוסף בצפון־מערב הפארק"
      ],
      experiences: [
        "ספארי ברכב – תצפיות בזברות, תאו, אימפלות, אילנדים, ג'ירפות, חזירי יער ועוד",
        "ספארי רכיבה על סוסים – חוויה ייחודית באוגנדה, המאפשרת קרבה אמיתית לחיות הבר",
        "ספארי אופניים – סיורי שטח באופניים בתוך הסוואנה",
        "שייט באגם מבורו – תצפית בהיפופוטמים, תנינים וציפורים מים נדירות",
        "צפרות – מעל 315 מינים, כולל שבל (Shoebill), דג־נשר אפריקאי וחסידות נדירות",
        "סיורי לילה – הזדמנות נדירה לפגוש חיות פעילות לילה כמו לילות, ג'נטות וצבועים"
      ],
      duration: [
        "יומיים–שלושה – מספיקים כדי לשלב ספארי ברכב, שייט, רכיבה על סוסים וצפרות",
        "ניתן לשלב את הביקור כחלק מטיול דרום־מערב אוגנדה (בכיוון קיסורו–גורילות או בווינדי)"
      ],
      didYouKnow: [
        "אגם מבורו הוא אחד מתוך 13 אגמים המחוברים בתעלות מים – רובם נמצאים בתוך שטח הפארק",
        "זהו הפארק היחיד באוגנדה שבו יש אוכלוסייה גדולה של זברות",
        "הפארק הוא אחד המקומות היחידים באוגנדה שבהם אפשר לעשות ספארי רכיבה על סוסים"
      ]
    }
  },




  {
    id: "semuliki",
    slug: "semuliki",
    name: "פארק לאומי סמוליקי",
    subtitle: "יער גשם טרופי עם מעיינות חמים\nמעל 440 מיני ציפורים נדירות",
    category: "safari",
    region: "מע׳ אוגנדה",
    description: "סמוליקי הוא פארק ייחודי, החולש על קצה יערות האיטורי של קונגו. הוא שונה מאוד משאר הפארקים באוגנדה – זהו יער גשם טרופי נמוך בגובה נמוך יחסית.\n\nהייחוד הגדול ביותר שלו הוא מגוון עופות יוצא דופן – מעל 440 מינים, רבים מהם נדירים. אחד האתרים הידועים ביותר הוא מעיינות החמים סאמפיה, בהם המים מבעבעים ומרתיחים ביצים.",
    
    highlights: [
      "מעל 440 מיני ציפורים נדירות",
      "מעיינות חמים סאמפיה",
      "יער גשם טרופי ייחודי",
      "גבול עם קונגו",
      "יעד נישה לצפרים"
    ],
    
    duration: "2-3 ימים",
    difficulty: "קל-בינוני",
    bestSeason: "דצמבר-פברואר, יוני-ספטמבר",
    permitCost: "",
    minAge: 8,
    
    wildlife: ["פילים יער", "קופים", "440+ מיני ציפורים", "חיות ייחודיות מהקונגו"],
    howToGetThere: ["שעה מפורט פורטל", "דרך אגמים קטנים", "יערות גשם"],
    whatToBring: ["משקפת איכותית", "מצלמה עם זום", "דוחה יתושים", "כובע"],
    healthSafety: ["המלצות בטיחות עקב קרבה לקונגו", "יתושים רבים", "חיסונים סטנדרטיים"],
    accommodation: ["Semuliki Safari Lodge", "UWA Bandas", "מלונות בפורט פורטל"],
    nearby: ["פורט פורטל (שעה)", "הרי רוונזורי (שעתיים-שלוש)", "כפרי באקונגו"],
    whyUs: ["מדריכים מומחי צפרות", "גישה ליער גשם", "קשרים עם קהילות מקומיות"],
    valueAdd: ["יעד נישה ייחודי", "מחקר אקולוגי", "חוויה תרבותית-ביולוגית"],
    
    // Hero section customization - שליטה ספציפית בגובה התמונה
    heroHeight: {
      mobile: "35vh",    // גובה קטן יותר במובייל לתמונה של אריות על עצים
      desktop: "45vh"    // גובה גדול יותר בדסקטופ לחוויית צפייה מרשימה
    },
    
    funFact: "פארק סמוליקי הוא הפארק הלאומי היחיד באוגנדה עם יער גשם טרופי, והוא מכיל יותר מ-440 מיני ציפורים - יותר מכל פארק אחר במדינה!",
    
    importantInfo: [
      "🛣️ **שערי כניסה**",
      "• סמפיה (Sempaya) - שער ראשי עם מעיינות חמים",
      "• נטורוגו (Ntorogo) - שער צפוני עם גישה ליער",
      "• בונדיבוגיו (Bundibugyo) - שער דרומי נוח",
      "",
      "🚗 **נסיעה והגעה**",
      "• הנסיעה מפורט פורטל אורכת **שעה**",
      "• דרך אגמים קטנים ויערות גשם",
      "• טיסה פנימית לפורט פורטל אפשרית",
      "",
      "🌦️ **עונות השנה**",
      "• יבשה (דצמבר-פברואר, יוני-ספטמבר): דרכים נוחות, ציפורים פעילות",
      "• רטובה (מרץ-מאי, אוקטובר-נובמבר): נוף ירוק, דרכים קשות",
      "",
      "🦜 **חוויות ייחודיות**",
      "• מעיינות חמים סמפיה - מרתיחים ביצים",
      "• צפרות - 440+ מיני ציפורים נדירות",
      "• טרק ביער גשם טרופי - ייחודי באוגנדה",
      "",
      "⏱️ **משך שהות מומלץ**",
      "• יום אחד - טעימה מהירה",
      "• **2-3 ימים** - חוויה מלאה (צפרות, מעיינות, טרקים)"
    ],
    
    gallery: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FSemuliki%20National%20Park%2FSemuliki%20National%20Park%20in%20Fort%20portal%20in%20Uganda.webp?alt=media&token=d44454a1-be09-4e19-a7b5-56bde02ee9e8",
        title: "פארק לאומי סמוליקי",
        description: "פארק לאומי סמוליקי בפורט פורטל באוגנדה"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FSemuliki%20National%20Park%2FSemuliki%20National%20Park%20in%20Fort%20portal%20in%20UG.webp?alt=media&token=b17d8247-0cee-4b81-9ae9-7b058715269a",
        title: "פארק לאומי סמוליקי",
        description: "נוף מרהיב של הפארק בפורט פורטל"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FSemuliki%20National%20Park%2FHot%20Springs%20in%20Semuliki%20National%20Park.webp?alt=media&token=e50f5080-b879-4c05-a7c3-a22a7cc1cb8e",
        title: "מעיינות חמים בסמוליקי",
        description: "מעיינות החמים המפורסמים של סמוליקי"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FSemuliki%20National%20Park%2FHot%20Springs%20in%20Semuliki%20National%20Park%2C%20Uganda.webp?alt=media&token=553be061-e916-4428-8480-e11fd4e036e8",
        title: "מעיינות חמים באוגנדה",
        description: "מעיינות החמים הסאמפיה המרתיחים ביצים"
      }
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FSemuliki%20National%20Park%2FHot%20Springs%20in%20Semuliki%20National%20Park%20Uganda-hero.webp?alt=media&token=228dff7f-a458-4f59-bbcc-d29fdb5c9075",
    
    // Info Grid data for AttractionInfoGrid component
    infoGrid: {
      seasons: [
        "אוגנדה שוכנת על קו המשווה, הטמפרטורות יציבות כל השנה וההבדל העיקרי הוא בכמות הגשמים",
        "עונות יבשות (דצמבר–פברואר, יוני–אוגוסט): בעלי החיים מתרכזים סביב מקורות מים, הדרכים נוחות יותר והצפייה קלה",
        "עונות גשומות (מרץ–מאי, ספטמבר–נובמבר): נופים ירוקים ועשירים, צפרות מצוינת, אך הדרכים חלקלקות"
      ],
      access: [
        "ברכב: כ־שעה מפורט פורטל דרך אגמים קטנים",
        "בטיסה: טיסות פנימיות עם Bar Aviation מאנטבה אל מנחת פורט פורטל"
      ],
      gates: [
        "סמפיה (Sempaya) – שער ראשי עם מעיינות חמים",
        "נטורוגו (Ntorogo) – שער צפוני עם גישה ליער",
        "בונדיבוגיו (Bundibugyo) – שער דרומי נוח"
      ],
      experiences: [
        "מעיינות חמים סאמפיה – מים מבעבעים ומרתיחים ביצים",
        "צפרות עשירה – מעל 440 מיני ציפורים נדירות",
        "יער גשם טרופי – ייחודי באוגנדה",
        "גבול עם קונגו – חוויה תרבותית-ביולוגית"
      ],
      duration: [
        "מינימום: 2 ימים לצפרות ומעיינות חמים",
        "מומלץ: 3–4 לילות לחוויה מלאה עם לינה",
        "מורחב: 5–6 לילות לשילוב עם אטרקציות נוספות"
      ],
      didYouKnow: [
        "פארק סמוליקי הוא הפארק הלאומי היחיד באוגנדה עם יער גשם טרופי",
        "הפארק מכיל יותר מ-440 מיני ציפורים - יותר מכל פארק אחר במדינה",
        "הפארק חולש על קצה יערות האיטורי של קונגו"
      ]
    }
  }
];