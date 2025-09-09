// src/pages/services/BarSOS.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, MapPin, Users, Clock, Heart } from "lucide-react";

const BarSOS: React.FC = () => {
  return (
    <div className="py-8 fade-in" dir="rtl">
      <div className="container mx-auto px-4">
        {/* כותרת ראשית */}
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/images/BAR-SOS-MAGNUS-logo.webp" 
              alt="BAR SOS Logo" 
              className="h-20 w-auto"
            />
          </div>
          <h1 className="mb-4 text-4xl md:text-5xl font-bold font-sans text-[#4B361C]">
            BAR SOS – שירותי איתור וחילוץ רפואי
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted font-sans">
            זרוע החירום והביטחון של קבוצת BAR - כיסוי מלא 24/7 בכל רחבי אוגנדה
          </p>
        </div>

        {/* תיאור כללי */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#4B361C] mb-6 border-b-2 border-[#CAA131] w-fit">
              תיאור כללי
            </h2>
            <div className="prose prose-lg max-w-none text-[#4B361C] leading-relaxed">
              <p className="mb-4">
                BAR SOS היא זרוע החירום והביטחון של קבוצת BAR, הפועלת מאוגנדה ומעניקה כיסוי מלא למטיילים, חברות וארגונים.
              </p>
              <p className="mb-4">
                החברה מפעילה מרכז שליטה 24/7, צי מסוקים ומטוסים ייעודיים, וצוות רפואי מוסמך המוכן לפעולה בכל רגע.
              </p>
              <p className="mb-4">
                השירות כולל מערכת GPS מתקדמת, תקשורת לוויינית לאזורים ללא קליטה סלולרית, קו חירום זמין, ואפליקציה ייחודית שמאפשרת קריאה מיידית לעזרה בלחיצת כפתור.
              </p>
              <p>
                השילוב בין יכולות אוויריות, נוכחות מקומית והטכנולוגיה המתקדמת הופך את BAR SOS לגורם ההגנה הרפואי והמבצעי המוביל באוגנדה, ומבטיח שקט נפשי לכל מטייל – מהעיר ועד לשמורות המרוחקות ביותר.
              </p>
            </div>
          </div>
        </div>

        {/* שירותים מרכזיים */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#4B361C] mb-6 border-b-2 border-[#CAA131] w-fit">
              שירותים מרכזיים
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Shield className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">חילוץ רפואי אווירי וקרקעי</h3>
                  <p className="text-[#4B361C] text-sm">
                    מסוקים ומטוסים זמינים 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Phone className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">אפליקציית SOS</h3>
                  <p className="text-[#4B361C] text-sm">
                    איתור GPS ולחצן חירום אישי למטיילים
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <MapPin className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">תקשורת לוויינית</h3>
                  <p className="text-[#4B361C] text-sm">
                    חיבור רציף גם באזורים ללא קליטה
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Users className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">ניהול סיכונים וביטחון אישי</h3>
                  <p className="text-[#4B361C] text-sm">
                    מערך שליטה ובקרה בזמן אמת
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Heart className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">תמיכה רפואית</h3>
                  <p className="text-[#4B361C] text-sm">
                    צוות רופאים ואמבולנסים בשטח
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* חשוב לדעת */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#4B361C] mb-6 border-b-2 border-[#CAA131] w-fit">
              חשוב לדעת
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Clock className="w-5 h-5 text-[#CAA131] flex-shrink-0" />
                <p className="text-[#4B361C] font-medium">השירות פעיל בכל רחבי אוגנדה</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Users className="w-5 h-5 text-[#CAA131] flex-shrink-0" />
                <p className="text-[#4B361C] font-medium">הצטרפות באמצעות מנוי חודשי או שנתי</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Shield className="w-5 h-5 text-[#CAA131] flex-shrink-0" />
                <p className="text-[#4B361C] font-medium">לקוחות עסקיים ופרטיים כאחד יכולים להצטרף</p>
              </div>
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
                  src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
                  alt="מסוק חילוץ מוכן להמראה"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">מסוק חילוץ מוכן להמראה</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg"
                  alt="צוות רפואי בפעולה בשטח"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">צוות רפואי בפעולה בשטח</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/534188/pexels-photo-534188.jpeg"
                  alt="אפליקציית SOS על מסך טלפון"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">אפליקציית SOS על מסך טלפון</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg"
                  alt="חדר שליטה ובקרה עם מסכי GPS"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">חדר שליטה ובקרה עם מסכי GPS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* קריאה לפעולה */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-[#CAA131] to-[#B8942A] rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">הצטרף ל־BAR SOS</h2>
            <p className="text-lg mb-6 opacity-90">
              לשקט נפשי וביטחון רפואי 24/7 – בכל מקום באוגנדה
            </p>
            <button className="bg-white text-[#4B361C] px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              הרשם לשירות חילוץ רפואי
            </button>
          </div>
        </div>

        {/* קישור לחברה אחות */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <p className="text-[#4B361C] mb-4">
              <strong>חברה אחות:</strong> BAR SOS היא חלק מקבוצת BAR יחד עם 
              <Link to="/services/bar-aviation" className="text-[#CAA131] hover:underline mx-1">
                BAR Aviation
              </Link>
              - שירותי תעופה מקצועיים
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

export default BarSOS;
