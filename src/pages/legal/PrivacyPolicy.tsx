// src/pages/legal/PrivacyPolicy.tsx

import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('he-IL');
  
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">מדיניות פרטיות</h1>
          </div>
          <p className="text-gray-600">עדכון אחרון: {currentDate}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. מבוא</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              ברוכים הבאים לאתר Discover Africa ("האתר", "אנחנו", "שלנו"). 
              אנו מחויבים להגן על פרטיותך ולספק לך שקיפות מלאה לגבי האופן שבו אנו אוספים, 
              משתמשים ומגנים על המידע האישי שלך.
            </p>
            <p className="text-gray-700 leading-relaxed">
              מדיניות פרטיות זו חלה על כל המידע שנאסף דרך האתר שלנו, 
              וכן בתקשורת הקשורה לשירותים שלנו.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. המידע שאנו אוספים</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 מידע שאתה מספק לנו:</h3>
              <ul className="list-disc pr-6 space-y-2 text-gray-700">
                <li><strong>פרטי יצירת קשר:</strong> שם מלא, כתובת דוא"ל, מספר טלפון</li>
                <li><strong>פרטי נסיעה:</strong> תאריכי טיול מבוקשים, מספר נוסעים, העדפות מיוחדות</li>
                <li><strong>מידע רפואי:</strong> מגבלות רפואיות רלוונטיות לטיול (באופן וולונטרי)</li>
                <li><strong>פרטי תשלום:</strong> מעובדים באופן מאובטח דרך ספקי תשלום מוסמכים</li>
                <li><strong>תקשורת:</strong> הודעות ושאלות שאתה שולח אלינו</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 מידע שנאסף אוטומטית:</h3>
              <ul className="list-disc pr-6 space-y-2 text-gray-700">
                <li>כתובת IP ומיקום גיאוגרפי כללי</li>
                <li>סוג הדפדפן ומערכת ההפעלה</li>
                <li>דפים שביקרת באתר וזמן השהייה</li>
                <li>האתר ממנו הגעת אלינו</li>
                <li>מידע על המכשיר (מחשב/טלפון)</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. כיצד אנו משתמשים במידע</h2>
            <ul className="list-disc pr-6 space-y-2 text-gray-700">
              <li>עיבוד והזמנות וסידורי נסיעה לאוגנדה</li>
              <li>יצירת קשר איתך לגבי השירותים שביקשת</li>
              <li>שליחת אישורי הזמנה ומסמכי נסיעה</li>
              <li>מתן שירות לקוחות ותמיכה</li>
              <li>שיפור האתר והשירותים שלנו</li>
              <li>שליחת עדכונים ומבצעים (רק באישורך המפורש)</li>
              <li>עמידה בדרישות החוק והרגולציה</li>
              <li>מניעת הונאות ופעילות בלתי חוקית</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. שיתוף מידע עם צדדים שלישיים</h2>
            <p className="text-gray-700 mb-3">
              <strong>אנו לעולם לא נמכור או נשכיר את המידע האישי שלך.</strong>
            </p>
            <p className="text-gray-700 mb-3">נשתף מידע רק במקרים הבאים:</p>
            <ul className="list-disc pr-6 space-y-2 text-gray-700">
              <li><strong>ספקי שירות:</strong> מלונות, פארקים לאומיים, וחברות תעופה לצורך ביצוע ההזמנה</li>
              <li><strong>עיבוד תשלומים:</strong> חברות כרטיסי אשראי ומעבדי תשלומים מאובטחים</li>
              <li><strong>דרישות חוק:</strong> כנדרש על פי צו בית משפט או דרישה חוקית</li>
              <li><strong>הגנה על זכויות:</strong> להגנה על הזכויות, הרכוש או הבטיחות שלנו או של אחרים</li>
              <li><strong>הסכמתך:</strong> במקרים אחרים, רק באישורך המפורש</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. אבטחת מידע</h2>
            <p className="text-gray-700 mb-3">
              אנו מיישמים אמצעי אבטחה מתקדמים להגנה על המידע שלך:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-gray-700">
              <li>הצפנת SSL בכל העברות המידע</li>
              <li>אחסון מאובטח בשרתים מוגנים</li>
              <li>הגבלת גישה למידע רק לעובדים הזקוקים לו</li>
              <li>בדיקות אבטחה תקופתיות</li>
              <li>עמידה בתקני PCI DSS לתשלומים</li>
            </ul>
            <p className="text-gray-700 mt-3">
              עם זאת, אף שיטה של העברת מידע באינטרנט אינה מאובטחת ב-100%, 
              ואנו לא יכולים להבטיח אבטחה מוחלטת.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. קוקיז (Cookies)</h2>
            <p className="text-gray-700 mb-3">האתר משתמש בקוקיז למטרות הבאות:</p>
            <ul className="list-disc pr-6 space-y-2 text-gray-700">
              <li><strong>קוקיז הכרחיים:</strong> לתפקוד בסיסי של האתר</li>
              <li><strong>קוקיז ביצועים:</strong> לניתוח השימוש באתר ושיפורו</li>
              <li><strong>קוקיז שיווק:</strong> להצגת תוכן רלוונטי (רק באישורך)</li>
            </ul>
            <p className="text-gray-700 mt-3">
              ניתן לנהל את העדפות הקוקיז דרך הגדרות הדפדפן שלך או דרך באנר הקוקיז באתר.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. הזכויות שלך</h2>
            <p className="text-gray-700 mb-3">על פי חוק הגנת הפרטיות, יש לך את הזכויות הבאות:</p>
            <div className="bg-blue-50 border-r-4 border-primary p-4 rounded">
              <ul className="list-disc pr-6 space-y-2 text-gray-700">
                <li><strong>זכות עיון:</strong> לראות איזה מידע יש לנו עליך</li>
                <li><strong>זכות תיקון:</strong> לבקש תיקון מידע שגוי או לא מעודכן</li>
                <li><strong>זכות מחיקה:</strong> לבקש מחיקת המידע שלך (בכפוף לחוק)</li>
                <li><strong>זכות הגבלה:</strong> להגביל את השימוש במידע שלך</li>
                <li><strong>זכות התנגדות:</strong> להתנגד לשימושים מסוימים במידע</li>
                <li><strong>זכות ניידות:</strong> לקבל את המידע שלך בפורמט דיגיטלי</li>
              </ul>
            </div>
            <p className="text-gray-700 mt-3">
              למימוש זכויותיך, אנא פנה אלינו בפרטי הקשר המופיעים למטה.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. שמירת מידע</h2>
            <p className="text-gray-700">
              אנו שומרים את המידע האישי שלך רק כל עוד נדרש למטרות שלשמן נאסף, 
              או כנדרש על פי חוק. בדרך כלל:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-gray-700 mt-3">
              <li>מידע הזמנות: 7 שנים (לצרכי מס)</li>
              <li>תקשורת שיווקית: עד לביטול ההרשמה</li>
              <li>קוקיז: עד 12 חודשים</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. קישורים לאתרים חיצוניים</h2>
            <p className="text-gray-700">
              האתר עשוי להכיל קישורים לאתרים של צדדים שלישיים. 
              איננו אחראים למדיניות הפרטיות או לתוכן של אתרים אלה. 
              אנו ממליצים לקרוא את מדיניות הפרטיות של כל אתר שאתה מבקר.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. ילדים</h2>
            <p className="text-gray-700">
              האתר אינו מיועד לילדים מתחת לגיל 18. 
              איננו אוספים ביודעין מידע אישי מילדים מתחת לגיל זה. 
              אם גילינו שאספנו מידע מילד מתחת לגיל 18, נמחק אותו מיידית.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. שינויים במדיניות</h2>
            <p className="text-gray-700">
              אנו עשויים לעדכן את מדיניות הפרטיות מעת לעת. 
              נודיע לך על שינויים מהותיים באמצעות דוא"ל או הודעה באתר. 
              המשך השימוש באתר לאחר השינויים מהווה הסכמה למדיניות המעודכנת.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. צור קשר</h2>
            <p className="text-gray-700 mb-4">לשאלות או בקשות בנושא פרטיות:</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@uganda-adventures.co.il</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+972-50-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>רחוב הרצל 123, תל אביב</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;