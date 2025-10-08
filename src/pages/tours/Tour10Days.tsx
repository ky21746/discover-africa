import React from "react";
import { Link } from "react-router-dom";

const Tour10Days: React.FC = () => {
  const itinerary = [
    {
      day: 1,
      title: "נחיתה באנטבה",
      description: "נחיתה באנטבה ופגישה עם המדריך המקומי. העברה למלון בעיר להתארגנות ומנוחה ראשונה. אם הזמן מאפשר, טיול קצר בסביבות האגם או בשווקים המקומיים. יום רגוע שמכין אתכם להרפתקה הגדולה.",
      details: {
        accommodation: "Lake Victoria Hotel (או דומה)",
        meals: "ארוחת ערב",
        travel: "–",
        activities: "מנוחה, טיול קצר בעיר"
      },
      links: [
        { text: "Extreme Adventure Park - המדריך המלא", url: "/services/extreme-park" }
      ]
    },
    {
      day: 2,
      title: "שמורת הקרנפים ופארק מורצ'יסון",
      description: "לאחר ארוחת בוקר מוקדמת, נצא צפונה דרך שמורת הקרנפים זיווה – המקום היחיד באוגנדה בו ניתן לפגוש קרנפים לבנים בטיול רגלי מודרך. נמשיך צפונה עם עצירה לארוחת צהריים ב־Kabalega Dinners, ולאחריה נגיע לפארק הלאומי מורצ'יסון.",
      details: {
        accommodation: "Paraa Safari Lodge (או דומה)",
        meals: "פנסיון מלא",
        travel: "כ־5 שעות עם עצירות",
        activities: "טיול רגלי עם קרנפים, נסיעה לפארק"
      },
      links: [
        { text: "פארק מורצ'יסון - כל מה שצריך לדעת", url: "/attraction/murchison-falls" }
      ]
    },
    {
      day: 3,
      title: "ספארי במורצ'יסון",
      description: "יום ספארי מלא בפארק מורצ'יסון. בבוקר מוקדם יוצאים עם רכב 4x4 לחפש אריות, פילים, ג'ירפות ובאפלו בעמקי הסוואנה. אחר הצהריים שייט על הנילוס עד בסיס המפלים, עם מפגש בהיפופוטמים, תנינים ומאות עופות מים.",
      details: {
        accommodation: "Paraa Safari Lodge (או דומה)",
        meals: "פנסיון מלא",
        travel: "–",
        activities: "ספארי בוקר, שייט על הנילוס"
      },
      links: []
    },
    {
      day: 4,
      title: "תצפית על המפלים ומעבר לקיבאלה",
      description: "בבוקר נבקר ב־Top of the Falls ונחזה בעוצמת המים מלמעלה. נמשיך דרומה דרך פורט פורטל, אחת הערים היפות באוגנדה. אחר הצהריים טיול רגלי בביצות ביגודי – מקום עשיר בציפורים וקופים, כולל קולובוס ושימפנזים מזדמנים.",
      details: {
        accommodation: "Kibale Forest Lodge (או דומה)",
        meals: "פנסיון מלא",
        travel: "כ־6 שעות עם עצירות",
        activities: "תצפית על המפלים, טיול בביצות ביגודי"
      },
      links: []
    },
    {
      day: 5,
      title: "שימפנזים בקיבאלה",
      description: "בוקר מוקדם לטרק מודרך אחר שימפנזים בלב יער קיבאלה. במהלך היום נעקוב אחרי קבוצה של שימפנזים בסביבתם הטבעית ונלמד על אורח חייהם. אחה״צ אפשרות לסיור בכפרים סמוכים או מנוחה בלודג'.",
      details: {
        accommodation: "Kibale Forest Lodge (או דומה)",
        meals: "פנסיון מלא",
        travel: "–",
        activities: "טרק שימפנזים, סיור כפרי"
      },
      links: [
        { text: "שימפנזים בקיבאלה - המדריך המלא", url: "/attraction/chimps-kibale" }
      ]
    },
    {
      day: 6,
      title: "פארק המלכה אליזבת",
      description: "לאחר ארוחת הבוקר, נסיעה דרומה לפארק המלכה אליזבת – ביתם של עשרות יונקים ולמעלה מ־600 מיני ציפורים. אחר הצהריים ספארי ראשון בעמק קזינגה הפורה.",
      details: {
        accommodation: "Mweya Safari Lodge (או דומה)",
        meals: "פנסיון מלא",
        travel: "כ־3 שעות",
        activities: "ספארי אחר הצהריים"
      },
      links: []
    },
    {
      day: 7,
      title: "ספארי ושייט בקזינגה",
      description: "יום גדוש חוויות. בבוקר ספארי בעמק אישאשה בחיפוש אחר אריות מטפסי עצים ייחודיים. בצהריים שייט בתעלת קזינגה – מהאזורים הצפופים בעולם בהיפופוטמים ותנינים.",
      details: {
        accommodation: "Mweya Safari Lodge (או דומה)",
        meals: "פנסיון מלא",
        travel: "–",
        activities: "ספארי בוקר, שייט בתעלת קזינגה"
      },
      links: []
    },
    {
      day: 8,
      title: "נסיעה לבווינדי",
      description: "לאחר ארוחת הבוקר, נצא בנסיעה דרומה דרך כפרי קיסורו עד לפארק בווינדי – אחד היערות הצפופים בעולם וביתם של גורילות ההרים. אחר הצהריים מנוחה בלודג' והכנה ליום המיוחד מחר.",
      details: {
        accommodation: "Buhoma Lodge (או דומה)",
        meals: "פנסיון מלא",
        travel: "כ־5–6 שעות",
        activities: "נסיעה, התארגנות בבווינדי"
      },
      links: []
    },
    {
      day: 9,
      title: "טרק גורילות בווינדי",
      description: "בוקר מרגש: יציאה לטרק גורילות ההרים. בהדרכת ריינג'רים מקומיים נלך בשבילי היער עד למציאת משפחת גורילות. שעה אחת של קרבה נדירה ומרגשת. אחר הצהריים חזרה ללודג' למנוחה.",
      details: {
        accommodation: "Buhoma Lodge (או דומה)",
        meals: "פנסיון מלא",
        travel: "–",
        activities: "טרק גורילות"
      },
      links: [
        { text: "גורילות בווינדי - המדריך המלא", url: "/attraction/gorillas-bwindi" }
      ]
    },
    {
      day: 10,
      title: "חזרה לאנטבה",
      description: "לאחר ארוחת בוקר נתחיל בנסיעה חזרה לאנטבה. עצירות בדרך בכפרים מקומיים ובשווקים, זמן לקניית מזכרות. בערב העברה לשדה התעופה לטיסת חזור.",
      details: {
        accommodation: "–",
        meals: "ארוחת בוקר",
        travel: "כ־7–8 שעות",
        activities: "נסיעה חזרה, עצירות בדרך"
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
          alt="מסלול 10 ימים ספארי טבע באוגנדה"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 20%' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="container mx-auto max-w-screen-xl">
            <h1 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
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
                <div className="text-lg font-bold text-white">בינוני עד קשה</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">מתאים ל</div>
                <div className="text-lg font-bold text-white">משפחות, זוגות</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">גורילות</div>
                <div className="text-lg font-bold text-white">כלול במחיר</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              סקירה כללית
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              המסלול המקיף ביותר שלנו – עשרה ימים מלאים בחוויות בלתי נשכחות בין חיות הבר, הפארקים הלאומיים והנופים הפראיים של אוגנדה. מתאים למי שרוצה לחוות את כל מה שאוגנדה מציעה במסלול אחד מקיף.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#534B20]/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 h-48 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-right">
                מסלול מקיף ל-10 ימים
              </h3>
              <div className="w-12 h-0.5 bg-[#d4af37] mb-4"></div>
              <p className="text-gray-700 text-right flex-1">
                המסלול המקיף ביותר שלנו – עשרה ימים מלאים בחוויות בלתי נשכחות בין חיות הבר, הפארקים הלאומיים והנופים הפראיים של אוגנדה.
              </p>
            </div>

            <div className="bg-white border border-[#534B20]/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 h-48 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-right">
                מפלי מורצ'יסון
              </h3>
              <div className="w-12 h-0.5 bg-[#d4af37] mb-4"></div>
              <p className="text-gray-700 text-right flex-1">
                פארק לאומי מרהיב עם מפלים עוצמתיים, ספארי עשיר וחיות בר מגוונות כולל אריות, פילים וג'ירפות.
              </p>
            </div>

            <div className="bg-white border border-[#534B20]/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 h-48 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-right">
                קווין אליזבת'
              </h3>
              <div className="w-12 h-0.5 bg-[#d4af37] mb-4"></div>
              <p className="text-gray-700 text-right flex-1">
                פארק לאומי עשיר עם מגוון ביולוגי מדהים, שייט בתעלת קזינגה ופגישה עם אריות מטפסי עצים ייחודיים.
              </p>
            </div>

            <div className="bg-white border border-[#534B20]/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 h-48 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-right">
                אגם מבורו
              </h3>
              <div className="w-12 h-0.5 bg-[#d4af37] mb-4"></div>
              <p className="text-gray-700 text-right flex-1">
                פארק לאומי מיוחד עם אגם יפהפה, מגוון חיות בר וטיולי טבע מודרכים במרחבים פתוחים.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Itinerary Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              מסלול 10 ימים – יום אחרי יום
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute right-0 top-8 bottom-8 w-0.5 bg-[#d4af37] opacity-40 hidden lg:block"></div>
            
            <div className="space-y-12">
            {itinerary.map((day, index) => {
              // Define images for each day using existing site images
              const dayImages = [
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2FBUZ04643.jpg?alt=media&token=55ed0d12-ab8a-46fc-8f8b-0c3cb99c1f93",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2FIMG_1390.jpg?alt=media&token=6164d86d-10d5-44ef-873c-77084134456b", 
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2Fmurchison-falls-hero.webp?alt=media&token=56ccea2c-c574-46a6-ac3a-a0ecc2fbc3a5",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FTourists%20overlook%20the%20massive%20waterfall%20of%20Murchison%20Falls%20on%20the%20Nile%20River%20in%20Uganda.webp?alt=media&token=bc3f5511-234b-4696-85c0-446e67dbea52",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FKibale%20Chimpanzees%2FMother%20and%20baby%20chimpanzees%2C%20pan%20troglodytes%2C%20swinging%20in%20the%20tropical%20rainforest%20of%20Kibale%20National%20Park%2C%20Uganda%2C%20and%20feeding%20from%20the%20fruits%400.5x.webp?alt=media&token=3728b69f-7861-49b6-90f7-63f363d18dbf",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2FElephant%20in%20Queen%20Elizabeth%20Park%2C%20Uganda%2C%20watched%20by%20a%20tourist%20boat%20on%20a%20safari%20cruise.webp?alt=media&token=6b7061b6-b02e-4410-8393-e072ae208a64",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FGorillas%20in%20Bwindi%20Forest%2FGorilla%20family%20with%20silverback%20in%20Bwindi%20Impenetrable%20Forest%2C%20Uganda%2C%20Africa.webp?alt=media&token=6afb4c11-7cfa-4c28-a29e-d41dea9634ac",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FMgahinga%20Gorillas%2FHikers%20on%20a%20gorilla%20trekking%20trail.webp?alt=media&token=6e509194-1bde-4afa-b851-66a367be78f2",
                "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/uganda%2FThree%20girls%20at%20a%20village%20water%20pump%20two%20pumping%20while%20one%20drinks%20directly%20from%20the%20spout.webp?alt=media&token=1282bd1a-529f-49f5-bf62-f83462860e6f"
              ];
              
              const dayAlts = [
                "נחיתה באנטבה והגעה לבוסיקה, אוגנדה",
                "יום הרפתקה ב-Extreme Adventure Park, אוגנדה",
                "ספארי במורצ'יסון, אוגנדה",
                "תצפית על המפלים ומעבר לקיבאלה, אוגנדה",
                "שימפנזים בקיבאלה, אוגנדה",
                "פארק המלכה אליזבת, אוגנדה",
                "ספארי ושייט בקזינגה, אוגנדה",
                "נסיעה לבווינדי, אוגנדה",
                "טרק גורילות בווינדי, אוגנדה",
                "חזרה לאנטבה, אוגנדה"
              ];

              return (
                <div key={day.day} className="relative">
                  {/* Timeline Bullet */}
                  <div className="absolute right-0 top-8 w-12 h-12 bg-[#d4af37] bg-opacity-90 rounded-full flex items-center justify-center hidden lg:flex z-10" style={{ transform: 'translateX(50%)' }}>
                    <span className="text-sm font-bold text-white">יום {day.day}</span>
                  </div>
                  
                  <div className="bg-white border border-[#534B20]/60 rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold text-[#4B361C] mb-3 md:mb-4 border-b border-[#C9A34E] pb-2">
                      {day.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch flex-1">
                      <div className="order-2 lg:order-1 flex flex-col">
                        <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>
                          {day.description}
                        </p>
                        
                        <div className="bg-gray-50 rounded-lg p-3 md:p-4 mb-6">
                          <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">מידע טכני:</h4>
                          <ul className="text-gray-700 space-y-1 text-xs md:text-sm">
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
                          </ul>
                        </div>
                        
                        {day.links && day.links.length > 0 && (
                          <div className="text-right mt-auto">
                            {day.links.map((link, linkIndex) => (
                              <div key={linkIndex} className="mb-2">
                                <Link 
                                  to={link.url} 
                                  className="text-[#C9A34E] hover:text-[#B8941F] font-medium text-sm md:text-base"
                                >
                                  {link.text}
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="order-1 lg:order-2 flex flex-col">
                        <div className="relative aspect-[4/3] md:aspect-[16/9] w-full">
                          <img 
                            src={dayImages[index]} 
                            alt={dayAlts[index]}
                            className="w-full h-full object-cover rounded-xl shadow-md"
                            onError={(e) => {
                              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuaXoOaVsOa1i+W6l+WbveWGheWQjeWtlzwvdGV4dD4KPC9zdmc+';
                            }}
                          />
                        </div>
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

      {/* Economic Information Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              מידע כלכלי
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg h-96">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-right">מה כלול במחיר:</h3>
              <ul className="space-y-3 text-right">
                <li className="flex items-start">
                  <span className="text-green-600 ml-2">✓</span>
                  <span className="text-gray-700 flex-1 text-right">הסעה קרקעית ברכב ספארי 4x4 עם נהג/מדריך דובר אנגלית</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 ml-2">✓</span>
                  <span className="text-gray-700 flex-1 text-right">היתר טרקינג שימפנזים לאדם</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 ml-2">✓</span>
                  <span className="text-gray-700 flex-1 text-right">דמי כניסה לפארקים ומיסים</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 ml-2">✓</span>
                  <span className="text-gray-700 flex-1 text-right">כל הפעילויות המוזכרות ישירות במסלול</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 ml-2">✓</span>
                  <span className="text-gray-700 flex-1 text-right">לינה בחדר זוגי במתקנים המפורטים</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 ml-2">✓</span>
                  <span className="text-gray-700 flex-1 text-right">ארוחות כמפורט במסלול</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 ml-2">✓</span>
                  <span className="text-gray-700 flex-1 text-right">דלק לספארי</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg h-96">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-right">לא כלול במחיר:</h3>
              <ul className="space-y-3 text-right">
                <li className="flex items-start">
                  <span className="text-red-600 ml-2">✗</span>
                  <span className="text-gray-700 flex-1 text-right">כרטיסי טיסה</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 ml-2">✗</span>
                  <span className="text-gray-700 flex-1 text-right">ביטוח תיירים</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 ml-2">✗</span>
                  <span className="text-gray-700 flex-1 text-right">ויזת כניסה למדינה</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 ml-2">✗</span>
                  <span className="text-gray-700 flex-1 text-right">משקאות וטיפים</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 ml-2">✗</span>
                  <span className="text-gray-700 flex-1 text-right">כל מה שלא מוזכר במסלול</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 ml-2">✗</span>
                  <span className="text-gray-700 flex-1 text-right">ארוחות בימים ספציפיים במסלול</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 ml-2">✗</span>
                  <span className="text-gray-700 flex-1 text-right">פעילויות אופציונליות</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              איך תרצו לחוות את המסלול?
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#faf9f7] border border-[#534B20]/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 h-48 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-right">
                הכל מאורגן ומוכן - רק באים ונהנים
              </h3>
              <div className="w-12 h-0.5 bg-[#d4af37] mb-4"></div>
              <p className="text-gray-700 text-right flex-1">
                אנחנו דואגים לכל הפרטים - לינה, תחבורה, מדריכים ופעילויות. אתם רק צריכים להגיע ולהנות מהחוויה.
              </p>
            </div>

            <div className="bg-[#faf9f7] border border-[#534B20]/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 h-48 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-right">
                אתם מעדיפים חופש? אנחנו דואגים לתחבורה
              </h3>
              <div className="w-12 h-0.5 bg-[#d4af37] mb-4"></div>
              <p className="text-gray-700 text-right flex-1">
                רוצים יותר גמישות? אנחנו מספקים רכב עם נהג ומדריך, ואתם בוחרים את הפעילויות והלינה שלכם.
              </p>
            </div>

            <div className="bg-[#faf9f7] border border-[#534B20]/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 h-48 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-right">
                מקסימום זמן במקומות, מינימום נסיעות
              </h3>
              <div className="w-12 h-0.5 bg-[#d4af37] mb-4"></div>
              <p className="text-gray-700 text-right flex-1">
                המסלול מתוכנן כך שתבזבזו פחות זמן בנסיעות ויותר זמן בחוויות ובמפגש עם הטבע.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="bg-white border border-[#d4af37] rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-right">
              <span className="border-b-2 border-[#d4af37] pb-1">חשוב לדעת</span>
            </h3>
            <p className="text-gray-700 leading-relaxed text-right">
              סדר הימים, הלינות והפעילויות עשויים להשתנות בהתאם לזמינות, מזג אוויר ותנאי שטח. תמיד יינתן פתרון חלופי ברמה דומה או גבוהה.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#2d5016] to-[#3d6b1f]">
        <div className="container mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">
            מוכנים להרפתקה?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            בואו נתחיל לתכנן את המסע המושלם שלכם באוגנדה. אנחנו כאן לעזור לכם ליצור חוויות בלתי נשכחות.
          </p>
          <a
            href="https://wa.me/972546152683?text=שלום! אני מעוניין במסלול 10 ימים הרפתקה מלאה באוגנדה. תוכלו להתקשר אליי?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            שלחו הודעה לתיאום מסלול
          </a>
        </div>
      </section>
    </div>
  );
};

export default Tour10Days;