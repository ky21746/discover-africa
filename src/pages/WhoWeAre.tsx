import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, MapPin, Heart, Star, Award } from 'lucide-react';

const WhoWeAre: React.FC = () => {
  return (
    <div className="py-12 fade-in" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-gray-900">
            מי אנחנו
          </h1>
          <p className="text-xl text-gray-600 font-sans">
            שותפים לחלום האפריקאי שלכם
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 font-sans text-gray-900">
              הרבה יותר מטיול – חוויה אמיתית ובטוחה בלב אוגנדה
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-sans leading-relaxed">
              מי שבוחר להגיע לאוגנדה לא מחפש רק ספארי או אתגר פיזי. הוא מחפש הרפתקה שלמה: אותנטית, בטוחה ובעלת משמעות. אנחנו כאן לא רק כמארגני טיולים, אלא כשותפים מקומיים שבנו את ביתם בלב אוגנדה.
            </p>
          </div>

          {/* Our Roots */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="w-8 h-8 text-orange-600" />
              <h2 className="text-2xl font-bold font-sans text-gray-900">
                השורשים שלנו באוגנדה
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6 font-sans leading-relaxed">
              הניסיון שלנו נוגע בכל היבטי החיים במדינה – מתעופה ולוגיסטיקה ועד הפעלת אטרקציות ואירוח. זה מעניק לנו הבנה עמוקה של התרבות המקומית ושל כל פרט קטן שיכול להפוך טיול למושלם:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 font-sans text-gray-900">
                  תעופה ולוגיסטיקה ללא פשרות
                </h3>
                <p className="text-gray-700 font-sans">
                  צי מטוסים ומסוקים מהמתקדמים ביותר מאפשר להגיע לכל נקודה במדינה במהירות ובבטיחות. החל מטיסות פנימיות ועד חילוץ רפואי – אנחנו ערוכים לכל מצב.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 font-sans text-gray-900">
                  מומחיות באטרקציות ואקסטרים
                </h3>
                <p className="text-gray-700 font-sans">
                  מהפעלת פעילויות שטח ועד מתקנים מתקדמים. אנחנו יודעים מה באמת עובד, מה בטוח ומה משאיר חותם לכל החיים.
                </p>
              </div>
            </div>
          </div>

          {/* Why It Matters */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 font-sans text-gray-900">
              למה זה חשוב לכם?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-sans text-gray-900">
                    אמינות אמיתית
                  </h3>
                  <p className="text-gray-700 font-sans">
                    לא מדריך תיירים, אלא רשת קשרים מקומית וניסיון שנצבר לאורך שנים.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-sans text-gray-900">
                    נגישות מלאה
                  </h3>
                  <p className="text-gray-700 font-sans">
                    עם מסוקים ותשתית לוגיסטית ייחודית, אין יעד שהוא רחוק מדי.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-sans text-gray-900">
                    ביטחון מוחלט
                  </h3>
                  <p className="text-gray-700 font-sans">
                    מערך חירום 24/7, מעקב GPS, תקשורת לוויינית ומרכז שליטה מקומי. לא הבטחה – יכולת מוכחת.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-sans text-gray-900">
                    חוויה שלמה
                  </h3>
                  <p className="text-gray-700 font-sans">
                    לא רק להגיע ליעד, אלא לשלב טבע, תרבות, אתגר ורוגע למסע בלתי נשכח.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold font-sans text-gray-900">
                מחויבות לאוגנדה
              </h2>
            </div>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
              אנחנו חלק מהקהילה המקומית. כל טיול איתנו תורם לפיתוח כלכלי, לשימור אתרים טבעיים ולחיזוק הקשרים עם האנשים שחיים כאן.
            </p>
          </div>

          {/* Your Choice */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 font-sans text-gray-900">
              הבחירה שלכם
            </h2>
            <p className="text-lg text-gray-700 mb-8 font-sans leading-relaxed">
              כשאתם בוחרים בנו, אתם מקבלים שותפים אמיתיים – שחיים כאן, מכירים כל שביל, ומסוגלים להיות לצדכם בכל רגע. המטרה שלנו פשוטה: שתשובו הביתה עם חוויה מרגשת, סיפור יוצא דופן – וביטחון מלא.
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400 mb-4">⸻</div>
              <p className="text-xl font-semibold text-gray-900 mb-6 font-sans">
                מוכנים להתחיל? בואו נתכנן יחד את ההרפתקה האוגנדית שלכם.
              </p>
              <div className="space-y-4">
                <Link
                  to="/plan-your-trip"
                  className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg"
                >
                  תכננו את הטיול שלכם
                </Link>
                <div>
                  <Link
                    to="/contact"
                    className="text-orange-600 hover:text-orange-700 font-medium underline"
                  >
                    או צרו קשר ישירות
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;