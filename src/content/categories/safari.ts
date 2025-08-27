// src/content/categories/safari.ts
import { Attraction } from "../../types";

export const safari: Attraction[] = [
  {
    id: "queen-elizabeth",
    slug: "queen-elizabeth",
    name: "פארק המלכה אליזבת הלאומי",
    subtitle: "הפארק המגוון ביותר באוגנדה עם אריות מטפסי עצים",
    category: "safari",
    region: "מערב אוגנדה",
    description: "הפארק נחשב לאחד האתרים הפופולריים ביותר באוגנדה, עם נוף מגוון הכולל סוואנות, אגמים, יערות טרופיים ומכתשי געש. הוא משתרע על 1,978 קמ\"ר והוא בית ליותר מ־95 מיני יונקים ולמעלה מ־600 מיני ציפורים.\n\nהייחוד המרכזי הוא אריות המטפסים על עצים בסקטור איששה, תופעה נדירה וייחודית. תעלת קזינגה ידועה כריכוז צפוף של היפופוטמים ותניני הנילוס.",
    
    highlights: [
      "אריות מטפסי עצים בסקטור איששה",
      "תעלת קזינגה עם היפופוטמים ותנינים",
      "מעל 600 מיני ציפורים",
      "נופים דרמטיים של הרי הרוונזורי",
      "שמורת ביוספרה של אונסק״ו"
    ],
    
    duration: "3-5 ימים",
    difficulty: "קל עד בינוני",
    bestSeason: "דצמבר-פברואר, יוני-ספטמבר",
    permitCost: "300-450$ ליום",
    minAge: 0,
    
    wildlife: ["אריות מטפסי עצים", "פילים", "באפלו", "נמרים", "היפופוטמים", "תניני נילוס", "600+ מיני ציפורים"],
    howToGetThere: ["6 שעות נסיעה מקמפלה", "דרך פורט פורטל", "אפשרות טיסה לקסאסה"],
    whatToBring: ["משקפת איכותית", "מצלמה עם זום", "דוחה יתושים", "כובע"],
    healthSafety: ["אזהרות מסע עקב קרבה לגבול DRC", "חיסונים סטנדרטיים"],
    accommodation: ["Mweya Safari Lodge (350-600$)", "Katara Lodge (300-450$)", "Ihamba Lakeside (200-300$)"],
    nearby: ["Kibale Forest - שימפנזים", "Rwenzori Mountains", "כפרי דייגים מסורתיים"],
    whyUs: ["מדריכים מקומיים מומחים", "רכבי ספארי עם גג פתוח", "קשרים עם לודג׳ים טובים"],
    valueAdd: ["אחד משני הפארקים המבוקרים ביותר", "שילוב ספארי יבשתי ושייט מים", "גישה נוחה מקמפלה"],
    
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
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95"
  },

  {
    id: "murchison-falls",
    slug: "murchison-falls",
    name: "פארק לאומי מורצ'יסון פולס",
    subtitle: "הפארק הגדול באוגנדה עם המפל העוצמתי ביותר בעולם",
    category: "safari",
    region: "צפון־מערב אוגנדה",
    description: "מורצ'יסון הוא הפארק הגדול ביותר באוגנדה (3,893 קמ\"ר). גולת הכותרת היא מפלי מורצ'יסון, שם נהר הנילוס נדחס דרך נקיק ברוחב 7 מטר בלבד.\n\nהפארק מציע מגוון עצום של נופים והוא בית ל־4 מתוך ה־Big Five. סיורי שייט על הנילוס חושפים מאות היפופוטמים, תנינים וציפור השוהביל הנדירה.",
    
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
    permitCost: "230-400$ ליום",
    minAge: 0,
    
    wildlife: ["אריות ונמרים", "פילים", "ג'ירפות רוטשילד", "היפופוטמים", "תנינים", "ציפור השוהביל", "450+ מיני ציפורים"],
    howToGetThere: ["5-6 שעות נסיעה מקמפלה", "עצירה בשמורת זיווה לקרנפים", "טיסה פנימית אפשרית"],
    whatToBring: ["משקפת איכותית", "מצלמה עם זום", "דוחה יתושים חזק", "כובע"],
    healthSafety: ["חיסון Yellow Fever חובה", "כדורי מניעה למלריה", "מדריכים מקצועיים"],
    accommodation: ["Paraa Safari Lodge (300-500$)", "Chobe Safari Lodge (400-600$)", "Nile Safari Lodge (500-700$)"],
    nearby: ["Budongo Forest - שימפנזים", "Ziwa Rhino Sanctuary", "כפרי לואו"],
    whyUs: ["מדריכים מומחים לחיות נדירות", "רכבי ספארי 4X4", "שייט פרטי בשעות זהב"],
    valueAdd: ["הפארק המבוקר ביותר - 25% מהמבקרים", "שילוב ספארי ושייט נהרות", "אחד מאתרי הדגל של אוגנדה"],
    
    gallery: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2Fmurchison-falls-hero.webp?alt=media&token=56ccea2c-c574-46a6-ac3a-a0ecc2fbc3a5",
        title: "מפלי מורצ'יסון",
        description: "המפל העוצמתי ביותר בעולם - הנילוס נדחס ב-7 מטר"
      },
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
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2Fmurchison-falls-hero.webp?alt=media&token=56ccea2c-c574-46a6-ac3a-a0ecc2fbc3a5"
  },

  {
    id: "lake-mburo",
    slug: "lake-mburo",
    name: "פארק לאומי אגם מבורו",
    subtitle: "הפארק הקטן עם הזברות וחוויות ייחודיות",
    category: "safari",
    region: "דרום־מערב אוגנדה",
    description: "אגם מבורו הוא הפארק הקטן ביותר באוגנדה (260 קמ\"ר) אך גם אחד המיוחדים ביותר. זהו הפארק היחיד עם זברות ואימפלות במספרים גדולים.\n\nללא אריות, מה שמאפשר סיורי הליכה חופשיים. הקרבה לקמפלה (4 שעות) הופכת אותו לפופולרי לטיולי סוף שבוע. יש מסלולי רכיבה על סוסים ואופניים.",
    
    highlights: [
      "הפארק היחיד עם זברות ואימפלות באוגנדה",
      "ללא אריות - סיורי הליכה חופשיים",
      "רכיבה על סוסים ואופניים",
      "קרבה לקמפלה - 4 שעות בלבד",
      "אידיאלי למשפחות"
    ],
    
    duration: "1-3 ימים",
    difficulty: "קל",
    bestSeason: "כל השנה",
    permitCost: "200-350$ ליום",
    minAge: 0,
    
    wildlife: ["זברות", "אימפלות", "היפופוטמים", "תנינים", "אנטילופות", "ציפורי מים", "אנקולה עם קרניים ענקיות"],
    howToGetThere: ["4 שעות נסיעה מקמפלה", "דרך סוואנות ירוקות", "שווקים כפריים"],
    whatToBring: ["נעלי הליכה", "ביגוד לרכיבה", "כובע", "דוחה יתושים"],
    healthSafety: ["ללא אריות - בטוח להליכה", "יתושים ליד האגם", "חיסונים סטנדרטיים"],
    accommodation: ["Mihingo Lodge (400-600$)", "Rwakobo Rock (150-250$)", "Eagle's Nest (80-150$)"],
    nearby: ["העיר אמבררה", "מקלט סלעי בהרי אנקולה", "חוות תרבותיות"],
    whyUs: ["רכיבה על סוסים בספארי", "גישה אינטימית לחיות", "מדריכים לסיורי הליכה"],
    valueAdd: ["Top 5 פארקים באוגנדה", "אידיאלי למשפחות", "נקודת כניסה מושלמת לספארי"],
    
    gallery: [
      "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      "https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg",
      "https://images.pexels.com/photos/534188/pexels-photo-534188.jpeg"
    ],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
  },

  {
    id: "kidepo-valley",
    slug: "kidepo-valley",
    name: "פארק לאומי עמק קידפו",
    subtitle: "הפנינה הסודית - חוויה פראית ובלעדית",
    category: "safari",
    region: "צפון־מזרח אוגנדה",
    description: "קידפו נחשב ל\"פנינה הסודית\" של אוגנדה – יעד פראי ובלעדי. הפארק מרוחק ומספק תחושת בלעדיות מוחלטת.\n\nהחיות כוללים מינים ייחודיים שלא נמצאים במקום אחר באוגנדה – צ'יטה, יען, קודו. זהו גן עדן לצלמים עם נופים מזכירי סרנגטי.",
    
    highlights: [
      "חיות ייחודיות לאוגנדה - צ'יטה, יען",
      "בלעדיות מוחלטת - מעט מבקרים",
      "נופים מזכירי סרנגטי",
      "תרבות קראמונג'ונג אותנטית",
      "גן עדן לצלמים"
    ],
    
    duration: "3-5 ימים",
    difficulty: "בינונית-גבוהה",
    bestSeason: "אוקטובר-אפריל",
    permitCost: "350-600$ ליום",
    minAge: 8,
    
    wildlife: ["צ'יטה (ייחודי)", "יען", "קודו", "אריות", "פילים", "ג'ירפות", "באפלו"],
    howToGetThere: ["10-12 שעות נסיעה (מאתגר)", "טיסה פנימית מומלצת", "מישורי קראמונג'ונג"],
    whatToBring: ["ציוד צילום מקצועי", "ביגוד למזג יבש", "כובע", "נעליים חזקות"],
    healthSafety: ["תנאים בסיסיים", "מזג אוויר יבש וחם", "הכנה לתנאים מרוחקים"],
    accommodation: ["Apoka Safari Lodge (800-1200$)", "Kidepo Savannah Lodge (200-400$)", "Nga'Moru Wilderness (150-250$)"],
    nearby: ["Moroto - מרכז תרבותי", "הר מורונגולה", "כפרי קראמונג'ונג"],
    whyUs: ["גישה בלעדית לאזור פראי", "מדריכים מקומיים אותנטיים", "חוויה ייחודית"],
    valueAdd: ["רק 7,400 מבקרים בשנה", "דירוג 4.8/5", "שמי כוכבים נדירים"],
    
    gallery: [
      "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      "https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg",
      "https://images.pexels.com/photos/534188/pexels-photo-534188.jpeg"
    ],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
  },

  {
    id: "mount-elgon",
    slug: "mount-elgon",
    name: "פארק לאומי הר אלגון",
    subtitle: "הר געש כבוי עם קלדרה עצומה ומפלי סיפי",
    category: "safari",
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
    
    gallery: [
      "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      "https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg",
      "https://images.pexels.com/photos/534188/pexels-photo-534188.jpeg"
    ],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
  },

  {
    id: "rwenzori-mountains",
    slug: "rwenzori-mountains",
    name: "פארק לאומי הרי הרוונזורי",
    subtitle: "הרי הירח - קרחונים על קו המשווה",
    category: "safari",
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
    
    gallery: [
      "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      "https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg",
      "https://images.pexels.com/photos/534188/pexels-photo-534188.jpeg"
    ],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
  },

  {
    id: "semuliki",
    slug: "semuliki",
    name: "פארק לאומי סמוליקי",
    subtitle: "יער גשם טרופי עם מעיינות חמים",
    category: "safari",
    region: "מערב אוגנדה, מחוז בונדיובוגיו",
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
    permitCost: "250-400$ ליום",
    minAge: 8,
    
    wildlife: ["פילים יער", "קופים", "440+ מיני ציפורים", "חיות ייחודיות מהקונגו"],
    howToGetThere: ["שעה מפורט פורטל", "דרך אגמים קטנים", "יערות גשם"],
    whatToBring: ["משקפת איכותית", "מצלמה עם זום", "דוחה יתושים", "כובע"],
    healthSafety: ["המלצות בטיחות עקב קרבה לקונגו", "יתושים רבים", "חיסונים סטנדרטיים"],
    accommodation: ["Semuliki Safari Lodge (400-600$)", "UWA Bandas (50-100$)", "מלונות בפורט פורטל (100-300$)"],
    nearby: ["פורט פורטל (שעה)", "הרי רוונזורי (שעתיים-שלוש)", "כפרי באקונגו"],
    whyUs: ["מדריכים מומחי צפרות", "גישה ליער גשם", "קשרים עם קהילות מקומיות"],
    valueAdd: ["יעד נישה ייחודי", "מחקר אקולוגי", "חוויה תרבותית-ביולוגית"],
    
    gallery: [
      "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      "https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg",
      "https://images.pexels.com/photos/534188/pexels-photo-534188.jpeg"
    ],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
  }
];