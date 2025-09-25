import React from "react";
import { Link } from "react-router-dom";

const Tour10Days: React.FC = () => {
  const itinerary = [
    {
      day: 1,
      title: "נחיתה באנטבה והגעה לבוסיקה",
      description: "נחיתה בנמל התעופה אנטבה, פגישה עם הנציג שלנו שיעביר אתכם למלון בבוסיקה לוארו. זהו יום של הגעה והתארגנות לקראת ההרפתקה הגדולה שמחכה לכם. תוכלו להתרענן ולהתכונן לחוויות המרתקות של המסלול המקיף.",
      details: {
        accommodation: "Extreme Adventure Park",
        meals: "פנסיון מלא"
      },
      links: [
        { text: "Extreme Adventure Park - המדריך המלא", url: "/services/extreme-park" }
      ]
    },
    {
      day: 2,
      title: "יום הרפתקה ב-Extreme Adventure Park",
      description: "יום מלא של הרפתקות בפארק ההרפתקאות המגוון ביותר באוגנדה. תתחילו לגלות את אוגנדה עם רכיבת ראזור אקסטרים לג'ינג'ה סיטי, ביתם של מקורות הנילוס. זהו יום של אקסטרים ופעילויות הרפתקה שיכניסו אתכם לאווירה של אוגנדה הפראית והמרתקת.",
      details: {
        accommodation: "Extreme Adventure Park Busika",
        meals: "פנסיון מלא"
      },
      links: [
        { text: "Extreme Adventure Park - המדריך המלא", url: "/services/extreme-park" }
      ]
    },
    {
      day: 3,
      title: "מפגש עם הקרנפים והגעה למורצ'יסון",
        description: "לאחר איסוף מבוסיקה, נתחיל את המסע למפלי מורצ'יסון. בדרך נעצור בשמורת הקרנפים זיווה, 180 קילומטר מקמפלה, לחוויה מדהימה של מעקב אחרי קרנפים לבנים דרומיים. לאחר החוויה נמשיך לארוחת צהריים ב-Kabalega Dinners ונמשיך דרך מסינדי לפארק הלאומי מורצ'יסון דרך יער בודונגו. נסיים את היום בשקיעה מרהיבה.",
      details: {
        accommodation: "Paraa Safari Lodge",
        meals: "פנסיון מלא"
      },
      links: [
        { text: "פארק מורצ'יסון - כל מה שצריך לדעת", url: "/attraction/murchison-falls" }
      ]
    },
    {
      day: 4,
      title: "ספארי ושייט בנילוס",
      description: "לאחר ארוחת בוקר מוקדמת, יציאה לספארי נרחב במסלולי בוליגי. החיות שניתן לפגוש כוללות: ג'ירפות, אנטילופות אוגנדיות, אוריבי, ווטרבק, הרטביסט, סיטטונגה, בושבק, חזירי יער, אריות, נמרים, מונגוזים, גנטים, צבועים, תנים ושועלי אוזניים עטלפים. לאחר ארוחת צהריים - שייט של 3 שעות בנילוס שיעניק לכם הזדמנות לראות את מפלי מורצ'יסון מלמטה. היפופוטמים, תנינים, אנטילופות וציפורי מים ניתן לראות לאורך חופי הנהר. חזרה ללודג' להתרעננות ליד הבריכה וארוחת ערב.",
      details: {
        accommodation: "Paraa Safari Lodge",
        meals: "פנסיון מלא",
        activities: "ספארי בוקר (4 שעות), שייט אחר צהריים (3 שעות)"
      },
      links: [
        { text: "מפלי מורצ'יסון - המדריך המלא", url: "/attraction/murchison-falls" }
      ]
    },
    {
      day: 5,
      title: "ספארי נוסף ותצפית על המפלים",
      description: "לאחר ארוחת בוקר בלודג', יציאה לספארי נוסף במסלול שונה לחוויה נוספת והזדמנות לראות בתי גידול ומינים נוספים. ארוחת צהריים ב-Pakuba Lodge ונסעה לראש המפלים לחוות את הרכס של 7 מטרים ועוצמת המפל. עם סיום נצא מהפארק ונצא למסע לצל הרי הירח.",
      details: {
        accommodation: "Tabebuia Spa and Resort",
        meals: "פנסיון מלא"
      },
      links: [
        { text: "מפלי מורצ'יסון - המדריך המלא", url: "/attraction/murchison-falls" }
      ]
    },
    {
      day: 6,
      title: "פורט פורטל בצל הרי הירח",
      description: "ארוחת בוקר ונסיעה לפורט פורטל. נגיע לעיר הצבעונית והיפה פורט פורטל, בירת ממלכת טורו, בצל \"הרי הירח\" המיתולוגיים - הרי רובנזורי. העיר התוססת הזו משמשת כבסיס לפעילויות סביב הפארק הלאומי קיבאלה. הפארק מציע אחד ממקטעי היער הגשום הגזעיים ביותר באוגנדה, עם 70 מיני יונקים ו-13 מיני פריימטים. בערב נצא לטיול בביצות ביגודי המאכלסות למעלה מ-200 מיני ציפורים כולל זיקיות, טוראקו, תוכים, עגורים, שלדגים ועוד רבים אנדמיים לביצות. השמורה היא בית ל-8 מיני פריימטים, כולל קולובוס שחור-לבן, קולובוס אדום, קוף זנב אדום, מנגבי לחיים אפורים, בבון זית, קוף לואסט, קוף ורווט וקוף כחול.",
      details: {
        accommodation: "Tabebuia Spa and Resort",
        meals: "ארוחת בוקר, צהריים וערב"
      },
      links: [
        { text: "קיבאלה נשנל פארק - בירת הפריימטים", url: "/attraction/chimps-kibale" }
      ]
    },
    {
      day: 7,
      title: "טרקינג שימפנזים בקיבאלה",
      description: "הטיול של היום מתחיל לאחר תדרוך ב-Kanyanchu trailhead; תבלו חצי יום עם שימפנזים עוקבים אחריהם. הפעילות מתחילה ב-8:00 בבוקר. חצי יום חיפוש אחר שימפנזים ופריימטים אחרים כולל פואסטים, קולובוסים אדומים, כחולים, זנב אדום ומנגבי לחיים אפורים מתנדנדים ביער הצפוף וציפורים, פרפרים וחרקים קטנים רבים. המדריך יספק הסברים מפורטים לא רק על פריימטים, אלא גם על כל החיות והצמחייה ביער. לאחר הטרקינג נתחיל את המסע דרומה לקווין אליזבת' נשנל פארק (3 שעות נסיעה). QENP מכיל מערכת אקולוגית מגוונת עם סוואנה יפה, ביצות פוריות מה שהופך אותו לבית למשחק גדול, 10 מיני פריימטים ומספר גדול של מיני ציפורים.",
      details: {
        accommodation: "Mweya Safari Lodge",
        meals: "פנסיון מלא"
      },
      links: [
        { text: "טרקינג שימפנזים - המדריך המלא", url: "/attraction/chimps-kibale" }
      ]
    },
    {
      day: 8,
      title: "שייט בקאזינגה צ'אנל",
      description: "לאחר ארוחת בוקר תצאו לספארי דרך מגזר קסני, שימו לב לציפורים האנדמיות של אלברט ובופאלו כף, פילים, ווטרבק, נמרים, צבועים מנוקדים ומגוון מיני אנטילופות. לאחר הספארי תסעו לרציף לתפוס שייט ב-11:00 לקאזינגה צ'אנל ולתוך אגם אדוארד. הטיול הזה עובר דרך אולי הריכוז הגבוה ביותר של היפופוטמים וחיות רבות ניתן לראות שותות בקצה המים. השייט הזה מציע פלטפורמה מעולה לצילום, צפרות וצפייה במשחק. החיים הציפורים הפוריים צבעוניים ומדהימים עם יותר מ-550 מינים תושבים.",
      details: {
        accommodation: "Mweya Safari Lodge",
        meals: "פנסיון מלא"
      },
      links: [
        { text: "קווין אליזבת' נשנל פארק - המדריך המלא", url: "/category/queen-elizabeth" }
      ]
    },
    {
      day: 9,
      title: "אגם מבורו נשנל פארק",
      description: "אופציונלי נסיעה מוקדמת בבוקר בקווין אליזבת' NP והמשך לאגם מבורו נשנל פארק. עצירה במרכז התרבות איגונגו, ולאחר מכן העברה ללודג'. אחר הצהריים יציאה לשייט באגם ולאחר מכן ספארי ערב. אגם מבורו נשנל פארק הוא מקום מיוחד מאוד; כל חלק בו חי עם מגוון, עניין וצבע. הוא מכיל ביצה נרחבת. סביר שתראו אילנדים, אימפלות, ווטרבק, חזירי בר, טופיס וזברות.",
      details: {
        accommodation: "Mihingo Lodge",
        meals: "פנסיון מלא"
      },
      links: [
        { text: "אגם מבורו נשנל פארק - המדריך המלא", url: "/category/lake-mburo" }
      ]
    },
    {
      day: 10,
      title: "טיול טבע מודרך וחזרה לאנטבה",
      description: "בוקר מוקדם, נצא לטיול טבע מודרך בפארק ולאחר מכן נתחיל את הנסיעה חזרה לקמפלה. המדריך שלכם יוריד אתכם בנמל התעופה הבינלאומי אנטבה בזמן לטיסה חזרה הביתה.",
      details: {
        meals: "ארוחת בוקר"
      },
      links: []
    }
  ];

  return (
    <div className="fade-in" dir="rtl">
      {/* Hero Section */}
      <section 
        className="relative w-full"
        style={{
          height: '45vh',
          minHeight: '200px'
        }}
      >
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FTourists%20overlook%20the%20massive%20waterfall%20of%20Murchison%20Falls%20on%20the%20Nile%20River%20in%20Uganda.webp?alt=media&token=bc3f5511-234b-4696-85c0-446e67dbea52"
          alt="מסלול 5 ימים ספארי טבע באוגנדה"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="container mx-auto max-w-screen-xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
              מסלול 10 ימים - הרפתקה מלאה באוגנדה
            </h1>
            <h2 className="text-base md:text-lg text-amber-300 font-medium mb-3 drop-shadow-lg">
              מפלי מורצ'יסון, שימפנזים, קווין אליזבת' ואגם מבורו - המסלול המקיף ביותר
            </h2>

            {/* כרטיסיות מידע בדסקטופ - מתחת לכותרת והתיאור */}
            <div className="hidden md:flex gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">משך הטיול</div>
                <div className="text-lg font-bold text-white">10 ימים</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">רמת קושי</div>
                <div className="text-lg font-bold text-white">קל עד בינוני</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">מתאים ל</div>
                <div className="text-lg font-bold text-white">זוגות, משפחות וקבוצות</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">זמן מומלץ לטיול</div>
                <div className="text-lg font-bold text-white">כל השנה</div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* כרטיסיות מידע במובייל - מתחת להירו */}
      <div className="bg-white border-t md:hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">משך הטיול</div>
              <div className="text-lg font-bold text-gray-700">10 ימים</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">רמת קושי</div>
              <div className="text-lg font-bold text-gray-700">קל עד בינוני</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">מתאים ל</div>
              <div className="text-lg font-bold text-gray-700">זוגות, משפחות וקבוצות</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">זמן מומלץ לטיול</div>
              <div className="text-lg font-bold text-gray-700">כל השנה</div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-8 md:py-10 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4B361C] font-sans">
              סקירה כללית
            </h2>
            <div className="w-24 h-1 bg-[#C9A34E] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 font-sans max-w-3xl mx-auto mb-6 leading-relaxed" style={{ fontFamily: 'Poppins' }}>
              המסלול המקיף ביותר שלנו – עשרה ימים מלאים בחוויות בלתי נשכחות בין חיות הבר, הפארקים הלאומיים והנופים הפראיים של אוגנדה.
              <br />
              מתאים למי שרוצה לחוות את כל מה שאוגנדה מציעה במסלול אחד מקיף.
            </p>
            
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white border border-[#534B20]/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] text-center h-48 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-[#4B361C] mb-3 border-b border-[#C9A34E] pb-2">מסלול מקיף ל-10 ימים</h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins' }}>חוויה מקיפה ומלאה של כל מה שאוגנדה מציעה</p>
              </div>
              <div className="bg-white border border-[#534B20]/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] text-center h-48 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-[#4B361C] mb-3 border-b border-[#C9A34E] pb-2">מפלי מורצ'יסון</h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins' }}>עוצמת הנילוס ברגעים שיישארו חרוטים בזיכרון</p>
              </div>
              <div className="bg-white border border-[#534B20]/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] text-center h-48 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-[#4B361C] mb-3 border-b border-[#C9A34E] pb-2">קווין אליזבת'</h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins' }}>שייט בקאזינגה צ'אנל עם ריכוז ההיפופוטמים הגבוה בעולם</p>
              </div>
              <div className="bg-white border border-[#534B20]/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] text-center h-48 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-[#4B361C] mb-3 border-b border-[#C9A34E] pb-2">אגם מבורו</h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins' }}>טיול רגלי מודרך וספארי באגם עם זברות ואימפלות</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Itinerary */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#4B361C] font-sans">
              מסלול 10 ימים – יום אחרי יום
            </h2>
            <div className="w-24 h-1 bg-[#C9A34E] mx-auto mb-2"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute right-0 top-8 bottom-8 w-0.5 bg-[#d4af37] opacity-40 hidden lg:block"></div>
            
            <div className="space-y-12">
            {itinerary.map((day, index) => {
              // Define images for each day using existing site images
              const dayImages = [
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2FBUZ04643.jpg?alt=media&token=55ed0d12-ab8a-46fc-8f8b-0c3cb99c1f93",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2FBUZ04643.jpg?alt=media&token=55ed0d12-ab8a-46fc-8f8b-0c3cb99c1f93",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2FAfrican%20Bush%20Elephant%20-%20Loxodonta%20africana%2C%20iconic%20member%20of%20African%20big%20five%2C%20Queen%20Elizabeth%20National%20Park.webp?alt=media&token=3b4c82c9-b383-4bbc-94c1-85438ff412b5", 
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2Fmurchison-falls-hero.webp?alt=media&token=56ccea2c-c574-46a6-ac3a-a0ecc2fbc3a5",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FTourists%20overlook%20the%20massive%20waterfall%20of%20Murchison%20Falls%20on%20the%20Nile%20River%20in%20Uganda.webp?alt=media&token=bc3f5511-234b-4696-85c0-446e67dbea52",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FKibale%20Chimpanzees%2Fkibale%20chimp%20chimpanzee%20Uganda%20in%20Africa.webp?alt=media&token=5d009a2b-563d-4dbb-b7fb-8f70784554de",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FKibale%20Chimpanzees%2Fkibale%20chimp%20chimpanzee%20Uganda%20in%20Africa.webp?alt=media&token=5d009a2b-563d-4dbb-b7fb-8f70784554de",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2FAfrican%20Bush%20Elephant%20-%20Loxodonta%20africana%2C%20iconic%20member%20of%20African%20big%20five%2C%20Queen%20Elizabeth%20National%20Park.webp?alt=media&token=3b4c82c9-b383-4bbc-94c1-85438ff412b5",
                "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg",
                "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg"
              ];
              
              const dayAlts = [
                "נחיתה באנטבה והגעה לבוסיקה, אוגנדה",
                "פעילויות הרפתקה ב-Extreme Adventure Park, אוגנדה",
                "קרנף לבן דרומי בשמורת זיווה, אוגנדה",
                "אריה בפארק הלאומי מורצ'יסון, אוגנדה", 
                "תצפית על מפלי מורצ'יסון, אוגנדה",
                "פורט פורטל בצל הרי הירח, אוגנדה",
                "שימפנזה בפארק הלאומי קיבאלה, אוגנדה",
                "היפופוטמים בקאזינגה צ'אנל, אוגנדה",
                "זברות באגם מבורו, אוגנדה",
                "טיול טבע מודרך באגם מבורו, אוגנדה"
              ];
              
              return (
                <div key={day.day} className="relative">
                  {/* Timeline Bullet */}
                  <div className="absolute right-0 top-8 w-12 h-12 bg-[#d4af37] bg-opacity-90 rounded-full flex items-center justify-center hidden lg:flex z-10" style={{ transform: 'translateX(50%)' }}>
                    <span className="text-sm font-bold text-white">יום {day.day}</span>
                  </div>
                  
                  <div className="bg-white border border-[#534B20]/60 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-[500px] flex flex-col">
                  <h3 className="text-2xl font-bold text-[#4B361C] mb-4 border-b border-[#C9A34E] pb-2">
                    {day.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch flex-1">
                    <div className="order-1 lg:order-1 flex flex-col">
                      <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Poppins' }}>
                        {day.description}
                      </p>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <h4 className="font-bold text-gray-800 mb-2">מידע טכני:</h4>
                        <ul className="text-gray-700 space-y-1">
                          {day.details.accommodation && (
                            <li><strong>לינה:</strong> {day.details.accommodation}</li>
                          )}
                          {day.details.meals && (
                            <li><strong>כלכלה:</strong> {day.details.meals}</li>
                          )}
                          {day.details.travel && (
                            <li><strong>נסיעה:</strong> {day.details.travel}</li>
                          )}
                          {day.details.activities && (
                            <li><strong>פעילויות:</strong> {day.details.activities}</li>
                          )}
                          {day.details.timing && (
                            <li><strong>זמני יציאה:</strong> {day.details.timing}</li>
                          )}
                          {day.details.important && (
                            <li><strong>חשוב:</strong> {day.details.important}</li>
                          )}
                          {day.details.ending && (
                            <li><strong>סיום:</strong> {day.details.ending}</li>
                          )}
                        </ul>
                      </div>
                      
                      {day.links && day.links.length > 0 && (
                        <div className="text-right mt-auto">
                          {day.links.map((link, linkIndex) => (
                            <div key={linkIndex} className="mb-2">
                              <Link 
                                to={link.url} 
                                className="text-[#C9A34E] hover:text-[#B8941F] font-medium"
                              >
                                {link.text}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="order-2 lg:order-2 flex flex-col">
                      <img 
                        src={dayImages[index]} 
                        alt={dayAlts[index]}
                        className="w-full h-96 object-cover rounded-xl shadow-md mb-5"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuaXoOaVsOa1i+W6l+WbveWGheWQjeWtlzwvdGV4dD4KPC9zdmc+';
                        }}
                      />
                    </div>
                  </div>
                </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-14 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 font-sans border-b border-[#C9A34E] pb-2">
              מידע כלכלי
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* מה כלול במחיר */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 h-96 flex flex-col" dir="rtl">
                <h3 className="text-lg font-bold text-[#C29857] mb-2 border-b-2 border-[#C29857] pb-2 text-right">מה כלול במחיר</h3>
                <ul className="space-y-3 text-gray-700 text-right">
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="flex-1">הסעה קרקעית ברכב ספארי 4x4 עם נהג/מדריך דובר אנגלית</span>
                  </li>
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="flex-1">היתר טרקינג שימפנזים לאדם</span>
                  </li>
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="flex-1">דמי כניסה לפארקים ומיסים</span>
                  </li>
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="flex-1">כל הפעילויות המוזכרות ישירות במסלול</span>
                  </li>
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="flex-1">לינה בחדר זוגי במתקנים המפורטים</span>
                  </li>
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="flex-1">ארוחות כמפורט במסלול</span>
                  </li>
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="flex-1">דלק לספארי</span>
                  </li>
                </ul>
              </div>
              
              {/* מה לא כלול במחיר */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 h-96 flex flex-col" dir="rtl">
                <h3 className="text-lg font-bold text-[#C29857] mb-2 border-b-2 border-[#C29857] pb-2 text-right">מה לא כלול במחיר</h3>
                <ul className="space-y-3 text-gray-700 text-right">
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="flex-1">כרטיסי טיסה</span>
                  </li>
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="flex-1">ביטוח תיירים</span>
                  </li>
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="flex-1">ויזת כניסה למדינה</span>
                  </li>
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="flex-1">משקאות וטיפים</span>
                  </li>
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="flex-1">כל מה שלא מוזכר במסלול</span>
                  </li>
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="flex-1">ארוחות בימים ספציפיים במסלול</span>
                  </li>
                  <li className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="flex-1">פעילויות אופציונליות</span>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-12 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 font-sans">
              איך תרצו לחוות את המסלול?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            <div className="bg-[#faf9f7] shadow-sm border border-gray-200 rounded-2xl p-6 h-64 flex flex-col">
              <h3 className="text-lg font-bold text-right text-[#C29857] mb-2 border-b-2 border-[#C29857] pb-2">המסלול המלא (מומלץ)</h3>
              <p className="text-base font-medium text-gray-700 text-right leading-relaxed mb-4">"הכל מאורגן ומוכן - רק באים ונהנים"</p>
              <ul className="text-sm text-gray-600 text-right space-y-1">
                <li>• כל מה שמפורט למעלה</li>
                <li>• מדריך צמוד דובר עברית</li>
                <li>• תיאום מלא מרגע הנחיתה</li>
              </ul>
            </div>
            
            <div className="bg-[#faf9f7] shadow-sm border border-gray-200 rounded-2xl p-6 h-64 flex flex-col">
              <h3 className="text-lg font-bold text-right text-[#C29857] mb-2 border-b-2 border-[#C29857] pb-2">רק רכב + נהג מקצועי</h3>
              <p className="text-base font-medium text-gray-700 text-right leading-relaxed mb-4">"אתם מעדיפים חופש? אנחנו דואגים לתחבורה"</p>
              <ul className="text-sm text-gray-600 text-right space-y-1">
                <li>• רכב 4X4 עם נהג מקצועי דובר אנגלית</li>
                <li>• תאמנו לכם לינה והיתרים</li>
                <li>• אתם קובעים את הקצב</li>
              </ul>
            </div>
            
            <div className="bg-[#faf9f7] shadow-sm border border-gray-200 rounded-2xl p-6 h-64 flex flex-col">
              <h3 className="text-lg font-bold text-right text-[#C29857] mb-2 border-b-2 border-[#C29857] pb-2">רק טיסות פנימיות מהירות</h3>
              <p className="text-base font-medium text-gray-700 text-right leading-relaxed mb-4">"מקסימום זמן במקומות, מינימום נסיעות"</p>
              <ul className="text-sm text-gray-600 text-right space-y-1">
                <li>• טיסה אנטבה ↔ מורצ'יסון (חוסכת 4 שעות)</li>
                <li>• טיסה פנימית למסלול קיבאלה</li>
                <li>• יותר זמן לחוויות, פחות זמן ברכב</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 md:py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-[#C29857] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-[#C29857] pb-2 text-right">הערות חשובות</h2>
              <p className="text-gray-800 leading-relaxed text-right">
                סדר הימים, הלינות והפעילויות עשויים להשתנות בהתאם לזמינות, מזג אוויר ותנאי שטח. 
                תמיד יינתן פתרון חלופי ברמה דומה או גבוהה.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-14 bg-green-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            מוכנים לצאת למסע של חיים?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            זמינים 24/7 בוואטסאפ | שירות בעברית | ליווי מרגע ההזמנה ועד החזרה
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/972501234567?text=שלום! אני מעוניין במסלול 10 ימים הרפתקה מלאה באוגנדה. תוכלו להתקשר אליי?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              שלחו הודעה לתיאום המסלול
            </a>
            <Link 
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              צור קשר לפרטים נוספים
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Tour10Days;