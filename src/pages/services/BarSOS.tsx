// src/pages/services/BarSOS.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, MapPin, Users, Clock, Heart, Star, Zap, AlertTriangle } from "lucide-react";

const BarSOS: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" dir="rtl">
      {/* Hero Section */}
      <div className="relative h-[65vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20SOS%2FBar%20sos%20Hero.webp?alt=media&token=2a86bbc7-7d04-4a49-97ea-e6b0537377ae"
          alt="BAR SOS Hero" 
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 z-20 flex items-end justify-center pb-32">
          <div className="text-center text-white px-4">
            <div className="flex justify-center mb-8">
              <img 
                src="/images/BAR-SOS-MAGNUS-logo w.webp" 
                alt="BAR SOS Logo" 
                className="h-16 w-auto drop-shadow-lg"
                loading="lazy"
              />
            </div>
            <h1 className="mb-6 md:mb-8 text-2xl md:text-4xl font-bold font-sans drop-shadow-lg">
              BAR SOS – ביטחון רפואי מלא 24/7
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-lg">
              זרוע החירום והביטחון של קבוצת BAR - כיסוי מלא 24/7 בכל רחבי אוגנדה
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-30">

        {/* תיאור כללי */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-lg md:text-2xl font-bold text-[#4B361C] mb-4 md:mb-6 border-b-2 border-[#CAA131] w-fit">
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
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-[#4B361C] mb-3 md:mb-4">
                שירותים מרכזיים
              </h2>
              <p className="text-xl text-[#4B361C]/80 max-w-3xl mx-auto">
                מערך ביטחון רפואי מתקדם עם כיסוי מלא בכל רחבי אוגנדה
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* חילוץ רפואי אווירי */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20SOS%2F472838872_1013923843877662_1204084337707649205_n.webp?alt=media&token=a7bfaaf2-05e9-4f4e-9038-e8eb4be73525"
                  alt="מסוקים ומטוסים זמינים 24/7"
                  className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-white">חילוץ אווירי</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="text-sm opacity-90 mb-2">מסוקים ומטוסים זמינים 24/7</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Shield className="w-3 h-3" />
                    <span>כיסוי מלא • תגובה מהירה</span>
                  </div>
                </div>
              </div>

              {/* אפליקציית SOS */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20SOS%2F470164252_455427107619077_4758411317914210848_n.webp?alt=media&token=6369d45c-70a0-4814-b344-a42a931ea2f2"
                  alt="אפליקציית SOS"
                  className="w-full h-48 object-cover object-bottom group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-white">אפליקציית SOS</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="text-sm opacity-90 mb-2">איתור GPS ולחצן חירום</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Phone className="w-3 h-3" />
                    <span>לחיצה אחת • מעקב בזמן אמת</span>
                  </div>
                </div>
              </div>

              {/* תקשורת לוויינית */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20SOS%2F481460072_499004936599423_3404882629094217973_n.webp?alt=media&token=e1bae3f5-b7ee-4779-9af0-3ba194b35304"
                  alt="תקשורת לוויינית"
                  className="w-full h-48 object-cover object-bottom group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-white">תקשורת לוויינית</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="text-sm opacity-90 mb-2">חיבור רציף גם באזורים מרוחקים</p>
                  <div className="flex items-center gap-2 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>כיסוי מלא • ללא הפרעות</span>
                  </div>
                </div>
              </div>

              {/* ניהול סיכונים */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20SOS%2F481906492_498996863266897_8738853515420289780_n.webp?alt=media&token=741fa032-5c4c-4608-bef2-1192da0e294d"
                  alt="מערך שליטה ובקרה בזמן אמת"
                  className="w-full h-48 object-cover object-bottom group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-white">ניהול סיכונים</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="text-sm opacity-90 mb-2">מערך שליטה ובקרה בזמן אמת</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Users className="w-3 h-3" />
                    <span>מעקב מתמיד • תגובה מיידית</span>
                  </div>
                </div>
              </div>

              {/* תמיכה רפואית */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20SOS%2FScreenshot%202025-09-08%20at%2014.42.12.webp?alt=media&token=fc5df14f-0356-4e42-a269-1bebc09eec07"
                  alt="תמיכה רפואית"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-white">תמיכה רפואית</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="text-sm opacity-90 mb-2">צוות רופאים ואמבולנסים בשטח</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Heart className="w-3 h-3 fill-red-400" />
                    <span>טיפול מקצועי • זמינות מלאה</span>
                  </div>
                </div>
              </div>

              {/* מרכז שליטה */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20SOS%2F481666433_499004996599417_2125122887142954581_n.webp?alt=media&token=fbc62c84-e092-413b-a4b9-6dca266b48e4"
                  alt="מרכז שליטה ובקרה"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-white">מרכז שליטה</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="text-sm opacity-90 mb-2">מערך שליטה ובקרה בזמן אמת</p>
                  <div className="flex items-center gap-2 text-xs">
                    <AlertTriangle className="w-3 h-3" />
                    <span>24/7 • מעקב מתמיד</span>
                  </div>
                </div>
              </div>
            </div>
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
        <div className="text-center mt-8 mb-8">
          <Link to="/" className="btn-secondary">
            ← חזרה לעמוד הבית
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BarSOS;
