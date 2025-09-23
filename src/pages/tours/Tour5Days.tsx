import React from "react";
import { Link } from "react-router-dom";

const Tour5Days: React.FC = () => {
  const itinerary = [
    {
      day: 1,
      title: "יום ראשון - הגעה לאוגנדה",
      description: "הגעה לשדה התעופה אנטבה, פגישה עם הנציג שלנו שיעביר אתכם למלון בבוסיקה. במהלך היום תהנו מפעילויות הרפתקה במתחם המלון ונכון לקראת החוויה הגדולה שמחכה לכם.",
      details: {
        accommodation: "Extreme Adventure Park",
        meals: "פנסיון מלא",
        activities: "פעילויות הרפתקה במתחם"
      },
      links: [
        { text: "Extreme Adventure Park - המדריך המלא", url: "/services/extreme-park" }
      ]
    },
    {
      day: 2,
      title: "יום שני - נסיעה למורצ'יסון ומפגש עם קרנפים",
      description: "איסוף מהמלון בבוסיקה והתחלת המסע למפלי מורצ'יסון. בדרך נעצור בשמורת קרנפי זיווה, 180 ק\"מ מקמפלה, לחוויה מדהימה של מעקב אחרי קרנפים לבנים דרומיים. לאחר החוויה נמשיך לארוחת צהריים ב-Kabalega Dinners ונמשיך דרך מסינדי לפארק הלאומי מורצ'יסון דרך יער בודונגו. נסיים את היום בשקיעה מרהיבה.",
      details: {
        accommodation: "Paraa Safari Lodge",
        meals: "פנסיון מלא",
        activities: "מעקב אחרי קרנפים בשמורת זיווה",
        travel: "כ-4 שעות עם עצירות"
      },
      links: [
        { text: "קרנפי זיווה - המדריך המלא", url: "/attraction/ziwa-rhinos" },
        { text: "פארק מורצ'יסון - כל מה שצריך לדעת", url: "/category/murchison-falls" }
      ]
    },
    {
      day: 3,
      title: "יום שלישי - Big Five ושייט למפלים",
      description: "לאחר ארוחת בוקר מוקדמת, יציאה לספארי נרחב במסלולי בוליגי. החיות שניתן לפגוש כוללות: ג'ירפות, אנטילופות אוגנדיות, אוריבי, ווטרבק, הרטביסט, סיטטונגה, בושבק, חזירי יער, אריות, נמרים, מונגוזים, גנטים, צבועים, תנים ושועלי אוזניים עטלפים. לאחר ארוחת צהריים - שייט של 3 שעות בנילוס שיעניק לכם הזדמנות לראות את מפלי מורצ'יסון מלמטה. היפופוטמים, תנינים, אנטילופות וציפורי מים ניתן לראות לאורך חופי הנהר. חזרה ללודג' להתרעננות ליד הבריכה וארוחת ערב.",
      details: {
        accommodation: "Paraa Safari Lodge",
        meals: "פנסיון מלא",
        activities: "ספארי בוקר (4 שעות), שייט אחר צהריים (3 שעות)",
        timing: "06:30 לספארי, 14:00 לשייט"
      },
      links: [
        { text: "מפלי מורצ'יסון - המדריך המלא", url: "/attraction/murchison-falls" },
        { text: "Big Five באוגנדה - איפה לראות", url: "/category/safari" }
      ]
    },
    {
      day: 4,
      title: "יום רביעי - דרך לבירת הפריימטים",
      description: "ארוחת בוקר ונסיעה לפורט פורטל. נעצור בראש המפלים לתצפית על המפלים המרהיבים לפני שנמשיך בדרכנו דרומה. נגיע לעיר הצבעונית והיפה פורט פורטל, בירת ממלכת טורו, בצל \"הרי הירח\" המיתולוגיים - הרי רובנזורי. העיר התוססת הזו משמשת כבסיס לפעילויות סביב הפארק הלאומי קיבאלה. הפארק מציע אחד ממקטעי היער הגשום הגזעיים ביותר באוגנדה, עם 70 מיני יונקים ו-13 מיני פריימטים. הנסיעה אורכת 6 שעות. לאחר ארוחת צהריים נצא לטיול בביצות ביגודי המאכלסות למעלה מ-200 מיני ציפורים כולל זיקיות, טוראקו, תוכים, עגורים, שלדגים ועוד רבים אנדמיים לביצות. השמורה היא בית ל-8 מיני פריימטים, כולל קולובוס שחור-לבן, קולובוס אדום, קוף זנב אדום, מנגבי לחיים אפורים, בבון זית, קוף לואסט, קוף ורווט וקוף כחול.",
      details: {
        accommodation: "Tabebuia Resort",
        meals: "פנסיון מלא",
        travel: "כ-6 שעות עם עצירות",
        activities: "טיול ביצות ביגודי (2 שעות)"
      },
      links: [
        { text: "קיבאלה נשנל פארק - בירת הפריימטים", url: "/category/kibale" },
        { text: "ביצות ביגודי - גן עדן הציפורים", url: "/attraction/bigodi-wetlands" }
      ]
    },
    {
      day: 5,
      title: "יום חמישי - מפגש עם קרובי המשפחה שלנו",
      description: "יציאה בוקר לפארק הלאומי קיבאלה, המכונה גם \"בירת הפריימטים בעולם\" לחוויית Chimpanzee Habituation Experience ליום שלם. יחד עם צוות חוקרים, תעקבו אחרי השימפנזים ביער כשהם ניזונים, משחקים, מתרפאים ועוסקים בפעילויות היומיום שלהם. המדריך יספק הסברים מפורטים לא רק על פריימטים, אלא גם על כל החיות והצמחייה ביער. לאחר חוויית ההרגלה, תחזרו לקמפלה.",
      details: {
        activities: "Chimpanzee Habituation Experience (יום שלם)",
        important: "נדרש כושר בסיסי לטיול ביער",
        ending: "חזרה לקמפלה בערב"
      },
      links: [
        { text: "טרקינג שימפנזים - המדריך המלא", url: "/attraction/chimpanzee-tracking" }
      ]
    }
  ];

  return (
    <div className="fade-in" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white h-[60vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg)"
          }}
        />
        
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-sans">
                מסלול 5 ימים - ספארי טבע קלאסי באוגנדה
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90 font-sans">
                שימפנזים, Big Five ומפלי מורצ'יסון - המסלול המושלם למתחילים
              </p>
              <div className="flex flex-wrap gap-4 text-lg mb-6">
                <span className="bg-primary/20 px-4 py-2 rounded-full font-sans">
                  5 ימים
                </span>
                <span className="bg-primary/20 px-4 py-2 rounded-full font-sans">
                  רמת קושי: בינוני
                </span>
                <span className="bg-primary/20 px-4 py-2 rounded-full font-sans">
                  החל מ-2,495$
                </span>
              </div>
              <div className="mt-6">
                <a 
                  href="https://wa.me/972501234567?text=שלום! אני מעוניין במסלול 5 ימים ספארי טבע באוגנדה. תוכלו להתקשר אליי?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
                >
                  דברו איתנו על המסלול
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center font-sans">סקירה מהירה</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-sans">שימפנזים בקיבאלה</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-sans">Big Five במורצ'יסון</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-sans">מפלי מורצ'יסון מהמים</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-sans">מתאים לטיסות קצרות</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center font-sans">
                המסלול הפופולרי ביותר שלנו - 5 ימים של חוויות בלתי נשכחות בין חיות הבר הפנטסטיות של אוגנדה. 
                מושלם למי שרוצה לטעום מכל העולמות בזמן מוגבל.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">

          {/* Itinerary */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center font-sans">פירוט הימים</h2>
            {itinerary.map((day) => (
              <div key={day.day} className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary font-sans">{day.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6 font-sans">{day.description}</p>
                
                {/* Technical Details */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-bold mb-4 font-sans">מידע טכני:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {day.details.accommodation && (
                      <div>
                        <span className="font-bold font-sans">לינה:</span>
                        <span className="mr-2 font-sans">{day.details.accommodation}</span>
                      </div>
                    )}
                    {day.details.meals && (
                      <div>
                        <span className="font-bold font-sans">כלכלה:</span>
                        <span className="mr-2 font-sans">{day.details.meals}</span>
                      </div>
                    )}
                    {day.details.travel && (
                      <div>
                        <span className="font-bold font-sans">נסיעה:</span>
                        <span className="mr-2 font-sans">{day.details.travel}</span>
                      </div>
                    )}
                    {day.details.activities && (
                      <div>
                        <span className="font-bold font-sans">פעילויות:</span>
                        <span className="mr-2 font-sans">{day.details.activities}</span>
                      </div>
                    )}
                    {day.details.timing && (
                      <div>
                        <span className="font-bold font-sans">זמני יציאה:</span>
                        <span className="mr-2 font-sans">{day.details.timing}</span>
                      </div>
                    )}
                    {day.details.important && (
                      <div className="md:col-span-2">
                        <span className="font-bold font-sans text-red-600">חשוב:</span>
                        <span className="mr-2 font-sans text-red-600">{day.details.important}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Internal Links */}
                {day.links && day.links.length > 0 && (
                  <div className="border-t pt-4">
                    <h4 className="text-lg font-bold mb-3 font-sans">קריאה נוספת:</h4>
                    <div className="flex flex-wrap gap-3">
                      {day.links.map((link, index) => (
                        <Link
                          key={index}
                          to={link.url}
                          className="text-primary hover:text-primary-dark underline font-sans"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-primary text-white rounded-lg p-8 text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 font-sans">מחיר המסלול המלא</h2>
              <div className="text-4xl font-bold mb-2 font-sans">$2,495 לאדם</div>
              <p className="text-lg opacity-90 font-sans">(בזוגות)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-800 font-sans">מה כלול במחיר:</h3>
                <ul className="space-y-2 text-green-700 font-sans">
                  <li>✓ הסעה קרקעית ברכב ספארי 4x4 עם נהג/מדריך דובר אנגלית</li>
                  <li>✓ היתר טרקינג שימפנזים לאדם</li>
                  <li>✓ דמי כניסה לפארקים ומיסים</li>
                  <li>✓ כל הפעילויות המוזכרות ישירות במסלול</li>
                  <li>✓ לינה בחדר זוגי במתקנים המפורטים</li>
                  <li>✓ ארוחות כמפורט במסלול</li>
                  <li>✓ דלק לספארי</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-red-800 font-sans">לא כלול במחיר:</h3>
                <ul className="space-y-2 text-red-700 font-sans">
                  <li>✗ כרטיסי טיסה</li>
                  <li>✗ ביטוח תיירים</li>
                  <li>✗ ויזת כניסה: 100$ ישירות בנמל התעופה אנטבה הבינלאומי</li>
                  <li>✗ משקאות וטיפים</li>
                  <li>✗ כל מה שלא מוזכר ישירות במסלול</li>
                  <li>✗ ארוחות בימים ספציפיים כפי שמצוין במסלול</li>
                  <li>✗ פעילויות אופציונליות</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Options Block */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center font-sans">איך תרצו לחוות את המסלול?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-primary">
                <h3 className="text-xl font-bold mb-4 text-primary font-sans">המסלול המלא (מומלץ)</h3>
                <p className="text-gray-700 mb-4 font-sans">"הכל מאורגן ומוכן - רק באים ונהנים"</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6 font-sans">
                  <li>• כל מה שמפורט למעלה</li>
                  <li>• מדריך צמוד דובר עברית</li>
                  <li>• תיאום מלא מרגע הנחיתה</li>
                </ul>
                <a 
                  href="https://wa.me/972501234567?text=אני רוצה את המסלול המלא 5 ימים"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white py-3 px-4 rounded-lg font-bold text-center block hover:bg-primary-dark transition-colors font-sans"
                >
                  אני רוצה את המסלול המלא
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h3 className="text-xl font-bold mb-4 text-gray-800 font-sans">רק רכב + נהג מקצועי</h3>
                <p className="text-gray-700 mb-4 font-sans">"אתם מעדיפים חופש? אנחנו דואגים לתחבורה בטוחה"</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6 font-sans">
                  <li>• רכב 4X4 עם נהג מקצועי דובר אנגלית</li>
                  <li>• תאמנו לכם לינה והיתרים</li>
                  <li>• אתם קובעים את הקצב</li>
                </ul>
                <a 
                  href="https://wa.me/972501234567?text=רוצה רק רכב ונהג למסלול 5 ימים"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg font-bold text-center block hover:bg-gray-700 transition-colors font-sans"
                >
                  רוצה רק רכב ונהג
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h3 className="text-xl font-bold mb-4 text-gray-800 font-sans">רק טיסות פנימיות מהירות</h3>
                <p className="text-gray-700 mb-4 font-sans">"מקסימום זמן במקומות, מינימום נסיעות"</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6 font-sans">
                  <li>• טיסה אנטבה ↔ מורצ'יסון (חוסכת 4 שעות)</li>
                  <li>• טיסה פנימית למסלול קיבאלה</li>
                  <li>• יותר זמן לחוויות, פחות זמן ברכב</li>
                </ul>
                <a 
                  href="https://wa.me/972501234567?text=מעוניין בטיסות פנימיות למסלול 5 ימים"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg font-bold text-center block hover:bg-gray-700 transition-colors font-sans"
                >
                  מעוניין בטיסות פנימיות
                </a>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-yellow-800 font-sans">הערות חשובות</h3>
              <p className="text-yellow-700 font-sans">
                סדר הימים, בחירת הלינות והפעילויות עשויים להשתנות בהתאם לזמינות בפארקים, מזג אוויר ותנאי שטח. 
                במקרים כאלה נספק תמיד פתרון חלופי ברמה דומה או גבוהה יותר.
              </p>
              <p className="text-yellow-700 mt-2 font-sans">
                כמו כן, פעילות הטרקינג שימפנזים מותנית בהיתרים מוגבלים מהרשות הלאומית - מומלץ מאוד להזמין מראש.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 font-sans">מוכנים לצאת למסע של חיים?</h2>
              <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
                <a 
                  href="https://wa.me/972501234567?text=שלום! אני מעוניין במסלול 5 ימים ספארי טבע באוגנדה. תוכלו להתקשר אליי?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors font-sans"
                >
                  שלחו הודעה לתיאום המסלול
                </a>
                <Link 
                  to="/contact"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors font-sans"
                >
                  צרו איתנו קשר לפרטים נוספים
                </Link>
              </div>
              <p className="text-gray-600 font-sans">
                זמינים 24/7 בוואטסאפ | שירות בעברית | ליווי מרגע ההזמנה ועד החזרה
              </p>
            </div>
          </div>

          {/* Internal Links */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center font-sans">המשיכו לקרוא</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/attraction/chimpanzee-tracking" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-primary font-sans">מדריך מלא לטרקינג שימפנזים באוגנדה</h3>
                <p className="text-gray-600 text-sm font-sans">כל מה שצריך לדעת על חוויית השימפנזים</p>
              </Link>
              <Link to="/category/murchison-falls" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-primary font-sans">כל מה שצריך לדעת על ספארי במורצ'יסון</h3>
                <p className="text-gray-600 text-sm font-sans">המדריך המלא לפארק הלאומי מורצ'יסון</p>
              </Link>
              <Link to="/attraction/murchison-falls" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-primary font-sans">מפלי מורצ'יסון - המדריך הישראלי</h3>
                <p className="text-gray-600 text-sm font-sans">איך להגיע ומה לראות במפלים המדהימים</p>
              </Link>
              <Link to="/blog" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-primary font-sans">מתי הזמן הטוב לטוס לאוגנדה?</h3>
                <p className="text-gray-600 text-sm font-sans">מדריך עונות השנה והזמנים המומלצים</p>
              </Link>
              <Link to="/blog" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-primary font-sans">רשימת ציוד לספארי באוגנדה</h3>
                <p className="text-gray-600 text-sm font-sans">מה לקחת ומה להשאיר בבית</p>
              </Link>
              <Link to="/tours" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-primary font-sans">השוואת מסלולים - 3 ימים vs 5 ימים vs 7 ימים</h3>
                <p className="text-gray-600 text-sm font-sans">איזה מסלול מתאים לכם?</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour5Days;
