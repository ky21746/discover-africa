// src/pages/legal/AccessibilityStatement.tsx

import React from 'react';
import { Accessibility, Check, X, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AccessibilityStatement: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('he-IL');
  
  return (
    <>
      <Helmet>
        <title>הצהרת נגישות - Discover Africa</title>
        <meta name="description" content="הצהרת נגישות של Discover Africa - מחויבות לנגישות דיגיטלית ושוויון הזדמנויות לכל המשתמשים." />
        <meta property="og:title" content="הצהרת נגישות - Discover Africa" />
        <meta property="og:description" content="הצהרת נגישות של Discover Africa - מחויבות לנגישות דיגיטלית ושוויון הזדמנויות." />
        <meta property="og:url" content="https://discoverafrica.co.il/accessibility" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Accessibility className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">הצהרת נגישות</h1>
          </div>
          <p className="text-gray-600">עדכון אחרון: {currentDate}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מחויבות לנגישות</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              ב-Discover Africa אנו מאמינים שהאינטרנט צריך להיות נגיש לכולם. 
              אנו מחויבים להנגיש את האתר שלנו לאנשים עם מוגבלויות ופועלים 
              לשיפור מתמיד של חווית המשתמש לכל המבקרים באתר.
            </p>
            <p className="text-gray-700 leading-relaxed">
              אנו משקיעים משאבים ומאמצים רבים כדי להבטיח שהאתר שלנו יהיה 
              נגיש ושמיש עבור כולם, ללא קשר ליכולותיהם הפיזיות או הקוגניטיביות.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">תקני נגישות</h2>
            <div className="bg-green-50 border-r-4 border-green-500 p-4 rounded-lg">
              <p className="text-gray-700 mb-3">
                האתר עומד בדרישות הבאות:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>תקן ישראלי 5568 לנגישות תכנים באינטרנט ברמה AA</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>הנחיות WCAG 2.1 (Web Content Accessibility Guidelines)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">התאמות נגישות שבוצעו</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">🖥️ נגישות טכנית</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>ניווט מלא באמצעות מקלדת</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>תמיכה בקוראי מסך (NVDA, JAWS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>תגיות ARIA מתאימות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>מבנה כותרות היררכי</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">🎨 נגישות ויזואלית</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>ניגודיות צבעים של 4.5:1 לפחות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>אפשרות הגדלת טקסט עד 200%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>טקסט חלופי לכל התמונות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>גופן קריא ובגודל מתאים</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">📝 תוכן נגיש</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>שפה פשוטה וברורה</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>הוראות ברורות בטפסים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>הודעות שגיאה מפורטות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>תוויות ברורות לכל השדות</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">🎯 פונקציונליות</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>כפתור נגישות צף</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>דילוג לתוכן הראשי</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>אין הגבלת זמן בטפסים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span>אין תוכן מהבהב</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">טכנולוגיות תומכות</h2>
            <p className="text-gray-700 mb-3">האתר נבדק ותומך בטכנולוגיות הבאות:</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">דפדפנים:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Chrome (גרסה 90+)</li>
                  <li>• Firefox (גרסה 88+)</li>
                  <li>• Safari (גרסה 14+)</li>
                  <li>• Edge (גרסה 90+)</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">קוראי מסך:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• NVDA</li>
                  <li>• JAWS</li>
                  <li>• VoiceOver</li>
                  <li>• TalkBack</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מגבלות ידועות</h2>
            <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 mb-3">
                    למרות מאמצינו הרבים, ייתכנו חלקים באתר שאינם נגישים במלואם:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                      <span>מפות אינטראקטיביות של Google Maps (תלוי בצד שלישי)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                      <span>קבצי PDF ישנים (בתהליך המרה)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                      <span>סרטוני וידאו ללא כתוביות (בתהליך הוספה)</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    אנו עובדים על תיקון מגבלות אלה ומתחייבים לשפר את הנגישות באופן מתמיד.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">דרכי יצירת קשר</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">רכז נגישות:</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>דוא"ל:</strong> <a href="mailto:info@discoverafrica.co.il" className="text-[#CAA131] hover:underline">info@discoverafrica.co.il</a></p>
                <p><strong>טלפון:</strong> <a href="tel:+972546152683" className="text-[#CAA131] hover:underline">+972-54-615-2683</a></p>
                <p><strong>זמני מענה:</strong> ימים א'-ה', 9:00-17:00</p>
              </div>
            </div>

            <p className="text-gray-700">
              אם נתקלת בבעיית נגישות, אנא פנה אלינו ונשמח לסייע. 
              נעשה כל מאמץ לתת מענה מהיר ולתקן כל בעיה בהקדם האפשרי.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">הליך תלונות</h2>
            <p className="text-gray-700 mb-3">
              במקרה של אי שביעות רצון מהמענה שקיבלת, ניתן לפנות לנציבות שוויון 
              זכויות לאנשים עם מוגבלות:
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li><strong>אתר:</strong> www.gov.il/mugbaluyot</li>
                <li><strong>דוא"ל:</strong> pniotnez@justice.gov.il</li>
                <li><strong>טלפון:</strong> *6763</li>
                <li><strong>פקס:</strong> 02-6549566</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">שיפורים עתידיים</h2>
            <p className="text-gray-700 mb-3">
              אנו מתחייבים להמשיך ולשפר את נגישות האתר. בחודשים הקרובים מתוכננים:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-gray-700">
              <li>הוספת כתוביות לכל סרטוני הווידאו</li>
              <li>תרגום לשפת הסימנים עבור תוכן מרכזי</li>
              <li>שיפור נגישות המפות האינטראקטיביות</li>
              <li>הוספת אפשרות לקריאה קלה</li>
              <li>בדיקות נגישות רבעוניות</li>
            </ul>
          </section>

          {/* Footer note */}
          <div className="border-t pt-6">
            <p className="text-sm text-gray-600 text-center">
              הצהרת נגישות זו נבדקה לאחרונה ע"י מומחה נגישות מוסמך בתאריך {currentDate}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AccessibilityStatement;