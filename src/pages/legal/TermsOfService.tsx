// src/pages/legal/TermsOfService.tsx

import React from 'react';
import { FileText, AlertTriangle, Info } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const TermsOfService: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('he-IL');
  
  return (
    <>
      <Helmet>
        <title>תנאי שימוש - Discover Africa</title>
        <meta name="description" content="תנאי שימוש של Discover Africa - כללי השירות, אחריות, ביטולים ותשלומים לטיולים באוגנדה." />
        <meta property="og:title" content="תנאי שימוש - Discover Africa" />
        <meta property="og:description" content="תנאי שימוש של Discover Africa - כללי השירות ואחריות לטיולים באוגנדה." />
        <meta property="og:url" content="https://discoverafrica.co.il/terms" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">תנאי שימוש</h1>
          </div>
          <p className="text-gray-600">עדכון אחרון: {currentDate}</p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-r-4 border-yellow-400 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">חשוב לדעת</h3>
              <p className="text-gray-700">
                קריאת תנאי השימוש והסכמה להם הינם תנאי מקדים לשימוש באתר ובשירותים. 
                אם אינך מסכים לתנאים אלה, אנא הימנע משימוש באתר.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. הגדרות</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <dl className="space-y-2">
                <div className="flex gap-2">
                  <dt className="font-semibold">"האתר":</dt>
                  <dd>אתר האינטרנט Discover Africa</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold">"החברה":</dt>
                  <dd>Discover Africa - אוגנדה אדוונצ'רס בע"מ</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold">"המשתמש":</dt>
                  <dd>כל אדם הגולש באתר או משתמש בשירותיו</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold">"השירותים":</dt>
                  <dd>כל השירותים המוצעים באתר ועל ידי החברה</dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. השירותים שלנו</h2>
            <p className="text-gray-700 mb-3">החברה מספקת שירותי תיירות מקיפים לאוגנדה:</p>
            <ul className="list-disc pr-6 space-y-2 text-gray-700">
              <li>ארגון וליווי טיולים פרטיים וקבוצתיים</li>
              <li>טרקים לצפייה בגורילות ושימפנזים</li>
              <li>ספאריים בפארקים הלאומיים</li>
              <li>הזמנת לינה במלונות ובלודג'ים</li>
              <li>סידורי תחבורה והעברות</li>
              <li>השגת רישיונות ואישורים לפארקים</li>
              <li>שירותי מדריכים מקצועיים</li>
              <li>ייעוץ והכנה לטיול</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. הזמנות ותשלומים</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 תהליך הזמנה:</h3>
              <ul className="list-disc pr-6 space-y-2 text-gray-700">
                <li>כל הזמנה כפופה לזמינות ולאישור החברה</li>
                <li>ההזמנה מחייבת רק לאחר קבלת אישור בכתב מהחברה</li>
                <li>החברה רשאית לדחות הזמנה מכל סיבה שהיא</li>
                <li>המחירים באתר עשויים להשתנות ללא הודעה מוקדמת</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 תשלומים:</h3>
              <ul className="list-disc pr-6 space-y-2 text-gray-700">
                <li>מקדמה של 30% מהעלות הכוללת בעת ההזמנה</li>
                <li>יתרת התשלום עד 45 יום לפני הנסיעה</li>
                <li>תשלום באמצעות כרטיס אשראי או העברה בנקאית</li>
                <li>כל המחירים כוללים מע"מ כחוק</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. מדיניות ביטולים והחזרים</h2>
            
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">דמי ביטול:</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-right pb-2">זמן הביטול</th>
                    <th className="text-right pb-2">דמי ביטול</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2">60+ ימים לפני הנסיעה</td>
                    <td className="py-2 font-semibold">ללא דמי ביטול</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">30-59 ימים לפני</td>
                    <td className="py-2 font-semibold">25% מהעלות</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">14-29 ימים לפני</td>
                    <td className="py-2 font-semibold">50% מהעלות</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">7-13 ימים לפני</td>
                    <td className="py-2 font-semibold">75% מהעלות</td>
                  </tr>
                  <tr>
                    <td className="py-2">פחות מ-7 ימים</td>
                    <td className="py-2 font-semibold text-red-600">100% - אין החזר</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700">
              <strong>הערה:</strong> רישיונות גורילות ושימפנזים אינם ניתנים להחזר בכל מקרה של ביטול.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. אחריות וביטוח</h2>
            
            <div className="bg-orange-50 border-r-4 border-orange-400 p-4 rounded-lg mb-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">דיסקליימר חשוב</h3>
                  <p className="text-gray-700 mb-2">
                    נסיעה לאוגנדה ופעילויות ההרפתקה כרוכות בסיכונים מסוימים. 
                    המשתמש מאשר שהוא מבין ומקבל על עצמו סיכונים אלה.
                  </p>
                  <ul className="list-disc pr-6 space-y-1 text-sm text-gray-700">
                    <li>סיכונים בריאותיים (מלריה, חיסונים נדרשים)</li>
                    <li>סיכונים פיזיים בטרקים ובפעילויות</li>
                    <li>מפגש עם חיות בר</li>
                    <li>תנאי דרך ומזג אוויר משתנים</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-gray-700">
              <p>
                <strong>ביטוח נסיעות:</strong> חובה על כל נוסע להחזיק בביטוח נסיעות מקיף 
                הכולל כיסוי רפואי, ביטול נסיעה, ופעילויות הרפתקה.
              </p>
              <p>
                <strong>הגבלת אחריות:</strong> החברה לא תישא באחריות לנזקים ישירים או עקיפים, 
                למעט כנדרש על פי חוק. האחריות המקסימלית לא תעלה על סכום התשלום ששולם.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. התנהגות ובטיחות</h2>
            <p className="text-gray-700 mb-3">המשתמש מתחייב:</p>
            <ul className="list-disc pr-6 space-y-2 text-gray-700">
              <li>לציית להוראות המדריכים ונציגי החברה</li>
              <li>לנהוג בכבוד כלפי התרבות המקומית</li>
              <li>לשמור על חוקי הפארקים והשמורות</li>
              <li>לא להאכיל או להטריד חיות בר</li>
              <li>לשמור על הסביבה ולא להשליך אשפה</li>
              <li>להגיע בכושר גופני מתאים לפעילויות</li>
              <li>ליידע על מצב רפואי רלוונטי</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. קניין רוחני</h2>
            <p className="text-gray-700 mb-3">
              כל התכנים באתר, כולל אך לא רק:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-gray-700">
              <li>טקסטים, תמונות, וידאו וגרפיקה</li>
              <li>לוגו וסימני מסחר</li>
              <li>עיצוב וממשק האתר</li>
              <li>קוד המקור של האתר</li>
            </ul>
            <p className="text-gray-700 mt-3">
              הם רכוש החברה ומוגנים בזכויות יוצרים. אין להעתיק, לשכפל, או להפיץ 
              ללא אישור מראש ובכתב.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. שינויים ועדכונים</h2>
            <p className="text-gray-700 mb-3">
              החברה רשאית:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-gray-700">
              <li>לשנות את תנאי השימוש בכל עת</li>
              <li>לשנות או להפסיק שירותים המוצעים באתר</li>
              <li>לשנות מחירים ותנאי הזמנה</li>
              <li>לעדכן את מסלולי הטיולים</li>
            </ul>
            <p className="text-gray-700 mt-3">
              השינויים ייכנסו לתוקף עם פרסומם באתר. המשך השימוש מהווה הסכמה לשינויים.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. כוח עליון</h2>
            <p className="text-gray-700">
              החברה לא תישא באחריות לביטול או שינוי בשירותים עקב נסיבות שאינן בשליטתה, כולל:
              מגפות, אסונות טבע, מלחמות, טרור, שביתות, סגירת גבולות, או החלטות ממשלתיות.
              במקרים אלה, החברה תעשה מאמץ להציע חלופות או תאריכים חדשים.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. פרטיות ומידע אישי</h2>
            <p className="text-gray-700">
              השימוש במידע האישי שלך כפוף למדיניות הפרטיות שלנו. 
              אנא קרא את <a href="/privacy" className="text-primary hover:underline">מדיניות הפרטיות</a> שלנו 
              למידע מפורט.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. דין וסמכות שיפוט</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>החוק החל:</strong> תנאי שימוש אלה כפופים לדיני מדינת ישראל בלבד.
              </p>
              <p className="text-gray-700">
                <strong>סמכות שיפוט:</strong> סמכות השיפוט הבלעדית נתונה לבתי המשפט 
                המוסמכים בתל אביב-יפו.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. יצירת קשר</h2>
            <p className="text-gray-700 mb-4">לשאלות ובירורים בנושא תנאי השימוש:</p>
            <div className="space-y-3">
              <p>📧 דוא"ל: info@discoverafrica.co.il</p>
              <p>📱 טלפון: +972-54-615-2683</p>
              <p>⏰ שעות פעילות: ראשון-חמישי 9:00-18:00</p>
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default TermsOfService;