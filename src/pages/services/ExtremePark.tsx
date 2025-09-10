// src/pages/services/ExtremePark.tsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Car, Users, Calendar, Shield, Clock, ArrowLeft } from "lucide-react";

const ExtremePark: React.FC = () => {
  return (
    <div className="py-8 fade-in" dir="rtl">
      <div className="container mx-auto px-4">
        {/* כותרת ראשית */}
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/images/extreme-adventure-park-logo.webp" 
              alt="Extreme Adventure Park Logo" 
              className="h-20 w-auto"
            />
          </div>
          <h1 className="mb-4 text-4xl md:text-5xl font-bold font-sans text-[#4B361C]">
            Extreme Adventure Park – חוויות אקסטרים באוגנדה
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted font-sans">
            פארק האקסטרים הגדול ביותר באוגנדה - חוויות מלאות אדרנלין לצד נוף ירוק
          </p>
        </div>

        {/* מיקום */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#4B361C] mb-6 border-b-2 border-[#CAA131] w-fit">
              מיקום
            </h2>
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
              <MapPin className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[#4B361C] mb-2">Busika, כ־40 דקות נסיעה מצפון לקמפלה</h3>
                <p className="text-[#4B361C] text-sm">
                  נגיש ברכב פרטי או בהסעה מאורגנת
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* תיאור כללי */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#4B361C] mb-6 border-b-2 border-[#CAA131] w-fit">
              תיאור כללי
            </h2>
            <div className="prose prose-lg max-w-none text-[#4B361C] leading-relaxed">
              <p className="mb-4">
                Extreme Adventure Park הוא פארק האקסטרים הגדול ביותר באוגנדה, ומשלב פעילויות שטח, אתגר, גיבוש ולינה.
              </p>
              <p className="mb-4">
                הפארק מושך אליו משפחות, קבוצות, בתי ספר, חברות ויחידים שמחפשים חוויות מלאות אדרנלין לצד נוף ירוק.
              </p>
              <p className="mb-4">
                זהו מקום המפגיש בין אקשן ופעילות ספורטיבית לבין טבע ונופש, ומתאים לכל מי שרוצה לשבור את השגרה.
              </p>
            </div>
          </div>
        </div>

        {/* פעילויות מרכזיות */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#4B361C] mb-6 border-b-2 border-[#CAA131] w-fit">
              פעילויות מרכזיות
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Car className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">Go-Karting</h3>
                  <p className="text-[#4B361C] text-sm">
                    מסלולי מירוצים מקצועיים
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Car className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">Quad Bikes & Dirt Bikes</h3>
                  <p className="text-[#4B361C] text-sm">
                    רכיבה אתגרית בשטח
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Shield className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">Zipline & High Ropes</h3>
                  <p className="text-[#4B361C] text-sm">
                    מסלולי אומגות ואתגרי גובה
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Users className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">Paintball & Target Shooting</h3>
                  <p className="text-[#4B361C] text-sm">
                    פעילות קבוצתית ותחרותית
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Shield className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">Archery & Bungee Trampoline</h3>
                  <p className="text-[#4B361C] text-sm">
                    אתגר לכל גיל
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Car className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">Virtual Car Racing & Swimming</h3>
                  <p className="text-[#4B361C] text-sm">
                    פעילויות נוספות למשפחות
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Shield className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">Skydiving</h3>
                  <p className="text-[#4B361C] text-sm">
                    חווית אקסטרים ייחודית (עפ״י זמינות)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* לינה ואירועים */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#4B361C] mb-6 border-b-2 border-[#CAA131] w-fit">
              לינה ואירועים
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <h3 className="font-bold text-[#4B361C] mb-3">לינה באתר</h3>
                <p className="text-[#4B361C]">קוטג'ים, חדרים זוגיים/משפחתיים, קמפינג</p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <h3 className="font-bold text-[#4B361C] mb-3">מתאים גם לאירועים גדולים</h3>
                <ul className="space-y-2 text-[#4B361C]">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#CAA131] rounded-full"></span>
                    Team Building לחברות
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#CAA131] rounded-full"></span>
                    ימי הולדת
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#CAA131] rounded-full"></span>
                    חתונות, כנסים וסדנאות
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* חשוב לדעת */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-[#CAA131]/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-bold text-[#4B361C] mb-4 border-b border-[#CAA131] pb-2 w-fit text-right">
              חשוב לדעת
            </h2>
            <div className="space-y-3 text-right">
              <ul className="text-sm text-[#4B361C] space-y-2 text-right list-none">
                <li className="relative pr-4 before:content-[''] before:absolute before:right-0 before:top-2 before:w-2 before:h-2 before:bg-[#CAA131] before:rounded-full">מתאים לכל המשפחה, אך חלק מהפעילויות מוגבלות לגיל <span className="text-[#CAA131] font-semibold">12+</span></li>
                <li className="relative pr-4 before:content-[''] before:absolute before:right-0 before:top-2 before:w-2 before:h-2 before:bg-[#CAA131] before:rounded-full">פתוח כל ימות השבוע</li>
                <li className="relative pr-4 before:content-[''] before:absolute before:right-0 before:top-2 before:w-2 before:h-2 before:bg-[#CAA131] before:rounded-full">חובה נעליים סגורות לפעילויות שטח</li>
                <li className="relative pr-4 before:content-[''] before:absolute before:right-0 before:top-2 before:w-2 before:h-2 before:bg-[#CAA131] before:rounded-full">בכל פעילות ישנה הדרכה מוסמכת ועמידה בתקני בטיחות</li>
              </ul>
            </div>
          </div>
        </div>

        {/* גלריה */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#4B361C] mb-6 border-b-2 border-[#CAA131] w-fit">
              גלריה
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg"
                  alt="מירוץ Go-Kart במסלול מהיר"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">מירוץ Go-Kart במסלול מהיר</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg"
                  alt="Zipline מעל שטח ירוק"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Zipline מעל שטח ירוק</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/534188/pexels-photo-534188.jpeg"
                  alt="קבוצה בפעילות Paintball"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">קבוצה בפעילות Paintball</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg"
                  alt="לינה בקוטג'ים או בקמפינג בלילה"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">לינה בקוטג'ים או בקמפינג בלילה</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* קריאה לפעולה */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-[#CAA131] to-[#B8942A] rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">הזמן חוויה עכשיו</h2>
            <p className="text-lg mb-6 opacity-90">
              האקסטרים האמיתי של אוגנדה מחכה לכם – יום של ריגושים בבוסיקה
            </p>
            <button className="bg-white text-[#4B361C] px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              הזמן חוויה עכשיו
            </button>
          </div>
        </div>

        {/* קישור ל-BAR SOS */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-2xl p-6 text-center border border-[#CAA131]/30">
            <p className="text-[#4B361C] mb-4 font-medium">
              <strong>איתור וחילוץ רפואי 24/7:</strong> חוויה בטוחה עם 
              <Link to="/services/bar-sos" className="text-[#CAA131] hover:underline mx-1">
                BAR SOS
              </Link>
              - שירותי חילוץ רפואי בכל רחבי אוגנדה
            </p>
          </div>
        </div>

        {/* כפתור חזרה */}
        <div className="text-center">
          <Link to="/" className="btn-secondary">
            ← חזרה לעמוד הבית
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExtremePark;
