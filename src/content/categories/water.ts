// src/content/categories/water.ts
import { Attraction } from "../../types";

export const water: Attraction[] = [
  {
    id: "murchison-falls",
    slug: "murchison-falls",
    name: "מפלי מורצ'יסון",
    subtitle: "המפל העוצמתי ביותר בעולם - הנילוס נדחס ב-7 מטר",
    category: "water",
    region: "פארק הלאומי מורצ'יסון, מחוזות Nwoya ו־Kiryandongo",
    description: "מפלי מורצ'יסון, הידועים גם בשם Kabalega Falls, הם אולי האתר הטבעי האיקוני ביותר באוגנדה. כאן נהר הנילוס הלבן מצטמצם לפתע למעבר צר של שבעה מטרים בלבד, ואז נופל מגובה של כ־43 מטרים אל תוך קניון צר ורועש.\n\nהעוצמה של המים יוצרת שאון אדיר, ערפל סמיך וקשתות צבעוניות קבועות בימי שמש. האזור נושא משמעות תרבותית להרי הע'צ'ולי, הרואים במפלים מקום קדוש לרוחות הנהר. השם \"מורצ'יסון\" הוענק בתקופה הקולוניאלית על ידי חוקרים בריטיים, אך רבים המקומיים מעדיפים את השם Kabalega על שם מלך בוניורו.",
    
    highlights: [
      "המפל העוצמתי ביותר בעולם",
      "הנילוס נדחס ב-7 מטר",
      "קניון צר ורועש",
      "מקום קדוש לרוחות הנהר",
      "קשתות צבעוניות"
    ],
    
    duration: "יום מלא לפחות",
    difficulty: "בינוני",
    bestSeason: "יוני–ספטמבר, דצמבר–פברואר",
    permitCost: "45$ לזרים",
    minAge: 8,
    
    wildlife: ["450+ מיני ציפורים", "חיות בר", "צמחיית נהר"],
    howToGetThere: ["כביש סלול עד מסינדי", "דרכי עפר", "5–6 שעות מקמפלה"],
    whatToBring: ["מצלמה", "כובע", "מים", "דוחה יתושים"],
    healthSafety: ["אין לשחות", "זרמים חזקים", "בילהרציה"],
    accommodation: ["Paraa Safari Lodge (150–250$)", "Red Chilli Rest Camp (50–100$)", "לודג'ים"],
    nearby: ["Ziwa Rhino Sanctuary", "Karuma Falls", "פארק מורצ'יסון"],
    whyUs: ["מדריכים מומחים", "גישה למפלים", "קשרים עם הפארק"],
    valueAdd: ["אתר דגל עולמי", "שילוב ספארי ונוף", "היסטוריה תרבותית"],
    
    funFact: "מפלי מורצ'יסון הם המפל העוצמתי ביותר בעולם - הנילוס נדחס מ-50 מטר רוחב ל-7 מטר בלבד, יוצר כוח אדיר של 300 קוב מים בשנייה!",
    
    gallery: [
      "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      "https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg",
      "https://images.pexels.com/photos/534188/pexels-photo-534188.jpeg"
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FMurchison%20Falls%2FMurchison%20Falls.webp?alt=media&token=15155199-1b7e-4be2-9723-6ba646c3fc97"
  },

  {
    id: "sipi-falls",
    slug: "sipi-falls",
    name: "מפלי סיפי",
    subtitle: "שלושה מפלים מרהיבים על מדרונות הר אלגון",
    category: "water",
    region: "מחוז Kapchorwa, מזרח אוגנדה",
    description: "מפלי סִיפִּי הם רצף מרהיב של שלושה מפלים היורדים על נהר סִיפִּי במדרונות המערביים של הר אלגון. המפל המרכזי צונח מגובה של כ־100 מטר, ושני הנותרים בגבהים של 75 ו־85 מטרים, כולם מוקפים בצמחייה ירוקה ובחוות קפה ערביקה.\n\nהייחודיות טמונה בכך שהוא לא רק מפל בודד אלא מכלול של שלושה אתרים נפרדים, המחוברים במסלולי הליכה ציוריים. הקשר התרבותי של האתר חזק – הוא מהווה מוקד מרכזי לטקסי ברית מילה מסורתיים של שבט הסביני.",
    
    highlights: [
      "שלושה מפלים מרהיבים",
      "מפל מרכזי 100 מטר",
      "חוות קפה ערביקה",
      "תרבות שבט הסביני",
      "מסלולי הליכה ציוריים"
    ],
    
    duration: "חצי יום–יום מלא",
    difficulty: "בינוני",
    bestSeason: "יוני–אוגוסט, דצמבר–מרץ",
    permitCost: "2,000–50,000 UGX (1–15$)",
    minAge: 8,
    
    heroHeight: {
      desktop: "45vh"
    },
    
    wildlife: ["ציפורי הרים", "צמחייה אלפינית", "חיות יער"],
    howToGetThere: ["כביש סלול עד Mbale", "דרכי עפר", "5–6 שעות מקמפלה"],
    whatToBring: ["נעלי הליכה", "מצלמה", "כובע", "מים"],
    healthSafety: ["שבילים חלקלקים", "גובה רב", "מדריכים מוסמכים"],
    accommodation: ["Sipi River Lodge (80–150$)", "Lacam Lodge (50–100$)", "הוסטלים (20–40$)"],
    nearby: ["Mount Elgon NP", "Pian Upe Reserve", "ציורי הסלע Nyero"],
    whyUs: ["מדריכים מקומיים", "גישה למפלים", "קשרים עם קהילות"],
    valueAdd: ["אתר מוכר מאוד", "שילוב טבע ותרבות", "נוף ייחודי"],
    
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FScenic%20view%20of%20Sipi%20Waterfall%20landscape%20with%20trees.webp?alt=media&token=16899918-3868-4aed-b8ff-57e4e26f98a5",
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FScenic%20view%20of%20Sipi%20Waterfall%20in%20Kapchorwa.webp?alt=media&token=c80ade17-81f7-4e46-bbeb-9e2193276b2d",
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FScenic%20view%20of%20Sipi%20Waterfall%20in%20Kapchorwa%2C%20Mount%20Elgon.webp?alt=media&token=15b5ca04-cd32-4b0d-8fac-f84dc560c245",
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FRear%20view%20of%20a%20hiker%20in%20a%20cave%20against%20the%20background%20of%20Sipi%20Waterfall.webp?alt=media&token=0ce863cc-78f5-43e1-b490-8a356231e274"
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FScenic%20view%20of%20Sipi%20Waterfall%20in%20Kapchorwa-Hero.webp?alt=media&token=587e4fa5-02a6-483c-8894-a99b4a03fdac"
  },

  {
    id: "jinja-white-nile",
    slug: "jinja-white-nile",
    name: "ג'ינג'ה – מקור הנילוס (White Nile)",
    subtitle: "בירת האקסטרים של מזרח אפריקה - נקודת היציאה ההיסטורית של הנילוס",
    category: "water",
    region: "ג'ינג'ה, כ־2 שעות מקמפלה",
    coordinates: {
      lat: 0.4167,
      lng: 33.1833
    },
    description: "ג'ינג'ה נחשבת לבירת האקסטרים של מזרח אפריקה ולנקודת יציאה היסטורית שממנה מתחיל הנילוס הלבן את מסעו צפונה מאגם ויקטוריה. המקום זכה לתהודה עולמית מאז גילויו על ידי החוקר ג'ון האנינג ספייק במאה ה־19, וכיום הוא משלב בין עבר היסטורי מפואר לבין חוויות תיירות מודרניות.\n\nבמרכז העיר נמצא Source of the Nile – אתר סמל עולמי המסומן באנדרטה ובסביבתו מסעדות, בתי קפה ונקודות תצפית. מכאן מתחיל הנהר לזרום צפונה, ועבור המבקרים זהו שילוב ייחודי של תרבות, טבע ומים.\n\nהאזור הפך למוקד משיכה לתיירים בזכות המגוון הרחב של חוויות – החל משייט רגוע וצילום ליד המעיינות התת־קרקעיים, ועד רפטינג אקסטרים בזרמים עזים הנחשבים מהטובים בעולם. חובבי אדרנלין יכולים להתנסות גם בבאנג'י מגשר הנילוס, קיאקים ומסלולי אופניים סביב האגם והנהר.\n\nלצד זאת, ג'ינג'ה מציעה גם מפגש עם התרבות המקומית: שוקי אוכל צבעוניים, מוזיקה אותנטית וכפרי דייגים מסורתיים. השילוב בין פעילות אתגרית, נוף עוצר נשימה וחוויות תרבותיות הופך את ג'ינג'ה לאחת התחנות החשובות בכל מסלול טיול באוגנדה.",
    
    highlights: [
      "בירת האקסטרים של מזרח אפריקה",
      "נקודת היציאה ההיסטורית של הנילוס",
      "רפטינג וקיאקים ברמה עולמית",
      "באנג'י מגשר הנילוס",
      "שילוב תרבות, טבע ומים"
    ],
    
    duration: "חצי יום–יום מלא",
    difficulty: "בינוני",
    bestSeason: "יוני–ספטמבר ודצמבר–פברואר",
    permitCost: "10–15$ לאתר Source, 20$ שייט, 50–100$ פעילויות אקסטרים",
    minAge: 8,
    
    wildlife: ["אנדרטה של Source of the Nile", "שייט קצר וצילום על הנהר", "רפטינג וקיאקים במים סוערים", "באנג'י מגשר הנילוס", "מפגש עם שוקי אוכל ותרבות מקומית", "צפרות ונופים ירוקים"],
    howToGetThere: ["כביש סלול", "תחבורה ציבורית זמינה", "2 שעות מקמפלה"],
    whatToBring: [],
    healthSafety: ["אין לשחות בזרמים", "מומלץ להיעזר במדריכים מוסמכים", "עונה מועדפת: יוני–ספטמבר ודצמבר–פברואר (עונה יבשה)"],
    accommodation: ["Nile Resort (~100$ ללילה)", "לודג'ים לאורך הנהר (50–250$)", "מלונות בג'ינג'ה"],
    nearby: ["Itanda Falls", "Mabira Forest", "שוק מקומי בג'ינג'ה"],
    whyUs: ["מדריכים מומחי מים", "ציוד איכותי", "קשרים עם חברות רפטינג"],
    valueAdd: ["אתר דגל עולמי", "ספורט אתגרי ברמה עולמית", "היסטוריה עשירה"],
    
    funFact: "ג'ינג'ה נחשבת לבירת האקסטרים של מזרח אפריקה - כאן מתחיל הנילוס הלבן את מסעו צפונה מאגם ויקטוריה, ומכאן יצאו החוקרים האירופאים הראשונים לגלות את מקורות הנילוס!",
    
    gallery: [
      "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      "https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg",
      "https://images.pexels.com/photos/534188/pexels-photo-534188.jpeg"
    ],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
  },

  {
    id: "lake-mburo",
    slug: "lake-mburo",
    name: "אגם מבורו",
    subtitle: "אגם קטן עם ספארי עשיר - מושלם לטיול קצר",
    category: "water",
    region: "מחוז Mbarara, מערב אוגנדה",
    description: "אגם מבורו, הקטן יחסית (260 קמ\"ר), שוכן בתוך הפארק הלאומי Lake Mburo. סביבתו עשירה בבעלי חיים – זברות, אימפלות, תאו, וציפורים נדירות. האגם מהווה מוקד לספארי מים, במיוחד בשייט החושף להקות היפופוטמים ותנינים.\n\nזהו האתר המושלם לטיול קצר בדרך בין קמפלה למערב אוגנדה, בזכות הנגישות הגבוהה שלו. ייחודו טמון בכך שהוא משלב בין אגם קטן ויפהפה לבין חוויית ספארי מלאה.",
    
    highlights: [
      "אגם קטן ויפהפה",
      "ספארי מים",
      "היפופוטמים ותנינים",
      "נגישות גבוהה",
      "שילוב ספארי ואגם"
    ],
    
    duration: "יום אחד או לילה",
    difficulty: "קל",
    bestSeason: "כל השנה, עדיף יבש",
    permitCost: "40–45$",
    minAge: 0,
    
    wildlife: ["זברות", "אימפלות", "תאו", "היפופוטמים", "תנינים"],
    howToGetThere: ["כביש סלול", "תחבורה ציבורית חלקית", "4 שעות מקמפלה"],
    whatToBring: ["מצלמה", "כובע", "דוחה יתושים", "בגדים נוחים"],
    healthSafety: ["סיכוני חיות בר", "בילהרציה", "חיסונים סטנדרטיים"],
    accommodation: ["Mihingo Lodge (200$+)", "לודג'ים זולים (50–100$)", "קמפינג"],
    nearby: ["Igongo Cultural Centre", "Mbarara", "מערב אוגנדה"],
    whyUs: ["מדריכים מומחי ספארי", "גישה לאגם", "קשרים עם הפארק"],
    valueAdd: ["נגישות גבוהה", "שילוב ספארי ואגם", "יעד מוכר"],
    
    gallery: [
      "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      "https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg",
      "https://images.pexels.com/photos/534188/pexels-photo-534188.jpeg"
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FLake%20Mburo%2FMpalas%20in%20lake%20Mburo%20national%20park-Hero.webp?alt=media&token=a908a57f-6143-446c-8f6b-17e5894948a5"
  },


  {
    id: "lake-victoria",
    slug: "lake-victoria",
    name: "אגם ויקטוריה",
    subtitle: "האגם הגדול ביותר באפריקה - מקור הנילוס הלבן",
    category: "water",
    region: "דרום מזרח אוגנדה, נושק לקמפלה ואנטבה",
    description: "אגם ויקטוריה הוא גוף המים הגדול ביותר באפריקה (כ־59,947 קמ\"ר) והשני בגודלו בעולם מבין אגמי המים המתוקים. חלקו האוגנדי נחשב ללב התיירות והדיג המקומי, עם אלפי דייגים, שווקים ססגוניים וחופים ציוריים.\n\nהאגם מכיל מאות איים – הבולטים הם איי ססה (Ssese Islands), שהפכו לאתר נופש פופולרי. זהו מקורו של נהר הנילוס הלבן, והמשמעות התרבותית וההיסטורית שלו לאוגנדה היא עצומה.",
    
    highlights: [
      "האגם הגדול ביותר באפריקה",
      "מקור הנילוס הלבן",
      "איי ססה",
      "דיג מסורתי",
      "חופים ציוריים"
    ],
    
    duration: "חצי יום–לילה אחד",
    difficulty: "קל",
    bestSeason: "יוני–ספטמבר, דצמבר–פברואר",
    permitCost: "ללא דמי כניסה",
    minAge: 0,
    
    wildlife: ["יותר מ־200 מיני דגים", "עופות מים", "צמחיית אגם"],
    howToGetThere: ["גישה מצוינת מכבישים ראשיים", "מעבורות לאיי ססה", "15–30 דק' מאנטבה"],
    whatToBring: ["בגדי ים", "מצלמה", "כובע", "דוחה יתושים"],
    healthSafety: ["בילהרציה נפוצה במים רדודים", "תנינים והיפופוטמים נדירים", "סופות פתאומיות"],
    accommodation: ["Lake Victoria Serena Resort (200$+)", "אכסניות באיי ססה (30–80$)", "מלונות באנטבה"],
    nearby: ["Entebbe Botanical Gardens", "Ngamba Chimpanzee Sanctuary", "אנטבה"],
    whyUs: ["מדריכים מומחי אגם", "גישה לאיים", "קשרים עם דייגים"],
    valueAdd: ["אתר דגל לאומי", "היסטוריה עשירה", "נגישות גבוהה"],
    
    gallery: [
      "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      "https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg",
      "https://images.pexels.com/photos/534188/pexels-photo-534188.jpeg"
    ],
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
  },

  {
    id: "lake-bunyonyi",
    slug: "lake-bunyonyi",
    name: "אגם בוניוני",
    subtitle: "אגם הציפורים הקטנות - המקום הבטוח ביותר לשחייה באוגנדה",
    category: "water",
    region: "מחוז קבלה, דרום מערב אוגנדה",
    description: "אגם בוניוני מכונה \"אגם הציפורים הקטנות\" בשל מאות מיני העופות החיים סביבו. הוא מתפרש בין גבעות טרסות ירוקות ומכיל 29 איים ייחודיים. עומקו שנוי במחלוקת – הערכות נעות בין 40 מטרים ועד יותר מ־900 מטרים – מה שעשוי להפוך אותו לאגם השני בעומקו באפריקה.\n\nייחודו הגדול הוא היותו נקי מבילהרציה ומסכנות תנינים/היפופוטמים, ולכן נחשב המקום הבטוח ביותר לשחייה באוגנדה. סביבו חיים בני הבאטווה (Batwa) עם היסטוריה עשירה.",
    
    highlights: [
      "29 איים ייחודיים",
      "מאות מיני ציפורים",
      "בטוח לשחייה",
      "29 איים ייחודיים",
      "תרבות באטווה"
    ],
    
    duration: "לילה אחד–יומיים",
    difficulty: "קל",
    bestSeason: "יוני–ספטמבר, דצמבר–פברואר",
    permitCost: "ללא עלות",
    minAge: 0,
    
    heroHeight: {
      desktop: "45vh"
    },
    
    wildlife: ["מאות מיני ציפורים", "דגים", "צמחיית אגם"],
    howToGetThere: ["כביש סלול לקבלה", "אוטובוסים זמינים", "7–8 שעות מקמפלה"],
    whatToBring: ["בגדי ים", "מצלמה", "כובע", "דוחה יתושים"],
    healthSafety: ["בטוח לשחייה", "האגם קריר בשל הגובה", "חיסונים סטנדרטיים"],
    accommodation: ["BirdNest Resort (100–200$)", "אכסניות 20–50$", "לודג'ים"],
    nearby: ["Bwindi NP", "Mgahinga NP", "קבלה"],
    whyUs: ["מדריכים מקומיים", "גישה לאיים", "קשרים עם קהילות"],
    valueAdd: ["פופולרי מאוד", "בטוח למשפחות", "נוף ייחודי"],
    
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FLake%20Bunyonyi%2FPanoramic%20view%20from%20Bunyonyi%20lake%20in%20Uganda.webp?alt=media&token=d101a23c-b982-4063-8575-f2e24bc5bb95",
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FLake%20Bunyonyi%2FLake%20Bunyonyi%2C%20Uganda%2C%20Africa.webp?alt=media&token=f0fb7162-6cd4-4ccb-9bf0-f5bc201d752e",
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FLake%20Bunyonyi%2FLake%20Bunyonyi%2C%20Kabale.webp?alt=media&token=6306a0d2-c4ca-478f-a6ec-d5c683604ef4",
      "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FLake%20Bunyonyi%2FWoman%20sitting%20on%20dock%20at%20sunset%20on%20Lake%20Bunyonyi.webp?alt=media&token=8766dbe4-f9d8-47f6-a510-332183690bb9"
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FLake%20Bunyonyi%2FWoman%20sitting%20on%20dock%20at%20sunset%20on%20Lake%20Bunyonyi-Hero.webp?alt=media&token=3d315584-c531-4256-990a-82e532f86de0"
  },











];